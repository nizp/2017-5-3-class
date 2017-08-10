import React,{Component} from 'react';
import Li from './Li';
class Ul extends Component{
  constructor(){
    super();
    this.state = {
      arr:['今天','还算','顺利']
    }
  }
  render(){
    let {arr} = this.state;
    let list = null;
    
    // list = arr.map((e,i)=>{
    //   return <li key={i}><span>{e}</span></li>
    // });
    //
    list = arr.map((e,i)=>{
      let data = {
        txt:e,
        num:i,
        key:i
      }
      //父组件的数据传递给子组件通过属性来传递
      return <Li {...data}/>
    });
    
    return (
      <ul>
        {list}
      </ul>
    )
  }
}
export default Ul;