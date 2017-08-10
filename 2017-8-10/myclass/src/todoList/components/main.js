import React,{Component} from "react";
class MainModel extends Component{
  render(){
    return (
      <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            checked="" />
          <ul className="todo-list">
              <li className="completed">
                  <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        checked="" />
                      <label>多多对对对</label>
                      <button className="destroy"></button>
                  </div>
              </li>
          </ul>
      </section>
    )
  }
}
export default MainModel;
