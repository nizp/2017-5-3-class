
class Uploads {
	constructor(that){
		/*
			btn:点击按钮
			readFile:用户选择的图片
		*/
		this.settings = {
			readFile:null,
			btn:null
		}
		this.arr = []; //每次选中图片的时候，把不重复的图片push到这个数组中
		//当点击确定按钮的时候，一次性把数组中的数据全部上传。
	}
	
	init(opt){
		let _this = this;
		$.extend(this.settings,opt);
		
		//选择图片
		if(this.settings.readFile){
			
			this.settings.readFile.change(function(ev){
				
				_this.addPic(ev.target.files[0]);
				
				//console.dir(ev.target.files[0]);
				
				ev.target.value = '';
			});
		}
		
		if(this.settings.btn){
			//点击的时候去上传
			this.settings.btn.click(function(){
				_this.send();
			});
		}
		
	}
	
	//添加不重复的数据。
	addPic(data){
		if(!this.arr.some(e=>e.name == data.name)){
			this.arr.push(data);
		}
	}
	
	send(){
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
					console.log(111);
				}
			});
		});
	}
	
	
}


$.fn.extend({
	
	uploads(opt){
		
		let uploads = new Uploads(this);
		
		uploads.init(opt);
		
		return this;
	}
	
});

