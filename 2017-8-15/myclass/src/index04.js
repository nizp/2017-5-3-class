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
      </div>
    )
  }
}

// const Child = ({ match }) => {
//   console.log(match);
//   return (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>)
// }

/*
  
component里面即可以写组件，也可以接收一个函数
在这个函数中需要return一个组件。
这个函数的参数中，有个match,他可以显示当前的路由是什么？

match = {
  path: "/:id",
  url: "/app",
  isExact: true,
  params: {id:app}
}
match.params.id  就是路由的地址（/后面的地址）
这个id是通过 path="/:id"

/:id就是 / + 路由地址，通过match.params.id可以很方便的找到当前的路由是谁



  
  
 */
const Child = ({ match }) => {
  console.log(match);
  let arr = [
    {ppx:<PPX />},
    {app:<App />},
    {ppa:<PPA />}
  ];
  let r = arr.find((e)=>e[match.params.id]);
  console.log(r[match.params.id])
  return (r[match.params.id])
}


ReactDOM.render(
  (
    <Router>
      <div>
        <ul>
          <li><Link to="/app">App</Link></li>
          <li><Link to="/ppx">PPX</Link></li>
          <li><Link to="/ppa">PPA</Link></li>
        </ul>
        <Route path="/:id"  component={Child}/>
      </div>
    </Router>
  ),
  document.getElementById('app')
)



if(module.hot){
  module.hot.accept();
}
