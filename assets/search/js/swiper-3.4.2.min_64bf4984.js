! function() {
	var m, w = function(l, k) {
		function d() {
			var b = a.params.autoplay,
				c = a.slides.eq(a.activeIndex);
			c.attr("data-swiper-autoplay") && (b = c.attr("data-swiper-autoplay") || a.params.autoplay);
			a.autoplayTimeoutId = setTimeout(function() {
				a.params.loop ? (a.fixLoop(), a._slideNext(), a.emit("onAutoplay", a)) : a.isEnd ? k.autoplayStopOnLast ? a.stopAutoplay() : (a._slideTo(0), a.emit("onAutoplay", a)) : (a._slideNext(), a.emit("onAutoplay", a))
			}, b)
		}

		function e(a, c) {
			var b = m(a.target);
			if (!b.is(c))
				if ("string" == typeof c) b = b.parents(c);
				else if (c.nodeType) {
				var d;
				return b.parents().each(function(a, b) {
					b === c && (d = c)
				}), d ? c : void 0
			}
			if (0 !== b.length) return b[0]
		}

		function f(b, c) {
			c = c || {};
			var h = new(window.MutationObserver || window.WebkitMutationObserver)(function(b) {
				b.forEach(function(b) {
					a.onResize(!0);
					a.emit("onObserverUpdate", a, b)
				})
			});
			h.observe(b, {
				attributes: void 0 === c.attributes || c.attributes,
				childList: void 0 === c.childList || c.childList,
				characterData: void 0 === c.characterData || c.characterData
			});
			a.observers.push(h)
		}

		function g(b) {
			b.originalEvent && (b = b.originalEvent);
			var c = b.keyCode || b.charCode;
			if (!a.params.allowSwipeToNext && (a.isHorizontal() && 39 === c || !a.isHorizontal() && 40 === c) || !a.params.allowSwipeToPrev && (a.isHorizontal() && 37 === c || !a.isHorizontal() && 38 === c)) return !1;
			if (!(b.shiftKey || b.altKey || b.ctrlKey || b.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
				if (37 === c || 39 === c || 38 === c || 40 === c) {
					var h = !1;
					if (0 < a.container.parents("." + a.params.slideClass).length && 0 === a.container.parents("." + a.params.slideActiveClass).length) return;
					var d = window.pageXOffset,
						e = window.pageYOffset,
						f = window.innerWidth,
						T = window.innerHeight,
						n = a.container.offset();
					a.rtl && (n.left -= a.container[0].scrollLeft);
					n = [
						[n.left, n.top],
						[n.left + a.width, n.top],
						[n.left, n.top + a.height],
						[n.left + a.width, n.top + a.height]
					];
					for (var g = 0; g < n.length; g++) {
						var k = n[g];
						k[0] >= d && k[0] <= d + f && k[1] >= e && k[1] <= e + T && (h = !0)
					}
					if (!h) return
				}
				a.isHorizontal() ? (37 !== c && 39 !== c || (b.preventDefault ? b.preventDefault() : b.returnValue = !1), (39 === c && !a.rtl || 37 === c && a.rtl) && a.slideNext(), (37 === c && !a.rtl || 39 === c && a.rtl) && a.slidePrev()) : (38 !== c && 40 !== c || (b.preventDefault ? b.preventDefault() : b.returnValue = !1), 40 === c && a.slideNext(), 38 === c && a.slidePrev());
				a.emit("onKeyPress", a, c)
			}
		}

		function q(a) {
			var b = 0,
				h = 0,
				d = 0,
				e = 0;
			return "detail" in a && (h = a.detail), "wheelDelta" in a && (h = -a.wheelDelta / 120), "wheelDeltaY" in a && (h = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (b = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = h, h = 0), d = 10 * b, e = 10 * h, "deltaY" in a && (e = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || e) && a.deltaMode && (1 === a.deltaMode ? (d *= 40, e *= 40) : (d *= 800, e *= 800)), d && !b && (b = 1 > d ? -1 : 1), e && !h && (h = 1 > e ? -1 : 1), {
				spinX: b,
				spinY: h,
				pixelX: d,
				pixelY: e
			}
		}

		function r(b) {
			b.originalEvent && (b = b.originalEvent);
			var c = 0;
			c = a.rtl ? -1 : 1;
			var h = q(b);
			if (a.params.mousewheelForceToAxis)
				if (a.isHorizontal()) {
					if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return;
					c *= h.pixelX
				} else {
					if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return;
					c = h.pixelY
				}
			else c = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * c : -h.pixelY;
			if (0 !== c) {
				if (a.params.mousewheelInvert && (c = -c), a.params.freeMode) {
					c = a.getWrapperTranslate() + c * a.params.mousewheelSensitivity;
					h = a.isBeginning;
					var d = a.isEnd;
					if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setWrapperTransition(0), a.setWrapperTranslate(c), a.updateProgress(), a.updateActiveIndex(), (!h && a.isBeginning || !d && a.isEnd) && a.updateClasses(), a.params.freeModeSticky ? (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = setTimeout(function() {
							a.slideReset()
						}, 300)) : a.params.lazyLoading && a.lazy && a.lazy.load(), a.emit("onScroll", a, b), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === c || c === a.maxTranslate()) return
				} else {
					if (60 < (new window.Date).getTime() - a.mousewheel.lastScrollTime)
						if (0 > c)
							if (a.isEnd && !a.params.loop || a.animating) {
								if (a.params.mousewheelReleaseOnEdges) return !0
							} else a.slideNext(), a.emit("onScroll", a, b);
					else if (a.isBeginning && !a.params.loop || a.animating) {
						if (a.params.mousewheelReleaseOnEdges) return !0
					} else a.slidePrev(),
						a.emit("onScroll", a, b);
					a.mousewheel.lastScrollTime = (new window.Date).getTime()
				}
				return b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1
			}
		}

		function G(b, c) {
			b = m(b);
			var h = a.rtl ? -1 : 1;
			var d = b.attr("data-swiper-parallax") || "0";
			var e = b.attr("data-swiper-parallax-x");
			var f = b.attr("data-swiper-parallax-y");
			e || f ? (e = e || "0", f = f || "0") : a.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0");
			e = 0 <= e.indexOf("%") ? parseInt(e, 10) * c * h + "%" : e * c * h + "px";
			f = 0 <= f.indexOf("%") ? parseInt(f, 10) * c + "%" : f * c + "px";
			b.transform("translate3d(" + e + ", " + f + ",0px)")
		}

		function p(a) {
			return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
		}
		if (!(this instanceof w)) return new w(l, k);
		var A = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				autoplayStopOnLast: !1,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeMomentumVelocityRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				flip: {
					slideShadows: !0,
					limitRotation: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				zoom: !1,
				zoomMax: 3,
				zoomMin: 1,
				zoomToggle: !0,
				scrollbar: null,
				scrollbarHide: !0,
				scrollbarDraggable: !1,
				scrollbarSnapOnRelease: !1,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelReleaseOnEdges: !1,
				mousewheelInvert: !1,
				mousewheelForceToAxis: !1,
				mousewheelSensitivity: 1,
				mousewheelEventsTarged: "container",
				hashnav: !1,
				hashnavWatchState: !1,
				history: !1,
				replaceState: !1,
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				pagination: null,
				paginationElement: "span",
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				paginationProgressRender: null,
				paginationFractionRender: null,
				paginationCustomRender: null,
				paginationType: "bullets",
				resistance: !0,
				resistanceRatio: .85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingInPrevNextAmount: 1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				controlBy: "slide",
				normalizeSlideIndex: !0,
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				passiveListeners: !0,
				containerModifierClass: "swiper-container-",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slideDuplicateNextClass: "swiper-slide-duplicate-next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationCurrentClass: "swiper-pagination-current",
				paginationTotalClass: "swiper-pagination-total",
				paginationHiddenClass: "swiper-pagination-hidden",
				paginationProgressbarClass: "swiper-pagination-progressbar",
				paginationClickableClass: "swiper-pagination-clickable",
				paginationModifierClass: "swiper-pagination-",
				lazyLoadingClass: "swiper-lazy",
				lazyStatusLoadingClass: "swiper-lazy-loading",
				lazyStatusLoadedClass: "swiper-lazy-loaded",
				lazyPreloaderClass: "swiper-lazy-preloader",
				notificationClass: "swiper-notification",
				preloaderClass: "preloader",
				zoomContainerClass: "swiper-zoom-container",
				observer: !1,
				observeParents: !1,
				a11y: !1,
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				runCallbacksOnInit: !0
			},
			U = k && k.virtualTranslate;
		k = k || {};
		var y = {},
			t;
		for (t in k)
			if ("object" != typeof k[t] || null === k[t] || k[t].nodeType || k[t] === window || k[t] === document || void 0 !== z && k[t] instanceof z || "undefined" != typeof jQuery && k[t] instanceof jQuery) y[t] = k[t];
			else {
				y[t] = {};
				for (var Q in k[t]) y[t][Q] = k[t][Q]
			}
		for (var B in A)
			if (void 0 === k[B]) k[B] = A[B];
			else if ("object" == typeof k[B])
			for (var O in A[B]) void 0 === k[B][O] && (k[B][O] = A[B][O]);
		var a = this;
		if (a.params = k, a.originalParams = y, a.classNames = [], void 0 !== m && void 0 !== z && (m = z), (void 0 !== m || (m = void 0 === z ? window.Dom7 || window.Zepto || window.jQuery : z)) && (a.$ = m, a.currentBreakpoint = void 0, a.getActiveBreakpoint = function() {
				if (!a.params.breakpoints) return !1;
				var b, c = !1,
					h = [];
				for (b in a.params.breakpoints) a.params.breakpoints.hasOwnProperty(b) && h.push(b);
				h.sort(function(a, b) {
					return parseInt(a, 10) > parseInt(b, 10)
				});
				for (var d = 0; d < h.length; d++)(b = h[d]) >= window.innerWidth && !c && (c = b);
				return c || "max"
			}, a.setBreakpoint = function() {
				var b = a.getActiveBreakpoint();
				if (b && a.currentBreakpoint !== b) {
					var c = b in a.params.breakpoints ? a.params.breakpoints[b] : a.originalParams,
						h = a.params.loop && c.slidesPerView !== a.params.slidesPerView,
						d;
					for (d in c) a.params[d] = c[d];
					a.currentBreakpoint = b;
					h && a.destroyLoop && a.reLoop(!0)
				}
			}, a.params.breakpoints && a.setBreakpoint(), a.container = m(l), 0 !== a.container.length)) {
			if (1 < a.container.length) {
				var R = [];
				return a.container.each(function() {
					R.push(new w(this, k))
				}), R
			}
			a.container[0].swiper = a;
			a.container.data("swiper", a);
			a.classNames.push(a.params.containerModifierClass + a.params.direction);
			a.params.freeMode && a.classNames.push(a.params.containerModifierClass + "free-mode");
			a.support.flexbox || (a.classNames.push(a.params.containerModifierClass + "no-flexbox"), a.params.slidesPerColumn = 1);
			a.params.autoHeight && a.classNames.push(a.params.containerModifierClass + "autoheight");
			(a.params.parallax || a.params.watchSlidesVisibility) && (a.params.watchSlidesProgress = !0);
			a.params.touchReleaseOnEdges && (a.params.resistanceRatio = 0);
			0 <= ["cube", "coverflow", "flip"].indexOf(a.params.effect) && (a.support.transforms3d ? (a.params.watchSlidesProgress = !0, a.classNames.push(a.params.containerModifierClass + "3d")) : a.params.effect = "slide");
			"slide" !== a.params.effect && a.classNames.push(a.params.containerModifierClass + a.params.effect);
			"cube" === a.params.effect && (a.params.resistanceRatio = 0, a.params.slidesPerView = 1, a.params.slidesPerColumn = 1, a.params.slidesPerGroup = 1, a.params.centeredSlides = !1, a.params.spaceBetween = 0, a.params.virtualTranslate = !0);
			"fade" !== a.params.effect && "flip" !== a.params.effect || (a.params.slidesPerView = 1, a.params.slidesPerColumn = 1, a.params.slidesPerGroup = 1, a.params.watchSlidesProgress = !0, a.params.spaceBetween = 0, void 0 === U && (a.params.virtualTranslate = !0));
			a.params.grabCursor && a.support.touch && (a.params.grabCursor = !1);
			a.wrapper = a.container.children("." + a.params.wrapperClass);
			a.params.pagination && (a.paginationContainer = m(a.params.pagination), a.params.uniqueNavElements && "string" == typeof a.params.pagination && 1 < a.paginationContainer.length && 1 === a.container.find(a.params.pagination).length && (a.paginationContainer = a.container.find(a.params.pagination)), "bullets" === a.params.paginationType && a.params.paginationClickable ? a.paginationContainer.addClass(a.params.paginationModifierClass + "clickable") : a.params.paginationClickable = !1, a.paginationContainer.addClass(a.params.paginationModifierClass + a.params.paginationType));
			(a.params.nextButton || a.params.prevButton) && (a.params.nextButton && (a.nextButton = m(a.params.nextButton), a.params.uniqueNavElements && "string" == typeof a.params.nextButton && 1 < a.nextButton.length && 1 === a.container.find(a.params.nextButton).length && (a.nextButton = a.container.find(a.params.nextButton))), a.params.prevButton && (a.prevButton = m(a.params.prevButton), a.params.uniqueNavElements && "string" == typeof a.params.prevButton && 1 < a.prevButton.length && 1 === a.container.find(a.params.prevButton).length && (a.prevButton = a.container.find(a.params.prevButton))));
			a.isHorizontal = function() {
				return "horizontal" === a.params.direction
			};
			a.rtl = a.isHorizontal() && ("rtl" === a.container[0].dir.toLowerCase() || "rtl" === a.container.css("direction"));
			a.rtl && a.classNames.push(a.params.containerModifierClass + "rtl");
			a.rtl && (a.wrongRTL = "-webkit-box" === a.wrapper.css("display"));
			1 < a.params.slidesPerColumn && a.classNames.push(a.params.containerModifierClass + "multirow");
			a.device.android && a.classNames.push(a.params.containerModifierClass + "android");
			a.container.addClass(a.classNames.join(" "));
			a.translate = 0;
			a.progress = 0;
			a.velocity = 0;
			a.lockSwipeToNext = function() {
				a.params.allowSwipeToNext = !1;
				!1 === a.params.allowSwipeToPrev && a.params.grabCursor && a.unsetGrabCursor()
			};
			a.lockSwipeToPrev = function() {
				a.params.allowSwipeToPrev = !1;
				!1 === a.params.allowSwipeToNext && a.params.grabCursor && a.unsetGrabCursor()
			};
			a.lockSwipes = function() {
				a.params.allowSwipeToNext = a.params.allowSwipeToPrev = !1;
				a.params.grabCursor && a.unsetGrabCursor()
			};
			a.unlockSwipeToNext = function() {
				a.params.allowSwipeToNext = !0;
				!0 === a.params.allowSwipeToPrev && a.params.grabCursor && a.setGrabCursor()
			};
			a.unlockSwipeToPrev = function() {
				a.params.allowSwipeToPrev = !0;
				!0 === a.params.allowSwipeToNext && a.params.grabCursor && a.setGrabCursor()
			};
			a.unlockSwipes = function() {
				a.params.allowSwipeToNext = a.params.allowSwipeToPrev = !0;
				a.params.grabCursor && a.setGrabCursor()
			};
			a.setGrabCursor = function(b) {
				a.container[0].style.cursor = "move";
				a.container[0].style.cursor = b ? "-webkit-grabbing" : "-webkit-grab";
				a.container[0].style.cursor = b ? "-moz-grabbin" : "-moz-grab";
				a.container[0].style.cursor = b ? "grabbing" : "grab"
			};
			a.unsetGrabCursor = function() {
				a.container[0].style.cursor = ""
			};
			a.params.grabCursor && a.setGrabCursor();
			a.imagesToLoad = [];
			a.imagesLoaded = 0;
			a.loadImage = function(a, c, h, d, e, f) {
				function b() {
					f && f()
				}
				var E;
				a.complete && e ? b() : c ? (E = new window.Image, E.onload = b, E.onerror = b, d && (E.sizes = d), h && (E.srcset = h), c && (E.src = c)) : b()
			};
			a.preloadImages = function() {
				function b() {
					void 0 !== a && null !== a && a && (void 0 !== a.imagesLoaded && a.imagesLoaded++, a.imagesLoaded === a.imagesToLoad.length && (a.params.updateOnImagesReady && a.update(), a.emit("onImagesReady", a)))
				}
				a.imagesToLoad = a.container.find("img");
				for (var c = 0; c < a.imagesToLoad.length; c++) a.loadImage(a.imagesToLoad[c], a.imagesToLoad[c].currentSrc || a.imagesToLoad[c].getAttribute("src"), a.imagesToLoad[c].srcset || a.imagesToLoad[c].getAttribute("srcset"), a.imagesToLoad[c].sizes || a.imagesToLoad[c].getAttribute("sizes"), !0, b)
			};
			a.autoplayTimeoutId = void 0;
			a.autoplaying = !1;
			a.autoplayPaused = !1;
			a.startAutoplay = function() {
				return void 0 === a.autoplayTimeoutId && !!a.params.autoplay && !a.autoplaying && (a.autoplaying = !0, a.emit("onAutoplayStart", a), void d())
			};
			a.stopAutoplay = function(b) {
				a.autoplayTimeoutId && (a.autoplayTimeoutId && clearTimeout(a.autoplayTimeoutId), a.autoplaying = !1, a.autoplayTimeoutId = void 0, a.emit("onAutoplayStop", a))
			};
			a.pauseAutoplay = function(b) {
				a.autoplayPaused || (a.autoplayTimeoutId && clearTimeout(a.autoplayTimeoutId), a.autoplayPaused = !0, 0 === b ? (a.autoplayPaused = !1, d()) : a.wrapper.transitionEnd(function() {
					a && (a.autoplayPaused = !1, a.autoplaying ? d() : a.stopAutoplay())
				}))
			};
			a.minTranslate = function() {
				return -a.snapGrid[0]
			};
			a.maxTranslate = function() {
				return -a.snapGrid[a.snapGrid.length - 1]
			};
			a.updateAutoHeight = function() {
				var b, c = [],
					h = 0;
				if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
					for (b = 0; b < Math.ceil(a.params.slidesPerView); b++) {
						var d = a.activeIndex + b;
						if (d > a.slides.length) break;
						c.push(a.slides.eq(d)[0])
					} else c.push(a.slides.eq(a.activeIndex)[0]);
				for (b = 0; b < c.length; b++) void 0 !== c[b] && (d = c[b].offsetHeight, h = d > h ? d : h);
				h && a.wrapper.css("height", h + "px")
			};
			a.updateContainerSize = function() {
				var b = void 0 !== a.params.width ? a.params.width : a.container[0].clientWidth;
				var c = void 0 !== a.params.height ? a.params.height : a.container[0].clientHeight;
				0 === b && a.isHorizontal() || 0 === c && !a.isHorizontal() || (b = b - parseInt(a.container.css("padding-left"), 10) - parseInt(a.container.css("padding-right"), 10), c = c - parseInt(a.container.css("padding-top"), 10) - parseInt(a.container.css("padding-bottom"), 10), a.width = b, a.height = c, a.size = a.isHorizontal() ? a.width : a.height)
			};
			a.updateSlidesSize = function() {
				a.slides = a.wrapper.children("." + a.params.slideClass);
				a.snapGrid = [];
				a.slidesGrid = [];
				a.slidesSizesGrid = [];
				var b, c = a.params.spaceBetween,
					h = -a.params.slidesOffsetBefore,
					d = 0,
					e = 0;
				if (void 0 !== a.size) {
					"string" == typeof c && 0 <= c.indexOf("%") && (c = parseFloat(c.replace("%", "")) / 100 * a.size);
					a.virtualSize = -c;
					a.rtl ? a.slides.css({
						marginLeft: "",
						marginTop: ""
					}) : a.slides.css({
						marginRight: "",
						marginBottom: ""
					});
					var f;
					1 < a.params.slidesPerColumn && (f = Math.floor(a.slides.length / a.params.slidesPerColumn) === a.slides.length / a.params.slidesPerColumn ? a.slides.length : Math.ceil(a.slides.length / a.params.slidesPerColumn) * a.params.slidesPerColumn, "auto" !== a.params.slidesPerView && "row" === a.params.slidesPerColumnFill && (f = Math.max(f, a.params.slidesPerView * a.params.slidesPerColumn)));
					var g = a.params.slidesPerColumn,
						n = f / g,
						k = n - (a.params.slidesPerColumn * n - a.slides.length);
					for (b = 0; b < a.slides.length; b++) {
						var m = 0;
						var l = a.slides.eq(b);
						if (1 < a.params.slidesPerColumn) {
							var q, r, p;
							"column" === a.params.slidesPerColumnFill ? (r = Math.floor(b / g), p = b - r * g, (r > k || r === k && p === g - 1) && ++p >= g && (p = 0, r++), q = r + p * f / g, l.css({
								"-webkit-box-ordinal-group": q,
								"-moz-box-ordinal-group": q,
								"-ms-flex-order": q,
								"-webkit-order": q,
								order: q
							})) : (p = Math.floor(b / n), r = b - p * n);
							l.css("margin-" + (a.isHorizontal() ? "top" : "left"), 0 !== p && a.params.spaceBetween && a.params.spaceBetween + "px").attr("data-swiper-column", r).attr("data-swiper-row", p)
						}
						"none" !== l.css("display") && ("auto" === a.params.slidesPerView ? (m = a.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), a.params.roundLengths && (m = Math.floor(m))) : (m = (a.size - (a.params.slidesPerView - 1) * c) / a.params.slidesPerView, a.params.roundLengths && (m = Math.floor(m)), a.isHorizontal() ? a.slides[b].style.width = m + "px" : a.slides[b].style.height = m + "px"), a.slides[b].swiperSlideSize = m, a.slidesSizesGrid.push(m), a.params.centeredSlides ? (h = h + m / 2 + d / 2 + c, 0 === d && 0 !== b && (h = h - a.size / 2 - c), 0 === b && (h = h - a.size / 2 - c), .001 > Math.abs(h) && (h = 0), 0 == e % a.params.slidesPerGroup && a.snapGrid.push(h), a.slidesGrid.push(h)) : (0 == e % a.params.slidesPerGroup && a.snapGrid.push(h), a.slidesGrid.push(h), h = h + m + c), a.virtualSize += m + c, d = m, e++)
					}
					a.virtualSize = Math.max(a.virtualSize, a.size) + a.params.slidesOffsetAfter;
					if (a.rtl && a.wrongRTL && ("slide" === a.params.effect || "coverflow" === a.params.effect) && a.wrapper.css({
							width: a.virtualSize + a.params.spaceBetween + "px"
						}), a.support.flexbox && !a.params.setWrapperSize || (a.isHorizontal() ? a.wrapper.css({
							width: a.virtualSize + a.params.spaceBetween + "px"
						}) : a.wrapper.css({
							height: a.virtualSize + a.params.spaceBetween + "px"
						})), 1 < a.params.slidesPerColumn && (a.virtualSize = (m + a.params.spaceBetween) * f, a.virtualSize = Math.ceil(a.virtualSize / a.params.slidesPerColumn) - a.params.spaceBetween, a.isHorizontal() ? a.wrapper.css({
							width: a.virtualSize + a.params.spaceBetween + "px"
						}) : a.wrapper.css({
							height: a.virtualSize + a.params.spaceBetween + "px"
						}), a.params.centeredSlides)) {
						h = [];
						for (b = 0; b < a.snapGrid.length; b++) a.snapGrid[b] < a.virtualSize + a.snapGrid[0] && h.push(a.snapGrid[b]);
						a.snapGrid = h
					}
					if (!a.params.centeredSlides) {
						h = [];
						for (b = 0; b < a.snapGrid.length; b++) a.snapGrid[b] <= a.virtualSize - a.size && h.push(a.snapGrid[b]);
						a.snapGrid = h;
						1 < Math.floor(a.virtualSize - a.size) - Math.floor(a.snapGrid[a.snapGrid.length - 1]) && a.snapGrid.push(a.virtualSize - a.size)
					}
					0 === a.snapGrid.length && (a.snapGrid = [0]);
					0 !== a.params.spaceBetween && (a.isHorizontal() ? a.rtl ? a.slides.css({
						marginLeft: c + "px"
					}) : a.slides.css({
						marginRight: c + "px"
					}) : a.slides.css({
						marginBottom: c + "px"
					}));
					a.params.watchSlidesProgress && a.updateSlidesOffset()
				}
			};
			a.updateSlidesOffset = function() {
				for (var b = 0; b < a.slides.length; b++) a.slides[b].swiperSlideOffset = a.isHorizontal() ? a.slides[b].offsetLeft : a.slides[b].offsetTop
			};
			a.currentSlidesPerView = function() {
				var b, c = 1;
				if (a.params.centeredSlides) {
					var h, d = a.slides[a.activeIndex].swiperSlideSize;
					for (b = a.activeIndex + 1; b < a.slides.length; b++) a.slides[b] && !h && (d += a.slides[b].swiperSlideSize, c++, d > a.size && (h = !0));
					for (b = a.activeIndex - 1; 0 <= b; b--) a.slides[b] && !h && (d += a.slides[b].swiperSlideSize, c++, d > a.size && (h = !0))
				} else
					for (b = a.activeIndex + 1; b < a.slides.length; b++) a.slidesGrid[b] - a.slidesGrid[a.activeIndex] < a.size && c++;
				return c
			};
			a.updateSlidesProgress = function(b) {
				if (void 0 === b && (b = a.translate || 0), 0 !== a.slides.length) {
					void 0 === a.slides[0].swiperSlideOffset && a.updateSlidesOffset();
					var c = -b;
					a.rtl && (c = b);
					a.slides.removeClass(a.params.slideVisibleClass);
					for (b = 0; b < a.slides.length; b++) {
						var h = a.slides[b],
							d = (c + (a.params.centeredSlides ? a.minTranslate() : 0) - h.swiperSlideOffset) / (h.swiperSlideSize + a.params.spaceBetween);
						if (a.params.watchSlidesVisibility) {
							var e = -(c - h.swiperSlideOffset),
								f = e + a.slidesSizesGrid[b];
							(0 <= e && e < a.size || 0 < f && f <= a.size || 0 >= e && f >= a.size) && a.slides.eq(b).addClass(a.params.slideVisibleClass)
						}
						h.progress = a.rtl ? -d : d
					}
				}
			};
			a.updateProgress = function(b) {
				void 0 === b && (b = a.translate || 0);
				var c = a.maxTranslate() - a.minTranslate(),
					h = a.isBeginning,
					d = a.isEnd;
				0 === c ? (a.progress = 0, a.isBeginning = a.isEnd = !0) : (a.progress = (b - a.minTranslate()) / c, a.isBeginning = 0 >= a.progress, a.isEnd = 1 <= a.progress);
				a.isBeginning && !h && a.emit("onReachBeginning", a);
				a.isEnd && !d && a.emit("onReachEnd", a);
				a.params.watchSlidesProgress && a.updateSlidesProgress(b);
				a.emit("onProgress", a, a.progress)
			};
			a.updateActiveIndex = function() {
				var b, c, h = a.rtl ? a.translate : -a.translate;
				for (c = 0; c < a.slidesGrid.length; c++) void 0 !== a.slidesGrid[c + 1] ? h >= a.slidesGrid[c] && h < a.slidesGrid[c + 1] - (a.slidesGrid[c + 1] - a.slidesGrid[c]) / 2 ? b = c : h >= a.slidesGrid[c] && h < a.slidesGrid[c + 1] && (b = c + 1) : h >= a.slidesGrid[c] && (b = c);
				a.params.normalizeSlideIndex && (0 > b || void 0 === b) && (b = 0);
				c = Math.floor(b / a.params.slidesPerGroup);
				c >= a.snapGrid.length && (c = a.snapGrid.length - 1);
				b !== a.activeIndex && (a.snapIndex = c, a.previousIndex = a.activeIndex, a.activeIndex = b, a.updateClasses(), a.updateRealIndex())
			};
			a.updateRealIndex = function() {
				a.realIndex = parseInt(a.slides.eq(a.activeIndex).attr("data-swiper-slide-index") || a.activeIndex, 10)
			};
			a.updateClasses = function() {
				a.slides.removeClass(a.params.slideActiveClass + " " + a.params.slideNextClass + " " + a.params.slidePrevClass + " " + a.params.slideDuplicateActiveClass + " " + a.params.slideDuplicateNextClass + " " + a.params.slideDuplicatePrevClass);
				var b = a.slides.eq(a.activeIndex);
				b.addClass(a.params.slideActiveClass);
				k.loop && (b.hasClass(a.params.slideDuplicateClass) ? a.wrapper.children("." + a.params.slideClass + ":not(." + a.params.slideDuplicateClass + ')[data-swiper-slide-index\x3d"' + a.realIndex + '"]').addClass(a.params.slideDuplicateActiveClass) : a.wrapper.children("." + a.params.slideClass + "." + a.params.slideDuplicateClass + '[data-swiper-slide-index\x3d"' + a.realIndex + '"]').addClass(a.params.slideDuplicateActiveClass));
				var c = b.next("." + a.params.slideClass).addClass(a.params.slideNextClass);
				a.params.loop && 0 === c.length && (c = a.slides.eq(0), c.addClass(a.params.slideNextClass));
				b = b.prev("." + a.params.slideClass).addClass(a.params.slidePrevClass);
				if (a.params.loop && 0 === b.length && (b = a.slides.eq(-1), b.addClass(a.params.slidePrevClass)), k.loop && (c.hasClass(a.params.slideDuplicateClass) ? a.wrapper.children("." + a.params.slideClass + ":not(." + a.params.slideDuplicateClass + ')[data-swiper-slide-index\x3d"' + c.attr("data-swiper-slide-index") + '"]').addClass(a.params.slideDuplicateNextClass) : a.wrapper.children("." + a.params.slideClass + "." + a.params.slideDuplicateClass + '[data-swiper-slide-index\x3d"' + c.attr("data-swiper-slide-index") + '"]').addClass(a.params.slideDuplicateNextClass), b.hasClass(a.params.slideDuplicateClass) ? a.wrapper.children("." + a.params.slideClass + ":not(." + a.params.slideDuplicateClass + ')[data-swiper-slide-index\x3d"' + b.attr("data-swiper-slide-index") + '"]').addClass(a.params.slideDuplicatePrevClass) : a.wrapper.children("." + a.params.slideClass + "." + a.params.slideDuplicateClass + '[data-swiper-slide-index\x3d"' + b.attr("data-swiper-slide-index") + '"]').addClass(a.params.slideDuplicatePrevClass)), a.paginationContainer && 0 < a.paginationContainer.length) {
					var h;
					c = a.params.loop ? Math.ceil((a.slides.length - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
					if (a.params.loop ? (h = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup), h > a.slides.length - 1 - 2 * a.loopedSlides && (h -= a.slides.length - 2 * a.loopedSlides), h > c - 1 && (h -= c), 0 > h && "bullets" !== a.params.paginationType && (h = c + h)) : h = void 0 !== a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === a.params.paginationType && a.bullets && 0 < a.bullets.length && (a.bullets.removeClass(a.params.bulletActiveClass), 1 < a.paginationContainer.length ? a.bullets.each(function() {
							m(this).index() === h && m(this).addClass(a.params.bulletActiveClass)
						}) : a.bullets.eq(h).addClass(a.params.bulletActiveClass)), "fraction" === a.params.paginationType && (a.paginationContainer.find("." + a.params.paginationCurrentClass).text(h + 1), a.paginationContainer.find("." + a.params.paginationTotalClass).text(c)), "progress" === a.params.paginationType) {
						var d = b = (h + 1) / c,
							e = 1;
						a.isHorizontal() || (e = b, d = 1);
						a.paginationContainer.find("." + a.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + d + ") scaleY(" + e + ")").transition(a.params.speed)
					}
					"custom" === a.params.paginationType && a.params.paginationCustomRender && (a.paginationContainer.html(a.params.paginationCustomRender(a, h + 1, c)), a.emit("onPaginationRendered", a, a.paginationContainer[0]))
				}
				a.params.loop || (a.params.prevButton && a.prevButton && 0 < a.prevButton.length && (a.isBeginning ? (a.prevButton.addClass(a.params.buttonDisabledClass), a.params.a11y && a.a11y && a.a11y.disable(a.prevButton)) : (a.prevButton.removeClass(a.params.buttonDisabledClass), a.params.a11y && a.a11y && a.a11y.enable(a.prevButton))), a.params.nextButton && a.nextButton && 0 < a.nextButton.length && (a.isEnd ? (a.nextButton.addClass(a.params.buttonDisabledClass), a.params.a11y && a.a11y && a.a11y.disable(a.nextButton)) : (a.nextButton.removeClass(a.params.buttonDisabledClass), a.params.a11y && a.a11y && a.a11y.enable(a.nextButton))))
			};
			a.updatePagination = function() {
				if (a.params.pagination && a.paginationContainer && 0 < a.paginationContainer.length) {
					var b = "";
					if ("bullets" === a.params.paginationType) {
						for (var c = a.params.loop ? Math.ceil((a.slides.length - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length, h = 0; h < c; h++) b += a.params.paginationBulletRender ? a.params.paginationBulletRender(a, h, a.params.bulletClass) : "\x3c" + a.params.paginationElement + ' class\x3d"' + a.params.bulletClass + '"\x3e\x3c/' + a.params.paginationElement + "\x3e";
						a.paginationContainer.html(b);
						a.bullets = a.paginationContainer.find("." + a.params.bulletClass);
						a.params.paginationClickable && a.params.a11y && a.a11y && a.a11y.initPagination()
					}
					"fraction" === a.params.paginationType && (b = a.params.paginationFractionRender ? a.params.paginationFractionRender(a, a.params.paginationCurrentClass, a.params.paginationTotalClass) : '\x3cspan class\x3d"' + a.params.paginationCurrentClass + '"\x3e\x3c/span\x3e / \x3cspan class\x3d"' + a.params.paginationTotalClass + '"\x3e\x3c/span\x3e', a.paginationContainer.html(b));
					"progress" === a.params.paginationType && (b = a.params.paginationProgressRender ? a.params.paginationProgressRender(a, a.params.paginationProgressbarClass) : '\x3cspan class\x3d"' + a.params.paginationProgressbarClass + '"\x3e\x3c/span\x3e', a.paginationContainer.html(b));
					"custom" !== a.params.paginationType && a.emit("onPaginationRendered", a, a.paginationContainer[0])
				}
			};
			a.update = function(b) {
				function c() {
					a.rtl;
					a.translate;
					h = Math.min(Math.max(a.translate, a.maxTranslate()), a.minTranslate());
					a.setWrapperTranslate(h);
					a.updateActiveIndex();
					a.updateClasses()
				}
				var h;
				a && (a.updateContainerSize(), a.updateSlidesSize(), a.updateProgress(), a.updatePagination(), a.updateClasses(), a.params.scrollbar && a.scrollbar && a.scrollbar.set(), b ? (a.controller && a.controller.spline && (a.controller.spline = void 0), a.params.freeMode ? (c(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || c()) : a.params.autoHeight && a.updateAutoHeight())
			};
			a.onResize = function(b) {
				a.params.onBeforeResize && a.params.onBeforeResize(a);
				a.params.breakpoints && a.setBreakpoint();
				var c = a.params.allowSwipeToPrev,
					h = a.params.allowSwipeToNext;
				a.params.allowSwipeToPrev = a.params.allowSwipeToNext = !0;
				a.updateContainerSize();
				a.updateSlidesSize();
				("auto" === a.params.slidesPerView || a.params.freeMode || b) && a.updatePagination();
				a.params.scrollbar && a.scrollbar && a.scrollbar.set();
				a.controller && a.controller.spline && (a.controller.spline = void 0);
				b = !1;
				if (a.params.freeMode) {
					var d = Math.min(Math.max(a.translate, a.maxTranslate()), a.minTranslate());
					a.setWrapperTranslate(d);
					a.updateActiveIndex();
					a.updateClasses();
					a.params.autoHeight && a.updateAutoHeight()
				} else a.updateClasses(),
					b = ("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0);
				a.params.lazyLoading && !b && a.lazy && a.lazy.load();
				a.params.allowSwipeToPrev = c;
				a.params.allowSwipeToNext = h;
				a.params.onAfterResize && a.params.onAfterResize(a)
			};
			a.touchEventsDesktop = {
				start: "mousedown",
				move: "mousemove",
				end: "mouseup"
			};
			window.navigator.pointerEnabled ? a.touchEventsDesktop = {
				start: "pointerdown",
				move: "pointermove",
				end: "pointerup"
			} : window.navigator.msPointerEnabled && (a.touchEventsDesktop = {
				start: "MSPointerDown",
				move: "MSPointerMove",
				end: "MSPointerUp"
			});
			a.touchEvents = {
				start: a.support.touch || !a.params.simulateTouch ? "touchstart" : a.touchEventsDesktop.start,
				move: a.support.touch || !a.params.simulateTouch ? "touchmove" : a.touchEventsDesktop.move,
				end: a.support.touch || !a.params.simulateTouch ? "touchend" : a.touchEventsDesktop.end
			};
			(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === a.params.touchEventsTarget ? a.container : a.wrapper).addClass("swiper-wp8-" + a.params.direction);
			a.initEvents = function(b) {
				var c = b ? "off" : "on";
				b = b ? "removeEventListener" : "addEventListener";
				var h = "container" === a.params.touchEventsTarget ? a.container[0] : a.wrapper[0],
					d = a.support.touch ? h : document,
					e = !!a.params.nested;
				a.browser.ie ? (h[b](a.touchEvents.start, a.onTouchStart, !1), d[b](a.touchEvents.move, a.onTouchMove, e), d[b](a.touchEvents.end, a.onTouchEnd, !1)) : (a.support.touch && (d = !("touchstart" !== a.touchEvents.start || !a.support.passiveListener || !a.params.passiveListeners) && {
					passive: !0,
					capture: !1
				}, h[b](a.touchEvents.start, a.onTouchStart, d), h[b](a.touchEvents.move, a.onTouchMove, e), h[b](a.touchEvents.end, a.onTouchEnd, d)), (k.simulateTouch && !a.device.ios && !a.device.android || k.simulateTouch && !a.support.touch && a.device.ios) && (h[b]("mousedown", a.onTouchStart, !1), document[b]("mousemove", a.onTouchMove, e), document[b]("mouseup", a.onTouchEnd, !1)));
				window[b]("resize", a.onResize);
				a.params.nextButton && a.nextButton && 0 < a.nextButton.length && (a.nextButton[c]("click", a.onClickNext), a.params.a11y && a.a11y && a.nextButton[c]("keydown", a.a11y.onEnterKey));
				a.params.prevButton && a.prevButton && 0 < a.prevButton.length && (a.prevButton[c]("click", a.onClickPrev), a.params.a11y && a.a11y && a.prevButton[c]("keydown", a.a11y.onEnterKey));
				a.params.pagination && a.params.paginationClickable && (a.paginationContainer[c]("click", "." + a.params.bulletClass, a.onClickIndex), a.params.a11y && a.a11y && a.paginationContainer[c]("keydown", "." + a.params.bulletClass, a.a11y.onEnterKey));
				(a.params.preventClicks || a.params.preventClicksPropagation) && h[b]("click", a.preventClicks, !0)
			};
			a.attachEvents = function() {
				a.initEvents()
			};
			a.detachEvents = function() {
				a.initEvents(!0)
			};
			a.allowClick = !0;
			a.preventClicks = function(b) {
				a.allowClick || (a.params.preventClicks && b.preventDefault(), a.params.preventClicksPropagation && a.animating && (b.stopPropagation(), b.stopImmediatePropagation()))
			};
			a.onClickNext = function(b) {
				b.preventDefault();
				a.isEnd && !a.params.loop || a.slideNext()
			};
			a.onClickPrev = function(b) {
				b.preventDefault();
				a.isBeginning && !a.params.loop || a.slidePrev()
			};
			a.onClickIndex = function(b) {
				b.preventDefault();
				b = m(this).index() * a.params.slidesPerGroup;
				a.params.loop && (b += a.loopedSlides);
				a.slideTo(b)
			};
			a.updateClickedSlide = function(b) {
				b = e(b, "." + a.params.slideClass);
				var c = !1;
				if (b)
					for (var h = 0; h < a.slides.length; h++) a.slides[h] === b && (c = !0);
				if (!b || !c) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
				if (a.clickedSlide = b, a.clickedIndex = m(b).index(), a.params.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex) {
					var d = a.clickedIndex;
					c = "auto" === a.params.slidesPerView ? a.currentSlidesPerView() : a.params.slidesPerView;
					a.params.loop ? a.animating || (b = parseInt(m(a.clickedSlide).attr("data-swiper-slide-index"), 10), a.params.centeredSlides ? d < a.loopedSlides - c / 2 || d > a.slides.length - a.loopedSlides + c / 2 ? (a.fixLoop(), d = a.wrapper.children("." + a.params.slideClass + '[data-swiper-slide-index\x3d"' + b + '"]:not(.' + a.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
						a.slideTo(d)
					}, 0)) : a.slideTo(d) : d > a.slides.length - c ? (a.fixLoop(), d = a.wrapper.children("." + a.params.slideClass + '[data-swiper-slide-index\x3d"' + b + '"]:not(.' + a.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
						a.slideTo(d)
					}, 0)) : a.slideTo(d)) : a.slideTo(d)
				}
			};
			var x, C, I, J, F, u, v, K, H, L, P = Date.now(),
				D = [];
			a.animating = !1;
			a.touches = {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			};
			var M, N;
			a.onTouchStart = function(b) {
				if (b.originalEvent && (b = b.originalEvent), (M = "touchstart" === b.type) || !("which" in b) || 3 !== b.which) {
					if (a.params.noSwiping && e(b, "." + a.params.noSwipingClass)) return void(a.allowClick = !0);
					if (!a.params.swipeHandler || e(b, a.params.swipeHandler)) {
						var c = a.touches.currentX = "touchstart" === b.type ? b.targetTouches[0].pageX : b.pageX,
							h = a.touches.currentY = "touchstart" === b.type ? b.targetTouches[0].pageY : b.pageY;
						if (!(a.device.ios && a.params.iOSEdgeSwipeDetection && c <= a.params.iOSEdgeSwipeThreshold)) {
							if (x = !0, C = !1, I = !0, F = void 0, N = void 0, a.touches.startX = c, a.touches.startY = h, J = Date.now(), a.allowClick = !0, a.updateContainerSize(), a.swipeDirection = void 0, 0 < a.params.threshold && (K = !1), "touchstart" !== b.type) c = !0, m(b.target).is("input, select, textarea, button, video") && (c = !1), document.activeElement && m(document.activeElement).is("input, select, textarea, button, video") && document.activeElement.blur(), c && b.preventDefault();
							a.emit("onTouchStart", a, b)
						}
					}
				}
			};
			a.onTouchMove = function(b) {
				if (b.originalEvent && (b = b.originalEvent), !M || "mousemove" !== b.type) {
					if (b.preventedByNestedSwiper) return a.touches.startX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, void(a.touches.startY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY);
					if (a.params.onlyExternal) return a.allowClick = !1, void(x && (a.touches.startX = a.touches.currentX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, a.touches.startY = a.touches.currentY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY, J = Date.now()));
					if (M && a.params.touchReleaseOnEdges && !a.params.loop)
						if (a.isHorizontal()) {
							if (a.touches.currentX < a.touches.startX && a.translate <= a.maxTranslate() || a.touches.currentX > a.touches.startX && a.translate >= a.minTranslate()) return
						} else if (a.touches.currentY < a.touches.startY && a.translate <= a.maxTranslate() || a.touches.currentY > a.touches.startY && a.translate >= a.minTranslate()) return;
					if (M && document.activeElement && b.target === document.activeElement && m(b.target).is("input, select, textarea, button, video")) return C = !0, void(a.allowClick = !1);
					if (I && a.emit("onTouchMove", a, b), !(b.targetTouches && 1 < b.targetTouches.length)) {
						if (a.touches.currentX = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, a.touches.currentY = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY, void 0 === F) {
							var c;
							a.isHorizontal() && a.touches.currentY === a.touches.startY || !a.isHorizontal() && a.touches.currentX === a.touches.startX ? F = !1 : (c = 180 * Math.atan2(Math.abs(a.touches.currentY - a.touches.startY), Math.abs(a.touches.currentX - a.touches.startX)) / Math.PI, F = a.isHorizontal() ? c > a.params.touchAngle : 90 - c > a.params.touchAngle)
						}
						if (F && a.emit("onTouchMoveOpposite", a, b), void 0 === N && (a.touches.currentX === a.touches.startX && a.touches.currentY === a.touches.startY || (N = !0)), x) {
							if (F) return void(x = !1);
							if (N) {
								a.allowClick = !1;
								a.emit("onSliderMove", a, b);
								b.preventDefault();
								a.params.touchMoveStopPropagation && !a.params.nested && b.stopPropagation();
								C || (k.loop && a.fixLoop(), v = a.getWrapperTranslate(), a.setWrapperTransition(0), a.animating && a.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), a.params.autoplay && a.autoplaying && (a.params.autoplayDisableOnInteraction ? a.stopAutoplay() : a.pauseAutoplay()), L = !1, !a.params.grabCursor || !0 !== a.params.allowSwipeToNext && !0 !== a.params.allowSwipeToPrev || a.setGrabCursor(!0));
								C = !0;
								c = a.touches.diff = a.isHorizontal() ? a.touches.currentX - a.touches.startX : a.touches.currentY - a.touches.startY;
								c *= a.params.touchRatio;
								a.rtl && (c = -c);
								a.swipeDirection = 0 < c ? "prev" : "next";
								u = c + v;
								var h = !0;
								if (0 < c && u > a.minTranslate() ? (h = !1, a.params.resistance && (u = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + v + c, a.params.resistanceRatio))) : 0 > c && u < a.maxTranslate() && (h = !1, a.params.resistance && (u = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - v - c, a.params.resistanceRatio))), h && (b.preventedByNestedSwiper = !0), !a.params.allowSwipeToNext && "next" === a.swipeDirection && u < v && (u = v), !a.params.allowSwipeToPrev && "prev" === a.swipeDirection && u > v && (u = v), 0 < a.params.threshold) {
									if (!(Math.abs(c) > a.params.threshold || K)) return void(u = v);
									if (!K) return K = !0, a.touches.startX = a.touches.currentX, a.touches.startY = a.touches.currentY, u = v, void(a.touches.diff = a.isHorizontal() ? a.touches.currentX - a.touches.startX : a.touches.currentY - a.touches.startY)
								}
								a.params.followFinger && ((a.params.freeMode || a.params.watchSlidesProgress) && a.updateActiveIndex(), a.params.freeMode && (0 === D.length && D.push({
									position: a.touches[a.isHorizontal() ? "startX" : "startY"],
									time: J
								}), D.push({
									position: a.touches[a.isHorizontal() ? "currentX" : "currentY"],
									time: (new window.Date).getTime()
								})), a.updateProgress(u), a.setWrapperTranslate(u))
							}
						}
					}
				}
			};
			a.onTouchEnd = function(b) {
				if (b.originalEvent && (b = b.originalEvent), I && a.emit("onTouchEnd", a, b), I = !1, x) {
					a.params.grabCursor && C && x && (!0 === a.params.allowSwipeToNext || !0 === a.params.allowSwipeToPrev) && a.setGrabCursor(!1);
					var c = Date.now(),
						h = c - J;
					if (a.allowClick && (a.updateClickedSlide(b), a.emit("onTap", a, b), 300 > h && 300 < c - P && (H && clearTimeout(H), H = setTimeout(function() {
							a && (a.params.paginationHide && 0 < a.paginationContainer.length && !m(b.target).hasClass(a.params.bulletClass) && a.paginationContainer.toggleClass(a.params.paginationHiddenClass), a.emit("onClick", a, b))
						}, 300)), 300 > h && 300 > c - P && (H && clearTimeout(H), a.emit("onDoubleTap", a, b))), P = Date.now(), setTimeout(function() {
							a && (a.allowClick = !0)
						}, 0), !x || !C || !a.swipeDirection || 0 === a.touches.diff || u === v) return void(x = C = !1);
					x = C = !1;
					if (c = a.params.followFinger ? a.rtl ? a.translate : -a.translate : -u, a.params.freeMode) {
						if (c < -a.minTranslate()) return void a.slideTo(a.activeIndex);
						if (c > -a.maxTranslate()) return void(a.slides.length < a.snapGrid.length ? a.slideTo(a.snapGrid.length - 1) : a.slideTo(a.slides.length - 1));
						if (a.params.freeModeMomentum) {
							if (1 < D.length) {
								c = D.pop();
								var d = D.pop(),
									e = c.time - d.time;
								a.velocity = (c.position - d.position) / e;
								a.velocity /= 2;
								Math.abs(a.velocity) < a.params.freeModeMinimumVelocity && (a.velocity = 0);
								(150 < e || 300 < (new window.Date).getTime() - c.time) && (a.velocity = 0)
							} else a.velocity = 0;
							a.velocity *= a.params.freeModeMomentumVelocityRatio;
							D.length = 0;
							c = 1E3 * a.params.freeModeMomentumRatio;
							d = a.translate + a.velocity * c;
							a.rtl && (d = -d);
							var f;
							e = !1;
							var g = 20 * Math.abs(a.velocity) * a.params.freeModeMomentumBounceRatio;
							if (d < a.maxTranslate()) a.params.freeModeMomentumBounce ? (d + a.maxTranslate() < -g && (d = a.maxTranslate() - g), f = a.maxTranslate(), e = !0, L = !0) : d = a.maxTranslate();
							else if (d > a.minTranslate()) a.params.freeModeMomentumBounce ? (d - a.minTranslate() > g && (d = a.minTranslate() + g), f = a.minTranslate(), e = !0, L = !0) : d = a.minTranslate();
							else if (a.params.freeModeSticky) {
								for (g = g = 0; g < a.snapGrid.length; g += 1)
									if (a.snapGrid[g] > -d) {
										var n = g;
										break
									}
								d = Math.abs(a.snapGrid[n] - d) < Math.abs(a.snapGrid[n - 1] - d) || "next" === a.swipeDirection ? a.snapGrid[n] : a.snapGrid[n - 1];
								a.rtl || (d = -d)
							}
							if (0 !== a.velocity) c = a.rtl ? Math.abs((-d - a.translate) / a.velocity) : Math.abs((d - a.translate) / a.velocity);
							else if (a.params.freeModeSticky) return void a.slideReset();
							a.params.freeModeMomentumBounce && e ? (a.updateProgress(f), a.setWrapperTransition(c), a.setWrapperTranslate(d), a.onTransitionStart(), a.animating = !0, a.wrapper.transitionEnd(function() {
								a && L && (a.emit("onMomentumBounce", a), a.setWrapperTransition(a.params.speed), a.setWrapperTranslate(f), a.wrapper.transitionEnd(function() {
									a && a.onTransitionEnd()
								}))
							})) : a.velocity ? (a.updateProgress(d), a.setWrapperTransition(c), a.setWrapperTranslate(d), a.onTransitionStart(), a.animating || (a.animating = !0, a.wrapper.transitionEnd(function() {
								a && a.onTransitionEnd()
							}))) : a.updateProgress(d);
							a.updateActiveIndex()
						}
						return void((!a.params.freeModeMomentum || h >= a.params.longSwipesMs) && (a.updateProgress(), a.updateActiveIndex()))
					}
					n = 0;
					e = a.slidesSizesGrid[0];
					for (d = 0; d < a.slidesGrid.length; d += a.params.slidesPerGroup) void 0 !== a.slidesGrid[d + a.params.slidesPerGroup] ? c >= a.slidesGrid[d] && c < a.slidesGrid[d + a.params.slidesPerGroup] && (n = d, e = a.slidesGrid[d + a.params.slidesPerGroup] - a.slidesGrid[d]) : c >= a.slidesGrid[d] && (n = d, e = a.slidesGrid[a.slidesGrid.length - 1] - a.slidesGrid[a.slidesGrid.length - 2]);
					c = (c - a.slidesGrid[n]) / e;
					if (h > a.params.longSwipesMs) {
						if (!a.params.longSwipes) return void a.slideTo(a.activeIndex);
						"next" === a.swipeDirection && (c >= a.params.longSwipesRatio ? a.slideTo(n + a.params.slidesPerGroup) : a.slideTo(n));
						"prev" === a.swipeDirection && (c > 1 - a.params.longSwipesRatio ? a.slideTo(n + a.params.slidesPerGroup) : a.slideTo(n))
					} else {
						if (!a.params.shortSwipes) return void a.slideTo(a.activeIndex);
						"next" === a.swipeDirection && a.slideTo(n + a.params.slidesPerGroup);
						"prev" === a.swipeDirection && a.slideTo(n)
					}
				}
			};
			a._slideTo = function(b, c) {
				return a.slideTo(b, c, !0, !0)
			};
			a.slideTo = function(b, c, h, d) {
				void 0 === h && (h = !0);
				void 0 === b && (b = 0);
				0 > b && (b = 0);
				a.snapIndex = Math.floor(b / a.params.slidesPerGroup);
				a.snapIndex >= a.snapGrid.length && (a.snapIndex = a.snapGrid.length - 1);
				var e = -a.snapGrid[a.snapIndex];
				if (a.params.autoplay && a.autoplaying && (d || !a.params.autoplayDisableOnInteraction ? a.pauseAutoplay(c) : a.stopAutoplay()), a.updateProgress(e), a.params.normalizeSlideIndex)
					for (d = 0; d < a.slidesGrid.length; d++) - Math.floor(100 * e) >= Math.floor(100 * a.slidesGrid[d]) && (b = d);
				return !(!a.params.allowSwipeToNext && e < a.translate && e < a.minTranslate()) && !(!a.params.allowSwipeToPrev && e > a.translate && e > a.maxTranslate() && (a.activeIndex || 0) !== b) && (void 0 === c && (c = a.params.speed), a.previousIndex = a.activeIndex || 0, a.activeIndex = b, a.updateRealIndex(), a.rtl && -e === a.translate || !a.rtl && e === a.translate ? (a.params.autoHeight && a.updateAutoHeight(), a.updateClasses(), "slide" !== a.params.effect && a.setWrapperTranslate(e), !1) : (a.updateClasses(), a.onTransitionStart(h), 0 === c || a.browser.lteIE9 ? (a.setWrapperTranslate(e), a.setWrapperTransition(0), a.onTransitionEnd(h)) : (a.setWrapperTranslate(e), a.setWrapperTransition(c), a.animating || (a.animating = !0, a.wrapper.transitionEnd(function() {
					a && a.onTransitionEnd(h)
				}))), !0))
			};
			a.onTransitionStart = function(b) {
				void 0 === b && (b = !0);
				a.params.autoHeight && a.updateAutoHeight();
				a.lazy && a.lazy.onTransitionStart();
				b && (a.emit("onTransitionStart", a), a.activeIndex !== a.previousIndex && (a.emit("onSlideChangeStart", a), a.activeIndex > a.previousIndex ? a.emit("onSlideNextStart", a) : a.emit("onSlidePrevStart", a)))
			};
			a.onTransitionEnd = function(b) {
				a.animating = !1;
				a.setWrapperTransition(0);
				void 0 === b && (b = !0);
				a.lazy && a.lazy.onTransitionEnd();
				b && (a.emit("onTransitionEnd", a), a.activeIndex !== a.previousIndex && (a.emit("onSlideChangeEnd", a), a.activeIndex > a.previousIndex ? a.emit("onSlideNextEnd", a) : a.emit("onSlidePrevEnd", a)));
				a.params.history && a.history && a.history.setHistory(a.params.history, a.activeIndex);
				a.params.hashnav && a.hashnav && a.hashnav.setHash()
			};
			a.slideNext = function(b, c, d) {
				if (a.params.loop) {
					if (a.animating) return !1;
					a.fixLoop();
					a.container[0].clientLeft
				}
				return a.slideTo(a.activeIndex + a.params.slidesPerGroup, c, b, d)
			};
			a._slideNext = function(b) {
				return a.slideNext(!0, b, !0)
			};
			a.slidePrev = function(b, c, d) {
				if (a.params.loop) {
					if (a.animating) return !1;
					a.fixLoop();
					a.container[0].clientLeft
				}
				return a.slideTo(a.activeIndex - 1, c, b, d)
			};
			a._slidePrev = function(b) {
				return a.slidePrev(!0, b, !0)
			};
			a.slideReset = function(b, c, d) {
				return a.slideTo(a.activeIndex, c, b)
			};
			a.disableTouchControl = function() {
				return a.params.onlyExternal = !0, !0
			};
			a.enableTouchControl = function() {
				return a.params.onlyExternal = !1, !0
			};
			a.setWrapperTransition = function(b, c) {
				a.wrapper.transition(b);
				"slide" !== a.params.effect && a.effects[a.params.effect] && a.effects[a.params.effect].setTransition(b);
				a.params.parallax && a.parallax && a.parallax.setTransition(b);
				a.params.scrollbar && a.scrollbar && a.scrollbar.setTransition(b);
				a.params.control && a.controller && a.controller.setTransition(b, c);
				a.emit("onSetTransition", a, b)
			};
			a.setWrapperTranslate = function(b, c, d) {
				var h = 0,
					e = 0;
				a.isHorizontal() ? h = a.rtl ? -b : b : e = b;
				a.params.roundLengths && (h = Math.floor(h), e = Math.floor(e));
				a.params.virtualTranslate || (a.support.transforms3d ? a.wrapper.transform("translate3d(" + h + "px, " + e + "px, 0px)") : a.wrapper.transform("translate(" + h + "px, " + e + "px)"));
				a.translate = a.isHorizontal() ? h : e;
				h = a.maxTranslate() - a.minTranslate();
				(0 === h ? 0 : (b - a.minTranslate()) / h) !== a.progress && a.updateProgress(b);
				c && a.updateActiveIndex();
				"slide" !== a.params.effect && a.effects[a.params.effect] && a.effects[a.params.effect].setTranslate(a.translate);
				a.params.parallax && a.parallax && a.parallax.setTranslate(a.translate);
				a.params.scrollbar && a.scrollbar && a.scrollbar.setTranslate(a.translate);
				a.params.control && a.controller && a.controller.setTranslate(a.translate, d);
				a.emit("onSetTranslate", a, a.translate)
			};
			a.getTranslate = function(b, c) {
				var d, e, f, g;
				return void 0 === c && (c = "x"), a.params.virtualTranslate ? a.rtl ? -a.translate : a.translate : (f = window.getComputedStyle(b, null), window.WebKitCSSMatrix ? (e = f.transform || f.webkitTransform, 6 < e.split(",").length && (e = e.split(", ").map(function(a) {
					return a.replace(",", ".")
				}).join(", ")), g = new window.WebKitCSSMatrix("none" === e ? "" : e)) : (g = f.MozTransform || f.OTransform || f.MsTransform || f.msTransform || f.transform || f.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), d = g.toString().split(",")), "x" === c && (e = window.WebKitCSSMatrix ? g.m41 : 16 === d.length ? parseFloat(d[12]) : parseFloat(d[4])), "y" === c && (e = window.WebKitCSSMatrix ? g.m42 : 16 === d.length ? parseFloat(d[13]) : parseFloat(d[5])), a.rtl && e && (e = -e), e || 0)
			};
			a.getWrapperTranslate = function(b) {
				return void 0 === b && (b = a.isHorizontal() ? "x" : "y"), a.getTranslate(a.wrapper[0], b)
			};
			a.observers = [];
			a.initObservers = function() {
				if (a.params.observeParents)
					for (var b = a.container.parents(), c = 0; c < b.length; c++) f(b[c]);
				f(a.container[0], {
					childList: !1
				});
				f(a.wrapper[0], {
					attributes: !1
				})
			};
			a.disconnectObservers = function() {
				for (var b = 0; b < a.observers.length; b++) a.observers[b].disconnect();
				a.observers = []
			};
			a.createLoop = function() {
				a.wrapper.children("." + a.params.slideClass + "." + a.params.slideDuplicateClass).remove();
				var b = a.wrapper.children("." + a.params.slideClass);
				"auto" !== a.params.slidesPerView || a.params.loopedSlides || (a.params.loopedSlides = b.length);
				a.loopedSlides = parseInt(a.params.loopedSlides || a.params.slidesPerView, 10);
				a.loopedSlides += a.params.loopAdditionalSlides;
				a.loopedSlides > b.length && (a.loopedSlides = b.length);
				var c, d = [],
					e = [];
				b.each(function(c, h) {
					var f = m(this);
					c < a.loopedSlides && e.push(h);
					c < b.length && c >= b.length - a.loopedSlides && d.push(h);
					f.attr("data-swiper-slide-index", c)
				});
				for (c = 0; c < e.length; c++) a.wrapper.append(m(e[c].cloneNode(!0)).addClass(a.params.slideDuplicateClass));
				for (c = d.length - 1; 0 <= c; c--) a.wrapper.prepend(m(d[c].cloneNode(!0)).addClass(a.params.slideDuplicateClass))
			};
			a.destroyLoop = function() {
				a.wrapper.children("." + a.params.slideClass + "." + a.params.slideDuplicateClass).remove();
				a.slides.removeAttr("data-swiper-slide-index")
			};
			a.reLoop = function(b) {
				var c = a.activeIndex - a.loopedSlides;
				a.destroyLoop();
				a.createLoop();
				a.updateSlidesSize();
				b && a.slideTo(c + a.loopedSlides, 0, !1)
			};
			a.fixLoop = function() {
				var b;
				a.activeIndex < a.loopedSlides ? (b = a.slides.length - 3 * a.loopedSlides + a.activeIndex, b += a.loopedSlides, a.slideTo(b, 0, !1, !0)) : ("auto" === a.params.slidesPerView && a.activeIndex >= 2 * a.loopedSlides || a.activeIndex > a.slides.length - 2 * a.params.slidesPerView) && (b = -a.slides.length + a.activeIndex + a.loopedSlides, b += a.loopedSlides, a.slideTo(b, 0, !1, !0))
			};
			a.appendSlide = function(b) {
				if (a.params.loop && a.destroyLoop(), "object" == typeof b && b.length)
					for (var c = 0; c < b.length; c++) b[c] && a.wrapper.append(b[c]);
				else a.wrapper.append(b);
				a.params.loop && a.createLoop();
				a.params.observer && a.support.observer || a.update(!0)
			};
			a.prependSlide = function(b) {
				a.params.loop && a.destroyLoop();
				var c = a.activeIndex + 1;
				if ("object" == typeof b && b.length) {
					for (c = 0; c < b.length; c++) b[c] && a.wrapper.prepend(b[c]);
					c = a.activeIndex + b.length
				} else a.wrapper.prepend(b);
				a.params.loop && a.createLoop();
				a.params.observer && a.support.observer || a.update(!0);
				a.slideTo(c, 0, !1)
			};
			a.removeSlide = function(b) {
				a.params.loop && (a.destroyLoop(), a.slides = a.wrapper.children("." + a.params.slideClass));
				var c = a.activeIndex;
				if ("object" == typeof b && b.length)
					for (var d = 0; d < b.length; d++) {
						var e = b[d];
						a.slides[e] && a.slides.eq(e).remove();
						e < c && c--
					} else e = b, a.slides[e] && a.slides.eq(e).remove(), e < c && c--;
				c = Math.max(c, 0);
				a.params.loop && a.createLoop();
				a.params.observer && a.support.observer || a.update(!0);
				a.params.loop ? a.slideTo(c + a.loopedSlides, 0, !1) : a.slideTo(c, 0, !1)
			};
			a.removeAllSlides = function() {
				for (var b = [], c = 0; c < a.slides.length; c++) b.push(c);
				a.removeSlide(b)
			};
			a.effects = {
				fade: {
					setTranslate: function() {
						for (var b = 0; b < a.slides.length; b++) {
							var c = a.slides.eq(b),
								d = -c[0].swiperSlideOffset;
							a.params.virtualTranslate || (d -= a.translate);
							var e = 0;
							a.isHorizontal() || (e = d, d = 0);
							c.css({
								opacity: a.params.fade.crossFade ? Math.max(1 - Math.abs(c[0].progress), 0) : 1 + Math.min(Math.max(c[0].progress, -1), 0)
							}).transform("translate3d(" + d + "px, " + e + "px, 0px)")
						}
					},
					setTransition: function(b) {
						if (a.slides.transition(b), a.params.virtualTranslate && 0 !== b) {
							var c = !1;
							a.slides.transitionEnd(function() {
								if (!c && a) {
									c = !0;
									a.animating = !1;
									for (var b = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < b.length; d++) a.wrapper.trigger(b[d])
								}
							})
						}
					}
				},
				flip: {
					setTranslate: function() {
						for (var b = 0; b < a.slides.length; b++) {
							var c = a.slides.eq(b),
								d = c[0].progress;
							a.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
							var e = -180 * d,
								f = 0,
								g = -c[0].swiperSlideOffset,
								k = 0;
							if (a.isHorizontal() ? a.rtl && (e = -e) : (k = g, g = 0, f = -e, e = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + a.slides.length, a.params.flip.slideShadows) {
								var n = a.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
									l = a.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
								0 === n.length && (n = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "left" : "top") + '"\x3e\x3c/div\x3e'), c.append(n));
								0 === l.length && (l = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "right" : "bottom") + '"\x3e\x3c/div\x3e'), c.append(l));
								n.length && (n[0].style.opacity = Math.max(-d, 0));
								l.length && (l[0].style.opacity = Math.max(d, 0))
							}
							c.transform("translate3d(" + g + "px, " + k + "px, 0px) rotateX(" + f + "deg) rotateY(" + e + "deg)")
						}
					},
					setTransition: function(b) {
						if (a.slides.transition(b).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(b), a.params.virtualTranslate && 0 !== b) {
							var c = !1;
							a.slides.eq(a.activeIndex).transitionEnd(function() {
								if (!c && a && m(this).hasClass(a.params.slideActiveClass)) {
									c = !0;
									a.animating = !1;
									for (var b = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < b.length; d++) a.wrapper.trigger(b[d])
								}
							})
						}
					}
				},
				cube: {
					setTranslate: function() {
						var b, c = 0;
						a.params.cube.shadow && (a.isHorizontal() ? (b = a.wrapper.find(".swiper-cube-shadow"), 0 === b.length && (b = m('\x3cdiv class\x3d"swiper-cube-shadow"\x3e\x3c/div\x3e'), a.wrapper.append(b)), b.css({
							height: a.width + "px"
						})) : (b = a.container.find(".swiper-cube-shadow"), 0 === b.length && (b = m('\x3cdiv class\x3d"swiper-cube-shadow"\x3e\x3c/div\x3e'), a.container.append(b))));
						for (var d = 0; d < a.slides.length; d++) {
							var e = a.slides.eq(d),
								f = 90 * d,
								g = Math.floor(f / 360);
							a.rtl && (f = -f, g = Math.floor(-f / 360));
							var k = Math.max(Math.min(e[0].progress, 1), -1),
								n = 0,
								l = 0,
								q = 0;
							0 == d % 4 ? (n = 4 * -g * a.size, q = 0) : 0 == (d - 1) % 4 ? (n = 0, q = 4 * -g * a.size) : 0 == (d - 2) % 4 ? (n = a.size + 4 * g * a.size, q = a.size) : 0 == (d - 3) % 4 && (n = -a.size, q = 3 * a.size + 4 * a.size * g);
							a.rtl && (n = -n);
							a.isHorizontal() || (l = n, n = 0);
							f = "rotateX(" + (a.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (a.isHorizontal() ? f : 0) + "deg) translate3d(" + n + "px, " + l + "px, " + q + "px)";
							if (1 >= k && -1 < k && (c = 90 * d + 90 * k, a.rtl && (c = 90 * -d - 90 * k)), e.transform(f), a.params.cube.slideShadows) f = a.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), g = a.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom"), 0 === f.length && (f = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "left" : "top") + '"\x3e\x3c/div\x3e'), e.append(f)), 0 === g.length && (g = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "right" : "bottom") + '"\x3e\x3c/div\x3e'), e.append(g)), f.length && (f[0].style.opacity = Math.max(-k, 0)), g.length && (g[0].style.opacity = Math.max(k, 0))
						}
						if (a.wrapper.css({
								"-webkit-transform-origin": "50% 50% -" + a.size / 2 + "px",
								"-moz-transform-origin": "50% 50% -" + a.size / 2 + "px",
								"-ms-transform-origin": "50% 50% -" + a.size / 2 + "px",
								"transform-origin": "50% 50% -" + a.size / 2 + "px"
							}), a.params.cube.shadow) a.isHorizontal() ? b.transform("translate3d(0px, " + (a.width / 2 + a.params.cube.shadowOffset) + "px, " + -a.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + a.params.cube.shadowScale + ")") : (d = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90), d = a.params.cube.shadowScale / (1.5 - (Math.sin(2 * d * Math.PI / 360) / 2 + Math.cos(2 * d * Math.PI / 360) / 2)), b.transform("scale3d(" + a.params.cube.shadowScale + ", 1, " + d + ") translate3d(0px, " + (a.height / 2 + a.params.cube.shadowOffset) + "px, " + -a.height / 2 / d + "px) rotateX(-90deg)"));
						a.wrapper.transform("translate3d(0px,0," + (a.isSafari || a.isUiWebView ? -a.size / 2 : 0) + "px) rotateX(" + (a.isHorizontal() ? 0 : c) + "deg) rotateY(" + (a.isHorizontal() ? -c : 0) + "deg)")
					},
					setTransition: function(b) {
						a.slides.transition(b).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(b);
						a.params.cube.shadow && !a.isHorizontal() && a.container.find(".swiper-cube-shadow").transition(b)
					}
				},
				coverflow: {
					setTranslate: function() {
						var b = a.translate;
						b = a.isHorizontal() ? -b + a.width / 2 : -b + a.height / 2;
						for (var c = a.isHorizontal() ? a.params.coverflow.rotate : -a.params.coverflow.rotate, d = a.params.coverflow.depth, e = 0, f = a.slides.length; e < f; e++) {
							var g = a.slides.eq(e),
								k = a.slidesSizesGrid[e];
							k = (b - g[0].swiperSlideOffset - k / 2) / k * a.params.coverflow.modifier;
							var n = a.isHorizontal() ? c * k : 0,
								l = a.isHorizontal() ? 0 : c * k,
								q = -d * Math.abs(k),
								r = a.isHorizontal() ? 0 : a.params.coverflow.stretch * k,
								p = a.isHorizontal() ? a.params.coverflow.stretch * k : 0;
							.001 > Math.abs(p) && (p = 0);
							.001 > Math.abs(r) && (r = 0);
							.001 > Math.abs(q) && (q = 0);
							.001 > Math.abs(n) && (n = 0);
							.001 > Math.abs(l) && (l = 0);
							if (g.transform("translate3d(" + p + "px," + r + "px," + q + "px)  rotateX(" + l + "deg) rotateY(" + n + "deg)"), g[0].style.zIndex = 1 - Math.abs(Math.round(k)), a.params.coverflow.slideShadows) n = a.isHorizontal() ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"), l = a.isHorizontal() ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom"), 0 === n.length && (n = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "left" : "top") + '"\x3e\x3c/div\x3e'), g.append(n)), 0 === l.length && (l = m('\x3cdiv class\x3d"swiper-slide-shadow-' + (a.isHorizontal() ? "right" : "bottom") + '"\x3e\x3c/div\x3e'), g.append(l)), n.length && (n[0].style.opacity = 0 < k ? k : 0), l.length && (l[0].style.opacity = 0 < -k ? -k : 0)
						}
						a.browser.ie && (a.wrapper[0].style.perspectiveOrigin = b + "px 50%")
					},
					setTransition: function(b) {
						a.slides.transition(b).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(b)
					}
				}
			};
			a.lazy = {
				initialImageLoaded: !1,
				loadImageInSlide: function(b, c) {
					if (void 0 !== b && (void 0 === c && (c = !0), 0 !== a.slides.length)) {
						var d = a.slides.eq(b),
							e = d.find("." + a.params.lazyLoadingClass + ":not(." + a.params.lazyStatusLoadedClass + "):not(." + a.params.lazyStatusLoadingClass + ")");
						!d.hasClass(a.params.lazyLoadingClass) || d.hasClass(a.params.lazyStatusLoadedClass) || d.hasClass(a.params.lazyStatusLoadingClass) || (e = e.add(d[0]));
						0 !== e.length && e.each(function() {
							var b = m(this);
							b.addClass(a.params.lazyStatusLoadingClass);
							var h = b.attr("data-background"),
								e = b.attr("data-src"),
								f = b.attr("data-srcset"),
								g = b.attr("data-sizes");
							a.loadImage(b[0], e || h, f, g, !1, function() {
								if (void 0 !== a && null !== a && a) {
									if (h ? (b.css("background-image", 'url("' + h + '")'), b.removeAttr("data-background")) : (f && (b.attr("srcset", f), b.removeAttr("data-srcset")), g && (b.attr("sizes", g), b.removeAttr("data-sizes")), e && (b.attr("src", e), b.removeAttr("data-src"))), b.addClass(a.params.lazyStatusLoadedClass).removeClass(a.params.lazyStatusLoadingClass), d.find("." + a.params.lazyPreloaderClass + ", ." + a.params.preloaderClass).remove(), a.params.loop && c) {
										var k = d.attr("data-swiper-slide-index");
										k = d.hasClass(a.params.slideDuplicateClass) ? a.wrapper.children('[data-swiper-slide-index\x3d"' + k + '"]:not(.' + a.params.slideDuplicateClass + ")") : a.wrapper.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index\x3d"' + k + '"]');
										a.lazy.loadImageInSlide(k.index(), !1)
									}
									a.emit("onLazyImageReady", a, d[0], b[0])
								}
							});
							a.emit("onLazyImageLoad", a, d[0], b[0])
						})
					}
				},
				load: function() {
					var b, c = a.params.slidesPerView;
					if ("auto" === c && (c = 0), a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0), a.params.watchSlidesVisibility) a.wrapper.children("." + a.params.slideVisibleClass).each(function() {
						a.lazy.loadImageInSlide(m(this).index())
					});
					else if (1 < c)
						for (b = a.activeIndex; b < a.activeIndex + c; b++) a.slides[b] && a.lazy.loadImageInSlide(b);
					else a.lazy.loadImageInSlide(a.activeIndex);
					if (a.params.lazyLoadingInPrevNext)
						if (1 < c || a.params.lazyLoadingInPrevNextAmount && 1 < a.params.lazyLoadingInPrevNextAmount) {
							b = a.params.lazyLoadingInPrevNextAmount;
							var d = c,
								e = Math.min(a.activeIndex + d + Math.max(b, d), a.slides.length);
							d = Math.max(a.activeIndex - Math.max(d, b), 0);
							for (b = a.activeIndex + c; b < e; b++) a.slides[b] && a.lazy.loadImageInSlide(b);
							for (b = d; b < a.activeIndex; b++) a.slides[b] && a.lazy.loadImageInSlide(b)
						} else c = a.wrapper.children("." + a.params.slideNextClass), 0 < c.length && a.lazy.loadImageInSlide(c.index()), c = a.wrapper.children("." + a.params.slidePrevClass), 0 < c.length && a.lazy.loadImageInSlide(c.index())
				},
				onTransitionStart: function() {
					a.params.lazyLoading && (a.params.lazyLoadingOnTransitionStart || !a.params.lazyLoadingOnTransitionStart && !a.lazy.initialImageLoaded) && a.lazy.load()
				},
				onTransitionEnd: function() {
					a.params.lazyLoading && !a.params.lazyLoadingOnTransitionStart && a.lazy.load()
				}
			};
			a.scrollbar = {
				isTouched: !1,
				setDragPosition: function(b) {
					var c = a.scrollbar;
					b = (a.isHorizontal() ? "touchstart" === b.type || "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX || b.clientX : "touchstart" === b.type || "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY || b.clientY) - c.track.offset()[a.isHorizontal() ? "left" : "top"] - c.dragSize / 2;
					var d = -a.minTranslate() * c.moveDivider,
						e = -a.maxTranslate() * c.moveDivider;
					b < d ? b = d : b > e && (b = e);
					b = -b / c.moveDivider;
					a.updateProgress(b);
					a.setWrapperTranslate(b, !0)
				},
				dragStart: function(b) {
					var c = a.scrollbar;
					c.isTouched = !0;
					b.preventDefault();
					b.stopPropagation();
					c.setDragPosition(b);
					clearTimeout(c.dragTimeout);
					c.track.transition(0);
					a.params.scrollbarHide && c.track.css("opacity", 1);
					a.wrapper.transition(100);
					c.drag.transition(100);
					a.emit("onScrollbarDragStart", a)
				},
				dragMove: function(b) {
					var c = a.scrollbar;
					c.isTouched && (b.preventDefault ? b.preventDefault() : b.returnValue = !1, c.setDragPosition(b), a.wrapper.transition(0), c.track.transition(0), c.drag.transition(0), a.emit("onScrollbarDragMove", a))
				},
				dragEnd: function(b) {
					var c = a.scrollbar;
					c.isTouched && (c.isTouched = !1, a.params.scrollbarHide && (clearTimeout(c.dragTimeout), c.dragTimeout = setTimeout(function() {
						c.track.css("opacity", 0);
						c.track.transition(400)
					}, 1E3)), a.emit("onScrollbarDragEnd", a), a.params.scrollbarSnapOnRelease && a.slideReset())
				},
				draggableEvents: !1 !== a.params.simulateTouch || a.support.touch ? a.touchEvents : a.touchEventsDesktop,
				enableDraggable: function() {
					var b = a.scrollbar,
						c = a.support.touch ? b.track : document;
					m(b.track).on(b.draggableEvents.start, b.dragStart);
					m(c).on(b.draggableEvents.move, b.dragMove);
					m(c).on(b.draggableEvents.end, b.dragEnd)
				},
				disableDraggable: function() {
					var b = a.scrollbar,
						c = a.support.touch ? b.track : document;
					m(b.track).off(b.draggableEvents.start, b.dragStart);
					m(c).off(b.draggableEvents.move, b.dragMove);
					m(c).off(b.draggableEvents.end, b.dragEnd)
				},
				set: function() {
					if (a.params.scrollbar) {
						var b = a.scrollbar;
						b.track = m(a.params.scrollbar);
						a.params.uniqueNavElements && "string" == typeof a.params.scrollbar && 1 < b.track.length && 1 === a.container.find(a.params.scrollbar).length && (b.track = a.container.find(a.params.scrollbar));
						b.drag = b.track.find(".swiper-scrollbar-drag");
						0 === b.drag.length && (b.drag = m('\x3cdiv class\x3d"swiper-scrollbar-drag"\x3e\x3c/div\x3e'), b.track.append(b.drag));
						b.drag[0].style.width = "";
						b.drag[0].style.height = "";
						b.trackSize = a.isHorizontal() ? b.track[0].offsetWidth : b.track[0].offsetHeight;
						b.divider = a.size / a.virtualSize;
						b.moveDivider = b.trackSize / a.size * b.divider;
						b.dragSize = b.trackSize * b.divider;
						a.isHorizontal() ? b.drag[0].style.width = b.dragSize + "px" : b.drag[0].style.height = b.dragSize + "px";
						1 <= b.divider ? b.track[0].style.display = "none" : b.track[0].style.display = "";
						a.params.scrollbarHide && (b.track[0].style.opacity = 0)
					}
				},
				setTranslate: function() {
					if (a.params.scrollbar) {
						var b = a.scrollbar,
							c = (a.translate, b.dragSize);
						var d = (b.trackSize - b.dragSize) * a.progress;
						a.rtl && a.isHorizontal() ? (d = -d, 0 < d ? (c = b.dragSize - d, d = 0) : -d + b.dragSize > b.trackSize && (c = b.trackSize + d)) : 0 > d ? (c = b.dragSize + d, d = 0) : d + b.dragSize > b.trackSize && (c = b.trackSize - d);
						a.isHorizontal() ? (a.support.transforms3d ? b.drag.transform("translate3d(" + d + "px, 0, 0)") : b.drag.transform("translateX(" + d + "px)"), b.drag[0].style.width = c + "px") : (a.support.transforms3d ? b.drag.transform("translate3d(0px, " + d + "px, 0)") : b.drag.transform("translateY(" + d + "px)"), b.drag[0].style.height = c + "px");
						a.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
							b.track[0].style.opacity = 0;
							b.track.transition(400)
						}, 1E3))
					}
				},
				setTransition: function(b) {
					a.params.scrollbar && a.scrollbar.drag.transition(b)
				}
			};
			a.controller = {
				LinearSpline: function(a, c) {
					var b = function() {
						var a, b, c;
						return function(d, e) {
							b = -1;
							for (a = d.length; 1 < a - b;) d[c = a + b >> 1] <= e ? b = c : a = c;
							return a
						}
					}();
					this.x = a;
					this.y = c;
					this.lastIndex = a.length - 1;
					var d, e;
					this.x.length;
					this.interpolate = function(a) {
						return a ? (e = b(this.x, a), d = e - 1, (a - this.x[d]) * (this.y[e] - this.y[d]) / (this.x[e] - this.x[d]) + this.y[d]) : 0
					}
				},
				getInterpolateFunction: function(b) {
					a.controller.spline || (a.controller.spline = a.params.loop ? new a.controller.LinearSpline(a.slidesGrid, b.slidesGrid) : new a.controller.LinearSpline(a.snapGrid, b.snapGrid))
				},
				setTranslate: function(b, c) {
					function d(c) {
						b = c.rtl && "horizontal" === c.params.direction ? -a.translate : a.translate;
						"slide" === a.params.controlBy && (a.controller.getInterpolateFunction(c), f = -a.controller.spline.interpolate(-b));
						f && "container" !== a.params.controlBy || (e = (c.maxTranslate() - c.minTranslate()) / (a.maxTranslate() - a.minTranslate()), f = (b - a.minTranslate()) * e + c.minTranslate());
						a.params.controlInverse && (f = c.maxTranslate() - f);
						c.updateProgress(f);
						c.setWrapperTranslate(f, !1, a);
						c.updateActiveIndex()
					}
					var e, f, g = a.params.control;
					if (Array.isArray(g))
						for (var k = 0; k < g.length; k++) g[k] !== c && g[k] instanceof w && d(g[k]);
					else g instanceof w && c !== g && d(g)
				},
				setTransition: function(b, c) {
					function d(c) {
						c.setWrapperTransition(b, a);
						0 !== b && (c.onTransitionStart(), c.wrapper.transitionEnd(function() {
							f && (c.params.loop && "slide" === a.params.controlBy && c.fixLoop(), c.onTransitionEnd())
						}))
					}
					var e, f = a.params.control;
					if (Array.isArray(f))
						for (e = 0; e < f.length; e++) f[e] !== c && f[e] instanceof w && d(f[e]);
					else f instanceof w && c !== f && d(f)
				}
			};
			a.hashnav = {
				onHashCange: function(b, c) {
					var d = document.location.hash.replace("#", "");
					d !== a.slides.eq(a.activeIndex).attr("data-hash") && a.slideTo(a.wrapper.children("." + a.params.slideClass + '[data-hash\x3d"' + d + '"]').index())
				},
				attachEvents: function(b) {
					b = b ? "off" : "on";
					m(window)[b]("hashchange", a.hashnav.onHashCange)
				},
				setHash: function() {
					if (a.hashnav.initialized && a.params.hashnav)
						if (a.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + a.slides.eq(a.activeIndex).attr("data-hash") || "");
						else {
							var b = a.slides.eq(a.activeIndex);
							b = b.attr("data-hash") || b.attr("data-history");
							document.location.hash = b || ""
						}
				},
				init: function() {
					if (a.params.hashnav && !a.params.history) {
						a.hashnav.initialized = !0;
						var b = document.location.hash.replace("#", "");
						if (b)
							for (var c = 0, d = a.slides.length; c < d; c++) {
								var e = a.slides.eq(c);
								(e.attr("data-hash") || e.attr("data-history")) !== b || e.hasClass(a.params.slideDuplicateClass) || (e = e.index(), a.slideTo(e, 0, a.params.runCallbacksOnInit, !0))
							}
						a.params.hashnavWatchState && a.hashnav.attachEvents()
					}
				},
				destroy: function() {
					a.params.hashnavWatchState && a.hashnav.attachEvents(!0)
				}
			};
			a.history = {
				init: function() {
					if (a.params.history) {
						if (!window.history || !window.history.pushState) return a.params.history = !1, void(a.params.hashnav = !0);
						a.history.initialized = !0;
						this.paths = this.getPathValues();
						(this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, a.params.runCallbacksOnInit), a.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
					}
				},
				setHistoryPopState: function() {
					a.history.paths = a.history.getPathValues();
					a.history.scrollToSlide(a.params.speed, a.history.paths.value, !1)
				},
				getPathValues: function() {
					var a = window.location.pathname.slice(1).split("/"),
						c = a.length;
					return {
						key: a[c - 2],
						value: a[c - 1]
					}
				},
				setHistory: function(b, c) {
					if (a.history.initialized && a.params.history) {
						var d = a.slides.eq(c);
						d = this.slugify(d.attr("data-history"));
						window.location.pathname.includes(b) || (d = b + "/" + d);
						a.params.replaceState ? window.history.replaceState(null, null, d) : window.history.pushState(null, null, d)
					}
				},
				slugify: function(a) {
					return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
				},
				scrollToSlide: function(b, c, d) {
					if (c)
						for (var e = 0, h = a.slides.length; e < h; e++) {
							var f = a.slides.eq(e);
							this.slugify(f.attr("data-history")) !== c || f.hasClass(a.params.slideDuplicateClass) || (f = f.index(), a.slideTo(f, b, d))
						} else a.slideTo(0, b, d)
				}
			};
			a.disableKeyboardControl = function() {
				a.params.keyboardControl = !1;
				m(document).off("keydown", g)
			};
			a.enableKeyboardControl = function() {
				a.params.keyboardControl = !0;
				m(document).on("keydown", g)
			};
			a.mousewheel = {
				event: !1,
				lastScrollTime: (new window.Date).getTime()
			};
			a.params.mousewheelControl && (a.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
				var a = "onwheel" in document;
				a || (a = document.createElement("div"), a.setAttribute("onwheel", "return;"), a = "function" == typeof a.onwheel);
				return !a && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
			}() ? "wheel" : "mousewheel");
			a.disableMousewheelControl = function() {
				if (!a.mousewheel.event) return !1;
				var b = a.container;
				return "container" !== a.params.mousewheelEventsTarged && (b = m(a.params.mousewheelEventsTarged)), b.off(a.mousewheel.event, r), a.params.mousewheelControl = !1, !0
			};
			a.enableMousewheelControl = function() {
				if (!a.mousewheel.event) return !1;
				var b = a.container;
				return "container" !== a.params.mousewheelEventsTarged && (b = m(a.params.mousewheelEventsTarged)), b.on(a.mousewheel.event, r), a.params.mousewheelControl = !0, !0
			};
			a.parallax = {
				setTranslate: function() {
					a.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
						G(this, a.progress)
					});
					a.slides.each(function() {
						var a = m(this);
						a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							G(this, Math.min(Math.max(a[0].progress, -1), 1))
						})
					})
				},
				setTransition: function(b) {
					void 0 === b && (b = a.params.speed);
					a.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
						var a = m(this),
							d = parseInt(a.attr("data-swiper-parallax-duration"), 10) || b;
						0 === b && (d = 0);
						a.transition(d)
					})
				}
			};
			a.zoom = {
				scale: 1,
				currentScale: 1,
				isScaling: !1,
				gesture: {
					slide: void 0,
					slideWidth: void 0,
					slideHeight: void 0,
					image: void 0,
					imageWrap: void 0,
					zoomMax: a.params.zoomMax
				},
				image: {
					isTouched: void 0,
					isMoved: void 0,
					currentX: void 0,
					currentY: void 0,
					minX: void 0,
					minY: void 0,
					maxX: void 0,
					maxY: void 0,
					width: void 0,
					height: void 0,
					startX: void 0,
					startY: void 0,
					touchesStart: {},
					touchesCurrent: {}
				},
				velocity: {
					x: void 0,
					y: void 0,
					prevPositionX: void 0,
					prevPositionY: void 0,
					prevTime: void 0
				},
				getDistanceBetweenTouches: function(a) {
					return 2 > a.targetTouches.length ? 1 : Math.sqrt(Math.pow(a.targetTouches[1].pageX - a.targetTouches[0].pageX, 2) + Math.pow(a.targetTouches[1].pageY - a.targetTouches[0].pageY, 2))
				},
				onGestureStart: function(b) {
					var c = a.zoom;
					if (!a.support.gestures) {
						if ("touchstart" !== b.type || "touchstart" === b.type && 2 > b.targetTouches.length) return;
						c.gesture.scaleStart = c.getDistanceBetweenTouches(b)
					}
					if (!(c.gesture.slide && c.gesture.slide.length || (c.gesture.slide = m(this), 0 === c.gesture.slide.length && (c.gesture.slide = a.slides.eq(a.activeIndex)), c.gesture.image = c.gesture.slide.find("img, svg, canvas"), c.gesture.imageWrap = c.gesture.image.parent("." + a.params.zoomContainerClass), c.gesture.zoomMax = c.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, 0 !== c.gesture.imageWrap.length))) return void(c.gesture.image = void 0);
					c.gesture.image.transition(0);
					c.isScaling = !0
				},
				onGestureChange: function(b) {
					var c = a.zoom;
					if (!a.support.gestures) {
						if ("touchmove" !== b.type || "touchmove" === b.type && 2 > b.targetTouches.length) return;
						c.gesture.scaleMove = c.getDistanceBetweenTouches(b)
					}
					c.gesture.image && 0 !== c.gesture.image.length && (a.support.gestures ? c.scale = b.scale * c.currentScale : c.scale = c.gesture.scaleMove / c.gesture.scaleStart * c.currentScale, c.scale > c.gesture.zoomMax && (c.scale = c.gesture.zoomMax - 1 + Math.pow(c.scale - c.gesture.zoomMax + 1, .5)), c.scale < a.params.zoomMin && (c.scale = a.params.zoomMin + 1 - Math.pow(a.params.zoomMin - c.scale + 1, .5)), c.gesture.image.transform("translate3d(0,0,0) scale(" + c.scale + ")"))
				},
				onGestureEnd: function(b) {
					var c = a.zoom;
					!a.support.gestures && ("touchend" !== b.type || "touchend" === b.type && 2 > b.changedTouches.length) || c.gesture.image && 0 !== c.gesture.image.length && (c.scale = Math.max(Math.min(c.scale, c.gesture.zoomMax), a.params.zoomMin), c.gesture.image.transition(a.params.speed).transform("translate3d(0,0,0) scale(" + c.scale + ")"), c.currentScale = c.scale, c.isScaling = !1, 1 === c.scale && (c.gesture.slide = void 0))
				},
				onTouchStart: function(a, c) {
					var b = a.zoom;
					b.gesture.image && 0 !== b.gesture.image.length && (b.image.isTouched || ("android" === a.device.os && c.preventDefault(), b.image.isTouched = !0, b.image.touchesStart.x = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, b.image.touchesStart.y = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY))
				},
				onTouchMove: function(b) {
					var c = a.zoom;
					if (c.gesture.image && 0 !== c.gesture.image.length && (a.allowClick = !1, c.image.isTouched && c.gesture.slide)) {
						c.image.isMoved || (c.image.width = c.gesture.image[0].offsetWidth, c.image.height = c.gesture.image[0].offsetHeight, c.image.startX = a.getTranslate(c.gesture.imageWrap[0], "x") || 0, c.image.startY = a.getTranslate(c.gesture.imageWrap[0], "y") || 0, c.gesture.slideWidth = c.gesture.slide[0].offsetWidth, c.gesture.slideHeight = c.gesture.slide[0].offsetHeight, c.gesture.imageWrap.transition(0), a.rtl && (c.image.startX = -c.image.startX), a.rtl && (c.image.startY = -c.image.startY));
						var d = c.image.width * c.scale,
							e = c.image.height * c.scale;
						if (!(d < c.gesture.slideWidth && e < c.gesture.slideHeight)) {
							if (c.image.minX = Math.min(c.gesture.slideWidth / 2 - d / 2, 0), c.image.maxX = -c.image.minX, c.image.minY = Math.min(c.gesture.slideHeight / 2 - e / 2, 0), c.image.maxY = -c.image.minY, c.image.touchesCurrent.x = "touchmove" === b.type ? b.targetTouches[0].pageX : b.pageX, c.image.touchesCurrent.y = "touchmove" === b.type ? b.targetTouches[0].pageY : b.pageY, !c.image.isMoved && !c.isScaling)
								if (a.isHorizontal() && Math.floor(c.image.minX) === Math.floor(c.image.startX) && c.image.touchesCurrent.x < c.image.touchesStart.x || Math.floor(c.image.maxX) === Math.floor(c.image.startX) && c.image.touchesCurrent.x > c.image.touchesStart.x || !a.isHorizontal() && Math.floor(c.image.minY) === Math.floor(c.image.startY) && c.image.touchesCurrent.y < c.image.touchesStart.y || Math.floor(c.image.maxY) === Math.floor(c.image.startY) && c.image.touchesCurrent.y > c.image.touchesStart.y) return void(c.image.isTouched = !1);
							b.preventDefault();
							b.stopPropagation();
							c.image.isMoved = !0;
							c.image.currentX = c.image.touchesCurrent.x - c.image.touchesStart.x + c.image.startX;
							c.image.currentY = c.image.touchesCurrent.y - c.image.touchesStart.y + c.image.startY;
							c.image.currentX < c.image.minX && (c.image.currentX = c.image.minX + 1 - Math.pow(c.image.minX - c.image.currentX + 1, .8));
							c.image.currentX > c.image.maxX && (c.image.currentX = c.image.maxX - 1 + Math.pow(c.image.currentX - c.image.maxX + 1, .8));
							c.image.currentY < c.image.minY && (c.image.currentY = c.image.minY + 1 - Math.pow(c.image.minY - c.image.currentY + 1, .8));
							c.image.currentY > c.image.maxY && (c.image.currentY = c.image.maxY - 1 + Math.pow(c.image.currentY - c.image.maxY + 1, .8));
							c.velocity.prevPositionX || (c.velocity.prevPositionX = c.image.touchesCurrent.x);
							c.velocity.prevPositionY || (c.velocity.prevPositionY = c.image.touchesCurrent.y);
							c.velocity.prevTime || (c.velocity.prevTime = Date.now());
							c.velocity.x = (c.image.touchesCurrent.x - c.velocity.prevPositionX) / (Date.now() - c.velocity.prevTime) / 2;
							c.velocity.y = (c.image.touchesCurrent.y - c.velocity.prevPositionY) / (Date.now() - c.velocity.prevTime) / 2;
							2 > Math.abs(c.image.touchesCurrent.x - c.velocity.prevPositionX) && (c.velocity.x = 0);
							2 > Math.abs(c.image.touchesCurrent.y - c.velocity.prevPositionY) && (c.velocity.y = 0);
							c.velocity.prevPositionX = c.image.touchesCurrent.x;
							c.velocity.prevPositionY = c.image.touchesCurrent.y;
							c.velocity.prevTime = Date.now();
							c.gesture.imageWrap.transform("translate3d(" + c.image.currentX + "px, " + c.image.currentY + "px,0)")
						}
					}
				},
				onTouchEnd: function(a, c) {
					var b = a.zoom;
					if (b.gesture.image && 0 !== b.gesture.image.length) {
						if (!b.image.isTouched || !b.image.isMoved) return b.image.isTouched = !1, void(b.image.isMoved = !1);
						b.image.isTouched = !1;
						b.image.isMoved = !1;
						var d = 300,
							e = 300,
							f = b.image.currentX + b.velocity.x * d,
							g = b.image.currentY + b.velocity.y * e;
						0 !== b.velocity.x && (d = Math.abs((f - b.image.currentX) / b.velocity.x));
						0 !== b.velocity.y && (e = Math.abs((g - b.image.currentY) / b.velocity.y));
						d = Math.max(d, e);
						b.image.currentX = f;
						b.image.currentY = g;
						f = b.image.height * b.scale;
						b.image.minX = Math.min(b.gesture.slideWidth / 2 - b.image.width * b.scale / 2, 0);
						b.image.maxX = -b.image.minX;
						b.image.minY = Math.min(b.gesture.slideHeight / 2 - f / 2, 0);
						b.image.maxY = -b.image.minY;
						b.image.currentX = Math.max(Math.min(b.image.currentX, b.image.maxX), b.image.minX);
						b.image.currentY = Math.max(Math.min(b.image.currentY, b.image.maxY), b.image.minY);
						b.gesture.imageWrap.transition(d).transform("translate3d(" + b.image.currentX + "px, " + b.image.currentY + "px,0)")
					}
				},
				onTransitionEnd: function(a) {
					var b = a.zoom;
					b.gesture.slide && a.previousIndex !== a.activeIndex && (b.gesture.image.transform("translate3d(0,0,0) scale(1)"), b.gesture.imageWrap.transform("translate3d(0,0,0)"), b.gesture.slide = b.gesture.image = b.gesture.imageWrap = void 0, b.scale = b.currentScale = 1)
				},
				toggleZoom: function(a, c) {
					var b = a.zoom;
					if (b.gesture.slide || (b.gesture.slide = a.clickedSlide ? m(a.clickedSlide) : a.slides.eq(a.activeIndex), b.gesture.image = b.gesture.slide.find("img, svg, canvas"), b.gesture.imageWrap = b.gesture.image.parent("." + a.params.zoomContainerClass)), b.gesture.image && 0 !== b.gesture.image.length) {
						var d, e, f, g, k, l, q, r, p, u, G, A, t, v, w, x, y, z;
						void 0 === b.image.touchesStart.x && c ? (d = "touchend" === c.type ? c.changedTouches[0].pageX : c.pageX, e = "touchend" === c.type ? c.changedTouches[0].pageY : c.pageY) : (d = b.image.touchesStart.x, e = b.image.touchesStart.y);
						b.scale && 1 !== b.scale ? (b.scale = b.currentScale = 1, b.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), b.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), b.gesture.slide = void 0) : (b.scale = b.currentScale = b.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, c ? (y = b.gesture.slide[0].offsetWidth, z = b.gesture.slide[0].offsetHeight, f = b.gesture.slide.offset().left, g = b.gesture.slide.offset().top, k = f + y / 2 - d, l = g + z / 2 - e, p = b.gesture.image[0].offsetWidth, u = b.gesture.image[0].offsetHeight, G = p * b.scale, A = u * b.scale, t = Math.min(y / 2 - G / 2, 0), v = Math.min(z / 2 - A / 2, 0), w = -t, x = -v, q = k * b.scale, r = l * b.scale, q < t && (q = t), q > w && (q = w), r < v && (r = v), r > x && (r = x)) : (q = 0, r = 0), b.gesture.imageWrap.transition(300).transform("translate3d(" + q + "px, " + r + "px,0)"), b.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
					}
				},
				attachEvents: function(b) {
					var c = b ? "off" : "on";
					a.params.zoom && (b = (a.slides, !("touchstart" !== a.touchEvents.start || !a.support.passiveListener || !a.params.passiveListeners) && {
						passive: !0,
						capture: !1
					}), a.support.gestures ? (a.slides[c]("gesturestart", a.zoom.onGestureStart, b), a.slides[c]("gesturechange", a.zoom.onGestureChange, b), a.slides[c]("gestureend", a.zoom.onGestureEnd, b)) : "touchstart" === a.touchEvents.start && (a.slides[c](a.touchEvents.start, a.zoom.onGestureStart, b), a.slides[c](a.touchEvents.move, a.zoom.onGestureChange, b), a.slides[c](a.touchEvents.end, a.zoom.onGestureEnd, b)), a[c]("touchStart", a.zoom.onTouchStart), a.slides.each(function(b, d) {
						0 < m(d).find("." + a.params.zoomContainerClass).length && m(d)[c](a.touchEvents.move, a.zoom.onTouchMove)
					}), a[c]("touchEnd", a.zoom.onTouchEnd), a[c]("transitionEnd", a.zoom.onTransitionEnd), a.params.zoomToggle && a.on("doubleTap", a.zoom.toggleZoom))
				},
				init: function() {
					a.zoom.attachEvents()
				},
				destroy: function() {
					a.zoom.attachEvents(!0)
				}
			};
			a._plugins = [];
			for (var S in a.plugins)(A = a.plugins[S](a, a.params[S])) && a._plugins.push(A);
			return a.callPlugins = function(b, c, d, e, f, g) {
				for (var h = 0; h < a._plugins.length; h++) b in a._plugins[h] && a._plugins[h][b](c, d, e, f, g)
			}, a.emitterEventListeners = {}, a.emit = function(b, c, d, e, f, g) {
				a.params[b] && a.params[b](c, d, e, f, g);
				var h;
				if (a.emitterEventListeners[b])
					for (h = 0; h < a.emitterEventListeners[b].length; h++) a.emitterEventListeners[b][h](c, d, e, f, g);
				a.callPlugins && a.callPlugins(b, c, d, e, f, g)
			}, a.on = function(b, c) {
				return b = p(b), a.emitterEventListeners[b] || (a.emitterEventListeners[b] = []), a.emitterEventListeners[b].push(c), a
			}, a.off = function(b, c) {
				var d;
				if (b = p(b), void 0 === c) return a.emitterEventListeners[b] = [], a;
				if (a.emitterEventListeners[b] && 0 !== a.emitterEventListeners[b].length) {
					for (d = 0; d < a.emitterEventListeners[b].length; d++) a.emitterEventListeners[b][d] === c && a.emitterEventListeners[b].splice(d, 1);
					return a
				}
			}, a.once = function(b, c) {
				b = p(b);
				var d = function(e, f, h, g, k) {
					c(e, f, h, g, k);
					a.off(b, d)
				};
				return a.on(b, d), a
			}, a.a11y = {
				makeFocusable: function(a) {
					return a.attr("tabIndex", "0"), a
				},
				addRole: function(a, c) {
					return a.attr("role", c), a
				},
				addLabel: function(a, c) {
					return a.attr("aria-label", c), a
				},
				disable: function(a) {
					return a.attr("aria-disabled", !0), a
				},
				enable: function(a) {
					return a.attr("aria-disabled", !1), a
				},
				onEnterKey: function(b) {
					13 === b.keyCode && (m(b.target).is(a.params.nextButton) ? (a.onClickNext(b), a.isEnd ? a.a11y.notify(a.params.lastSlideMessage) : a.a11y.notify(a.params.nextSlideMessage)) : m(b.target).is(a.params.prevButton) && (a.onClickPrev(b), a.isBeginning ? a.a11y.notify(a.params.firstSlideMessage) : a.a11y.notify(a.params.prevSlideMessage)), m(b.target).is("." + a.params.bulletClass) && m(b.target)[0].click())
				},
				liveRegion: m('\x3cspan class\x3d"' + a.params.notificationClass + '" aria-live\x3d"assertive" aria-atomic\x3d"true"\x3e\x3c/span\x3e'),
				notify: function(b) {
					var c = a.a11y.liveRegion;
					0 !== c.length && (c.html(""), c.html(b))
				},
				init: function() {
					a.params.nextButton && a.nextButton && 0 < a.nextButton.length && (a.a11y.makeFocusable(a.nextButton), a.a11y.addRole(a.nextButton, "button"), a.a11y.addLabel(a.nextButton, a.params.nextSlideMessage));
					a.params.prevButton && a.prevButton && 0 < a.prevButton.length && (a.a11y.makeFocusable(a.prevButton), a.a11y.addRole(a.prevButton, "button"), a.a11y.addLabel(a.prevButton, a.params.prevSlideMessage));
					m(a.container).append(a.a11y.liveRegion)
				},
				initPagination: function() {
					a.params.pagination && a.params.paginationClickable && a.bullets && a.bullets.length && a.bullets.each(function() {
						var b = m(this);
						a.a11y.makeFocusable(b);
						a.a11y.addRole(b, "button");
						a.a11y.addLabel(b, a.params.paginationBulletMessage.replace(/{{index}}/, b.index() + 1))
					})
				},
				destroy: function() {
					a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove()
				}
			}, a.init = function() {
				a.params.loop && a.createLoop();
				a.updateContainerSize();
				a.updateSlidesSize();
				a.updatePagination();
				a.params.scrollbar && a.scrollbar && (a.scrollbar.set(), a.params.scrollbarDraggable && a.scrollbar.enableDraggable());
				"slide" !== a.params.effect && a.effects[a.params.effect] && (a.params.loop || a.updateProgress(), a.effects[a.params.effect].setTranslate());
				a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit) : (a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit), 0 === a.params.initialSlide && (a.parallax && a.params.parallax && a.parallax.setTranslate(), a.lazy && a.params.lazyLoading && (a.lazy.load(), a.lazy.initialImageLoaded = !0)));
				a.attachEvents();
				a.params.observer && a.support.observer && a.initObservers();
				a.params.preloadImages && !a.params.lazyLoading && a.preloadImages();
				a.params.zoom && a.zoom && a.zoom.init();
				a.params.autoplay && a.startAutoplay();
				a.params.keyboardControl && a.enableKeyboardControl && a.enableKeyboardControl();
				a.params.mousewheelControl && a.enableMousewheelControl && a.enableMousewheelControl();
				a.params.hashnavReplaceState && (a.params.replaceState = a.params.hashnavReplaceState);
				a.params.history && a.history && a.history.init();
				a.params.hashnav && a.hashnav && a.hashnav.init();
				a.params.a11y && a.a11y && a.a11y.init();
				a.emit("onInit", a)
			}, a.cleanupStyles = function() {
				a.container.removeClass(a.classNames.join(" ")).removeAttr("style");
				a.wrapper.removeAttr("style");
				a.slides && a.slides.length && a.slides.removeClass([a.params.slideVisibleClass,
					a.params.slideActiveClass, a.params.slideNextClass, a.params.slidePrevClass
				].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
				a.paginationContainer && a.paginationContainer.length && a.paginationContainer.removeClass(a.params.paginationHiddenClass);
				a.bullets && a.bullets.length && a.bullets.removeClass(a.params.bulletActiveClass);
				a.params.prevButton && m(a.params.prevButton).removeClass(a.params.buttonDisabledClass);
				a.params.nextButton && m(a.params.nextButton).removeClass(a.params.buttonDisabledClass);
				a.params.scrollbar && a.scrollbar && (a.scrollbar.track && a.scrollbar.track.length && a.scrollbar.track.removeAttr("style"), a.scrollbar.drag && a.scrollbar.drag.length && a.scrollbar.drag.removeAttr("style"))
			}, a.destroy = function(b, c) {
				a.detachEvents();
				a.stopAutoplay();
				a.params.scrollbar && a.scrollbar && a.params.scrollbarDraggable && a.scrollbar.disableDraggable();
				a.params.loop && a.destroyLoop();
				c && a.cleanupStyles();
				a.disconnectObservers();
				a.params.zoom && a.zoom && a.zoom.destroy();
				a.params.keyboardControl && a.disableKeyboardControl && a.disableKeyboardControl();
				a.params.mousewheelControl && a.disableMousewheelControl && a.disableMousewheelControl();
				a.params.a11y && a.a11y && a.a11y.destroy();
				a.params.history && !a.params.replaceState && window.removeEventListener("popstate", a.history.setHistoryPopState);
				a.params.hashnav && a.hashnav && a.hashnav.destroy();
				a.emit("onDestroy");
				!1 !== b && (a = null)
			}, a.init(), a
		}
	};
	w.prototype = {
		isSafari: function() {
			var l = window.navigator.userAgent.toLowerCase();
			return 0 <= l.indexOf("safari") && 0 > l.indexOf("chrome") && 0 > l.indexOf("android")
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
		isArray: function(l) {
			return "[object Array]" === Object.prototype.toString.apply(l)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
			lteIE9: function() {
				var l = document.createElement("div");
				return l.innerHTML = "\x3c!--[if lte IE 9]\x3e\x3ci\x3e\x3c/i\x3e\x3c![endif]--\x3e",
					1 === l.getElementsByTagName("i").length
			}()
		},
		device: function() {
			var l = window.navigator.userAgent,
				k = l.match(/(Android);?[\s\/]+([\d.]+)?/),
				d = l.match(/(iPad).*OS\s([\d_]+)/),
				e = l.match(/(iPod)(.*OS\s([\d_]+))?/);
			l = !d && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			return {
				ios: d || l || e,
				android: k
			}
		}(),
		support: {
			touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
			transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
				var l = document.createElement("div").style;
				return "webkitPerspective" in l || "MozPerspective" in l || "OPerspective" in l || "MsPerspective" in l || "perspective" in l
			}(),
			flexbox: function() {
				for (var l = document.createElement("div").style, k = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), d = 0; d < k.length; d++)
					if (k[d] in l) return !0
			}(),
			observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
			passiveListener: function() {
				var l = !1;
				try {
					var k = Object.defineProperty({}, "passive", {
						get: function() {
							l = !0
						}
					});
					window.addEventListener("testPassiveListener", null, k)
				} catch (d) {}
				return l
			}(),
			gestures: "ongesturestart" in window
		},
		plugins: {}
	};
	var z = function() {
			var l = function(d) {
					var e;
					for (e = 0; e < d.length; e++) this[e] = d[e];
					return this.length = d.length, this
				},
				k = function(d, e) {
					var f = [];
					if (d && !e && d instanceof l) return d;
					if (d)
						if ("string" == typeof d) {
							var g = d.trim();
							if (0 <= g.indexOf("\x3c") && 0 <= g.indexOf("\x3e")) {
								var k = "div";
								0 === g.indexOf("\x3cli") && (k = "ul");
								0 === g.indexOf("\x3ctr") && (k = "tbody");
								0 !== g.indexOf("\x3ctd") && 0 !== g.indexOf("\x3cth") || (k = "tr");
								0 === g.indexOf("\x3ctbody") && (k = "table");
								0 === g.indexOf("\x3coption") && (k = "select");
								k = document.createElement(k);
								k.innerHTML = d;
								for (g = 0; g < k.childNodes.length; g++) f.push(k.childNodes[g])
							} else
								for (k = e || "#" !== d[0] || d.match(/[ .<>:~]/) ? (e || document).querySelectorAll(d) : [document.getElementById(d.split("#")[1])], g = 0; g < k.length; g++) k[g] && f.push(k[g])
						} else if (d.nodeType || d === window || d === document) f.push(d);
					else if (0 < d.length && d[0].nodeType)
						for (g = 0; g < d.length; g++) f.push(d[g]);
					return new l(f)
				};
			return l.prototype = {
				addClass: function(d) {
					if (void 0 === d) return this;
					d = d.split(" ");
					for (var e = 0; e < d.length; e++)
						for (var f = 0; f < this.length; f++) this[f].classList.add(d[e]);
					return this
				},
				removeClass: function(d) {
					d = d.split(" ");
					for (var e = 0; e < d.length; e++)
						for (var f = 0; f < this.length; f++) this[f].classList.remove(d[e]);
					return this
				},
				hasClass: function(d) {
					return !!this[0] && this[0].classList.contains(d)
				},
				toggleClass: function(d) {
					d = d.split(" ");
					for (var e = 0; e < d.length; e++)
						for (var f = 0; f < this.length; f++) this[f].classList.toggle(d[e]);
					return this
				},
				attr: function(d, e) {
					if (1 === arguments.length && "string" == typeof d) return this[0] ? this[0].getAttribute(d) : void 0;
					for (var f = 0; f < this.length; f++)
						if (2 === arguments.length) this[f].setAttribute(d, e);
						else
							for (var g in d) this[f][g] = d[g], this[f].setAttribute(g, d[g]);
					return this
				},
				removeAttr: function(d) {
					for (var e = 0; e < this.length; e++) this[e].removeAttribute(d);
					return this
				},
				data: function(d, e) {
					if (void 0 !== e) {
						for (var f = 0; f < this.length; f++) {
							var g = this[f];
							g.dom7ElementDataStorage || (g.dom7ElementDataStorage = {});
							g.dom7ElementDataStorage[d] = e
						}
						return this
					}
					if (this[0]) return (f = this[0].getAttribute("data-" + d)) ? f : this[0].dom7ElementDataStorage && d in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[d] : void 0
				},
				transform: function(d) {
					for (var e = 0; e < this.length; e++) {
						var f = this[e].style;
						f.webkitTransform = f.MsTransform = f.msTransform = f.MozTransform = f.OTransform = f.transform = d
					}
					return this
				},
				transition: function(d) {
					"string" != typeof d && (d += "ms");
					for (var e = 0; e < this.length; e++) {
						var f = this[e].style;
						f.webkitTransitionDuration = f.MsTransitionDuration = f.msTransitionDuration = f.MozTransitionDuration = f.OTransitionDuration = f.transitionDuration = d
					}
					return this
				},
				on: function(d, e, f, g) {
					function l(d) {
						var g = d.target;
						if (k(g).is(e)) f.call(g, d);
						else {
							g = k(g).parents();
							for (var l = 0; l < g.length; l++) k(g[l]).is(e) && f.call(g[l], d)
						}
					}
					var m, p = d.split(" ");
					for (d = 0; d < this.length; d++)
						if ("function" == typeof e || !1 === e)
							for ("function" == typeof e && (f = e, g = f || !1), m = 0; m < p.length; m++) this[d].addEventListener(p[m], f, g);
						else
							for (m = 0; m < p.length; m++) this[d].dom7LiveListeners || (this[d].dom7LiveListeners = []), this[d].dom7LiveListeners.push({
								listener: f,
								liveListener: l
							}), this[d].addEventListener(p[m], l, g);
					return this
				},
				off: function(d, e, f, g) {
					d = d.split(" ");
					for (var k = 0; k < d.length; k++)
						for (var l = 0; l < this.length; l++)
							if ("function" == typeof e || !1 === e) "function" == typeof e && (f = e, g = f || !1), this[l].removeEventListener(d[k], f, g);
							else if (this[l].dom7LiveListeners)
						for (var m = 0; m < this[l].dom7LiveListeners.length; m++) this[l].dom7LiveListeners[m].listener === f && this[l].removeEventListener(d[k], this[l].dom7LiveListeners[m].liveListener, g);
					return this
				},
				once: function(d, e, f, g) {
					function k(m) {
						f(m);
						l.off(d, e, k, g)
					}
					var l = this;
					"function" == typeof e && (e = !1, f = e, g = f);
					l.on(d, e, k, g)
				},
				trigger: function(d, e) {
					for (var f = 0; f < this.length; f++) {
						try {
							var g = new window.CustomEvent(d, {
								detail: e,
								bubbles: !0,
								cancelable: !0
							})
						} catch (q) {
							g = document.createEvent("Event"), g.initEvent(d, !0, !0), g.detail = e
						}
						this[f].dispatchEvent(g)
					}
					return this
				},
				transitionEnd: function(d) {
					function e(l) {
						if (l.target === this)
							for (d.call(this, l), f = 0; f < g.length; f++) k.off(g[f], e)
					}
					var f, g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
						k = this;
					if (d)
						for (f = 0; f < g.length; f++) k.on(g[f], e);
					return this
				},
				width: function() {
					return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
				},
				outerWidth: function(d) {
					return 0 < this.length ? d ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
				},
				height: function() {
					return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
				},
				outerHeight: function(d) {
					return 0 < this.length ? d ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
				},
				offset: function() {
					if (0 < this.length) {
						var d = this[0],
							e = d.getBoundingClientRect(),
							f = document.body;
						return {
							top: e.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || f.clientTop || 0),
							left: e.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || f.clientLeft || 0)
						}
					}
					return null
				},
				css: function(d, e) {
					var f;
					if (1 === arguments.length) {
						if ("string" != typeof d) {
							for (f = 0; f < this.length; f++)
								for (var g in d) this[f].style[g] = d[g];
							return this
						}
						if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(d)
					}
					if (2 === arguments.length && "string" == typeof d)
						for (f = 0; f < this.length; f++) this[f].style[d] = e;
					return this
				},
				each: function(d) {
					for (var e = 0; e < this.length; e++) d.call(this[e], e, this[e]);
					return this
				},
				html: function(d) {
					if (void 0 === d) return this[0] ? this[0].innerHTML : void 0;
					for (var e = 0; e < this.length; e++) this[e].innerHTML = d;
					return this
				},
				text: function(d) {
					if (void 0 === d) return this[0] ? this[0].textContent.trim() : null;
					for (var e = 0; e < this.length; e++) this[e].textContent = d;
					return this
				},
				is: function(d) {
					if (!this[0]) return !1;
					if ("string" == typeof d) {
						var e = this[0];
						if (e === document) return d === document;
						if (e === window) return d === window;
						if (e.matches) return e.matches(d);
						if (e.webkitMatchesSelector) return e.webkitMatchesSelector(d);
						if (e.mozMatchesSelector) return e.mozMatchesSelector(d);
						if (e.msMatchesSelector) return e.msMatchesSelector(d);
						d = k(d);
						for (e = 0; e < d.length; e++)
							if (d[e] === this[0]) return !0;
						return !1
					}
					if (d === document) return this[0] === document;
					if (d === window) return this[0] === window;
					if (d.nodeType || d instanceof l)
						for (d = d.nodeType ? [d] : d, e = 0; e < d.length; e++)
							if (d[e] === this[0]) return !0;
					return !1
				},
				index: function() {
					if (this[0]) {
						for (var d = this[0], e = 0; null !== (d = d.previousSibling);) 1 === d.nodeType && e++;
						return e
					}
				},
				eq: function(d) {
					if (void 0 === d) return this;
					var e, f = this.length;
					return d > f - 1 ? new l([]) : 0 > d ? (e = f + d, new l(0 > e ? [] : [this[e]])) : new l([this[d]])
				},
				append: function(d) {
					var e;
					for (e = 0; e < this.length; e++)
						if ("string" == typeof d) {
							var f = document.createElement("div");
							for (f.innerHTML = d; f.firstChild;) this[e].appendChild(f.firstChild)
						} else if (d instanceof l)
						for (f = 0; f < d.length; f++) this[e].appendChild(d[f]);
					else this[e].appendChild(d);
					return this
				},
				prepend: function(d) {
					var e, f;
					for (e = 0; e < this.length; e++)
						if ("string" == typeof d) {
							var g = document.createElement("div");
							g.innerHTML = d;
							for (f = g.childNodes.length - 1; 0 <= f; f--) this[e].insertBefore(g.childNodes[f], this[e].childNodes[0])
						} else if (d instanceof l)
						for (f = 0; f < d.length; f++) this[e].insertBefore(d[f], this[e].childNodes[0]);
					else this[e].insertBefore(d, this[e].childNodes[0]);
					return this
				},
				insertBefore: function(d) {
					d = k(d);
					for (var e = 0; e < this.length; e++)
						if (1 === d.length) d[0].parentNode.insertBefore(this[e], d[0]);
						else if (1 < d.length)
						for (var f = 0; f < d.length; f++) d[f].parentNode.insertBefore(this[e].cloneNode(!0), d[f])
				},
				insertAfter: function(d) {
					d = k(d);
					for (var e = 0; e < this.length; e++)
						if (1 === d.length) d[0].parentNode.insertBefore(this[e], d[0].nextSibling);
						else if (1 < d.length)
						for (var f = 0; f < d.length; f++) d[f].parentNode.insertBefore(this[e].cloneNode(!0), d[f].nextSibling)
				},
				next: function(d) {
					return new l(0 < this.length ? d ? this[0].nextElementSibling && k(this[0].nextElementSibling).is(d) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				},
				nextAll: function(d) {
					var e = [],
						f = this[0];
					if (!f) return new l([]);
					for (; f.nextElementSibling;) f = f.nextElementSibling, d ? k(f).is(d) && e.push(f) : e.push(f);
					return new l(e)
				},
				prev: function(d) {
					return new l(0 < this.length ? d ? this[0].previousElementSibling && k(this[0].previousElementSibling).is(d) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				},
				prevAll: function(d) {
					var e = [],
						f = this[0];
					if (!f) return new l([]);
					for (; f.previousElementSibling;) f = f.previousElementSibling, d ? k(f).is(d) && e.push(f) : e.push(f);
					return new l(e)
				},
				parent: function(d) {
					for (var e = [], f = 0; f < this.length; f++) d ? k(this[f].parentNode).is(d) && e.push(this[f].parentNode) : e.push(this[f].parentNode);
					return k(k.unique(e))
				},
				parents: function(d) {
					for (var e = [], f = 0; f < this.length; f++)
						for (var g = this[f].parentNode; g;) d ? k(g).is(d) && e.push(g) : e.push(g), g = g.parentNode;
					return k(k.unique(e))
				},
				find: function(d) {
					for (var e = [], f = 0; f < this.length; f++)
						for (var g = this[f].querySelectorAll(d), k = 0; k < g.length; k++) e.push(g[k]);
					return new l(e)
				},
				children: function(d) {
					for (var e = [], f = 0; f < this.length; f++)
						for (var g = this[f].childNodes, m = 0; m < g.length; m++) d ? 1 === g[m].nodeType && k(g[m]).is(d) && e.push(g[m]) : 1 === g[m].nodeType && e.push(g[m]);
					return new l(k.unique(e))
				},
				remove: function() {
					for (var d = 0; d < this.length; d++) this[d].parentNode && this[d].parentNode.removeChild(this[d]);
					return this
				},
				add: function() {
					var d, e;
					for (d = 0; d < arguments.length; d++) {
						var f = k(arguments[d]);
						for (e = 0; e < f.length; e++) this[this.length] = f[e], this.length++
					}
					return this
				}
			}, k.fn = l.prototype, k.unique = function(d) {
				for (var e = [], f = 0; f < d.length; f++) - 1 === e.indexOf(d[f]) && e.push(d[f]);
				return e
			}, k
		}(),
		p = ["jQuery", "Zepto", "Dom7"],
		y = 0;
	for (; y < p.length; y++) window[p[y]] && function(l) {
		l.fn.swiper = function(k) {
			var d;
			return l(this).each(function() {
				var e = new w(this, k);
				d || (d = e)
			}), d
		}
	}(window[p[y]]);
	(p = void 0 === z ? window.Dom7 || window.Zepto || window.jQuery : z) && ("transitionEnd" in p.fn || (p.fn.transitionEnd = function(l) {
		function k(g) {
			if (g.target === this)
				for (l.call(this, g), d = 0; d < e.length; d++) f.off(e[d], k)
		}
		var d, e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
			f = this;
		if (l)
			for (d = 0; d < e.length; d++) f.on(e[d], k);
		return this
	}), "transform" in p.fn || (p.fn.transform = function(l) {
		for (var k = 0; k < this.length; k++) {
			var d = this[k].style;
			d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = l
		}
		return this
	}), "transition" in p.fn || (p.fn.transition = function(l) {
		"string" != typeof l && (l += "ms");
		for (var k = 0; k < this.length; k++) {
			var d = this[k].style;
			d.webkitTransitionDuration = d.MsTransitionDuration = d.msTransitionDuration = d.MozTransitionDuration = d.OTransitionDuration = d.transitionDuration = l
		}
		return this
	}), "outerWidth" in p.fn || (p.fn.outerWidth = function(l) {
		return 0 < this.length ? l ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
	}));
	window.Swiper = w
}();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
	return window.Swiper
});