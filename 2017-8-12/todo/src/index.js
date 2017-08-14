import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './components/header';
import LiModel from './components/Li';
import FootModel from './components/footer';

/*
  ref:方便我们在当前组件下快速获取某个组件或者元素。
  
  读：
    console.log(this.head)
    
  写:
    <header ref = {(elem)=>{this.head = elem}}></header>
    
  注意：
      如果没在当前组件上设置ref（跨组件），那么获取的值为undefined。
  
  
      生命周期：
          在react中从挂载组件到卸载组件的过程中在特定的情况下
          定义了一些回调函数，当某个需求需要在某个阶段执行的时候
          把需求内容写在预留的钩子函数中即可。
          
          主要有挂载阶段 ->数据更新阶段->卸载阶段
*/

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      val:'',
      data:[],
      view:'#/all'
    }
  }
  /*
    在react
  */
  componentWillMount(){
    console.log('挂载之前')
  }
  componentDidMount(){
    this.setState({
      data:getItem('data')
    });
    console.log('挂载之后');
  }
  componentWillUnmount(){
    console.log('组件卸载');
  }
  
  //切换checked
  PchangeChecked = (id) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    
    this.setState({
      data:data2
    });
    
  }
  //修改输入框的内容
  changeVal = (newVal) => {
    this.setState({
      val:newVal
    })
  }
  
  click = () => {
    this.setState({
      val:'3213skldjsakdjsakd'
    })
  }
  
  //添加数据
  changeData = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.unshift(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  
  //删除
  remove = (id) => {
    let {data} = this.state;
    let data2 = null;
    
    data2 = data.filter((e,i)=>{
      return e.id != id;
    });
    
    this.setState({
      data:data2
    });

  }
  //全选
  allChange = () => {
    // let {checked} = ev.target;
    let {checked} = this.all;
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    console.log(this.refs.head);
    
    data2.forEach(e => e.checked = checked);
    
    this.setState({
      data:data2
    });
    
    //组件卸载的方法
    //ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    
    // console.log(data2)
  }
  
  //替换数据
  changeText = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2.forEach((e,i)=>{
      if(e.id === newData.id){
        data2.splice(i,1,newData)
      }
    });
    
    this.setState({
      data:data2
    });
    console.log(data2);
    
  }
  
  //清除完成项
  clearFinish = () => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    
    data2 = data2.filter(e=>{
      return !e.checked;
    });
    
    this.setState({
      data:data2
    });
  }
  
  //改变视图
  changeView = (newView) => {
    this.setState({
      view:newView
    });
  }
  
  render(){
    console.log(123);
    //下面这2句话是放在div下的。
    // <button onClick={this.click}>点击改变老爹数据</button>
    // <span>{this.state.val}</span>
    let {data} = this.state;
    let list = null;
    let all = false;
    //就是全选的结构
    let changeAll = null;
    let footer = null;
    //let filter = [];
    let filterView = Object.assign(data);
    let len = data.length;
    
    
    //过滤未选中的
    // filter = data.filter(e=>{
    //   return !e.checked
    // });
    
    
    filterView = filterView.filter(e=>{
      //如果本次循环的e.checked为选中状态，那么用总长度 - 1
      if(e.checked)len--;
      switch (this.state.view) {
        case '#/active':
          return !e.checked;
          break;
        case '#/completed':
          return e.checked;
          break;
        default:
          return Object.assign(data);
          break;
      }
    });
    
    // switch (this.state.view) {
    //   case '#/active':
    //     filterView = filterView.filter(e=>{
    //       return !e.checked;
    //     });
    //     break;
    //   case '#/completed':
    //     filterView = filterView.filter(e=>{
    //       return e.checked;
    //     });
    //     break;
    //   default:
    //     filterView = Object.assign(data);
    //     break;
    // }
    
  //  console.log(filterView)
    
    
    
    list = filterView.map((e,i)=>{
      let data = {
        key:i,
        id:e.id,
        txt:e.txt,
        checked:e.checked,
        PchangeChecked:this.PchangeChecked,
        remove:this.remove,
        changeText:this.changeText
      }
      return <LiModel {...data} />
    });
    
    
    if(data.length){
      all = data.every(e => e.checked);
      
      changeAll = (
        <input
          className="toggle-all"
          type="checkbox"
          checked = {all}
          onChange = {this.allChange}
          ref = {(elem) => {this.all = elem}}
        />
      )
      
      //放置footer的地方
      let footerData = {
        num:len,
        clearFinish:this.clearFinish,
        changeView:this.changeView,
        view:this.state.view
        
      }
      footer = (<FootModel {...footerData}/>);
      
      // console.log(data);
      
      /*
        只要数据发生变化，那么就会进render，进了render就会把最新数据存到本地。
       */
      localStorage.setItem('data',JSON.stringify(data));
      
      
    }
    
  
    
    
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
          
        />
        <section className="main" ref = {(elem)=>{this.main = elem}}>
            {changeAll}
            <ul className="todo-list">
              {list}
            </ul>
        </section>
        {footer}
      </div>
    )
  }
}

//获取本地的数据，如果本地有数据那么返回本地数据，否则返回[{checked:false,txt:'呵呵',id:1}]
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{checked:false,txt:'呵呵',id:1}];
}

//只会进一次
ReactDOM.render(<App/>,document.getElementById('app'));


if (module.hot) {
  module.hot.accept();
}
