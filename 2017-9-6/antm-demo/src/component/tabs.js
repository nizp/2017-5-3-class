import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react';
import ListV from './listView';
import JSONP from 'fetch-jsonp';
//WhiteSpace 缝隙
const TabPane = Tabs.TabPane;
const arr = [
    '新闻',
    '推荐',
    '体育',
    '娱乐',
    '财经',
    '军事',
    '汽车',
    '时尚'
];
// const indexData = [
//     'list',
//     'list'
// ]
// const indexData = [
//     'BBM54PGA',
//     'BA8E6OEO',
//     'BA10TA81',
//     'BA8EE5GM',
//     'BAI67OGG',
//     'BA8DOPCS',
//     'BA8F6ICN'
// ]

let obj = {
    ['新闻']: [{url:'http://www.miaov.com',img:'AiyWuByWklrrUDlFignR'}, {url:'http://taobao.com',img:'TekJlZRVCjLFexlOCuWn'},{url:'http://www.163.com',img:'IJOtIlfsYdTyaDTRVrLI'}],
    ['推荐']: [{url:'http://taobao.com',img:'TekJlZRVCjLFexlOCuWn'},{url:'http://www.163.com',img:'IJOtIlfsYdTyaDTRVrLI'}],
}


//滑动导航的btn以及滑块对应的列表
const makeTabPane = key => (
  <TabPane tab={key} key={key}></TabPane>
);

//生成多个btn的函数
const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i < count.length; i++) {
    result.push(makeTabPane(count[i]));
  }
  return result;
};



class NewsTab extends Component{
    constructor(){
        super();
        this.state = {
            imgs:obj['新闻'],
            data:[]
        }
    }
    componentDidMount(){

        JSONP('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data)
            this.setState({
                data: data.news  
            });
        })   
    }

    changeData = (num) =>{

        JSONP(`http://3g.163.com/touch/jsonp/sy/recommend/0-${num}.html`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({
                data: data.list
            });
        })

    }

    callback = (key) => {

    }
    handleTabClick = (key) => {
        JSONP('http://3g.163.com/touch/jsonp/sy/recommend/0-20.html')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
           // console.log(data[indexData[arr.findIndex((e)=> e==key)]])
            this.setState({
                data: data.list,
                imgs:[...obj[key]]
            });
        })
    }
    render(){
        // console.log(this.state.data)
        /*
            defaultActiveKey设置默认为哪个页面
        */
        return (
            <div>
                <Tabs 
                    defaultActiveKey="新闻" 
                    onChange={this.callback} 
                    pageSize={5} 
                    onTabClick={this.handleTabClick}
                >
                {makeMultiTabPane(arr)}
                </Tabs>

                <ListV 
                    imgs={this.state.imgs}
                    data={this.state.data}
                    changeData = {this.changeData}
                />
            </div>
        )
    }
} 
export default NewsTab;