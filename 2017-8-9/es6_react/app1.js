import ppa from './comm/ppa';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';


// class H1 extends Component{
//     render(){
//       return (
//         <h1>你好!世界!!!!</h1>
//       )
//     }
// }

class Ul extends Component{
    constructor(){
      super();
      //等同于getInitialState
      this.state = {
        arr : []
      }
      
      this.click = this.click.bind(this);
      
    }
    click(){
      let arr2 = ['ES6','写起来','更方便!'];
      this.setState({
        arr:arr2
      });
    }
    render(){
      let {arr} = this.state;
      let list = null;
      
      list = arr.map((e,i)=>{
        let data = {
          key:i
        };
      
        return <li  {...data}>{e}</li>
      
      });
      
      
      return (
        <div>
          <button onClick={this.click}>按钮</button>
          <ul>
            {list}
          </ul>
        </div>
      )
    }
}

ReactDOM.render(<Ul />,document.getElementById('app'));


