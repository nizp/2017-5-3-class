import React, { Component } from 'react';
import Nav from './component/nav';
import NewTab from './component/tabs';
import './App.css';
document.documentElement.style.fontSize = window.innerWidth/8 + 'px';
// document.addEventListener('touchstart',function(ev){
//   ev.preventDefault();
// });
// import { NavBar, Icon } from 'antd-mobile';
// console.log(Nav);
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <NewTab />
      </div>
    );
  }
}

export default App;
