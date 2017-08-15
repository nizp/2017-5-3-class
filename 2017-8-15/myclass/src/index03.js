import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Children from './newDay/Children';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


/*
  语法：
    <Router>
      <App />
    </Router>
    
    <Router>
      <Route path="/" component={组件}/>
    </Router>
    
    注意：
      Router中只能有一个顶层标签
    
*/
class App extends Component {
  render(){
    return (
      <div>
        <button>
          <Link to="/">回到首页</Link>
        </button>
        <button>
          <Link to="/ppx">去找皮皮虾玩</Link>
        </button>
        <p>
          你好,世界!
        </p>
      </div>
    )
  }
}

class PPA extends Component {
  render(){
    return (
      <div>HW!</div>
    )
  }
}
class PPX extends Component {
  render(){
    return (
      <div>
        <div>我是皮皮虾</div>
        <button>
          <Link to="/ppa">找ppa</Link>
        </button>
      </div>
    )
  }
}


  // <App path="/ppa" component={PPA}/>
ReactDOM.render(
  (
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/ppa" component={PPA}/>
        <Route path="/ppx" component={PPX}/>
      </div>
    </Router>
  ),
  document.getElementById('app')
)



if(module.hot){
  module.hot.accept();
}
