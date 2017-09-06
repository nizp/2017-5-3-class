import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';
//#C20C0C
class Nav extends Component{
    click = ()=> {
        //alert(1);
    }
    render(){
        return (
            <div>
                <NavBar 
                    leftContent="直播"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon 
                            key="0" 
                            type="search" 
                            style={{ marginRight: '0.32rem' }} 
                            onClick = {this.click}    
                        />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >网易新闻</NavBar>
            </div>
        )
    }
} 
export default Nav;