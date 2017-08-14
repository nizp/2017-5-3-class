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
      db:false,
      esc:false
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
    this.db.value = this.props.txt;
    this.setState({
      db:true
    },()=>{
      this.db.focus();
    });
  }
  
  /*
    看看db中是否有value并且有没有按esc键
    如果有就使用新的数据
    如果没有就闭合焦点，清空db中的内容。
  */
  blur = () => {
    //console.log(this.state.esc);
    // console.log(this.db.value);
    if(this.db.value && !this.state.esc){
      let {id,checked} = this.props;
      let newData = {
        id:id,
        checked:checked,
        txt:this.db.value
      }
      this.props.changeText(newData);
    };
    
    this.setState({
      db:false,
      esc:false
    },()=>{
      this.db.value = '';
    });
  }
  
  //回车保存数据
  keyup = (ev) => {
    if(ev.keyCode === 13){
      
      this.blur();
      
    }
    if(ev.keyCode === 27){
      this.setState({
        esc:true
      },()=>{
        //保证esc被修改了才用回调
        this.blur();
      });
      //console.log(this.props.txt)
    }
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
            onKeyUp = {this.keyup}
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
