import React,{Component} from "react";
class HeadModel extends Component{
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value="" />
      </header>
    )
  }
}
export default HeadModel;
