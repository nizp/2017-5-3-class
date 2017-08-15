import React,{Component} from "react";
class FooterList extends Component{
  
  //通过点击切换视图
  changeView = () => {
    this.props.changeView(this.props.hash);
  }
  
  render(){
    
    
    
    /*
      React的组件可以是单标签也可以是双标签，如果是双标签
      里面可以插入DOM结构，那么子组件通过this.props.children
      获取,又通过React.Children.map方法去循环生成出结构中的
      内容.React.Children.map(数据,函数) 函数(children)
      请看下面的例子。
      
      下面的例子是，如果双标签中有DOM，走定制的DOM，
      如没有走默认的DOM（defaultChilden）
    */
    let child = null;
    let defaultChilden = [
      <span>H</span>,
      <span>W!</span>
    ];
    
    if(this.props.children){
      child =  React.Children.map(this.props.children,(child)=>{
        return child;
      });
    }else{
      child = React.Children.map(defaultChilden,(child)=>{
        return child;
      });
    }
    
    // console.log(child);
    
    return (
      <li>
        <a
          href={this.props.hash}
          className={(this.props.view == this.props.hash)?'selected':''}
          onClick = {this.changeView}
        >{this.props.name}</a>
        {child}
      </li>
    )
  }
};
export default FooterList;