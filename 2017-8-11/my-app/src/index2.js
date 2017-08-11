import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './components/header';
import LiModel from './components/Li';

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
  allChange = (ev) => {
    // this.setState({
    //   all:!this.state.all
    // });
    let {data} = this.state;
    let data2 = Object.assign(data);
    //获取到当前checkbox的布尔值
    let {checked} = ev.target;
    //console.log(checked);
    //让所有的数据的checked都等于这个元素的布尔值
    data2.forEach((e)=>{
      e.checked = checked;
    });

    this.setState({
      data:data2
    });
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
        remove:this.remove
      }
      return <LiModel {...data} />
    });
    
    //根据数据是否为全选来定的，如果为全选all->true
    //当数据发生变化的时候，就会进render,在render中改变all值即可。
    all = data.every(e=>e.checked);
    //console.log()
    
    return (
      <div>
        <HeadModel
          changeData = {this.changeData}
          val={this.state.val}
          changeVal={this.changeVal}
        />
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked={all}
              onChange = {this.allChange}
            />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
