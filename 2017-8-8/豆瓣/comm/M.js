/*
	https://api.douban.com/v2/movie/search?q=战狼2&start=0&callback=fn 
*/
function Model(search,num){
	$.ajax({
		url:'https://api.douban.com/v2/movie/search?callback=?',
		dataType:'jsonp',
		data:{
			q:search,
			start:num
		},
		success:function(data){
	
			let t = template('temp',data);
		
			$('#app').html(t);
		}
	});
	
}

