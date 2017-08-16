import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import './index.css';


/*
  整体思路:
    点击受限组件的时候，会进protected的render={}
    这个函数里面判断是否为登录状态(bl是否true)
    如果为true 就进protected组件
    否则进 login组件
    
    login组件中有一个状态默认为false
    login的render中会判断这个状态是否为真，
    如果为真，那么就进protected组件
    否则进登录结构
    
    在点击登录的时候500毫秒之后调用父组件的changeBl方法
    然后再改变自己的状态，当这个状态发生变化的时候那么
    又进当前组件的render
    
  
  点击退出:
    把bl设置为false，重定向到/目录下即可。
    
    
*/

class Public extends Component {
  render() {
    return (
      <div>
        我是公共的皮皮虾;
      </div>
    );
  }
}
class Protected extends Component {
  render() {
    return (
      <div>
        我是皮皮虾的好朋友---小龙虾私有页面;
      </div>
    );
  }
}
class Login extends Component {
  constructor(){
    super();
    this.state = {
      b:false
    }
  }
  /*
    当点击登录的时候一秒后优先改变父级的bool值，改变之后重新
    改变当前组件的状态，那么就会进render，再通过改变的this.state.b
    来判断是否需要重定向。
  */
  click = () => {
    let {changeBl} = this.props;
    let {b} = this.state;
    //一秒钟之后
    setTimeout(()=>{
      //改变父组件的bl值
      changeBl();
      //改变当前组件的b值
      this.setState({
        b:true
      })
    },500);
  }
  render() {
    //通过this.state.b来判断是是否重定向protected
    if(this.state.b){
      return (<Redirect to="/protected" />);
    }
    return (
      <div>
        <button onClick={this.click}>
          请登录
        </button>
        <p>小龙虾不是每个人都能吃的!</p>
      </div>
    );
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      bool:false
    }
  }
  
  changeBl = () => {
    this.setState({
      bool:true
    });
  }
  //点击logout的时候改变当前的bool为false
  logout = () => {
    this.setState({
      bool : false
    });
  }
  
  render() {
    let {bool} = this.state;
    let h = null;
    if(bool){
      h = <h1>欢迎来品尝虾的味道
        <button onClick={this.logout}>
          <Link to="/">退出</Link>
        </button>
      </h1>
    }else{
      h = <h1>你没有登录</h1>
    }

    return (
      <div className="App">
        {h}
        <button>
          <Link to="/public">公共页面</Link>
        </button><br />
        <button>
          <Link to="/protected">受限页面</Link>
        </button>
        <Route path="/public" component={Public}/>
        <Route path="/protected" render = {()=>{
          if(bool){
            return <Protected />
          }else{
            return <Redirect to="/login" />
          }
        }}/>
        <Route path="/login" render={(props)=>{
          return <Login changeBl={this.changeBl}/>
        }} />
      </div>
    );
  }
}


export default App;
