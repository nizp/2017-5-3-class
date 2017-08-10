import React,{Component} from 'react';

/*
  
  react中的表单：
    受限与非受限
    
    受限：
      只要是表单元素加了默认值为受限组件，默认值是根据状态来修改的，
      只要状态不改那么里面的值就不会变。
      select
      checkbox
      radio
      textarea
      
      只要是更改表单元素可以通用onChange
      
      受限组件如何解决？
        1.绑onChange事件
        
        2.defaultValue/defaultChecked
          在表单元素身上加了defaultValue/defaultChecked之后，
          表单元素就不再是受限组件了


 */

class Inputs extends Component{
  constructor(){
    super();
    this.state = {
      val:'miaov12345',
      city:'上海'
    }
  }
  
  changeVal = (ev)=>{
    // console.log(ev.target.value);
    this.setState({
      val:ev.target.value
    },()=>{
      //当渲染完成之后
      console.log(this.state.val)
    })
  }
  
  changeSelect = (ev) => {
    this.setState({
      city:ev.target.value
    });
    // console.log(ev.target.value)
  }
  
  render(){
    return (
      <div>
        <input
          type = "text"
          // value = {this.state.val}
          defaultValue="123456"
          // onChange = {this.changeVal}
        />
        <select value={this.state.city} onChange={this.changeSelect}>
          <option>上海</option>
          <option>北京</option>
          <option>深圳</option>
        </select>
        <input type="checkbox" defaultChecked/>
        <span>{this.state.city}</span>
      </div>
    )
  }
}

export default Inputs;


