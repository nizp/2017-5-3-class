import React,{Component} from "react";
class HeadModel extends Component{
  constructor(props){
    //***子组件如何要继承父组件的数据，那么只会进constructor一次，
    //***当父组件的数据发生变化的时候，就不会再进constructor，会进render
    //constructor、super中要传props
    /*
      子组件直接改变父组件的数据是会报错的，那么可以将父组件的数据继承给子组件，
      然后还是通过回调，让父组件也修改
     */
    super(props);
    // this.state = {
    //   value:this.props.val
    // }
  }
  changeVal = (ev) => {

    // this.setState({
    //   value:ev.target.value
    // })
    //当数据发生变化的时候把子组件的内容传递给父组件，让父组件修改自己的数据
    this.props.changeVal(ev.target.value);
  }
  
  keyup = (ev) => {
    if(ev.keyCode === 13){
      let json = {
        txt:ev.target.value,
        id: +new Date,
        checked:false
      }
      this.props.changeData(json);
    //  console.log(ev.target.value)
    }
  }
  
  render(){
      // console.log(this.props.val);
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange={this.changeVal}
            onKeyUp = {this.keyup}
          />
      </header>
    )
  }
}
export default HeadModel;
