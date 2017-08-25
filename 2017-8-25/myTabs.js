//写一个Tab的类
class Tab {
	constructor(that){
		//类的初始化
		
		this.settings = {
			btns:['新闻','体育','游戏','音乐'],
			contents:[
			[{
				id:0,
				content:'台风又来了'
			},
			{
				id:1,
				content:'沙特国王花1亿美元度假'
			},
			{
				id:2,
				content:'飓风“哈维”逼近美国德州 或带来严重风险'
			},
			{
				id:3,
				content:'英国推99英镑豪华冰激凌 用金箔凹造型'
			}
			],'夜王拿标杆把龙给弄死了','炉石小德逆天了','说唱不错']
		}
		
		this.that = that;
		
	}
	
	init(opt){
		$.extend(this.settings,opt);
		this.createBtns();
		this.createContents();
		this.Events();
	}
	
	createBtns(){
		$.each(this.settings.btns,(i,e)=>{
			let btn = $(`<button class="${i==0?'active':''}">${e}</button>`);
			this.that.append(btn);
		});
	}
	
	
	createContents(){
		$.each(this.settings.contents,(i,e)=>{
			let content = $(`<div class="${i==0?'show':'hide'}"></div>`);
			let inner = null;
			if(e.push){
				inner = $('<ul>');
				$.each(e,(i,e)=>{
					inner.append($(`<li>${e.content}</li>`));
				});
			}else{
				inner = e;
			}
			content.html(inner);
			this.that.append(content);
		});
	}
	
	Events(){
		let _this = this;
		$('#app').find('button').click(function(){
			_this.change($(this).index('button'));
		});
	}
	
	change(index){
		$('#app').find('button').eq(index).addClass('active').siblings('button').removeClass('active');
		
		$('#app').find('div').eq(index).addClass('show').removeClass('hide').siblings('div').addClass('hide');
		
	}
	
}




/*
	1.创建一个tabs的方法 
*/
$.fn.extend({
	tabs:function(opt){
		
		let tab = new Tab(this); //调用的JQ对象
		
		tab.init(opt);
		
		return this;  //为了链式操作
		
	}
});
