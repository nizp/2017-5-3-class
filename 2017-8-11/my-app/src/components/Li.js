import React,{Component} from "react";
import PropTypes from 'prop-types';
/*
  PropTypes是react提供的数据验证，专门用来验证props的数据类型是否为
  想要，如果不是会在控制台输出错误信息，方面快速定位错误
*/
// console.log(PropTypes);
class LiModel extends Component{
  
  constructor(){
    super();
    this.state = {
      db:false
    }
  }
  
  changeChecked = () => {
    this.props.PchangeChecked(this.props.id);
    // console.log(this.props.id);
  }
  
  remove = () => {
    this.props.remove(this.props.id);
    //console.log(this.props.id);
  }
  
  dbclick = () => {
    
    this.setState({
      db:true
    },()=>{
      this.db.focus();
    });
  }
  
  blur = () => {
    let {id,checked} = this.props;
    let newData = {
      id:id,
      checked:checked,
      txt:this.db.value
    }
    this.props.changeText(newData);
    
    this.setState({
      db:false
    });
  }
  
  
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    
    if(this.state.db){
      sClass += ' editing';
    }
    
    //editing 显示输入框的。
    
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
              <label
                onDoubleClick = {this.dbclick}
              >{txt}</label>
              <button
                className="destroy"
                onClick = {this.remove}
              ></button>
          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className ="edit"
            onBlur = {this.blur}
          />
      </li>
    )
  }
}
LiModel.propTypes = {
  checked:PropTypes.bool,
  txt:PropTypes.string
}
export default LiModel;
