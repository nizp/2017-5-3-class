import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

let  boolean = false;

class App extends Component{
  constructor(){
    super();
    this.state ={
      bo: false
    };
  }
  
  boHandler = () => {
    this.setState({
      bo:true
    })
  }
  
  logout = () => {
    this.setState({
      bo:false
    });
  }
  
  render(){
    let h = null;
    let {bo} = this.state;
    if(!bo){
      h = <h1>你没有登录</h1>
    }else{
      h = <h1>欢迎 <button
        onClick={this.logout}>
        <Link to="/">点击退出</Link>
        </button></h1>
    }
    console.log(1);
    return (
      <div>
        {h}
        <Link to="public">公共页面</Link> <br />
        <Link to="protected">受限页面</Link>
        <Route path="/public" component={Public} />
        <Route path="/protected" render = {(props)=>{
          if(!bo){
             return <Login boHandler={this.boHandler} />
          }else{
            return <Private />
          }
        }}/>
        {/* <Route path="/login" render = {(props)=>{
        
        }}/> */}
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
    let {boHandler} = this.props;
    return (
      <div>
        <button onClick={boHandler}>登陆</button>
      </div>
    )
  }
}


ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>
  ,
  document.getElementById('app')
)


if(module.hot){
  module.hot.accept();
}