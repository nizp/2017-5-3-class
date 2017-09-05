import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';
class CarouselLoop extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialHeight: 200,
        }
    }
    
    render(){
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <div>
               <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.props.imgs.map(ii => (
                        <a 
                            href={ii.url} 
                            key={ii} 
                            style={hProp}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${ii.img || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                            alt="icon"
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: null,
                                });
                            }}
                        />
                        </a>))
                    }
                </Carousel> 
            </div>
        )
    }
} 
export default CarouselLoop;