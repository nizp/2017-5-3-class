# TweenMax #

	t.to('#box',2,{
		left:200
		autoAlpha:0//visibility:hidden 将元素隐藏
		x:400，y:400//改变translate值，以矩阵的形式,推荐只用xy
		scale:0.5
		scaleX:0.5
		scaleY:0.5//缩放
		rotation:45//旋转
		skewX:60//斜切
	});
## 运动效果 ##
		t.to('#box',2,{
			rotationX:45
			ease:Linear.easeIn,
			ease:Linear.easeOut,
			ease:Linear.easeInOut,
		})
		1:Linear 线性变化
		2:Back变化
		3:Bounce弹跳变化
		4:Circ 圆形变化
		5:Cublic 立方体变化
		6:Elastic:橡皮圈变化
		7:Expo 爆炸变化
		8:Quad变化
		9:Quint变化
		10:Sine正弦变化
## bezier贝塞尔曲线 ##

	var t=new TimelineMax();
		//cycle这个属性只有staggerTo,staggerFrom有//
		t.staggerTo('#con',2,{
			cycle:{
				bezier:function(){
					return [
					{x:0,y:0},
					{x:200,y:200},
					{x:400,y:0},
					{x:600,y:200},
					]
				}
			}
		})
## 回调函数 ##
	onStart:function(){} 运动开始时，只有一次。
	onUpdate：function() 元素位置发生改变时，记录多次
	onComplete：function()元素运动结束时，只有一次

	t.staggerTo('div',2,{
	//加上3D效果，变换原点
		t.set('div',{transformPerspective:300,transformOrigin:'left'})
		onComplete:function(){
			//每次完成动画时的元素
			console.log(this.target);
		}