function Tab(json){
	this.settings = {
		navs:['新闻','体育','社会','技术'],
		contents:['北京近期大到暴雨','可以划船','解放军战士划船救人了','10年专业开船经验'],
		box:document.querySelector('#box'),
		css:'1.css'
	};
	
	for(var attr in json){
		this.settings[attr] = json[attr];
	}
	
	this.btns = this.divs = null;
	this.init();
	
}

Tab.prototype.init = function(){
	this.createCss();
	this.createBtn();
	this.createDiv();
	this.Events();
}
Tab.prototype.createBtn = function(){
	var _this = this;
	this.settings.navs.forEach(function(e,i){
		var btn = document.createElement('button');
		if(i == 0)btn.className = 'active';
		btn.innerHTML = e;
		_this.settings.box.appendChild(btn);
		
	});
}
Tab.prototype.createDiv = function(){
	var _this = this;
	this.settings.contents.forEach(function(e,i){
		var divs = document.createElement('div');
		if(i == 0)divs.className = 'show';
		divs.innerHTML = e;
		_this.settings.box.appendChild(divs);
		
	});
}
Tab.prototype.Events = function(){
	var _this = this;
	this.btns = this.settings.box.getElementsByTagName('button');
	this.divs = this.settings.box.getElementsByTagName('div');
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].index = i;
		this.btns[i].onclick = function(){
			_this.change(this);
		}
	}
	
}
Tab.prototype.change = function(that){
	
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].className = this.divs[i].className = '';
	}
	
	that.className = 'active';
	this.divs[that.index].className = 'show';
	
}
Tab.prototype.createCss = function(){
	var _link = document.createElement('link');
	_link.href = this.settings.css;
	_link.rel = 'stylesheet';
	_link.type="text/css";
	document.getElementsByTagName('head')[0].appendChild(_link);
}


