import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
import App from './App';


class Back extends Component{
  render(){
    return (
      <div className="back"></div>
    )
  }
}
class BackT extends Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    let that = this;
    $.ajax({
      url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?',
      data:{
        wd:'miaov'
      },
      dataType:'jsonp',
      success:function(data){
        that.setState({
          data
        });
      }
    })
  }
  render(){
    let {data} = this.state;
    let data2 = null;
    if(data.s){
      data2 = Object.assign(data.s);
      data2 = data2.map((e,i)=><p key={i}>{e}</p>);
    }
    //console.log(data.s);
    return (
      <div className="backT">
        {data2}
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/back" component={Back} />
        <Route path="/color/:id" component={BackT} />
      </Switch>
    </div>
  </Router>,
    document.getElementById('root'));
if(module.hot){
  module.hot.accept();
}
