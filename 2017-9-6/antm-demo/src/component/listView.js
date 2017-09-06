import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListView, RefreshControl } from "antd-mobile";
import CarouselLoop from "./carousel";

/*
    需要在listView中嵌套轮播图

    通过ListView下的一个属性：
        renderHeader = {()=>(<div>处理过的轮播图</div>)}

    ***注意：
        直接在renderHeader包轮播图组件是不会显示的，
        必须将轮播图组件定义为一个自定义的组件

*/
// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
/*
    被data所影响的有：
        index,
        obj
*/
// let index = data.length - 1;

let pageIndex = 0;
let onOff = false;

class Demo extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    // //生成数据的
   
    this.initData = [];
    
    // for (let i = 0; i < 9; i++) {
    //   this.initData.push(`r${i}`);
    // }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
      height: document.documentElement.clientHeight,
      isLoading:false
    };
  }

  componentDidMount() {

    this.manuallyRefresh = true;
    setTimeout(() => this.setState({ refreshing: true }), 10);

    // Set the appropriate height
    setTimeout(
      () =>
        this.setState({
          height:
            this.state.height - ReactDOM.findDOMNode(this.refs.lv).offsetTop,
            isLoading: false,
          }),
      0
    );

    // handle https://github.com/ant-design/ant-design-mobile/issues/1588
    this.refs.lv.getInnerViewNode().addEventListener(
      "touchstart",
      (this.ts = e => {
        this.tsPageY = e.touches[0].pageY;
      })
    );
    this.refs.lv.getInnerViewNode().addEventListener(
      "touchmove",
      (this.tm = e => {
        this.tmPageY = e.touches[0].pageY;
        if (
          this.tmPageY > this.tsPageY &&
          this.st <= 0 &&
          document.body.scrollTop > 0
        ) {
          console.log("start pull to refresh");
          this.domScroller.options.preventDefaultOnTouchMove = false;
        } else {
          this.domScroller.options.preventDefaultOnTouchMove = undefined;
        }
      })
    );
  }
  componentWillUnmount() {
    this.refs.lv.getInnerViewNode().removeEventListener("touchstart", this.ts);
    this.refs.lv.getInnerViewNode().removeEventListener("touchmove", this.tm);
  }
  onScroll = e => {
    this.st = e.scroller.getValues().top;
    this.domScroller = e;
  };
  //下拉刷新
  onRefresh = () => {
    console.log("onRefresh");
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }
  //每次上拉刷新的时候都会拿到10条或者20条数据
   let arr = [1,2].sort(()=>Math.random()-.5);
   this.props.changeData(arr[0]* 10);

    setTimeout(() => {
      //随机去排列这些数据，dataSource会重新渲染页面。
      this.initData = this.props.data.sort(()=>Math.random() - .5);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false
      });
    }, 1000);
  };

  //下拉加载更多...
  onEndReached = ()=>{
   
    if (this.state.isLoading) return;

    this.setState({ isLoading: true });
    pageIndex ++;
   // console.log(pageIndex)
    this.props.changeData(pageIndex * 10);
    setTimeout(() => {
      this.initData = this.props.data.reverse();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        isLoading: false
      });
    }, 2000);
  }

  render() {
   
    let index = 0;
    let { data } = this.props;

    this.initData = data;
    if (data.length) index = data.length - 1;

    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: "#F5F5F9",
          height: 8,
          borderTop: "1px solid #ECECED",
          borderBottom: "1px solid #ECECED"
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = 0;
      }
      let obj = [];

      if (data.length) obj = data[index--];

      // console.log(obj.picInfo[0])
      if(!obj.picInfo[0]){
        return null;
      }
      // console.log(obj)
      return (
        <a href={obj.link}>
          <div
            key={rowID}
            style={{
              padding: "0.08rem 0.16rem",
              backgroundColor: "white"
            }}
          >
            <div style={{ display: "-webkit-box", display: "flex" }}>
              <img
                style={{ width:"2.2rem",height: "1.6rem", marginRight: "0.08rem" }}
                src={obj.picInfo[0].url}
              />

              <div style={{ display: "inline-block" }}>
                <div style={{ margin: "0.1rem 0 0.2rem 0" }}>
                  <h3
                    style={{
                      padding: 2,
                      marginBottom: "0.08rem",
                      borderBottom: "1px solid #F6F6F6"
                    }}
                  >
                    {obj.title}
                  </h3>
                </div>
                <div>
                  <span style={{ fontSize: "1.6em", color: "#FF6E27" }}>
                    {obj.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      );
    };
    return (
      <ListView
        ref="lv"
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={5}
        pageSize={5}
        renderHeader={() => (
          <div style={{ height: "3.75rem", width: "8rem" }}>
            <CarouselLoop imgs={this.props.imgs} />
          </div>
        )}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={200}
        style={{
          height: this.state.height,
          border: "1px solid #ddd",
          margin: "0.1rem 0"
        }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        onScroll={this.onScroll}
        onEndReached={this.onEndReached}
        onEndReachedThreshold = {20}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
      />
    );
  }
}
export default Demo;
