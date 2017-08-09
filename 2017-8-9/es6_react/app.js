import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/*
  ***可以不写constructor，但是一旦写了，就要写super
*/
class Ul extends Component{
  constructor(){
    super();
    this.state = {
      list:['其实','不难'],
      num:0
    }
    this.click = this.click.bind(this);
  }
  click(){
    let {list,num} = this.state;
    let arr = Object.assign(list);
    num ++;
    arr.push(num);
    this.setState({
      list:arr,
      num
    });
  }
  render(){
    let {list} = this.state;
    let newArr = null;
    newArr = list.map((e,i)=>{
      return <li key={i}>{e}</li>
    });
    return (
      <div>
        <button
          onClick = {this.click}
          >按钮</button>
        <ul>
          {newArr}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Ul />,document.getElementById('app'))

