(function(k) {
	function x(a) {
		a.innerHTML = ""
	}

	function l(a) {
		a.innerHTML = "" === this.elems.carrier.value ? this._.placeholder : ""
	}

	function f(a, e) {
		return a.currentStyle ? a.currentStyle[e] : k.getComputedStyle(a, null)[e]
	}

	function u(a, e, b) {
		"undefined" === typeof b && (b = !0);
		for (var c in e)
			if ("Object" === Object.prototype.toString.call(e[c])) arguments.callee(a, e[c]);
			else if (!a[c] || b) a[c] = e[c];
		return a
	}
	var y = new Abstract({
			setPlaceholder: function() {},
			show: function() {},
			hide: function() {},
			initPage: function() {},
			onchange: function() {}
		}),
		h = new Clazz(y, {
			config: {
				carrier: null,
				control: {
					unifieddisplay: !1,
					emMethod: "focus"
				},
				style: {
					color: "#BBB",
					fontFamily: ""
				}
			},
			inherit: Component
		}, function(a) {
			this.setConfig(a);
			this._.support = "placeholder" in document.createElement("input");
			this._.placeholder = null;
			this.setPlaceholder.implement(this._setPlaceholder);
			this.show.implement(this._show);
			this.hide.implement(this._hide);
			this.onchange.implement(this._onchange);
			return this.initialize()
		});
	h.extend({
		initialize: function() {
			var a, e, b = this.config;
			if (!b.carrier) throw Error("Placeholder not support with carrier null!");
			if ("[object Array]" === Object.prototype.toString.call(b.carrier)) {
				var c = [];
				var d = 0;
				for (e = b.carrier.length; d < e; d++)(a = b.carrier[d]) && 1 === a.nodeType && c.push(new h(u({
					carrier: a
				}, b, !1)));
				return c
			}
			if (!b.carrier.placeholder && !b.carrier.getAttributeNode("placeholder").nodeValue) throw Error("Element not has placeholder!");
			b = this.config;
			this.elems.carrier = b.carrier;
			this._.placeholder = b.carrier.placeholder || b.carrier.getAttributeNode("placeholder").nodeValue;
			this._.name = b.carrier.name || "";
			b.control.unifieddisplay && (b.carrier.removeAttribute("placeholder"), this._.support = !1);
			if (!this._.support) {
				b.carrier.id || (b.carrier.id = "p_" + (new Date).getTime());
				this._.id = b.carrier.id;
				e = this.elems;
				a = b.carrier;
				var q = document.createElement("label");
				q.htmlFor = this._.id;
				var r = f(a, "padding");
				var t = f(a, "margin");
				var k = f(a, "fontSize");
				var g = f(a, "paddingLeft");
				var v = f(a, "borderTopWidth");
				var w = f(a, "borderLeftWidth");
				var m = f(a, "marginTop");
				t || (t = getComputedStyle(a, null).marginTop + " 0");
				r || (r = f(a, "paddingTop") + " " + f(a, "paddingRight") + " " + f(a, "paddingBottom") + " " + f(a, "paddingLeft"));
				0 !== parseInt(v, 10) && (m = parseInt("auto" === m ? 1 : m, 10) + parseInt(v, 10) + "px");
				0 !== parseInt(w, 10) && (g = "auto" === g ? 0 : g, g = parseInt(w, 10) + parseInt(g, 10) + "px");
				if (this.config.style)
					for (d in c = "", this.config.style) c += d + ":" + this.config.style[d] + ";";
				q.style.cssText = "position:absolute; cursor:text; padding:" + r + "; padding-left:" + g + "; margin:" + t + "; margin-top:" + m + "; font-size:" + k + ";" + c;
				e.label = q;
				"" === b.carrier.value && (this.elems.label.innerHTML = this._.placeholder);
				b.carrier.parentNode.insertBefore(this.elems.label, b.carrier);
				var n = this,
					p = this.elems.label;
				c = this.elems.carrier;
				c.onblur = function() {
					l.call(n, p)
				};
				"input" === this.config.control.emMethod ? (c.onpropertychange = function() {
					l.call(n, p)
				}, c.oninput = function() {
					l.call(n, p)
				}) : c.onfocus = function() {
					x.call(n, p)
				}
			}
		},
		_setPlaceholder: function(a) {
			var e = a !== this._.placeholder;
			this._.placeholder = a;
			this.config.control.unifieddisplay || this.elems.carrier.setAttribute("placeholder", a);
			!this._.support && "" === this.elems.carrier.value && (this.elems.label.innerHTML = a);
			e && this.fire("change")
		},
		_show: function() {
			this.elems.label && (this.elems.label.style.display = "", l.call(this, this.elems.label));
			this.elems.carrier.style.display = ""
		},
		_hide: function() {
			this.elems.label && (this.elems.label.style.display = "none");
			this.elems.carrier.style.display = "none"
		},
		_onchange: function(a) {
			if (a) this.on("change", a)
		}
	});
	h.initPage = function(a) {
		var e = [],
			b;
		if (document.querySelectorAll) {
			var c = document.querySelectorAll("input[placeholder]");
			var d = 0;
			for (b = c.length; d < b; d++) e.push(c[d]);
			c = document.querySelectorAll("textarea[placeholder]");
			d = 0;
			for (b = c.length; d < b; d++) e.push(c[d])
		} else {
			c = document.getElementsByTagName("input");
			d = 0;
			for (b = c.length; d < b; d++) c[d].placeholder && e.push(c[d]);
			c = document.getElementsByTagName("textarea");
			d = 0;
			for (b = c.length; d < b; d++) c[d].placeholder && e.push(c[d])
		}
		if (e.length) return new h(u({
			carrier: e
		}, a, !1))
	};
	k.Placeholder = h
})(window);