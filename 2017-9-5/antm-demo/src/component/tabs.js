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
    '社会',
    '财经',
    '军事',
    '时尚',
    '游戏'
];
const indexData = [
    'news',
    'live'
]

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
    callback = (key) => {

    }
    handleTabClick = (key) => {
        JSONP('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data[indexData[arr.findIndex((e)=> e==key)]])
            
            this.setState({
                data: data[indexData[arr.findIndex((e)=> e==key)]],
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
                />
            </div>
        )
    }
} 
export default NewsTab;