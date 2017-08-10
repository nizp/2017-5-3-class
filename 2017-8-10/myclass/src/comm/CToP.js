import React from 'react';
import '../css/li.css';

/*
  子组件传递给父组件通过回调函数来让父组件处理数据。
  
  1.把父组件数据处理函数传递给子组件
  
  2.当子组件触发某个事件的时候，调用父组件的这个数据处理函数
    会传递一些id之类数据
    
  
*/
//父组件
class CToP extends React.Component{
  constructor(){
    super();
    this.state = {
      arr:[
        {text:'一个对象',checked:false,id:1},
        {text:'两个对象',checked:false,id:2},
        {text:'三个对象',checked:false,id:3},
        {text:'四个对象',checked:true,id:4}]
    }
  }
  //修改checked值的方法
  changeChild = (id) => {
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    
    arr2.forEach((e,i)=>{
      if(e.id == id){
        e.checked = !e.checked;
      }
    });
    
    // console.log(arr2);
    
    this.setState({
      arr:arr2
    });
    
    
  }
  
  render(){
    
    let {arr} = this.state;
    let list = null;

    list = arr.map((e,i)=>{
      let data = {
        txt:e.text,
        num:i,
        key:i,
        id:e.id,
        checked:e.checked,
        //把父组件的数据处理函数传递给子组件
        changeChild:this.changeChild
      }
      //父组件的数据传递给子组件通过属性来传递
      return <Li {...data}/>
    });
    return (
      <ul>{list}</ul>
    )
  }
}

//子组件
class Li extends React.Component{
  //当子组件触发change的时候调用父组件的数据处理函数并且把触发
  //的数据的id传递给父组件。
  change = () => {
    //console.log(this.props.changeChild);
    this.props.changeChild(this.props.id);
  }
  render(){
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.change}
        />
        <p>{this.props.txt}</p>
      </li>
    )
  }
}

export default CToP;