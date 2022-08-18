+ function(b) {
	function g(c) {
		return this.each(function() {
			var a = b(this),
				d = a.data("bs.affix"),
				f = "object" == typeof c && c;
			d || a.data("bs.affix", d = new e(this, f));
			if ("string" == typeof c) d[c]()
		})
	}
	var e = function(c, a) {
		this.options = b.extend({}, e.DEFAULTS, a);
		this.$target = b(this.options.target).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this));
		this.$element = b(c);
		this.pinnedOffset = this.unpin = this.affixed = null;
		this.checkPosition()
	};
	e.VERSION = "3.3.7";
	e.RESET = "affix affix-top affix-bottom";
	e.DEFAULTS = {
		offset: 0,
		target: window
	};
	e.prototype.getState = function(b, a, d, e) {
		var c = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != d && "top" == this.affixed) return c < d ? "top" : !1;
		if ("bottom" == this.affixed) return null != d ? c + this.unpin <= f.top ? !1 : "bottom" : c + g <= b - e ? !1 : "bottom";
		var k = null == this.affixed;
		f = k ? c : f.top;
		return null != d && c <= d ? "top" : null != e && f + (k ? g : a) >= b - e ? "bottom" : !1
	};
	e.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(e.RESET).addClass("affix");
		var b = this.$target.scrollTop();
		return this.pinnedOffset = this.$element.offset().top - b
	};
	e.prototype.checkPositionWithEventLoop = function() {
		setTimeout(b.proxy(this.checkPosition, this), 1)
	};
	e.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var c = this.$element.height(),
				a = this.options.offset,
				d = a.top,
				f = a.bottom,
				g = Math.max(b(document).height(), b(document.body).height());
			"object" != typeof a && (f = d = a);
			"function" == typeof d && (d = a.top(this.$element));
			"function" == typeof f && (f = a.bottom(this.$element));
			a = this.getState(g, c, d, f);
			if (this.affixed != a) {
				null != this.unpin && this.$element.css("top", "");
				d = "affix" + (a ? "-" + a : "");
				var h = b.Event(d + ".bs.affix");
				this.$element.trigger(h);
				if (h.isDefaultPrevented()) return;
				this.affixed = a;
				this.unpin = "bottom" == a ? this.getPinnedOffset() : null;
				this.$element.removeClass(e.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == a && this.$element.offset({
				top: g - c - f
			})
		}
	};
	var l = b.fn.affix;
	b.fn.affix = g;
	b.fn.affix.Constructor = e;
	b.fn.afafix.noConflict = function() {
		b.fn.affix = l;
		return this
	};
	b(window).on("load", function() {
		b('[data-spy\x3d"affix"]').each(function() {
			var c = b(this),
				a = c.data();
			a.offset = a.offset || {};
			null != a.offsetBottom && (a.offset.bottom = a.offsetBottom);
			null != a.offsetTop && (a.offset.top = a.offsetTop);
			g.call(c, a)
		})
	})
}(jQuery);