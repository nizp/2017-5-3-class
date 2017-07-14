var div = document.getElementById('div');
div.addEventListener('mousedown',function(ev){
	var disX = ev.clientX - this.offsetLeft;
	var disY = ev.clientY - this.offsetTop;
	
	document.addEventListener('mousemove',move);
	document.addEventListener('mouseup',up);
	function up(){
		document.removeEventListener('mousemove',move);
		document.removeEventListener('mouseup',up);
	}
	function move(ev){
		div.style.left = ev.clientX - disX + 'px';
		div.style.top = ev.clientY - disY + 'px';
	}
	
});


