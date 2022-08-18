$(function() {
	function e() {
		var a = $(".catlist-tabs").width(),
			b = 0,
			f = 0,
			d = $(".J-tabs .J-tab");
		d.each(function() {
			b += $(this).width()
		});
		a <= b ? ($(".J-more").show(), $(".J-show-more").empty(), d.each(function(b, c) {
			f += $(c).removeClass("hide").width();
			f > a - 85 ? ($(".J-show-more").append(d.eq(b).clone().removeClass("hide")), d.eq(b).addClass("hide")) : d.eq(b).removeClass("hide")
		})) : ($(".J-more").hide(), d.removeClass("hide"))
	}
	var c = "ontouchend" in window ? "touchend" : "click",
		g = $(".J-spy-content").offset().top;
	e();
	$(window).resize(function(a, b) {
		var c;
		return function(d) {
			clearTimeout(c);
			c = setTimeout(function() {
				a(d)
			}, b)
		}
	}(e, 200));
	$("body").scrollspy({
		target: "#J-nav",
		offset: g
	});
	$("#J-nav").on("activate.bs.scrollspy", function(a) {
		a = $(a.target);
		if (a.hasClass("hide")) return !1;
		0 < a.closest(".J-more").length ? $(".J-more").addClass("active") : $(".J-more").removeClass("active")
	});
	$(".J-tabs").on(c, ".J-tab", function() {
		$(this).addClass("active").siblings("li").removeClass("active")
	});
	$(document).on(c, ".J-more", function(a) {
		$(a.currentTarget).toggleClass("show")
	});
	$(".J-tab").on(c, ".J-tab-anchor", function() {
		var a = $(this).data("target");
		a = $(a).offset().top;
		var b = $("#J-nav").height();
		$(window).scrollTop(a - b)
	});
	$("img.lazyload").lazyload({
		threshold: 300
	});
	$(".J-catlist-nav").affix({
		offset: {
			top: function() {
				return $(".J-catlist-wrap").offset().top
			}
		}
	});
	$(document).on(c, function(a) {
		if (0 < $(a.target).closest(".J-more").length) return !1;
		$(".J-more").removeClass("show")
	})
});