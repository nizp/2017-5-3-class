import React,{Component} from "react";
import PropTypes from 'prop-types';
/*
  PropTypes是react提供的数据验证，专门用来验证props的数据类型是否为
  想要，如果不是会在控制台输出错误信息，方面快速定位错误
*/
class LiModel extends Component{
  constructor(props){
    super(props);
    this.state = {
      db:false,
      txt:this.props.txt
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
      db:true,
      txt:this.props.txt
    },()=>{
      this.db.focus();
    });
  }
  
  change = () => {
    this.setState({
      txt:this.db.value
    });
  }
  
  blur = () => {
    let {id,checked} = this.props;
    let newData = {
      id:id,
      checked:checked,
      txt:this.state.txt
    }
    this.props.changeText(newData);
    
    this.setState({
      db:false
    });
  }
  
  keyup = (ev) => {
    if(ev.keyCode === 13){
      this.blur();
    }
    if(ev.keyCode === 27){
      this.setState({
        txt:this.props.txt,
        db:false
      });
      //console.log(this.props.txt)
    }
  }
  
  
  render(){
    let {txt,checked} = this.props;
    let sClass = checked?'completed':'';
    
    /*
      1.使用props的txt
      
      2.在要显示输入框的时候把value内容换成props的
    */
    console.log(this.state.txt)
    
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
            value = {this.state.txt}
            onChange = {this.change}
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