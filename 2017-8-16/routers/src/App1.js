import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import './App.css';

class PPX extends Component {
  render() {
    return (
      <div>
        我是皮皮虾;
      </div>
    );
  }
}
class XLX extends Component {
  render() {
    return (
      <div>
        我是皮皮虾的好朋友---小龙虾;
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to = "/ppx">跳转到皮皮虾那里</Link>
        <Route path="/ppx" render={()=>{
          return <Redirect to="/xiaolongxia"/>
        }}/>
        <Route path="/xiaolongxia" component={XLX} />
      </div>
    );
  }
}


export default App;
