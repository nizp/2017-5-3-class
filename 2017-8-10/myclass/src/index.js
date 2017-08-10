import React,{Component} from "react";
import ReactDOM from "react-dom";
import './todoList/css/index.css';
import HeadModel from './todoList/components/header';
import MainModel from './todoList/components/main';

class App extends Component{
  render(){
    return (
      <div>
        <HeadModel />
        <MainModel />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
