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
  
  
  render(){
    let h = null;
    let {bo} = this.state;
    if(!bo){
      h = <h1>你没有登录</h1>
    }else{
      h = <h1>欢迎 <button>退出</button></h1>
    }
    return (
      <div>
        {h}
        <Link to="public">公共页面</Link> <br />
        <Link to="login">受限页面</Link>
        <Route path="/public" component={Public} />
        <Route path="/protected" component={Private}/>
        <Route path="/login" render={(props)=>{
          if(!bo){
            return <Login boHandler={ev=>this.setState({bo:true})}/>
          }else{
            return <Redirect  to="/protected"/>
          }
        
        }} />
        
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
        <button onClick={boHandler}>sfd</button>
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