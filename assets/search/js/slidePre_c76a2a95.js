(function(b) {
	function e(c) {
		this.config = b.extend({}, h, c);
		this.init()
	}
	if (!window.SlidePre) {
		var h = {
			carrier: ".J-slidePre-carrier",
			wrapper: ".J-slidePre-wrapper",
			templateId: "J-slideShow",
			autoplay: 5E3,
			speed: 300,
			spaceBetween: 100,
			loop: !0,
			autoplayDisableOnInteraction: !1,
			onInit: function() {}
		};
		e.prototype = {
			init: function() {
				this.$carrier = b(this.config.carrier);
				this.initEvents()
			},
			getProdInfoAsync: function(c) {
				var a = this;
				b.ajax({
					type: "post",
					url: "/product/slideShow",
					dataType: "json",
					cache: !1,
					data: {
						slideType: 1,
						slideProdIds: c
					},
					success: function(b) {
						0 == b.status && a.renderHTML(b.data)
					},
					error: function() {}
				})
			},
			renderHTML: function(c) {
				var a = this,
					d = [],
					f = [],
					g = [];
				b(".J-ContactUs-url").each(function(a, c) {
					d.push(b(c).val())
				});
				b(".J-CustomizedRequest-url").each(function(a, c) {
					f.push(b(c).val())
				});
				b(".J-RequestSample-url").each(function(a, c) {
					g.push(b(c).val())
				});
				document.getElementById(this.config.templateId) && (this.template = document.getElementById(this.config.templateId).innerHTML, c = template(this.template, {
					dataList: c,
					contactUrl: d,
					customUrl: f,
					requestUrl: g
				}), a.$wrapper = b(a.config.wrapper), b(".J-slidePre-loading").hide(), a.$wrapper.find(".J-slidePre-content").append(c), b("body, html").css({
					overflow: "hidden"
				}), a.config.autoplay ? b(".J-slidePre-autoplay i").removeClass("icon-play").addClass("icon-pause") : b(".J-slidePre-autoplay i").removeClass("icon-pause").addClass("icon-play"), c = a.$wrapper.find(".swiper-slide").size(), a.mySwiper = new Swiper(".J-slidePre-container", {
					speed: a.config.speed,
					spaceBetween: a.config.spaceBetween,
					autoplay: a.config.autoplay,
					loop: 1 < c ? a.config.loop : !1,
					autoplayDisableOnInteraction: a.config.autoplayDisableOnInteraction,
					onInit: a.config.onInit
				}), a.$wrapper.on("click", ".J-slidePre-prev", function() {
					a.mySwiper.slidePrev()
				}), a.$wrapper.on("click", ".J-slidePre-next", function() {
					a.mySwiper.slideNext()
				}), a.$wrapper.on("click", ".J-slidePre-autoplay", function() {
					a.mySwiper.autoplaying ? (a.mySwiper.stopAutoplay(), b(this).find("i").removeClass("icon-pause").addClass("icon-play")) : (a.mySwiper.startAutoplay(), b(this).find("i").removeClass("icon-play").addClass("icon-pause"))
				}), a.$wrapper.on("click", ".J-slidePre-close", function() {
					a.mySwiper.destroy(!0, !0);
					a.$wrapper.unbind("click");
					a.$wrapper.find(".J-slidePre-content").empty();
					a.$wrapper.hide();
					b("body, html").css({
						overflow: "auto"
					})
				}))
			},
			initEvents: function() {
				var c = this;
				this.$carrier.on("click", function(a) {
					a.preventDefault();
					b(c.config.wrapper).show();
					b(".J-slidePre-loading").show();
					var d = [];
					b(".J-prod-result-item").each(function(a, c) {
						d.push(b(this).attr("data-ProdId"))
					});
					0 != d.length && c.getProdInfoAsync(d.join(","))
				})
			}
		};
		window.SlidePre = e
	}
})(jQuery);