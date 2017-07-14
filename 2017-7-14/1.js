var div = document.getElementById('div');

document.addEventListener('mouseup',up);
function up(){
	document.removeEventListener('mousemove',move);
	document.removeEventListener('mouseup',up);
}
