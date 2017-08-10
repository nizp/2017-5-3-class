import React,{Component} from "react";
import ReactDOM from "react-dom";

class App extends Component{
  render(){
    return (
      <div>
        123456
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
