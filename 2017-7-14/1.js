var div = document.getElementById('div');
document.addEventListener('mousemove',move);
function move(ev){
	div.style.left = ev.clientX - disX + 'px';
	div.style.top = ev.clientY - disY + 'px';
}
