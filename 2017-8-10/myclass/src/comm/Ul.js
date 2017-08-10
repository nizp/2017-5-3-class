import React,{Component} from 'react';
import Li from './Li';
class Ul extends Component{
  constructor(){
    /*
      
      bind():
        只改this指向不调用
      this.click = this.click.bind()
      
      当state发生变化的时候，那么就会执行一次render
    */
    
    super();
    this.state = {
      arr:['今天','还算','顺利']
    }
  }
  click = () => {
    let {arr} = this.state;
    let arr3 = Object.assign(arr);
    arr3.push('呵呵');
    
    this.setState({
      arr:arr3
    });
    console.log(arr);
  }
  render(){
    let {arr} = this.state;
    let list = null;

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
      <div>
        <button
          onClick = {this.click}
          >按钮</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
export default Ul;