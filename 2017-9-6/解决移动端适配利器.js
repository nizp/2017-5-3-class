;(function (deviceWidth, fontSize){
  deviceWidth = deviceWidth || 640;
  fontSize = fontSize || 100;
  var metas = document.querySelectorAll('meta');
  var viewPort = [].slice.call(metas).filter((item) => {
    return item.name === 'viewport';
  })[0];
  if(!viewPort){
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    viewPort = document.head.insertBefore(meta, metas[metas.length - 1].nextElementSibling);
  }
  var scale = 1/window.devicePixelRatio;
  viewPort.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;
  var html = document.documentElement;
  var fn = function (){
    html.style.fontSize = (html.clientWidth / deviceWidth) * fontSize + 'px';
  };
  fn();
  window.addEventListener('resize', fn);
})();