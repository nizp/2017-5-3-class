import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './components/header';
import LiModel from './components/Li';

/*
  ref:方便我们在当前组件下快速获取某个组件或者元素。
  
  读：
    console.log(this.head)
    
  写:
    <header ref = {(elem)=>{this.head = elem}}></header>
    
  注意：
      如果没在当前组件上设置ref（跨组件），那么获取的值为undefined。
  
*/

class App extends Component{
  constructor(){
    super();
  
    this.state = {
      val:'',
      data:[
        {txt:'今天天气还不错',checked:false,id:1},
        {txt:'今天局地有雷暴',checked:false,id:2}
      ]
    }
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
  
  
  render(){
    //下面这2句话是放在div下的。
    // <button onClick={this.click}>点击改变老爹数据</button>
    // <span>{this.state.val}</span>
    let {data} = this.state;
    let list = null;
    let all = false;
    
    list = data.map((e,i)=>{
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
    
    all = data.every(e => e.checked);
    
    
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
          
        />
        <section className="main" ref = {(elem)=>{this.main = elem}}>
            <input
              className="toggle-all"
              type="checkbox"
              checked = {all}
              onChange = {this.allChange}
              ref = {(elem) => {this.all = elem}}
            />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
        <footer
          className="footer" >
          <span className="todo-count">
            <strong>0</strong>
            <span>条未选中</span>
          </span>
          <ul className="filters">
            <li>
              <a href="#/all" className="selected">全部</a>
            </li>
            <li>
              <a href="#/active">未完成</a>
            </li>
            <li>
              <a href="#/completed">已完成</a>
            </li>
          </ul>
          <button
            className="clear-completed"
          >
              清除完成项
          </button>
        </footer>
        
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
