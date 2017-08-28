class Uploads {
	constructor(that){
		/*
			btn:点击按钮
			readFile:用户选择的图片
		*/
		this.settings = {
			readFile:null,
			btn:null,
			view:function(){},
			actionMount:function(){},
			uploadEndMount:function(){},
			progressMount:function(){}
		}
		this.arr = []; //每次选中图片的时候，把不重复的图片push到这个数组中
		//当点击确定按钮的时候，一次性把数组中的数据全部上传。
		this.num = 0;
	}
	
	
	init(opt){
		let _this = this;
		$.extend(this.settings,opt);
		
		//选择图片
		if(this.settings.readFile){
			
			
			this.settings.readFile.change(function(ev){
				
				_this.addPic(this.files[0]);
				
	
				ev.target.value = '';
			});
		}
		
		if(this.settings.btn){
			//点击的时候去上传
			this.settings.btn.click(function(){
				_this.send();
				_this.settings.actionMount(_this.arr);
			});
		}
		
	}
	
	//添加不重复的数据。
	addPic(data){
		if(!this.arr.some(e=>e.name == data.name)){
			this.arr.push(data);
			
			//不重复才显示选中的图片。
			this.settings.view(data);
		}
	}
	
	send(){
		let _this = this;
		this.arr.forEach(e=>{
			let fromData = new FormData;
			fromData.append('file',e);
			
			$.ajax({
				url:'php/post_file.php',
				method:'post',
				data:fromData,
				processData:false,
				contentType:false,
				success:function(data){
					_this.num ++;
					
					//上传进度(每次传成功的数字,总数字)
					_this.settings.progressMount(_this.num,_this.arr.length);
					
					if(_this.num == _this.arr.length){
						//全部上传成功
						_this.settings.uploadEndMount();
						_this.arr.length = 0;
						_this.num = 0;
					}
					
					//console.log(111);
				}
			});
		});
	}
	
	changeData(data,callback){
		/*
			FileReader就是将二进制数据转成图片源码。 
			readAsDataURL(二进制数据)
		*/
		var fr = new FileReader;
		fr.onload = function(){
			/*
				当二进制数据转码成功之后，将成功的代码传给使用者。
				
				callback(处理好的数据)
			*/
			callback(fr.result);
			//console.log(fr.result);
		}
		
		fr.readAsDataURL(data);
		
	}
	
	//删除被选中的数据。
	removeData(name){
		this.arr = this.arr.filter(e=>e.name != name);
		
		console.log(this.arr);
	}
	
	
}



/*
	$.fn.插件名也可以创建插件。
	
	个人推荐使用:$.fn.extend({}),方便管理插件。
*/


//$.fn.uploads = function(opt){
//	let uploads = new Uploads(this);
//		
//	uploads.init(opt);
//		
//	return this;
//}
//
//$.fn.xxx = function(){
//	
//}


$.fn.extend({
	
	uploads(opt){
		console.log(1232132)
		let uploads = new Uploads(this);
		
		uploads.init(opt);
		
		return {that:this,up:uploads};
	},
	
	msk(val){
		
		this.html(val);
		
		this.animate({
			top:0
		});
		
		this.delay(800).animate({
			top:-20
		});
	}
	
	
});

