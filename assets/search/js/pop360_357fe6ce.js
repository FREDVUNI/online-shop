(function() {
	function f(a) {
		this._ = {
			loading: a && void 0 !== a.loading ? a.loading : !0,
			fullscreen: a && a.fullscreen,
			enlarger: a && a.enlarger,
			bannerPano: a && a.bannerPano
		};
		this._init();
		this._initEvent()
	}(function() {
		var a = $("html"),
			b = $(window).width();
		a.addClass("scroll-lock");
		var c = $(window).width();
		a.removeClass("scroll-lock");
		a = c - b;
		$("\x3cstyle type\x3d'text/css'\x3e.scroll-lock-offset{margin-right:" + a + "px;}\x3c/style\x3e").appendTo("head");
		return a
	})();
	f.prototype = {
		constructor: f,
		_init: function() {
			var a = ['\x3cdiv class\x3d"sr-pop360 ' + (this._.enlarger ? "enlarger" : "") + '" style\x3d"display: none;"\x3e', '    \x3cdiv class\x3d"sr-pop360-cover J-cover"\x3e\x3c/div\x3e', '    \x3cdiv class\x3d"sr-pop360-wrap"\x3e', '        \x3cdiv class\x3d"sr-pop360-view ' + (this._.loading ? "sr-pop360-loading" : "") + '"\x3e', '            \x3cdiv class\x3d"J-view sr-pop360-content"\x3e\x3c/div\x3e', '            \x3cdiv class\x3d"sr-pop360-full J-full"\x3e\x3ci class\x3d"ob-icon icon-fullscreen"\x3e\x3c/i\x3e\x3c/div\x3e', '            \x3cdiv class\x3d"sr-pop360-pop J-normal"\x3e\x3ci class\x3d"ob-icon icon-fullscreen-out"\x3e\x3c/i\x3e\x3c/div\x3e', "        \x3c/div\x3e", '        \x3cdiv class\x3d"sr-pop360-close J-close"\x3e\x3ci class\x3d"ob-icon icon-delete"\x3e\x3c/i\x3e\x3c/div\x3e', "    \x3c/div\x3e", "\x3c/div\x3e"];
			this._.fullscreen || (a[5] = "", a[6] = "");
			this._.bannerPano && (a = ['\x3cdiv class\x3d"sr-pop360 sr-pop-360-banner' + (this._.enlarger ? "enlarger" : "") + '" style\x3d"display: none;"\x3e', '    \x3cdiv class\x3d"sr-pop360-return"\x3e\x3ca class\x3d"sr-pop360-return-link J-close J-banner-pano-close" href\x3d"javascript:;"\x3e\x3ci class\x3d"ob-icon icon-arrow-left"\x3e\x3c/i\x3eReturn\x3c/a\x3e\x3c/div\x3e', '    \x3cdiv class\x3d"sr-pop360-wrap"\x3e', '        \x3cdiv class\x3d"sr-pop360-view ' + (this._.loading ? "sr-pop360-loading" : "") + '"\x3e', '            \x3cdiv class\x3d"J-view sr-pop360-content"\x3e\x3c/div\x3e', "        \x3c/div\x3e", "    \x3c/div\x3e", "\x3c/div\x3e"]);
			a = a.join("");
			a = $(a);
			this._.doms = {
				popBox: a,
				cover: a.find(".J-cover"),
				close: a.find(".J-close"),
				viewBox: a.find(".J-view"),
				full: a.find(".J-full"),
				normal: a.find(".J-normal")
			};
			$(document.body).append(a)
		},
		_initEvent: function() {
			var a = this;
			this._.doms.full.on("click", function() {
				a._.doms.popBox.addClass("open");
				$("body").addClass("sr-pop360-body-overflow")
			});
			this._.doms.normal.on("click", function() {
				a._.doms.popBox.removeClass("open");
				$("body").removeClass("sr-pop360-body-overflow")
			});
			this._.doms.close.on("click", function() {
				a.hide();
				$("body").removeClass("sr-pop360-body-overflow");
				var b = $(".J-pano-pic");
				if (0 < b.length) {
					var c = $(".J-proSlide-container"),
						k = c.offset().left,
						e = c.offset().top - $(document).scrollTop(),
						d = c.width();
					c = c.height();
					b.animate({
						left: k + "px",
						top: e + "px",
						width: d + "px",
						height: c + "px"
					}, 800);
					$(".swiper-pagination-bullet").eq(0).click();
					setTimeout(function() {
						$(".J-pano-pic").removeClass("pano-pic-active").css({
							position: "absolute",
							left: "0",
							top: "0",
							width: "100%",
							height: "100%"
						});
						$("body").removeClass("pano-body")
					}, 1E3);
					setTimeout(function() {
						$(".J-pano-pic").css({
							zIndex: 1
						})
					}, 2E3)
				}
			});
			this._.doms.cover.on("click", function(b) {
				b.stopPropagation();
				b.preventDefault();
				a.hide()
			})
		},
		_preloadImage: function(a, b) {
			var c = new Image;
			c.src = a;
			c.complete ? b && b(c) : c.onload = function() {
				b && b(this)
			}
		},
		winSize: function() {
			var a = window,
				b = document,
				c = b.documentElement;
			b = b.body;
			return {
				width: a.innerWidth || c.clientWidth || b.clientWidth || 0,
				height: a.innerHeight || c.clientHeight || b.clientHeight || 0
			}
		},
		show: function(a, b) {
			$("html").addClass("scroll-lock scroll-lock-offset");
			var c = this;
			this._.doms.popBox.show();
			if (b) {
				var k = this._.doms.viewBox.parent(),
					e = this.winSize();
				this._preloadImage(b, function(d) {
					var h = d.width + 20;
					var g = d.height + 97;
					var f = d.width / d.height;
					d.width + 20 > e.width || d.height + 97 > e.height ? d.width + 20 > e.width ? (h = e.width - 40, g = (e.width - 40) / f + 97) : (g = e.height - 20, h = (e.height - 97 + 20) * f) : (h = d.width + 20, g = d.height + 97);
					k.css({
						width: h + "px",
						height: g + "px",
						marginTop: -g / 2 + "px",
						marginLeft: -h / 2 + "px"
					});
					c._.doms.viewBox.html(a.replace("{IMG}", '\x3cimg src\x3d"' + b + '" /\x3e'));
					k.find(".img-cell").css({
						width: h + "px",
						height: g - 97 + "px"
					});
					setTimeout(function() {
						c._.doms.viewBox.children().addClass("show")
					}, 200)
				})
			} else this._.doms.viewBox.html(a)
		},
		hide: function() {
			$("html").removeClass("scroll-lock scroll-lock-offset");
			this._.doms.popBox.hide();
			this._.doms.viewBox.parent().removeAttr("style");
			this._.doms.viewBox.children().removeClass("show");
			this._.doms.viewBox.empty()
		},
		appendDeclaration: function(a) {
			if (a) {
				var b = this._.doms.popBox.find(".alert-declaration");
				0 < b.length ? (b.find(".alert-txt").html(a), b.show()) : (b = $('\x3cdiv class\x3d"alert-new alert-declaration"\x3e    \x3cdiv class\x3d"alert-con alert-half-black alert-state alert-del"\x3e        \x3cspan class\x3d"alert-txt"\x3e\x3c/span\x3e        \x3ca href\x3d"javascript:;" class\x3d"micon-del J-close-alert"\x3e\x3ci class\x3d"ob-icon icon-delete"\x3e\x3c/i\x3e\x3c/a\x3e    \x3c/div\x3e\x3c/div\x3e'), b.find(".alert-txt").html(a), this._.doms.popBox.find(".sr-pop360-view").append(b), this._.doms.popBox.find(".alert-new .J-close-alert").on("click", function() {
					$(this).closest(".alert-new").hide()
				}))
			}
		}
	};
	window.Pop = f
})();
$(function() {
	if (0 < $(".J-pop360").length) {
		var f = new Pop({
			fullscreen: !1,
			loading: !1
		});
		$(document).on("click", ".J-pop360", function(a) {
			var b = $(this).attr("view-url") || 0;
			a.preventDefault();
			a.stopPropagation();
			b && f.show('\x3ciframe src\x3d"' + b + '" allowfullscreen\x3d"true" border\x3d"0"\x3e\x3c/iframe\x3e')
		})
	}
	if (0 < $(".J-banner-pop360").length) {
		var a = new Pop({
			fullscreen: !1,
			loading: !1,
			bannerPano: !0
		});
		$(document).on("click", ".J-banner-pop360", function(b) {
			var c = $(this).attr("view-url") || 0;
			b.preventDefault();
			b.stopPropagation();
			if (c) {
				var e = $(".J-pano-pic");
				e.css({
					zIndex: 1E5
				}).addClass("pano-pic-active");
				$("body").addClass("pano-body");
				var d = $(".J-proSlide-container");
				b = d.offset().left;
				var f = d.offset().top - $(document).scrollTop(),
					g = d.width();
				d = d.height();
				e.css({
					position: "fixed",
					left: b + "px",
					top: f + "px",
					width: g + "px",
					height: d + "px"
				});
				setTimeout(function() {
					e.animate({
						width: "100%",
						height: "100%",
						left: 0,
						top: 0
					}, 800)
				}, 1E3);
				setTimeout(function() {
					a.show('\x3ciframe src\x3d"' + c + '" allowfullscreen\x3d"true" border\x3d"0"\x3e\x3c/iframe\x3e')
				}, 1800)
			}
		})
	}
	if (0 < $(".J-enlarger").length) {
		var b = new Pop({
			enlarger: !0
		});
		$(".J-enlarger").bind("click", function(a) {
			a.preventDefault();
			a.stopPropagation();
			a = '\x3cdiv class\x3d"sr-pop360-product-view"\x3e\x3cdiv class\x3d"sr-pop360-product-image img-center"\x3e\x3cdiv class\x3d"img-cell"\x3e{IMG}\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"sr-pop360-product-name"\x3e' + $(this).attr("data-name") + "\x3c/div\x3e\x3c/div\x3e";
			b.show(a, $(this).attr("data-enlarger"))
		})
	}
});