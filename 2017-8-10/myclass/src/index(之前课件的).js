import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import Ul from './comm/Ul';
// import Inputs from './comm/inputs';
// import Todo from './comm/todo';
import CToP from './comm/CToP';


ReactDOM.render(<CToP />, document.getElementById('root'));


// ReactDOM.render(<Todo />, document.getElementById('root'));


// ReactDOM.render(<Inputs />, document.getElementById('root'));

//ReactDOM.render(<Ul />, document.getElementById('root'));
// registerServiceWorker();
if (module.hot) {
  module.hot.accept();
}

// import Li from './comm/Li';

/*
  
  this.state
  this.setState()
  this.props
  
  从父组件传递给子组件数据的方式是通过this.props来进行接收的。
  
  
  单向数据类：
      父组件的数据流向子组件是单向的，父级的数据只能父级修改，子级不允许修改
    
 */

// class Ul extends Component{
//   constructor(){
//     super();
//     this.state = {
//       arr:['今天','还算','顺利']
//     }
//   }
//   render(){
//     let {arr} = this.state;
//     let list = null;
//
//     // list = arr.map((e,i)=>{
//     //   return <li key={i}><span>{e}</span></li>
//     // });
//     //
//     list = arr.map((e,i)=>{
//       let data = {
//         txt:e,
//         num:i,
//         key:i
//       }
//       //父组件的数据传递给子组件通过属性来传递
//       return <Li {...data}/>
//     });
//
//     return (
//       <ul>
//         {list}
//       </ul>
//     )
//   }
// }

