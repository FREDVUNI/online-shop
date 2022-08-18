var Lass = window.Lass || {};
void
function() {
	var d = this.util = this.util || {};
	d.type = function(d) {
		var h, f = /\{\s*\[native\s*code\]\s*\}/i;
		null === d ? h = "null" : "undefined" === typeof d ? h = "undefined" : (h = Object.prototype.toString.call(d).match(/\w+/g)[1].toLowerCase(), "object" === h && f.test(d + "") && (h = "function"));
		return h
	};
	d.trim = function(d) {
		return (d + "").replace(/^[\s\u00A0]+|[\s\u00A0]+$/g, "")
	};
	d.extend = function() {
		var l = arguments.callee,
			h, f;
		"object" !== d.type(arguments[0]) ? (h = 1, f = !!arguments[0]) : (h = 0, f = !1);
		var c = arguments[h] || {};
		h = [].slice.call(arguments, h + 1);
		for (var a, b; h.length;)
			if (a = h.shift(), "object" === d.type(a)) {
				var e, g;
				for (g in a)(e = a[g], "object" === d.type(e)) ? e == window || e == document || "childNodes" in e && "nextSibling" in e && "nodeType" in e ? !f && g in c || (c[g] = e) : e.jquery && /^[\d\.]+$/.test(e.jquery) ? c[g] = e : (b = d.type(c[g]), g in c && "undefined" !== b && "null" !== b || (c[g] = {}), "object" === d.type(c[g]) && l(f, c[g], e)) : !f && g in c || (c[g] = e)
			}
		return c
	};
	d.console = d.console || function(l) {
		var h = !0,
			f = {
				turn: function(d) {
					h = !!d
				},
				warn: function() {}
			};
		return l ? d.extend(!0, f, {
			warn: function(d) {
				h && l.warn(d)
			}
		}) : f
	}.call(window, window.console);
	d.indexOf = function(l, h, f) {
		var c = -1;
		f = ("number" === d.type(f) ? f : -1) + 1;
		for (var a = l.length; f < a; f++)
			if (l[f] === h) {
				c = f;
				break
			}
		return c
	};
	return d
}.call(Lass);
void
function() {
	var d = this.util,
		l = function() {},
		h = {
			impl: function(c, a) {
				"function" === d.type(a) && (this[c] = a)
			},
			mix: function() {
				d.extend.apply(null, [!0, this].concat([].slice.call(arguments)))
			}
		},
		f = function(c, a) {
			a = a || "impl super mix __getDefaultConfig __proto__ toString valueOf".split(" ");
			var g = d.extend(!0, {}, c);
			try {
				for (var b = 0; b < a.length; b++) delete g[a[b]]
			} catch (k) {}
			return g
		},
		c = function(a, c) {
			var g = {},
				b = f(a),
				e;
			for (e in b) e in c && "function" === d.type(c[e]) && (g[e] = c[e]);
			return g
		},
		a = function() {
			for (var a, b, q,
					m = [], k = 0; 3 > k; k++) m.push(d.type(arguments[k]));
			k = d.indexOf(m, "function");
			q = -1 === k ? l : arguments[k];
			for (k = -1; - 1 !== (k = d.indexOf(m, "object", k)) && (a || arguments[k].constructor !== e ? b || (b = arguments[k]) : a = arguments[k], !a || !b););
			a || (a = {});
			b || (b = {});
			var t = b.config || {},
				r = [],
				p = b.inherit || l;
			b = b.mix || [{}];
			m = d.type(b);
			"object" === m ? b = [b] : "array" !== m && (b = [{}]);
			for (k = 0; k < b.length; k++) "object" === d.type(b[k]) && r.push(b[k]);
			b = null;
			var n = function() {
				var b = c(p.prototype, this);
				this["super"] = d.extend(!0, {}, p.prototype, b);
				p.apply(this["super"], [].slice.call(arguments));
				b = f(this["super"]);
				d.extend(!0, this, b, {
					__getDefaultConfig: function() {
						return t
					}
				});
				this.mix.apply(this, r);
				for (var e in a) "function" === d.type(this[e]) && this[e].__IS_ABSTRACT_METHOD__ && (this[e] = function(b) {
					var d = function() {
						a[b]()
					};
					d.__IS_ABSTRACT_METHOD__ = a[b].__IS_ABSTRACT_METHOD__;
					var c = this;
					d.impl = d.implement = function(a) {
						c.impl(b, a)
					};
					return d
				}.call(this, e));
				this.constructor = arguments.callee;
				b = q.apply(this, [].slice.call(arguments));
				for (e in a)
					if ("function" === d.type(this[e]) && this[e].__IS_ABSTRACT_METHOD__) a[e]();
				if ("object" === typeof b && null !== b) return b
			};
			n.prototype = d.extend(!0, {}, h, a);
			n.extend = function(a) {
				var b = d.extend.apply(null, [!0, {}].concat([].slice.call(arguments)));
				d.extend.call(null, !0, n.prototype, b)
			};
			return n
		},
		b = this.Empty = new a,
		e = new a({
			inherit: b
		}, function(a, b) {
			var c;
			for (c in a) {
				var e = d.type(a[c]);
				"function" === e ? (this[c] = function(a, b) {
					return function() {
						b && d.console.warn(a + " method is not implement.")
					}
				}.call(this, c, b), this[c].__IS_ABSTRACT_METHOD__ = !0) : this[c] = "object" === e ? d.extend(!0, {}, a[c]) : a[c]
			}
		});
	a = {
		Clazz: a,
		Abstract: e
	};
	d.extend(!0, this, a);
	d.extend(!0, window, a)
}.call(Lass);
void
function() {
	var d = this.util,
		l = function(c, a, b) {
			this.handle = c;
			this.once = !!a;
			this.data = b || {}
		},
		h = function(c, a) {
			this.type = c;
			this.data = a
		},
		f = function() {
			this._ || (this._ = {});
			this._.events = {}
		};
	f.prototype = {
		__initEvent: function(c) {
			this._.events[c] || (this._.events[c] = []);
			return this._.events[c]
		},
		__eventParams: function(c, a) {
			var b = d.type(c);
			"function" === b ? a = [c] : "array" === b ? a = c : "object" !== b && (c = {});
			b = d.type(a);
			"function" === b ? a = [a] : "array" !== b && (a = []);
			return {
				data: c,
				handle: a
			}
		},
		__bindEvent: function(c, a, b, e) {
			c = d.trim(c);
			c = this.__initEvent(c);
			a = this.__eventParams(a, b);
			for (b = 0; b < a.handle.length; b++) "function" === d.type(a.handle[b]) && c.push(new l(a.handle[b], !!e, d.extend(!0, {}, a.data)))
		},
		__search: function(c, a) {
			for (var b = -1, d = 0; d < c.length; d++)
				if (c[d].handle === a) {
					b = d;
					break
				}
			return b
		},
		on: function(c, a, b) {
			this.__bindEvent(c, a, b, !1);
			return this
		},
		one: function(c, a, b) {
			this.__bindEvent(c, a, b, !0);
			return this
		},
		off: function(c, a) {
			c = d.trim(c);
			"function" === d.type(a) && (a = [a]);
			if ("array" === d.type(a))
				for (var b = this.__initEvent(c),
						e, g = 0; g < a.length; g++) "function" === d.type(a[g]) && (e = this.__search(b, a[g]), -1 !== e && b.splice(e, 1));
			else this._.events[c] = [];
			return this
		},
		fire: function(c, a) {
			c = d.trim(c);
			a = "object" === d.type(a) && a || {};
			for (var b = this.__initEvent(c), e = [], g, f = 0; f < b.length; f++) g = b[f], g.handle.call(this, new h(c, d.extend(!0, {}, g.data, a))), g.once && e.push(g.handle);
			this.off(c, e);
			return this
		}
	};
	this.Events = f
}.call(Lass);
void
function() {
	var d = this.util,
		l = this.Events,
		h = new this.Clazz({
			mix: {
				_: {},
				elems: {},
				config: {},
				setConfig: function(f) {
					return this.config = d.extend(!0, {}, this.__getDefaultConfig(), this.config, f)
				}
			},
			inherit: this.Empty
		});
	h.extend(new l);
	window.Component = this.Component = h
}.call(Lass);