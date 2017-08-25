(function($) {
	var Resizable = function(el, opts) {
		var $this = $(el);
		$.extend(this, {
			disabled : function(e) {
				$this.find(".resizable").remove();
			}
		});
		init();
		function init() {
			$this.css("position", "relative");
			var place = $this.offset();
			if (opts.handles.indexOf("all")) {
				opts.handles = "e,s,n,w,se";
			}
			var handle = opts.handles.split(",");
			for ( var i = 0; i < handle.length; i++) {
				var direction = $("<div></div>").appendTo($this);
				var cpos = {
					position : "absolute",
					zIndex : 9999,
					display : "block",
					"-moz-user-select" : "none",
					"font-size" : "0.1px"
				};
				if (handle[i] == "e") {
					cpos.top = 0;
					cpos.right = -5;
					cpos.width = 7;
					cpos.height = "100%";
				} else if (handle[i] == "s") {
					cpos.bottom = -5;
					cpos.left = 0;
					cpos.width = "100%";
					cpos.height = 7;
				} else if (handle[i] == "n") {
					cpos.top = -5;
					cpos.left = 0;
					cpos.width = "100%";
					cpos.height = 7;
				} else if (handle[i] == "w") {
					cpos.top = 0;
					cpos.left = -5;
					cpos.width = 7;
					cpos.height = "100%";
				} else if (handle[i] == "se") {
					cpos.right = 1;
					cpos.bottom = 1;
					cpos.width = 7;
					cpos.height = 7;
					direction.css( {
						"border-right" : "1px solid #888",
						"border-bottom" : "1px solid #888"
					});
				}
				cpos.cursor = handle[i] + "-resize";
				direction.attr("id", handle[i]);
				direction.attr("unselectable", "on");
				direction.css(cpos);
				direction.addClass("resizable");
				direction.bind("mousedown", {
					dir : handle[i]
				}, start);

			}
		}
		function start(e) {
			opts.onStartResize.call($this, e);
			var data = {
				target : $this,
				dir : e.data.dir,
				startLeft : getCss("left"),
				startTop : getCss("top"),
				left : getCss("left"),
				top : getCss("top"),
				startX : e.pageX,
				startY : e.pageY,
				startWidth : $this.outerWidth(),
				startHeight : $this.outerHeight(),
				width : $this.outerWidth(),
				height : $this.outerHeight(),
				deltaWidth : $this.outerWidth() - $this.width(),
				deltaHeight : $this.outerHeight() - $this.height()
			};
			$("body").css("cursor", data.dir + "-resize");
			if (opts.helper) {
				var ghost = $("<div></div>").appendTo($this);
				ghost.attr("id", "ghost");
				ghost.css( {
					position : "absolute",
					"font-size" : 0.1,
					"z-index" : 99999,
					display : "none",
					"-moz-user-select" : "none",
					"border" : "1px solid red",
					width : $this.width(),
					height : $this.height(),
					left : -1,
					top : -1
				});
				ghost.css(opts.helperStyle);
				data.target = ghost;
			}
			$(document).bind("mousemove", data, resize);
			$(document).bind("mouseup", data, stop);
		}
		function resize(e) {
			var data = e.data;
			data.target.css("display", "block");
			if (data.dir.indexOf("e") != -1) {
				var w = data.startWidth + e.pageX - data.startX
						- data.deltaWidth;
				w = Math.min(Math.max(w, opts.minWidth), opts.maxWidth);
				data.width = w;
				data.target.css("width", w);
			}
			if (data.dir.indexOf("s") != -1) {
				var h = data.startHeight + e.pageY - data.startY
						- data.deltaHeight;
				h = Math.min(Math.max(h, opts.minHeight), opts.maxHeight);
				data.height = h;
				data.target.css("height", h);
			}
			if (data.dir.indexOf("n") != -1) {
				var top = data.startTop + e.pageY - data.startY;
				var h = data.startHeight + data.startTop - top
						- data.deltaHeight;
				if (h >= opts.minHeight && h <= opts.maxHeight) {
					data.height = h;
					data.target.css("height", h);
				}
			}
			if (data.dir.indexOf("w") != -1) {
				var left = data.startLeft + e.pageX - data.startX;
				var w = data.startWidth + data.startLeft - left
						- data.deltaWidth;
				if (w >= opts.minWidth && w <= opts.maxWidth) {
					data.width = w;
					data.target.css("width", w);
				}
			}
			opts.onResize.call(data.target, e);
		}
		function stop(e) {
			$("body").css("cursor", "auto");
			if (opts.helper) {
				var ghost = $this.find("#ghost");
				$this.css( {
					width : e.data.width - e.data.deltaWidth,
					height : e.data.height - e.data.deltaHeight
				});
				ghost.remove();
			}
			$(document).unbind('mousemove', resize).unbind('mouseup', stop);
			opts.onStopResize.call($this, e);
		}
		function getCss(key) {
			var v = parseInt($this.css(key));
			if (isNaN(v))
				return 0;
			return v;
		}
	};
	$.fn.resizable = function(options) {
		var args = Array.prototype.slice.call(arguments, 0);
		var iopts = $.extend( {}, $.fn.resizable.defaults, options);
		var el = $.data(this[0], "resizable");
		if (el) {
			el[options].apply(el, args);
			return el;
		}
		return this.each(function() {
			var $this = $(this);
			var opts = $.meta ? $.extend( {}, iopts, this.data()) : iopts;
			el = new Resizable(this, opts);
			$.data(this, "resizable", el);
		});
	};

	$.fn.resizable.defaults = {
		handles : "n,e,s,w,se,all",
		helper : false,
		helperStyle : {},
		maxHeight : $().height(),
		maxWidth : $().width(),
		minHeight : 10,
		minWidth : 10,
		onStartResize : function() {
		},
		onResize : function() {
		},
		onStopResize : function() {
		}
	};
})(jQuery);