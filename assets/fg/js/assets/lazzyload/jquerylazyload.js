(function(b, f, k, g) {
	var e = b(f);
	b.fn.lazyload = function(a) {
		function c() {
			var a = 0;
			h.each(function() {
				var c = b(this);
				if (!(d.skip_invisible && !c.is(":visible") || b.abovethetop(this, d) || b.leftofbegin(this, d)))
					if (!b.belowthefold(this, d) && !b.rightoffold(this, d)) c.trigger("appear"), a = 0;
					else if (++a > d.failure_limit) return !1
			})
		}
		var h = this,
			d = {
				ignoreRight: !1,
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: f,
				data_attribute: "original",
				skip_invisible: !0,
				appear: null,
				load: null
			};
		a && (g !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), g !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), b.extend(d, a));
		a = d.container === g || d.container === f ? e : b(d.container);
		0 === d.event.indexOf("scroll") && a.bind(d.event, function(b) {
			return c()
		});
		this.each(function() {
			var a = this,
				c = b(a);
			a.loaded = !1;
			c.one("appear", function() {
				this.loaded || (d.appear && d.appear.call(a, h.length, d), b("\x3cimg /\x3e").bind("load", function() {
					c.hide().attr("src", c.data(d.data_attribute))[d.effect](d.effect_speed);
					a.loaded = !0;
					var e = b.grep(h, function(a) {
						return !a.loaded
					});
					h = b(e);
					d.load && d.load.call(a, h.length, d)
				}).attr("src", c.data(d.data_attribute)))
			});
			0 !== d.event.indexOf("scroll") && c.bind(d.event, function(b) {
				a.loaded || c.trigger("appear")
			})
		});
		e.bind("resize", function(a) {
			c()
		});
		/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(a) {
			a.originalEvent && a.originalEvent.persisted && h.each(function() {
				b(this).trigger("appear")
			})
		});
		b(k).ready(function() {
			c()
		});
		return this
	};
	b.belowthefold = function(a, c) {
		return (c.container === g || c.container === f ? e.height() + e.scrollTop() : b(c.container).offset().top + b(c.container).height()) <= b(a).offset().top - c.threshold
	};
	b.rightoffold = function(a, c) {
		return c.ignoreRight ? !1 : (c.container === g || c.container === f ? e.width() + e.scrollLeft() : b(c.container).offset().left + b(c.container).width()) <= b(a).offset().left - c.threshold
	};
	b.abovethetop = function(a, c) {
		return (c.container === g || c.container === f ? e.scrollTop() : b(c.container).offset().top) >= b(a).offset().top + c.threshold + b(a).height()
	};
	b.leftofbegin = function(a, c) {
		return (c.container === g || c.container === f ? e.scrollLeft() : b(c.container).offset().left) >= b(a).offset().left + c.threshold + b(a).width()
	};
	b.inviewport = function(a, c) {
		return !b.rightoffold(a, c) && !b.leftofbegin(a, c) && !b.belowthefold(a, c) && !b.abovethetop(a, c)
	};
	b.extend(b.expr[":"], {
		"below-the-fold": function(a) {
			return b.belowthefold(a, {
				threshold: 0
			})
		},
		"above-the-top": function(a) {
			return !b.belowthefold(a, {
				threshold: 0
			})
		},
		"right-of-screen": function(a) {
			return b.rightoffold(a, {
				threshold: 0
			})
		},
		"left-of-screen": function(a) {
			return !b.rightoffold(a, {
				threshold: 0
			})
		},
		"in-viewport": function(a) {
			return b.inviewport(a, {
				threshold: 0
			})
		},
		"above-the-fold": function(a) {
			return !b.belowthefold(a, {
				threshold: 0
			})
		},
		"right-of-fold": function(a) {
			return b.rightoffold(a, {
				threshold: 0
			})
		},
		"left-of-fold": function(a) {
			return !b.rightoffold(a, {
				threshold: 0
			})
		}
	})
})(jQuery, window, document);