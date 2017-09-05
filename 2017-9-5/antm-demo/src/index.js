import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
    1.新建项目
    2.安装antd-mobile
        yarn add antd-mobile
        yarn add babel-plugin-import --dev
    3.安装一些开发的依赖
        yarn run eject
        yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem@^3.3.1

    4.修改config/webpack.config,dev.js配置
        直接拿来用：antd-mobile-sample/create-react-app 
    
        

*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
