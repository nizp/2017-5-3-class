let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let list1 = Array.from(ul1.children);
let result = []; //存放点击数据的

/*
	[{name:'洗衣机',price:80W元,num:10}] 
*/

if(localStorage.getItem('mmm')){
	result = JSON.parse(localStorage.getItem('mmm'));
	addHtml(result);		
}

//监听渲染
window.addEventListener('storage',function(){
	
	//如果没有走别的
	if(localStorage.getItem('mmm')){
		result = JSON.parse(localStorage.getItem('mmm'));
		addHtml(result);
	}
	
});

list1.forEach((e,i)=>{
	e.onclick = function(){
		if(!result.includes(e.innerHTML)){
			result.push(e.innerHTML);
			addHtml(result);
			
			//添加数据到本地
			localStorage.setItem('mmm',JSON.stringify(result));
		}
	}
});

ul2.onclick = function(ev){
	if(ev.target.tagName == 'LI'){
		
		result = result.filter(e=>e!=ev.target.innerHTML);
		
		localStorage.setItem('mmm',JSON.stringify(result));
		
		addHtml(result);
		
	}
	
	
}


function addHtml(arr){
	let html = '';
	arr.forEach(e=>{
		html += `<li>${e}</li>`;
	});
	
	ul2.innerHTML = html;
}




