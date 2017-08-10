import React,{Component} from 'react';
import Li from './Li';

class Todo extends Component{
  constructor(){
    super();
    this.state = {
      val:'',
      arr:['这是第一条数据']
    }
  }
  
  keyup = (ev) => {
    if(ev.keyCode == 13){
      
      let {arr} = this.state;
      let arr2 = Object.assign(arr);
      arr2.push(ev.target.value);
      
      this.setState({
        arr:arr2,
        val:''
      });
      //不是太推荐直接操作DOM
      //ev.target.value = '';
      //console.log(1);
    }
  }
  
  change = (ev) =>{
    this.setState({
      val:ev.target.value
    })
  }
  
  render(){
    let {arr} = this.state;
    let arr2 = [];
    
    arr2 = arr.map((e,i)=>{
      let data = {
        key:i,
        txt:e,
        num:i
      }
      return <Li {...data}/>
    });
    
    return (
      <div>
        <input
          type="text"
          value={this.state.val}
          // defaultValue={this.state.val}
          onKeyUp = {this.keyup}
          onChange = {this.change}
        />
        <ul>
          {arr2}
        </ul>
      </div>
    )
  }
}
export default Todo;
