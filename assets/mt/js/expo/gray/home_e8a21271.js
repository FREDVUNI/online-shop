$(function() {
	function c() {
		$.ajax({
			url: "///ajaxfunction.do?xcase\x3dajaxlogonconnection\x26callback\x3d?",
			type: "get",
			dataType: "jsonp",
			cache: !1,
			success: function(b) {
				if (b && b.length) {
					var c = '\x3ca rel\x3d"nofollow" class\x3d"inline-item J-userName userName" href\x3d"' + (b[4] ? "//" : "//") + '"\x3e' + (b[1] || "") + "\x3c/a\x3e";
					b[0] ? ($(".J-signInfo").hide(), 0 < $(".J-signInfo-login .J-userName").length ? $(".J-signInfo-login .J-userName").replaceWith($(c)) : $(".J-signInfo-login").prepend(c), $(".J-signInfo-login").show()) : ($(".J-signInfo").show(), $(".J-signInfo-login").hide())
				}
			},
			error: {}
		})
	}
	0 != $(".J-signInfo").length && (window.topLoginInfo = c, c())
});
$(function() {
	var c = null;
	$("form[name\x3dsearchForm]").bind("submit", function(b) {
		c = $(this).find("input[name\x3dword]")[0];
		if (!c || 0 === c.length) return b.preventDefault(), !1;
		if ("" === $.trim(c.value)) return alert("Please enter a keyword at least for your search."), b.preventDefault(), !1;
		if (!/^[\x00-\x7F\xB0]*$/.test(c.value)) return alert("Please input the information in English only."), b.preventDefault(), !1
	})
});
$(function() {
	var c = $("[name\x3dblock]") && "true" === $.trim($("[name\x3dblock]").val() || "");
	if (window.SlideNav) {
		var b = new SlideNav;
		b.addItem("goTop");
		c || b.addItem("liveChat");
		SlideNav.defaultsInit(b);
		b.show();
		window.slideInstance = b
	}
});
(function(c) {
	var b = this.mic_touch = {};
	b.hideUrlBar = function() {
		if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
			var b = document.getElementsByTagName("body")[0];
			b.style.height = document.documentElement.clientWidth / screen.width * screen.height + "px"
		}
		setTimeout(function() {
			0 === window.pageYOffset && (window.scrollTo(0, 1), void 0 !== b && (b.style.height = window.innerHeight + "px"), window.scrollTo(0, 0))
		}, 200)
	};
	b.Alert = function(c, g, f, h, l) {
		if (!(this instanceof b.Alert)) return new b.Alert(c, g, f, h, l);
		this._ = {};
		this._.types = {
			success: "pop-right",
			error: "pop-wrong",
			warn: "pop-warning",
			doubt: "pop-doubt",
			forbid: "pop-forbid",
			none: "pop-none"
		};
		this.size = f || "small";
		this.type = g || "none";
		this.content = c;
		this.callback = h;
		this._initialize(l)
	};
	b.Alert.prototype._initialize = function(b) {
		var e = this,
			f = document.createElement("div");
		f.className = "pop-wrap";
		this._.warnBox = this._createBox();
		f.appendChild(this._.warnBox);
		document.body.appendChild(f);
		setTimeout(function() {
			c(e._.warnBox).animate({
				opacity: 0
			}, 200, "ease-out", function() {
				c(f).remove();
				e.callback && e.callback()
			})
		}, b || 2E3)
	};
	b.Alert.prototype._createBox = function() {
		var b = document.createElement("div"),
			c = "pop ";
		"big" === this.size && (c += " pop-air ");
		b.className = c + this._.types[this.type];
		b.innerHTML = this.content;
		return b
	};
	b.form = {
		error: '\x3cdiv class\x3d"form-tips error-tips J-formError"\x3e{{MESSAGE}}\x3c/div\x3e',
		lineTag: "J-inline",
		errorTag: "J-formError",
		clearTag: "J-clear",
		status: {
			normal: "b-normal",
			active: "b-active",
			error: "b-error"
		}
	};
	b.form.Tips = function(e, g, f) {
		if (g) {
			var h = g.nodeName.toLowerCase(),
				l = b.form.error.replace("{{MESSAGE}}", e),
				w = b.form.status,
				r = b.form.lineTag,
				D = b.form.errorTag,
				t, F = {
					after: function() {
						t.after(l)
					},
					append: function() {
						this.append(l)
					}
				};
			f ? t = c(f) : h && (t = c(g).parents(".J-" + h));
			t.hasClass(w.error) ? t.next("." + D).length ? t.next("." + D).html(e) : t.find("." + D).length && t.find("." + D).html(e) : (f ? F.append.call(c(f)) : t.parent().hasClass(r) ? F.append.call(t.parent()) : F.after(), b.form.inputError(g, f))
		}
	};
	b.form.initialize = function() {
		b.form.inputInit();
		b.form.selectInit()
	};
	b.form.inputInit = function() {
		var e = b.form.clearTag;
		c("form .J-input").find("input").on("focus", b.form.inputActive).on("blur", b.form.inputBlur).on("keyup", b.form.inputChange);
		c("form .J-textarea").find("input").on("focus", b.form.inputActive).on("blur", b.form.inputBlur).on("keyup", b.form.inputChange);
		c("form ." + e).on("click", function(b) {
			c(this).hide();
			c(this).parents(".J-input").find("input").val("").focus()
		})
	};
	b.form.inputChange = function() {
		var e = c.trim(c(this).get(0).value),
			g = b.form.clearTag;
		g = c(this).parents(".J-input").find("." + g);
		"" === e ? g.css("display", "none") : g.css("display", "block")
	};
	b.form.inputActive = function() {
		var e = b.form.clearTag;
		e = c(this).parents(".J-input").find("." + e);
		var g = b.form.status,
			f = c.trim(c(this).get(0).value),
			h = c(this).parents(".J-input");
		h.hasClass(g.error) || (h.addClass(g.active), h.removeClass(g.normal), h.removeClass(g.error));
		"" !== f && e.css("display", "block")
	};
	b.form.inputBlur = function(e) {
		e = b.form.clearTag;
		var g = c(this).parents(".J-input").find("." + e);
		e = b.form.status;
		var f = c(this).parents(".J-input");
		f.hasClass(e.error) || (f.addClass(e.normal), f.removeClass(e.active), f.removeClass(e.error));
		setTimeout(function() {
			g.css("display", "none")
		}, 200)
	};
	b.form.inputError = function(e, g) {
		var f = e.nodeName.toLowerCase(),
			h = b.form.status,
			l;
		g ? l = c(g) : f && (l = c(e).parents(".J-" + f));
		l.addClass(h.error);
		l.removeClass(h.normal);
		l.removeClass(h.active)
	};
	b.form.hideInputError = function(e, g) {
		var f = e.nodeName.toLowerCase(),
			h = b.form.errorTag,
			l = b.form.lineTag,
			w = b.form.status,
			r;
		g ? r = c(g) : f && (r = c(e).parents(".J-" + f));
		r.addClass(w.normal);
		r.removeClass(w.error);
		r.removeClass(w.active);
		r.parent().hasClass(l) && (r = r.parent());
		r.next("." + h).length ? r.next("." + h).remove() : r.find("." + h).length && r.find("." + h).remove()
	};
	b.form.selectInit = function() {
		c("form .icon-select").on("mousedown", function(b) {
			c(b.target).parents(".J-select").find("select").trigger("mousedown")
		})
	};
	b.checkSupport = {};
	b.checkSupport.isSupportFixed = function() {
		var b = window.navigator.userAgent,
			c = b.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/);
		c = c && c[2] && 5 > parseInt(c[2].replace(/_/g, "."), 10);
		b = /Opera Mini/i.test(b);
		var f = document.body;
		var h = document.createElement("div");
		h.style.cssText = "display:none;position:fixed;z-index:100;";
		f.appendChild(h);
		var l = "fixed" != window.getComputedStyle(h).position;
		f.removeChild(h);
		return !!(l || c || b)
	};
	b.geometric = function(b, c, f, h) {
		var e = {
			w: f,
			h: h
		};
		if (b <= f && c <= h) return {
			w: b,
			h: c
		};
		b / c > f / h ? f < b && (e.h = c * f / b) : h < c && (e.w = b * h / c);
		return e
	};
	b.transValue = function(b) {
		if (!b) return b;
		if (b instanceof Array) {
			for (var c = 0; c < b.length; c++) b[c] = transValue(b[c]);
			return b
		}
		b = b.replace(/"/g, "\x26#34;");
		b = b.replace(/'/g, "\x26#39;");
		b = b.replace(/</g, "\x26#60;");
		return b = b.replace(/>/g, "\x26#62;")
	}
}).call(this, this.Zepto || this.jQuery);
var Swiper = function(c, b) {
	function e(a, b) {
		return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
	}

	function g() {
		var d = G - m;
		return b.freeMode && (d = G - m), b.slidesPerView > a.slides.length && !b.centeredSlides && (d = 0), 0 > d && (d = 0), d
	}

	function f() {
		function d(d) {
			var k = new Image;
			k.onload = function() {
				"undefined" != typeof a && null !== a && (void 0 !== a.imagesLoaded && a.imagesLoaded++, a.imagesLoaded === a.imagesToLoad.length && (a.reInit(), b.onImagesReady && a.fireCallback(b.onImagesReady, a)))
			};
			k.src = d
		}
		var k = a.h.addEventListener,
			p = "wrapper" === b.eventTarget ? a.wrapper : a.container;
		if (a.browser.ie10 || a.browser.ie11 ? (k(p, a.touchEvents.touchStart, H), k(document, a.touchEvents.touchMove, I), k(document, a.touchEvents.touchEnd, J)) : (a.support.touch && (k(p, "touchstart", H), k(p, "touchmove", I), k(p, "touchend", J)), b.simulateTouch && (k(p, "mousedown", H), k(document, "mousemove", I), k(document, "mouseup", J))), b.autoResize && k(window, "resize", a.resizeFix), h(), a._wheelEvent = !1, b.mousewheelControl) {
			if (void 0 !== document.onmousewheel && (a._wheelEvent = "mousewheel"), !a._wheelEvent) try {
				new WheelEvent("wheel"), a._wheelEvent = "wheel"
			} catch (ba) {}
			a._wheelEvent || (a._wheelEvent = "DOMMouseScroll");
			a._wheelEvent && k(a.container, a._wheelEvent, r)
		}
		if (b.keyboardControl && k(document, "keydown", w), b.updateOnImagesReady)
			for (a.imagesToLoad = e("img", a.container), k = 0; k < a.imagesToLoad.length; k++) d(a.imagesToLoad[k].getAttribute("src"))
	}

	function h() {
		var d, k = a.h.addEventListener;
		if (b.preventLinks) {
			var p = e("a", a.container);
			for (d = 0; d < p.length; d++) k(p[d], "click", U)
		}
		if (b.releaseFormElements)
			for (p = e("input, textarea, select", a.container), d = 0; d < p.length; d++) k(p[d], a.touchEvents.touchStart, V, !0);
		if (b.onSlideClick)
			for (d = 0; d < a.slides.length; d++) k(a.slides[d], "click", D);
		if (b.onSlideTouch)
			for (d = 0; d < a.slides.length; d++) k(a.slides[d], a.touchEvents.touchStart, t)
	}

	function l() {
		var d, k = a.h.removeEventListener;
		if (b.onSlideClick)
			for (d = 0; d < a.slides.length; d++) k(a.slides[d], "click", D);
		if (b.onSlideTouch)
			for (d = 0; d < a.slides.length; d++) k(a.slides[d], a.touchEvents.touchStart, t);
		if (b.releaseFormElements) {
			var p = e("input, textarea, select", a.container);
			for (d = 0; d < p.length; d++) k(p[d], a.touchEvents.touchStart, V, !0)
		}
		if (b.preventLinks)
			for (p = e("a", a.container), d = 0; d < p.length; d++) k(p[d], "click", U)
	}

	function w(b) {
		var d = b.keyCode || b.charCode;
		if (!(b.shiftKey || b.altKey || b.ctrlKey || b.metaKey)) {
			if (37 === d || 39 === d || 38 === d || 40 === d) {
				var p = !1,
					c = a.h.getOffset(a.container),
					e = a.h.windowScroll().left,
					g = a.h.windowScroll().top,
					f = a.h.windowWidth(),
					h = a.h.windowHeight();
				c = [
					[c.left, c.top],
					[c.left + a.width, c.top],
					[c.left, c.top + a.height],
					[c.left + a.width, c.top + a.height]
				];
				for (var m = 0; m < c.length; m++) {
					var l = c[m];
					l[0] >= e && l[0] <= e + f && l[1] >= g && l[1] <= g + h && (p = !0)
				}
				if (!p) return
			}
			n ? ((37 === d || 39 === d) && (b.preventDefault ? b.preventDefault() : b.returnValue = !1), 39 === d && a.swipeNext(), 37 === d && a.swipePrev()) : ((38 === d || 40 === d) && (b.preventDefault ? b.preventDefault() : b.returnValue = !1), 40 === d && a.swipeNext(), 38 === d && a.swipePrev())
		}
	}

	function r(d) {
		var k = a._wheelEvent,
			p = 0;
		if (d.detail) p = -d.detail;
		else if ("mousewheel" === k)
			if (b.mousewheelControlForceToAxis)
				if (n) {
					if (!(Math.abs(d.wheelDeltaX) > Math.abs(d.wheelDeltaY))) return;
					p = d.wheelDeltaX
				} else {
					if (!(Math.abs(d.wheelDeltaY) > Math.abs(d.wheelDeltaX))) return;
					p = d.wheelDeltaY
				}
		else p = d.wheelDelta;
		else if ("DOMMouseScroll" === k) p = -d.detail;
		else if ("wheel" === k)
			if (b.mousewheelControlForceToAxis)
				if (n) {
					if (!(Math.abs(d.deltaX) > Math.abs(d.deltaY))) return;
					p = -d.deltaX
				} else {
					if (!(Math.abs(d.deltaY) > Math.abs(d.deltaX))) return;
					p = -d.deltaY
				}
		else p = Math.abs(d.deltaX) > Math.abs(d.deltaY) ? -d.deltaX : -d.deltaY;
		if (b.freeMode) {
			if (k = a.getWrapperTranslate() + p, 0 < k && (k = 0), k < -g() && (k = -g()), a.setWrapperTransition(0), a.setWrapperTranslate(k), a.updateActiveSlide(k), 0 === k || k === -g()) return
		} else 60 < (new Date).getTime() - W && (0 > p ? a.swipeNext() : a.swipePrev()), W = (new Date).getTime();
		return b.autoplay && a.stopAutoplay(!0), d.preventDefault ? d.preventDefault() : d.returnValue = !1, !1
	}

	function D(d) {
		a.allowSlideClick && (F(d), a.fireCallback(b.onSlideClick, a, d))
	}

	function t(d) {
		F(d);
		a.fireCallback(b.onSlideTouch, a, d)
	}

	function F(d) {
		if (d.currentTarget) a.clickedSlide = d.currentTarget;
		else {
			d = d.srcElement;
			do {
				if (-1 < d.className.indexOf(b.slideClass)) break;
				d = d.parentNode
			} while (d);
			a.clickedSlide = d
		}
		a.clickedSlideIndex = a.slides.indexOf(a.clickedSlide);
		a.clickedSlideLoopIndex = a.clickedSlideIndex - (a.loopedSlides || 0)
	}

	function U(d) {
		return a.allowLinks ? void 0 : (d.preventDefault ? d.preventDefault() : d.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in d && d.stopPropagation(), !1)
	}

	function V(a) {
		return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
	}

	function H(d) {
		if (b.preventLinks && (a.allowLinks = !0), a.isTouched || b.onlyExternal) return !1;
		var k = d.target || d.srcElement;
		document.activeElement && document.activeElement !== k && document.activeElement.blur();
		var p = ["input", "select", "textarea"],
			c;
		if (c = b.noSwiping && k) {
			c = k;
			var e = !1;
			do -1 < c.className.indexOf(b.noSwipingClass) && (e = !0), c = c.parentElement; while (!e && c.parentElement && -1 === c.className.indexOf(b.wrapperClass));
			c = (!e && -1 < c.className.indexOf(b.wrapperClass) && -1 < c.className.indexOf(b.noSwipingClass) && (e = !0), e)
		}
		if (c || (N = !1, a.isTouched = !0, z = "touchstart" === d.type, !z && "which" in d && 3 === d.which)) return !1;
		z && 1 !== d.targetTouches.length || (a.callPlugins("onTouchStartBegin"), !z && !a.isAndroid && 0 > p.indexOf(k.tagName.toLowerCase()) && (d.preventDefault ? d.preventDefault() : d.returnValue = !1), k = z ? d.targetTouches[0].pageX : d.pageX || d.clientX, p = z ? d.targetTouches[0].pageY : d.pageY || d.clientY, a.touches.startX = a.touches.currentX = k, a.touches.startY = a.touches.currentY = p, a.touches.start = a.touches.current = n ? k : p, a.setWrapperTransition(0), a.positions.start = a.positions.current = a.getWrapperTranslate(), a.setWrapperTranslate(a.positions.start), a.times.start = (new Date).getTime(), B = void 0, 0 < b.moveStartThreshold && (O = !1), b.onTouchStart && a.fireCallback(b.onTouchStart, a, d), a.callPlugins("onTouchStartEnd"))
	}

	function I(d) {
		if (a.isTouched && !b.onlyExternal && (!z || "mousemove" !== d.type)) {
			var k = z ? d.targetTouches[0].pageX : d.pageX || d.clientX,
				c = z ? d.targetTouches[0].pageY : d.pageY || d.clientY;
			if ("undefined" == typeof B && n && (B = !!(B || Math.abs(c - a.touches.startY) > Math.abs(k - a.touches.startX))), "undefined" != typeof B || n || (B = !!(B || Math.abs(c - a.touches.startY) < Math.abs(k - a.touches.startX))), B) return void(a.isTouched = !1);
			if (n) {
				if (!b.swipeToNext && k < a.touches.startX || !b.swipeToPrev && k > a.touches.startX) return
			} else if (!b.swipeToNext && c < a.touches.startY || !b.swipeToPrev && c > a.touches.startY) return;
			if (d.assignedToSwiper) return void(a.isTouched = !1);
			if (d.assignedToSwiper = !0, b.preventLinks && (a.allowLinks = !1), b.onSlideClick && (a.allowSlideClick = !1), b.autoplay && a.stopAutoplay(!0), !z || 1 === d.touches.length) {
				if (a.isMoved || (a.callPlugins("onTouchMoveStart"), b.loop && (a.fixLoop(), a.positions.start = a.getWrapperTranslate()), b.onTouchMoveStart && a.fireCallback(b.onTouchMoveStart, a)), a.isMoved = !0, d.preventDefault ? d.preventDefault() : d.returnValue = !1, a.touches.current = n ? k : c, a.positions.current = (a.touches.current - a.touches.start) * b.touchRatio + a.positions.start, 0 < a.positions.current && b.onResistanceBefore && a.fireCallback(b.onResistanceBefore, a, a.positions.current), a.positions.current < -g() && b.onResistanceAfter && a.fireCallback(b.onResistanceAfter, a, Math.abs(a.positions.current + g())), b.resistance && "100%" !== b.resistance) {
					var e;
					if (0 < a.positions.current && (e = 1 - a.positions.current / m / 2, a.positions.current = .5 > e ? m / 2 : a.positions.current * e), a.positions.current < -g()) k = (a.touches.current - a.touches.start) * b.touchRatio + (g() + a.positions.start), e = (m + k) / m, k = a.positions.current - k * (1 - e) / 2, c = -g() - m / 2, a.positions.current = c > k || 0 >= e ? c : k
				}
				if (b.resistance && "100%" === b.resistance && (0 < a.positions.current && (!b.freeMode || b.freeModeFluid) && (a.positions.current = 0), a.positions.current < -g() && (!b.freeMode || b.freeModeFluid) && (a.positions.current = -g())), b.followFinger) {
					if (b.moveStartThreshold)
						if (Math.abs(a.touches.current - a.touches.start) > b.moveStartThreshold || O) {
							if (!O) return O = !0, void(a.touches.start = a.touches.current);
							a.setWrapperTranslate(a.positions.current)
						} else a.positions.current = a.positions.start;
					else a.setWrapperTranslate(a.positions.current);
					return (b.freeMode || b.watchActiveIndex) && a.updateActiveSlide(a.positions.current), b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grabbing", a.container.style.cursor = "-moz-grabbin", a.container.style.cursor = "-webkit-grabbing"), L || (L = a.touches.current), P || (P = (new Date).getTime()), a.velocity = (a.touches.current - L) / ((new Date).getTime() - P) / 2, 2 > Math.abs(a.touches.current - L) && (a.velocity = 0), L = a.touches.current, P = (new Date).getTime(), a.callPlugins("onTouchMoveEnd"), b.onTouchMove && a.fireCallback(b.onTouchMove, a, d), !1
				}
			}
		}
	}

	function J(d) {
		if (B && a.swipeReset(), !b.onlyExternal && a.isTouched) {
			a.isTouched = !1;
			b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grab", a.container.style.cursor = "-moz-grab", a.container.style.cursor = "-webkit-grab");
			a.positions.current || 0 === a.positions.current || (a.positions.current = a.positions.start);
			b.followFinger && a.setWrapperTranslate(a.positions.current);
			a.times.end = (new Date).getTime();
			a.touches.diff = a.touches.current - a.touches.start;
			a.touches.abs = Math.abs(a.touches.diff);
			a.positions.diff = a.positions.current - a.positions.start;
			a.positions.abs = Math.abs(a.positions.diff);
			var k = a.positions.diff,
				c = a.positions.abs,
				e = a.times.end - a.times.start;
			5 > c && 300 > e && !1 === a.allowLinks && (b.freeMode || 0 === c || a.swipeReset(), b.preventLinks && (a.allowLinks = !0), b.onSlideClick && (a.allowSlideClick = !0));
			setTimeout(function() {
				"undefined" != typeof a && null !== a && (b.preventLinks && (a.allowLinks = !0), b.onSlideClick && (a.allowSlideClick = !0))
			}, 100);
			var f = g();
			if (!a.isMoved && b.freeMode) return a.isMoved = !1, b.onTouchEnd && a.fireCallback(b.onTouchEnd, a, d), void a.callPlugins("onTouchEnd");
			if (!a.isMoved || 0 < a.positions.current || a.positions.current < -f) return a.swipeReset(), b.onTouchEnd && a.fireCallback(b.onTouchEnd, a, d), void a.callPlugins("onTouchEnd");
			if (a.isMoved = !1, b.freeMode) {
				if (b.freeModeFluid) {
					var h;
					c = 1E3 * b.momentumRatio;
					var y = a.positions.current + a.velocity * c;
					k = !1;
					var E = 20 * Math.abs(a.velocity) * b.momentumBounceRatio; - f > y && (b.momentumBounce && a.support.transitions ? (-E > y + f && (y = -f - E), h = -f, k = !0, N = !0) : y = -f);
					0 < y && (b.momentumBounce && a.support.transitions ? (y > E && (y = E), h = 0, k = !0, N = !0) : y = 0);
					0 !== a.velocity && (c = Math.abs((y - a.positions.current) / a.velocity));
					a.setWrapperTranslate(y);
					a.setWrapperTransition(c);
					b.momentumBounce && k && a.wrapperTransitionEnd(function() {
						N && (b.onMomentumBounce && a.fireCallback(b.onMomentumBounce, a), a.callPlugins("onMomentumBounce"), a.setWrapperTranslate(h), a.setWrapperTransition(300))
					});
					a.updateActiveSlide(y)
				}
				return (!b.freeModeFluid || 300 <= e) && a.updateActiveSlide(a.positions.current), b.onTouchEnd && a.fireCallback(b.onTouchEnd, a, d), void a.callPlugins("onTouchEnd")
			}
			M = 0 > k ? "toNext" : "toPrev";
			"toNext" === M && 300 >= e && (30 > c || !b.shortSwipes ? a.swipeReset() : a.swipeNext(!0));
			"toPrev" === M && 300 >= e && (30 > c || !b.shortSwipes ? a.swipeReset() : a.swipePrev(!0));
			f = 0;
			if ("auto" === b.slidesPerView) {
				k = Math.abs(a.getWrapperTranslate());
				for (var l = E = 0; l < a.slides.length; l++)
					if (y = n ? a.slides[l].getWidth(!0, b.roundLengths) : a.slides[l].getHeight(!0, b.roundLengths), E += y, E > k) {
						f = y;
						break
					}
				f > m && (f = m)
			} else f = v * b.slidesPerView;
			"toNext" === M && 300 < e && (c >= f * b.longSwipesRatio ? a.swipeNext(!0) : a.swipeReset());
			"toPrev" === M && 300 < e && (c >= f * b.longSwipesRatio ? a.swipePrev(!0) : a.swipeReset());
			b.onTouchEnd && a.fireCallback(b.onTouchEnd, a, d);
			a.callPlugins("onTouchEnd")
		}
	}

	function X(a, b) {
		var d, k = document.createElement("div");
		return k.innerHTML = b, d = k.firstChild, d.className += " " + a, d.outerHTML
	}

	function Q(d, k, c) {
		function p() {
			f += h * (+new Date - g) / (1E3 / 60);
			(m = "toNext" === l ? f > d : d > f) ? (a.setWrapperTranslate(Math.ceil(f)), a._DOMAnimating = !0, window.setTimeout(function() {
				p()
			}, 1E3 / 60)) : (b.onSlideChangeEnd && ("to" === k ? !0 === c.runCallbacks && a.fireCallback(b.onSlideChangeEnd, a, l) : a.fireCallback(b.onSlideChangeEnd, a, l)), a.setWrapperTranslate(d), a._DOMAnimating = !1)
		}
		var e = "to" === k && 0 <= c.speed ? c.speed : b.speed,
			g = +new Date;
		if (a.support.transitions || !b.DOMAnimation) a.setWrapperTranslate(d), a.setWrapperTransition(e);
		else {
			var f = a.getWrapperTranslate();
			var h = Math.ceil((d - f) / e * (1E3 / 60));
			var l = f > d ? "toNext" : "toPrev";
			var m = "toNext" === l ? f > d : d > f;
			if (a._DOMAnimating) return;
			p()
		}
		a.updateActiveSlide(d);
		b.onSlideNext && "next" === k && a.fireCallback(b.onSlideNext, a, d);
		b.onSlidePrev && "prev" === k && a.fireCallback(b.onSlidePrev, a, d);
		b.onSlideReset && "reset" === k && a.fireCallback(b.onSlideReset, a, d);
		("next" === k || "prev" === k || "to" === k && !0 === c.runCallbacks) && aa(k)
	}

	function aa(d) {
		if (a.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)
			if (b.queueStartCallbacks && a.support.transitions) {
				if (a._queueStartCallbacks) return;
				a._queueStartCallbacks = !0;
				a.fireCallback(b.onSlideChangeStart, a, d);
				a.wrapperTransitionEnd(function() {
					a._queueStartCallbacks = !1
				})
			} else a.fireCallback(b.onSlideChangeStart, a, d);
		b.onSlideChangeEnd && (a.support.transitions ? b.queueEndCallbacks ? a._queueEndCallbacks || (a._queueEndCallbacks = !0, a.wrapperTransitionEnd(function(k) {
			a.fireCallback(b.onSlideChangeEnd, k, d)
		})) : a.wrapperTransitionEnd(function(k) {
			a.fireCallback(b.onSlideChangeEnd, k, d)
		}) : b.DOMAnimation || setTimeout(function() {
			a.fireCallback(b.onSlideChangeEnd, a, d)
		}, 10))
	}

	function Y() {
		var b = a.paginationButtons;
		if (b)
			for (var k = 0; k < b.length; k++) a.h.removeEventListener(b[k], "click", Z)
	}

	function Z(d) {
		var k;
		d = d.target || d.srcElement;
		for (var c = a.paginationButtons, e = 0; e < c.length; e++) d === c[e] && (k = e);
		b.autoplay && a.stopAutoplay(!0);
		a.swipeTo(k)
	}

	function T() {
		u = setTimeout(function() {
			b.loop ? (a.fixLoop(), a.swipeNext(!0)) : a.swipeNext(!0) || (b.autoplayStopOnLast ? (clearTimeout(u), u = void 0) : a.swipeTo(0));
			a.wrapperTransitionEnd(function() {
				"undefined" != typeof u && T()
			})
		}, b.autoplay)
	}
	var u, P, L, O, m, B, M, G, v;
	if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
		var x = HTMLElement.prototype;
		x.__defineGetter__ && x.__defineGetter__("outerHTML", function() {
			return (new XMLSerializer).serializeToString(this)
		})
	}
	if (window.getComputedStyle || (window.getComputedStyle = function(a) {
			return this.el = a, this.getPropertyValue = function(b) {
				var d = /(\-([a-z]){1})/g;
				return "float" === b && (b = "styleFloat"), d.test(b) && (b = b.replace(d, function(a, b, d) {
					return d.toUpperCase()
				})), a.currentStyle[b] ? a.currentStyle[b] : null
			}, this
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
			for (var d = b || 0, k = this.length; k > d; d++)
				if (this[d] === a) return d;
			return -1
		}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof c && (c.nodeType || 0 !== e(c).length)) {
		var a = this;
		a.touches = {
			start: 0,
			startX: 0,
			startY: 0,
			current: 0,
			currentX: 0,
			currentY: 0,
			diff: 0,
			abs: 0
		};
		a.positions = {
			start: 0,
			abs: 0,
			diff: 0,
			current: 0
		};
		a.times = {
			start: 0,
			end: 0
		};
		a.id = (new Date).getTime();
		a.container = c.nodeType ? c : e(c)[0];
		a.isTouched = !1;
		a.isMoved = !1;
		a.activeIndex = 0;
		a.centerIndex = 0;
		a.activeLoaderIndex = 0;
		a.activeLoopIndex = 0;
		a.previousIndex = null;
		a.velocity = 0;
		a.snapGrid = [];
		a.slidesGrid = [];
		a.imagesToLoad = [];
		a.imagesLoaded = 0;
		a.wrapperLeft = 0;
		a.wrapperRight = 0;
		a.wrapperTop = 0;
		a.wrapperBottom = 0;
		a.isAndroid = 0 <= navigator.userAgent.toLowerCase().indexOf("android");
		var R;
		x = {
			eventTarget: "wrapper",
			mode: "horizontal",
			touchRatio: 1,
			speed: 300,
			freeMode: !1,
			freeModeFluid: !1,
			momentumRatio: 1,
			momentumBounce: !0,
			momentumBounceRatio: 1,
			slidesPerView: 1,
			slidesPerGroup: 1,
			slidesPerViewFit: !0,
			simulateTouch: !0,
			followFinger: !0,
			shortSwipes: !0,
			longSwipesRatio: .5,
			moveStartThreshold: !1,
			onlyExternal: !1,
			createPagination: !0,
			pagination: !1,
			paginationElement: "span",
			paginationClickable: !1,
			paginationAsRange: !0,
			resistance: !0,
			scrollContainer: !1,
			preventLinks: !0,
			preventLinksPropagation: !1,
			noSwiping: !1,
			noSwipingClass: "swiper-no-swiping",
			initialSlide: 0,
			keyboardControl: !1,
			mousewheelControl: !1,
			mousewheelControlForceToAxis: !1,
			useCSS3Transforms: !0,
			autoplay: !1,
			autoplayDisableOnInteraction: !0,
			autoplayStopOnLast: !1,
			loop: !1,
			loopAdditionalSlides: 0,
			roundLengths: !1,
			calculateHeight: !1,
			cssWidthAndHeight: !1,
			updateOnImagesReady: !0,
			releaseFormElements: !0,
			watchActiveIndex: !1,
			visibilityFullFit: !1,
			offsetPxBefore: 0,
			offsetPxAfter: 0,
			offsetSlidesBefore: 0,
			offsetSlidesAfter: 0,
			centeredSlides: !1,
			queueStartCallbacks: !1,
			queueEndCallbacks: !1,
			autoResize: !0,
			resizeReInit: !1,
			DOMAnimation: !0,
			loader: {
				slides: [],
				slidesHTMLType: "inner",
				surroundGroups: 1,
				logic: "reload",
				loadAllSlides: !1
			},
			swipeToPrev: !0,
			swipeToNext: !0,
			slideElement: "div",
			slideClass: "swiper-slide",
			slideActiveClass: "swiper-slide-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			wrapperClass: "swiper-wrapper",
			paginationElementClass: "swiper-pagination-switch",
			paginationActiveClass: "swiper-active-switch",
			paginationVisibleClass: "swiper-visible-switch"
		};
		b = b || {};
		for (var q in x)
			if (q in b && "object" == typeof b[q])
				for (var K in x[q]) K in b[q] || (b[q][K] = x[q][K]);
			else q in b || (b[q] = x[q]);
		a.params = b;
		b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0);
		b.loop && (b.resistance = "100%");
		var n = "horizontal" === b.mode;
		q = ["mousedown", "mousemove", "mouseup"];
		a.browser.ie10 && (q = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]);
		a.browser.ie11 && (q = ["pointerdown", "pointermove", "pointerup"]);
		a.touchEvents = {
			touchStart: a.support.touch || !b.simulateTouch ? "touchstart" : q[0],
			touchMove: a.support.touch || !b.simulateTouch ? "touchmove" : q[1],
			touchEnd: a.support.touch || !b.simulateTouch ? "touchend" : q[2]
		};
		for (q = a.container.childNodes.length - 1; 0 <= q; q--)
			if (a.container.childNodes[q].className)
				for (K = a.container.childNodes[q].className.split(/\s+/), x = 0; x < K.length; x++) K[x] === b.wrapperClass && (R = a.container.childNodes[q]);
		a.wrapper = R;
		a._extendSwiperSlide = function(d) {
			return d.append = function() {
					return b.loop ? d.insertAfter(a.slides.length - a.loopedSlides) : (a.wrapper.appendChild(d), a.reInit()), d
				}, d.prepend = function() {
					return b.loop ? (a.wrapper.insertBefore(d, a.slides[a.loopedSlides]), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.wrapper.insertBefore(d, a.wrapper.firstChild), a.reInit(), d
				}, d.insertAfter = function(k) {
					if ("undefined" == typeof k) return !1;
					var c;
					return b.loop ? (c = a.slides[k + 1 + a.loopedSlides], c ? a.wrapper.insertBefore(d, c) : a.wrapper.appendChild(d), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : (c = a.slides[k + 1], a.wrapper.insertBefore(d, c)), a.reInit(), d
				}, d.clone = function() {
					return a._extendSwiperSlide(d.cloneNode(!0))
				},
				d.remove = function() {
					a.wrapper.removeChild(d);
					a.reInit()
				}, d.html = function(a) {
					return "undefined" == typeof a ? d.innerHTML : (d.innerHTML = a, d)
				}, d.index = function() {
					for (var b, c = a.slides.length - 1; 0 <= c; c--) d === a.slides[c] && (b = c);
					return b
				}, d.isActive = function() {
					return d.index() === a.activeIndex ? !0 : !1
				}, d.swiperSlideDataStorage || (d.swiperSlideDataStorage = {}), d.getData = function(a) {
					return d.swiperSlideDataStorage[a]
				}, d.setData = function(a, b) {
					return d.swiperSlideDataStorage[a] = b, d
				}, d.data = function(a, b) {
					return "undefined" == typeof b ? d.getAttribute("data-" + a) : (d.setAttribute("data-" + a, b), d)
				}, d.getWidth = function(b, c) {
					return a.h.getWidth(d, b, c)
				}, d.getHeight = function(b, c) {
					return a.h.getHeight(d, b, c)
				}, d.getOffset = function() {
					return a.h.getOffset(d)
				}, d
		};
		a.calcSlides = function(d) {
			var k = a.slides ? a.slides.length : !1;
			a.slides = [];
			a.displaySlides = [];
			for (var c = 0; c < a.wrapper.childNodes.length; c++)
				if (a.wrapper.childNodes[c].className)
					for (var e = a.wrapper.childNodes[c].className.split(/\s+/), g = 0; g < e.length; g++) e[g] === b.slideClass && a.slides.push(a.wrapper.childNodes[c]);
			for (c = a.slides.length - 1; 0 <= c; c--) a._extendSwiperSlide(a.slides[c]);
			!1 !== k && (k !== a.slides.length || d) && (l(), h(), a.updateActiveSlide(), a.params.pagination && a.createPagination(), a.callPlugins("numberOfSlidesChanged"))
		};
		a.createSlide = function(d, c, e) {
			c = c || a.params.slideClass;
			e = e || b.slideElement;
			e = document.createElement(e);
			return e.innerHTML = d || "", e.className = c, a._extendSwiperSlide(e)
		};
		a.appendSlide = function(b, c, e) {
			return b ? b.nodeType ? a._extendSwiperSlide(b).append() : a.createSlide(b, c, e).append() : void 0
		};
		a.prependSlide = function(b, c, e) {
			return b ? b.nodeType ? a._extendSwiperSlide(b).prepend() : a.createSlide(b, c, e).prepend() : void 0
		};
		a.insertSlideAfter = function(b, c, e, g) {
			return "undefined" == typeof b ? !1 : c.nodeType ? a._extendSwiperSlide(c).insertAfter(b) : a.createSlide(c, e, g).insertAfter(b)
		};
		a.removeSlide = function(d) {
			if (a.slides[d]) {
				if (b.loop) {
					if (!a.slides[d + a.loopedSlides]) return !1;
					a.slides[d + a.loopedSlides].remove();
					a.removeLoopedSlides();
					a.calcSlides();
					a.createLoop()
				} else a.slides[d].remove();
				return !0
			}
			return !1
		};
		a.removeLastSlide = function() {
			return 0 < a.slides.length ? (b.loop ? (a.slides[a.slides.length - 1 - a.loopedSlides].remove(), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.slides[a.slides.length - 1].remove(), !0) : !1
		};
		a.removeAllSlides = function() {
			for (var b = a.slides.length - 1; 0 <= b; b--) a.slides[b].remove()
		};
		a.getSlide = function(b) {
			return a.slides[b]
		};
		a.getLastSlide = function() {
			return a.slides[a.slides.length - 1]
		};
		a.getFirstSlide = function() {
			return a.slides[0]
		};
		a.activeSlide = function() {
			return a.slides[a.activeIndex]
		};
		a.fireCallback = function(d, c, e, g, f, h) {
			if ("[object Array]" === Object.prototype.toString.call(d))
				for (var k = 0; k < d.length; k++) "function" == typeof d[k] && d[k](c, e, g, f, h);
			else "[object String]" === Object.prototype.toString.call(d) ? b["on" + d] && a.fireCallback(b["on" + d], c, e, g, f, h) : d(c, e, g, f, h)
		};
		a.addCallback = function(a, b) {
			var d;
			return this.params["on" + a] ? "[object Array]" === Object.prototype.toString.apply(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (d = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(d), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
		};
		a.removeCallbacks = function(b) {
			a.params["on" + b] && (a.params["on" + b] = null)
		};
		var S = [];
		for (C in a.plugins) b[C] && (q = a.plugins[C](a, b[C])) && S.push(q);
		a.callPlugins = function(a, b) {
			b || (b = {});
			for (var d = 0; d < S.length; d++) a in S[d] && S[d][a](b)
		};
		!a.browser.ie10 && !a.browser.ie11 || b.onlyExternal || a.wrapper.classList.add("swiper-wp8-" + (n ? "horizontal" : "vertical"));
		b.freeMode && (a.container.className += " swiper-free-mode");
		a.initialized = !1;
		a.init = function(d, c) {
			var k = a.h.getWidth(a.container, !1, b.roundLengths),
				e = a.h.getHeight(a.container, !1, b.roundLengths);
			if (k !== a.width || e !== a.height || d) {
				a.width = k;
				a.height = e;
				var g, f, h;
				m = n ? k : e;
				var l = a.wrapper;
				if (d && a.calcSlides(c), "auto" === b.slidesPerView) {
					var q = 0,
						r = 0;
					0 < b.slidesOffset && (l.style.paddingLeft = "", l.style.paddingRight = "", l.style.paddingTop = "", l.style.paddingBottom = "");
					l.style.width = "";
					l.style.height = "";
					0 < b.offsetPxBefore && (n ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
					0 < b.offsetPxAfter && (n ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
					b.centeredSlides && (n ? (a.wrapperLeft = (m - this.slides[0].getWidth(!0, b.roundLengths)) / 2, a.wrapperRight = (m - a.slides[a.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (a.wrapperTop = (m - a.slides[0].getHeight(!0, b.roundLengths)) / 2, a.wrapperBottom = (m - a.slides[a.slides.length - 1].getHeight(!0, b.roundLengths)) / 2));
					n ? (0 <= a.wrapperLeft && (l.style.paddingLeft = a.wrapperLeft + "px"), 0 <= a.wrapperRight && (l.style.paddingRight = a.wrapperRight + "px")) : (0 <= a.wrapperTop && (l.style.paddingTop = a.wrapperTop + "px"), 0 <= a.wrapperBottom && (l.style.paddingBottom = a.wrapperBottom + "px"));
					var w = f = 0;
					a.snapGrid = [];
					a.slidesGrid = [];
					for (h = g = 0; h < a.slides.length; h++) {
						k = a.slides[h].getWidth(!0, b.roundLengths);
						e = a.slides[h].getHeight(!0, b.roundLengths);
						b.calculateHeight && (g = Math.max(g, e));
						var t = n ? k : e;
						if (b.centeredSlides) {
							var u = h === a.slides.length - 1 ? 0 : a.slides[h + 1].getWidth(!0, b.roundLengths),
								x = h === a.slides.length - 1 ? 0 : a.slides[h + 1].getHeight(!0, b.roundLengths);
							u = n ? u : x;
							if (t > m) {
								if (b.slidesPerViewFit) a.snapGrid.push(f + a.wrapperLeft), a.snapGrid.push(f + t - m + a.wrapperLeft);
								else
									for (x = 0; x <= Math.floor(t / (m + a.wrapperLeft)); x++) a.snapGrid.push(0 === x ? f + a.wrapperLeft : f + a.wrapperLeft + m * x);
								a.slidesGrid.push(f + a.wrapperLeft)
							} else a.snapGrid.push(w), a.slidesGrid.push(w);
							w += t / 2 + u / 2
						} else {
							if (t > m)
								if (b.slidesPerViewFit) a.snapGrid.push(f), a.snapGrid.push(f + t - m);
								else if (0 !== m)
								for (u = 0; u <= Math.floor(t / m); u++) a.snapGrid.push(f + m * u);
							else a.snapGrid.push(f);
							else a.snapGrid.push(f);
							a.slidesGrid.push(f)
						}
						f += t;
						q += k;
						r += e
					}
					b.calculateHeight && (a.height = g);
					n ? (G = q + a.wrapperRight + a.wrapperLeft, l.style.width = q + "px", l.style.height = a.height + "px") : (G = r + a.wrapperTop + a.wrapperBottom, l.style.width = a.width + "px", l.style.height = r + "px")
				} else if (b.scrollContainer) l.style.width = "", l.style.height = "", g = a.slides[0].getWidth(!0, b.roundLengths), f = a.slides[0].getHeight(!0, b.roundLengths), G = n ? g : f, l.style.width = g + "px", l.style.height = f + "px", v = n ? g : f;
				else {
					if (b.calculateHeight) {
						f = g = 0;
						n || (a.container.style.height = "");
						l.style.height = "";
						for (h = 0; h < a.slides.length; h++) a.slides[h].style.height = "", g = Math.max(a.slides[h].getHeight(!0), g), n || (f += a.slides[h].getHeight(!0));
						e = g;
						a.height = e;
						n ? f = e : (m = e, a.container.style.height = m + "px")
					} else e = n ? a.height : a.height / b.slidesPerView, b.roundLengths && (e = Math.ceil(e)), f = n ? a.height : a.slides.length * e;
					k = n ? a.width / b.slidesPerView : a.width;
					b.roundLengths && (k = Math.ceil(k));
					g = n ? a.slides.length * k : a.width;
					v = n ? k : e;
					0 < b.offsetSlidesBefore && (n ? a.wrapperLeft = v * b.offsetSlidesBefore : a.wrapperTop = v * b.offsetSlidesBefore);
					0 < b.offsetSlidesAfter && (n ? a.wrapperRight = v * b.offsetSlidesAfter : a.wrapperBottom = v * b.offsetSlidesAfter);
					0 < b.offsetPxBefore && (n ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
					0 < b.offsetPxAfter && (n ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
					b.centeredSlides && (n ? (a.wrapperLeft = (m - v) / 2, a.wrapperRight = (m - v) / 2) : (a.wrapperTop = (m - v) / 2, a.wrapperBottom = (m - v) / 2));
					n ? (0 < a.wrapperLeft && (l.style.paddingLeft = a.wrapperLeft + "px"), 0 < a.wrapperRight && (l.style.paddingRight = a.wrapperRight + "px")) : (0 < a.wrapperTop && (l.style.paddingTop = a.wrapperTop + "px"), 0 < a.wrapperBottom && (l.style.paddingBottom = a.wrapperBottom + "px"));
					G = n ? g + a.wrapperRight + a.wrapperLeft : f + a.wrapperTop + a.wrapperBottom;
					0 < parseFloat(g) && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (l.style.width = g + "px");
					0 < parseFloat(f) && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (l.style.height = f + "px");
					f = 0;
					a.snapGrid = [];
					a.slidesGrid = [];
					for (h = 0; h < a.slides.length; h++) a.snapGrid.push(f),
						a.slidesGrid.push(f), f += v, 0 < parseFloat(k) && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (a.slides[h].style.width = k + "px"), 0 < parseFloat(e) && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (a.slides[h].style.height = e + "px")
				}
				a.initialized ? (a.callPlugins("onInit"), b.onInit && a.fireCallback(b.onInit, a)) : (a.callPlugins("onFirstInit"), b.onFirstInit && a.fireCallback(b.onFirstInit, a));
				a.initialized = !0
			}
		};
		a.reInit = function(b) {
			a.init(!0, b)
		};
		a.resizeFix = function(d) {
			a.callPlugins("beforeResizeFix");
			a.init(b.resizeReInit || d);
			b.freeMode ? a.getWrapperTranslate() < -g() && (a.setWrapperTransition(0), a.setWrapperTranslate(-g())) : (a.swipeTo(b.loop ? a.activeLoopIndex : a.activeIndex, 0, !1), b.autoplay && (a.support.transitions && "undefined" != typeof u ? "undefined" != typeof u && (clearTimeout(u), u = void 0, a.startAutoplay()) : "undefined" != typeof A && (clearInterval(A), A = void 0, a.startAutoplay())));
			a.callPlugins("afterResizeFix")
		};
		a.destroy = function() {
			var d = a.h.removeEventListener,
				c = "wrapper" === b.eventTarget ? a.wrapper : a.container;
			a.browser.ie10 || a.browser.ie11 ? (d(c, a.touchEvents.touchStart, H), d(document, a.touchEvents.touchMove, I), d(document, a.touchEvents.touchEnd, J)) : (a.support.touch && (d(c, "touchstart", H), d(c, "touchmove", I), d(c, "touchend", J)), b.simulateTouch && (d(c, "mousedown", H), d(document, "mousemove", I), d(document, "mouseup", J)));
			b.autoResize && d(window, "resize", a.resizeFix);
			l();
			b.paginationClickable && Y();
			b.mousewheelControl && a._wheelEvent && d(a.container, a._wheelEvent, r);
			b.keyboardControl && d(document, "keydown", w);
			b.autoplay && a.stopAutoplay();
			a.callPlugins("onDestroy");
			a = null
		};
		a.disableKeyboardControl = function() {
			b.keyboardControl = !1;
			a.h.removeEventListener(document, "keydown", w)
		};
		a.enableKeyboardControl = function() {
			b.keyboardControl = !0;
			a.h.addEventListener(document, "keydown", w)
		};
		var W = (new Date).getTime();
		if (a.disableMousewheelControl = function() {
				return a._wheelEvent ? (b.mousewheelControl = !1, a.h.removeEventListener(a.container, a._wheelEvent, r), !0) : !1
			}, a.enableMousewheelControl = function() {
				return a._wheelEvent ? (b.mousewheelControl = !0, a.h.addEventListener(a.container, a._wheelEvent, r), !0) : !1
			}, b.grabCursor) {
			var C = a.container.style;
			C.cursor = "move";
			C.cursor = "grab";
			C.cursor = "-moz-grab";
			C.cursor = "-webkit-grab"
		}
		a.allowSlideClick = !0;
		a.allowLinks = !0;
		var z = !1;
		var N = !0;
		a.swipeNext = function(d) {
			!d && b.loop && a.fixLoop();
			!d && b.autoplay && a.stopAutoplay(!0);
			a.callPlugins("onSwipeNext");
			var c = d = a.getWrapperTranslate();
			if ("auto" === b.slidesPerView)
				for (var e = 0; e < a.snapGrid.length; e++) {
					if (-d >= a.snapGrid[e] && -d < a.snapGrid[e + 1]) {
						c = -a.snapGrid[e + 1];
						break
					}
				} else c = v * b.slidesPerGroup, c = -(Math.floor(Math.abs(d) / Math.floor(c)) * c + c);
			return c < -g() && (c = -g()), c === d ? !1 : (Q(c, "next"), !0)
		};
		a.swipePrev = function(d) {
			!d && b.loop && a.fixLoop();
			!d && b.autoplay && a.stopAutoplay(!0);
			a.callPlugins("onSwipePrev");
			d = Math.ceil(a.getWrapperTranslate());
			if ("auto" === b.slidesPerView) {
				var c = 0;
				for (var e = 1; e < a.snapGrid.length; e++) {
					if (-d === a.snapGrid[e]) {
						c = -a.snapGrid[e - 1];
						break
					}
					if (-d > a.snapGrid[e] && -d < a.snapGrid[e + 1]) {
						c = -a.snapGrid[e];
						break
					}
				}
			} else c = v * b.slidesPerGroup, c *= -(Math.ceil(-d / c) - 1);
			return 0 < c && (c = 0), c === d ? !1 : (Q(c, "prev"), !0)
		};
		a.swipeReset = function() {
			a.callPlugins("onSwipeReset");
			var d = a.getWrapperTranslate();
			var c = v * b.slidesPerGroup; - g();
			if ("auto" === b.slidesPerView) {
				for (var e = c = 0; e < a.snapGrid.length; e++) {
					if (-d === a.snapGrid[e]) return;
					if (-d >= a.snapGrid[e] && -d < a.snapGrid[e + 1]) {
						c = 0 < a.positions.diff ? -a.snapGrid[e + 1] : -a.snapGrid[e];
						break
					}
				} - d >= a.snapGrid[a.snapGrid.length - 1] && (c = -a.snapGrid[a.snapGrid.length - 1])
			} else c = 0 > d ? Math.round(d / c) * c : 0;
			d <= -g() && (c = -g());
			return b.scrollContainer && (c = 0 > d ? d : 0), c < -g() && (c = -g()), b.scrollContainer && m > v && (c = 0), c === d ? !1 : (Q(c, "reset"), !0)
		};
		a.swipeTo = function(d, c, e) {
			d = parseInt(d, 10);
			a.callPlugins("onSwipeTo", {
				index: d,
				speed: c
			});
			b.loop && (d += a.loopedSlides);
			var k = a.getWrapperTranslate();
			if (!(d > a.slides.length - 1 || 0 > d)) {
				var f;
				return f = "auto" === b.slidesPerView ? -a.slidesGrid[d] : -d * v, f < -g() && (f = -g()), f === k ? !1 : (e = !1 === e ? !1 : !0, Q(f, "to", {
					index: d,
					speed: c,
					runCallbacks: e
				}), !0)
			}
		};
		a._queueStartCallbacks = !1;
		a._queueEndCallbacks = !1;
		a.updateActiveSlide = function(d) {
			if (a.initialized && 0 !== a.slides.length) {
				a.previousIndex = a.activeIndex;
				"undefined" == typeof d && (d = a.getWrapperTranslate());
				0 < d && (d = 0);
				var c;
				if ("auto" === b.slidesPerView) {
					if (a.activeIndex = a.slidesGrid.indexOf(-d), 0 > a.activeIndex) {
						for (c = 0; c < a.slidesGrid.length - 1 && !(-d > a.slidesGrid[c] && -d < a.slidesGrid[c + 1]); c++);
						a.activeIndex = Math.abs(a.slidesGrid[c + 1] + d) >= Math.abs(a.slidesGrid[c] + d) ? c : c + 1
					}
				} else a.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-d / v);
				if (a.activeIndex === a.slides.length && (a.activeIndex = a.slides.length - 1), 0 > a.activeIndex && (a.activeIndex = 0), a.slides[a.activeIndex]) {
					if (a.calcVisibleSlides(d), a.support.classList) {
						for (c = 0; c < a.slides.length; c++) {
							var e = a.slides[c];
							e.classList.remove(b.slideActiveClass);
							0 <= a.visibleSlides.indexOf(e) ? e.classList.add(b.slideVisibleClass) : e.classList.remove(b.slideVisibleClass)
						}
						a.slides[a.activeIndex].classList.add(b.slideActiveClass)
					} else {
						e = new RegExp("\\s*" + b.slideActiveClass);
						var f = new RegExp("\\s*" + b.slideVisibleClass);
						for (c = 0; c < a.slides.length; c++) a.slides[c].className = a.slides[c].className.replace(e, "").replace(f, ""), 0 <= a.visibleSlides.indexOf(a.slides[c]) && (a.slides[c].className += " " + b.slideVisibleClass);
						a.slides[a.activeIndex].className += " " + b.slideActiveClass
					}
					b.loop ? (c = a.loopedSlides, a.activeLoopIndex = a.activeIndex - c, a.activeLoopIndex >= a.slides.length - 2 * c && (a.activeLoopIndex = a.slides.length - 2 * c - a.activeLoopIndex), 0 > a.activeLoopIndex && (a.activeLoopIndex = a.slides.length - 2 * c + a.activeLoopIndex), 0 > a.activeLoopIndex && (a.activeLoopIndex = 0)) : a.activeLoopIndex = a.activeIndex;
					b.pagination && a.updatePagination(d)
				}
			}
		};
		a.createPagination = function(d) {
			if (b.paginationClickable && a.paginationButtons && Y(), a.paginationContainer = b.pagination.nodeType ? b.pagination : e(b.pagination)[0], b.createPagination) {
				var c = "",
					f = a.slides.length;
				b.loop && (f -= 2 * a.loopedSlides);
				for (var g = 0; f > g; g++) c += "\x3c" + b.paginationElement + ' class\x3d"' + b.paginationElementClass + '"\x3e\x3c/' + b.paginationElement + "\x3e";
				a.paginationContainer.innerHTML = c
			}
			a.paginationButtons = e("." + b.paginationElementClass, a.paginationContainer);
			d || a.updatePagination();
			a.callPlugins("onCreatePagination");
			if (b.paginationClickable && (d = a.paginationButtons))
				for (c = 0; c < d.length; c++) a.h.addEventListener(d[c], "click", Z)
		};
		a.updatePagination = function(d) {
			if (b.pagination && !(1 > a.slides.length) && e("." + b.paginationActiveClass, a.paginationContainer)) {
				var c = a.paginationButtons;
				if (0 !== c.length) {
					for (var f = 0; f < c.length; f++) c[f].className = b.paginationElementClass;
					f = b.loop ? a.loopedSlides : 0;
					if (b.paginationAsRange) {
						a.visibleSlides || a.calcVisibleSlides(d);
						var g = [];
						for (d = 0; d < a.visibleSlides.length; d++) {
							var h = a.slides.indexOf(a.visibleSlides[d]) - f;
							b.loop && 0 > h && (h = a.slides.length - 2 * a.loopedSlides + h);
							b.loop && h >= a.slides.length - 2 * a.loopedSlides && (h = a.slides.length - 2 * a.loopedSlides - h, h = Math.abs(h));
							g.push(h)
						}
						for (d = 0; d < g.length; d++) c[g[d]] && (c[g[d]].className += " " + b.paginationVisibleClass);
						b.loop ? void 0 !== c[a.activeLoopIndex] && (c[a.activeLoopIndex].className += " " + b.paginationActiveClass) : c[a.activeIndex].className += " " + b.paginationActiveClass
					} else b.loop ? c[a.activeLoopIndex] && (c[a.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : c[a.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
				}
			}
		};
		a.calcVisibleSlides = function(d) {
			var c = [],
				e = 0,
				f = 0;
			n && 0 < a.wrapperLeft && (d += a.wrapperLeft);
			!n && 0 < a.wrapperTop && (d += a.wrapperTop);
			for (var g = 0; g < a.slides.length; g++) {
				e += f;
				f = "auto" === b.slidesPerView ? n ? a.h.getWidth(a.slides[g], !0, b.roundLengths) : a.h.getHeight(a.slides[g], !0, b.roundLengths) : v;
				var h = e + f;
				var l = !1;
				b.visibilityFullFit ? (e >= -d && -d + m >= h && (l = !0), -d >= e && h >= -d + m && (l = !0)) : (h > -d && -d + m >= h && (l = !0), e >= -d && -d + m > e && (l = !0), -d > e && h > -d + m && (l = !0));
				l && c.push(a.slides[g])
			}
			0 === c.length && (c = [a.slides[a.activeIndex]]);
			a.visibleSlides = c
		};
		var A;
		a.startAutoplay = function() {
			if (a.support.transitions) {
				if ("undefined" != typeof u) return !1;
				b.autoplay && (a.callPlugins("onAutoplayStart"), b.onAutoplayStart && a.fireCallback(b.onAutoplayStart, a), T())
			} else {
				if ("undefined" != typeof A) return !1;
				b.autoplay && (a.callPlugins("onAutoplayStart"), b.onAutoplayStart && a.fireCallback(b.onAutoplayStart, a), A = setInterval(function() {
					b.loop ? (a.fixLoop(), a.swipeNext(!0)) : a.swipeNext(!0) || (b.autoplayStopOnLast ? (clearInterval(A), A = void 0) : a.swipeTo(0))
				}, b.autoplay))
			}
		};
		a.stopAutoplay = function(d) {
			if (a.support.transitions) {
				if (!u) return;
				u && clearTimeout(u);
				u = void 0;
				d && !b.autoplayDisableOnInteraction && a.wrapperTransitionEnd(function() {
					T()
				})
			} else A && clearInterval(A), A = void 0;
			a.callPlugins("onAutoplayStop");
			b.onAutoplayStop && a.fireCallback(b.onAutoplayStop, a)
		};
		a.loopCreated = !1;
		a.removeLoopedSlides = function() {
			if (a.loopCreated)
				for (var b = 0; b < a.slides.length; b++) !0 === a.slides[b].getData("looped") && a.wrapper.removeChild(a.slides[b])
		};
		a.createLoop = function() {
			if (0 !== a.slides.length) {
				a.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : b.slidesPerView + b.loopAdditionalSlides;
				a.loopedSlides > a.slides.length && (a.loopedSlides = a.slides.length);
				var c, e = "",
					f = "",
					g = "",
					h = a.slides.length,
					l = Math.floor(a.loopedSlides / h),
					m = a.loopedSlides % h;
				for (c = 0; l * h > c; c++) {
					var n = c;
					c >= h && (n = c - h * Math.floor(c / h));
					g += a.slides[n].outerHTML
				}
				for (c = 0; m > c; c++) f += X(b.slideDuplicateClass, a.slides[c].outerHTML);
				for (c = h - m; h > c; c++) e += X(b.slideDuplicateClass, a.slides[c].outerHTML);
				R.innerHTML = e + g + R.innerHTML + g + f;
				a.loopCreated = !0;
				a.calcSlides();
				for (c = 0; c < a.slides.length; c++)(c < a.loopedSlides || c >= a.slides.length - a.loopedSlides) && a.slides[c].setData("looped", !0);
				a.callPlugins("onCreateLoop")
			}
		};
		a.fixLoop = function() {
			var c;
			a.activeIndex < a.loopedSlides ? (c = a.slides.length - 3 * a.loopedSlides + a.activeIndex, a.swipeTo(c, 0, !1)) : ("auto" === b.slidesPerView && a.activeIndex >= 2 * a.loopedSlides || a.activeIndex > a.slides.length - 2 * b.slidesPerView) && (c = -a.slides.length + a.activeIndex + a.loopedSlides, a.swipeTo(c, 0, !1))
		};
		a.loadSlides = function() {
			var c = "";
			a.activeLoaderIndex = 0;
			for (var e = b.loader.slides, f = b.loader.loadAllSlides ? e.length : b.slidesPerView * (1 + b.loader.surroundGroups), g = 0; f > g; g++) c += "outer" === b.loader.slidesHTMLType ? e[g] : "\x3c" + b.slideElement + ' class\x3d"' + b.slideClass + '" data-swiperindex\x3d"' + g + '"\x3e' + e[g] + "\x3c/" + b.slideElement + "\x3e";
			a.wrapper.innerHTML = c;
			a.calcSlides(!0);
			b.loader.loadAllSlides || a.wrapperTransitionEnd(a.reloadSlides, !0)
		};
		a.reloadSlides = function() {
			var c = b.loader.slides,
				e = parseInt(a.activeSlide().data("swiperindex"), 10);
			if (!(0 > e || e > c.length - 1)) {
				a.activeLoaderIndex = e;
				var f = Math.max(0, e - b.slidesPerView * b.loader.surroundGroups),
					g = Math.min(e + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, c.length - 1);
				0 < e && (a.setWrapperTranslate(-v * (e - f)), a.setWrapperTransition(0));
				if ("reload" === b.loader.logic) {
					var h = a.wrapper.innerHTML = "";
					for (e = f; g >= e; e++) h += "outer" === b.loader.slidesHTMLType ? c[e] : "\x3c" + b.slideElement + ' class\x3d"' + b.slideClass + '" data-swiperindex\x3d"' + e + '"\x3e' + c[e] + "\x3c/" + b.slideElement + "\x3e";
					a.wrapper.innerHTML = h
				} else {
					var l = 1E3,
						m = 0;
					for (e = 0; e < a.slides.length; e++) {
						var n = a.slides[e].data("swiperindex");
						f > n || n > g ? a.wrapper.removeChild(a.slides[e]) : (l = Math.min(n, l), m = Math.max(n, m))
					}
					for (e = f; g >= e; e++) l > e && (h = document.createElement(b.slideElement), h.className = b.slideClass, h.setAttribute("data-swiperindex", e), h.innerHTML = c[e], a.wrapper.insertBefore(h, a.wrapper.firstChild)), e > m && (h = document.createElement(b.slideElement), h.className = b.slideClass, h.setAttribute("data-swiperindex", e), h.innerHTML = c[e], a.wrapper.appendChild(h))
				}
				a.reInit(!0)
			}
		};
		a.calcSlides();
		0 < b.loader.slides.length && 0 === a.slides.length && a.loadSlides();
		b.loop && a.createLoop();
		a.init();
		f();
		b.pagination && a.createPagination(!0);
		b.loop || 0 < b.initialSlide ? a.swipeTo(b.initialSlide, 0, !1) : a.updateActiveSlide(0);
		b.autoplay && a.startAutoplay();
		a.centerIndex = a.activeIndex;
		b.onSwiperCreated && a.fireCallback(b.onSwiperCreated, a);
		a.callPlugins("onSwiperCreated")
	}
};
Swiper.prototype = {
	plugins: {},
	wrapperTransitionEnd: function(c, b) {
		function e(w) {
			if (w.target === h && (c(f), f.params.queueEndCallbacks && (f._queueEndCallbacks = !1), !b))
				for (g = 0; g < l.length; g++) f.h.removeEventListener(h, l[g], e)
		}
		var g, f = this,
			h = f.wrapper,
			l = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
		if (c)
			for (g = 0; g < l.length; g++) f.h.addEventListener(h, l[g], e)
	},
	getWrapperTranslate: function(c) {
		var b, e, g, f, h = this.wrapper;
		return "undefined" == typeof c && (c = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (g = window.getComputedStyle(h, null), window.WebKitCSSMatrix ? f = new WebKitCSSMatrix("none" === g.webkitTransform ? "" : g.webkitTransform) : (f = g.MozTransform || g.OTransform || g.MsTransform || g.msTransform || g.transform || g.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = f.toString().split(",")), "x" === c && (e = window.WebKitCSSMatrix ? f.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === c && (e = window.WebKitCSSMatrix ? f.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === c && (e = parseFloat(h.style.left, 10) || 0), "y" === c && (e = parseFloat(h.style.top, 10) || 0)), e || 0
	},
	setWrapperTranslate: function(c, b, e) {
		var g, f = this.wrapper.style,
			h = {
				x: 0,
				y: 0,
				z: 0
			};
		3 === arguments.length ? (h.x = c, h.y = b, h.z = e) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), h[b] = c);
		this.support.transforms && this.params.useCSS3Transforms ? (g = this.support.transforms3d ? "translate3d(" + h.x + "px, " + h.y + "px, " + h.z + "px)" : "translate(" + h.x + "px, " + h.y + "px)", f.webkitTransform = f.MsTransform = f.msTransform = f.MozTransform = f.OTransform = f.transform = g) : (f.left = h.x + "px", f.top = h.y + "px");
		this.callPlugins("onSetWrapperTransform", h);
		this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, h)
	},
	setWrapperTransition: function(c) {
		var b = this.wrapper.style;
		b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = c / 1E3 + "s";
		this.callPlugins("onSetWrapperTransition", {
			duration: c
		});
		this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, c)
	},
	h: {
		getWidth: function(c, b, e) {
			var g = window.getComputedStyle(c, null).getPropertyValue("width"),
				f = parseFloat(g);
			return (isNaN(f) || 0 < g.indexOf("%") || 0 > f) && (f = c.offsetWidth - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-right"))), b && (f += parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-right"))), e ? Math.ceil(f) : f
		},
		getHeight: function(c, b, e) {
			if (b) return c.offsetHeight;
			var g = window.getComputedStyle(c, null).getPropertyValue("height"),
				f = parseFloat(g);
			return (isNaN(f) || 0 < g.indexOf("%") || 0 > f) && (f = c.offsetHeight - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-bottom"))), b && (f += parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-bottom"))), e ? Math.ceil(f) : f
		},
		getOffset: function(c) {
			var b = c.getBoundingClientRect(),
				e = document.body,
				g = c.clientTop || e.clientTop || 0;
			e = c.clientLeft || e.clientLeft || 0;
			var f = window.pageYOffset || c.scrollTop;
			c = window.pageXOffset || c.scrollLeft;
			return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, c = document.documentElement.scrollLeft), {
				top: b.top + f - g,
				left: b.left + c - e
			}
		},
		windowWidth: function() {
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
		},
		windowHeight: function() {
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
		},
		windowScroll: function() {
			return "undefined" != typeof pageYOffset ? {
				left: window.pageXOffset,
				top: window.pageYOffset
			} : document.documentElement ? {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			} : void 0
		},
		addEventListener: function(c, b, e, g) {
			"undefined" == typeof g && (g = !1);
			c.addEventListener ? c.addEventListener(b, e, g) : c.attachEvent && c.attachEvent("on" + b, e)
		},
		removeEventListener: function(c, b, e, g) {
			"undefined" == typeof g && (g = !1);
			c.removeEventListener ? c.removeEventListener(b, e, g) : c.detachEvent && c.detachEvent("on" + b, e)
		}
	},
	setTransform: function(c, b) {
		var e = c.style;
		e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = b
	},
	setTranslate: function(c, b) {
		var e = c.style,
			g = b.x || 0,
			f = b.y || 0,
			h = b.z || 0;
		e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = this.support.transforms3d ? "translate3d(" + g + "px," + f + "px," + h + "px)" : "translate(" + g + "px," + f + "px)";
		this.support.transforms || (e.left = g + "px", e.top = f + "px")
	},
	setTransition: function(c, b) {
		var e = c.style;
		e.webkitTransitionDuration = e.MsTransitionDuration = e.msTransitionDuration = e.MozTransitionDuration = e.OTransitionDuration = e.transitionDuration = b + "ms"
	},
	support: {
		touch: window.Modernizr && !0 === Modernizr.touch || function() {
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
		}(),
		transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
			var c = document.createElement("div").style;
			return "webkitPerspective" in c || "MozPerspective" in c || "OPerspective" in c || "MsPerspective" in c || "perspective" in c
		}(),
		transforms: window.Modernizr && !0 === Modernizr.csstransforms || function() {
			var c = document.createElement("div").style;
			return "transform" in c || "WebkitTransform" in c || "MozTransform" in c || "msTransform" in c || "MsTransform" in c || "OTransform" in c
		}(),
		transitions: window.Modernizr && !0 === Modernizr.csstransitions || function() {
			var c = document.createElement("div").style;
			return "transition" in c || "WebkitTransition" in c || "MozTransition" in c || "msTransition" in c || "MsTransition" in c || "OTransition" in c
		}(),
		classList: function() {
			return "classList" in document.createElement("div")
		}()
	},
	browser: {
		ie8: function() {
			var c = -1;
			"Microsoft Internet Explorer" === navigator.appName && null !== (new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/)).exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
			return -1 !== c && 9 > c
		}(),
		ie10: window.navigator.msPointerEnabled,
		ie11: window.navigator.pointerEnabled
	}
};
(window.jQuery || window.Zepto) && ! function(c) {
	c.fn.swiper = function(b) {
		var e;
		return this.each(function(g) {
			var f = c(this);
			if (!f.data("swiper")) {
				var h = new Swiper(f[0], b);
				g || (e = h);
				f.data("swiper", h)
			}
		}), e
	}
}(window.jQuery || window.Zepto);
"undefined" != typeof module && (module.exports = Swiper);
"function" == typeof define && define.amd && define([], function() {
	return Swiper
});
$(function() {
	if (1 < $(".J-slider .banner-wrap").length) {
		var c = new Swiper(".J-slider", {
			loop: !0,
			pagination: ".pagination",
			autoplayDisableOnInteraction: !1,
			grabCursor: !0,
			paginationClickable: !0,
			autoHeight: !0,
			autoplay: 5E3
		});
		$(".J-slide-left").on("click", function(b) {
			b.preventDefault();
			c.swipePrev()
		});
		$(".J-slide-right").on("click", function(b) {
			b.preventDefault();
			c.swipeNext()
		});
		$(window).on("resize", function() {
			c.resizeFix()
		});
		$(".banner-total").on("mouseenter", function() {
			$(".J-slide-left").addClass("open");
			$(".J-slide-right").addClass("open")
		}).on("mouseleave", function() {
			$(".J-slide-left").removeClass("open");
			$(".J-slide-right").removeClass("open")
		})
	} else $(".banner-wrap").height(400).addClass("swiper-slide-active")
});
var utilsApp = {
	scrollDelay: 30,
	scrollDelta: 500,
	sendProbeData: function(c, b, e) {
		c = $.trim(c.closest(".J-video-wrap").attr("ads-data"));
		if ("" === c) return !1;
		c = c.replace(/:/g, "\x3d").replace(/,/g, "\x26");
		"undefined" === typeof e && (e = "");
		b = c + "\x26type\x3d" + {
			click: 1,
			loadstart: 6,
			loadeddata: 7,
			play: 2,
			end: 5
		}[b] + "\x26channel\x3dexpo\x26t\x3d106\x26playtime\x3d" + e;
		var g = new Image;
		g.onload = function() {
			g = null;
			delete g
		};
		g.src = "//stat.made-in-china.com/event/common.html?" + b
	},
	hasChinese: function(c) {
		return /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.exec(c) ? !0 : !1
	},
	hasSpecialChar: function(c) {
		var b = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
		return /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(c) || b.test(c)
	},
	initLazyLoad: function() {
		var c = $("img.need-lazyload"),
			b = c.length,
			e = document.documentElement.clientHeight;
		if (0 !== c.length) $(window).on("scroll.lazyload", function() {
			var g = $(window).scrollTop();
			c.each(function(c, h) {
				var f = $(h),
					w = f.offset().top;
				g + e + 100 >= w && !f.hasClass("loaded") && ($(h).attr("src", f.attr("data-src")).addClass("loaded"), --b)
			});
			0 >= b && $(window).off("scroll.lazyload")
		})
	},
	commonEvents: function() {
		var c = this;
		$(window).on("scroll.toTop", function() {
			200 < $(window).scrollTop() ? $(".J-to-top").show() : $(".J-to-top").hide()
		});
		$(".J-to-top").on("touchend, click", function() {
			$("body, html").animate({
				scrollTop: 0
			}, 200)
		});
		$(".J-search-btn").on("touchend", function() {
			var b = $("#expoName").val() || $("#smart-expoName").val();
			b = "//m.made-in-china.com/expo/" + $.trim(b) + "/productSearch";
			var e = $.trim($(".J-header-search .J-input input").val()),
				g = function(b, c) {
					var e = $(".J-search-error");
					e.hasClass("is-show") || (e.find(".J-alert-txt").html(b), e.addClass("is-show"), setTimeout(function() {
						$(".J-search-error").removeClass("is-show")
					}, c))
				};
			c.hasChinese(e) || c.hasSpecialChar(e) ? g("Please input the information in English only.", 2E3) : "undefined" === typeof e || "" === e ? g("Please input keyword(s).", 2E3) : window.location.href = b + "?word\x3d" + e
		})
	}
};

function initPage() {
	({
		init: function() {
			this.handle_animate()
		},
		handle_animate: function() {
			0 < $("#myvideo").size() && ($(".nav-controller").find(".inline-item").eq(3).click(function(c) {
				c.preventDefault()
			}).bind("click", function() {
				$("html, body, .content").animate({
					scrollTop: $(document).height()
				}, 1E3)
			}), $(".nav-controller").find(".inline-item").eq(2).click(function(c) {
				c.preventDefault()
			}).bind("click", function() {
				$("html, body, .content").animate({
					scrollTop: $("#what").offset().top - 14
				}, 1E3)
			}), $(".nav-controller").find(".inline-item").eq(1).click(function(c) {
				c.preventDefault()
			}).bind("click", function() {
				$("html, body, .content").animate({
					scrollTop: $("#timeline").offset().top - 60
				}, 1E3)
			}))
		}
	}).init()
}
$(function() {
	utilsApp.initLazyLoad();
	$(window).scroll();
	$(".J-item .img-wrap").bind("mouseover", function() {
		var b = $(this).parents(".J-item"),
			c = b.find(".J-mask"),
			g = b.find(".J-map"),
			f = b.find(".J-arrow");
		b = b.find(".J-action");
		c.show();
		g.animate({
			"margin-left": "0"
		}, 400, "easeOutQuad");
		b.animate({
			"margin-left": "0"
		}, 400, "easeOutQuad");
		f.show()
	});
	$(".J-item").bind("mouseleave", function() {
		var b = $(this).find(".J-mask"),
			c = $(this).find(".J-map"),
			g = $(this).find(".J-arrow"),
			f = $(this).find(".J-action");
		g.hide();
		c.animate({
			"margin-left": "-100%"
		}, 200);
		f.animate({
			"margin-left": "200px"
		}, 200, function() {
			b.hide()
		})
	});
	var c = 0;
	0 < $("#myvideo").size() && (document.getElementById("myvideo").controls = !1);
	$(".what-left").bind("click", function() {
		0 == c ? (document.getElementById("myvideo").play(), c = 1) : (document.getElementById("myvideo").pause(), c = 0);
		document.getElementById("myvideo").controls = !0
	});
	Select.use(".sex_select");
	(function(b, c) {
		$(b).keyup(function() {
			var e = $(b).val().length;
			e = c - e;
			$(b).val();
			0 <= e ? $(b).parent().find(".form-help").find(".live").html(e) : (e = $(b).val().substr(0, c), $(b).val(e))
		})
	})("#J-textarea", 200);
	validateInfo()
});

function validateInfo() {
	window.easyValidate && new easyValidate(document.forms.feedbackForm, {
		global: {
			validateBack: function(c) {},
			errorBack: function(c, b) {
				mic_touch && mic_touch.form.Tips(c, b)
			},
			passBack: function(c) {
				mic_touch.form.hideInputError(c)
			}
		},
		fields: {
			senderName: {
				pattern: [{
					regExp: "required",
					message: "Please enter your full name."
				}, {
					regExp: "enOnly",
					message: "Please enter your full name in English only."
				}]
			},
			senderMail: {
				pattern: [{
					regExp: "required",
					message: "Please enter an email."
				}, {
					regExp: "email",
					message: "Please enter a valid email."
				}]
			},
			subject: {
				pattern: [{
					regExp: "required",
					message: "Please enter your suggestion."
				}, {
					regExp: "enOnly",
					message: "Please enter in English only."
				}]
			}
		}
	})
};