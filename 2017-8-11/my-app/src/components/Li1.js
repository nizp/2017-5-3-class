import React,{Component} from "react";
import PropTypes from 'prop-types';
/*
  PropTypes是react提供的数据验证，专门用来验证props的数据类型是否为
  想要，如果不是会在控制台输出错误信息，方面快速定位错误
*/
// console.log(PropTypes);
class LiModel extends Component{
  changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
    // console.log(this.props.id);
  }
  
  remove = () => {
    this.props.remove(this.props.id);
    //console.log(this.props.id);
  }
  
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    // console.log(checked)
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange = {this.changeChecked}
                checked={checked}
              />
              <label>{txt}</label>
              <button
                className="destroy"
                onClick = {this.remove}
              ></button>
          </div>
      </li>
    )
  }
}
LiModel.propTypes = {
  checked:PropTypes.bool,
  txt:PropTypes.string
}
export default LiModel;
