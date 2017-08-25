import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
class App extends Component {
	componentDidMount(){
		$.ajax({
		    url: "http://yusihong.com.cn",
		    dataType: "json",
		    async: true,
		    data: {},
		    type: "GET",
		    success: function(data) {
		        console.log(data);
		    },
		    error: function(err) {
		        console.log(err);
		    }
		});
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
