import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

let  boolean = false;

class App extends Component{
  constructor(){
    super();
  }
  render(){
    let h = null;
    if(!boolean){
      h = <h1>你没有登录</h1>
    }else{
      h = <h1>欢迎 <button>退出</button></h1>
    }
    return (
      <div>
        {h}
        <Link to="public">公共页面</Link> <br />
        <Link to="login">受限页面</Link>
      </div>
    )
  }
}
class Public extends Component{
  render(){
    return (
      <div>
        我是公共组件
      </div>
    )
  }
}
class Private extends Component{
  render(){
    return (
      <div >
        我是受限组件
      </div>
    )
  }
}
class Login extends Component{
  render(){
    return (
      <div>
        <Router>
          <Route path="/" component={App}/>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
  ,
  document.getElementById('app')
)


if(module.hot){
  module.hot.accept();
}