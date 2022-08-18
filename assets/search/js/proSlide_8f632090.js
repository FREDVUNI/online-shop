(function(b) {
	function d(a) {
		this.config = b.extend({}, e, a);
		this.init()
	}
	if (!window.ProSlide) {
		var e = {
			wrapper: ".J-proSlide-wrapper",
			container: ".J-proSlide-container",
			slideCls: ".J-proSlide-slide",
			paginationCls: ".J-proSlide-pagination",
			paginationDotCls: ".swiper-pagination-bullet",
			leftCls: ".J-proSlide-left",
			rightCls: ".J-proSlide-right",
			autoplay: 5E3,
			speed: 300,
			spaceBetween: 0,
			loop: !0,
			autoplayDisableOnInteraction: !1,
			slidesPerView: 1,
			slidesPerGroup: 1,
			lazyLoading: !1,
			initialSlide: 0,
			onInit: function() {},
			bindEvent: {},
			onSlideChangeStart: function() {}
		};
		d.prototype = {
			init: function() {
				this.$wrapper = b(this.config.wrapper);
				this.$container = b(this.config.container);
				var a = this,
					c = this.$wrapper.find(this.config.slideCls).length;
				this.mySwiper = new Swiper(this.$container, b.extend({
					loop: a.config.loop && c > a.config.slidesPerView,
					pagination: c > a.config.slidesPerView ? this.config.paginationCls : !1,
					spaceBetween: a.config.spaceBetween,
					autoplay: a.config.autoplay,
					speed: a.config.speed,
					paginationClickable: !0,
					autoHeight: !0,
					autoResize: !0,
					resizeReInit: !0,
					roundLengths: !0,
					initialSlide: a.config.initialSlide,
					autoplayDisableOnInteraction: a.config.autoplayDisableOnInteraction,
					slidesPerView: a.config.slidesPerView,
					slidesPerGroup: a.config.slidesPerGroup,
					lazyLoading: a.config.lazyLoading,
					prevButton: this.$wrapper.find(a.config.leftCls),
					nextButton: this.$wrapper.find(a.config.rightCls),
					onInit: a.config.onInit,
					onSlideChangeStart: a.config.onSlideChangeStart
				}, a.config.bindEvent));
				this.$wrapper.on("hover", this.config.paginationDotCls, function(c) {
					a.mySwiper.stopAutoplay();
					b(c.currentTarget).click()
				}).on("mouseenter", function() {
					a.mySwiper.stopAutoplay()
				}).on("mouseleave", function() {
					a.mySwiper.startAutoplay()
				});
				this.$wrapper.on("mouseenter", function() {
					a.mySwiper.stopAutoplay();
					c > a.config.slidesPerView && a.$wrapper.addClass("sr-proSlide-left-open sr-proSlide-right-open")
				}).on("mouseleave", function() {
					a.mySwiper.startAutoplay();
					a.$wrapper.removeClass("sr-proSlide-left-open sr-proSlide-right-open")
				})
			}
		};
		window.ProSlide = d
	}
})(jQuery);