import React,{Component} from 'react';
import '../css/li.css';
class Li extends Component{
  //子组件用this.props.xx去接收
  render(){
    return (
      <li>
        <span>{this.props.num}</span>
        <p>  {this.props.txt}</p>
      </li>
    )
  }
}
export default Li;