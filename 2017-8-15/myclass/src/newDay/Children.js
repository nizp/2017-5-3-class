import React,{Component} from 'react';

class Children extends Component{
  constructor(){
    super();
    this.state = {
      arr:['全部','未选中','已选中']
    }
  }
  render(){
    let btns = [];
    if(this.props.children){
      
      btns = React.Children.map(this.props.children,(children)=>{
        return children;
      });
      
      
    }else{
      btns = React.Children.map(this.state.arr,(children)=>{
        return <button>{children}</button>
      });
    }
    return (
      <div>{btns}</div>
    )
  }
}
export default Children;

// export default function(props){
//   //没有this.state
//   let {data} = props;
//   let state = {
//     num:0
//   }
//   console.log(this)
//
//   function click(){
//
//     state.num = ++state.num;
//   }
//
//   console.log(data);
//   return (
//     <div onClick={click.bind(this)}>{state.num}</div>
//   )
// }