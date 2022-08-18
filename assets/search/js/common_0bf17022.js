/*
 jQuery Validation Plugin - v1.10.0 - 9/7/2012
 https://github.com/jzaefferer/jquery-validation
 Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
var ATF;
void
function() {
	var b = location.hostname;
	if (!/^[\d\.]+$/.test(b)) {
		var a = /[\w\-]+\.[\w\-]+$/.exec(b)[0];
		b = function(a) {
			var b = new Image;
			b.onload = function() {
				a(!0)
			};
			b.onerror = function() {
				a(!1)
			};
			b.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vz0AAA\x3d"
		};
		var c = function(b) {
			document.cookie = "webp\x3d" + (b || "t") + "; path\x3d/; domain\x3d." + a + "; expires\x3d" + (new Date("2099-12-31")).toUTCString()
		};
		(function() {
			var a = !1,
				b = document.createElement("canvas");
			b.toDataURL && (a = /^data:image\/webp/.test(b.toDataURL("image/webp")));
			return a
		})() ? c("t"): b(function(a) {
			a ? c("t") : c("f")
		})
	}
}.call(this);
var Lass = window.Lass || {};
void
function() {
	var b = this.util = this.util || {};
	b.type = function(a) {
		var b, e = /\{\s*\[native\s*code\]\s*\}/i;
		null === a ? b = "null" : "undefined" === typeof a ? b = "undefined" : (b = Object.prototype.toString.call(a).match(/\w+/g)[1].toLowerCase(), "object" === b && e.test(a + "") && (b = "function"));
		return b
	};
	b.trim = function(a) {
		return (a + "").replace(/^[\s\u00A0]+|[\s\u00A0]+$/g, "")
	};
	b.extend = function() {
		var a = arguments.callee,
			c, e;
		"object" !== b.type(arguments[0]) ? (c = 1, e = !!arguments[0]) : (c = 0, e = !1);
		var k = arguments[c] || {};
		c = [].slice.call(arguments, c + 1);
		for (var d, l; c.length;)
			if (d = c.shift(), "object" === b.type(d)) {
				var h, f;
				for (f in d)(h = d[f], "object" === b.type(h)) ? h == window || h == document || "childNodes" in h && "nextSibling" in h && "nodeType" in h ? !e && f in k || (k[f] = h) : h.jquery && /^[\d\.]+$/.test(h.jquery) ? k[f] = h : (l = b.type(k[f]), f in k && "undefined" !== l && "null" !== l || (k[f] = {}), "object" === b.type(k[f]) && a(e, k[f], h)) : !e && f in k || (k[f] = h)
			}
		return k
	};
	b.console = b.console || function(a) {
		var c = !0,
			e = {
				turn: function(a) {
					c = !!a
				},
				warn: function() {}
			};
		return a ? b.extend(!0, e, {
			warn: function(b) {
				c && a.warn(b)
			}
		}) : e
	}.call(window, window.console);
	b.indexOf = function(a, c, e) {
		var k = -1;
		e = ("number" === b.type(e) ? e : -1) + 1;
		for (var d = a.length; e < d; e++)
			if (a[e] === c) {
				k = e;
				break
			}
		return k
	};
	return b
}.call(Lass);
void
function() {
	var b = this.util,
		a = function() {},
		c = {
			impl: function(a, c) {
				"function" === b.type(c) && (this[a] = c)
			},
			mix: function() {
				b.extend.apply(null, [!0, this].concat([].slice.call(arguments)))
			}
		},
		e = function(a, c) {
			c = c || "impl super mix __getDefaultConfig __proto__ toString valueOf".split(" ");
			var f = b.extend(!0, {}, a);
			try {
				for (var d = 0; d < c.length; d++) delete f[c[d]]
			} catch (u) {}
			return f
		},
		k = function(a, c) {
			var f = {},
				d = e(a),
				g;
			for (g in d) g in c && "function" === b.type(c[g]) && (f[g] = c[g]);
			return f
		},
		d = function() {
			for (var f, d, n,
					m = [], l = 0; 3 > l; l++) m.push(b.type(arguments[l]));
			l = b.indexOf(m, "function");
			n = -1 === l ? a : arguments[l];
			for (l = -1; - 1 !== (l = b.indexOf(m, "object", l)) && (f || arguments[l].constructor !== h ? d || (d = arguments[l]) : f = arguments[l], !f || !d););
			f || (f = {});
			d || (d = {});
			var r = d.config || {},
				p = [],
				q = d.inherit || a;
			d = d.mix || [{}];
			m = b.type(d);
			"object" === m ? d = [d] : "array" !== m && (d = [{}]);
			for (l = 0; l < d.length; l++) "object" === b.type(d[l]) && p.push(d[l]);
			d = null;
			var y = function() {
				var a = k(q.prototype, this);
				this["super"] = b.extend(!0, {}, q.prototype, a);
				q.apply(this["super"], [].slice.call(arguments));
				a = e(this["super"]);
				b.extend(!0, this, a, {
					__getDefaultConfig: function() {
						return r
					}
				});
				this.mix.apply(this, p);
				for (var c in f) "function" === b.type(this[c]) && this[c].__IS_ABSTRACT_METHOD__ && (this[c] = function(a) {
					var b = function() {
						f[a]()
					};
					b.__IS_ABSTRACT_METHOD__ = f[a].__IS_ABSTRACT_METHOD__;
					var c = this;
					b.impl = b.implement = function(b) {
						c.impl(a, b)
					};
					return b
				}.call(this, c));
				this.constructor = arguments.callee;
				a = n.apply(this, [].slice.call(arguments));
				for (c in f)
					if ("function" === b.type(this[c]) && this[c].__IS_ABSTRACT_METHOD__) f[c]();
				if ("object" === typeof a && null !== a) return a
			};
			y.prototype = b.extend(!0, {}, c, f);
			y.extend = function(a) {
				var c = b.extend.apply(null, [!0, {}].concat([].slice.call(arguments)));
				b.extend.call(null, !0, y.prototype, c)
			};
			return y
		},
		l = this.Empty = new d,
		h = new d({
			inherit: l
		}, function(a, c) {
			var f;
			for (f in a) {
				var d = b.type(a[f]);
				"function" === d ? (this[f] = function(a, c) {
					return function() {
						c && b.console.warn(a + " method is not implement.")
					}
				}.call(this, f, c), this[f].__IS_ABSTRACT_METHOD__ = !0) : this[f] = "object" === d ? b.extend(!0, {}, a[f]) : a[f]
			}
		});
	d = {
		Clazz: d,
		Abstract: h
	};
	b.extend(!0, this, d);
	b.extend(!0, window, d)
}.call(Lass);
void
function() {
	var b = this.util,
		a = function(a, b, c) {
			this.handle = a;
			this.once = !!b;
			this.data = c || {}
		},
		c = function(a, b) {
			this.type = a;
			this.data = b
		},
		e = function() {
			this._ || (this._ = {});
			this._.events = {}
		};
	e.prototype = {
		__initEvent: function(a) {
			this._.events[a] || (this._.events[a] = []);
			return this._.events[a]
		},
		__eventParams: function(a, c) {
			var d = b.type(a);
			"function" === d ? c = [a] : "array" === d ? c = a : "object" !== d && (a = {});
			d = b.type(c);
			"function" === d ? c = [c] : "array" !== d && (c = []);
			return {
				data: a,
				handle: c
			}
		},
		__bindEvent: function(c, d, e, h) {
			c = b.trim(c);
			c = this.__initEvent(c);
			d = this.__eventParams(d, e);
			for (e = 0; e < d.handle.length; e++) "function" === b.type(d.handle[e]) && c.push(new a(d.handle[e], !!h, b.extend(!0, {}, d.data)))
		},
		__search: function(a, b) {
			for (var c = -1, d = 0; d < a.length; d++)
				if (a[d].handle === b) {
					c = d;
					break
				}
			return c
		},
		on: function(a, b, c) {
			this.__bindEvent(a, b, c, !1);
			return this
		},
		one: function(a, b, c) {
			this.__bindEvent(a, b, c, !0);
			return this
		},
		off: function(a, c) {
			a = b.trim(a);
			"function" === b.type(c) && (c = [c]);
			if ("array" === b.type(c))
				for (var d = this.__initEvent(a),
						e, f = 0; f < c.length; f++) "function" === b.type(c[f]) && (e = this.__search(d, c[f]), -1 !== e && d.splice(e, 1));
			else this._.events[a] = [];
			return this
		},
		fire: function(a, d) {
			a = b.trim(a);
			d = "object" === b.type(d) && d || {};
			for (var e = this.__initEvent(a), h = [], f, g = 0; g < e.length; g++) f = e[g], f.handle.call(this, new c(a, b.extend(!0, {}, f.data, d))), f.once && h.push(f.handle);
			this.off(a, h);
			return this
		}
	};
	this.Events = e
}.call(Lass);
void
function() {
	var b = this.util,
		a = this.Events,
		c = new this.Clazz({
			mix: {
				_: {},
				elems: {},
				config: {},
				setConfig: function(a) {
					return this.config = b.extend(!0, {}, this.__getDefaultConfig(), this.config, a)
				}
			},
			inherit: this.Empty
		});
	c.extend(new a);
	window.Component = this.Component = c
}.call(Lass);
var util = function(b) {
		var a = {},
			c = function() {},
			e = Object.prototype.toString;
		a.type = function(a) {
			var b = /\{\s*\[native\s*code\]\s*\}/i;
			if (null === a) var c = "null";
			else "undefined" === typeof a ? c = "undefined" : (c = Object.prototype.toString.call(a).match(/\w+/g)[1].toLowerCase(), "object" === c && b.test(a + "") && (c = "function"));
			return c
		};
		a.trim = function(a) {
			return (a + "").replace(/^[\s\u00A0]+|[\s\u00A0]+$/g, "")
		};
		a.JSON = function(b) {
			var c = {};
			c.stringify = b ? b.stringify : function() {
				return ""
			};
			c.parse = function(b) {
				if ("string" === a.type(b)) try {
					var c = (new Function("return " + b))()
				} catch (w) {
					c = {}
				} else c = b;
				return c
			};
			return c
		}.call(this, window.JSON);
		a.extend = function() {
			var b = arguments.callee;
			if ("object" !== a.type(arguments[0])) {
				var c = 1;
				var f = !!arguments[0]
			} else c = 0, f = !1;
			var d = arguments[c] || {};
			c = [].slice.call(arguments, c + 1);
			for (var m, g; c.length;)
				if (m = c.shift(), "object" === a.type(m)) {
					var n;
					for (n in m) {
						var e = m[n];
						"object" === a.type(e) ? e == window || e == document || "childNodes" in e && "nextSibling" in e && "nodeType" in e ? !f && n in d || (d[n] = e) : (g = a.type(d[n]), n in d && "undefined" !== g && "null" !== g || (d[n] = {}), "object" === a.type(d[n]) && b(f, d[n], e)) : !f && n in d || (d[n] = e)
					}
				}
			return d
		};
		var k = Object.prototype.hasOwnProperty,
			d = Array.prototype.indexOf,
			l = Array.prototype.some,
			h = Array.prototype.filter,
			f = Array.prototype.map,
			g = {},
			n = a.each = function(b, c, f) {
				if (null != b)
					if ([].forEach && b.forEach === [].forEach) b.forEach(c, f);
					else if (b.length === +b.length)
					for (var d = 0, m = b.length; d < m && c.call(f, b[d], d, b) !== g; d++);
				else
					for (d in b)
						if (a.has(b, d) && c.call(f, b[d], d, b) === g) break
			};
		a.has = function(a, b) {
			return k.call(a, b)
		};
		a.identity = function(a) {
			return a
		};
		var m = a.some = a.any = function(b, c, f) {
			c || (c = a.identity);
			var d = !1;
			if (null == b) return d;
			if (l && b.some === l) return b.some(c, f);
			n(b, function(a, b, m) {
				if (d || (d = c.call(f, a, b, m))) return g
			});
			return !!d
		};
		a.find = a.detect = function(a, b, c) {
			var f;
			m(a, function(a, d, m) {
				if (b.call(c, a, d, m)) return f = a, !0
			});
			return f
		};
		a.contains = a.include = function(a, b) {
			return null == a ? !1 : d && a.indexOf === d ? -1 != a.indexOf(b) : m(a, function(a) {
				return a === b
			})
		};
		a.filter = a.select = function(a, b, c) {
			var f = [];
			if (null == a) return f;
			if (h && a.filter === h) return a.filter(b, c);
			n(a, function(a, d, m) {
				b.call(c, a, d, m) && (f[f.length] = a)
			});
			return f
		};
		a.map = a.collect = function(a, b, c) {
			var d = [];
			if (null == a) return d;
			if (f && a.map === f) return a.map(b, c);
			n(a, function(a, f, m) {
				d[d.length] = b.call(c, a, f, m)
			});
			return d
		};
		a.invert = function(b) {
			var c = {},
				f;
			for (f in b) a.has(b, f) && (c[b[f]] = f);
			return c
		};
		a.keys = Object.keys || function(b) {
			if (b !== Object(b)) throw new TypeError("Invalid object");
			var c = [],
				f;
			for (f in b) a.has(b, f) && (c[c.length] = f);
			return c
		};
		a.values = function(b) {
			var c = [],
				f;
			for (f in b) a.has(b, f) && c.push(b[f]);
			return c
		};
		var u = {
			escape: {
				"\x26": "\x26amp;",
				"\x3c": "\x26lt;",
				"\x3e": "\x26gt;",
				'"': "\x26quot;",
				"'": "\x26#x27;",
				"/": "\x26#x2F;"
			}
		};
		u.unescape = a.invert(u.escape);
		var r = {
			escape: new RegExp("[" + a.keys(u.escape).join("") + "]", "g"),
			unescape: new RegExp("(" + a.keys(u.unescape).join("|") + ")", "g")
		};
		a.each(["escape", "unescape"], function(b) {
			a[b] = function(a) {
				return null == a ? "" : ("" + a).replace(r[b], function(a) {
					return u[b][a]
				})
			}
		});
		a.indexOf = function(a, b) {
			if (a.indexOf) return a.indexOf(b);
			for (var c = -1, f = 0, d = a.length; f < d; f++)
				if (a[f] === b) {
					c = f;
					break
				}
			return c
		};
		a.unique = function(b) {
			for (var c = [], f = 0, d = b.length; f < d; f++) - 1 === a.indexOf(c, b[f]) && c.push(b[f]);
			return c
		};
		a.random = function() {
			var b = {};
			return function(c, f, d) {
				c = c || 0;
				f = "number" !== a.type(f) || isNaN(f) ? c + 10 : f === c ? f + 10 : f;
				var m = c + "_" + f;
				b[m] || (b[m] = []);
				b[m].length === f - c && (b[m] = [], "function" === a.type(d) && d.call(this));
				for (;;)
					if (d = c + ~~(Math.random() * (f - c)), -1 === a.indexOf(b[m], d)) {
						b[m].push(d);
						break
					}
				return d
			}
		}.call(this);
		a.format = function() {
			var a = function(a) {
					var b = Math.floor(a / 86400),
						c = Math.floor((a - 86400 * b) / 3600),
						f = Math.floor((a - 86400 * b - 3600 * c) / 60);
					return {
						days: b,
						hours: c,
						minutes: f,
						seconds: Math.floor((a - 86400 * b - 3600 * c - 60 * f) / 1)
					}
				},
				b = function(a) {
					return 10 > a ? "0" + a : a + ""
				};
			return function(c, f) {
				f = f || "HH:mm:ss";
				var d = a(c),
					m = {
						HH: b(d.hours),
						mm: b(d.minutes),
						ss: b(d.seconds)
					};
				return f.replace(/\w+/g, function(a) {
					return m[a]
				})
			}
		}.call(this);
		a.formatDate = function() {
			var a = function(a, b) {
				b = b || 2;
				var c = "00000" + a;
				return c.substr(c.length - b, b)
			};
			return function(b, c) {
				var f = new Date(b);
				c = c || "yyyy-MM-dd HH:mm:ss";
				var d = f.getFullYear(),
					m = f.getMonth() + 1,
					g = f.getDate(),
					n = f.getHours(),
					e = f.getMinutes(),
					y = f.getSeconds(),
					l = f.getMilliseconds();
				f.getDay();
				var h = {
					yy: d.toString().match(/\d{2}$/)[0],
					yyyy: a(d, 4),
					M: m,
					MM: a(m),
					d: g,
					dd: a(g),
					H: n,
					HH: a(n),
					m: e,
					mm: a(e),
					s: y,
					ss: a(y),
					ms: l
				};
				return c.replace(/(\w+)/g, function(a, b) {
					return h[b] || b || ""
				})
			}
		}.call(this);
		a.formatNumber = function(a) {
			return (a + "").replace(/(?=(?:\B\d{3})+)(?:\.\d+|$)/g, ",")
		};
		a.flash = function(a, b) {
			var c = {
					enabled: !1,
					version: 0
				},
				f = /\d+/g;
			try {
				c = {
					enabled: !0,
					version: (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(f).join(".")
				}
			} catch (w) {
				b && b["Shockwave Flash"] && b["Shockwave Flash"].description && (!a.mimeTypes || !a.mimeTypes["application/x-shockwave-flash"] || a.mimeTypes["application/x-shockwave-flash"].enabledPlugin) && (c = {
					enabled: !0,
					version: /\d+\.\d+/.exec(b["Shockwave Flash"].description)[0]
				})
			}
			return c
		}.call(this, window.navigator, window.navigator.plugins);
		a.console = function(b) {
			var c = !1,
				f = function() {},
				d = {
					ON: !0,
					OFF: !1
				};
			f = {
				SWITCH: d,
				turn: function(a) {
					c = d[a ? "ON" : "OFF"]
				},
				log: f,
				info: f,
				warn: f,
				error: f,
				debug: f
			};
			if (!b) return f;
			b.debug || (b.debug = b.log);
			b.error || (b.error = b.warn);
			return a.extend(!0, f, {
				log: function(a) {
					c === d.ON && b.log(a)
				},
				info: function(a) {
					c === d.ON && b.info(a)
				},
				warn: function(a) {
					c === d.ON && b.warn(a)
				},
				error: function(a) {
					c === d.ON && b.error(a)
				},
				debug: function(a) {
					c === d.ON && b.debug(a)
				}
			})
		}.call(window, window.console);
		a.preload = function() {
			var a = document.createElement("div");
			a.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;";
			var b = !1,
				c = function() {};
			return function(f, d) {
				!b && document.body.appendChild(a);
				b = !0;
				d = "function" === typeof d ? d : c;
				var m = document.createElement("img"),
					g = function() {
						try {
							m.onload = m.onerror = c, a.removeChild(m)
						} catch (D) {}
					},
					n = function() {
						setTimeout(function() {
							d.call(m, m);
							g()
						}, 0)
					};
				m.onload = n;
				m.onerror = g;
				m.src = f;
				a.appendChild(m);
				m.complete && n()
			}
		}.call(this);
		a.scrollTo = function(a, c, f) {
			c = c || 0;
			a = a || 0;
			f ? b("html,body").animate({
				scrollTop: c,
				scrollLeft: a
			}, 404) : window.scroll(a, c)
		};
		a.rect = function(a) {
			a = b(a)[0];
			var c = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0,
				f = window.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
			a = a.getBoundingClientRect();
			b.browser.msie && 7 >= b.browser.version && (a = {
				top: a.top - 2,
				left: a.left - 2
			});
			return {
				top: c + a.top,
				left: f + a.left
			}
		};
		a.domain = {
			main: "",
			toMain: function() {
				return ""
			},
			isCross: function() {
				return !0
			}
		};
		var p = /[\w\-\_]+\.[\w\-\_]+$/.exec(window.location.hostname || "");
		p && (p = p[0], a.domain = {
			main: p,
			toMain: function() {
				return document.domain = p
			},
			isCross: function() {
				return document.domain !== window.location.hostname
			}
		});
		a.copy = function(a) {
			var c = arguments.callee,
				f = e.call(a).match(/\w+/g)[1].toLowerCase();
			if ("object" === f) var d = b.extend(!0, {}, a);
			else "array" === f && (d = [], b(a).each(function(a, b) {
				d.push(c(b))
			}));
			return d
		};
		a.url = function(a, c) {
			var f = /\?(.+?)(#.*)?$/,
				d = f,
				m = {};
			(f = f.exec(a)) ? f[1].replace(/(\w+)\=(\w*)/g, function(a, b, c) {
				m[b] = c
			}): d = /(\b|\B)(#.*)?$/;
			f = b.extend(!0, {}, m, c);
			var g = [],
				n;
			for (n in f) g.push(n + "\x3d" + f[n]);
			return a.replace(d, "?" + g.join("\x26") + "$2")
		};
		a.cookie = function(a, c) {
			var f = {},
				d = function(a) {
					return (a = (new RegExp("(?:^|;\\s*)" + a + "\\\x3d([^;]*)")).exec(c.cookie)) ? a[1] : a
				},
				m = function(a, b, c, f, d) {
					a = [a, "\x3d", b + ""];
					c && a.push("; ", "domain\x3d", c.toString());
					f && a.push("; ", "path\x3d", f.toString());
					d && "number" === typeof d && !isNaN(d) && (d = (new Date).valueOf() + d, d = new Date(d));
					d && d.valueOf && d.toUTCString && a.push("; ", "expires\x3d", d.toUTCString());
					return document.cookie = a.join("")
				},
				g = function(a) {
					"string" === typeof a && (a = a.split(/[\s\,\;]+/));
					if (a.length)
						for (var b = 0; b < a.length; b++) m(a[b], null, null, null, -1)
				},
				n = function(a, c, g) {
					if (a) return void 0 !== c ? (g = b.extend(!0, {}, f, g), m(a, c, g.domain, g.path, g.expires)) : d(a)
				};
			n.get = d;
			n.set = m;
			n.del = g;
			n.delAll = function() {
				var a = c.cookie,
					b = /([^;=\s]*)\=/g,
					f = [];
				b.exec("");
				for (var d; d = b.exec(a);) f.push(d[1]);
				g(f)
			};
			return n
		}(window, document);
		a.winSize = function() {
			var a = window,
				b = document,
				c = b.documentElement;
			b = b.body;
			return {
				width: a.innerWidth || c.clientWidth || b.clientWidth || 0,
				height: a.innerHeight || c.clientHeight || b.clientHeight || 0
			}
		};
		a.tpl = function(a, b) {
			b = b || /\<\!--\s*#+\s*([\w\.]+)\s*#+\s*--\>([\w\W]*?)\<\!--\s*#+\s*end\s*#+\s*--\>/gi;
			a = a.toString() || "";
			b.exec("");
			for (var c = {}, f; f = b.exec(a);)
				for (var d = f[1].split("."), m = c; d.length;) {
					var g = d.shift();
					g in m || (m[g] = {});
					d.length || (m[g] = f[2].replace(/^[\s\u00A0]+|[\s\u00A0]+$/g, ""));
					m = m[g]
				}
			return c
		};
		a.templatify = function() {
			var b = function() {
					return ""
				},
				c = Object.prototype.toString;
			return function(f) {
				var d = b;
				if ("string" === typeof f) d = template(f);
				else if ("[object Object]" === c.call(f)) {
					d = {};
					for (var m in f) d[m] = a.templatify(f[m])
				}
				return d
			}
		}.call(this);
		a.zoom = function(c, f) {
			var d = {
				maxWidth: 280,
				maxHeight: 280,
				minWidth: 1,
				minHeight: 1,
				mode: a.zoom.MODE.MAX
			};
			d = b.extend(!0, d, f);
			var m = c.width / c.height,
				g = {};
			d.mode === a.zoom.MODE.MAX ? c.width > d.maxWidth || c.height > d.maxHeight ? m >= d.maxWidth / d.maxHeight ? (g.width = d.maxWidth, g.height = g.width / m) : (g.height = d.maxHeight, g.width = g.height * m) : g = b.extend(!0, g, c) : d.mode === a.zoom.MODE.MIN && (c.width < d.minWidth || c.height < d.minHeight ? m >= d.minWidth / d.minHeight ? (g.height = d.minHeight, g.width = g.height * m) : (g.width = d.minWidth, g.height = g.width / m) : g = b.extend(!0, g, c));
			return g
		};
		a.zoom.MODE = {
			MAX: "max",
			MIN: "min"
		};
		a.BCenter = function(c, f, d) {
			if (c) {
				var m = {
					mode: a.BCenter.MODE.PADDING,
					height: 340,
					width: 340,
					limitMode: a.zoom.MODE.MAX
				};
				m = b.extend(!0, m, f);
				d = d || {
					width: c.clientWidth,
					height: c.clientHeight
				};
				f = a.zoom(d, {
					maxWidth: m.width,
					maxHeight: m.height,
					minWidth: m.width,
					minHeight: m.height,
					mode: m.limitMode
				});
				d = (m.height - f.height) / 2;
				var g = (m.width - f.width) / 2;
				f[(m.mode + "Top").replace(/\w/, function(a) {
					return a.toLowerCase()
				})] = d;
				f[(m.mode + "Left").replace(/\w/, function(a) {
					return a.toLowerCase()
				})] = g;
				f[(m.mode + "Right").replace(/\w/, function(a) {
					return a.toLowerCase()
				})] = g;
				f[(m.mode + "Bottom").replace(/\w/, function(a) {
					return a.toLowerCase()
				})] = d;
				b(c).css(f)
			}
		};
		a.BCenter.MODE = {
			PADDING: "padding",
			MARGIN: "margin",
			POSITION: ""
		};
		a.Adapter = function(b, c) {
			this._ = {};
			this.config = a.extend(!0, {}, b);
			this._.deep = !!c;
			this.init()
		};
		a.Adapter.prototype = {
			init: function() {
				this._.dic = this.config;
				this._.rdic = {};
				for (var a in this.config) this._.rdic[this.config[a]] = a
			},
			__parse: function(b, c, f) {
				switch (a.type(b)) {
					case "object":
						var d = {};
						for (var m in b) d[m in c ? c[m] : m] = f && /object|array/.test(a.type(b[m])) ? this.__parse(b[m], c, f) : b[m];
						break;
					case "array":
						d = [];
						for (m = 0; m < b.length; m++) d.push(this.__parse(b[m], c, f));
						break;
					default:
						d = c[b] || b
				}
				return d
			},
			parse: function(a, b, c) {
				return this.__parse(a, b || this.config, c || this._.deep)
			},
			reverse: function(a, b, c) {
				this.init();
				return this.__parse(a, b || this._.rdic, c || this._.deep)
			},
			filter: function(b, c, f) {
				c = "," + c.split(/[,;_@ ]+/).join(",") + ",";
				switch (a.type(b)) {
					case "object":
						var d = {};
						for (var m in b) - 1 !== c.indexOf("," + m + ",") && (d[m] = f && /object|array/.test(a.type(b[m])) ? this.filter(b[m], c, f) : b[m]);
						break;
					case "array":
						d = [];
						for (m = 0; m < b.length; m++) d.push(this.filter(b[m], c, f));
						break;
					default:
						-1 !== c.indexOf("," + b + ",") && (d = b)
				}
				return d
			}
		};
		var q = {
			sep: "",
			isJoin: !0,
			filter: function(a) {
				return a.filter(function() {
					return !this.disabled
				})
			},
			special: {
				names: [],
				values: {}
			}
		};
		a.Serialize = function(b) {
			this._ = {};
			this.config = a.extend(!0, {}, q, b);
			this.init()
		};
		a.Serialize.prototype = {
			init: function() {},
			parse: function(a, c) {
				var f = this,
					d = b(a);
				c = c || this.config.filter;
				d = d.find("input[name],textarea[name],select[name]");
				d = c(d);
				var m = {},
					g;
				d.each(function(a, b) {
					g = f.__getName(b.name);
					m[g] || (m[g] = []);
					m[g].push(b)
				});
				var n = {};
				b.each(m, function(a, b) {
					n[a] = f.__getValue(a, b)
				});
				return n
			},
			__getName: function(b) {
				for (var c = this.config.special.names, f = b, d, m = 0; m < c.length; m++)
					if (d = a.type(c[m].rule), "regexp" === d) {
						if (c[m].rule.exec(""), d = c[m].rule.exec(b), d = !(!d || !d.length)) {
							f = c[m].name;
							break
						}
					} else if ("function" === d && (d = !!c[m].rule(b))) {
					f = c[m].name;
					break
				}
				return f
			},
			__getValue: function(a, c) {
				if (a in this.config.special.values) var f = this.config.special.values[a](b(c), a);
				else if (f = [], b(c).each(function(a, b) {
						"input" !== b.tagName.toLowerCase() || "checkbox" !== b.type && "radio" !== b.type ? f.push(b.value) : b.checked && f.push(b.value)
					}), 1 >= f.length || this.config.isJoin) f = f.join(this.config.sep || ",");
				return f
			}
		};
		a.path = function(a, b) {
			for (var c = document.getElementsByTagName((b || "script").toLowerCase()), f = 0; f < c.length; f++) {
				var d = c[f].src;
				if (d && 0 <= d.indexOf(a)) return d.substr(0, d.indexOf(a))
			}
			return ""
		};
		a.onCheckedChange = function(a, f, d) {
			"function" === typeof f ? (d = f, f = {
				radioChanged: "group"
			}) : f = b.extend(!0, {
				radioChanged: "group"
			}, f);
			var m = b(a),
				g = [];
			m.filter(":radio").each(function(a, c) {
				var f = c.name,
					d = b(c).closest("form")[0] || document.body;
				b.grep(g.slice(0), function(a) {
					return a.name === c.name && a.form === d
				}).length || g.push({
					name: f,
					form: d
				})
			});
			m = m.not(":radio");
			b.each(g, function(a, c) {
				c.items = b('input:radio[name\x3d"' + c.name + '"]', c.form);
				m = m.add(c.items)
			});
			m.each(function(a, m) {
				if (m && /input/i.test(m.tagName) && /checkbox|radio/.test(m.type)) {
					d = "function" === typeof d ? d : c;
					var n = b(m);
					n.bind("checkedChange", function(a, b) {
						d.call(m, b)
					});
					n.data("__checkedChangeBounded__") || (m.checkedChanged = function() {
						n.trigger("checkedChange", {
							checked: !!m.checked
						});
						"each" === f.radioChanged && "radio" === m.type && m.checked && b.each(g, function(a, c) {
							c.name === m.name && c.items.filter(function() {
								return this === m
							}).length && c.items.not(m).each(function() {
								b(this).trigger("checkedChange", {
									checked: !!this.checked
								})
							})
						})
					}, n.parent().click(function(a) {
						setTimeout(m.checkedChanged, 0)
					}), n.data("__checkedChangeBounded__", !0))
				}
			})
		};
		a.FormStatus = function(c, f) {
			this.filter = "function" === typeof f ? f : null;
			this.parser = new a.Serialize;
			this.forms = b(c || "form");
			this.originalData = this.__getData();
			this.changed = !1
		};
		a.FormStatus.prototype = {
			isChanged: function(a) {
				if (!a && this.changed) return this.changed;
				var c = this,
					f = !1,
					d = this.__getData(),
					m = this.originalData;
				if (a) return b.each(d, function(b, c) {
					c[a] !== m[b][a] && (f = !0)
				}), f;
				b.each(d, function(a, b) {
					if (!c.__equal(b, m[a])) return f = !0, !1
				});
				return this.changed = f
			},
			__equal: function(b, c) {
				var f = [],
					d = [];
				for (g in b) f.push(g);
				for (g in c) d.push(g);
				if (f.length !== d.length) return !1;
				for (var m = 0; m < d.length; m++) {
					var g = d[m];
					if (!(g in b)) return !1;
					f = b[g];
					g = c[g];
					var n = a.type(f),
						e = a.type(g);
					if (n !== e || "string" === n && f !== g || "array" === n && (f.length !== g.length || f.join("#_#") !== g.join("#_#"))) return !1
				}
				return !0
			},
			filter: function() {},
			__getData: function() {
				var a = [],
					b = this;
				this.forms.each(function() {
					a.push(b.parser.parse(this, b.filter))
				});
				return a
			}
		};
		a.FormHelper = function(a, c) {
			this._ = {};
			this._.dic = c || {};
			this._.form = b(a);
			this.__init()
		};
		a.FormHelper.prototype = {
			__init: function() {},
			__getElem: function(a, c) {
				var f = b("[name\x3d" + a + "]", c);
				f.length || (f = b("#" + a, c));
				return f
			},
			fill: function(c, f, d) {
				f = a.extend(!0, {}, this._.dic, f);
				d = d || b(this._.form);
				var m;
				for (m in c) {
					var g = m;
					g in f && (g = f[g]);
					var n = c[m];
					g = this.__getElem(g, d);
					g.length && /input/i.test(g[0].tagName) && /checkbox|radio/i.test(g[0].type) && (n = "array" === a.type(n) ? n.join("$$$$$$$$$$$").split("$$$$$$$$$$$") : (n + "").split(/[\s,]+/));
					g.val(n)
				}
			},
			reset: function(a) {
				b(a || this._.form).each(function(a, b) {
					b.reset()
				})
			}
		};
		window.jQuery && (jQuery.fn.appear = function(a) {
			b(this).each(function(c, f) {
				var d = b(f);
				clearTimeout(d.data("disappearTimer"));
				d.show().stop(!1, !0).animate({
					opacity: 1
				}, 300, function() {
					d.data("disappearTimer", setTimeout(function() {
						d.disappear()
					}, a || 5E3))
				})
			})
		}, jQuery.fn.disappear = function() {
			b(this).each(function(a, c) {
				var f = b(c);
				f.stop(!1, !0).animate({
					opacity: 1
				}, 300, function() {
					f.hide()
				})
			})
		});
		window.jQuery && (a.stopScrollPage = function() {
			var a = b.browser.mozilla && !(!window.ActiveXObject && /function[\s\S]+?\[native\s+code\]/.test(window.ActiveXObject + "")),
				c = function(b) {
					b.preventDefault();
					b = b.originalEvent[a ? "detail" : "wheelDelta"];
					a || (b = -b);
					this.scrollTop += 0 < b ? 56 : -56
				};
			return function(f) {
				var d = a ? "DOMMouseScroll" : "mousewheel";
				b(f).bind(d, c)
			}
		}.call(this));
		return a
	}.call(this, window.jQuery),
	observe = function() {
		var b = [].slice;
		try {
			Object.defineProperty({}, "t", {
				value: 1,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
			var a = function(a, b, c) {
				Object.defineProperty(a, b, {
					value: c,
					writable: !1,
					enumerable: !1,
					configurable: !1
				})
			}
		} catch (e) {
			a = function(a, b, c) {
				a[b] = c
			}
		}
		var c = function(a, b) {
			a.replace(/([^\s\,]+)/g, b)
		};
		return function(e) {
			e = e || {};
			if (e.__IS_OBSERVABLE__) return e;
			a(e, "__IS_OBSERVABLE__", !0);
			var k = {},
				d = function(a) {
					c(a, function(a) {
						delete k[a]
					})
				},
				l = function(b, d, n) {
					"function" === typeof d && (a(d, "__IS_ONCE_EVENT__", !!n), c(b, function(a) {
						(k[a] = k[a] || []).push(d)
					}))
				},
				h = function(a, b) {
					for (var c = 0; c < a.length; c++) {
						var f = a[c];
						f.apply(this, b);
						f.__IS_ONCE_EVENT__ && a.splice(c--, 1)
					}
				};
			a(e, "on", function(a, b) {
				l(a, b);
				return this
			});
			a(e, "one", function(a, b) {
				l(a, b, !0);
				return this
			});
			a(e, "off", function(a, b) {
				"string" === typeof a ? "function" === typeof b ? c(a, function(a) {
					a = k[a] = k[a] || [];
					for (var c = 0; c < a.length; c++) a[c] === b && a.splice(c--, 1)
				}) : d(a) : k = {};
				return this
			});
			a(e, "fire", function(a) {
				var f = this,
					d = b.call(arguments, 1);
				if ("string" === typeof a) c(a, function(a) {
					a = k[a] = k[a] || [];
					h.call(f, a, d)
				});
				else
					for (var m in k) k.hasOwnProperty(m) && h.call(f, k[m], d);
				return this
			});
			return e
		}
	}.call(this);
void
function() {
	var b = window.location;
	if (!/^192\.168\.\d+\.\d+$/.test(b.hostname)) {
		var a = /(?:^|\.)(?:(?:made-in-china|vemic|micstatic|e-cigaretteschina|crov)\.com|bmic\.org\.cn)$/i;
		var c = /^[\w\-]+\.[\w\-]+$/,
			e = window.self !== window.top,
			k = document.referrer;
		if (k) {
			var d = k.match(/^\w+:\/\/([^\/]*)/)[1];
			d = d.replace(/\:\d+$/, "")
		}
		if (e && d && !a.test(d)) {
			c = window.top;
			a = b.href;
			try {
				c.location.replace ? c.location.replace(a) : c.location.href = a
			} catch (l) {
				c.top.location = a
			}
		} else a.test(b.hostname) || (a = b.href.replace(b.hostname.match(/[\w\-]+\.[\w\-]+$/)[0], (c.test(b.hostname) ? "www." : "") + "made-in-china.com"), b.replace ? b.replace(a) : b.href = a)
	}
}.call(this);
void
function() {
	var b = location.hostname;
	if (!/^[\d\.]+$/.test(b)) {
		var a = /[\w\-]+\.[\w\-]+$/.exec(b)[0];
		b = function(a) {
			var b = new Image;
			b.onload = function() {
				a(!0)
			};
			b.onerror = function() {
				a(!1)
			};
			b.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vz0AAA\x3d"
		};
		var c = function(b) {
			document.cookie = "webp\x3d" + (b || "t") + "; path\x3d/; domain\x3d." + a + "; expires\x3d" + (new Date("2099-12-31")).toUTCString()
		};
		(function() {
			var a = !1,
				b = document.createElement("canvas");
			b.toDataURL && (a = /^data:image\/webp/.test(b.toDataURL("image/webp")));
			return a
		})() ? c("t"): b(function(a) {
			a ? c("t") : c("f")
		})
	}
}.call(this);
if ("undefined" === typeof ATF) {
	var events = "selectstart contextmenu dragstart mousedown copy cut",
		shield = function(b) {
			"img" === b.target.tagName.toLowerCase() && b.preventDefault()
		};
	ATF = function(b) {
		var a = function(a) {
			b(a).unbind(events, shield).bind(events, shield)
		};
		a(".J-ATF");
		b(function() {
			a(".J-ATF")
		});
		return a
	}.call(this, this.jQuery)
}
void
function() {
	var b = 1;
	window.devicePixelRatio && (b = window.devicePixelRatio);
	var a = new Date;
	a.setFullYear(a.getFullYear + 1);
	try {
		document.cookie = ["dpr\x3d", b, "; domain\x3d.", document.domain.match(/[\w\-]+\.[\w\-]+$/)[0], "; path\x3d/; expires\x3d", a.toUTCString()].join("")
	} catch (c) {}
}.call(this);
var _templateResolve = function() {
	var b = /(.)^/,
		a = {
			"\x26": "\x26amp;",
			"\x3c": "\x26lt;",
			"\x3e": "\x26gt;",
			'"': "\x26quot;",
			"'": "\x26#x27;",
			"/": "\x26#x2F;"
		},
		c = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\t": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		e = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	window.__htmlEscape = function(b) {
		return null == b ? "" : ("" + b).replace(RegExp("[\x26\x3c\x3e\"/']", "g"), function(b) {
			return a[b]
		})
	};
	return function(a, d, l) {
		if (a) {
			l = {
				evaluate: /{{([\s\S]+?)}}/g,
				interpolate: /{{=([\s\S]+?)}}/g,
				escape: /{{-([\s\S]+?)}}/g
			};
			var h = new RegExp([(l.escape || b).source, (l.interpolate || b).source, (l.evaluate || b).source].join("|") + "|$", "g"),
				f = 0,
				g = "__p+\x3d'";
			a.replace(h, function(b, d, n, l, h) {
				g += a.slice(f, h).replace(e, function(a) {
					return "\\" + c[a]
				});
				d && (g += "'+\n((__t\x3d(" + d + "))\x3d\x3dnull?'':__htmlEscape(__t))+\n'");
				n && (g += "'+\n((__t\x3d(" + n + "))\x3d\x3dnull?'':__t)+\n'");
				l && (g += "';\n" + l + "\n__p+\x3d'");
				f = h + b.length;
				return b
			});
			g += "';\n";
			l.variable || (g = "with(obj||{}){\n" + g + "}\n");
			g = "var __t,__p\x3d'',__j\x3dArray.prototype.join,print\x3dfunction(){__p+\x3d__j.call(arguments,'');};\n" + g + "return __p;\n";
			try {
				var n = new Function(l.variable || "obj", g)
			} catch (m) {
				throw m.source = g, m;
			}
			if (d) return n(d);
			d = function(a) {
				return n.call(this, a)
			};
			d.source = "function(" + (l.variable || "obj") + "){\n" + g + "}";
			return d
		}
	}
}();
void
function(b, a) {
	var c = function() {
		return !!a(".J-top-loginInfo").length
	};
	if (!b.topLoginInfo && c()) {
		var e = a(".J-header-signInfo-2");
		if (e.length) {
			var k = a(".J-userFeature").clone();
			e.replaceWith(k);
			a(".J-search-remove", k).remove()
		}
		var d = a(".J-search-bar-wrap"),
			l = a(".J-top-logged-2"),
			h = a(".J-header-inquiry-2"),
			f = function(a, b, c) {
				b = b || 0;
				c = c || 0;
				0 === (a ? b + c : c) ? (l.addClass("middel-title"), h.addClass("middel-title")) : (l.removeClass("middel-title"), h.removeClass("middel-title"));
				0 === b ? l.addClass("zero-num") : l.removeClass("zero-num");
				0 === c ? h.addClass("zero-num") : h.removeClass("zero-num");
				a ? d.addClass("user-signed") : d.removeClass("user-signed")
			},
			g = function(b) {
				if (c()) {
					b = a.extend({}, {
						messages: [],
						rfqContents: [],
						noticeContents: [],
						newMailNum: 0,
						rfqNum: 0,
						userType: "",
						isForeign: !0
					}, b);
					a(".J-top-basketNum").html(b.inquiryBasketNum || 0);
					var d = b.canManageInquiry ? parseInt(b.newMailNum + b.rfqNum) || 0 : b.newMailNum || 0;
					f(b.login, d, b.inquiryBasketNum);
					if (b.login) {
						a(".J-top-unlogin").hide();
						a(".J-top-logged").show();
						var m = a(".J-top-username");
						!m.is(".J-top-named") && b.name && m.text(b.name || "");
						m = a(".J-userFeature");
						if (("2" == b.userType || "3" == b.userType) && a("#J-top-inquiry-tmpl").length) {
							var g = _templateResolve(a("#J-top-inquiry-tmpl").html()),
								n = _templateResolve(a("#J-top-rfq-tmpl").html()),
								e = _templateResolve(a("#J-top-notice-tmpl").html()),
								l = a(".J-top-notice", m);
							a(".J-num", l).html(b.unReadNoticeNum || 0);
							b.unReadNoticeNum && (d += b.unReadNoticeNum || 0);
							a(".J-top-inquiry-block", m).html(g(b));
							a(".J-top-rfq-block", m).html(n(b));
							a(".J-top-notice-block", m).html(e(b));
							g = b;
							(g.newMailNum || g.rfqNum || g.unReadNoticeNum) && !g.newMailNum || a(".J-top-tab").eq(0).trigger("click");
							!g.newMailNum && g.rfqNum && a(".J-top-tab").eq(1).trigger("click");
							g.newMailNum || g.rfqNum || !g.unReadNoticeNum || a(".J-top-tab").eq(2).trigger("click")
						}
						a(".J-messageTotal").html(d);
						"1" == b.userType ? (a(".J-buyer", m).show(), a(".J-supplier", m).hide()) : "2" == b.userType ? (a(".J-supplier", m).show(), a(".J-buyer", m).hide()) : "3" === b.userType && (a(".J-supplier", m).show(), a(".J-buyer", m).hide(), a(".J-top-editor", m).hide(), a(".J-top-visit", m).hide(), a(".J-top-visit", m).prev(".m-header-option-item.J-supplier").hide());
						d = a(".J-top-inquiry", m);
						a(".J-num", d).html(b.newMailNum);
						0 < b.newMailNum && (d = a(".J-top-inquiry a", m), d.attr("href", d.attr("data-unRead")));
						d = a(".J-top-rfq", m);
						a(".J-num", d).html(b.rfqNum || 0);
						"1" == b.userType && b.rfqNum && 0 < b.rfqNum && (g = a(".J-buyer.J-top-rfq a", m), g.attr("href", g.attr("data-unRead")));
						b.canManageInquiry || d.hide();
						d = a(".J-top-editor", m);
						g = a(".J-top-visit", m);
						"2" == b.userType && b.canManageInfo || (d.hide(), g.hide(), a(".J-top-visit", m).prev(".m-header-option-item.J-supplier").hide());
						m = a(".J-focusChinaLink");
						("2" === b.userType || "3" === b.userType || "" === b.userType && !b.isForeign) && m.attr("href", "//www.focuschina.com/");
						b = b.login || b.name ? "1" === b.userType ? "//www.made-in-china.com/special/forbuyerapp/" : "http://service.made-in-china.com/bulletin/function/4992.htm" : b.isForeign ? "//www.made-in-china.com/special/forbuyerapp/" : "http://service.made-in-china.com/bulletin/function/4992.htm";
						a(".J-header-app-link").attr("href", b)
					} else a(".J-top-unlogin").show(), a(".J-top-logged").hide()
				}
			},
			n = null,
			m = function(b, f) {
				if (c()) {
					var d = {},
						m = a(".J-top-loginInfo").attr("data-useless");
					m && (d.useless = m);
					a(".J-top-head-type").length && "vo" === a(".J-top-head-type").val() && (d.envo = !0);
					m = encodeURIComponent(window.location.href);
					a(".J-jumpNext").length ? a(".J-top-signIn").attr("href", a(".J-top-signIn").attr("href") + "?jumpNext\x3d1\x26baseNextPage\x3d" + m) : a(".J-top-signIn").attr("href", a(".J-top-signIn").attr("href") + "?baseNextPage\x3d" + m);
					a(".J-top-signOut").attr("href", a(".J-top-signOut").attr("href") + "\x26baseNextPage\x3d" + m);
					a.extend(!0, d, b);
					n && n.abort();
					n = a.ajax({
						url: "//www.made-in-china.com/head.do?xcase\x3dgetHead\x26callback\x3d?",
						dataType: "jsonp",
						data: d,
						timeout: 1E5,
						success: function(a) {
							g(a);
							n = null;
							"function" === typeof f && f(a)
						},
						error: function() {
							n = null
						}
					})
				}
			},
			u = null;
		e = function(b, d) {
			if (c()) {
				var m = {};
				a.extend(!0, m, b);
				u && u.abort();
				u = a.ajax({
					url: "//www.made-in-china.com/head.do?xcase\x3dgetBasketNum\x26callback\x3d?",
					dataType: "jsonp",
					data: m,
					timeout: 1E5,
					success: function(b) {
						c() && (a(".J-top-basketNum").html(b.basketNum || 0), f(!1, 0, b.basketNum), u = null, "function" === typeof d && d(b))
					},
					error: function() {
						u = null
					}
				})
			}
		};
		a(".J-top-tab").each(function(b, c) {
			a(this).click(function() {
				a(".J-top-tab").removeClass("selected");
				a(this).addClass("selected");
				a(".J-top-block").hide();
				a(".J-top-block").eq(b).show()
			})
		});
		"__IS_USER_LOGED__" in b && !b.__IS_USER_LOGED__ ? e() : m();
		b.topLoginInfo = {
			update: g,
			request: m,
			getStatus: function(a) {
				m(null, a)
			}
		}
	}
}.call(this, this, this.jQuery || this.Zepto);
(function(b) {
	function a() {
		var a = "";
		"/report-cart/" === b("#top .site-nav .inquiry a").eq(0).attr("href") && (a = "\x26sc\x3d1");
		a = "//www.made-in-china.com/ajaxfunction.do?xcase\x3dajaxlogonconnection" + a + "\x26t\x3d" + (new Date).getTime() + "\x26callback\x3d?";
		b.ajax({
			url: a,
			type: "get",
			dataType: "jsonp",
			cache: !1,
			success: function(a) {
				if (a && a.length) {
					var c = encodeURIComponent(window.location.href),
						d = b("#top .user-nav").eq(0),
						e = b("#top .site-nav .inquiry a strong")[0],
						h = a[3] || 0,
						f = '\x3cli class\x3d"first menu-item"\x3eWelcome \x3ca href\x3d"' + (a[4] ? "//purchase.made-in-china.com/" : "//membercenter.made-in-china.com") + '"\x3e\x3cstrong\x3e' + (a[1] || "") + "\x3c/strong\x3e\x3c/a\x3e!";
					h = '\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"' + h + ' New Message(s)" title\x3d"' + h + ' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e' + h + "\x3c/a\x3e\x3c/li\x3e";
					var g = "1" == b("#sendInquiryBuyerStatus").val() ? '\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout"\x3eSign Out\x3c/a\x3e\x3c/li\x3e' : '\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d' + c + '"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';
					e && b(e).html(a[2] || 0);
					d.length && (a && !a[0] ? (a = '\x3cli class\x3d"first menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"//membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"signin menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/sign-in/?baseNextPage\x3d' + c + '"\x3eSign In\x3c/a\x3e\x3c/li\x3e', d.empty(), d.html(a)) : (d.empty(), d.html(f + h + g)))
				}
			},
			error: {}
		})
	}
	window.topLoginInfo ? window.logonRefresh = window.topLoginInfo.request : (a(), window.logonRefresh = a)
})(this.jQuery || this.Zepto);
window.$ && $(function() {
	var b = [],
		a;
	b.push($("#multi-lang"));
	b.push($("#quick-nav"));
	b.push($("#dev_hotword"));
	b.push($("#buyer-guide"));
	b.push($("#supplier-guide"));
	for (var c = 0; c < b.length; c++)(a = b[c]) && a.length && function(a) {
		a.find(".dropmenu-hd").bind("mouseover", function() {
			a.addClass("hover");
			a.find(".icon").html("\x26#xf0d8;")
		});
		a.bind("mouseleave", function() {
			a.removeClass("hover");
			a.find(".icon").html("\x26#xf0d7;")
		})
	}(a);
	0 !== $("#buyerappend").length && $("#buyer-guide").bind("mouseover", function() {
		window.initAsyncBuyer || ($("#buyerappend").after('\x3ca href\x3d"//purchase.made-in-china.com/trade-service/quotation-request.html" rel\x3d"nofollow"\x3ePost Sourcing Request\x3c/a\x3e\x3ca href\x3d"//resources.made-in-china.com/industry-analysis-reports/" rel\x3d"nofollow"\x3eIndustry Analysis\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/tradeservice/private-sourcing-meetings.html" rel\x3d"nofollow"\x3eMeet Suppliers\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/trademessenger/" rel\x3d"nofollow"\x3eTradeMessenger\x3c/a\x3e'), window.initAsyncBuyer = !0)
	});
	0 !== $("#supplierappend").length && $("#supplier-guide").bind("mouseover", function() {
		window.initAsyncSupplier || ($("#supplierappend").append('\x3ca href\x3d"//sourcing.made-in-china.com/suppliers.html" rel\x3d"nofollow"\x3eSearch Sourcing Requests\x3c/a\x3e\x3ca href\x3d"//membercenter.made-in-china.com/product.do?xcase\x3dlist" rel\x3d"nofollow"\x3eManage Products\x3c/a\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox\x26assignFlag\x3d0" rel\x3d"nofollow"\x3eManage Messages\x3c/a\x3e\x3ca href\x3d"http://service.made-in-china.com/" rel\x3d"nofollow"\x3e\x26#x4f1a;\x26#x5458;e\x26#x5bb6;\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/audited-suppliers/for-suppliers/index-cn.html" rel\x3d"nofollow"\x3e\x26#x52a0;\x26#x5165;\x26#x8ba4;\x26#x8bc1;\x26#x4f9b;\x26#x5e94;\x26#x5546;\x3c/a\x3e'), window.initAsyncSupplier = !0)
	})
});
(function() {
	var b = "undefined" === typeof __supplierFeatureIsShowCn ? !1 : __supplierFeatureIsShowCn,
		a = "",
		c = ["For Supplier", "中国供应商"][$(".J-top-lan").length && "English" !== $(".J-top-lan").val() ? 1 : 0];
	b && (a = '\x3cli class\x3d"m-header-option J-showCn"\x3e    \x3ca rel\x3d"nofollow" href\x3d"//cn.made-in-china.com/" target\x3d"_blank"\x3e加入内贸站\x3c/a\x3e\x3c/li\x3e');
	b = "";
	window.__IS_USER_LOGED__ || (b = '\x3cli class\x3d"m-header-option-btns"\x3e\x3ca href\x3d"//login.made-in-china.com/join/?accountType\x3dsupplier" class\x3d"btn"\x3e注册供应商\x3c/a\x3e\x3ca href\x3d"//login.made-in-china.com/sign-in/?switchLan\x3d1" class\x3d"btn"\x3e登录\x3c/a\x3e\x3c/li\x3e');
	a = '\x3cdiv class\x3d"m-header-menu-item m-header-select pad-header-menu-item J-tab-trigger"\x3e    \x3cspan class\x3d"m-header-menu-title m-header-select-title"\x3e' + c + '\x3ci class\x3d"ob-icon icon-down"\x3e\x3c/i\x3e\x3c/span\x3e    \x3cul class\x3d"m-header-option-list m-header-option-list-supplier"\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"//www.made-in-china.com/supplier-membership.html" target\x3d"_blank"\x3e加入高级会员\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"//sourcing.made-in-china.com/suppliers.html" target\x3d"_blank"\x3eSearch Sourcing Requests\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"http://g.made-in-china.com/import-export-service" target\x3d"_blank"\x3eImport \x26 Export Service\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"http://service.made-in-china.com/" target\x3d"_blank"\x3e会员e家\x3c/a\x3e        \x3c/li\x3e' + a + b + "    \x3c/ul\x3e\x3c/div\x3e";
	$("#J-supplierFeature-container").replaceWith(a)
})();
$(function() {
	var b = function() {
		var a = document.createElement("div");
		return function(b, e) {
			if (b && e) {
				var c = "function" === typeof e;
				b = "length" in b && "function" !== typeof b ? b : [b];
				for (var d, l = 0; l < b.length; l++)
					if (d = b[l]) {
						var h = d;
						d = c ? e.call(d, l) : e;
						a.innerHTML = "";
						"string" === typeof d && (a.innerHTML = d);
						(d = a.firstChild.cloneNode(!1)) && 1 === d.nodeType && (h.parentNode && h.parentNode.insertBefore(d, h), d.appendChild(h))
					}
			}
		}
	}.call(this);
	document.getElementById("headRfqList") && (document.getElementById("rfqPostBox") || (b(document.getElementById("headRfqList"), "\x3cdiv class\x3d'rfq-post-box' id\x3d'rfqPostBox'\x3e\x3c/div\x3e"), document.getElementById("rfqPostBox").innerHTML = document.getElementById("rfqPostBox").innerHTML + '\x3cdiv class\x3d"rfq-post-tip" style\x3d"display:none"\x3e\x3cdiv class\x3d"rfq-post-tipcont"\x3e\x3ch3\x3eEasy Sourcing\x3c/h3\x3e\x3cp class\x3d"rfq-sub-title"\x3eMore Convenient, More Efficient\x3c/p\x3e\x3cul class\x3d"rfq-info-list"\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eOne request, multiple quotes\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eVerified suppliers matching\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eQuotes comparison and sample request\x3c/li\x3e\x3c/ul\x3e\x3cdiv\x3e\x3ca id\x3d"headRfqList-sub" href\x3d"//purchase.made-in-china.com/trade-service/quotation-request.html?source\x3d2" target\x3d"_blank" class\x3d"btn btn-main"\x3ePost Your Request NOW\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-top"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e', b = document.createElement("link"), b.type = "text/css", b.rel = "stylesheet", b.href = "//www.micstatic.com/gb/js/business/showRfqList/rfq-post-dropmenu.css?t\x3d20190626", document.getElementsByTagName("head")[0].appendChild(b)), document.getElementById("rfqPostBox").onmouseover = function() {
		$(".rfq-post-tip").show()
	}, document.getElementById("rfqPostBox").onmouseout = function() {
		$(".rfq-post-tip").hide()
	})
});
window.$ && $(function() {
	(function() {
		$("#androidapp").bind("click", function() {
			$("#appType").val("android");
			setTimeout(function() {
				$("#appbuyerform").submit()
			}, 0)
		});
		$("#iphoneapp").bind("click", function() {
			$("#appType").val("iphone");
			setTimeout(function() {
				$("#appbuyerform").submit()
			}, 0)
		})
	})()
});
(function(b) {
	var a = {
		mn: null,
		el: null,
		eopt: null,
		eotm: null,
		link: ""
	};
	a.link = encodeURIComponent(b.location.host + b.location.pathname);
	window.UELog = function(b) {
		if (!b || "[object Object]" !== Object.prototype.toString.call(b)) throw "send ue log error: log format error!";
		"undefined" !== typeof Probe && Probe().post($.extend({}, a, b))
	}
})(window);
$(function() {
	var b = $(".J-supplier a");
	0 < b.length && b.bind("click", function() {
		UELog({
			mn: "headerLink",
			el: $(this).html(),
			eopt: "click"
		})
	});
	b = $(".vo-nav-sub-item");
	0 < b.length && b.bind("click", function() {
		UELog({
			mn: "voSubNav",
			el: $(this).html(),
			eopt: "click"
		})
	})
});
(function(b, a) {
	"undefined" !== typeof module && module.exports ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : b.Placeholder = a.call(b)
})(this, function() {
	function b(a, b) {
		return a.currentStyle ? a.currentStyle[b] : c.getComputedStyle(a, null)[b]
	}

	function a(b, c, e) {
		"undefined" === typeof e && (e = !0);
		for (var f in c)
			if ("Object" === Object.prototype.toString.call(c[f])) a(b, c[f]);
			else if (!b[f] || e) b[f] = c[f];
		return b
	}
	var c = window,
		e = new Abstract({
			setPlaceholder: function() {},
			show: function() {},
			hide: function() {},
			initPage: function() {},
			onchange: function() {}
		}),
		k = new Clazz(e, {
			config: {
				carrier: null,
				control: {
					unifieddisplay: !1,
					emMethod: "focus"
				},
				style: {
					color: "#BBB"
				}
			},
			inherit: Component
		}, function(a) {
			this.setConfig(a);
			this._.support = "placeholder" in document.createElement("input");
			this._.placeholder = null;
			return this.__init()
		});
	k.initPage = function(b) {
		var c = [],
			d;
		if (document.querySelectorAll) {
			var f = document.querySelectorAll("input[placeholder]");
			var g = 0;
			for (d = f.length; g < d; g++) c.push(f[g]);
			f = document.querySelectorAll("textarea[placeholder]");
			g = 0;
			for (d = f.length; g < d; g++) c.push(f[g])
		} else {
			f = document.getElementsByTagName("input");
			g = 0;
			for (d = f.length; g < d; g++) f[g].placeholder && c.push(f[g]);
			f = document.getElementsByTagName("textarea");
			g = 0;
			for (d = f.length; g < d; g++) f[g].placeholder && c.push(f[g])
		}
		if (c.length) return new k(a({
			carrier: c
		}, b, !1))
	};
	k.extend({
		__init: function() {
			var b = this.config.carrier;
			if ("[object Array]" === Object.prototype.toString.call(b)) {
				var e = [],
					h, f;
				var g = 0;
				for (h = b.length; g < h; g++)(f = b[g]) && 1 === f.nodeType && e.push(new k(a({
					carrier: f
				}, this.config, !1)));
				return e
			}
			try {
				if (!b) throw "Placeholder init error:carrier must not be null.";
				if (!b.placeholder && !b.getAttributeNode("placeholder").nodeValue) throw "element not has placeholder attribute.";
			} catch (n) {
				n && c.console && c.console.log(n)
			}
			this._reRenderColor();
			this.elems.carrier = b;
			this._.placeholder = b.placeholder || b.getAttributeNode("placeholder").nodeValue;
			this._.name = b.name || "";
			this._.id = "p_" + (new Date).getTime();
			this.config.control.unifieddisplay && (b.removeAttribute("placeholder"), this._.support = !1);
			this._.support || (b.id ? this._.id = b.id : b.id = this._.id, this.elems.label = this._createLabel(b), "" === b.value && (this.elems.label.innerHTML = this._.placeholder), b.parentNode.insertBefore(this.elems.label, b), this.__events())
		},
		_createLabel: function(a) {
			var c = document.createElement("label"),
				d = b(a, "padding"),
				f = b(a, "margin"),
				g = b(a, "fontSize"),
				n = this.__formatNumber(b(a, "paddingLeft")),
				m = this.__formatNumber(b(a, "paddingRight")),
				e = this.__formatNumber(b(a, "borderTopWidth")),
				k = this.__formatNumber(b(a, "borderLeftWidth")),
				p = this.__formatNumber(b(a, "marginTop"));
			c.htmlFor = this._.id;
			f || (f = getComputedStyle(a, null).marginTop + " 0");
			d || (d = b(a, "paddingTop") + " " + m + "px " + b(a, "paddingBottom") + " " + n + "px");
			if (this.config.style) {
				var q = "";
				for (y in this.config.style) q += y + ":" + this.config.style[y] + ";";
				if ("input" === a.nodeName.toLowerCase()) {
					var y = b(a, "width");
					if ("auto" === y || "100%" === y) y = a.offsetWidth - n - m;
					q += "white-space:nowrap;overflow:hidden;width:" + (parseInt(y) - 2) + "px;"
				}
			}
			c.style.cssText = "position:absolute; cursor:text; padding:" + d + "; padding-left:" + (n + k) + "px; margin:" + f + "; margin-top:" + (p + e + 1) + "px; font-size:" + g + ";" + q;
			return c
		},
		__formatNumber: function(a) {
			return isNaN(parseInt(a)) ? 0 : parseInt(a, 10)
		},
		__events: function() {
			var a = this,
				b = this.elems.carrier;
			b.onblur = function() {
				a._blur()
			};
			"input" === this.config.control.emMethod ? b.onpropertychange = b.oninput = function() {
				a._blur()
			} : b.onfocus = function() {
				a._focus()
			}
		},
		_focus: function() {
			this.elems.label.innerHTML = "";
			this.elems.label.style.display = "none"
		},
		_blur: function() {
			var a = this.elems.label;
			"" === this.elems.carrier.value ? (a.innerHTML = this._.placeholder, this.elems.label.style.display = "") : a.innerHTML = ""
		},
		_reRenderColor: function() {
			if (!document.getElementById("placeholderFixed")) {
				var a = document.getElementsByTagName("head")[0];
				var b = this.config.style.color;
				var c = ":-moz-placeholder{color:" + b + "; }" + ("::-moz-placeholder{color:" + b + ";}") + ("::-webkit-input-placeholder{color:" + b + ";}") + (":-ms-input-placeholder{color:" + b + "!important;}");
				b = document.createElement("style");
				b.type = "text/css";
				b.id = "placeholderFixed";
				a.appendChild(b);
				b.styleSheet ? b.styleSheet.cssText = c : document.getBoxObjectFor ? b.innerHTML += c : b.appendChild(document.createTextNode(c))
			}
		},
		setPlaceholder: function(a) {
			var b = a !== this._.placeholder;
			this._.placeholder = a;
			this.config.control.unifieddisplay || this.elems.carrier.setAttribute("placeholder", a);
			!this._.support && "" === this.elems.carrier.value && (this.elems.label.innerHTML = a);
			b && this.fire("change")
		},
		show: function() {
			this.elems.label && (this.elems.label.style.display = "", this._blur());
			this.elems.carrier.style.display = ""
		},
		hide: function() {
			this.elems.label && (this.elems.label.style.display = "none");
			this.elems.carrier.style.display = "none"
		},
		onchange: function(a) {
			if (a) this.on("change", a)
		}
	});
	return k
});
void
function() {
	function b() {
		var b = this;
		"click" === this._.triggerEvent && (this.elems.$menu.on(this._.triggerEvent, function(a) {
			a.stopPropagation();
			b._unfold.call(b)
		}), $(document).on("click", function(a) {
			b.elems.$carrier.removeClass(b._.showPos)
		}));
		"mouseover" === this._.triggerEvent && this.elems.$carrier.hover(function() {
			b._unfold.call(b)
		}, function() {
			b.elems.$carrier.removeClass(b._.showPos)
		});
		this.elems.$list.on("mouseover", function(a) {
			b.elems.$list.find(l(b.config.style.chooseCls)).removeClass(b.config.style.chooseCls)
		});
		this.elems.$list.on("click", function(f) {
			var d = b._.selectedIndex;
			f.stopPropagation();
			"a" === f.target.nodeName.toLowerCase() && (b._.selectedIndex = c.call(b, f.target.innerText || decodeURIComponent(f.target.textContent)), a.call(b), b.elems.$carrier.removeClass(b._.showPos), d !== b._.selectedIndex && e.call(b))
		})
	}

	function a() {
		this._options() && (this.config.control.selectedHide ? (this.elems.$list.empty(), this.elems.$list[0].appendChild(k.call(this, this._.data, document.createDocumentFragment())), this._options().eq(this._.selectedIndex).remove()) : (this._.selectedOption = this._options().eq(this._.selectedIndex), this._options().removeClass(this.config.style.chooseCls), this._.selectedOption.addClass(this.config.style.chooseCls)), this.elems.$menu.find("span").html((this._.options[this._.selectedIndex] ? this._.options[this._.selectedIndex] : null) && (this._.options[this._.selectedIndex] ? this._.options[this._.selectedIndex] : null).text), this._.target.selectedIndex = this._.selectedIndex)
	}

	function c(a) {
		var b = 0,
			c;
		for (c = this._.options.length; b < c && a !== this._.options[b].text; b++);
		return b
	}

	function e() {
		if (this._.changeEvents.length)
			for (var a = 0; this._.changeEvents[a];) this._.changeEvents[a] instanceof Function && this._.changeEvents[a].call(this._.target.options[this._.target.selectedIndex]), a++
	}

	function k(a, b) {
		var c;
		var f = 0;
		for (c = a.length; f < c; f++) {
			var d = document.createElement("dd");
			if (a[f].value instanceof Array) {
				var g = document.createElement("dl");
				var e = document.createElement("dt");
				!a[f].value.length && a[f].type ? (e.className = this.config.style.tagName + "-" + a[f].type, g.appendChild(e)) : (e.innerHTML = a[f].text, g.appendChild(e), g.className = this.config.style.optgroupCls, g.appendChild(arguments.callee.call(this, a[f].value, document.createDocumentFragment())));
				d.appendChild(g)
			} else d.className = this.config.style.optCls, d.innerHTML = '\x3ca href\x3d"javascript:;"\x3e' + a[f].text + "\x3c/a\x3e";
			b.appendChild(d)
		}
		return b
	}

	function d(a, b) {
		if (!a) return null;
		var c = a.childNodes,
			f;
		for (f = 0; f < c.length; f++)
			if (c[f] && 1 === c[f].nodeType) {
				if ("optgroup" === c[f].nodeName.toLowerCase()) {
					var d = {
						text: c[f].label,
						value: arguments.callee(c[f], [])
					};
					c[f].getAttributeNode("data-type") && (d.type = c[f].getAttributeNode("data-type").nodeValue)
				} else d = {
					text: c[f].text,
					value: c[f].value
				};
				b.push(d)
			}
		return b
	}

	function l(a) {
		return "." === a.substring(0, 1) ? a : "." + a
	}
	var h = new Abstract({
		onchange: function(a) {},
		triggerChange: function() {},
		selectedIndex: function(a) {},
		options: function() {},
		optgroups: function() {},
		disabled: function(a) {},
		unfold: function() {},
		value: function() {}
	});
	h = new Clazz(h, {
		config: {
			carrier: null,
			trigger: "click",
			control: {
				dropRows: null,
				selectedHide: !1
			},
			style: {
				tagName: "choice",
				listCls: "choice-list",
				menuCls: "choice-hd",
				optCls: "choice-option",
				optgroupCls: "choice-optgroup",
				chooseCls: "selected",
				unfoldCls: "hover",
				unfoldReverseCls: "hover-reverse"
			}
		},
		inherit: Component
	}, function(c) {
		this.setConfig(c);
		a: {
			c = Error();
			var f = this.config;
			try {
				throw c.name = "selectInit", f.carrier || (c.message = "Carrier must not be null."), f.style.menuCls && f.style.listCls && f.style.optCls || (c.message = "Style structure insufficiency."), c;
			} catch (r) {
				if (window.console && r.message) {
					console.log(r.message);
					c = null;
					break a
				}
			}
			c = !0
		}
		if (c) {
			this._.selectedIndex = 0;
			this._.triggerEvent = this.config.trigger;
			this._.selectedOption = null;
			this._.optsWidth = null;
			this._.disabled = !1;
			this._.changeEvents = [];
			this._.showPos = this.config.style.unfoldCls;
			this.elems.$carrier = $(this.config.carrier);
			this.elems.$menu = this.elems.$carrier.find(l(this.config.style.menuCls));
			this.elems.$list = this.elems.$carrier.find(l(this.config.style.listCls));
			this._.target = this.elems.$carrier.find("select")[0];
			this._.data = d(this._.target, []);
			c = this._;
			f = this._.target.options;
			var n, m = [];
			var e = 0;
			for (n = f.length; e < n; e++) m.push({
				text: f[e].text,
				value: f[e].value
			});
			c.options = m;
			this._.selectedIndex = this._.target.selectedIndex;
			this.elems.$carrier.attr("data-trigger") && (this._.triggerEvent = this.elems.$carrier.attr("data-trigger"));
			this.elems.$carrier.attr("data-width") && (this._.optsWidth = this.elems.$carrier.attr("data-width"), this.elems.$list.css("width", this._.optsWidth));
			this.elems.$list.empty();
			this.elems.$list[0].appendChild(k.call(this, this._.data, document.createDocumentFragment()));
			this.config.control.selectedHide && this._options().eq(this._.selectedIndex).remove();
			a.call(this);
			this.config.control.dropRows && this._options().eq(0) && this.config.control.dropRows < this._.target.options.length + this._.target.getElementsByTagName("optgroup").length && this.elems.$list.css({
				overflow: "auto",
				height: parseInt(this._options().eq(0).outerHeight(), 10) * this.config.control.dropRows
			});
			b.call(this);
			this.onchange.implement(this._onchange);
			this.triggerChange.implement(this._triggerChange);
			this.selectedIndex.implement(this._selectedIndex);
			this.disabled.implement(this._disabled);
			this.unfold.implement(this._unfold);
			this.options.implement(this._options);
			this.optgroups.implement(this._optgroups);
			this.value.implement(this._value)
		}
	});
	h.extend({
		_onchange: function(a) {
			this._.changeEvents.push(a)
		},
		_triggerChange: function() {
			e.call(this)
		},
		_selectedIndex: function(b) {
			parseInt(b, 10) > this._.options.length || (this._.selectedIndex = b, a.call(this))
		},
		_disabled: function(a) {
			this._.disabled = a
		},
		_unfold: function() {
			if (!this._.disabled) {
				var b = $(l(this.config.style.tagName)),
					c = this.config.carrier;
				c.nodeType || (c = c[0]);
				for (var d = 0, m = b.length; d < m; d++) b[d] !== c && $(b[d]).removeClass(this.config.style.unfoldCls).removeClass(this.config.style.unfoldReverseCls);
				b = document.body.scrollTop || document.documentElement.scrollTop;
				b = parseInt(this.elems.$carrier.offset().top, 10) + parseInt(this.elems.$list.outerHeight(), 10) + parseInt(this.elems.$menu.outerHeight(), 10) > $(window).height() + b && parseInt(this.elems.$carrier.offset().top, 10) - b > parseInt(this.elems.$list.outerHeight(), 10) ? !0 : !1;
				b ? (this._.showPos = this.config.style.unfoldReverseCls, "none" !== this.elems.$list.css("display") && this.elems.$carrier.addClass(this._.showPos), this.elems.$carrier.removeClass(this.config.style.unfoldCls)) : (this._.showPos = this.config.style.unfoldCls, "none" !== this.elems.$list.css("display") && this.elems.$carrier.addClass(this._.showPos), this.elems.$carrier.removeClass(this.config.style.unfoldReverseCls));
				this.elems.$carrier.toggleClass(this._.showPos);
				a.call(this)
			}
		},
		_options: function() {
			return this.config.style.optCls ? this.elems.$list.find(l(this.config.style.optCls)) : []
		},
		_optgroups: function() {
			return this.config.style.optgroupCls ? this.elems.$list.find(l(this.config.style.optgroupCls)) : []
		},
		_value: function() {
			return this._.options[this._.selectedIndex].value
		}
	});
	this.MaskSelect = h
}.call(window);
(function(b, a) {
	"undefined" !== typeof module && module.exports ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : b.InputSuggest = a.call(b)
})(this, function() {
	function b(a) {
		if (!a._.disabled) {
			var b = this.value;
			a._.hisWord = b;
			a.config.asyncData.url && (a._.timer && clearTimeout(a._.timer), a._.timer = setTimeout(function() {
				if (!b) return a.hide(), !1;
				k.call(a, b, function(b) {
					c.call(a, b)
				})
			}, a.config.asyncData.interval));
			if (a.config.syncData.data) {
				var f = a.config.syncData.trigger;
				var g = a.config.syncData.tipFiled;
				d(a.config.syncData.data);
				f && g && b ? RegExp(f, "g").test(b) ? (f = l.call(a, e(a.config.syncData.data, b, RegExp.$1, RegExp.$2), this.value.toLowerCase()), c.call(a, f)) : a.hide() : a.hide()
			}
		}
	}

	function a(a) {
		if (!this._.selected) return null;
		var b = this._.selected.attr("template");
		if (b && this[b + "CustomAction"] && this[b + "CustomAction"] instanceof Function) this[b + "CustomAction"](this._.selected, a)
	}

	function c(a) {
		this.elems.$list.empty();
		this._.selected = null;
		this.elems.$list[0].appendChild(a);
		$.trim(this.elems.$list.html()) ? (this.elems.$list.show(), this.fire("show"), this.elems.$list.children().addClass(this._.itemMark)) : this.hide()
	}

	function e(a, b, c, f) {
		if (!c) return a;
		var d;
		b = 0;
		a = $.extend(!0, {}, a);
		for (d in a)
			for (; a[d][b];) f && a[d][b].email.slice(0, f.length) !== f ? a[d].splice(b, 1) : (a[d][b].input = c, b++);
		return a
	}

	function k(a, b) {
		if (this.config.asyncData.blankInput || a) {
			var c = this.config.asyncData.url,
				f = this;
			c && (c = -1 !== c.indexOf("?") ? c + ("\x26_" + (new Date).getTime()) : c + ("?_" + (new Date).getTime()), f._.cache[a] ? b && b.call(null, l.call(f, f._.cache[a], a)) : $.ajax({
				type: "get",
				url: c.replace("#param#", this.config.isEncodeParam ? encodeURIComponent(a) : a),
				dataType: "json",
				success: function(c) {
					d(c);
					f._.cache[a] || (f._.cache[a] = c, f._.hisWord = a);
					b && b.call(null, l.call(f, c, a))
				}
			}))
		}
	}

	function d(a) {
		if (a) {
			var b = 0;
			try {
				for (var c in a)
					if (a[c] && 0 < a[c].length)
						for (b = 0; b < a[c].length; b++) a[c][b]._index = b
			} catch (r) {
				window.console && console.log("init index error")
			}
		}
	}

	function l(a, b) {
		var c, f, d, m = document.createDocumentFragment();
		var g = "";
		var e = this.config.ignoreCase,
			n = this.config.style.highlightCls;
		for (c in a)
			if (a[c] && this.config.templates[c]) {
				var l = 0;
				for (d = a[c].length; l < d; l++) {
					a: {
						var h = a[c][l];g = this.config.templates[c];
						var k = "";
						var B = /<\$([\w\W]*?)\$>/gi,
							C = null;C = null;
						var D = void 0,
							F = g;
						for (C in h) D = h[C],
						"string" !== typeof D || -1 === D.indexOf('"') && -1 === D.indexOf("'") || (D = D.replace(/"/g, '\\"'), D = D.replace(/'/g, "'")),
						k += "var " + C + '\x3d"' + D + '";';
						for (; null !== (C = B.exec(g));) {
							h = k;
							h += C[1];
							try {
								F = F.replace(C[0], (new Function(h))() || "")
							} catch (J) {
								g = "";
								break a
							}
						}
						g = F
					}
					for (f in a[c][l]) g = g.replace(RegExp("{" + f + "}", "gi"), a[c][l][f]);n && (g = g.replace(RegExp("({.+})", "gi"), function(a) {
						a = a.substring(1, a.length - 1);
						return e ? a.replace(RegExp(b, "gi"), '\x3cspan class\x3d"' + n + '"\x3e$\x26\x3c/span\x3e') : a.replace(RegExp(b, "g"), '\x3cspan class\x3d"' + n + '"\x3e' + b + "\x3c/span\x3e")
					}));k = document.createElement("div");k.innerHTML = g;g = k.childNodes[0];g.setAttribute("template", c);m.appendChild(g)
				}
			}
		return m
	}

	function h(a) {
		var b = null,
			c = ("." === this._.itemMark.substring(0, 1) ? this._.itemMark : "." + this._.itemMark) + "[unchoose!\x3dtrue]",
			f = this.elems.$list.children(c),
			d = this._.selected;
		d && d.removeClass(this.config.style.selectedCls);
		if (27 === a) return this.hide(), null;
		38 === a && (b = d && d.prev(c).length ? d.prev(c) : d ? null : f.last());
		40 === a && (b = d && d.next(c).length ? d.next(c) : d ? null : f.first());
		b && b.addClass(this.config.style.selectedCls);
		this._.selected = b
	}

	function f(a, b) {
		return a.hasClass(b) ? a : a.parents("." === b.substring(0, 1) ? b : "." + b)
	}
	var g = new Abstract({
		disabled: function() {},
		show: function() {},
		hide: function() {},
		over: function() {},
		originalMouseMove: function() {},
		out: function() {},
		inputChange: function() {},
		loadData: function() {},
		changeAsync: function() {},
		getData: function() {},
		getLastWord: function() {}
	});
	g = new Clazz(g, {
		config: {
			carrier: null,
			targetCarrier: null,
			ignoreCase: !1,
			isEncodeParam: !1,
			syncData: {
				data: null,
				trigger: null,
				tipFiled: null
			},
			asyncData: {
				isCache: !0,
				url: null,
				interval: 200,
				blankInput: !1
			},
			style: {
				highlightCls: null,
				selectedCls: null,
				listCls: null,
				container: null
			},
			templates: {},
			triggerOver: !0
		},
		inherit: Component
	}, function(a) {
		this.setConfig(a);
		a = Error();
		try {
			throw a.name = "InputSuggestInit", this.config.carrier || (a.message = "Carrier must not be null."), this.config.style.listCls || (a.message = "Style structure insufficiency."), !this.config.asyncData.url && !this.config.syncData.data && (a.message = "asyncData: syncData and asyncData must be exist a."), a;
		} catch (m) {
			if (window.console && m.message) return console.log(m.message), null
		}
		this.__init();
		this.__events()
	});
	g.extend({
		__init: function() {
			this._.hisWord = null;
			this._.selected = null;
			this._.timer = null;
			this._.cache = {};
			this._.onInputHack = !0;
			this._.itemMark = "suggest_" + (new Date).getTime();
			this._.disabled = !1;
			this.elems.$carrier = $(this.config.carrier);
			var a = this.elems;
			var b = document.createElement(this.config.style.container);
			b.className = this.config.style.listCls;
			b.style.display = "none";
			this.config.targetCarrier ? $(this.config.targetCarrier).append(b) : $(b).insertAfter(this.elems.$carrier);
			b = $(b);
			a.$list = b;
			this.elems.$carrier.attr("autocomplete", "off")
		},
		__events: function() {
			var c, d = this;
			this.elems.$carrier.on("focus", function() {
				d.elems.$list.html() && d._.hisWord && d.show();
				"onpropertychange" in document.createElement("input") && (d._.onInputHack = !1, d._.hisWord = this.value)
			});
			this.elems.$carrier.on("blur", function() {
				d._.onInputHack = !0;
				setTimeout(function() {
					d.hide();
					d.fire("inputChange")
				}, 200)
			});
			this.elems.$carrier.on("keydown", function(b) {
				c = b.keyCode;
				d._.onInputHack = 38 === c || 40 === c ? !0 : !1;
				!c || 38 !== c && 40 !== c && 27 !== c || (d.elems.$list.html() || 27 === c ? (h.call(d, c), d.fire("over", d._.selected)) : d.show(), b.preventDefault(), 27 !== c && (d._.selected && d._.selected.attr("val") ? d.elems.$carrier.val(d._.selected.attr("val")) : d._.hisWord && d.elems.$carrier.val(d._.hisWord)));
				c && 13 === c && null !== a.call(d, b) && (d.hide(!0), b.preventDefault())
			});
			if ($.browser.msie && "9.0" === $.browser.version) this.elems.$carrier.on("keyup", function(a) {
				c = a.keyCode;
				8 !== c && 46 !== c || b.call(d.elems.$carrier[0], d)
			});
			this.elems.$list.on("mousedown", function(b) {
				if (0 === b.button || 1 === b.which) {
					var c = f($(b.target), d._.itemMark);
					c.attr("val") && ("onpropertychange" in document.createElement("input") && (d._.onInputHack = !0), d.elems.$carrier.val(c.attr("val")));
					a.call(d, b)
				} else b.preventDefault()
			});
			this.elems.$list.on("mousemove", function(a) {
				var b = d._.selected;
				a = f($(a.target), d._.itemMark);
				var c = d.config.style.selectedCls;
				a.hasClass(c) && d._.selected.hasClass(c) || (b && b.removeClass(c), a.addClass(c), d._.selected = a, d.config.triggerOver ? d.fire("over", d._.selected) : d.fire("originalMouseMove", d._.selected))
			});
			this.elems.$list.on("mouseout", function(a) {
				var b = f($(a.relatedTarget), d._.itemMark),
					c = d.config.style.selectedCls;
				if (!b.hasClass(c) || !d._.selected.hasClass(c))
					if (b = d.elems.$list, a = a.relatedTarget, "undefined" === typeof b.nodeType && (b = b.get(0)), b.contains ? b != a && b.contains(a) : b.compareDocumentPosition(a) & 16) d.fire("out", d._.selected), d._.selected && d._.selected.removeClass(c), d._.selected = null
			});
			if ("onpropertychange" in document.createElement("input")) this.elems.$carrier[0].attachEvent("onpropertychange", function() {
				d._.onInputHack || (b.call(d.elems.$carrier[0], d), d.fire("inputChange"))
			});
			else this.elems.$carrier.on("input", function() {
				b.call(this, d);
				d.fire("inputChange")
			})
		},
		disabled: function(a) {
			this._.disabled = a
		},
		show: function() {
			if (!this._.disabled) {
				var a = this.elems.$carrier.val(),
					d = this;
				a === this._.hisWord && this.elems.$list.html() ? (this.elems.$list.show(), this.fire("show")) : (this.config.asyncData.url && k.call(this, a, function(a) {
					c.call(d, a)
				}), d.config.syncData.data && b.call(d.elems.$carrier[0], d))
			}
		},
		hide: function() {
			this._.hisWord = this.elems.$carrier.val();
			this._.selected && this._.selected.removeClass(this.config.style.selectedCls);
			this._.selected = null;
			this.elems.$list.hide();
			this.fire("hide");
			this.elems.$list.empty()
		},
		loadData: function(a) {
			this.config.syncData.data && (d(a), this.config.syncData.data = a, b.call(this.elems.$carrier[0], this))
		},
		changeAsync: function(a) {
			a && (this.config.asyncData.url = a, this._.cache = {})
		},
		getData: function(a, b, c) {
			var d = this._.cache;
			if (d[a] && d[a][b] && (a = d[a][b], 0 < a.length))
				for (b = 0; b < a.length; b++)
					if (a[b]._index + "" === c + "") return a[b];
			return null
		},
		getLastWord: function() {
			return this._.hisWord || this.elems.$carrier.val()
		}
	});
	return g
});
"undefined" !== typeof FileReader && Array.prototype.filter && ! function(b, a) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else {
		var c = a(),
			e;
		for (e in c)("object" == typeof exports ? exports : b)[e] = c[e]
	}
}(this, function() {
	return function(b) {
		function a(e) {
			if (c[e]) return c[e].exports;
			var k = c[e] = {
				exports: {},
				id: e,
				loaded: !1
			};
			return b[e].call(k.exports, k, k.exports, a), k.loaded = !0, k.exports
		}
		var c = {};
		return a.m = b, a.c = c, a.p = "", a(0)
	}([function(b, a, c) {
		c(6);
		c(7);
		b.exports = c(8)
	}, function(b, a, c) {
		(function(a) {
			! function(c) {
				function d(a, b) {
					return function() {
						a.apply(b, arguments)
					}
				}

				function e(a) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof a) throw new TypeError("not a function");
					this._value = this._state = null;
					this._deferreds = [];
					k(a, d(f, this), d(g, this))
				}

				function h(a) {
					var b = this;
					return null === this._state ? void this._deferreds.push(a) : void r(function() {
						var c = b._state ? a.onFulfilled : a.onRejected;
						if (null === c) return void(b._state ? a.resolve : a.reject)(b._value);
						try {
							var d = c(b._value)
						} catch (z) {
							return void a.reject(z)
						}
						a.resolve(d)
					})
				}

				function f(a) {
					try {
						if (a === this) throw new TypeError("A promise cannot be resolved with itself.");
						if (a && ("object" == typeof a || "function" == typeof a)) {
							var b = a.then;
							if ("function" == typeof b) return void k(d(b, a), d(f, this), d(g, this))
						}
						this._state = !0;
						this._value = a;
						n.call(this)
					} catch (t) {
						g.call(this, t)
					}
				}

				function g(a) {
					this._state = !1;
					this._value = a;
					n.call(this)
				}

				function n() {
					for (var a = 0, b = this._deferreds.length; b > a; a++) h.call(this, this._deferreds[a]);
					this._deferreds = null
				}

				function m(a, b, c, d) {
					this.onFulfilled = "function" == typeof a ? a : null;
					this.onRejected = "function" == typeof b ? b : null;
					this.resolve = c;
					this.reject = d
				}

				function k(a, b, c) {
					var d = !1;
					try {
						a(function(a) {
							d || (d = !0, b(a))
						}, function(a) {
							d || (d = !0, c(a))
						})
					} catch (z) {
						d || (d = !0, c(z))
					}
				}
				var r = "function" == typeof a && a || function(a) {
						setTimeout(a, 1)
					},
					p = Array.isArray || function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					};
				e.prototype["catch"] = function(a) {
					return this.then(null, a)
				};
				e.prototype.then = function(a, b) {
					var c = this;
					return new e(function(d, f) {
						h.call(c, new m(a, b, d, f))
					})
				};
				e.all = function() {
					var a = Array.prototype.slice.call(1 === arguments.length && p(arguments[0]) ? arguments[0] : arguments);
					return new e(function(b, c) {
						function d(m, g) {
							try {
								if (g && ("object" == typeof g || "function" == typeof g)) {
									var e = g.then;
									if ("function" == typeof e) return void e.call(g, function(a) {
										d(m, a)
									}, c)
								}
								a[m] = g;
								0 === --f && b(a)
							} catch (D) {
								c(D)
							}
						}
						if (0 === a.length) return b([]);
						for (var f = a.length,
								m = 0; m < a.length; m++) d(m, a[m])
					})
				};
				e.resolve = function(a) {
					return a && "object" == typeof a && a.constructor === e ? a : new e(function(b) {
						b(a)
					})
				};
				e.reject = function(a) {
					return new e(function(b, c) {
						c(a)
					})
				};
				e.race = function(a) {
					return new e(function(b, c) {
						for (var d = 0, f = a.length; f > d; d++) a[d].then(b, c)
					})
				};
				e._setImmediateFn = function(a) {
					r = a
				};
				e.prototype.always = function(a) {
					var b = this.constructor;
					return this.then(function(c) {
						return b.resolve(a()).then(function() {
							return c
						})
					}, function(c) {
						return b.resolve(a()).then(function() {
							throw c;
						})
					})
				};
				"undefined" != typeof b && b.exports ? b.exports = e : c.Promise || (c.Promise = e)
			}(this)
		}).call(a, c(2).setImmediate)
	}, function(b, a, c) {
		(function(b, k) {
			function d(a, b) {
				this._id = a;
				this._clearFn = b
			}
			var e = c(3).nextTick,
				h = Function.prototype.apply,
				f = Array.prototype.slice,
				g = {},
				n = 0;
			a.setTimeout = function() {
				return new d(h.call(setTimeout, window, arguments), clearTimeout)
			};
			a.setInterval = function() {
				return new d(h.call(setInterval, window, arguments), clearInterval)
			};
			a.clearTimeout = a.clearInterval = function(a) {
				a.close()
			};
			d.prototype.unref = d.prototype.ref = function() {};
			d.prototype.close = function() {
				this._clearFn.call(window, this._id)
			};
			a.enroll = function(a, b) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = b
			};
			a.unenroll = function(a) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = -1
			};
			a._unrefActive = a.active = function(a) {
				clearTimeout(a._idleTimeoutId);
				var b = a._idleTimeout;
				0 <= b && (a._idleTimeoutId = setTimeout(function() {
					a._onTimeout && a._onTimeout()
				}, b))
			};
			a.setImmediate = "function" == typeof b ? b : function(b) {
				var c = n++,
					d = 2 > arguments.length ? !1 : f.call(arguments, 1);
				return g[c] = !0, e(function() {
					g[c] && (d ? b.apply(null, d) : b.call(null), a.clearImmediate(c))
				}), c
			};
			a.clearImmediate = "function" == typeof k ? k : function(a) {
				delete g[a]
			}
		}).call(a, c(2).setImmediate, c(2).clearImmediate)
	}, function(b, a) {
		function c() {
			g = !1;
			l.length ? f = l.concat(f) : n = -1;
			f.length && e()
		}

		function e() {
			if (!g) {
				var a = setTimeout(c);
				g = !0;
				for (var b = f.length; b;) {
					l = f;
					for (f = []; ++n < b;) l && l[n].run();
					n = -1;
					b = f.length
				}
				l = null;
				g = !1;
				clearTimeout(a)
			}
		}

		function k(a, b) {
			this.fun = a;
			this.array = b
		}

		function d() {}
		var l, h = b.exports = {},
			f = [],
			g = !1,
			n = -1;
		h.nextTick = function(a) {
			var b = Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
			f.push(new k(a, b));
			1 !== f.length || g || setTimeout(e, 0)
		};
		k.prototype.run = function() {
			this.fun.apply(null, this.array)
		};
		h.title = "browser";
		h.browser = !0;
		h.env = {};
		h.argv = [];
		h.version = "";
		h.versions = {};
		h.on = d;
		h.addListener = d;
		h.once = d;
		h.off = d;
		h.removeListener = d;
		h.removeAllListeners = d;
		h.emit = d;
		h.binding = function(a) {
			throw Error("process.binding is not supported");
		};
		h.cwd = function() {
			return "/"
		};
		h.chdir = function(a) {
			throw Error("process.chdir is not supported");
		};
		h.umask = function() {
			return 0
		}
	}, function(b, a) {
		try {
			var c = (new Blob, !0)
		} catch (k) {
			c = !1
		}
		var e = c ? window.Blob : function(a, b) {
			var c = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
			return a.forEach(function(a) {
				c.append(a)
			}), c.getBlob(b ? b.type : void 0)
		};
		c = function() {
			function a() {
				var a = this,
					c = [],
					d = Array(21).join("-") + (1E16 * +new Date * Math.random()).toString(36),
					g = XMLHttpRequest.prototype.send;
				this.getParts = function() {
					return c.toString()
				};
				this.append = function(a, b, f) {
					c.push("--" + d + '\r\nContent-Disposition: form-data; name\x3d"' + a + '"');
					b instanceof Blob ? (c.push('; filename\x3d"' + (f || "blob") + '"\r\nContent-Type: ' + b.type + "\r\n\r\n"), c.push(b)) : c.push("\r\n\r\n" + b);
					c.push("\r\n")
				};
				b++;
				XMLHttpRequest.prototype.send = function(f) {
					var m, n, h = this;
					f === a ? (c.push("--" + d + "--\r\n"), n = new e(c), m = new FileReader, m.onload = function() {
						g.call(h, m.result)
					}, m.onerror = function(a) {
						throw a;
					}, m.readAsArrayBuffer(n), this.setRequestHeader("Content-Type", "multipart/form-data; boundary\x3d" + d), b--, 0 == b && (XMLHttpRequest.prototype.send = g)) : g.call(this, f)
				}
			}
			var b = 0;
			return a.prototype = Object.create(FormData.prototype), a
		}();
		b.exports = {
			Blob: e,
			FormData: ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome") && 534 >= navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() || /MQQBrowser/g.test(navigator.userAgent) ? c : FormData
		}
	}, function(b, a, c) {
		var e, k;
		(function() {
			function c(a, b) {
				b || a.match(/^data\:([^\;]+)\;base64,/im);
				a = a.replace(/^data\:([^\;]+)\;base64,/gim, "");
				for (var c = atob(a), d = c.length, f = new ArrayBuffer(d), g = new Uint8Array(f), m = 0; d > m; m++) g[m] = c.charCodeAt(m);
				return f
			}

			function l(a, b) {
				var c = new XMLHttpRequest;
				c.open("GET", a, !0);
				c.responseType = "blob";
				c.onload = function(a) {
					200 != this.status && 0 !== this.status || b(this.response)
				};
				c.send()
			}

			function h(a, b) {
				function d(c) {
					var d = f(c);
					a: {
						var g = new DataView(c);
						if (r && console.log("Got file of length " + c.byteLength), 255 != g.getUint8(0) || 216 != g.getUint8(1)) c = (r && console.log("Not a valid JPEG"), !1);
						else {
							for (var e = 2, n = c.byteLength; n > e;) {
								var h = g,
									l = e;
								if (56 === h.getUint8(l) && 66 === h.getUint8(l + 1) && 73 === h.getUint8(l + 2) && 77 === h.getUint8(l + 3) && 4 === h.getUint8(l + 4) && 4 === h.getUint8(l + 5)) {
									n = g.getUint8(e + 7);
									0 !== n % 2 && (n += 1);
									0 === n && (n = 4);
									l = e + 8 + n;
									var k = g.getUint16(e + 6 + n);
									h = n = e = g = void 0;
									c = new DataView(c);
									for (var q = {}, w = l; l + k > w;) 28 === c.getUint8(w) && 2 === c.getUint8(w + 1) && (g = c.getUint8(w + 2), g in z && (e = c.getInt16(w + 3), n = z[g], h = m(c, w + 5, e), q.hasOwnProperty(n) ? q[n] instanceof Array ? q[n].push(h) : q[n] = [q[n], h] : q[n] = h)), w++;
									c = q;
									break a
								}
								e++
							}
							c = void 0
						}
					}
					a.exifdata = d || {};
					a.iptcdata = c || {};
					b && b.call(a)
				}
				if (a.src)
					if (/^data\:/i.test(a.src)) {
						var g = c(a.src);
						d(g)
					} else if (/^blob\:/i.test(a.src)) {
					var e = new FileReader;
					e.onload = function(a) {
						d(a.target.result)
					};
					l(a.src, function(a) {
						e.readAsArrayBuffer(a)
					})
				} else {
					var n = new XMLHttpRequest;
					n.onload = function() {
						200 == this.status || 0 === this.status ? d(n.response) : b(Error("Could not load image"));
						n = null
					};
					n.open("GET", a.src, !0);
					n.responseType = "arraybuffer";
					n.send(null)
				} else window.FileReader && (a instanceof window.Blob || a instanceof window.File || "object" === typeof a.lastModifiedDate) && (e = new FileReader, e.onload = function(a) {
					r && console.log("Got file of length " + a.target.result.byteLength);
					d(a.target.result)
				}, e.readAsArrayBuffer(a))
			}

			function f(a) {
				var b = new DataView(a);
				if (r && console.log("Got file of length " + a.byteLength), 255 != b.getUint8(0) || 216 != b.getUint8(1)) return r && console.log("Not a valid JPEG"), !1;
				var c, d = 2;
				for (a = a.byteLength; a > d;) {
					if (255 != b.getUint8(d)) return r && console.log("Not a valid marker at offset " + d + ", found: " + b.getUint8(d)), !1;
					if (c = b.getUint8(d + 1), r && console.log(c), 225 == c) return r && console.log("Found 0xFFE1 marker"), u(b, d + 4, b.getUint16(d + 2) - 2);
					d += 2 + b.getUint16(d + 2)
				}
			}

			function g(a, b, c, d, f) {
				var g, m = a.getUint16(c, !f),
					e = {};
				for (g = 0; m > g; g++) {
					var h = c + 12 * g + 2;
					var l = d[a.getUint16(h, !f)];
					!l && r && console.log("Unknown tag: " + a.getUint16(h, !f));
					e[l] = n(a, h, b, c, f)
				}
				return e
			}

			function n(a, b, c, d, f) {
				var g, e, n, h = a.getUint16(b + 2, !f);
				d = a.getUint32(b + 4, !f);
				c = a.getUint32(b + 8, !f) + c;
				switch (h) {
					case 1:
					case 7:
						if (1 == d) return a.getUint8(b + 8, !f);
						var l = 4 < d ? c : b + 8;
						b = [];
						for (g = 0; d > g; g++) b[g] = a.getUint8(l + g);
						return b;
					case 2:
						return l = 4 < d ? c : b + 8, m(a, l, d - 1);
					case 3:
						if (1 == d) return a.getUint16(b + 8, !f);
						l = 2 < d ? c : b + 8;
						b = [];
						for (g = 0; d > g; g++) b[g] = a.getUint16(l + 2 * g, !f);
						return b;
					case 4:
						if (1 == d) return a.getUint32(b + 8, !f);
						b = [];
						for (g = 0; d > g; g++) b[g] = a.getUint32(c + 4 * g, !f);
						return b;
					case 5:
						if (1 == d) return e = a.getUint32(c, !f), n = a.getUint32(c + 4, !f), g = new Number(e / n), g.numerator = e, g.denominator = n, g;
						b = [];
						for (g = 0; d > g; g++) e = a.getUint32(c + 8 * g, !f), n = a.getUint32(c + 4 + 8 * g, !f), b[g] = new Number(e / n), b[g].numerator = e, b[g].denominator = n;
						return b;
					case 9:
						if (1 == d) return a.getInt32(b + 8, !f);
						b = [];
						for (g = 0; d > g; g++) b[g] = a.getInt32(c + 4 * g, !f);
						return b;
					case 10:
						if (1 == d) return a.getInt32(c, !f) / a.getInt32(c + 4, !f);
						b = [];
						for (g = 0; d > g; g++) b[g] = a.getInt32(c + 8 * g, !f) / a.getInt32(c + 4 + 8 * g, !f);
						return b
				}
			}

			function m(a, b, c) {
				var d, f = "";
				for (d = b; b + c > d; d++) f += String.fromCharCode(a.getUint8(d));
				return f
			}

			function u(a, b) {
				if ("Exif" != m(a, b, 4)) return r && console.log("Not valid EXIF data! " + m(a, b, 4)), !1;
				var c, d, f = b + 6;
				if (18761 == a.getUint16(f)) var e = !1;
				else {
					if (19789 != a.getUint16(f)) return r && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
					e = !0
				}
				if (42 != a.getUint16(f + 2, !e)) return r && console.log("Not valid TIFF data! (no 0x002A)"), !1;
				var n = a.getUint32(f + 4, !e);
				if (8 > n) return r && console.log("Not valid TIFF data! (First offset less than 8)", a.getUint32(f + 4, !e)), !1;
				if (c = g(a, f, f + n, y, e), c.ExifIFDPointer)
					for (d in n = g(a, f, f + c.ExifIFDPointer, q, e), n) {
						switch (d) {
							case "LightSource":
							case "Flash":
							case "MeteringMode":
							case "ExposureProgram":
							case "SensingMethod":
							case "SceneCaptureType":
							case "SceneType":
							case "CustomRendered":
							case "WhiteBalance":
							case "GainControl":
							case "Contrast":
							case "Saturation":
							case "Sharpness":
							case "SubjectDistanceRange":
							case "FileSource":
								n[d] = v[d][n[d]];
								break;
							case "ExifVersion":
							case "FlashpixVersion":
								n[d] = String.fromCharCode(n[d][0], n[d][1], n[d][2], n[d][3]);
								break;
							case "ComponentsConfiguration":
								n[d] = v.Components[n[d][0]] + v.Components[n[d][1]] + v.Components[n[d][2]] + v.Components[n[d][3]]
						}
						c[d] = n[d]
					}
				if (c.GPSInfoIFDPointer)
					for (d in e = g(a, f, f + c.GPSInfoIFDPointer, t, e), e) {
						switch (d) {
							case "GPSVersionID":
								e[d] = e[d][0] + "." + e[d][1] + "." + e[d][2] + "." + e[d][3]
						}
						c[d] = e[d]
					}
				return c
			}
			var r = !1,
				p = function(a) {
					return a instanceof p ? a : this instanceof p ? void(this.EXIFwrapped = a) : new p(a)
				};
			"undefined" != typeof b && b.exports && (a = b.exports = p);
			a.EXIF = p;
			var q = p.Tags = {
					36864: "ExifVersion",
					40960: "FlashpixVersion",
					40961: "ColorSpace",
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					37121: "ComponentsConfiguration",
					37122: "CompressedBitsPerPixel",
					37500: "MakerNote",
					37510: "UserComment",
					40964: "RelatedSoundFile",
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37520: "SubsecTime",
					37521: "SubsecTimeOriginal",
					37522: "SubsecTimeDigitized",
					33434: "ExposureTime",
					33437: "FNumber",
					34850: "ExposureProgram",
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: "OECF",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBias",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: "MeteringMode",
					37384: "LightSource",
					37385: "Flash",
					37396: "SubjectArea",
					37386: "FocalLength",
					41483: "FlashEnergy",
					41484: "SpatialFrequencyResponse",
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: "FocalPlaneResolutionUnit",
					41492: "SubjectLocation",
					41493: "ExposureIndex",
					41495: "SensingMethod",
					41728: "FileSource",
					41729: "SceneType",
					41730: "CFAPattern",
					41985: "CustomRendered",
					41986: "ExposureMode",
					41987: "WhiteBalance",
					41988: "DigitalZoomRation",
					41989: "FocalLengthIn35mmFilm",
					41990: "SceneCaptureType",
					41991: "GainControl",
					41992: "Contrast",
					41993: "Saturation",
					41994: "Sharpness",
					41995: "DeviceSettingDescription",
					41996: "SubjectDistanceRange",
					40965: "InteroperabilityIFDPointer",
					42016: "ImageUniqueID"
				},
				y = p.TiffTags = {
					256: "ImageWidth",
					257: "ImageHeight",
					34665: "ExifIFDPointer",
					34853: "GPSInfoIFDPointer",
					40965: "InteroperabilityIFDPointer",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					274: "Orientation",
					277: "SamplesPerPixel",
					284: "PlanarConfiguration",
					530: "YCbCrSubSampling",
					531: "YCbCrPositioning",
					282: "XResolution",
					283: "YResolution",
					296: "ResolutionUnit",
					273: "StripOffsets",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					301: "TransferFunction",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					529: "YCbCrCoefficients",
					532: "ReferenceBlackWhite",
					306: "DateTime",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					305: "Software",
					315: "Artist",
					33432: "Copyright"
				},
				t = p.GPSTags = {
					0: "GPSVersionID",
					1: "GPSLatitudeRef",
					2: "GPSLatitude",
					3: "GPSLongitudeRef",
					4: "GPSLongitude",
					5: "GPSAltitudeRef",
					6: "GPSAltitude",
					7: "GPSTimeStamp",
					8: "GPSSatellites",
					9: "GPSStatus",
					10: "GPSMeasureMode",
					11: "GPSDOP",
					12: "GPSSpeedRef",
					13: "GPSSpeed",
					14: "GPSTrackRef",
					15: "GPSTrack",
					16: "GPSImgDirectionRef",
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: "GPSDestLatitudeRef",
					20: "GPSDestLatitude",
					21: "GPSDestLongitudeRef",
					22: "GPSDestLongitude",
					23: "GPSDestBearingRef",
					24: "GPSDestBearing",
					25: "GPSDestDistanceRef",
					26: "GPSDestDistance",
					27: "GPSProcessingMethod",
					28: "GPSAreaInformation",
					29: "GPSDateStamp",
					30: "GPSDifferential"
				},
				v = p.StringValues = {
					ExposureProgram: {
						0: "Not defined",
						1: "Manual",
						2: "Normal program",
						3: "Aperture priority",
						4: "Shutter priority",
						5: "Creative program",
						6: "Action program",
						7: "Portrait mode",
						8: "Landscape mode"
					},
					MeteringMode: {
						0: "Unknown",
						1: "Average",
						2: "CenterWeightedAverage",
						3: "Spot",
						4: "MultiSpot",
						5: "Pattern",
						6: "Partial",
						255: "Other"
					},
					LightSource: {
						0: "Unknown",
						1: "Daylight",
						2: "Fluorescent",
						3: "Tungsten (incandescent light)",
						4: "Flash",
						9: "Fine weather",
						10: "Cloudy weather",
						11: "Shade",
						12: "Daylight fluorescent (D 5700 - 7100K)",
						13: "Day white fluorescent (N 4600 - 5400K)",
						14: "Cool white fluorescent (W 3900 - 4500K)",
						15: "White fluorescent (WW 3200 - 3700K)",
						17: "Standard light A",
						18: "Standard light B",
						19: "Standard light C",
						20: "D55",
						21: "D65",
						22: "D75",
						23: "D50",
						24: "ISO studio tungsten",
						255: "Other"
					},
					Flash: {
						0: "Flash did not fire",
						1: "Flash fired",
						5: "Strobe return light not detected",
						7: "Strobe return light detected",
						9: "Flash fired, compulsory flash mode",
						13: "Flash fired, compulsory flash mode, return light not detected",
						15: "Flash fired, compulsory flash mode, return light detected",
						16: "Flash did not fire, compulsory flash mode",
						24: "Flash did not fire, auto mode",
						25: "Flash fired, auto mode",
						29: "Flash fired, auto mode, return light not detected",
						31: "Flash fired, auto mode, return light detected",
						32: "No flash function",
						65: "Flash fired, red-eye reduction mode",
						69: "Flash fired, red-eye reduction mode, return light not detected",
						71: "Flash fired, red-eye reduction mode, return light detected",
						73: "Flash fired, compulsory flash mode, red-eye reduction mode",
						77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89: "Flash fired, auto mode, red-eye reduction mode",
						93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod: {
						1: "Not defined",
						2: "One-chip color area sensor",
						3: "Two-chip color area sensor",
						4: "Three-chip color area sensor",
						5: "Color sequential area sensor",
						7: "Trilinear sensor",
						8: "Color sequential linear sensor"
					},
					SceneCaptureType: {
						0: "Standard",
						1: "Landscape",
						2: "Portrait",
						3: "Night scene"
					},
					SceneType: {
						1: "Directly photographed"
					},
					CustomRendered: {
						0: "Normal process",
						1: "Custom process"
					},
					WhiteBalance: {
						0: "Auto white balance",
						1: "Manual white balance"
					},
					GainControl: {
						0: "None",
						1: "Low gain up",
						2: "High gain up",
						3: "Low gain down",
						4: "High gain down"
					},
					Contrast: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					Saturation: {
						0: "Normal",
						1: "Low saturation",
						2: "High saturation"
					},
					Sharpness: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					SubjectDistanceRange: {
						0: "Unknown",
						1: "Macro",
						2: "Close view",
						3: "Distant view"
					},
					FileSource: {
						3: "DSC"
					},
					Components: {
						0: "",
						1: "Y",
						2: "Cb",
						3: "Cr",
						4: "R",
						5: "G",
						6: "B"
					}
				},
				z = {
					120: "caption",
					110: "credit",
					25: "keywords",
					55: "dateCreated",
					80: "byline",
					85: "bylineTitle",
					122: "captionWriter",
					105: "headline",
					116: "copyright",
					15: "category"
				};
			p.getData = function(a, b) {
				return (a instanceof Image || a instanceof HTMLImageElement) && !a.complete ? !1 : (a.exifdata ? b && b.call(a) : h(a, b), !0)
			};
			p.getTag = function(a, b) {
				return a.exifdata ? a.exifdata[b] : void 0
			};
			p.getAllTags = function(a) {
				if (!a.exifdata) return {};
				var b;
				a = a.exifdata;
				var c = {};
				for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
				return c
			};
			p.pretty = function(a) {
				if (!a.exifdata) return "";
				var b;
				a = a.exifdata;
				var c = "";
				for (b in a) a.hasOwnProperty(b) && (c += "object" == typeof a[b] ? a[b] instanceof Number ? b + " : " + a[b] + " [" + a[b].numerator + "/" + a[b].denominator + "]\r\n" : b + " : [" + a[b].length + " values]\r\n" : b + " : " + a[b] + "\r\n");
				return c
			};
			p.readFromBinaryFile = function(a) {
				return f(a)
			};
			e = [];
			k = function() {
				return p
			}.apply(a, e);
			!(void 0 !== k && (b.exports = k))
		}).call(this)
	}, function(b, a, c) {
		var e, k;
		! function() {
			function c(a, b, c) {
				var d = document.createElement("canvas");
				return l(a, d, b, c), d.toDataURL("image/jpeg", b.quality || .8)
			}

			function l(a, b, c, d) {
				var f = a.naturalWidth,
					g = a.naturalHeight,
					m = c.width,
					e = c.height,
					n = b.getContext("2d");
				n.save();
				c = c.orientation;
				switch (c) {
					case 5:
					case 6:
					case 7:
					case 8:
						b.width = e;
						b.height = m;
						break;
					default:
						b.width = m, b.height = e
				}
				switch (c) {
					case 2:
						n.translate(m, 0);
						n.scale(-1, 1);
						break;
					case 3:
						n.translate(m, e);
						n.rotate(Math.PI);
						break;
					case 4:
						n.translate(0, e);
						n.scale(1, -1);
						break;
					case 5:
						n.rotate(.5 * Math.PI);
						n.scale(1, -1);
						break;
					case 6:
						n.rotate(.5 * Math.PI);
						n.translate(0, -e);
						break;
					case 7:
						n.rotate(.5 * Math.PI);
						n.translate(m, -e);
						n.scale(-1, 1);
						break;
					case 8:
						n.rotate(-.5 * Math.PI), n.translate(-m, 0)
				}
				b = a.naturalWidth;
				1048576 < b * a.naturalHeight ? (c = document.createElement("canvas"), c.width = c.height = 1, c = c.getContext("2d"), b = (c.drawImage(a, -b + 1, 0), 0 === c.getImageData(0, 0, 1, 1).data[3])) : b = !1;
				b && (f /= 2, g /= 2);
				b = document.createElement("canvas");
				b.width = b.height = 1024;
				c = b.getContext("2d");
				if (d) {
					d = g;
					var h = document.createElement("canvas");
					h.width = 1;
					h.height = d;
					h = h.getContext("2d");
					h.drawImage(a, 0, 0);
					h = h.getImageData(0, 0, 1, d).data;
					for (var l = 0, k = d, w = d; w > l;) 0 === h[4 * (w - 1) + 3] ? k = w : l = w, w = k + l >> 1;
					d = w / d;
					d = 0 === d ? 1 : d
				} else d = 1;
				m = Math.ceil(1024 * m / f);
				e = Math.ceil(1024 * e / g / d);
				for (h = d = 0; g > d;) {
					for (k = l = 0; f > l;) c.clearRect(0, 0, 1024, 1024), c.drawImage(a, -l, -d), n.drawImage(b, 0, 0, 1024, 1024, k, h, m, e), l += 1024, k += m;
					d += 1024;
					h += e
				}
				n.restore()
			}

			function h(a) {
				if (window.Blob && a instanceof Blob) {
					var b = new Image,
						c = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
					if (!c) throw Error("No createObjectURL function found to create blob url");
					b.src = c.createObjectURL(a);
					this.blob = a;
					a = b
				}
				if (!a.naturalWidth && !a.naturalHeight) {
					var d = this;
					a.onload = function() {
						var a = d.imageLoadListeners;
						if (a) {
							d.imageLoadListeners = null;
							for (var b = 0, c = a.length; c > b; b++) a[b]()
						}
					};
					this.imageLoadListeners = []
				}
				this.srcImage = a
			}
			h.prototype.render = function(a, b, d) {
				if (this.imageLoadListeners) {
					var f = this;
					return void this.imageLoadListeners.push(function() {
						f.render(a, b, d)
					})
				}
				b = b || {};
				var g = this.srcImage,
					e = g.src,
					n = e.length,
					h = g.naturalWidth;
				g = g.naturalHeight;
				var k = b.width,
					t = b.height,
					v = b.maxWidth,
					z = b.maxHeight;
				e = this.blob && "image/jpeg" === this.blob.type || 0 === e.indexOf("data:image/jpeg") || e.indexOf(".jpg") === n - 4 || e.indexOf(".jpeg") === n - 5;
				k && !t ? t = g * k / h << 0 : t && !k ? k = h * t / g << 0 : (k = h, t = g);
				v && k > v && (k = v, t = g * k / h << 0);
				z && t > z && (t = z, k = h * t / g << 0);
				h = {
					width: k,
					height: t
				};
				for (var w in b) h[w] = b[w];
				w = a.tagName.toLowerCase();
				"img" === w ? a.src = c(this.srcImage, h, e) : "canvas" === w && l(this.srcImage, a, h, e);
				"function" == typeof this.onrender && this.onrender(a);
				d && d()
			};
			e = [];
			k = function() {
				return h
			}.apply(a, e);
			!(void 0 !== k && (b.exports = k))
		}()
	}, function(b, a) {
		b.exports = function(a) {
			function b(a, b) {
				for (var c = 0, d = 0, f = [], g = 1; 16 >= g; g++) {
					for (var e = 1; e <= a[g]; e++) f[b[d]] = [], f[b[d]][0] = c, f[b[d]][1] = g, d++, c++;
					c *= 2
				}
				return f
			}

			function c(a) {
				var b = a[0];
				for (a = a[1] - 1; 0 <= a;) b & 1 << a && (D |= 1 << F), a--, F--, 0 > F && (255 == D ? (d(255), d(0)) : d(D), F = 7, D = 0)
			}

			function d(a) {
				C.push(O[a])
			}

			function l(a) {
				d(a >> 8 & 255);
				d(255 & a)
			}

			function h(a, b, d, f, g) {
				var e, m = g[0],
					n = g[240],
					h, l = 0;
				for (h = 0; 8 > h; ++h) {
					var k = a[l];
					var r = a[l + 1];
					var q = a[l + 2];
					var p = a[l + 3];
					var x = a[l + 4];
					var t = a[l + 5];
					var y = a[l + 6];
					var u = a[l + 7];
					var v = k + u;
					k -= u;
					u = r + y;
					r -= y;
					y = q + t;
					q -= t;
					t = p + x;
					p -= x;
					x = v + t;
					v -= t;
					t = u + y;
					u -= y;
					a[l] = x + t;
					a[l + 4] = x - t;
					x = .707106781 * (u + v);
					a[l + 2] = v + x;
					a[l + 6] = v - x;
					x = p + q;
					t = q + r;
					u = r + k;
					q = .382683433 * (x - u);
					p = .5411961 * x + q;
					x = 1.306562965 * u + q;
					t *= .707106781;
					q = k + t;
					k -= t;
					a[l + 5] = k + p;
					a[l + 3] = k - p;
					a[l + 1] = q + x;
					a[l + 7] = q - x;
					l += 8
				}
				for (h = l = 0; 8 > h; ++h) k = a[l], r = a[l + 8], q = a[l + 16], p = a[l + 24], x = a[l + 32], t = a[l + 40], y = a[l + 48], u = a[l + 56], v = k + u, k -= u, u = r + y, r -= y, y = q + t, q -= t, t = p + x, p -= x, x = v + t, v -= t, t = u + y, u -= y, a[l] = x + t, a[l + 32] = x - t, x = .707106781 * (u + v), a[l + 16] = v + x, a[l + 48] = v - x, x = p + q, t = q + r, u = r + k, q = .382683433 * (x - u), p = .5411961 * x + q, x = 1.306562965 * u + q, t *= .707106781, q = k + t, k -= t, a[l + 40] = k + p, a[l + 24] = k - p, a[l + 8] = q + x, a[l + 56] = q - x, l++;
				for (h = 0; 64 > h; ++h) l = a[h] * b[h], E[h] = 0 < l ? l + .5 | 0 : l - .5 | 0;
				a = E;
				for (b = 0; 64 > b; ++b) B[H[b]] = a[b];
				a = B[0] - d;
				d = B[0];
				0 == a ? c(f[0]) : (e = 32767 + a, c(f[w[e]]), c(z[e]));
				for (f = 63; 0 < f && 0 == B[f]; f--);
				if (0 == f) return c(m), d;
				for (a = 1; f >= a;) {
					for (e = a; 0 == B[a] && f >= a; ++a);
					b = a - e;
					if (16 <= b) {
						e = b >> 4;
						for (h = 1; e >= h; ++h) c(n);
						b &= 15
					}
					e = 32767 + B[a];
					c(g[(b << 4) + w[e]]);
					c(z[e]);
					a++
				}
				return 63 != f && c(m), d
			}

			function f(a) {
				if (0 >= a && (a = 1), 100 < a && (a = 100), r != a) {
					var b = 50 > a ? Math.floor(5E3 / a) : Math.floor(200 - 2 * a);
					for (var c = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], d = 0; 64 > d; d++) {
						var f = p((c[d] * b + 50) / 100);
						1 > f ? f = 1 : 255 < f && (f = 255);
						q[H[d]] = f
					}
					c = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
					for (d = 0; 64 > d; d++) f = p((c[d] * b + 50) / 100), 1 > f ? f = 1 : 255 < f && (f = 255), y[H[d]] = f;
					b = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379];
					for (d = c = 0; 8 > d; d++)
						for (f = 0; 8 > f; f++) t[c] = 1 / (q[H[c]] * b[d] * b[f] * 8), v[c] = 1 / (y[H[c]] * b[d] * b[f] * 8), c++;
					r = a
				}
			}
			var g, n, m, u, r, p = (Math.round, Math.floor),
				q = Array(64),
				y = Array(64),
				t = Array(64),
				v = Array(64),
				z = Array(65535),
				w = Array(65535),
				E = Array(64),
				B = Array(64),
				C = [],
				D = 0,
				F = 7,
				J = Array(64),
				K = Array(64),
				N = Array(64),
				O = Array(256),
				A = Array(2048),
				H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
				P = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				Q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				R = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
				L = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65,
					6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233,
					234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
				],
				M = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
				U = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
				V = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
					152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
				];
			this.encode = function(a, b, e) {
				var k = (new Date).getTime();
				b && f(b);
				C = [];
				D = 0;
				F = 7;
				l(65496);
				l(65504);
				l(16);
				d(74);
				d(70);
				d(73);
				d(70);
				d(0);
				d(1);
				d(1);
				d(0);
				l(1);
				l(1);
				d(0);
				d(0);
				l(65499);
				l(132);
				d(0);
				for (b = 0; 64 > b; b++) d(q[b]);
				d(1);
				for (b = 0; 64 > b; b++) d(y[b]);
				b = a.width;
				var r = a.height;
				l(65472);
				l(17);
				d(8);
				l(r);
				l(b);
				d(3);
				d(1);
				d(17);
				d(0);
				d(2);
				d(17);
				d(1);
				d(3);
				d(17);
				d(1);
				l(65476);
				l(418);
				d(0);
				for (b = 0; 16 > b; b++) d(P[b + 1]);
				for (b = 0; 11 >= b; b++) d(Q[b]);
				d(16);
				for (b = 0; 16 > b; b++) d(R[b + 1]);
				for (b = 0; 161 >= b; b++) d(L[b]);
				d(1);
				for (b = 0; 16 > b; b++) d(M[b + 1]);
				for (b = 0; 11 >= b; b++) d(U[b]);
				d(17);
				for (b = 0; 16 > b; b++) d(I[b + 1]);
				for (b = 0; 161 >= b; b++) d(V[b]);
				l(65498);
				l(12);
				d(3);
				d(1);
				d(0);
				d(2);
				d(17);
				d(3);
				d(17);
				d(0);
				d(63);
				d(0);
				var p = r = b = 0;
				D = 0;
				F = 7;
				this.encode.displayName = "_encode_";
				for (var w, x, E, X, G, S = a.data, T = a.height, B = 4 * a.width, z = 0; T > z;) {
					for (a = 0; B > a;) {
						X = B * z + a;
						for (G = 0; 64 > G; G++) x = G >> 3, w = 4 * (7 & G), E = X + x * B + w, z + x >= T && (E -= B * (z + 1 + x - T)), a + w >= B && (E -= a + w - B + 4), w = S[E++], x = S[E++], E = S[E++], J[G] = (A[w] + A[x + 256 >> 0] + A[E + 512 >> 0] >> 16) - 128, K[G] = (A[w + 768 >> 0] + A[x + 1024 >> 0] + A[E + 1280 >> 0] >> 16) - 128, N[G] = (A[w + 1280 >> 0] + A[x + 1536 >> 0] + A[E + 1792 >> 0] >> 16) - 128;
						b = h(J, t, b, g, m);
						r = h(K, v, r, n, u);
						p = h(N, v, p, n, u);
						a += 32
					}
					z += 8
				}
				0 <= F && (a = [], a[1] = F + 1, a[0] = (1 << F + 1) - 1, c(a));
				if (l(65497), e) {
					e = C.length;
					a = new Uint8Array(e);
					for (b = 0; e > b; b++) a[b] = C[b].charCodeAt();
					C = [];
					(new Date).getTime() - k;
					return a
				}
				e = "data:image/jpeg;base64," + btoa(C.join(""));
				C = [];
				(new Date).getTime() - k;
				return e
			};
			(function() {
				var c = (new Date).getTime();
				a || (a = 50);
				for (var d = String.fromCharCode, e = 0; 256 > e; e++) O[e] = d(e);
				g = b(P, Q);
				n = b(M, U);
				m = b(R, L);
				u = b(I, V);
				d = 1;
				e = 2;
				for (var h = 1; 15 >= h; h++) {
					for (var l = d; e > l; l++) w[32767 + l] = h, z[32767 + l] = [], z[32767 + l][1] = h, z[32767 + l][0] = l;
					for (l = -(e - 1); - d >= l; l++) w[32767 + l] = h, z[32767 + l] = [], z[32767 + l][1] = h, z[32767 + l][0] = e - 1 + l;
					d <<= 1;
					e <<= 1
				}
				for (d = 0; 256 > d; d++) A[d] = 19595 * d, A[d + 256 >> 0] = 38470 * d, A[d + 512 >> 0] = 7471 * d + 32768, A[d + 768 >> 0] = -11059 * d, A[d + 1024 >> 0] = -21709 * d, A[d + 1280 >> 0] = 32768 * d + 8421375, A[d + 1536 >> 0] = -27439 * d, A[d + 1792 >> 0] = -5329 * d;
				f(a);
				(new Date).getTime() - c
			})()
		}
	}, function(b, a, c) {
		function e(a, b) {
			if (!a) throw Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
			b = b || {};
			this.defaults = {
				width: null,
				height: null,
				fieldName: "file",
				quality: .7
			};
			this.file = a;
			for (var c in b) b.hasOwnProperty(c) && (this.defaults[c] = b[c]);
			return this.init()
		}
		c.p = function(a) {
			var b = null;
			return b = a ? [].filter.call(document.scripts, function(b) {
				return -1 !== b.src.indexOf(a)
			})[0] : document.scripts[document.scripts.length - 1], b ? b.src.substr(0, b.src.lastIndexOf("/")) : null
		}("lrz") + "/";
		window.URL = window.URL || window.webkitURL;
		var k = c(1),
			d = c(4),
			l = c(5),
			h = function(a) {
				var b = /OS (\d)_.* like Mac OS X/g.exec(a),
					c = /Android (\d.*?);/g.exec(a) || /Android\/(\d.*?) /g.exec(a);
				return {
					oldIOS: b ? 8 > +b.pop() : !1,
					oldAndroid: c ? 4.5 > +c.pop().substr(0, 3) : !1,
					iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(a),
					android: /Android/g.test(a),
					mQQBrowser: /MQQBrowser/g.test(a)
				}
			}(navigator.userAgent);
		e.prototype.init = function() {
			var a = this,
				b = a.file,
				c = "string" == typeof b,
				e = /^data:/.test(b),
				l = new Image,
				h = document.createElement("canvas"),
				p = c ? b : URL.createObjectURL(b);
			if (a.img = l, a.blob = p, a.canvas = h, c ? a.fileName = e ? "base64.jpg" : b.split("/").pop() : a.fileName = b.name, !document.createElement("canvas").getContext) throw Error("浏览器不支持canvas");
			return new k(function(c, f) {
				l.onerror = function() {
					var a = Error("加载图片文件失败");
					throw f(a), a;
				};
				l.onload = function() {
					a._getBase64().then(function(a) {
						if (10 > a.length) throw a = Error("生成base64失败"),
							f(a), a;
						return a
					}).then(function(f) {
						if ("object" == typeof a.file && f.length > a.file.size) {
							var g = new FormData;
							b = a.file
						} else {
							g = new d.FormData;
							var e = 0 <= f.split(",")[0].indexOf("base64") ? atob(f.split(",")[1]) : unescape(f.split(",")[1]);
							for (var m = f.split(",")[0].split(":")[1].split(";")[0], l = new Uint8Array(e.length), h = 0; h < e.length; h++) l[h] = e.charCodeAt(h);
							b = new d.Blob([l.buffer], {
								type: m
							})
						}
						g.append(a.defaults.fieldName, b, a.fileName.replace(/\..+/g, ".jpg"));
						c({
							formData: g,
							fileLen: +b.size,
							base64: f,
							base64Len: f.length,
							origin: a.file,
							file: b
						});
						for (var n in a) a.hasOwnProperty(n) && (a[n] = null);
						URL.revokeObjectURL(a.blob)
					})
				};
				!e && (l.crossOrigin = "*");
				l.src = p
			})
		};
		e.prototype._getBase64 = function() {
			var a = this,
				b = a.img,
				c = a.file,
				d = a.canvas;
			return new k(function(f) {
				try {
					l.getData("object" == typeof c ? c : b, function() {
						a.orientation = l.getTag(this, "Orientation");
						a.resize = a._getResize();
						a.ctx = d.getContext("2d");
						d.width = a.resize.width;
						d.height = a.resize.height;
						a.ctx.fillStyle = "#fff";
						a.ctx.fillRect(0, 0, d.width, d.height);
						h.oldIOS ? a._createBase64ForOldIOS().then(f) : a._createBase64().then(f)
					})
				} catch (r) {
					throw Error(r);
				}
			})
		};
		e.prototype._createBase64ForOldIOS = function() {
			var a = this.img,
				b = this.canvas,
				d = this.defaults,
				e = this.orientation;
			return new k(function(f) {
				! function() {
					var g = [c(6)];
					(function(c) {
						c = new c(a); - 1 < "5678".indexOf(e) ? c.render(b, {
							width: b.height,
							height: b.width,
							orientation: e
						}) : c.render(b, {
							width: b.width,
							height: b.height,
							orientation: e
						});
						f(b.toDataURL("image/jpeg", d.quality))
					}).apply(null, g)
				}()
			})
		};
		e.prototype._createBase64 = function() {
			var a = this.resize,
				b = this.img,
				d = this.canvas,
				e = this.ctx,
				l = this.defaults;
			switch (this.orientation) {
				case 3:
					e.rotate(180 * Math.PI / 180);
					e.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 6:
					e.rotate(90 * Math.PI / 180);
					e.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 8:
					e.rotate(270 * Math.PI / 180);
					e.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				case 2:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.drawImage(b, 0, 0, a.width, a.height);
					break;
				case 4:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(180 * Math.PI / 180);
					e.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 5:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(90 * Math.PI / 180);
					e.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 7:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(270 * Math.PI / 180);
					e.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				default:
					e.drawImage(b, 0, 0, a.width, a.height)
			}
			return new k(function(a) {
				h.oldAndroid || h.mQQBrowser || !navigator.userAgent ? ! function() {
					var b = [c(7)];
					(function(b) {
						b = new b;
						var c = e.getImageData(0, 0, d.width, d.height);
						a(b.encode(c, 100 * l.quality))
					}).apply(null, b)
				}() : a(d.toDataURL("image/jpeg", l.quality))
			})
		};
		e.prototype._getResize = function() {
			var a = this.img,
				b = this.defaults,
				c = b.width;
			b = b.height;
			var d = {
				width: a.width,
				height: a.height
			};
			if (-1 < "5678".indexOf(this.orientation) && (d.width = a.height, d.height = a.width), d.width < c || d.height < b) return d;
			a = d.width / d.height;
			for (c && b ? a >= c / b ? d.width > c && (d.width = c, d.height = Math.ceil(c / a)) : d.height > b && (d.height = b, d.width = Math.ceil(b * a)) : c ? c < d.width && (d.width = c, d.height = Math.ceil(c / a)) : b && b < d.height && (d.width = Math.ceil(b * a), d.height = b); 3264 <= d.width || 2448 <= d.height;) d.width *= .8, d.height *= .8;
			return d
		};
		window.lrz = function(a, b) {
			return new e(a, b)
		};
		window.lrz.version = "4.9.40";
		b.exports = window.lrz
	}])
});
$(function() {
	function b(a) {
		function b() {
			if (window.InputSuggest && !t && v && y[v]) {
				var b = function(a, b) {
						if (l) return !1;
						var c = a.elems.$list.parent(),
							d = b.data[0],
							e;
						f = !1;
						n = null;
						h.find(".m-search-tips-wrap .J-suggest-list li").removeClass("hover");
						$(d).addClass("hover");
						if ($(d).hasClass("J-related")) {
							c.addClass("m-query-open");
							var g = "";
							0 == c.find(".J-suggest-related").length && (g += '\x3cdiv class\x3d"m-search-tips-query J-suggest-related"\x3e');
							g = g + '\x3cdiv class\x3d"m-search-tips-query-box J-related-box"\x3e' + ('\x3cdiv class\x3d"m-search-tips-query-title"\x3e' + $(d).attr("val") + "\x3c/div\x3e");
							if ((e = a.getData(a.getLastWord(), "sug", $(d).attr("data-index"))) && e.related && 0 < e.related.length) {
								var k = a.getData(a.getLastWord(), "sug", 0);
								var q = k.rUrlMode;
								k = k.replaceWord;
								if (q)
									for (var p = 0; p < e.related.length; p++) g += '\x3ca href\x3d"' + q.replace(k, e.related[p].linkWord) + '" class\x3d"m-search-tips-query-item"\x3e' + e.related[p].word + "\x3c/a\x3e"
							}
							g += "\x3c/div\x3e";
							0 == c.find(".J-suggest-related").length ? c.append(g + "\x3c/div\x3e") : c.find(".J-suggest-related").html(g);
							d = d.offsetTop;
							g = c.find(".J-suggest-related");
							q = c.find(".J-related-box");
							e = parseInt(q.height(), 10);
							g = parseInt(g.height(), 10);
							q.css("marginTop", (d + e + 5 >= g ? g - e - 5 : d + 5) + "px");
							f = !0;
							m = c.find(".J-related-box a")
						} else c.find(".J-suggest-related").remove(), c.removeClass("m-query-open");
						r = null
					},
					d = {
						sug: '\x3cli class\x3d"m-search-tip \x3c$ if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) return "J-related"; $\x3e" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" data-code\x3d"{catCode}" \x3c$ if (typeof _index !\x3d "undefined") { return "data-index\x3d\\"" + _index + "\\"" } $\x3e \x3e{{word}}\x3c$ if (catName) { return (" in " + "\x3cem class\x3d\\"keyword-cate\\"\x3e"+ catName + "\x3c/em\x3e"); } else if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) { return "\x3ci class\x3d\\"ob-icon icon-right\\"\x3e\x3c/i\x3e"; } $\x3e\x3c/li\x3e',
						seo: '\x3cli class\x3d"m-search-suggest-seo" unchoose\x3d"true"\x3e\x3ca href\x3d"{link}"\x3e{word}\x3c/a\x3e\x3c/li\x3e',
						ads: '\x3cli class\x3d"m-search-suggest-ads" unchoose\x3d"true"\x3e\x3cdiv class\x3d"suggest-pro cf"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" class\x3d"pro-img" ads-data\x3d"{adsData},pa:1"\x3e\x3cimg src\x3d"{img}" width\x3d"80" height\x3d"60" alt\x3d""\x3e\x3c/a\x3e\x3cdiv class\x3d"pro-links"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" ads-data\x3d"{adsData},pa:2"\x3e{name}\x3c/a\x3e\x3ca href\x3d"{comUrl}" target\x3d"_blank" class\x3d"company" ads-data\x3d"{adsData},pa:3"\x3e{comName}\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e'
					},
					f = !1,
					g = !1,
					m = null,
					n = null,
					q = $(a).find(".J-searchSuggest");
				l && (d.sug = '\x3cli class\x3d"m-search-tip \x3c$ if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) return "J-related"; $\x3e" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" data-code\x3d"{catCode}" style\x3d"\x3c$ if (related.length \x3d\x3d 0) return "display:none"; $\x3e"\x3c$ if (typeof _index !\x3d "undefined") { return "data-index\x3d\\"" + _index + "\\"" } $\x3e \x3e{{word}}\x3c/li\x3e');
				$(p).bind("keydown", function(a) {
					if (f) {
						n && n.removeClass("hover");
						switch (a.keyCode) {
							case 38:
							case 40:
								g = !1;
								n = null;
								break;
							case 37:
								a.preventDefault();
								n = n && n.prev("a").length ? n.prev("a") : m.last();
								break;
							case 39:
								n = n && n.next("a").length ? n.next("a") : m.first();
								break;
							case 13:
								n && (g = !0, n.get(0).click())
						}
						n && n.addClass("hover")
					}
				});
				k = new InputSuggest({
					carrier: p,
					targetCarrier: q,
					ignoreCase: !0,
					asyncData: {
						url: y[v]
					},
					isEncodeParam: !0,
					style: {
						container: "ul",
						highlightCls: "keyword-highlight",
						selectedCls: " ",
						listCls: "J-suggest-list"
					},
					templates: d,
					triggerOver: !1
				});
				window.inputSuggest = k;
				k.sugCustomAction = function(b) {
					g || (b.attr("data-code") && e(a, "code", b.attr("data-code")), e(a, "log_from", "1"), $(a).submit())
				};
				k.adsCustomAction = function(a, b) {
					13 == b.keyCode && a.find("a:eq(0)")[0].click()
				};
				k.on("show", function() {
					l ? q.find(".J-related").length ? q.show() : q.hide() : q.show()
				});
				k.on("hide", function() {
					q.hide()
				});
				var r = null;
				k.on("over", function(a) {
					r = a;
					b(this, r)
				});
				k.on("originalMouseMove", function(a) {
					r = a
				});
				k.on("inputChange", function() {
					var a = this.elems.$list.parent();
					a.find(".J-suggest-related").remove();
					a.removeClass("m-query-open")
				});
				$(p).bind("focus", function() {
					$.trim($(p).val()).length && k.show()
				});
				t = !0;
				var w = null,
					u = -1,
					E = h.find(".m-search-tips-wrap");
				E.on("mouseleave", ".J-suggest-list .J-related", function(a) {
					0 > u && !w && (w = {
						x: a.clientX,
						y: a.clientY
					})
				}).on("mousemove", ".J-suggest-list li", function(a) {
					if (w) {
						if (w.x !== a.clientX || w.y !== a.clientY) 45 > Math.abs(c(w, {
							x: a.clientX,
							y: a.clientY
						})) ? u = setTimeout(function() {
							r && (E.find(".J-suggest-list li").removeClass("hover"), b(k, $.extend(!0, {}, r)), r = null);
							u = -1
						}, 400) : (E.find(".J-suggest-list li").removeClass("hover"), r && b(k, r)), w = null
					} else 0 > u && (E.find(".J-suggest-list li").removeClass("hover"), r && b(k, r))
				}).on("mouseenter", ".J-suggest-related", function() {
					0 < u && (E.find(".J-suggest-list li.hover").trigger("mousemove"), clearTimeout(u), u = -1)
				})
			}
		}

		function c(a, b) {
			return 360 * Math.atan((b.y - a.y) / (b.x - a.x)) / (2 * Math.PI)
		}

		function f(b, c) {
			var d = document.createElement("input");
			d.type = "hidden";
			d.name = b;
			d.value = c;
			a.appendChild(d)
		}

		function e(a, b, c) {
			0 < $(a).find("input[name\x3d" + b + "]").length && $(a).find("input[name\x3d" + b + "]").remove();
			$(a).append('\x3cinput type\x3d"hidden" name\x3d"' + b + '" value\x3d"' + c + '"/\x3e')
		}
		var k;
		if (a && a.word) {
			var p = a.word,
				q = $(a).find(".J-searchType select")[0],
				y = {
					product: "//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26seo\x3d1\x26call\x3d?",
					supplier: "//keywordsuggestions.made-in-china.com/suggest/getEnSupplierSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"
				},
				t = !1,
				v = $(p).attr("data-suggest");
			$(a).attr("data-type");
			b();
			if (q) {
				var z = $(a).find(".J-searchType"),
					w = null,
					E, B;
				q = new MaskSelect({
					carrier: z,
					trigger: "ontouchend" in window ? "click" : "mouseover",
					control: {
						selectedHide: $(a).find(".J-selectedHide").length ? "true" === $(a).find(".J-selectedHide").val() : !1
					},
					style: {
						tagName: "m-search-select",
						listCls: "m-search-option-list",
						menuCls: "m-search-select-title",
						optCls: "m-search-option"
					}
				});
				var C;
				window.topSearchSelect = q;
				q.onchange(function() {
					v = $(this).attr("data-suggest");
					a.action = $(this).attr("data-action");
					t || b();
					k && (y[v] ? (k.changeAsync(y[v]), k.disabled(!1)) : k.disabled(!0));
					C = $(this).attr("data-width") + "px";
					z.parent().css("width", C);
					$(a).find(".m-search-input-wrap .layout-body").css("marginLeft", C);
					p.setAttribute("placeholder", this.getAttribute("placeholder"));
					w = $(a).attr("action");
					if (-1 !== w.indexOf("?"))
						if (w = w.split("?")[1], $(a).find("input[type\x3dhidden]").not("[name\x3dpreviewPersonalFlag]").remove(), -1 !== w.indexOf("\x26")) {
							E = w.split("\x26");
							for (var c = 0; c < E.length; c++) B = E[c].split("\x3d"), f(B[0], -1 !== B[1].indexOf("{word}") ? encodeURIComponent(p.value) : B[1])
						} else -1 !== w.indexOf("\x3d") && (B = w.split("\x3d"), f(B[0], B[1]))
				});
				q.triggerChange();
				q.onchange(function(a) {
					"Products" === $(this).text() ? $(".J-at-pic-search").show() : $(".J-at-pic-search").hide()
				})
			}
			$(a).bind("submit", function(b) {
				if ($(p).attr("data-customLink") && "" === $.trim(p.value)) return window.location.href = $(p).attr("data-customLink"), b.preventDefault(), !1;
				if ("" === $.trim(p.value)) return alert("Please enter a keyword at least for your search."),
					b.preventDefault(), !1;
				if (!/^[\x00-\x7F\xB0]*$/.test(p.value)) return alert("Please input the information in English only."), b.preventDefault(), !1;
				if (0 < $(".J-reset-action").length) {
					b = $(".J-reset-action").val();
					var c = $(".J-extra-param");
					0 < c.length && $(a).append(c);
					$(a).attr("action", b)
				}
			});
			(function() {
				function b() {
					g || (g = !0, $.getJSON("//www.made-in-china.com/ajaxfunction.do?xcase\x3dgetKeywordHistory\x26jsoncallback\x3d?", function(a) {
						var b = "",
							f = "\x3cul\x3e";
						a && a.type && ("1" == a.type && (b = "Popular Searches"), "2" == a.type && (b = "Your Recent Keywords"));
						b && (f += '\x3cli class\x3d"m-search-tip-title"\x3e' + b + "\x3c/li\x3e");
						if (a && a.list && 0 < a.list.length) {
							b = a.list;
							for (var g = 0; g < b.length; g++) f += '\x3cli class\x3d"m-search-tip J-search-tip-item" ' + ("2" == a.type ? 'data-word\x3d"' + d(decodeURIComponent(b[g].word).replace(/\+/g, " ")) + '"' : "") + '\x3e\x3ca class\x3d"ellipsis" href\x3d"' + (b[g].link ? b[g].link : "javascript:void(0);") + '"\x3e' + d(decodeURIComponent(b[g].word).replace(/\+/g, " ")) + "\x3c/a\x3e\x3c/li\x3e";
							"2" == a.type && (f += '\x3cli class\x3d"m-search-tip-clear"\x3e\x3ca class\x3d"link-blue J-clear-search-history" href\x3d"javascript:void(0);"\x3eClear History\x3c/a\x3e\x3c/li\x3e');
							e.html(f + "\x3c/ul\x3e");
							c()
						}
					}))
				}

				function c() {
					"none" === e.css("display") && m && "" === $.trim(p.value) && "" !== $.trim(e.html()) && (e.show(), l = $(e).find(".J-search-tip-item"), l.hover(function() {
						h && h.removeClass("hover");
						$(this).addClass("hover");
						h = $(this)
					}, function() {
						$(this).removeClass("hover")
					}))
				}

				function f() {
					e.hide();
					h && h.removeClass("hover");
					h = null
				}
				var e = $(a).find(".J-searchHistory"),
					g = !1,
					m = !1,
					l, h;
				0 !== e.length && ($(a).find(".J-inputWrap").hover(function() {
					b();
					c()
				}, function(a) {
					f()
				}), $(p).bind("keyup", function(a) {
					27 !== a.keyCode && ("" !== $.trim(p.value) ? f() : c())
				}), $(p).bind("focus", function() {
					m = !0;
					c()
				}), $(p).bind("blur", function() {
					m = !1
				}), $(window).bind("load", function() {
					document.activeElement === p && (m = !0, b())
				}), $(p).bind("keydown", function(b) {
					if (l && 0 < l.length) {
						h && h.removeClass("hover");
						switch (b.keyCode) {
							case 38:
								h = h && h.prev(".J-search-tip-item").length ? h.prev(".J-search-tip-item") : h ? null : l.last();
								break;
							case 40:
								h = h && h.next(".J-search-tip-item").length ? h.next(".J-search-tip-item") : h ? null : l.first();
								break;
							case 13:
								h && (h.attr("data-word") ? ($(this).blur(), $(this).val(h.attr("data-word")), $(a).submit()) : (h.find("a").get(0).click(), b.preventDefault()));
								break;
							case 27:
								f()
						}
						h && h.addClass("hover")
					}
				}), e.bind("click", function(b) {
					if ($(b.target).hasClass("J-clear-search-history")) return $.removeCookie && ($.removeCookie("_kwd"), $.removeCookie("_cat"), $.cookie("_kwd", "", {
						domain: ".made-in-china.com",
						expires: -1,
						path: "/"
					}), $.cookie("_cat", "", {
						domain: ".made-in-china.com",
						expires: -1,
						path: "/"
					}), e.empty(), e.hide(), g = !1, $.cookie("_kwd", "", {
						domain: "www.made-in-china.com",
						expires: -1,
						path: "/"
					}), $.cookie("_cat", "", {
						domain: "www.made-in-china.com",
						expires: -1,
						path: "/"
					})), b.preventDefault(), !1;
					if ("a" === b.target.nodeName.toLowerCase() && "javascript:void(0);" === $(b.target).attr("href")) return $.trim(b.target.innerHTML) && (p.value = b.target.childNodes[0].nodeValue, $(a).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'4'/\x3e"), $(a).submit()), b.preventDefault(), !1
				}))
			})()
		}
	}
	if (0 != $("#J-search-new-flag").length) {
		var a = {
				"\x26": "\x26amp;",
				"\x3c": "\x26lt;",
				"\x3e": "\x26gt;",
				'"': "\x26quot;",
				"'": "\x26#x27;",
				"/": "\x26#x2F;"
			},
			c = [],
			e;
		for (e in a) c.push(e);
		var k = new RegExp("[" + c.join("") + "]", "g"),
			d = function(b) {
				return null == b ? "" : ("" + b).replace(k, function(b) {
					return a[b]
				})
			},
			l = 0 < $(".J-navController").length,
			h = $("form[name\x3dsearchForm]");
		0 < h.length && h.each(function(a, c) {
			b(c)
		});
		(function() {
			function a() {
				if (!b) {
					b = setTimeout(function() {
						b = null
					}, 200);
					var a = $(".J-header-related-words");
					if (0 < a.length) {
						a.css("overflow", "inherit");
						var d = a.find(".J-related-content"),
							f = a.find(".J-related-more"),
							e = parseInt(f.width(), 10),
							g = a.find(".J-related-more-list"),
							m = g.find(".J-related-keywords"),
							h = a.find(".J-related-keywords:visible"),
							l = h.length - 1,
							n = parseInt(a[0].scrollWidth, 10);
						a = parseInt(a.width(), 10);
						e = a - e;
						d = parseInt(d.width(), 10);
						if (c !== a)
							if (c = a, n > a) {
								for (; 0 < h.eq(l).length && 0 < l && !(n = n - parseInt(h.eq(l).width(), 10) - 10, g.prepend(h.eq(l)), l--, e > n););
								f.css("display", "inline-block")
							} else if (0 < m.length) {
							g.show();
							for (l = 0; 0 < m.eq(l).length;) m.eq(l) && d + m.eq(l).width() + 10 < a && (d = d + m.eq(l).width() + 10, f.before(m.eq(l))), l++;
							g.removeAttr("style");
							0 === g.find(".J-related-keywords").length && f.hide()
						}
					}
				}
			}
			var b, c;
			if (0 < $(".J-hasSearchTip").length) {
				var d = !0;
				$(".J-inputWrap").append('\x3cdiv class\x3d"J-search-input-tip search-input-tip arrow-left"\x3e\x3cdiv class\x3d"tip-con"\x3eEnter Product Name / CAS No. / Formula / EINECS\x3ci class\x3d"J-close-tip ob-icon icon-delete"\x3e\x3c/i\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-out"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e');
				$(".m-search-input").on("focus", function() {
					$(".J-search-input-tip").hide()
				}).on("blur", function() {
					d && $(".J-search-input-tip").show()
				});
				$(document).on("click", ".J-close-tip", function() {
					$(".J-search-input-tip").hide();
					d = !1
				})
			}
			a();
			$(window).bind("resize", a)
		})()
	}
});
"undefined" !== typeof FileReader && Array.prototype.filter && ! function(b, a) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else {
		var c = a(),
			e;
		for (e in c)("object" == typeof exports ? exports : b)[e] = c[e]
	}
}(this, function() {
	return function(b) {
		function a(e) {
			if (c[e]) return c[e].exports;
			var k = c[e] = {
				exports: {},
				id: e,
				loaded: !1
			};
			return b[e].call(k.exports, k, k.exports, a), k.loaded = !0, k.exports
		}
		var c = {};
		return a.m = b, a.c = c, a.p = "", a(0)
	}([function(b, a, c) {
		c(6);
		c(7);
		b.exports = c(8)
	}, function(b, a, c) {
		(function(a) {
			! function(c) {
				function d(a, b) {
					return function() {
						a.apply(b, arguments)
					}
				}

				function e(a) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof a) throw new TypeError("not a function");
					this._value = this._state = null;
					this._deferreds = [];
					k(a, d(f, this), d(g, this))
				}

				function h(a) {
					var b = this;
					return null === this._state ? void this._deferreds.push(a) : void r(function() {
						var c = b._state ? a.onFulfilled : a.onRejected;
						if (null === c) return void(b._state ? a.resolve : a.reject)(b._value);
						try {
							var d = c(b._value)
						} catch (z) {
							return void a.reject(z)
						}
						a.resolve(d)
					})
				}

				function f(a) {
					try {
						if (a === this) throw new TypeError("A promise cannot be resolved with itself.");
						if (a && ("object" == typeof a || "function" == typeof a)) {
							var b = a.then;
							if ("function" == typeof b) return void k(d(b, a), d(f, this), d(g, this))
						}
						this._state = !0;
						this._value = a;
						n.call(this)
					} catch (t) {
						g.call(this, t)
					}
				}

				function g(a) {
					this._state = !1;
					this._value = a;
					n.call(this)
				}

				function n() {
					for (var a = 0, b = this._deferreds.length; b > a; a++) h.call(this, this._deferreds[a]);
					this._deferreds = null
				}

				function m(a, b, c, d) {
					this.onFulfilled = "function" == typeof a ? a : null;
					this.onRejected = "function" == typeof b ? b : null;
					this.resolve = c;
					this.reject = d
				}

				function k(a, b, c) {
					var d = !1;
					try {
						a(function(a) {
							d || (d = !0, b(a))
						}, function(a) {
							d || (d = !0, c(a))
						})
					} catch (z) {
						d || (d = !0, c(z))
					}
				}
				var r = "function" == typeof a && a || function(a) {
						setTimeout(a, 1)
					},
					p = Array.isArray || function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					};
				e.prototype["catch"] = function(a) {
					return this.then(null, a)
				};
				e.prototype.then = function(a, b) {
					var c = this;
					return new e(function(d, f) {
						h.call(c, new m(a, b, d, f))
					})
				};
				e.all = function() {
					var a = Array.prototype.slice.call(1 === arguments.length && p(arguments[0]) ? arguments[0] : arguments);
					return new e(function(b, c) {
						function d(e, g) {
							try {
								if (g && ("object" == typeof g || "function" == typeof g)) {
									var m = g.then;
									if ("function" == typeof m) return void m.call(g, function(a) {
										d(e, a)
									}, c)
								}
								a[e] = g;
								0 === --f && b(a)
							} catch (D) {
								c(D)
							}
						}
						if (0 === a.length) return b([]);
						for (var f = a.length,
								e = 0; e < a.length; e++) d(e, a[e])
					})
				};
				e.resolve = function(a) {
					return a && "object" == typeof a && a.constructor === e ? a : new e(function(b) {
						b(a)
					})
				};
				e.reject = function(a) {
					return new e(function(b, c) {
						c(a)
					})
				};
				e.race = function(a) {
					return new e(function(b, c) {
						for (var d = 0, f = a.length; f > d; d++) a[d].then(b, c)
					})
				};
				e._setImmediateFn = function(a) {
					r = a
				};
				e.prototype.always = function(a) {
					var b = this.constructor;
					return this.then(function(c) {
						return b.resolve(a()).then(function() {
							return c
						})
					}, function(c) {
						return b.resolve(a()).then(function() {
							throw c;
						})
					})
				};
				"undefined" != typeof b && b.exports ? b.exports = e : c.Promise || (c.Promise = e)
			}(this)
		}).call(a, c(2).setImmediate)
	}, function(b, a, c) {
		(function(b, k) {
			function d(a, b) {
				this._id = a;
				this._clearFn = b
			}
			var e = c(3).nextTick,
				h = Function.prototype.apply,
				f = Array.prototype.slice,
				g = {},
				n = 0;
			a.setTimeout = function() {
				return new d(h.call(setTimeout, window, arguments), clearTimeout)
			};
			a.setInterval = function() {
				return new d(h.call(setInterval, window, arguments), clearInterval)
			};
			a.clearTimeout = a.clearInterval = function(a) {
				a.close()
			};
			d.prototype.unref = d.prototype.ref = function() {};
			d.prototype.close = function() {
				this._clearFn.call(window, this._id)
			};
			a.enroll = function(a, b) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = b
			};
			a.unenroll = function(a) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = -1
			};
			a._unrefActive = a.active = function(a) {
				clearTimeout(a._idleTimeoutId);
				var b = a._idleTimeout;
				0 <= b && (a._idleTimeoutId = setTimeout(function() {
					a._onTimeout && a._onTimeout()
				}, b))
			};
			a.setImmediate = "function" == typeof b ? b : function(b) {
				var c = n++,
					d = 2 > arguments.length ? !1 : f.call(arguments, 1);
				return g[c] = !0, e(function() {
					g[c] && (d ? b.apply(null, d) : b.call(null), a.clearImmediate(c))
				}), c
			};
			a.clearImmediate = "function" == typeof k ? k : function(a) {
				delete g[a]
			}
		}).call(a, c(2).setImmediate, c(2).clearImmediate)
	}, function(b, a) {
		function c() {
			g = !1;
			l.length ? f = l.concat(f) : n = -1;
			f.length && e()
		}

		function e() {
			if (!g) {
				var a = setTimeout(c);
				g = !0;
				for (var b = f.length; b;) {
					l = f;
					for (f = []; ++n < b;) l && l[n].run();
					n = -1;
					b = f.length
				}
				l = null;
				g = !1;
				clearTimeout(a)
			}
		}

		function k(a, b) {
			this.fun = a;
			this.array = b
		}

		function d() {}
		var l, h = b.exports = {},
			f = [],
			g = !1,
			n = -1;
		h.nextTick = function(a) {
			var b = Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
			f.push(new k(a, b));
			1 !== f.length || g || setTimeout(e, 0)
		};
		k.prototype.run = function() {
			this.fun.apply(null, this.array)
		};
		h.title = "browser";
		h.browser = !0;
		h.env = {};
		h.argv = [];
		h.version = "";
		h.versions = {};
		h.on = d;
		h.addListener = d;
		h.once = d;
		h.off = d;
		h.removeListener = d;
		h.removeAllListeners = d;
		h.emit = d;
		h.binding = function(a) {
			throw Error("process.binding is not supported");
		};
		h.cwd = function() {
			return "/"
		};
		h.chdir = function(a) {
			throw Error("process.chdir is not supported");
		};
		h.umask = function() {
			return 0
		}
	}, function(b, a) {
		try {
			var c = (new Blob, !0)
		} catch (k) {
			c = !1
		}
		var e = c ? window.Blob : function(a, b) {
			var c = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
			return a.forEach(function(a) {
				c.append(a)
			}), c.getBlob(b ? b.type : void 0)
		};
		c = function() {
			function a() {
				var a = this,
					c = [],
					d = Array(21).join("-") + (1E16 * +new Date * Math.random()).toString(36),
					g = XMLHttpRequest.prototype.send;
				this.getParts = function() {
					return c.toString()
				};
				this.append = function(a, b, f) {
					c.push("--" + d + '\r\nContent-Disposition: form-data; name\x3d"' + a + '"');
					b instanceof Blob ? (c.push('; filename\x3d"' + (f || "blob") + '"\r\nContent-Type: ' + b.type + "\r\n\r\n"), c.push(b)) : c.push("\r\n\r\n" + b);
					c.push("\r\n")
				};
				b++;
				XMLHttpRequest.prototype.send = function(f) {
					var m, h, l = this;
					f === a ? (c.push("--" + d + "--\r\n"), h = new e(c), m = new FileReader, m.onload = function() {
						g.call(l, m.result)
					}, m.onerror = function(a) {
						throw a;
					}, m.readAsArrayBuffer(h), this.setRequestHeader("Content-Type", "multipart/form-data; boundary\x3d" + d), b--, 0 == b && (XMLHttpRequest.prototype.send = g)) : g.call(this, f)
				}
			}
			var b = 0;
			return a.prototype = Object.create(FormData.prototype), a
		}();
		b.exports = {
			Blob: e,
			FormData: ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome") && 534 >= navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() || /MQQBrowser/g.test(navigator.userAgent) ? c : FormData
		}
	}, function(b, a, c) {
		var e, k;
		(function() {
			function c(a, b) {
				b || a.match(/^data\:([^\;]+)\;base64,/im);
				a = a.replace(/^data\:([^\;]+)\;base64,/gim, "");
				for (var c = atob(a), d = c.length, f = new ArrayBuffer(d), e = new Uint8Array(f), g = 0; d > g; g++) e[g] = c.charCodeAt(g);
				return f
			}

			function l(a, b) {
				var c = new XMLHttpRequest;
				c.open("GET", a, !0);
				c.responseType = "blob";
				c.onload = function(a) {
					200 != this.status && 0 !== this.status || b(this.response)
				};
				c.send()
			}

			function h(a, b) {
				function d(c) {
					var d = f(c);
					a: {
						var e = new DataView(c);
						if (r && console.log("Got file of length " + c.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) c = (r && console.log("Not a valid JPEG"), !1);
						else {
							for (var g = 2, h = c.byteLength; h > g;) {
								var l = e,
									n = g;
								if (56 === l.getUint8(n) && 66 === l.getUint8(n + 1) && 73 === l.getUint8(n + 2) && 77 === l.getUint8(n + 3) && 4 === l.getUint8(n + 4) && 4 === l.getUint8(n + 5)) {
									h = e.getUint8(g + 7);
									0 !== h % 2 && (h += 1);
									0 === h && (h = 4);
									n = g + 8 + h;
									var k = e.getUint16(g + 6 + h);
									l = h = g = e = void 0;
									c = new DataView(c);
									for (var q = {}, p = n; n + k > p;) 28 === c.getUint8(p) && 2 === c.getUint8(p + 1) && (e = c.getUint8(p + 2), e in z && (g = c.getInt16(p + 3), h = z[e], l = m(c, p + 5, g), q.hasOwnProperty(h) ? q[h] instanceof Array ? q[h].push(l) : q[h] = [q[h], l] : q[h] = l)), p++;
									c = q;
									break a
								}
								g++
							}
							c = void 0
						}
					}
					a.exifdata = d || {};
					a.iptcdata = c || {};
					b && b.call(a)
				}
				if (a.src)
					if (/^data\:/i.test(a.src)) {
						var e = c(a.src);
						d(e)
					} else if (/^blob\:/i.test(a.src)) {
					var g = new FileReader;
					g.onload = function(a) {
						d(a.target.result)
					};
					l(a.src, function(a) {
						g.readAsArrayBuffer(a)
					})
				} else {
					var h = new XMLHttpRequest;
					h.onload = function() {
						200 == this.status || 0 === this.status ? d(h.response) : b(Error("Could not load image"));
						h = null
					};
					h.open("GET", a.src, !0);
					h.responseType = "arraybuffer";
					h.send(null)
				} else window.FileReader && (a instanceof window.Blob || a instanceof window.File || "object" === typeof a.lastModifiedDate) && (g = new FileReader, g.onload = function(a) {
					r && console.log("Got file of length " + a.target.result.byteLength);
					d(a.target.result)
				}, g.readAsArrayBuffer(a))
			}

			function f(a) {
				var b = new DataView(a);
				if (r && console.log("Got file of length " + a.byteLength), 255 != b.getUint8(0) || 216 != b.getUint8(1)) return r && console.log("Not a valid JPEG"), !1;
				var c, d = 2;
				for (a = a.byteLength; a > d;) {
					if (255 != b.getUint8(d)) return r && console.log("Not a valid marker at offset " + d + ", found: " + b.getUint8(d)), !1;
					if (c = b.getUint8(d + 1), r && console.log(c), 225 == c) return r && console.log("Found 0xFFE1 marker"), u(b, d + 4, b.getUint16(d + 2) - 2);
					d += 2 + b.getUint16(d + 2)
				}
			}

			function g(a, b, c, d, f) {
				var e, g = a.getUint16(c, !f),
					h = {};
				for (e = 0; g > e; e++) {
					var m = c + 12 * e + 2;
					var l = d[a.getUint16(m, !f)];
					!l && r && console.log("Unknown tag: " + a.getUint16(m, !f));
					h[l] = n(a, m, b, c, f)
				}
				return h
			}

			function n(a, b, c, d, f) {
				var e, g, h, l = a.getUint16(b + 2, !f);
				d = a.getUint32(b + 4, !f);
				c = a.getUint32(b + 8, !f) + c;
				switch (l) {
					case 1:
					case 7:
						if (1 == d) return a.getUint8(b + 8, !f);
						var n = 4 < d ? c : b + 8;
						b = [];
						for (e = 0; d > e; e++) b[e] = a.getUint8(n + e);
						return b;
					case 2:
						return n = 4 < d ? c : b + 8, m(a, n, d - 1);
					case 3:
						if (1 == d) return a.getUint16(b + 8, !f);
						n = 2 < d ? c : b + 8;
						b = [];
						for (e = 0; d > e; e++) b[e] = a.getUint16(n + 2 * e, !f);
						return b;
					case 4:
						if (1 == d) return a.getUint32(b + 8, !f);
						b = [];
						for (e = 0; d > e; e++) b[e] = a.getUint32(c + 4 * e, !f);
						return b;
					case 5:
						if (1 == d) return g = a.getUint32(c, !f), h = a.getUint32(c + 4, !f), e = new Number(g / h), e.numerator = g, e.denominator = h, e;
						b = [];
						for (e = 0; d > e; e++) g = a.getUint32(c + 8 * e, !f), h = a.getUint32(c + 4 + 8 * e, !f), b[e] = new Number(g / h), b[e].numerator = g, b[e].denominator = h;
						return b;
					case 9:
						if (1 == d) return a.getInt32(b + 8, !f);
						b = [];
						for (e = 0; d > e; e++) b[e] = a.getInt32(c + 4 * e, !f);
						return b;
					case 10:
						if (1 == d) return a.getInt32(c, !f) / a.getInt32(c + 4, !f);
						b = [];
						for (e = 0; d > e; e++) b[e] = a.getInt32(c + 8 * e, !f) / a.getInt32(c + 4 + 8 * e, !f);
						return b
				}
			}

			function m(a, b, c) {
				var d, f = "";
				for (d = b; b + c > d; d++) f += String.fromCharCode(a.getUint8(d));
				return f
			}

			function u(a, b) {
				if ("Exif" != m(a, b, 4)) return r && console.log("Not valid EXIF data! " + m(a, b, 4)), !1;
				var c, d, f = b + 6;
				if (18761 == a.getUint16(f)) var e = !1;
				else {
					if (19789 != a.getUint16(f)) return r && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
					e = !0
				}
				if (42 != a.getUint16(f + 2, !e)) return r && console.log("Not valid TIFF data! (no 0x002A)"), !1;
				var h = a.getUint32(f + 4, !e);
				if (8 > h) return r && console.log("Not valid TIFF data! (First offset less than 8)", a.getUint32(f + 4, !e)), !1;
				if (c = g(a, f, f + h, y, e), c.ExifIFDPointer)
					for (d in h = g(a, f, f + c.ExifIFDPointer, q, e), h) {
						switch (d) {
							case "LightSource":
							case "Flash":
							case "MeteringMode":
							case "ExposureProgram":
							case "SensingMethod":
							case "SceneCaptureType":
							case "SceneType":
							case "CustomRendered":
							case "WhiteBalance":
							case "GainControl":
							case "Contrast":
							case "Saturation":
							case "Sharpness":
							case "SubjectDistanceRange":
							case "FileSource":
								h[d] = v[d][h[d]];
								break;
							case "ExifVersion":
							case "FlashpixVersion":
								h[d] = String.fromCharCode(h[d][0], h[d][1], h[d][2], h[d][3]);
								break;
							case "ComponentsConfiguration":
								h[d] = v.Components[h[d][0]] + v.Components[h[d][1]] + v.Components[h[d][2]] + v.Components[h[d][3]]
						}
						c[d] = h[d]
					}
				if (c.GPSInfoIFDPointer)
					for (d in e = g(a, f, f + c.GPSInfoIFDPointer, t, e), e) {
						switch (d) {
							case "GPSVersionID":
								e[d] = e[d][0] + "." + e[d][1] + "." + e[d][2] + "." + e[d][3]
						}
						c[d] = e[d]
					}
				return c
			}
			var r = !1,
				p = function(a) {
					return a instanceof p ? a : this instanceof p ? void(this.EXIFwrapped = a) : new p(a)
				};
			"undefined" != typeof b && b.exports && (a = b.exports = p);
			a.EXIF = p;
			var q = p.Tags = {
					36864: "ExifVersion",
					40960: "FlashpixVersion",
					40961: "ColorSpace",
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					37121: "ComponentsConfiguration",
					37122: "CompressedBitsPerPixel",
					37500: "MakerNote",
					37510: "UserComment",
					40964: "RelatedSoundFile",
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37520: "SubsecTime",
					37521: "SubsecTimeOriginal",
					37522: "SubsecTimeDigitized",
					33434: "ExposureTime",
					33437: "FNumber",
					34850: "ExposureProgram",
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: "OECF",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBias",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: "MeteringMode",
					37384: "LightSource",
					37385: "Flash",
					37396: "SubjectArea",
					37386: "FocalLength",
					41483: "FlashEnergy",
					41484: "SpatialFrequencyResponse",
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: "FocalPlaneResolutionUnit",
					41492: "SubjectLocation",
					41493: "ExposureIndex",
					41495: "SensingMethod",
					41728: "FileSource",
					41729: "SceneType",
					41730: "CFAPattern",
					41985: "CustomRendered",
					41986: "ExposureMode",
					41987: "WhiteBalance",
					41988: "DigitalZoomRation",
					41989: "FocalLengthIn35mmFilm",
					41990: "SceneCaptureType",
					41991: "GainControl",
					41992: "Contrast",
					41993: "Saturation",
					41994: "Sharpness",
					41995: "DeviceSettingDescription",
					41996: "SubjectDistanceRange",
					40965: "InteroperabilityIFDPointer",
					42016: "ImageUniqueID"
				},
				y = p.TiffTags = {
					256: "ImageWidth",
					257: "ImageHeight",
					34665: "ExifIFDPointer",
					34853: "GPSInfoIFDPointer",
					40965: "InteroperabilityIFDPointer",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					274: "Orientation",
					277: "SamplesPerPixel",
					284: "PlanarConfiguration",
					530: "YCbCrSubSampling",
					531: "YCbCrPositioning",
					282: "XResolution",
					283: "YResolution",
					296: "ResolutionUnit",
					273: "StripOffsets",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					301: "TransferFunction",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					529: "YCbCrCoefficients",
					532: "ReferenceBlackWhite",
					306: "DateTime",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					305: "Software",
					315: "Artist",
					33432: "Copyright"
				},
				t = p.GPSTags = {
					0: "GPSVersionID",
					1: "GPSLatitudeRef",
					2: "GPSLatitude",
					3: "GPSLongitudeRef",
					4: "GPSLongitude",
					5: "GPSAltitudeRef",
					6: "GPSAltitude",
					7: "GPSTimeStamp",
					8: "GPSSatellites",
					9: "GPSStatus",
					10: "GPSMeasureMode",
					11: "GPSDOP",
					12: "GPSSpeedRef",
					13: "GPSSpeed",
					14: "GPSTrackRef",
					15: "GPSTrack",
					16: "GPSImgDirectionRef",
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: "GPSDestLatitudeRef",
					20: "GPSDestLatitude",
					21: "GPSDestLongitudeRef",
					22: "GPSDestLongitude",
					23: "GPSDestBearingRef",
					24: "GPSDestBearing",
					25: "GPSDestDistanceRef",
					26: "GPSDestDistance",
					27: "GPSProcessingMethod",
					28: "GPSAreaInformation",
					29: "GPSDateStamp",
					30: "GPSDifferential"
				},
				v = p.StringValues = {
					ExposureProgram: {
						0: "Not defined",
						1: "Manual",
						2: "Normal program",
						3: "Aperture priority",
						4: "Shutter priority",
						5: "Creative program",
						6: "Action program",
						7: "Portrait mode",
						8: "Landscape mode"
					},
					MeteringMode: {
						0: "Unknown",
						1: "Average",
						2: "CenterWeightedAverage",
						3: "Spot",
						4: "MultiSpot",
						5: "Pattern",
						6: "Partial",
						255: "Other"
					},
					LightSource: {
						0: "Unknown",
						1: "Daylight",
						2: "Fluorescent",
						3: "Tungsten (incandescent light)",
						4: "Flash",
						9: "Fine weather",
						10: "Cloudy weather",
						11: "Shade",
						12: "Daylight fluorescent (D 5700 - 7100K)",
						13: "Day white fluorescent (N 4600 - 5400K)",
						14: "Cool white fluorescent (W 3900 - 4500K)",
						15: "White fluorescent (WW 3200 - 3700K)",
						17: "Standard light A",
						18: "Standard light B",
						19: "Standard light C",
						20: "D55",
						21: "D65",
						22: "D75",
						23: "D50",
						24: "ISO studio tungsten",
						255: "Other"
					},
					Flash: {
						0: "Flash did not fire",
						1: "Flash fired",
						5: "Strobe return light not detected",
						7: "Strobe return light detected",
						9: "Flash fired, compulsory flash mode",
						13: "Flash fired, compulsory flash mode, return light not detected",
						15: "Flash fired, compulsory flash mode, return light detected",
						16: "Flash did not fire, compulsory flash mode",
						24: "Flash did not fire, auto mode",
						25: "Flash fired, auto mode",
						29: "Flash fired, auto mode, return light not detected",
						31: "Flash fired, auto mode, return light detected",
						32: "No flash function",
						65: "Flash fired, red-eye reduction mode",
						69: "Flash fired, red-eye reduction mode, return light not detected",
						71: "Flash fired, red-eye reduction mode, return light detected",
						73: "Flash fired, compulsory flash mode, red-eye reduction mode",
						77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89: "Flash fired, auto mode, red-eye reduction mode",
						93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod: {
						1: "Not defined",
						2: "One-chip color area sensor",
						3: "Two-chip color area sensor",
						4: "Three-chip color area sensor",
						5: "Color sequential area sensor",
						7: "Trilinear sensor",
						8: "Color sequential linear sensor"
					},
					SceneCaptureType: {
						0: "Standard",
						1: "Landscape",
						2: "Portrait",
						3: "Night scene"
					},
					SceneType: {
						1: "Directly photographed"
					},
					CustomRendered: {
						0: "Normal process",
						1: "Custom process"
					},
					WhiteBalance: {
						0: "Auto white balance",
						1: "Manual white balance"
					},
					GainControl: {
						0: "None",
						1: "Low gain up",
						2: "High gain up",
						3: "Low gain down",
						4: "High gain down"
					},
					Contrast: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					Saturation: {
						0: "Normal",
						1: "Low saturation",
						2: "High saturation"
					},
					Sharpness: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					SubjectDistanceRange: {
						0: "Unknown",
						1: "Macro",
						2: "Close view",
						3: "Distant view"
					},
					FileSource: {
						3: "DSC"
					},
					Components: {
						0: "",
						1: "Y",
						2: "Cb",
						3: "Cr",
						4: "R",
						5: "G",
						6: "B"
					}
				},
				z = {
					120: "caption",
					110: "credit",
					25: "keywords",
					55: "dateCreated",
					80: "byline",
					85: "bylineTitle",
					122: "captionWriter",
					105: "headline",
					116: "copyright",
					15: "category"
				};
			p.getData = function(a, b) {
				return (a instanceof Image || a instanceof HTMLImageElement) && !a.complete ? !1 : (a.exifdata ? b && b.call(a) : h(a, b), !0)
			};
			p.getTag = function(a, b) {
				return a.exifdata ? a.exifdata[b] : void 0
			};
			p.getAllTags = function(a) {
				if (!a.exifdata) return {};
				var b;
				a = a.exifdata;
				var c = {};
				for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
				return c
			};
			p.pretty = function(a) {
				if (!a.exifdata) return "";
				var b;
				a = a.exifdata;
				var c = "";
				for (b in a) a.hasOwnProperty(b) && (c += "object" == typeof a[b] ? a[b] instanceof Number ? b + " : " + a[b] + " [" + a[b].numerator + "/" + a[b].denominator + "]\r\n" : b + " : [" + a[b].length + " values]\r\n" : b + " : " + a[b] + "\r\n");
				return c
			};
			p.readFromBinaryFile = function(a) {
				return f(a)
			};
			e = [];
			k = function() {
				return p
			}.apply(a, e);
			!(void 0 !== k && (b.exports = k))
		}).call(this)
	}, function(b, a, c) {
		var e, k;
		! function() {
			function c(a, b, c) {
				var d = document.createElement("canvas");
				return l(a, d, b, c), d.toDataURL("image/jpeg", b.quality || .8)
			}

			function l(a, b, c, d) {
				var f = a.naturalWidth,
					e = a.naturalHeight,
					g = c.width,
					h = c.height,
					l = b.getContext("2d");
				l.save();
				c = c.orientation;
				switch (c) {
					case 5:
					case 6:
					case 7:
					case 8:
						b.width = h;
						b.height = g;
						break;
					default:
						b.width = g, b.height = h
				}
				switch (c) {
					case 2:
						l.translate(g, 0);
						l.scale(-1, 1);
						break;
					case 3:
						l.translate(g, h);
						l.rotate(Math.PI);
						break;
					case 4:
						l.translate(0, h);
						l.scale(1, -1);
						break;
					case 5:
						l.rotate(.5 * Math.PI);
						l.scale(1, -1);
						break;
					case 6:
						l.rotate(.5 * Math.PI);
						l.translate(0, -h);
						break;
					case 7:
						l.rotate(.5 * Math.PI);
						l.translate(g, -h);
						l.scale(-1, 1);
						break;
					case 8:
						l.rotate(-.5 * Math.PI), l.translate(-g, 0)
				}
				b = a.naturalWidth;
				1048576 < b * a.naturalHeight ? (c = document.createElement("canvas"), c.width = c.height = 1, c = c.getContext("2d"), b = (c.drawImage(a, -b + 1, 0), 0 === c.getImageData(0, 0, 1, 1).data[3])) : b = !1;
				b && (f /= 2, e /= 2);
				b = document.createElement("canvas");
				b.width = b.height = 1024;
				c = b.getContext("2d");
				if (d) {
					d = e;
					var m = document.createElement("canvas");
					m.width = 1;
					m.height = d;
					m = m.getContext("2d");
					m.drawImage(a, 0, 0);
					m = m.getImageData(0, 0, 1, d).data;
					for (var n = 0, k = d, w = d; w > n;) 0 === m[4 * (w - 1) + 3] ? k = w : n = w, w = k + n >> 1;
					d = w / d;
					d = 0 === d ? 1 : d
				} else d = 1;
				g = Math.ceil(1024 * g / f);
				h = Math.ceil(1024 * h / e / d);
				for (m = d = 0; e > d;) {
					for (k = n = 0; f > n;) c.clearRect(0, 0, 1024, 1024), c.drawImage(a, -n, -d), l.drawImage(b, 0, 0, 1024, 1024, k, m, g, h), n += 1024, k += g;
					d += 1024;
					m += h
				}
				l.restore()
			}

			function h(a) {
				if (window.Blob && a instanceof Blob) {
					var b = new Image,
						c = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
					if (!c) throw Error("No createObjectURL function found to create blob url");
					b.src = c.createObjectURL(a);
					this.blob = a;
					a = b
				}
				if (!a.naturalWidth && !a.naturalHeight) {
					var d = this;
					a.onload = function() {
						var a = d.imageLoadListeners;
						if (a) {
							d.imageLoadListeners = null;
							for (var b = 0, c = a.length; c > b; b++) a[b]()
						}
					};
					this.imageLoadListeners = []
				}
				this.srcImage = a
			}
			h.prototype.render = function(a, b, d) {
				if (this.imageLoadListeners) {
					var f = this;
					return void this.imageLoadListeners.push(function() {
						f.render(a, b, d)
					})
				}
				b = b || {};
				var e = this.srcImage,
					g = e.src,
					h = g.length,
					n = e.naturalWidth;
				e = e.naturalHeight;
				var k = b.width,
					t = b.height,
					v = b.maxWidth,
					z = b.maxHeight;
				g = this.blob && "image/jpeg" === this.blob.type || 0 === g.indexOf("data:image/jpeg") || g.indexOf(".jpg") === h - 4 || g.indexOf(".jpeg") === h - 5;
				k && !t ? t = e * k / n << 0 : t && !k ? k = n * t / e << 0 : (k = n, t = e);
				v && k > v && (k = v, t = e * k / n << 0);
				z && t > z && (t = z, k = n * t / e << 0);
				n = {
					width: k,
					height: t
				};
				for (var w in b) n[w] = b[w];
				w = a.tagName.toLowerCase();
				"img" === w ? a.src = c(this.srcImage, n, g) : "canvas" === w && l(this.srcImage, a, n, g);
				"function" == typeof this.onrender && this.onrender(a);
				d && d()
			};
			e = [];
			k = function() {
				return h
			}.apply(a, e);
			!(void 0 !== k && (b.exports = k))
		}()
	}, function(b, a) {
		b.exports = function(a) {
			function b(a, b) {
				for (var c = 0, d = 0, f = [], e = 1; 16 >= e; e++) {
					for (var g = 1; g <= a[e]; g++) f[b[d]] = [], f[b[d]][0] = c, f[b[d]][1] = e, d++, c++;
					c *= 2
				}
				return f
			}

			function c(a) {
				var b = a[0];
				for (a = a[1] - 1; 0 <= a;) b & 1 << a && (D |= 1 << F), a--, F--, 0 > F && (255 == D ? (d(255), d(0)) : d(D), F = 7, D = 0)
			}

			function d(a) {
				C.push(O[a])
			}

			function l(a) {
				d(a >> 8 & 255);
				d(255 & a)
			}

			function h(a, b, d, f, e) {
				var g, h = e[0],
					l = e[240],
					m, n = 0;
				for (m = 0; 8 > m; ++m) {
					var k = a[n];
					var r = a[n + 1];
					var p = a[n + 2];
					var q = a[n + 3];
					var t = a[n + 4];
					var v = a[n + 5];
					var x = a[n + 6];
					var y = a[n + 7];
					var u = k + y;
					k -= y;
					y = r + x;
					r -= x;
					x = p + v;
					p -= v;
					v = q + t;
					q -= t;
					t = u + v;
					u -= v;
					v = y + x;
					y -= x;
					a[n] = t + v;
					a[n + 4] = t - v;
					t = .707106781 * (y + u);
					a[n + 2] = u + t;
					a[n + 6] = u - t;
					t = q + p;
					v = p + r;
					y = r + k;
					p = .382683433 * (t - y);
					q = .5411961 * t + p;
					t = 1.306562965 * y + p;
					v *= .707106781;
					p = k + v;
					k -= v;
					a[n + 5] = k + q;
					a[n + 3] = k - q;
					a[n + 1] = p + t;
					a[n + 7] = p - t;
					n += 8
				}
				for (m = n = 0; 8 > m; ++m) k = a[n], r = a[n + 8], p = a[n + 16], q = a[n + 24], t = a[n + 32], v = a[n + 40], x = a[n + 48], y = a[n + 56], u = k + y, k -= y, y = r + x, r -= x, x = p + v, p -= v, v = q + t, q -= t, t = u + v, u -= v, v = y + x, y -= x, a[n] = t + v, a[n + 32] = t - v, t = .707106781 * (y + u), a[n + 16] = u + t, a[n + 48] = u - t, t = q + p, v = p + r, y = r + k, p = .382683433 * (t - y), q = .5411961 * t + p, t = 1.306562965 * y + p, v *= .707106781, p = k + v, k -= v, a[n + 40] = k + q, a[n + 24] = k - q, a[n + 8] = p + t, a[n + 56] = p - t, n++;
				for (m = 0; 64 > m; ++m) n = a[m] * b[m], E[m] = 0 < n ? n + .5 | 0 : n - .5 | 0;
				a = E;
				for (b = 0; 64 > b; ++b) B[H[b]] = a[b];
				a = B[0] - d;
				d = B[0];
				0 == a ? c(f[0]) : (g = 32767 + a, c(f[w[g]]), c(z[g]));
				for (f = 63; 0 < f && 0 == B[f]; f--);
				if (0 == f) return c(h), d;
				for (a = 1; f >= a;) {
					for (g = a; 0 == B[a] && f >= a; ++a);
					b = a - g;
					if (16 <= b) {
						g = b >> 4;
						for (m = 1; g >= m; ++m) c(l);
						b &= 15
					}
					g = 32767 + B[a];
					c(e[(b << 4) + w[g]]);
					c(z[g]);
					a++
				}
				return 63 != f && c(h), d
			}

			function f(a) {
				if (0 >= a && (a = 1), 100 < a && (a = 100), r != a) {
					var b = 50 > a ? Math.floor(5E3 / a) : Math.floor(200 - 2 * a);
					for (var c = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], d = 0; 64 > d; d++) {
						var f = p((c[d] * b + 50) / 100);
						1 > f ? f = 1 : 255 < f && (f = 255);
						q[H[d]] = f
					}
					c = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
					for (d = 0; 64 > d; d++) f = p((c[d] * b + 50) / 100), 1 > f ? f = 1 : 255 < f && (f = 255), y[H[d]] = f;
					b = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379];
					for (d = c = 0; 8 > d; d++)
						for (f = 0; 8 > f; f++) t[c] = 1 / (q[H[c]] * b[d] * b[f] * 8), v[c] = 1 / (y[H[c]] * b[d] * b[f] * 8), c++;
					r = a
				}
			}
			var g, n, m, u, r, p = (Math.round, Math.floor),
				q = Array(64),
				y = Array(64),
				t = Array(64),
				v = Array(64),
				z = Array(65535),
				w = Array(65535),
				E = Array(64),
				B = Array(64),
				C = [],
				D = 0,
				F = 7,
				J = Array(64),
				K = Array(64),
				N = Array(64),
				O = Array(256),
				A = Array(2048),
				H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
				P = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				Q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				R = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
				L = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65,
					6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233,
					234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
				],
				M = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
				U = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
				V = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
					152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
				];
			this.encode = function(a, b, e) {
				var k = (new Date).getTime();
				b && f(b);
				C = [];
				D = 0;
				F = 7;
				l(65496);
				l(65504);
				l(16);
				d(74);
				d(70);
				d(73);
				d(70);
				d(0);
				d(1);
				d(1);
				d(0);
				l(1);
				l(1);
				d(0);
				d(0);
				l(65499);
				l(132);
				d(0);
				for (b = 0; 64 > b; b++) d(q[b]);
				d(1);
				for (b = 0; 64 > b; b++) d(y[b]);
				b = a.width;
				var r = a.height;
				l(65472);
				l(17);
				d(8);
				l(r);
				l(b);
				d(3);
				d(1);
				d(17);
				d(0);
				d(2);
				d(17);
				d(1);
				d(3);
				d(17);
				d(1);
				l(65476);
				l(418);
				d(0);
				for (b = 0; 16 > b; b++) d(P[b + 1]);
				for (b = 0; 11 >= b; b++) d(Q[b]);
				d(16);
				for (b = 0; 16 > b; b++) d(R[b + 1]);
				for (b = 0; 161 >= b; b++) d(L[b]);
				d(1);
				for (b = 0; 16 > b; b++) d(M[b + 1]);
				for (b = 0; 11 >= b; b++) d(U[b]);
				d(17);
				for (b = 0; 16 > b; b++) d(I[b + 1]);
				for (b = 0; 161 >= b; b++) d(V[b]);
				l(65498);
				l(12);
				d(3);
				d(1);
				d(0);
				d(2);
				d(17);
				d(3);
				d(17);
				d(0);
				d(63);
				d(0);
				var p = r = b = 0;
				D = 0;
				F = 7;
				this.encode.displayName = "_encode_";
				for (var w, x, z, B, G, S = a.data, T = a.height, W = 4 * a.width, Z = 0; T > Z;) {
					for (a = 0; W > a;) {
						B = W * Z + a;
						for (G = 0; 64 > G; G++) x = G >> 3, w = 4 * (7 & G), z = B + x * W + w, Z + x >= T && (z -= W * (Z + 1 + x - T)), a + w >= W && (z -= a + w - W + 4), w = S[z++], x = S[z++], z = S[z++], J[G] = (A[w] + A[x + 256 >> 0] + A[z + 512 >> 0] >> 16) - 128, K[G] = (A[w + 768 >> 0] + A[x + 1024 >> 0] + A[z + 1280 >> 0] >> 16) - 128, N[G] = (A[w + 1280 >> 0] + A[x + 1536 >> 0] + A[z + 1792 >> 0] >> 16) - 128;
						b = h(J, t, b, g, m);
						r = h(K, v, r, n, u);
						p = h(N, v, p, n, u);
						a += 32
					}
					Z += 8
				}
				0 <= F && (a = [], a[1] = F + 1, a[0] = (1 << F + 1) - 1, c(a));
				if (l(65497), e) {
					e = C.length;
					a = new Uint8Array(e);
					for (b = 0; e > b; b++) a[b] = C[b].charCodeAt();
					C = [];
					(new Date).getTime() - k;
					return a
				}
				e = "data:image/jpeg;base64," + btoa(C.join(""));
				C = [];
				(new Date).getTime() - k;
				return e
			};
			(function() {
				var c = (new Date).getTime();
				a || (a = 50);
				for (var d = String.fromCharCode, e = 0; 256 > e; e++) O[e] = d(e);
				g = b(P, Q);
				n = b(M, U);
				m = b(R, L);
				u = b(I, V);
				d = 1;
				e = 2;
				for (var h = 1; 15 >= h; h++) {
					for (var l = d; e > l; l++) w[32767 + l] = h, z[32767 + l] = [], z[32767 + l][1] = h, z[32767 + l][0] = l;
					for (l = -(e - 1); - d >= l; l++) w[32767 + l] = h, z[32767 + l] = [], z[32767 + l][1] = h, z[32767 + l][0] = e - 1 + l;
					d <<= 1;
					e <<= 1
				}
				for (d = 0; 256 > d; d++) A[d] = 19595 * d, A[d + 256 >> 0] = 38470 * d, A[d + 512 >> 0] = 7471 * d + 32768, A[d + 768 >> 0] = -11059 * d, A[d + 1024 >> 0] = -21709 * d, A[d + 1280 >> 0] = 32768 * d + 8421375, A[d + 1536 >> 0] = -27439 * d, A[d + 1792 >> 0] = -5329 * d;
				f(a);
				(new Date).getTime() - c
			})()
		}
	}, function(b, a, c) {
		function e(a, b) {
			if (!a) throw Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
			b = b || {};
			this.defaults = {
				width: null,
				height: null,
				fieldName: "file",
				quality: .7
			};
			this.file = a;
			for (var c in b) b.hasOwnProperty(c) && (this.defaults[c] = b[c]);
			return this.init()
		}
		c.p = function(a) {
			var b = null;
			return b = a ? [].filter.call(document.scripts, function(b) {
				return -1 !== b.src.indexOf(a)
			})[0] : document.scripts[document.scripts.length - 1], b ? b.src.substr(0, b.src.lastIndexOf("/")) : null
		}("lrz") + "/";
		window.URL = window.URL || window.webkitURL;
		var k = c(1),
			d = c(4),
			l = c(5),
			h = function(a) {
				var b = /OS (\d)_.* like Mac OS X/g.exec(a),
					c = /Android (\d.*?);/g.exec(a) || /Android\/(\d.*?) /g.exec(a);
				return {
					oldIOS: b ? 8 > +b.pop() : !1,
					oldAndroid: c ? 4.5 > +c.pop().substr(0, 3) : !1,
					iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(a),
					android: /Android/g.test(a),
					mQQBrowser: /MQQBrowser/g.test(a)
				}
			}(navigator.userAgent);
		e.prototype.init = function() {
			var a = this,
				b = a.file,
				c = "string" == typeof b,
				e = /^data:/.test(b),
				h = new Image,
				l = document.createElement("canvas"),
				p = c ? b : URL.createObjectURL(b);
			if (a.img = h, a.blob = p, a.canvas = l, c ? a.fileName = e ? "base64.jpg" : b.split("/").pop() : a.fileName = b.name, !document.createElement("canvas").getContext) throw Error("浏览器不支持canvas");
			return new k(function(c, f) {
				h.onerror = function() {
					var a = Error("加载图片文件失败");
					throw f(a), a;
				};
				h.onload = function() {
					a._getBase64().then(function(a) {
						if (10 > a.length) throw a = Error("生成base64失败"),
							f(a), a;
						return a
					}).then(function(f) {
						if ("object" == typeof a.file && f.length > a.file.size) {
							var e = new FormData;
							b = a.file
						} else {
							e = new d.FormData;
							var g = 0 <= f.split(",")[0].indexOf("base64") ? atob(f.split(",")[1]) : unescape(f.split(",")[1]);
							for (var h = f.split(",")[0].split(":")[1].split(";")[0], l = new Uint8Array(g.length), m = 0; m < g.length; m++) l[m] = g.charCodeAt(m);
							b = new d.Blob([l.buffer], {
								type: h
							})
						}
						e.append(a.defaults.fieldName, b, a.fileName.replace(/\..+/g, ".jpg"));
						c({
							formData: e,
							fileLen: +b.size,
							base64: f,
							base64Len: f.length,
							origin: a.file,
							file: b
						});
						for (var n in a) a.hasOwnProperty(n) && (a[n] = null);
						URL.revokeObjectURL(a.blob)
					})
				};
				!e && (h.crossOrigin = "*");
				h.src = p
			})
		};
		e.prototype._getBase64 = function() {
			var a = this,
				b = a.img,
				c = a.file,
				d = a.canvas;
			return new k(function(f) {
				try {
					l.getData("object" == typeof c ? c : b, function() {
						a.orientation = l.getTag(this, "Orientation");
						a.resize = a._getResize();
						a.ctx = d.getContext("2d");
						d.width = a.resize.width;
						d.height = a.resize.height;
						a.ctx.fillStyle = "#fff";
						a.ctx.fillRect(0, 0, d.width, d.height);
						h.oldIOS ? a._createBase64ForOldIOS().then(f) : a._createBase64().then(f)
					})
				} catch (r) {
					throw Error(r);
				}
			})
		};
		e.prototype._createBase64ForOldIOS = function() {
			var a = this.img,
				b = this.canvas,
				d = this.defaults,
				e = this.orientation;
			return new k(function(f) {
				! function() {
					var g = [c(6)];
					(function(c) {
						c = new c(a); - 1 < "5678".indexOf(e) ? c.render(b, {
							width: b.height,
							height: b.width,
							orientation: e
						}) : c.render(b, {
							width: b.width,
							height: b.height,
							orientation: e
						});
						f(b.toDataURL("image/jpeg", d.quality))
					}).apply(null, g)
				}()
			})
		};
		e.prototype._createBase64 = function() {
			var a = this.resize,
				b = this.img,
				d = this.canvas,
				e = this.ctx,
				l = this.defaults;
			switch (this.orientation) {
				case 3:
					e.rotate(180 * Math.PI / 180);
					e.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 6:
					e.rotate(90 * Math.PI / 180);
					e.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 8:
					e.rotate(270 * Math.PI / 180);
					e.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				case 2:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.drawImage(b, 0, 0, a.width, a.height);
					break;
				case 4:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(180 * Math.PI / 180);
					e.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 5:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(90 * Math.PI / 180);
					e.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 7:
					e.translate(a.width, 0);
					e.scale(-1, 1);
					e.rotate(270 * Math.PI / 180);
					e.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				default:
					e.drawImage(b, 0, 0, a.width, a.height)
			}
			return new k(function(a) {
				h.oldAndroid || h.mQQBrowser || !navigator.userAgent ? ! function() {
					var b = [c(7)];
					(function(b) {
						b = new b;
						var c = e.getImageData(0, 0, d.width, d.height);
						a(b.encode(c, 100 * l.quality))
					}).apply(null, b)
				}() : a(d.toDataURL("image/jpeg", l.quality))
			})
		};
		e.prototype._getResize = function() {
			var a = this.img,
				b = this.defaults,
				c = b.width;
			b = b.height;
			var d = {
				width: a.width,
				height: a.height
			};
			if (-1 < "5678".indexOf(this.orientation) && (d.width = a.height, d.height = a.width), d.width < c || d.height < b) return d;
			a = d.width / d.height;
			for (c && b ? a >= c / b ? d.width > c && (d.width = c, d.height = Math.ceil(c / a)) : d.height > b && (d.height = b, d.width = Math.ceil(b * a)) : c ? c < d.width && (d.width = c, d.height = Math.ceil(c / a)) : b && b < d.height && (d.width = Math.ceil(b * a), d.height = b); 3264 <= d.width || 2448 <= d.height;) d.width *= .8, d.height *= .8;
			return d
		};
		window.lrz = function(a, b) {
			return new e(a, b)
		};
		window.lrz.version = "4.9.40";
		b.exports = window.lrz
	}])
});
(function(b) {
	function a(b, d) {
		lrz(b, d).then(function(f) {
			c(500)(f.file.size, "kb") ? e(f.formData, {
				ImgWidth: r,
				ImgHeight: p,
				zipSize: f.file.size,
				orgSize: b.size
			}) : (f = JSON.parse(JSON.stringify(d)), f.quality -= .1, a(b, f))
		})["catch"](function(a) {
			m.close();
			l()
		})
	}

	function c(a) {
		return function(b, c) {
			var d = (b / 1024).toFixed(2),
				e = (d / 1024).toFixed(2);
			return parseFloat({
				kb: d,
				mb: e
			}[c]) <= a ? !0 : !1
		}
	}

	function e(a, c) {
		a.append("orgwidth", c.ImgWidth);
		a.append("orgheight", c.ImgHeight);
		a.append("zipsize", c.zipSize);
		a.append("orgsize", c.orgSize);
		$.ajax({
			type: "post",
			url: "//file.made-in-china.com/img-search/upload",
			data: a,
			processData: !1,
			contentType: !1,
			crossDomain: !0,
			success: function(a) {
				200 === a.code ? (f(a.data.statUrl), b.location.href = a.data.url) : (m.close(), h())
			},
			error: function(a) {
				h();
				console.log(a);
				m.close()
			}
		})
	}

	function k(a, b, c) {
		m.show();
		var d = new FileReader;
		d.readAsDataURL(a);
		d.onload = function(d) {
			var e = new Image;
			e.src = d.target.result;
			e.onload = function(d) {
				this.width ? (r = this.width, p = this.height, b(a)) : (m.close(), c())
			};
			e.onerror = function(a) {
				m.close();
				c()
			}
		}
	}

	function d(b) {
		m.show();
		if (c(500)(b.size, "kb")) {
			var d = new FormData;
			d.append("multipartFile", b);
			e(d, {
				ImgWidth: r,
				ImgHeight: p,
				zipSize: b.size,
				orgSize: b.size
			})
		} else a(b, u)
	}

	function l() {
		$(".m-search-img-tips").empty().append("Upload failed.Incorrect image format. Supported formats：JPG,PNG,BMP.");
		$(".m-search-img-tips").addClass("imgUpload-error-tip")
	}

	function h() {
		$(".m-search-img-tips").empty().append("No network connection. Please check your networksettings and try again.");
		$(".m-search-img-tips").addClass("imgUpload-error-tip")
	}

	function f(a) {
		var b = new Image;
		b.src = a;
		"complete" === b.readyState ? b = null : b.onload = function() {
			b = null
		}
	}
	try {
		var g = "localStorage" in window && null !== window.localStorage && window.Promise
	} catch (q) {
		g = !1
	}
	if (g) {
		$(".J-at-pic-search").show();
		var n = {
				"image/jpeg": !0,
				"image/bmp": !0,
				"image/png": !0
			},
			m = {
				show: function() {
					$(".m-search-img-loading").css("display", "table")
				},
				close: function() {
					$(".m-search-img-loading").css("display", "none")
				}
			},
			u = {
				quality: .7,
				fieldName: "multipartFile"
			},
			r = 0,
			p = 0;
		m = {
			show: function() {
				$(".m-search-img-loading").css("visibility", "visible")
			},
			close: function() {
				$(".m-search-img-loading").css("visibility", "hidden")
			}
		};
		(function() {
			$(".J-at-pic-search").on("click", function(a) {
				"none" === $(".J-at-search-img-wrap").css("display") && ($(".J-at-search-img-wrap").show(), $(".J-searchHistory").hide());
				a.preventDefault();
				a.stopPropagation()
			});
			$(".J-inputWrap .m-search-input").on("focus", function() {
				$(".J-at-search-img-wrap").hide();
				0 < $(".J-inputWrap .J-at-pic-search").length && $(this).css("padding-right", "45px")
			});
			$(document).on("click", function(a) {
				a.target !== $(".J-at-search-img-wrap").get(0) && ($(".J-at-search-img-wrap").hide(), $(".m-search-img-tips").removeClass("imgUpload-error-tip"), $(".m-search-img-tips").empty().html("Upload Image \x3cspan\x3e (Max 20MB per Image) \x3c/span\x3e"))
			});
			$(".J-at-search-img-wrap").on("click", function(a) {
				a.stopPropagation()
			});
			0 < $(".J-searchType option:selected").length && "Products" !== $(".J-searchType option:selected").text() && $(".J-at-pic-search").hide();
			$(".J-search-upload-img").on("change", function(a) {
				var b = a.target && a.target.files && a.target.files[0];
				$(a.target).val("");
				b && (c(20)(b.size, "mb") ? n[b.type] ? k(b, d, l) : l() : ($(".m-search-img-tips").empty().append("Upload failed. Max image size is 20MB"), $(".m-search-img-tips").addClass("imgUpload-error-tip")))
			})
		})()
	}
})(window);
$(function() {
	function b(a, b) {
		var d = document.createElement("input");
		d.type = "hidden";
		d.name = a;
		d.value = b;
		c.appendChild(d)
	}
	if (!(0 < $("#J-search-new-flag").length)) {
		var a, c = document.getElementById("SearchForm");
		if (c && c.word) {
			var e = c.word;
			if (window.InputSuggest) {
				var k = new InputSuggest({
					carrier: e,
					asyncData: {
						url: "//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"
					},
					isEncodeParam: !0,
					style: {
						container: "div",
						highlightCls: "blue",
						selectedCls: "hover",
						listCls: "dropmenu-list",
						itemMarkCls: "suggestItem"
					},
					templates: {
						sug: '\x3ca href\x3d"javascript:;" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" J-code\x3d"{catCode}"\x3e{{word}}\x3c$ if (catName) { return " in "; } $\x3e\x3cspan class\x3dhighlight-category\x3e{catName}\x3c/span\x3e\x3c/a\x3e',
						ads: '\x3cdiv class\x3d"suggest-pro cf"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" class\x3d"pro-img" ads-data\x3d"{adsData},pa:1"\x3e\x3cimg src\x3d"{img}" width\x3d"80" height\x3d"60" alt\x3d""\x3e\x3c/a\x3e\x3cdiv class\x3d"pro-links"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" ads-data\x3d"{adsData},pa:2"\x3e{name}\x3c/a\x3e\x3ca href\x3d"{comUrl}" target\x3d"_blank" class\x3d"company" ads-data\x3d"{adsData},pa:3"\x3e{comName}\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'
					}
				});
				k.sugCustomAction = function(a) {
					a.attr("J-code") && $(c).find("input[name\x3dcode]").val(a.attr("J-code"));
					$(c).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'1'/\x3e");
					c.submit()
				};
				k.adsCustomAction = function(a, b) {
					13 == b.keyCode && a.find("a:eq(0)")[0].click()
				};
				("1" === $("#searchType select").val() || "2" === $("#searchType select").val()) && k && k.disabled(!0);
				k.on("show", function() {
					$(c).find(".J-inputWrap").addClass("search-focus")
				});
				k.on("hide", function() {
					$(c).find(".J-inputWrap").removeClass("search-focus")
				});
				$(e).bind("focus", function() {
					$.trim($(e).val()).length && k.show()
				})
			}
			if (document.getElementById("searchType")) {
				var d = function(a) {
					k && ("0" === a || "1" === a ? ("0" === a ? k.changeAsync("//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?") : k.changeAsync("//keywordsuggestions.made-in-china.com/suggest/getEnSupplierSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"), k.disabled(!1)) : k.disabled(!0))
				};
				var l = new MaskSelect({
					carrier: document.getElementById("searchType"),
					control: {
						selectedHide: !0
					}
				});
				var h = l.value();
				d(h);
				l.onchange(function() {
					h = l.value();
					a = $(this).attr("data-args");
					c.action = $(this).attr("data-action");
					d(h);
					e.setAttribute("placeholder", this.getAttribute("placeholder"))
				})
			}
			$(c).bind("submit", function(d) {
				if ("" === $.trim(e.value)) return alert("Please enter a keyword at least for your search."), d.preventDefault(), !1;
				if (!/^[\x00-\x7F\xB0]*$/.test(e.value)) return alert("Please input the information in English only."),
					d.preventDefault(), !1;
				a || -1 == c.action.indexOf("?") || (a = c.action.substr(c.action.indexOf("?") + 1));
				if (a)
					if ($(c).find("input[type\x3dhidden]").remove(), -1 !== a.indexOf("\x26")) {
						var f = a.split("\x26");
						for (var h = 0; h < f.length; h++) {
							var k = f[h].split("\x3d");
							b(k[0], -1 !== k[1].indexOf("{word}") ? encodeURIComponent(e.value) : k[1])
						}
					} else -1 !== a.indexOf("\x3d") && (k = a.split("\x3d"), b(k[0], k[1]));
				if (l && "2" === l.value()) return window.location.href = "//sourcing.made-in-china.com/sourcingrequest?keyword\x3d" + encodeURIComponent(e.value) + "\x26type\x3dkeyword\x26requestfor\x3d1", d.preventDefault(), !1
			});
			(function() {
				var a = $(c).find(".J-history"),
					b = !1;
				$(c).find(".J-inputWrap").hover(function() {
					b || (b = !0, $.getJSON("//www.made-in-china.com/ajaxfunction.do?xcase\x3dgetKeywordHistory\x26jsoncallback\x3d?", function(b) {
						var c = '\x3cdiv class\x3d"history-word J-hisWord"\x3e\x3ca href\x3d"//www.made-in-china.com/browsing-history/"\x3e\x3cstrong\x3eYour Recent KeyWords: \x3c/strong\x3e\x3c/a\x3e';
						if (b && b.list && 0 < b.list.length) {
							b = b.list;
							for (var d = 0; d < b.length; d++) c += '\x3ca href\x3d"javascript:;"\x3e' + decodeURIComponent(b[d].word.replace(/\+/g, " ")) + "\x3c/a\x3e" + (d === b.length - 1 ? "" : ", ");
							a.html(c + "\x3c/div\x3e")
						}
					}));
					"" === e.value && "" !== $.trim(a.html()) && a.show()
				}, function(b) {
					a.hide()
				});
				$(e).bind("keyup", function() {
					"" === e.value && "" !== $.trim(a.html()) ? a.show() : a.hide()
				});
				$(c).find(".J-history").bind("click", function(a) {
					if ("a" === a.target.nodeName.toLowerCase() && "javascript:;" === $(a.target).attr("href")) return $.trim(a.target.innerHTML) && (e.value = a.target.childNodes[0].nodeValue, $(c).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'4'/\x3e"), $(c).submit()), a.preventDefault(), !1
				})
			})();
			(function() {
				if ($("#searchWordMore").length) {
					var a = $("#searchWordMore");
					a.find(".dropmenu-hd").bind("mouseover", function() {
						a.addClass("hover");
						a.find(".icon").html("\x26#xf0d8;")
					});
					a.bind("mouseleave", function() {
						a.removeClass("hover");
						a.find(".icon").html("\x26#xf0d7;")
					})
				}
				if ($("#qpMore").length && 0 === $("#linkMoreN").length) {
					var b = null;
					$("#qpKeys").show();
					$("#qpMore").before($("#linkMore").clone().removeClass().attr("id", "linkMoreN").removeClass("mr").mouseover(function() {
						var a = $("#linkMoreN").position(),
							b = document.documentElement && document.documentElement.clientWidth + document.documentElement.scrollLeft || document.body && document.body.clientWidth + document.body.scrollLeft;
						a.left + $("#qpMore").width() > b ? $("#qpKeys").css({
							position: "absolute",
							right: "-53px"
						}) : $("#qpKeys").removeAttr("style");
						$("#qpMore").css({
							left: a.left - 8 + "px",
							top: a.top + 5 + "px"
						}).show()
					})).hover(function() {
						clearTimeout(b)
					}, function() {
						clearTimeout(b);
						b = setTimeout(function() {
							$("#qpMore").hide()
						}, 400)
					})
				}
			})();
			(function() {
				window.advancedSearch = function() {
					var a = "",
						b = "";
					var c = 0 < $('.dropItem input[name\x3d"type"]').size() ? $('.dropItem input[name\x3d"type"]').val() : "999";
					0 < $('.dropItem input[name\x3d"code"]').size() && (b = $('.dropItem input[name\x3d"code"]').val(), b = "-1" == b || "0" == b ? "" : b);
					switch (l.value()) {
						case "0":
							a = "product";
							break;
						case "1":
							a = "supplier";
							break;
						case "2":
							a = "sourcing";
							break;
						case "4":
						case "5":
						case "6":
							a = "offer"
					}
					var d = jQuery.trim(jQuery("#searchWord").val());
					for (var e = "", h = 0; h < d.length; h++) {
						var k = d.substring(h, h + 1);
						if ("?" == k) return alert("Please input an legal keyword(s)."), !1;
						"." != k && (e = /^\W+$/.test(k) ? e + " " : e + k)
					}
					e = $.trim(e);
					d = e.replace(/_/ig, " ").split(" ");
					e = "";
					for (h = 0; h < d.length; h++) "" !== d[h] && (e += (0 === h ? "" : "_") + d[h]);
					window.location.href = "/advanced-search/" + e + "/" + a + "-" + b + "-nolimit-" + c + "--.html"
				}
			})();
			(function() {
				$("#advanced-search").length && ($("#advanced-search").attr("href", "javascript:;"), $("#advanced-search").on("click", function() {
					advancedSearch()
				}))
			})()
		}
	}
});
jQuery(function() {
	var b = function() {},
		a = "LOGON_CALLBACK_" + (new Date).valueOf(),
		c = {
			style: {
				ifrWidth: 560,
				ifrHeight: 345,
				width: 340,
				height: "auto"
			},
			text: {
				title: "Login",
				close: ""
			},
			url: "",
			callback: b,
			closeBack: b
		},
		e = null,
		k = function(a) {
			if (e) return e;
			e = this;
			this._ = {};
			this.elems = {};
			this.config = jQuery.extend(!0, {}, c, a);
			this.init()
		};
	k.prototype = {
		init: function() {},
		load: function(b, c) {
			this.unload();
			window[a] = this.config.callback;
			var d = [];
			document.domain !== window.location.hostname && d.push("domain\x3d" + document.domain);
			d.push("callback\x3d" + a);
			var e = c; - 1 !== e.indexOf("?") ? (e = e.split("?"), e[1] = e[1] ? e[1] + "\x26" + d.join("\x26") : d.join("\x26"), e.join("?")) : -1 !== e.indexOf("#") ? (e = e.splig("#"), e[1] = "?" + d.join("\x26"), e.join("#")) : d.join("\x26");
			showPoploginArtdialog(window.location.href, b, "1")
		},
		unload: function() {
			window[a] = b
		}
	};
	window.LoginLayer2 = k
});
(function(b, a) {
	"undefined" !== typeof module && module.exports ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : b.JFixed = a.call(b)
})(this, function() {
	function b() {
		return parseInt(e.body.scrollTop ? e.body.scrollTop : e.documentElement.scrollTop) || 0
	}

	function a(a, b, c) {
		window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent && a.attachEvent("on" + b, function() {
			c()
		})
	}
	if (!this.JFixed) {
		var c = this;
		var e = document;
		var k = new Abstract({
			fixed: function() {},
			unFixed: function() {},
			fixedEvent: function() {},
			unFixedEvent: function() {},
			scrollEvent: function() {},
			onScroll: function() {},
			position: function() {},
			triggerTop: function() {}
		});
		k = new Clazz(k, {
			config: {
				carrier: null,
				triggerTop: null,
				holder: {
					left: null,
					right: null,
					bottom: null
				},
				isRestore: !1,
				position: {
					top: null,
					right: null,
					bottom: null,
					left: null
				},
				isAbsolute: !1
			},
			inherit: Component
		}, function(a) {
			this.setConfig(a)
		});
		k.extend({
			__init: function() {
				if (this._.init) return this;
				if (!this.config.carrier) throw "carrier must be not null!";
				this._.ISSUPPORT = !(!+"\v1" && !c.XMLHttpRequest);
				this._.ISIE = !+"\v1";
				this._.viewHeight = e.documentElement.clientHeight;
				this._.height = 0;
				this._.width = 0;
				this._.flag = !0;
				this._.init = !1;
				this._.ISSUPPORT || (e.getElementsByTagName("html")[0].style.cssText = "background-image:url(about:blank); background-attachment:fixed;");
				this.config.isAbsolute && (this._.ISSUPPORT = !1);
				this.position();
				this.__holdCheck()
			},
			fixed: function() {
				var a = this.config.carrier,
					b = a.style.visibility,
					c = a.style.display;
				this.__init();
				"none" === c && (a.style.position = "absolute", a.style.visibility = "hidden", a.style.display = "");
				this._.height = a.offsetHeight;
				this._.width = a.offsetWidth;
				"none" === c && (a.style.visibility = b, a.style.display = "none");
				if (!this.config.triggerTop || this.__checkDistance()) a.style.position = this._.ISSUPPORT ? "fixed" : "absolute", this.fire("fixed");
				this._.init || this.__events();
				this._.init = !0;
				return this
			},
			unFixed: function() {
				this._.flag = !1;
				this.config.carrier.style.position = this.config.isRestore ? this._.hisPosition || "static" : "static";
				this.fire("unfixed")
			},
			triggerTop: function(a) {
				if (a && !isNaN(a)) return this.config.triggerTop = a, this._.flag && this.fixed(), this
			},
			position: function(a, b) {
				var c = a || this.config.position;
				if (!c) return "";
				b && (this.config.holder = b);
				var d = this.config.carrier;
				c.top && c.bottom && (c.bottom = null);
				c.left && c.right && (c.right = null);
				for (var e in c) d.style[e] = null !== c[e] ? parseInt(c[e], 10) + "px" : "auto"
			},
			onScroll: function(a) {
				this._.onScroll = a;
				return this
			},
			__events: function() {
				var d = this,
					l = null;
				a(c, "scroll", function(a) {
					d._.flag && (d.__holdCheck(), d.config.triggerTop && d.__checkDistance(), d.fire("scroll", {
						event: a,
						top: b(),
						viewHeight: d._.viewHeight
					}), d._.onScroll && d._.onScroll(a, b(), d._.viewHeight))
				});
				a(c, "resize", function() {
					d._.flag && (d._.viewHeight = e.documentElement.clientHeight, !d._.ISIE || d._.ISSUPPORT || l ? d.__holdCheck() : l = setTimeout(function() {
						l = null;
						d.__fixedIE6Top()
					}, 200))
				});
				this.__domReady(function() {
					d.config.triggerTop || (d.config.carrier.style.display = "");
					d.__holdCheck()
				})
			},
			__domReady: function(a) {
				function b() {
					try {
						document.documentElement.doScroll("left"), e()
					} catch (r) {
						setTimeout(b, 1)
					}
				}
				if ("function" === typeof a) {
					var c = document.addEventListener ? "DomContentLoaded" : "onreadystatechange",
						d = !1;
					var e = function() {
						d || (d = !0, a.call(window))
					};
					if ("complete" === document.readyState) return e();
					if (document.addEventListener) {
						var k = function() {
							document.removeEventListener(c, k, !1);
							e()
						};
						document.addEventListener(c, k, !1);
						window.addEventListener("load", e, !1)
					} else if (document.attachEvent) {
						var m = function() {
							"complete" === document.readyState && (document.detachEvent(c, m), e())
						};
						document.attachEvent(c, m);
						window.attachEvent("onload", e);
						try {
							var u = null == window.frameElement
						} catch (r) {}
						document.documentElement.doScroll && u && b()
					}
					d && a.call(window)
				}
			},
			__checkDistance: function() {
				var a = !1,
					c = this.config.carrier;
				this.config.triggerTop && (b() >= this.config.triggerTop && (a = !0), a ? (c.style.position = this._.ISSUPPORT ? "fixed" : "absolute", this.fire("fixed")) : (c.style.position = this.config.isRestore ? this._.hisPosition || "static" : "static", this.fire("unfixed")));
				return a
			},
			__fixedIE6Top: function() {
				var a = this.config,
					c = b();
				null !== a.position.top && (a.carrier.style.top = c + parseInt(a.position.top, 10) + "px");
				null !== a.position.bottom && (a.carrier.style.top = c + this._.viewHeight - this._.height - parseInt(a.position.bottom, 10) + "px")
			},
			__holdCheck: function() {
				if (this._.flag) {
					var a = this.config,
						c = a.holder,
						h = 0;
					var f = f = 0;
					this._.ISSUPPORT || this.__fixedIE6Top();
					c.left && (f = parseInt(a.position.right, 10), h = e.body.clientWidth / 2 - this._.width - c.left, f && !isNaN(f) && f <= h ? (a.carrier.style.left = "auto", a.carrier.style.right = f + "px") : (a.carrier.style.left = e.body.clientWidth / 2 + c.left + "px", a.carrier.style.right = "auto"));
					c.right && (f = parseInt(a.position.left, 10), h = e.body.clientWidth / 2 - this._.width - c.right, a.carrier.style.left = f && !isNaN(f) && f <= h ? f + "px" : e.body.clientWidth / 2 - c.right - this._.width + "px");
					if (c.bottom) {
						f = b();
						var g = h = e.body.clientHeight - this._.viewHeight - f;
						h = 0 >= h ? 0 : h;
						if (this._.ISSUPPORT) {
							if (0 === this.config.position.top || this.config.position.top) a.carrier.style.top = "auto", g = e.body.clientHeight - f - this._.height;
							g <= c.bottom ? a.carrier.style.bottom = c.bottom - h + (null === a.position.bottom ? 0 : parseInt(a.position.bottom, 10)) + "px" : (a.carrier.style.top = null === a.position.top ? "auto" : parseInt(a.position.top, 10) + "px", a.carrier.style.bottom = null === a.position.bottom ? "auto" : parseInt(a.position.bottom, 10) + "px")
						} else h <= c.bottom && (a.carrier.style.top = f + this._.viewHeight - this._.height - (c.bottom - h) - (null === a.position.bottom ? 0 : parseInt(a.position.bottom, 10)) + "px")
					}
				}
			}
		});
		return k
	}
});
(function(b, a) {
	"undefined" !== typeof module && module.exports ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : b.SlideNav = a.call(b)
})(this, function() {
	function b(d) {
		if (a || !c.jQuery && !c.$) return a;
		this instanceof b && (a = this);
		this.c = $.extend(k, d);
		this.__init()
	}
	var a = null,
		c = window,
		e = document,
		k = {
			containerTag: "ul",
			containerCls: "float-action-box",
			itemTag: "li",
			template: '\x3cli data-aliases\x3d"{aliases}"\x3e\x3ca href\x3d"{link}" class\x3d"{cls}" rel\x3d"nofollow" target\x3d"{target}"\x3e\x3c/a\x3e\x3cdiv class\x3d"popup-wrap"\x3e\x3cdiv class\x3d"popup"\x3e\x3cdiv class\x3d"popup-box"\x3e{text}\x3cdiv class\x3d"arrow"\x3e\x3cdiv class\x3d"arrow-inner"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e',
			hoverCls: "hover",
			language: "en-US"
		},
		d = {
			"en-US": {
				goTop: "Back to Top",
				liveChat: "Any questions about our website?\x3cbr/\x3eTalk to me!",
				tm: {
					onLine: "Chat with Supplier",
					offLine: "Leave a message"
				},
				contactNow: "Contact Now",
				contact: "Contact Buyer Service",
				survey: "Do Survey, Get Rewards",
				help: "Help"
			},
			"zh-CN": {
				goTop: "返回顶部",
				liveChat: "在线客服",
				contact: "联系买家服务",
				survey: "在线调查"
			}
		};
	b.prototype = {
		constructor: this,
		__init: function() {
			this._ = {};
			this._.order = 0;
			this._.mapping = {};
			this._.language = d[this.c.language] || {};
			this.carrier = e.createElement(this.c.containerTag);
			this.carrier.style.display = "none";
			this.carrier.className = this.c.containerCls || "";
			this._addCss();
			e.body.appendChild(this.carrier)
		},
		__events: function(a, b, c) {
			this.c.hoverCls && $(a).hover(function() {
				$(this).children(".popup-wrap").addClass("open")
			}, function() {
				$(this).children(".popup-wrap").stop().removeClass("open")
			});
			a && c && $(a).bind("click", b, c)
		},
		__render: function(a) {
			if (a) {
				var b = a.template || this.c.template;
				a.link || (a.link = "javascript:;");
				a.cls || (a.cls = "");
				a.target || (a.target = "_blank");
				if (b)
					for (var c in a) b = b.replace(new RegExp("{" + c + "}", "gi"), a[c] || "");
				return b
			}
		},
		_addCss: function() {
			if (!1 !== this.c.cssLink) {
				var a = document.createElement("link");
				a.type = "text/css";
				a.rel = "stylesheet";
				a.href = null;
				this.c.cssLink ? a.href = this.c.cssLink : $(".J-float-action-box-expo").length ? a.href = $(".J-float-action-box-expo").val() + "?t\x3d" + (new Date).getTime() : a.href = "//www.micstatic.com/gb/js/business/plugs/slideNav/float-action-box.css?t\x3d" + (new Date).getTime();
				document.getElementsByTagName("head")[0].appendChild(a)
			}
		},
		addItem: function(a, c) {
			var d = "slideNav_" + this._.order,
				e;
			this._.order++;
			"string" === typeof a && 0 === this.getItem(a).length && ((e = b[a]) && (e.view.aliases = a), this._.language[a] && (e.view.text = this._.language[a]));
			a instanceof Object && (a.aliases = d, e = {
				view: a,
				handle: c
			});
			if (e && (!e.isShow || e.isShow())) {
				e.init && e.init();
				var h = $(this.__render(e.view));
				$(this.carrier).append(h);
				this.__events(h, d, e.handle);
				this._.mapping[d] || (this._.mapping[d] = e)
			}
		},
		getItem: function(a) {
			return $(this.carrier).find(this.c.itemTag + "[data-aliases\x3d" + a + "]")
		},
		show: function() {
			this.carrier.style.display = "block"
		},
		hide: function() {
			this.carrier.style.display = "none"
		},
		getLanguage: function() {
			return this._.language
		},
		destroy: function() {
			$(this.carrier).children().remove();
			$(this.carrier).remove();
			a = this.c = this.carrier = this._ = null
		}
	};
	return b
});
window.SlideNav && (SlideNav.defaultsInit = function(b) {
	function a() {
		var a = 10,
			b = document.documentElement.clientHeight,
			d = document.documentElement.clientWidth,
			e = document.body.clientHeight,
			k = {},
			m = {};
		0 < $("#footer").length ? a = parseInt($("#footer").height(), 10) - 150 : 0 < $(".m-footer").length && (a = parseInt($(".m-footer").height(), 10) - 150);
		if (1200 >= d) k.left = null, k.right = 10;
		else if (k.right = null, 0 < $(".grid").length) {
			var u = parseInt($(".grid").eq(0).width(), 10);
			m.left = 50 >= (d - u) / 2 || 60 >= (c - u) / 2 ? u / 2 - 54 : u / 2 + 10
		} else m.left = 505;
		b > e ? k.top = e / 2 : (k.bottom = 150, m.bottom = a);
		k.right = 20;
		k.left = null;
		m.left = null;
		return {
			pos: k,
			holder: m
		}
	}
	var c = parseInt(window.screen.width, 10);
	if (window.JFixed) {
		var e = a(),
			k = new JFixed({
				carrier: b.carrier,
				holder: e.holder,
				position: e.pos
			});
		b.getItem("goTop") && (k.onScroll(function() {
			SlideNav.goTop.toggle(b.getItem("goTop"))
		}), SlideNav.goTop.toggle(b.getItem("goTop")));
		k.fixed();
		if (k.position) {
			var d = null;
			$(window).bind("resize", function() {
				d || (d = setTimeout(function() {
					var b = a();
					k.position(b.pos, b.holder);
					k.__holdCheck();
					clearTimeout(d);
					d = null
				}, 300))
			})
		}
	}
}, SlideNav.goTop = {
	view: {
		text: "Back to Top",
		cls: "f-go-top"
	},
	handle: function(b) {
		$("html, body").animate({
			scrollTop: 0
		}, 200);
		b.preventDefault()
	},
	toggle: function(b) {
		var a = document.body.scrollTop || document.documentElement.scrollTop || 0,
			c = document.documentElement.clientHeight;
		2 <= Math.floor(document.body.scrollHeight / c) && a > .7 * c ? $(b).css("visibility", "visible") : $(b).css("visibility", "hidden")
	}
}, SlideNav.liveChat = {
	view: {
		text: "Live Chat",
		cls: "f-live-chat",
		link: location.protocol + "//membercenter.made-in-china.com/tm.do?xcase\x3dforopentmwin"
	},
	handle: function(b) {
		window.open("//membercenter.made-in-china.com/tm.do?xcase\x3dforopentmwin\x26referrer\x3d" + encodeURIComponent(document.location.href), "kefu", "toolbar\x3dno,location\x3dno,directories\x3dno,resizable\x3dyes,status\x3dyes,menubar\x3dno,scrollbars\x3dyes,width\x3d860,height\x3d600,left\x3d0,top\x3d0");
		b.preventDefault();
		b.stopPropagation()
	}
}, SlideNav.rfq = {
	view: {
		text: "Post Sourcing Request",
		cls: "f-rfq"
	},
	init: function() {
		0 < $("#search-word-for-rfq").length && $("#search-word-for-rfq").val() ? SlideNav.rfq.view.link = "//purchase.made-in-china.com/trade-service/quotation-request.html?source\x3d4\x26prodName\x3d" + escape($("#search-word-for-rfq").val()) : 0 < $("#search-word-for-rfq").length && (SlideNav.rfq.view.link = "//purchase.made-in-china.com/trade-service/quotation-request.html?source\x3d4")
	},
	isShow: function() {
		return 0 < $("#search-word-for-rfq").length ? !0 : !1
	}
}, SlideNav.tm = {
	view: {
		text: "Talk to Me",
		cls: "f-tm-on"
	},
	handle: null,
	isShow: function() {
		return !!$("#J-SlideNav-TM").length
	},
	init: function() {
		0 < $("#J-SlideNav-TM").length && (SlideNav.tm.view = {
			text: "Talk to Me",
			aliases: "tm",
			cls: "f-tm-on",
			dataId: $("#J-SlideNav-TM").attr("dataid"),
			processor: "fixed2",
			cid: $("#J-SlideNav-TM").attr("cid"),
			template: '\x3cli data-aliases\x3d"{aliases}"\x3e\x3ca href\x3d"{link}" style\x3d"display:none;" dataId\x3d"{dataId}" processor\x3d"{processor}" cid\x3d"{cid}" class\x3d"{cls}" rel\x3d"nofollow" target\x3d"_blank"\x3e\x3c/a\x3e\x3cdiv class\x3d"popup-wrap"\x3e\x3cdiv class\x3d"popup"\x3e\x3cdiv class\x3d"popup-box"\x3e\x3cspan\x3e{text}\x3c/span\x3e\x3cdiv class\x3d"arrow"\x3e\x3cdiv class\x3d"arrow-inner"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e'
		}, SlideNav.tm.__waitTM(function() {
			var b = new SlideNav,
				a = b.getItem("tm"),
				c = function(a) {
					this.$elem = jQuery('\x3ca rel\x3d"nofollow" class\x3d"f-tm-on" href\x3d"javascript:void(\'Chat Now!\')"\x3e\x3c/a\x3e');
					this.$elem.insertAfter(a)
				};
			c.prototype = {
				online: function(a) {
					this.$elem.removeClass("f-tm-off").show();
					this.$elem.parent().find("span").html(b.getLanguage().tm.onLine || "");
					"function" === typeof a && a()
				},
				offline: function(a) {
					this.$elem.addClass("f-tm-off").show();
					this.$elem.parent().find("span").html(b.getLanguage().tm.offLine || "");
					"function" === typeof a && a()
				}
			};
			executeTM({
				params: {
					holderSelector: a.find("a")
				},
				render: {
					processors: {
						fixed2: c
					}
				}
			})
		}))
	},
	__waitTM: function(b) {
		var a = null;
		window.executeTM && 0 !== (new SlideNav).getItem("tm").length ? b && b() : a = setInterval(function() {
			window.executeTM && 0 < (new SlideNav).getItem("tm").length && (clearInterval(a), b && b())
		}, 1E3)
	}
}, SlideNav.contactNow = {
	view: {
		text: "Contact Now",
		cls: "f-contact"
	},
	init: function() {
		0 < $("#J-SlideNav-Contact").length && $("#J-SlideNav-Contact").val() && (SlideNav.contactNow.view.link = $("#J-SlideNav-Contact").val())
	},
	isShow: function() {
		return 0 < $("#J-SlideNav-Contact").length && $("#J-SlideNav-Contact").val() ? !0 : !1
	}
}, SlideNav.contact = {
	view: {
		text: "Contact Buyer Service",
		cls: "f-contact-buyer-service",
		link: "//sourcing.made-in-china.com/trades-service-from/trds-contact/index/contact-us.html"
	},
	handle: null
}, SlideNav.survey = {
	view: {
		text: "Do Survey, Get Rewards",
		cls: "f-survey"
	},
	handle: null,
	init: function() {
		var b = $("#J-SlideNav-Survey"),
			a = !!b.attr("isLogin"),
			c = !!b.attr("isAbroadIP"),
			e = b.attr("comId");
		b = !!b.attr("isBuyer");
		"string" === typeof SlideNav.survey.view.link && (SlideNav.survey.view.link += e);
		SlideNav.survey.view.link instanceof Array && (!a && c && (SlideNav.survey.view.link = SlideNav.survey.view.link[0] + e), a && b && (SlideNav.survey.view.link = SlideNav.survey.view.link[1] + e))
	},
	isShow: function() {
		var b = $("#J-SlideNav-Survey");
		if (!b || !SlideNav.survey.view.link) return !1;
		var a = !!b.attr("isLogin"),
			c = !!b.attr("isAbroadIP"),
			e = b.attr("comId");
		b = !!b.attr("isBuyer");
		return (!a && c || a && b) && e ? !0 : !1
	}
}, SlideNav.help = {
	view: {
		text: "Help",
		cls: "f-help"
	},
	handle: null
});
"made-in-china.com" != document.domain && (document.domain = "made-in-china.com");
var receiveHandle = function(b) {
	var a = document.getElementById("popupIframe");
	if (a) try {
		var c = b.data.split(/[\*x]/);
		c[0] = parseFloat(c[0]);
		c[1] = parseFloat(c[1]);
		isNaN(c[0]) || "number" !== typeof c[0] || (a.width = c[0]);
		isNaN(c[1]) || "number" !== typeof c[1] || (a.height = c[1]);
		setTimeout(function() {
			artDialog && artDialog.list.popupDialog && artDialog.list.popupDialog._reset()
		}, 0)
	} catch (e) {}
};
window.addEventListener ? window.addEventListener("message", receiveHandle, !1) : window.attachEvent("onmessage", receiveHandle);

function showPoploginCommon(b, a, c, e) {
	b = e + "?currentPage\x3d" + encodeURIComponent(b);
	a && (b = b + "\x26" + a);
	c && "1" == c && (b += "\x26isForSupplier\x3d1");
	a = "\x3ciframe id\x3d'popupIframe' frameborder\x3d'0' src\x3d'" + b + "' scrolling\x3d'no' width\x3d'430' height\x3d'350'\x3e\x3c/iframe\x3e";
	window.postMessage || (a = "\x3ciframe id\x3d'popupIframe' frameborder\x3d'0' src\x3d'" + b + " width\x3d'430' height\x3d'350'\x3e\x3c/iframe\x3e");
	return new artDialog({
		id: "popupDialog",
		cancel: !1,
		title: !1,
		lock: !0,
		opacity: .4,
		padding: "0",
		content: a
	})
}

function closePopupDialog() {
	setTimeout(function() {
		artDialog.get("popupDialog").close()
	}, 0)
}

function showPoploginArtdialog(b, a, c) {
	return showPoploginCommon(b, a, c, "https://login.made-in-china.com/sign-in-popup/")
}

function showPopRegisterArtdialog(b, a, c) {
	return showPoploginCommon(b, a, c, "https://login.made-in-china.com/join-popup/")
}
$(function() {
	var b = function() {
		var a = document.createElement("div");
		return function(b, e) {
			if (b && e) {
				var c = "function" === typeof e;
				b = "length" in b && "function" !== typeof b ? b : [b];
				for (var d, l = 0; l < b.length; l++)
					if (d = b[l]) {
						var h = d;
						d = c ? e.call(d, l) : e;
						a.innerHTML = "";
						"string" === typeof d && (a.innerHTML = d);
						(d = a.firstChild.cloneNode(!1)) && 1 === d.nodeType && (h.parentNode && h.parentNode.insertBefore(d, h), d.appendChild(h))
					}
			}
		}
	}.call(this);
	document.getElementById("headRfqList") && (document.getElementById("rfqPostBox") || (b(document.getElementById("headRfqList"), "\x3cdiv class\x3d'rfq-post-box' id\x3d'rfqPostBox'\x3e\x3c/div\x3e"), document.getElementById("rfqPostBox").innerHTML = document.getElementById("rfqPostBox").innerHTML + '\x3cdiv class\x3d"rfq-post-tip" style\x3d"display:none"\x3e\x3cdiv class\x3d"rfq-post-tipcont"\x3e\x3ch3\x3eEasy Sourcing\x3c/h3\x3e\x3cp class\x3d"rfq-sub-title"\x3eMore Convenient, More Efficient\x3c/p\x3e\x3cul class\x3d"rfq-info-list"\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eOne request, multiple quotes\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eVerified suppliers matching\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eQuotes comparison and sample request\x3c/li\x3e\x3c/ul\x3e\x3cdiv\x3e\x3ca id\x3d"headRfqList-sub" href\x3d"//purchase.made-in-china.com/trade-service/quotation-request.html?source\x3d2" target\x3d"_blank" class\x3d"btn btn-main"\x3ePost Your Request NOW\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-top"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e', b = document.createElement("link"), b.type = "text/css", b.rel = "stylesheet", b.href = "//www.micstatic.com/gb/js/business/showRfqList/rfq-post-dropmenu.css?t\x3d20190626", document.getElementsByTagName("head")[0].appendChild(b)), document.getElementById("rfqPostBox").onmouseover = function() {
		$(".rfq-post-tip").show()
	}, document.getElementById("rfqPostBox").onmouseout = function() {
		$(".rfq-post-tip").hide()
	})
});
jQuery(function() {
	var b = function(a) {
			window.MIC_SRVRNM = document.domain;
			var b = window.location.protocol + "//" + window.location.host + (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/transition.do",
				c = new LoginLayer2({
					callback: function(b) {
						c.unload();
						$.ajax({
							url: (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/headInfo.do",
							type: "POST",
							error: function() {},
							dataType: "json",
							success: function(b) {
								var c = b[0].status,
									d = b[0].welcomeUserName,
									e = b[0].newMailNumber,
									f = encodeURIComponent(window.location.href);
								b = $(".state").eq(0);
								d = '\x3cli class\x3d"user" id\x3d"welUser"\x3eWelcome \x3ca href\x3d"//membercenter.made-in-china.com"\x3e\x3cstrong\x3e' + (d || "") + "\x3c/strong\x3e\x3c/a\x3e!\x3c/li\x3e";
								e = '\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"' + e + ' New Message(s)" title\x3d"' + e + ' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e' + e + "\x3c/a\x3e\x3c/li\x3e";
								f = '\x3cli class\x3d"sign"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d' + f + '"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';
								c ? (b.empty(), b.html(d + e + f)) : (b.empty(), b.html('\x3cli\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"//membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x3ca rel\x3d"nofollow" href\x3d"javascript:test();"\x3eSign In\x3c/a\x3e\x3c/li\x3e'));
								"function" === typeof a && a()
							}
						})
					}
				});
			c.load("https://login.made-in-china.com?xcase\x3dlogonPage4Showroom\x26logonInCode\x3d17\x26newShow\x3d1", b)
		},
		a = function(a, b, c) {
			var d = a[0].getBoundingClientRect();
			c = c || "succ";
			var e = "",
				h = "You can manage your favorites in account center.";
			"info" === c ? (e = "add-fav-tip-info", h = "prod" === b ? "Your favorite products have reached the maximum limit of 100." : "Your favorite companies have reached the maximum limit of 100.") : "error" === c && (e = "add-fav-tip-error", h = "Oops, something went wrong. Please try again later.");
			var k = $('\x3cdiv class\x3d"add-fav-tip ' + e + '"\x3e' + h + "\x3c/div\x3e");
			k.appendTo("body");
			b = d.top + (window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0) - k.height() - 15;
			var l = d.left + (window.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
			k.css({
				top: b,
				left: l
			});
			setTimeout(function() {
				var b = -Math.abs(a.width() - k.width()) / 2;
				0 > b + l && (b = -l);
				k.css({
					top: d.top + (window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0) - k.height() - 15,
					marginLeft: b
				});
				k.addClass("add-fav-tip-am");
				setTimeout(function() {
					k.remove()
				}, 3E3)
			}, 0)
		},
		c = function(c) {
			$.ajax({
				url: "//www.made-in-china.com/addFav.do",
				type: "POST",
				dataType: "jsonp",
				jsonp: "callBackParam",
				data: {
					userName: c.attr("cz-username"),
					sourceId: c.attr("cz-sourceid"),
					sourceType: c.attr("cz-sourcetype")
				},
				timeout: 6E4,
				success: function(d) {
					if (d) switch (d.execFlag) {
						case "00":
							b(function() {
								c.click()
							});
							break;
						case "01":
							a(c, null, "error");
							break;
						case "02":
							a(c, c.attr("cz-sourcetype"), "info");
							break;
						case "03":
							c.addClass("J-added already-fav"),
								$(".J-fav-icon", c).removeClass("icon-star").addClass("icon-star-f"), a(c)
					}
				},
				error: function() {}
			})
		},
		e = function(c) {
			$.ajax({
				url: "//www.made-in-china.com/addFav.do?xcase\x3dcalc",
				type: "POST",
				dataType: "jsonp",
				jsonp: "callBackParam",
				data: {
					userName: c.attr("cz-username"),
					sourceId: c.attr("cz-sourceid"),
					sourceType: c.attr("cz-sourcetype")
				},
				timeout: 6E4,
				success: function(d) {
					if (d) switch (d.execFlag) {
						case "00":
							b(function() {
								c.click()
							});
							break;
						case "01":
							a(c, null, "error");
							break;
						case "02":
						case "03":
							c.removeClass("J-added already-fav"),
								$(".J-fav-icon", c).removeClass("icon-star-f").addClass("icon-star")
					}
				},
				error: function() {}
			})
		};
	$(document).on("click", ".J-add2Fav", function(a) {
		a.preventDefault();
		var b = $(a.target);
		b.is(".J-add2Fav") || (b = b.parents(".J-add2Fav:first"));
		$(a.currentTarget).is(".J-added") ? e(b) : c(b)
	});
	$(document).on("click", ".J-company-sign", function(a) {
		a.preventDefault();
		b(function() {
			window.location.reload()
		})
	});
	var k = !1;
	$("#add2Fav2").click(function(c) {
		c.preventDefault();
		if (k) return !1;
		c.preventDefault();
		c = $("#add2Fav2").attr("cz-username");
		var d = $("#add2Fav2").attr("cz-sourceid"),
			e = $("#add2Fav2").attr("cz-sourcetype"),
			f = "/addFav.do?userName\x3d" + c + "\x26sourceId\x3d" + d + "\x26sourceType\x3d" + e;
		$.ajax({
			url: "//www.made-in-china.com" + f,
			type: "post",
			dataType: "jsonp",
			jsonp: "callBackParam",
			success: function(c) {
				c && ("00" == c.execFlag ? b(function() {
					k = !0;
					$.ajax({
						url: "//www.made-in-china.com" + f,
						dataType: "jsonp",
						jsonp: "callBackParam",
						success: function(b) {
							b && ("01" == b.execFlag ? a($("#add2Fav2"), null, "error") : "02" == b.execFlag ? a($("#add2Fav2"), $("#add2Fav2").attr("cz-sourcetype"), "info") : "03" == b.execFlag && ($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target", "_blank").attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"), $("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"https://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target", "_blank"), $("#add2Fav2").unbind(), $("#add2Pic").unbind()))
						}
					})
				}) : "01" == c.execFlag ? a($("#add2Fav2"), null, "error") : "02" == c.execFlag ? a($("#add2Fav2"), $("#add2Fav2").attr("cz-sourcetype"), "info") : "03" == c.execFlag && ($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target", "_blank").attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"), $("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"https://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target", "_blank"), k = !0, $("#add2Fav2").unbind(), $("#add2Pic").unbind()))
			},
			error: function() {}
		})
	});
	$("#add2Pic").click(function(c) {
		c.preventDefault();
		if (k) return !1;
		c = $("#add2Pic").attr("cz-username");
		var d = $("#add2Pic").attr("cz-sourceid"),
			e = $("#add2Pic").attr("cz-sourcetype"),
			f = "/addFav.do?userName\x3d" + c + "\x26sourceId\x3d" + d + "\x26sourceType\x3d" + e;
		$.ajax({
			url: "//www.made-in-china.com" + f,
			type: "post",
			dataType: "jsonp",
			jsonp: "callBackParam",
			success: function(c) {
				c && ("00" == c.execFlag ? b(function() {
					k = !0;
					$.ajax({
						url: "//www.made-in-china.com" + f,
						dataType: "jsonp",
						jsonp: "callBackParam",
						success: function(b) {
							b && ("01" == b.execFlag ? a($("#add2Pic"), null, "error") : "02" == b.execFlag ? a($("#add2Pic"), $("#add2Pic").attr("cz-sourcetype"), "info") : "03" == b.execFlag && ($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target", "_blank").attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"), $("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"https://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target", "_blank"), $("#add2Fav2").unbind(), $("#add2Pic").unbind()))
						}
					})
				}) : "01" == c.execFlag ? a($("#add2Pic"), null, "error") : "02" == c.execFlag ? a($("#add2Pic"), $("#add2Pic").attr("cz-sourcetype"), "info") : "03" == c.execFlag && ($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target", "_blank").attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"), $("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"//img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href", "//membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target", "_blank"), k = !0, $("#add2Fav2").unbind(), $("#add2Pic").unbind()))
			},
			error: function() {}
		})
	});
	window.buyReport = function(a, b, c) {
		document.domain = "made-in-china.com";
		$.ajax({
			url: (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/headInfo.do",
			type: "post",
			dataType: "json",
			success: function(d) {
				var e = "//www.made-in-china.com/reviewAR.do?xcase\x3dreviewARForFree\x26comId\x3d" + a + "\x26reportId\x3d" + b;
				if ("1" == d[0].status) window.location.href = "//www.made-in-china.com/reviewAR.do?xcase\x3dreviewARForFree\x26comId\x3d" + a + "\x26reportId\x3d" + b;
				else return d = '\x3ciframe id\x3d"ifr" src\x3d"//membercenter.made-in-china.com/account.do?xcase\x3dreportLogin\x26nextPage\x3d' + encodeURIComponent(e) + "\x26comId\x3d" + a + "\x26reportId\x3d" + b + "\x26userName\x3d" + c + '" frameborder\x3d"0" allowTransparency\x3d"true" style\x3d"margin:0 auto;padding:0; border:0; width:650px;overflow:static;height:610px;z-index:999;position:absolute;z-index:9999"\x3e\x3c/iframe\x3e', jQuery("body").append(d), jQuery("#ifr").css("top", jQuery(document).scrollTop() + jQuery(window).height() / 2 - 100).css("left", jQuery(window).width() / 2 - 300), $("body").mask && $("body").mask("", "", "0.4"), $(".maskdivgen").bgiframe && $(".maskdivgen").bgiframe(), !1
			}
		})
	};
	window.viweReport = function(a, b, c) {
		document.domain = "made-in-china.com";
		$.ajax({
			url: (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/headInfo.do",
			type: "post",
			async: !1,
			dataType: "json",
			success: function(d) {
				if ("1" == d[0].status) window.open("/readFreeTransition?comId\x3d" + a + "\x26recId\x3d" + b + "\x26org\x3d" + c);
				else return showPoploginArtdialog(window.location.href, "viewReportFree\x3d0\x26fromAthena\x3dtrue\x26arReportId\x3d" + b), !1
			}
		})
	};
	$(".J-add2Rep").click(function(a) {
		a.preventDefault();
		var b = $(this).attr("cz-reportId"),
			c = $(this);
		$.ajax({
			url: "//www.made-in-china.com/ajaxfunction.do?xcase\x3dgetShoppingCart\x26callback\x3d?",
			type: "post",
			dataType: "json",
			success: function(a) {
				100 > a.number ? $.ajax({
					url: "//www.made-in-china.com/reportcart.do?xcase\x3dadd\x26callback\x3d?",
					type: "post",
					dataType: "json",
					data: {
						reportId: b
					},
					success: function(a) {
						c.html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eEdit Report Cart').attr("href", "//www.made-in-china.com/report-cart/")
					}
				}) : window.open("//www.made-in-china.com/reportcart.do?xcase\x3dlist\x26over\x3d1", "")
			}
		});
		c.unbind("click", arguments.callee)
	});
	$(".ar-preview .title").click(function() {
		$(this).siblings(".ar-preview-cnt").toggleClass("show");
		$(this).find(".sh-ico").toggleClass("sh-ico-less")
	});
	$(".sample-cnt-link").hover(function() {
		$(this).parents(".ar-sample-act").addClass("on-top").end().siblings(".sample-cnt").show()
	}, function() {
		$(this).parents(".ar-sample-act").removeClass("on-top").end().siblings(".sample-cnt").hide()
	})
});
window.JS_lazyload_loaded_hook || (window.JS_lazyload_loaded_hook = !0, function() {
	var b = jQuery.event.special,
		a = "D" + +new Date,
		c = "D" + (+new Date + 1);
	b.scrollstart = {
		setup: function() {
			var c, k = function(a) {
				var d = arguments;
				c ? clearTimeout(c) : (a.type = "scrollstart", jQuery.event.handle.apply(this, d));
				c = setTimeout(function() {
					c = null
				}, b.scrollstop.latency)
			};
			jQuery(this).bind("scroll", k).data(a, k)
		},
		teardown: function() {
			jQuery(this).unbind("scroll", jQuery(this).data(a))
		}
	};
	b.scrollstop = {
		latency: 300,
		setup: function() {
			var a,
				k = function(c) {
					var d = this,
						e = arguments;
					a && clearTimeout(a);
					a = setTimeout(function() {
						a = null;
						c.type = "scrollstop";
						jQuery.event.handle.apply(d, e)
					}, b.scrollstop.latency)
				};
			jQuery(this).bind("scroll", k).data(c, k)
		},
		teardown: function() {
			jQuery(this).unbind("scroll", jQuery(this).data(c))
		}
	}
}(), function(b) {
	b.fn.lazyload = function(a) {
		var c = {
			ignoreRight: !1,
			threshold: 0,
			failure_limit: 0,
			event: "scroll",
			effect: "show",
			container: window,
			skip_invisible: !0,
			no_horizontal_limit: !1
		};
		a && (void 0 !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), b.extend(c, a));
		var e = this;
		0 == c.event.indexOf("scroll") && b(c.container).bind(c.event, function(a) {
			var d = 0;
			e.each(function() {
				if (!(c.skip_invisible && !b(this).is(":visible") || b.abovethetop(this, c) || !c.no_horizontal_limit && b.leftofbegin(this, c)))
					if (!b.belowthefold(this, c) && (c.no_horizontal_limit || !b.rightoffold(this, c))) b(this).trigger("appear");
					else if (++d > c.failure_limit) return !1
			});
			a = b.grep(e, function(a) {
				return !a.loaded
			});
			e = b(a)
		});
		this.each(function() {
			var a = this;
			a.loaded = !1;
			b(a).one("appear", function() {
				this.loaded || b("\x3cimg /\x3e").bind("load", function() {
					b(a).hide().attr("src", b(a).attr("data-original"))[c.effect](c.effectspeed);
					a.loaded = !0
				}).attr("src", b(a).attr("data-original"))
			});
			0 != c.event.indexOf("scroll") && b(a).bind(c.event, function(c) {
				a.loaded || b(a).trigger("appear")
			})
		});
		b(c.container).trigger(c.event);
		return this
	};
	b.belowthefold = function(a, c) {
		return (void 0 === c.container || c.container === window ? b(window).height() + b(window).scrollTop() : b(c.container).offset().top + b(c.container).height()) <= b(a).offset().top - c.threshold
	};
	b.rightoffold = function(a, c) {
		return c.ignoreRight ? !1 : (void 0 === c.container || c.container === window ? b(window).width() + b(window).scrollLeft() : b(c.container).offset().left + b(c.container).width()) <= b(a).offset().left - c.threshold
	};
	b.abovethetop = function(a, c) {
		return (void 0 === c.container || c.container === window ? b(window).scrollTop() : b(c.container).offset().top) >= b(a).offset().top + c.threshold + b(a).height()
	};
	b.leftofbegin = function(a, c) {
		return (void 0 === c.container || c.container === window ? b(window).scrollLeft() : b(c.container).offset().left) >= b(a).offset().left + c.threshold + b(a).width()
	};
	b.extend(b.expr[":"], {
		"below-the-fold": function(a) {
			return b.belowthefold(a, {
				threshold: 0,
				container: window
			})
		},
		"above-the-fold": function(a) {
			return !b.belowthefold(a, {
				threshold: 0,
				container: window
			})
		},
		"right-of-fold": function(a) {
			return b.rightoffold(a, {
				threshold: 0,
				container: window
			})
		},
		"left-of-fold": function(a) {
			return !b.rightoffold(a, {
				threshold: 0,
				container: window
			})
		}
	})
}(jQuery));
$(function() {
	$("img[data-original]").lazyload({
		threshold: 250,
		failurelimit: 100
	})
});
var statMonitor = function(b) {
	var a = function(a) {
			/^(https?:)?\/\//i.test(a) || (a = window.location.protocol + "//" + window.location.host + (/^\//.test(a) ? "" : "/") + a);
			a = /(^(https?:)?\/\/[^?#]*)(\?[^#]*)?(\#.*)?$/i.exec(a);
			return {
				action: a[1] || "",
				search: a[2] || "",
				hash: a[3] || ""
			}
		},
		c = function(a) {
			var b = {};
			a.replace(/[?&]([^=]+)\=([^&]*)/g, function(a, c, d) {
				b[c] = d
			});
			return b
		},
		e = function(d) {
			if (d && "A" === d.tagName.toUpperCase()) {
				if (/function[\s\S]+?\[native\s+code\]/.test(d.click + "")) {
					var e = b(d).clone(!1).addClass("J-data-ignore")[0];
					document.body.appendChild(e);
					e.click()
				} else {
					var f = document.createElement("form");
					if (f.submit) {
						var h = a(d.href),
							g = c(h.search);
						f.action = h.action;
						f.method = "get";
						f.target = d.target || "_self";
						for (var k in g) d = document.createElement("input"), d.type = "hidden", d.name = k, d.value = g[k], f.appendChild(d);
						document.body.appendChild(f);
						f.submit && f.submit()
					}
				}
				setTimeout(function() {
					e && e.parentNode.removeChild(e);
					f && f.parentNode.removeChild(f)
				}, 0)
			}
		},
		k = function(d, e) {
			d = a(d);
			var f = c(d.search);
			b.extend(!0, f, e);
			var h = [],
				g;
			for (g in f) h.push(g + "\x3d" + f[g]);
			return d.action + "?" + h.join("\x26")
		},
		d = function(a) {
			var b = !1,
				c = a.target || "_self";
			"A" === a.tagName.toUpperCase() && "_self" === c && (b = !0);
			return b
		},
		l = "touchend" in document.body ? "touchend" : "click",
		h = function() {},
		f = function(a, b) {
			a.onload = h;
			a.onerror = h;
			clearTimeout(b)
		},
		g = function(a, b, c, d) {
			var e = -1;
			c = "function" === typeof c ? c : h;
			var g = new Image;
			g.onload = function() {
				f(g, e);
				c.call(g)
			};
			g.onerror = function() {
				f(g, e);
				c.call(g)
			};
			e = setTimeout(function() {
				f(g, e);
				c.call(g)
			}, d || 300);
			g.src = k(a, b)
		},
		n = function(a, b) {
			var c = arguments.callee;
			return a && "A" === a.tagName.toUpperCase() ? a : a === b ? null : c(a.parentNode, b)
		},
		m = {
			SYNC: function(a, b, c, d, f) {
				a.preventDefault();
				var h = n(a.target, b);
				g(c, d, function() {
					h && e(h)
				}, f)
			},
			ASYNC: function(a, b) {
				g(a, b, null, 1E5)
			}
		},
		u = function(a, c, e, f, h) {
			f = "undefined" === typeof f || null === f ? d : f;
			var g = function(d) {
				var g = d.target;
				b(g).is(a) || (g = b(g).parents(a)[0]);
				if (!g || b(g).is(".J-data-ignore")) return !0;
				var k = "function" === typeof f ? f(g) : !!f,
					l = ("function" === typeof e ? e(g) : e) || {};
				k ? m.SYNC(d, g, c, l, h) : m.ASYNC(c, l, h)
			};
			if (b.fn.on) b(document.body).on(l, a, g);
			else b(a, document.body).bind(l, g)
		};
	u.send = g;
	return u
}.call(this, window.jQuery);
statMonitor = function(b) {
	var a = function(a) {
			/^(https?:)?\/\//i.test(a) || (a = window.location.protocol + "//" + window.location.host + (/^\//.test(a) ? "" : "/") + a);
			a = /(^(https?:)?\/\/[^?#]*)(\?[^#]*)?(\#.*)?$/i.exec(a);
			return {
				action: a[1] || "",
				search: a[2] || "",
				hash: a[3] || ""
			}
		},
		c = function(a) {
			var b = {};
			a.replace(/[?&]([^=]+)\=([^&]*)/g, function(a, c, d) {
				b[c] = d
			});
			return b
		},
		e = function(d) {
			if (d && "A" === d.tagName.toUpperCase()) {
				if (/function[\s\S]+?\[native\s+code\]/.test(d.click + "")) {
					var e = b(d).clone(!1).addClass("J-data-ignore")[0];
					document.body.appendChild(e);
					e.click()
				} else {
					var f = document.createElement("form");
					if (f.submit) {
						var g = a(d.href),
							h = c(g.search);
						f.action = g.action;
						f.method = "get";
						f.target = d.target || "_self";
						for (var k in h) d = document.createElement("input"), d.type = "hidden", d.name = k, d.value = h[k], f.appendChild(d);
						document.body.appendChild(f);
						f.submit && f.submit()
					}
				}
				setTimeout(function() {
					e && e.parentNode.removeChild(e);
					f && f.parentNode.removeChild(f)
				}, 0)
			}
		},
		k = function(d, e) {
			d = a(d);
			var f = c(d.search);
			b.extend(!0, f, e);
			var g = [],
				h;
			for (h in f) g.push(h + "\x3d" + f[h]);
			return d.action + "?" + g.join("\x26")
		},
		d = function(a) {
			var b = !1,
				c = a.target || "_self";
			"A" === a.tagName.toUpperCase() && "_self" === c && (b = !0);
			return b
		},
		l = "touchend" in document.body ? "touchend" : "click",
		h = function() {},
		f = function(a, b) {
			a.onload = h;
			a.onerror = h;
			clearTimeout(b)
		},
		g = function(a, b, c, d) {
			var e = -1;
			c = "function" === typeof c ? c : h;
			var g = new Image;
			g.onload = function() {
				f(g, e);
				c.call(g)
			};
			g.onerror = function() {
				f(g, e);
				c.call(g)
			};
			e = setTimeout(function() {
				f(g, e);
				c.call(g)
			}, d || 300);
			g.src = k(a, b)
		},
		n = function(a, b) {
			var c = arguments.callee;
			return a && "A" === a.tagName.toUpperCase() ? a : a === b ? null : c(a.parentNode, b)
		},
		m = {
			SYNC: function(a, b, c, d, f) {
				a.preventDefault();
				var h = n(a.target, b);
				g(c, d, function() {
					h && e(h)
				}, f)
			},
			ASYNC: function(a, b) {
				g(a, b, null, 1E5)
			}
		},
		u = function(a, c, e, f, g) {
			f = "undefined" === typeof f || null === f ? d : f;
			var h = function(d) {
				var h = d.target;
				b(h).is(a) || (h = b(h).parents(a)[0]);
				if (!h || b(h).is(".J-data-ignore")) return !0;
				var k = "function" === typeof f ? f(h) : !!f,
					l = ("function" === typeof e ? e(h) : e) || {};
				k ? m.SYNC(d, h, c, l, g) : m.ASYNC(c, l, g)
			};
			if (b.fn.on) b(document.body).on(l, a, h);
			else b(a, document.body).bind(l, h)
		};
	u.send = g;
	return u
}.call(this, window.jQuery);
void
function(b, a) {
	var c = b(".J-data-uid").val(),
		e = b(".J-data-pid").val(),
		k = b(".J-data-layout").val() || 3,
		d = b(".J-data-stat").map(function(a, b) {
			var c = b.getAttribute("cz-id"),
				d = parseInt(b.getAttribute("cz-type")) || 0,
				e = parseInt(b.getAttribute("cz-from")) || 0;
			return {
				id: c,
				t: d,
				f: e
			}
		}).toArray();
	statMonitor(".J-data-stat", "//stat.made-in-china.com/event/rec.gif", function(l) {
		var h = {};
		h.pdid = e;
		h.list = window.asyncRenderListData || d;
		k && (h.layout = k);
		h.action = l.getAttribute("cz-id");
		h.pos = b(l).parent().find(".J-data-stat").index(l);
		h.times = l.getAttribute("cz-times") || 0;
		h.random = l.getAttribute("cz-random") || 0;
		l = {
			type: 11,
			data: encodeURIComponent(a.stringify(h)),
			st: (new Date).valueOf()
		};
		c && (l.userid = c);
		return l
	}, !0, 300)
}.call(this, window.jQuery, window.JSON);
void
function() {
	statMonitor(".J-data-refresh-times", "//stat.made-in-china.com/event/rec.gif", function(b) {
		return {
			type: 9,
			times: $(b).attr("cz-times")
		}
	})
}.call(this);
void
function(b, a) {
	if (b && a && b(".J-mlan-stat").length && b(".J-mlan-stat-data").length) {
		var c = a.parse(b.trim(b(".J-mlan-stat-data").html()));
		statMonitor(".J-mlan-stat", "//stat.made-in-china.com/event/mlan.gif", function(a, k) {
			return b.extend(!0, {}, c, {
				mlan: encodeURIComponent(a.title)
			})
		}, !1, 300)
	}
}.call(this, window.jQuery, window.JSON);
void
function() {
	/^\/solutions/i.test(location.pathname) && $(".J-data-referrer").length && statMonitor(".J-data-referrer", "//stat.made-in-china.com/event/agent.gif", function(b, a) {
		return {
			t: (new Date).valueOf()
		}
	}, !0, 300)
}.call(this);
void
function() {
	$(".page-product-details .J-showPicGifs").length && statMonitor(".J-showPicGifs", "//stat.made-in-china.com/event/gif.gif?type\x3d0\x26prodId\x3d" + $("#prodId"), function(b, a) {
		return {
			t: (new Date).valueOf()
		}
	}, !0, 300)
}.call(this);
void
function() {
	/^\/productimage/i.test(location.pathname) && $(".J-picGifBox").length && statMonitor(".J-picGifBox", "//stat.made-in-china.com/event/gif.gif?type\x3d1\x26prodId\x3d" + $("#prodId"), function(b, a) {
		return {
			t: (new Date).valueOf()
		}
	}, !0, 300)
}.call(this);
void
function() {
	$(".J-get-driving-derection").length && statMonitor(".J-get-driving-derection", "//stat.made-in-china.com/event/rec.gif", function(b, a) {
		var c = b.getAttribute("ads-data"),
			e = {},
			k = /([^&=]+)=([^&=]*)/g,
			d;
		for (k.exec(""); d = k.exec(c);) e[d[1]] = d[2];
		e.t = (new Date).valueOf();
		return e
	}, !0, 300)
}.call(this);
window.jQuery && function(b) {
	var a = {
		config: {
			cover_baseFloatZIndex: 100,
			cover_overlay: !0
		},
		setConfig: function(c) {
			a.config = b.extend(!0, a.config, c || {})
		}
	};
	a.tools = function() {
		return {
			env: function() {
				var a = navigator.userAgent.toLowerCase();
				return {
					ie: !1,
					ie6: !1,
					ie10: !1,
					mac: -1 < a.indexOf("macintosh"),
					webkit: -1 < a.indexOf(" applewebkit/"),
					isCustomDomain: function() {
						if (!this.ie) return !1;
						var a = document.domain,
							b = window.location.hostname;
						return a != b && a != "[" + b + "]"
					}
				}
			}(),
			genKey: function() {
				return Array.prototype.slice.call(arguments).join("-")
			},
			setOpacity: function(a, e) {
				this.env.ie && !this.env.ie10 ? (e = Math.round(100 * e), b(a).css("filter", 100 <= e ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity\x3d" + e + ")")) : b(a).css("opacity", e)
			},
			getViewPaneSize: function() {
				var a = "CSS1Compat" == document.compatMode;
				return {
					width: (a ? document.documentElement.clientWidth : document.body.clientWidth) || 0,
					height: (a ? document.documentElement.clientHeight : document.body.clientHeight) || 0
				}
			},
			getScrollPosition: function() {
				var a = window;
				if ("pageXOffset" in a) return {
					x: a.pageXOffset || 0,
					y: a.pageYOffset || 0
				};
				a = a.document;
				return {
					x: a.documentElement.scrollLeft || a.body.scrollLeft || 0,
					y: a.documentElement.scrollTop || a.body.scrollTop || 0
				}
			},
			getSize: function(a) {
				return {
					width: a.offsetWidth || 0,
					height: a.offsetHeight || 0
				}
			}
		}
	}();
	a.cover = function() {
		function c(c) {
			var d = g.options,
				e = b(window);
			if (c) "function" == typeof c[c.data("options").showAnim] ? c[c.data("options").showAnim]() : c.show();
			else {
				var n = ['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ', a.tools.env.ie6 ? "absolute" : "fixed", "; z-index: ", f + 1, "; top: 0px; left: 0px; ",
					a.tools.env.ie6 ? "" : "background-color: " + d.bgColor, '" style\x3d"display:none" class\x3d"', d.coverClass, '"\x3e'
				];
				a.tools.env.ie6 && a.bgIframe && n.push(a.bgIframe.html(d.bgColor));
				n.push("\x3c/div\x3e");
				c = b(n.join(""));
				a.tools.setOpacity(c, void 0 != d.bgOpacity ? d.bgOpacity : .5);
				c.bind("keydown", function() {
					return !1
				});
				c.bind("keypress", function() {
					return !1
				});
				c.bind("keyup", function() {
					return !1
				});
				b("body").append(c);
				c.data("options", d);
				"function" == typeof c[d.showAnim] ? c[d.showAnim]() : c.show();
				k[g.coverKey] = c;
				k[g.coverKey].used = !1
			}
			l = c;
			var p = c.data("options").rangeId;
			d = function() {
				var d = a.tools.getViewPaneSize();
				if (p && 0 < b("#" + p).length && b("#" + p).attr("id") == p) {
					d = a.tools.getSize(b("#" + p).get(0));
					var e = b("#" + p).offset().left,
						f = b("#" + p).offset().top;
					c.css("position", "absolute");
					c.css({
						left: e + "px",
						top: f + "px"
					})
				}
				c.css({
					width: d.width + "px",
					height: d.height + "px"
				})
			};
			var q = function() {
				var d = a.tools.getScrollPosition();
				p && 0 < b("#" + p).length && b("#" + p).attr("id") == p && (d = {
					x: b("#" + p).offset().left,
					y: b("#" + p).offset().top
				});
				c.css({
					left: d.x + "px",
					top: d.y + "px"
				})
			};
			h = d;
			e.bind("resize", d);
			d();
			a.tools.env.mac && a.tools.env.webkit || c.focus();
			if (a.tools.env.ie6) {
				var y = function() {
					q();
					arguments.callee.prevScrollHandler.apply(this, arguments)
				};
				e.get(0).setTimeout(function() {
					y.prevScrollHandler = window.onscroll || function() {};
					window.onscroll = y
				}, 0);
				q()
			}
		}

		function e(c) {
			var d = c ? c : d;
			d && (c = b(window), d.hide(), c.unbind("resize", h), a.tools.env.ie6 && c.get(0).setTimeout(function() {
				window.onscroll = window.onscroll && window.onscroll.prevScrollHandler || null
			}, 0), h = null)
		}
		var k = {},
			d = [],
			l, h, f = null,
			g = {};
		return {
			show: function(h) {
				a.tools.env.ie6 && a.setConfig({
					cover_overlay: !1
				});
				g.options = b.extend(!0, {
					rangeId: "",
					bgColor: "#000",
					bgOpacity: .65,
					baseFloatZIndex: a.config.cover_baseFloatZIndex,
					showAnim: "fadeIn",
					dialog: null,
					overlay: a.config.cover_overlay,
					coverClass: ""
				}, h || {});
				g.coverKey = a.tools.genKey(g.options.bgColor, g.options.bgOpacity, g.options.baseFloatZIndex, g.options.rangeId);
				h = k[g.coverKey];
				if (null === f || 0 == d.length) f = a.config.cover_baseFloatZIndex;
				if (!g.options.overlay) {
					var l = 0 < d.length ? d[d.length - 1] : null;
					l && l.base && l.key != g.coverKey && e(k[l.key])
				}
				c(h);
				k[g.coverKey].used ? (h.css("z-index", f + 1), d.push({
					key: g.coverKey
				})) : (k[g.coverKey].used = !0, d.push({
					key: g.coverKey,
					base: !0
				}));
				b(g.options.dialog).css("z-index", f += 10)
			},
			hide: function() {
				if (0 != d.length) {
					var a = d[d.length - 1],
						b = 1 < d.length ? d[d.length - 2] : null;
					b && a.key == b.key || e(l);
					f -= 10;
					b && (c(k[b.key]), k[b.key].css("z-index", f - 9));
					a.base && (k[a.key].used = !1);
					d.pop()
				}
			},
			remove: function() {
				for (var a in k) k[a].remove();
				k = {};
				d = [];
				f = null
			},
			getCover: function() {
				return l
			}
		}
	}();
	a.drag = function() {
		return function(c) {
			function e(c) {
				var d = a.tools.getSize(b(g).get(0)),
					e = a.tools.getViewPaneSize(),
					k = c.screenX,
					r = c.screenY,
					v = k - l.x,
					z = r - l.y;
				l = {
					x: k,
					y: r
				};
				n.x += v;
				n.y += z;
				k = n.x + u[3] < m ? -u[3] : n.x - u[1] > e.width - d.width - m ? e.width - d.width + (f.rtl ? u[1] : 0) : n.x;
				d = n.y + u[0] < m ? -u[0] : n.y - u[2] > e.height - d.height - m ? e.height - d.height + u[2] : n.y;
				e = "fixed" == b(g).css("position");
				r = b(g).css("marginTop");
				v = b(g).css("marginLeft");
				h._.position = {
					x: k,
					y: d
				};
				0 != parseFloat(r) && "auto" != r && (d -= parseFloat(r));
				0 != parseFloat(v) && "auto" != v && (k -= parseFloat(v));
				e || (e = a.tools.getScrollPosition(), k += e.x, d += e.y);
				f.rtl && (e = a.tools.getSize(b(g).get(0)), k = a.tools.getViewPaneSize().width - e.width - k);
				d = {
					top: (0 < d ? d : 0) + "px"
				};
				d[f.rtl ? "right" : "left"] = (0 < k ? k : 0) + "px";
				b(g).css(d);
				h._.moved = 1;
				c.preventDefault()
			}

			function k(c) {
				b(document).unbind("mousemove", e);
				b(document).unbind("mouseup", k);
				a.tools.env.ie6 && a.cover && 0 != a.cover.getCover().find(".bgiframe:visible").length && (c = a.cover.getCover().find(".bgiframe:visible").get(0).contentWindow.document, b(c).unbind("mousemove", e), b(c).unbind("mouseup", k))
			}

			function d() {
				var c = a.tools.getScrollPosition();
				h._.position = {
					x: b(g).offset().left - c.x,
					y: b(g).offset().top - c.y
				}
			}
			var l, h = this,
				f = h._ = b.extend(!0, {
					dialog: null,
					title: null,
					margins: null,
					magnetDistance: null,
					rtl: !1
				}, c || {});
			if (f.dialog && f.title) {
				var g = f.dialog;
				c = f.title;
				var n = l = null;
				var m = f.magnetDistance;
				var u = f.margins || [0, 0, 0, 0];
				null === m && (m = 20);
				b(c).bind("mousedown", function(c) {
					d();
					l = {
						x: c.screenX,
						y: c.screenY
					};
					b(document).bind("mousemove", e);
					b(document).bind("mouseup", k);
					n = h._.position || {};
					if (a.tools.env.ie6 && a.cover && 0 != a.cover.getCover().find(".bgiframe:visible").length) {
						var f = a.cover.getCover().find(".bgiframe:visible").get(0).contentWindow.document;
						b(f).bind("mousemove", e);
						b(f).bind("mouseup", k)
					}
					c.preventDefault()
				});
				b(c).bind("mouseover", function() {
					b(this).css("cursor", "move")
				});
				b(c).bind("mouseout", function() {
					b(this).css("cursor", "default")
				});
				d()
			}
		}
	}();
	a.bgIframe = function() {
		var c = function(b) {
				if (!a.tools.env.ie6) return "";
				var c = [];
				b = "\x3chtml\x3e\x3cbody style\x3d\\'background-color:" + b + ";\\'\x3e\x3c/body\x3e\x3c/html\x3e";
				c.push('\x3ciframe class\x3d"bgiframe" hidefocus\x3d"true" frameborder\x3d"0" tabindex\x3d"-1" style\x3d"z-index:-1" src\x3d"javascript:');
				c.push("void((function(){document.open();document.write( '" + b + "' );document.close();})())");
				c.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity\x3d100)"\x3e\x3c/iframe\x3e');
				return c.join("")
			},
			e = function(e) {
				e = b.extend(!0, {
					dialog: null,
					bgColor: "white"
				}, e || {});
				a.tools.env.ie6 && null != e.dialog && 0 !== b(e.dialog).length && 0 === b(e.dialog).children("iframe.bgiframe").length && b(e.dialog).prepend(c(e.bgColor))
			};
		e.html = c;
		return e
	}();
	a.center = function() {
		return function(c) {
			var e = c.dialog;
			if (0 != b(e).length) {
				delete c.dialog;
				c = b.extend(!0, {
					dialog: null,
					position: "absolute",
					top: "50%",
					left: "50%",
					marginTop: 0,
					relative: !0
				}, c || {});
				var k = b(e);
				"50%" == c.top && (c.marginTop = -k.outerHeight() / 2);
				"50%" == c.left && (c.marginLeft = -k.outerWidth() / 2);
				c.relative && !k.parent().is("body") && "static" == k.parent().css("position") && k.parent().css("position", "relative");
				delete c.relative;
				"fixed" == c.position && a.tools.env.ie6 && (c.marginTop += b(window).scrollTop(), c.position = "absolute", b(window).scroll(function() {
					k.stop().animate({
						marginTop: b(window).scrollTop() - k.outerHeight() / 2
					})
				}));
				k.css(c)
			}
		}
	}();
	b.fn.focusUI = function() {
		return function(a) {
			var c = this.find("h2:first");
			0 != b(this).length && (a = b.extend(!0, {
				cover: !1,
				drag: !1,
				center: !1,
				bgIframe: !0,
				title: null
			}, a || {}), a.title && 0 < b(a.title).length && (c = b(a.title)), a.cover && FocusUI.cover.show({
				dialog: this
			}), a.bgIframe && (a.cover || FocusUI.bgIframe({
				dialog: this
			})), a.center && FocusUI.center({
				dialog: this,
				position: "fixed"
			}), a.drag && FocusUI.drag({
				dialog: this,
				title: c
			}))
		}
	}();
	window.FocusUI = a
}(jQuery);
jQuery(function() {
	var b = function() {},
		a = function(a, b) {
			-1 !== a.indexOf("?") ? (a = a.split("?"), a[1] = a[1] ? a[1] + "\x26" + b.join("\x26") : b.join("\x26"), a = a.join("?")) : -1 !== a.indexOf("#") ? (a = a.splig("#"), a[1] = "?" + b.join("\x26"), a = a.join("#")) : a += "?" + b.join("\x26");
			return a
		},
		c = "LOGON_CALLBACK_" + (new Date).valueOf(),
		e = {
			tmpl: '\x3cdiv id\x3d"dialog4login" style\x3d"display:none;"\x3e\x3cdiv id\x3d"header4login"\x3e\x3cdiv id\x3d"title4login"\x3e\x3c/div\x3e\x3ca href\x3d"javascript:void(\'close\')" id\x3d"close4login"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d"content4login"\x3e\x3c/div\x3e\x3c/div\x3e',
			elems: {
				wrap: "#dialog4login",
				header: "#header4login",
				title: "#title4login",
				close: "#close4login",
				content: "#content4login"
			},
			style: {
				ifrWidth: 550,
				ifrHeight: 290,
				width: 565,
				height: "auto"
			},
			text: {
				title: "SIGN IN",
				close: ""
			},
			url: "",
			callback: b
		},
		k = null,
		d = [],
		l = function(a) {
			"function" === typeof a.callback && d.push(a.callback);
			if (k) return k;
			k = this;
			this._ = {};
			this.elems = {};
			this.config = jQuery.extend(!0, {}, e, a);
			this.init()
		};
	l.prototype = {
		init: function() {
			var a = this.elems,
				b = this.config;
			a.$wrap = jQuery(b.tmpl);
			a.$header = a.$wrap.find(b.elems.header);
			a.$title = a.$wrap.find(b.elems.title);
			a.$close = a.$wrap.find(b.elems.close);
			a.$content = a.$wrap.find(b.elems.content);
			a.$title.html(b.text.title);
			a.$close.html(b.text.close);
			a.$wrap.appendTo(document.body).css({
				width: this.config.style.width,
				height: this.config.style.height
			});
			this.hide();
			var c = this;
			a.$close.click(function(a) {
				a.stopPropagation();
				a.preventDefault();
				c.hide();
				c.unload()
			})
		},
		load: function(b, e) {
			this.unload();
			window[c] = function() {
				for (; d.length;) d.shift().apply(this, [].slice.call(arguments))
			};
			var f = [];
			document.domain !== window.location.hostname && f.push("domain\x3d" + document.domain);
			f.push("callback\x3d" + c);
			e = a(e, f);
			b = a(b, ["forwardPage\x3d" + encodeURIComponent(e)]);
			this.elems.$loginFrame = jQuery('\x3ciframe src\x3d"' + b + '" frameborder\x3d"0" style\x3d"width:' + this.config.style.ifrWidth + "px; height:" + this.config.style.ifrHeight + 'px"\x3e\x3c/iframe\x3e').appendTo(this.elems.$content)
		},
		unload: function() {
			this.elems.$loginFrame && this.elems.$loginFrame.remove();
			window[c] = b
		},
		show: function() {
			FocusUI.cover.hide();
			this.elems.$wrap.focusUI({
				cover: !0,
				drag: !1,
				center: !0,
				bgIframe: !0,
				bgColor: "#000",
				bgOpacity: .5
			});
			this.elems.$wrap.show().css("zIndex", 1E3)
		},
		hide: function() {
			this.elems.$wrap.hide();
			FocusUI.cover.hide()
		},
		callback: function(a) {
			"function" === typeof a && d.push(a)
		},
		title: function(a) {
			this.elems.$title.html(a || this.config.text.title)
		},
		style: function(a) {
			$.extend(!0, this.config.style, a);
			this.elems.$wrap.css({
				width: this.config.style.width,
				height: this.config.style.height
			})
		}
	};
	window.LoginLayer = l
});
void
function(b) {
	var a = {
		athena: function() {
			b.ajax({
				url: "/head/headInfo.do",
				type: "post",
				dataType: "json",
				success: function(a) {
					var c = a[0].status,
						k = a[0].welcomeUserName,
						d = a[0].newMailNumber,
						l = encodeURIComponent(window.location.href);
					a = b(".athena-user-state").eq(0);
					a.length || (a = b(".state").eq(0));
					k = '\x3cli class\x3d"user menu-item first" id\x3d"welUser"\x3eWelcome \x3ca href\x3d"//membercenter.made-in-china.com"\x3e\x3cstrong\x3e' + (k || "") + "\x3c/strong\x3e\x3c/a\x3e!\x3c/li\x3e";
					d = '\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"' + d + ' New Message(s)" title\x3d"' + d + ' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e' + d + "\x3c/a\x3e\x3c/li\x3e";
					l = '\x3cli class\x3d"sign menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d' + l + '"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';
					c ? (a.empty(), a.html(k + d + l)) : (a.empty(), a.html('\x3cli class\x3d"user menu-item"\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"//membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"sign menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"javascript:login();"\x3eSign In\x3c/a\x3e\x3c/li\x3e'))
				}
			})
		},
		now: function() {
			function a(a) {
				if (a && a.length) {
					var c = encodeURIComponent(window.location.href),
						e = b("#top .user-nav").eq(0),
						h = b("#top .site-nav .inquiry a strong")[0],
						f = a[3] || 0,
						g = '\x3cli class\x3d"first menu-item"\x3eWelcome \x3ca href\x3d"//membercenter.made-in-china.com"\x3e\x3cstrong\x3e' + (a[1] || "") + "\x3c/strong\x3e\x3c/a\x3e!";
					f = '\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"' + f + ' New Message(s)" title\x3d"' + f + ' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e' + f + "\x3c/a\x3e\x3c/li\x3e";
					var k = '\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d' + c + '"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';
					h.innerHTML = a[2] || 0;
					a[0] ? (e.empty(), e.html(g + f + k)) : (a = '\x3cli class\x3d"first menu-item"\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"//membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"signin menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3dlogon\x26amp;baseNextPage\x3d' + c + '"\x3eSign In\x3c/a\x3e\x3c/li\x3e', e.empty(), e.html(a))
				}
			}
			var e = "";
			"/report-cart/" === b("#top .site-nav .inquiry a").eq(0).attr("href") && (e = "\x26sc\x3d1");
			window.MIC_SRVRNM = document.location.protocol + "//" + document.location.host;
			e = (window.MIC_SRVRNM || "") + "/ajaxfunction.do?xcase\x3dajaxlogonconnection" + e + "\x26t\x3d" + (new Date).getTime();
			b.get(e, function(b) {
				b = b.replace(/^.*(\[.*\]).*$/g, "$1");
				a(eval(b))
			})
		},
		old: function() {
			window.MIC_SRVRNM = document.location.protocol + "//" + document.location.host;
			var a = function() {
				var a = (window.MIC_SRVRNM || "") + "/ajaxfunction.do?xcase\x3dajaxlogonconnection",
					c = function() {
						if (window.logonStatus) {
							var a = document.getElementById("welcome_logon_span"),
								b = document.getElementById("inquiry_number_span"),
								c = document.getElementById("join_now_span"),
								e = document.getElementById("logout_span"),
								g = document.getElementById("logon_span"),
								k = document.getElementById("newMsg"),
								m = document.getElementById("vohome_span");
							0 < parseInt(logonStatus[0]) ? (a && (a.innerHTML = 'Welcome \x3ca href\x3d"//membercenter.made-in-china.com"\x3e' + (logonStatus[1] ? "\x3cstrong\x3e" + document.createTextNode(logonStatus[1]).nodeValue + "\x3c/strong\x3e" : "") + "!\x3c/a\x3e "), b && (b.innerHTML = logonStatus[2]), c && (c.style.display = "none"), e && (e.style.display = "inline"), g && (g.style.display = "none"), m && (m.style.display = "inline"), 0 < parseInt(logonStatus[3]) ? (k || (k = document.createElement("span"), k.setAttribute("id", "newMsg"), a.parentNode.insertBefore(k, a.nextSibling)), k.innerHTML = ' | \x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox"\x3e\x3cimg src\x3d"/images/new_msg.gif"  alt\x3d"#N0# New Message(s)" title\x3d"#N0# New Message(s)" /\x3e #N0#\x3c/a\x3e'.replace(/#N0#/g, logonStatus[3]), k.style.display = "inline") : k && (k.style.display = "none")) : (a && (a.innerHTML = ""), b && (b.innerHTML = logonStatus[2]), c && (c.style.display = "inline"), e && (e.style.display = "none"), g && (g.style.display = "inline"), k && (k.style.display = "none"))
						}
					};
				b.get(window.location.protocol + "//" + window.location.host + "/ajaxfunction.do?xcase\x3dgetLoginStatus", function(d) {
					b.get(a, function(a) {
						a = a.replace(/^var\s*/, "window.");
						eval(a);
						c()
					})
				})
			};
			window.addMICtoFavorite = function(a, b) {
				try {
					window.external.AddFavorite(a, b)
				} catch (d) {}
			};
			return function() {
				try {
					logonStatus = "", a(), document.body.outerHTML && (document.getElementById("welcome_fav").outerHTML = '\x3ca id\x3d"welcome_fav" href\x3d"javascript:addMICtoFavorite(\'//www.made-in-china.com', "Made-in-China.com - The world of China products');\"\x3eAdd Made-in-China.com to your favorites list\x3c/a\x3e")
				} catch (e) {}
			}
		}.call(this)
	};
	window.headerStatus = a
}.call(this, window.jQuery);
void
function() {
	var b = function() {
			var a = function() {},
				b = function(b, c) {
					var d = document.createElement("script");
					d.type = "text/javascript";
					d.async = d.defer = !0;
					var e = !1,
						f = function() {
							"complete" !== d.readyState && "loaded" !== d.readyState || g.call(d)
						},
						g = function() {
							d.onload = d.onerror = a;
							e && d.detachEvent("onreadystatechange", f);
							setTimeout(c, 0)
						};
					d.onload = d.onerror = g;
					d.readyState && !d.addEventListener && (e = !0, d.attachEvent("onreadystatechange", f));
					d.src = b;
					document.body.appendChild(d)
				},
				c = function(a, c) {
					var d = arguments.callee;
					b(a.shift(), function() {
						a.length ? d(a, c) : c()
					})
				};
			return function() {
				var b = [].slice.call(arguments);
				if (b.length) {
					var d = a;
					"function" === typeof b[b.length - 1] && (d = b.pop());
					for (var e = [], h, k = 0; k < b.length; k++) h = b[k], "function" === typeof h && (h = h()), "string" === typeof h && (h = h.replace(/^\s+|\s+$/g, "")) && e.push(h);
					e.length ? c(e, d) : d()
				}
			}
		}.call(this),
		a = function(a) {
			jQuery(function() {
				var c = function() {},
					d, e, g, k = Object.prototype.toString,
					m = {
						map: function(a, b) {
							var c = k.call(a).match(/\w+/g)[1];
							if ("Array" === c) {
								var d = [];
								for (c = 0; c < a.length; c++) d.push(b(c, a[c]))
							} else if ("Object" === c) {
								d = {};
								for (var e in a) d[e] = b(e, a[e])
							}
							return d
						},
						where: function(a, b) {
							var c = k.call(a).match(/\w+/g)[1];
							if ("Array" === c) {
								var d = [];
								for (var e = 0; e < a.length; e++)(c = b(e, a[e])) && d.push(a[e])
							} else if ("Object" === c)
								for (e in d = {}, a)(c = b(e, a[e])) && (d[e] = a[e]);
							return d
						},
						indexOf: function(a, b) {
							for (var c = -1, d = 0; d < a.length; d++)
								if (a[d] === b) {
									c = d;
									break
								}
							return c
						}
					},
					u = function() {
						var a = document.createElement("div");
						a.style.cssText = "width:1px; height:1px; position:absolute; top:0; left:0; overflow:hidden;";
						var b = !1;
						return {
							img: function(c, d) {
								b || (document.body.appendChild(a), b = !0);
								var e = document.createElement("img"),
									f = [],
									g;
								for (g in d) f.push(g + "\x3d" + encodeURIComponent(d[g]));
								f.push("_\x3d" + (new Date).valueOf());
								f = c + (/\?/.test(c) ? "\x26" : "?") + f.join("\x26");
								e.src = f;
								a.appendChild(e)
							}
						}
					}(),
					r = function(a, b) {
						u.img("//membercenter.made-in-china.com/tm.do?xcase\x3dtestTM", {
							visitorId: a,
							url: encodeURIComponent(b)
						})
					},
					p = function(a) {
						this.api = a || null;
						this.isReady = !1;
						this.readyEvents = []
					};
				p.prototype = {
					execReady: function() {
						if (this.isReady) {
							for (var a = 0; a < this.readyEvents.length; a++) this.readyEvents[a].call(this);
							this.readyEvents = []
						}
					},
					ready: function(a) {
						"function" === typeof a && this.readyEvents.push(a);
						this.execReady()
					},
					beReady: function() {
						this.isReady = !0;
						this.execReady()
					},
					setApi: function(a) {
						a && (this.api = a, this.beReady())
					},
					chatTo: function(a, b) {
						this.api.chatTo($.extend(!0, {}, a), b)
					}
				};
				var q = new p;
				p = function() {
					this.isReady = !1;
					this.readyEvents = []
				};
				p.prototype = {
					execReady: function() {
						if (this.isReady)
							for (var a = 0; a < this.readyEvents.length; a++) this.readyEvents[a].call(this)
					},
					ready: function(a) {
						"function" === typeof a && this.readyEvents.push(a);
						this.execReady()
					},
					beReady: function() {
						this.isReady = !0;
						this.execReady()
					}
				};
				var y = new p,
					t = {
						chat: '\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with supplier online now!"\x3eChat with Supplier.\x3c/a\x3e',
						online: '\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with supplier online now!"\x3eChat with Supplier.\x3c/a\x3e',
						list: {
							wrap: '\x3cdiv class\x3d"tmer-list"\x3e\x3cdiv class\x3d"tm-manager-box"\x3e\x3cspan\x3eSales Manager: \x3c/span\x3e\x3cdiv class\x3d"inline tm-manager"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tm-person-box"\x3e\x3cspan\x3eSales Person: \x3c/span\x3e\x3cdiv class\x3d"inline tm-person"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
							button: '\x3ca rel\x3d"nofollow" class\x3d"tm-user" href\x3d"javascript:void(\'Chat Now!\')" title\x3d"Chat with supplier online now!"\x3e\x3c/a\x3e'
						},
						fixed: '\x3ca rel\x3d"nofollow" class\x3d"" href\x3d"javascript:void(\'Chat Now!\')" title\x3d"Chat with supplier online now!"\x3e\x3c/a\x3e',
						teletext: '\x3cdiv class\x3d"J-status"\x3e\x3cdiv class\x3d"pic"\x3e\x3ca rel\x3d"nofollow" title\x3d"Chat with supplier online now!" href\x3d"#" class\x3d"J-hovertitle"\x3e\x3cimg src\x3d"//www.micstatic.com/an/img/tm-offline.png" alt\x3d"Offline" /\x3e\x3c/a\x3e\x3c/div\x3e\x3ca rel\x3d"nofollow" href\x3d"#" class\x3d"J-title"\x3eTM\x3c/a\x3e\x3c/div\x3e',
						texticon: '\x3ca rel\x3d"nofollow" href\x3d"javascript:void(\'Chat Now\')" title\x3d"Chat with supplier online now!" class\x3d"tm"\x3e\x3c/a\x3e'
					},
					v = {
						texticon: function(a) {
							this.$elem = jQuery(t.texticon);
							this.$elem.insertAfter(a)
						}
					};
				v.texticon.prototype = {
					online: function(a) {
						this.$elem.show();
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.addClass("offline").show();
						"function" === typeof a && a()
					}
				};
				v.fixed = function(a) {
					this.$elem = jQuery(t.fixed);
					this.$elem.insertAfter(a)
				};
				v.fixed.prototype = {
					online: function(a) {
						this.$elem.removeClass("sider-tm-off").addClass("sider-tm-on").show();
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.removeClass("sider-tm-on").addClass("sider-tm-off").show();
						"function" === typeof a && a()
					}
				};
				v.teletext = function(a) {
					this.$elem = jQuery(t.teletext);
					this.$elem.insertAfter(a)
				};
				v.teletext.prototype = {
					online: function(a) {
						this.$elem.removeClass("offline").addClass("online");
						this.$elem.find("img").attr({
							alt: "online",
							src: "//www.micstatic.com/an/img/tm-online.png"
						});
						this.$elem.find(".J-title").html("Chat with Supplier");
						this.$elem.find(".J-hovertitle").attr("title", "Chat with Supplier Online now!");
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.removeClass("online").addClass("offline");
						this.$elem.find("img").attr({
							alt: "offline",
							src: "//www.micstatic.com/an/img/tm-offline.png"
						});
						this.$elem.find(".J-title").html("Leave a message");
						this.$elem.find(".J-hovertitle").attr("title", "Supplier is offline now, please leave your message.");
						"function" === typeof a && a()
					}
				};
				v.chat = function(a) {
					this.$elem = jQuery(t.chat);
					this.$elem.insertAfter(a)
				};
				v.chat.prototype = {
					online: function(a) {
						this.$elem.addClass("tm-status-on").show();
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.addClass("tm-status-off").attr({
							title: "Supplier is offline now, please leave your message.",
							href: "javascript:void('Please Leave a Message')"
						}).html("Leave a message.").show();
						"function" === typeof a && a()
					}
				};
				v.online = function(a) {
					this.$elem = jQuery(t.online);
					this.$elem.insertAfter(a)
				};
				v.online.prototype = {
					online: function(a) {
						this.$elem.addClass("tm-status-on").show();
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.addClass("tm-status-off").attr({
							title: "Supplier is offline now, please leave your message.",
							href: "javascript:void('Please Leave a Message')"
						}).html("Leave a message.").show();
						"function" === typeof a && a()
					}
				};
				v.list = function(a, b) {
					var c = this.$wrap = jQuery(t.list.wrap);
					c.insertAfter(a);
					this.$managerBox = c.find(".tm-manager-box");
					this.$personBox = c.find(".tm-person-box");
					var d = c.find(".tm-manager");
					c = c.find(".tm-person");
					var e = /00$/;
					this._ = {
						has: {
							manager: 0,
							person: 0
						}
					};
					for (var f = [], g, h, k = 0; k < b.length; k++) h = b[k], g = jQuery(t.list.button).html(h.name)[0], g.uid = h.id, e.test(h.id) ? (d.append(g), this._.has.manager++) : (c.append(g), this._.has.person++), f.push(g);
					this.$elem = jQuery(f);
					!d.children("a.tm-user").length && d.hide();
					!c.children("a.tm-user").length && c.hide()
				};
				v.list.prototype = {
					online: function(a) {
						this._.has.manager || this._.has.person ? (this.$wrap.show(), this.$elem.show(), this._.has.manager || this.$managerBox.hide(), this._.has.person || this.$personBox.hide()) : this.$wrap.hide();
						"function" === typeof a && a()
					},
					offline: function(a) {
						this.$elem.hide();
						"function" === typeof a && a()
					}
				};
				a.render && ($.extend(!0, t, a.render.tags), $.extend(!0, v, a.render.processors));
				var z = function(a) {
					a.stopPropagation()
				};
				var w = function(a) {
					a.preventDefault()
				};
				var E = function(a, b) {
						var c = a.getAttribute("processor");
						return c in v ? (c = new v[c](a, b), c.$elem.click(z).click(w), c) : null
					},
					B = function(a) {
						a = "function" === typeof a ? a : c;
						jQuery.ajax({
							url: d.audit,
							dataType: "jsonp",
							jsonp: "callback",
							cache: !1,
							success: function(b) {
								d.userStatus = b;
								"function" === typeof a && a(b)
							}
						})
					},
					C = function(a, b) {
						for (var c = 0; c < a.length; c++)
							if (a[c].id === b) return a[c];
						return null
					},
					D = function(a, b) {
						this.id = a;
						this.elems = b ? [b] : [];
						this.users = [];
						this.online = [];
						this.offline = []
					},
					F = function() {
						var a = [],
							b = [],
							c;
						e.each(function(d, e) {
							c = e.getAttribute("cid");
							if (-1 === m.indexOf(b, c)) b.push(c), a.push(new D(c, e));
							else {
								var f = C(a, c);
								f && f.elems.push(e)
							}
						});
						return {
							coms: a,
							ids4unique: b
						}
					},
					J = function(a, b) {
						g && g.ids4unique.length && jQuery.ajax({
							url: d.users,
							dataType: "jsonp",
							jsonp: "callback",
							cache: !1,
							data: {
								comIdStr: g.ids4unique.join(",")
							},
							success: function(c) {
								var d = !1,
									e, f;
								for (f in c)
									if (d = !0, e = C(g.coms, f)) {
										e.users = c[f].slice();
										e.uids = [];
										for (var h = 0; h < e.users.length; h++) e.uids.push(e.users[h].id)
									}
								d ? "function" === typeof a && a(c) : "function" === typeof b && b()
							},
							error: function() {
								"function" === typeof b && b()
							}
						})
					},
					K = function(a, b) {
						for (var c = [], d = 0; d < a.length; d++) - 1 !== m.indexOf(a[d].uids, b) && c.push(a[d]);
						return c
					},
					N = function() {
						for (var a = g.coms, b = [], c = 0; c < a.length; c++) a[c].online.length || b.push(a[c]);
						return b
					},
					O = function(a, b, c) {
						for (var e = c = c ? c : "user_ids[]\x3d", f = d.URL_THRESHOLD, g = [], h = [], k, l = 0; l < a.length; l++)
							if (k = a[l], b in k && k[b].length) {
								for (var m = h, n = b, p = [], v = 0; v < m.length; v++) p = p.concat(m[v][n]);
								(e + p.concat(k[b]).join("\x26" + c)).length <= f ? h.push(k) : (g.push(h), h = [k])
							}
						g.push(h);
						return g
					},
					A = function(a, b, c) {
						var d = c || "user_ids[]\x3d";
						c = "\x26" + d;
						for (var e = [], f = 0; f < a.length; f++) e = e.concat(a[f][b]);
						return d + e.join(c)
					},
					H = function(a, b, e) {
						jQuery.ajax({
							url: d.choose2talk,
							dataType: "json",
							cache: !1,
							data: {
								userIdStr: a.online.length ? a.online.join(",") : a.offline.join(","),
								dataId: a.dataId
							},
							success: b || c,
							complete: e || c
						})
					},
					P = function(a) {
						var b = /([^_]+)_1$/,
							c = "";
						/1$/.test(a) && (c = b.exec(a)[1]);
						return c
					},
					Q = {
						1: "product",
						2: "offer",
						3: "company",
						4: "productGroup"
					},
					R = function(a) {
						var b = {
							id: "null",
							type: "null"
						};
						(a = /([^_]+)_(\d)$/.exec(a)) && (b = {
							id: a[1],
							type: Q[a[2]] || "other"
						});
						return b
					},
					L = function(a) {
						q.ready(function() {
							var b = function(a) {
									var e = this;
									jQuery(this).unbind("click", b);
									var f = jQuery(this);
									if (a = f.data("talk2")) q.chatTo(a), c(this);
									else {
										a = f.data("tmData");
										var g = P(a.dataId),
											h = R(a.dataId);
										if (!d || !d.userStatus || !d.userStatus.visitorId || a.online.length) {
											var k;
											(!q.api.isReady2OpenWeb || q.api.isReady2OpenWeb && q.api.isReady2OpenWeb()) && q.api.winParams && (k = window.open("about:blank", "newwebtm", q.api.winParams()));
											H(a, function(a) {
												a && (g && jQuery.extend(!0, a, {
													productId: g
												}), h && jQuery.extend(!0, a, {
													inquiryData: h
												}), q.chatTo(a, k), f.data("talk2", a))
											}, function() {
												c(e)
											})
										}
									}
								},
								c = function(c) {
									(c ? jQuery(c) : a.$elem).click(b)
								};
							c()
						})
					},
					M = function(a) {
						y.ready(function() {
							for (var a = g.coms, b = 0; b < a.length; b++) jQuery(a[b].elems).each(function(a, b) {
								b.buttonRefer && b.buttonRefer.$elem.click(function(a) {
									a.preventDefault();
									alert("TradeMessenger is currently available to non-Chinese buyers and suppliers with business lienses or identity card.")
								})
							})
						})
					},
					U = function() {
						if ($(".J-header-refresh").length) window.location.reload(!0);
						else {
							var a = "header-type";
							$(".athena-user-state").length ? a = "athena" : $("#logon_span").length ? a = "old" : $("#welcome_logon_span").length && (a = "now");
							if (a in window.headerStatus) window.headerStatus[a]();
							else "function" === typeof window.logonRefresh && window.logonRefresh()
						}
					},
					I = null,
					V = {
						ifrWidth: 475,
						ifrHeight: 290,
						width: 490,
						height: "auto"
					},
					X = {
						ifrWidth: 550,
						ifrHeight: 290,
						width: 565,
						height: "auto"
					},
					x = new LoginLayer({
						callback: function(a) {
							var b = arguments.callee;
							x.hide();
							d.userStatus = $.extend(!0, {}, d.userStatus, a);
							if ("signin" === a.tmaction) setTimeout(function() {
								x.callback(b);
								x.unload();
								x.load(d.login, d.transition);
								x.title("SIGN IN");
								x.style(X);
								x.show()
							}, 1);
							else {
								if (a.visitorId) {
									ca();
									var c = d.token;
									c += "\x26visitorId\x3d" + a.visitorId;
									Y(function() {
										window.MaiTong && (d.userStatus.tm = "true", aa(c), r(a.visitorId, c), d.userStatus && "true" === d.userStatus.tm && (MaiTong.startWeb(), q.setApi(MaiTong)), I && jQuery(I).click())
									})
								} else ca(), d.userStatus = $.extend(!0, {}, {
									login: "true",
									tm: a.tm
								}), "true" === a.tm ? Y(function() {
									I && jQuery(I).click()
								}) : M(), U();
								setTimeout(function() {
									x.unload()
								}, 1)
							}
						}
					}),
					ba = function(a) {
						a.preventDefault();
						I = this;
						"1" !== d.userStatus.ip && $(this).data("tmData").online.length ? Y(function(a) {
							x.unload();
							x.title("Online Chat");
							x.style(V);
							x.load(d.visitor, d.transition);
							x.show()
						}) : Y(function(a) {
							x.unload();
							x.title("SIGN IN");
							x.style(X);
							x.load(d.login, d.transition);
							x.show()
						})
					},
					ea = function() {
						y.ready(function() {
							for (var a = g.coms, b = 0; b < a.length; b++) jQuery(a[b].elems).each(function(a, b) {
								b.buttonRefer && b.buttonRefer.$elem.click(ba)
							})
						})
					},
					ca = function() {
						y.ready(function() {
							for (var a = g.coms, b = 0; b < a.length; b++) jQuery(a[b].elems).each(function(a, b) {
								b.buttonRefer && b.buttonRefer.$elem.unbind("click", ba)
							})
						})
					},
					fa = function() {
						var a = N(),
							b = O(a, "uids", "user_ids[]\x3d"),
							c = 0;
						for (a = 0; a < b.length; a++) void
						function(a) {
							jQuery.ajax({
								url: d.userTMStatus + "\x26" + A(a, "uids", "user_ids[]\x3d"),
								dataType: "jsonp",
								jsonp: "callback",
								cache: !1,
								timeout: 1E4,
								data: {
									domain: "micen"
								},
								success: function(b) {
									for (e in b)
										if (b[e].online) {
											var c = K(a, e);
											for (var d = 0; d < c.length; d++) c[d].online.push(e)
										} else
											for (c = K(a, e), d = 0; d < c.length; d++) c[d].offline.push(e);
									for (d = 0; d < a.length; d++)
										for (c = a[d], b = 0; b < c.elems.length; b++) {
											var e = c.elems[b];
											var f = e.getAttribute("processor");
											var g = e.getAttribute("dataid");
											switch (f) {
												case "list":
													f = m.where(c.users, function(a, b) {
														return -1 !== m.indexOf(c.online, b.id)
													});
													f = E(e, f);
													e.buttonRefer = f;
													f.$elem.each(function(a, b) {
														jQuery(b).data("tmData", {
															online: [b.uid],
															dataId: g
														})
													});
													break;
												default:
													if (f = E(c.elems[b]), e.buttonRefer = f, f.$elem.data("tmData", {
															online: c.online.slice(),
															offline: c.offline.slice(),
															dataId: g
														}), !c.online.length) {
														f.offline();
														L(f);
														continue
													}
											}
											f.online();
											L(f)
										}
								},
								error: function() {
									u.img("//www.made-in-china.com/ajaxfunction.do?xcase\x3dtmExceptionLog", {
										type: 1,
										para: encodeURIComponent(window.location.href)
									})
								},
								complete: function() {
									c++;
									c === b.length && y.beReady()
								}
							})
						}.call(this, b[a])
					},
					da = !1,
					aa = function(a) {
						da || (MaiTong.configWeb({
							token_url: a || d.token,
							domain: "micen",
							lang: "en"
						}), da = !0)
					},
					Y = function(a) {
						a = "function" === typeof a ? a : c;
						b(d.tmloader, function() {
							if (window.MaiTong) {
								if ("ip" in d.userStatus && "1" !== d.userStatus.ip && "true" !== d.userStatus.login) {
									if (d.userStatus && "true" === d.userStatus.tm && d.userStatus.visitorId) {
										var b = d.token + "\x26visitorId\x3d" + d.userStatus.visitorId;
										aa(b);
										r(d.userStatus.visitorId, b);
										MaiTong.startWeb();
										q.setApi(MaiTong)
									}
								} else aa(), d.userStatus && "true" === d.userStatus.login && "true" === d.userStatus.tm && (MaiTong.startWeb(), q.setApi(MaiTong));
								a(MaiTong)
							}
						})
					};
				(function(b) {
					var c = window.document.location.protocol + "//membercenter.made-in-china.com",
						e = window.document.location.protocol + "//www.made-in-china.com",
						f = window.document.location.protocol + "//webim.en.trademessenger.com";
					c = {
						tm: f,
						tmloader: f + "/assets/js/loader.js?st\x3d" + parseInt((new Date).valueOf() / 12 / 60 / 60 / 1E3),
						userTMStatus: e + "/ajaxfunction.do?xcase\x3dgetTmStatus",
						vo: c,
						en: e,
						token: c + "/tm.do?xcase\x3dtoken4TMWeb\x26callback\x3d?",
						users: e + "/im.do?xcase\x3dgetSubAccount",
						choose2talk: e + "/im.do?xcase\x3dgetTalk2User",
						audit: c + "/tm.do?xcase\x3dtmRightsCheck",
						visitor: c + "/tm.do?xcase\x3dvisitorReg",
						login: "https://login.made-in-china.com/logon.do?xcase\x3dlogonPage4TM3",
						transition: e + "/im.do?xcase\x3dtmLogonHandle",
						holderSelector: ".tm3_chat_status",
						URL_THRESHOLD: 1500
					};
					d = $.extend(!0, {}, c, a.params);
					b(d)
				})(function(a) {
					e = jQuery(d.holderSelector).filter(function() {
						return !this.__tm_rendered__
					}).each(function() {
						this.__tm_rendered__ = !0
					});
					g = F();
					J(function() {
						fa()
					});
					B(function(a) {
						"true" === a.login || a.visitorId ? "true" === a.tm ? Y() : M() : ea()
					})
				});
				if (jQuery.browser.msie && 6 == jQuery.browser.version) {
					var ha = /void\s*\(?.*?\)?[;]?$/;
					w = function(a) {
						a.preventDefault()
					};
					jQuery("a").each(function(a, b) {
						ha.test(b.href) && jQuery(b).click(w)
					})
				}
			})
		},
		c = function() {
			var a = !1;
			return function() {
				if (!a) {
					var b = document.createElement("link");
					b.rel = "stylesheet";
					b.type = "text/css";
					b.media = "all";
					b.href = "//www.micstatic.com/gb/css/tm/tm.css";
					document.getElementsByTagName("head")[0].appendChild(b);
					a = !0
				}
			}
		}.call(this),
		e = function() {
			var a = [],
				c = function() {
					if (window.jQuery)
						for (; a.length;) a.shift().call(this)
				};
			return function(d) {
				"function" === typeof d && a.push(d);
				c();
				window.jQuery || b("//www.micstatic.com/gb/js/libs/jquery.js", function() {
					c()
				})
			}
		}.call(this),
		k = function(b) {
			c();
			e(function() {
				a(b || {})
			})
		};
	window.addEventListener ? window.addEventListener("load", k, !1) : window.attachEvent("onload", k);
	window.executeTM = k
}.call(this);

function asyncIsLogin(b) {
	$.ajax({
		url: "//" + window.location.host + (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/loginStatu.do?t\x3d" + (new Date).getTime(),
		type: "post",
		error: function() {},
		dataType: "json",
		success: function(a) {
			b ? b("1" === a[0].loginStatu) : window.location.reload(!0)
		}
	})
}
(function(b) {
	b.extend(b.fn, {
		validate: function(a) {
			if (this.length) {
				var c = b.data(this[0], "validator");
				if (c) return c;
				this.attr("novalidate", "novalidate");
				c = new b.validator(a, this[0]);
				b.data(this[0], "validator", c);
				c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(a) {
					c.settings.submitHandler && (c.submitButton = a.target);
					b(a.target).hasClass("cancel") && (c.cancelSubmit = !0)
				}), this.submit(function(a) {
					function e() {
						var d;
						return c.settings.submitHandler ? (c.submitButton && (d = b("\x3cinput type\x3d'hidden'/\x3e").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, a), c.submitButton && d.remove(), !1) : !0
					}
					c.settings.debug && a.preventDefault();
					if (c.cancelSubmit) return c.cancelSubmit = !1, e();
					if (c.form()) return c.pendingRequest ? (c.formSubmitted = !0, !1) : e();
					c.focusInvalid();
					return !1
				}));
				return c
			}
			a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
		},
		valid: function() {
			if (b(this[0]).is("form")) return this.validate().form();
			var a = !0,
				c = b(this[0].form).validate();
			this.each(function() {
				a &= c.element(this)
			});
			return a
		},
		removeAttrs: function(a) {
			var c = {},
				e = this;
			b.each(a.split(/\s/), function(a, b) {
				c[b] = e.attr(b);
				e.removeAttr(b)
			});
			return c
		},
		rules: function(a, c) {
			var e = this[0];
			if (a) {
				var k = b.data(e.form, "validator").settings,
					d = k.rules,
					l = b.validator.staticRules(e);
				switch (a) {
					case "add":
						b.extend(l, b.validator.normalizeRule(c));
						d[e.name] = l;
						c.messages && (k.messages[e.name] = b.extend(k.messages[e.name], c.messages));
						break;
					case "remove":
						if (!c) return delete d[e.name],
							l;
						var h = {};
						b.each(c.split(/\s/), function(a, b) {
							h[b] = l[b];
							delete l[b]
						});
						return h
				}
			}
			e = b.validator.normalizeRules(b.extend({}, b.validator.metadataRules(e), b.validator.classRules(e), b.validator.attributeRules(e), b.validator.staticRules(e)), e);
			e.required && (k = e.required, delete e.required, e = b.extend({
				required: k
			}, e));
			return e
		}
	});
	b.extend(b.expr[":"], {
		blank: function(a) {
			return !b.trim("" + a.value)
		},
		filled: function(a) {
			return !!b.trim("" + a.value)
		},
		unchecked: function(a) {
			return !a.checked
		}
	});
	b.validator = function(a, c) {
		this.settings = b.extend(!0, {}, b.validator.defaults, a);
		this.currentForm = c;
		this.init()
	};
	b.validator.format = function(a, c) {
		if (1 === arguments.length) return function() {
			var c = b.makeArray(arguments);
			c.unshift(a);
			return b.validator.format.apply(this, c)
		};
		2 < arguments.length && c.constructor !== Array && (c = b.makeArray(arguments).slice(1));
		c.constructor !== Array && (c = [c]);
		b.each(c, function(b, c) {
			a = a.replace(new RegExp("\\{" + b + "\\}", "g"), c)
		});
		return a
	};
	b.extend(b.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: b([]),
			errorLabelContainer: b([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(a, b) {
				this.lastActive = a;
				this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.highlightErrorClass, this.settings.highlightValidClass), this.addWrapper(this.errorsFor(a)).hide())
			},
			onfocusout: function(a, b) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function(a, b) {
				(9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastActive) && this.element(a)
			},
			onclick: function(a, b) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function(a, c, e) {
				"radio" === a.type ? this.findByName(a.name).addClass(c).removeClass(e) : b(a).addClass(c).removeClass(e)
			},
			unhighlight: function(a, c, e) {
				"radio" === a.type ? this.findByName(a.name).removeClass(c).addClass(e) : b(a).removeClass(c).addClass(e)
			}
		},
		setDefaults: function(a) {
			b.extend(b.validator.defaults, a)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: b.validator.format("Please enter no more than {0} characters."),
			minlength: b.validator.format("Please enter at least {0} characters."),
			rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
			range: b.validator.format("Please enter a value between {0} and {1}."),
			max: b.validator.format("Please enter a value less than or equal to {0}."),
			min: b.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function a(a) {
					var c = b.data(this[0].form, "validator"),
						e = "on" + a.type.replace(/^validate/, "");
					c.settings[e] && c.settings[e].call(c, this[0], a)
				}
				this.labelContainer = b(this.settings.errorLabelContainer);
				this.errorContext = this.labelContainer.length && this.labelContainer || b(this.currentForm);
				this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
				this.submitted = {};
				this.valueCache = {};
				this.pendingRequest = 0;
				this.pending = {};
				this.invalid = {};
				this.reset();
				var c = this.groups = {};
				b.each(this.settings.groups, function(a, d) {
					b.each(d.split(/[\s,]+/), function(b, d) {
						c[d] = a
					})
				});
				var e = this.settings.rules;
				b.each(e, function(a, c) {
					e[a] = b.validator.normalizeRule(c)
				});
				b(this.currentForm).validateDelegate(":text, [type\x3d'password'], [type\x3d'file'], select, textarea, [type\x3d'number'], [type\x3d'search'] ,[type\x3d'tel'], [type\x3d'url'], [type\x3d'email'], [type\x3d'datetime'], [type\x3d'date'], [type\x3d'month'], [type\x3d'week'], [type\x3d'time'], [type\x3d'datetime-local'], [type\x3d'range'], [type\x3d'color'] ", "focusin focusout keyup", a).validateDelegate("[type\x3d'radio'], [type\x3d'checkbox'], select, option", "click", a);
				this.settings.invalidHandler && b(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				this.checkForm();
				b.extend(this.submitted, this.errorMap);
				this.invalid = b.extend({}, this.errorMap);
				this.valid() || b(this.currentForm).triggerHandler("invalid-form", [this]);
				this.showErrors();
				return this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function(a) {
				this.lastElement = a = this.validationTargetFor(this.clean(a));
				this.prepareElement(a);
				this.currentElements = b(a);
				var c = !1 !== this.check(a);
				c ? delete this.invalid[a.name] : this.invalid[a.name] = !0;
				this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
				this.showErrors();
				return c
			},
			showErrors: function(a) {
				if (a) {
					b.extend(this.errorMap, a);
					this.errorList = [];
					for (var c in a) this.errorList.push({
						message: a[c],
						element: this.findByName(c)[0]
					});
					this.successList = b.grep(this.successList, function(b) {
						return !(b.name in a)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				b.fn.resetForm && b(this.currentForm).resetForm();
				this.submitted = {};
				this.lastElement = null;
				this.prepareForm();
				this.hideErrors();
				this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(a) {
				var b = 0,
					e;
				for (e in a) b++;
				return b
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					var a = b(this.findLastActive() || this.invalidElements().length && this.invalidElements() || []).filter(":first");
					a.focus().trigger("focusin");
					if (a.is(":hidden")) {
						var c = null;
						c = this.settings.errorWrap ? this.errorWrapsFor(a[0]) : this.errorsFor(a[0]);
						setTimeout(function() {
							var a = c[0].getBoundingClientRect();
							document.documentElement.scrollTop = document.body.scrollTop = (document.documentElement.scrollTop || document.body.scrollTop || 0) + a.top - 100
						}, 0)
					}
				} catch (e) {}
			},
			findLastActive: function() {
				var a = this.lastActive;
				return a && 1 === b.grep(this.errorList, function(b) {
					return b.element.name === a.name
				}).length && a
			},
			elements: function() {
				var a = this,
					c = {};
				return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					!this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this);
					return this.name in c || !a.objectLength(b(this).rules()) ? !1 : c[this.name] = !0
				})
			},
			clean: function(a) {
				return b(a)[0]
			},
			errors: function() {
				var a = this.settings.errorClass.replace(" ", ".");
				return b(this.settings.errorElement + "." + a, this.errorContext)
			},
			reset: function() {
				this.successList = [];
				this.errorList = [];
				this.errorMap = {};
				this.toShow = b([]);
				this.toHide = b([]);
				this.currentElements = b([])
			},
			prepareForm: function() {
				this.reset();
				this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(a) {
				this.reset();
				this.toHide = this.errorsFor(a)
			},
			elementValue: function(a) {
				var c = b(a).attr("type"),
					e = b(a).val();
				return "radio" === c || "checkbox" === c ? b('input[name\x3d"' + b(a).attr("name") + '"]:checked').val() : "string" === typeof e ? e.replace(/\r/g, "") : e
			},
			check: function(a) {
				a = this.validationTargetFor(this.clean(a));
				var c = b(a).rules(),
					e = !1,
					k = this.elementValue(a),
					d;
				for (d in c) {
					var l = {
						method: d,
						parameters: c[d]
					};
					try {
						var h = b.validator.methods[d].call(this, k, a, l.parameters);
						if ("dependency-mismatch" === h) e = !0;
						else {
							e = !1;
							if ("pending" === h) {
								this.toHide = this.toHide.not(this.errorsFor(a));
								return
							}
							if (!h) return this.formatAndAdd(a, l), !1
						}
					} catch (f) {
						throw this.settings.debug && window.console && console.log("exception occured when checking element " + a.id + ", check the '" + l.method + "' method", f), f;
					}
				}
				if (!e) return this.objectLength(c) && this.successList.push(a), !0
			},
			customMetaMessage: function(a, c) {
				if (b.metadata) {
					var e = this.settings.meta ? b(a).metadata()[this.settings.meta] : b(a).metadata();
					return e && e.messages && e.messages[c]
				}
			},
			customDataMessage: function(a, c) {
				return b(a).data("msg-" + c.toLowerCase()) || a.attributes && b(a).attr("data-msg-" + c.toLowerCase())
			},
			customMessage: function(a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function() {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function(a, c) {
				return this.findDefined(this.customMessage(a.name, c), this.customDataMessage(a, c), this.customMetaMessage(a, c), !this.settings.ignoreTitle && a.title || void 0, b.validator.messages[c], "\x3cstrong\x3eWarning: No message defined for " + a.name + "\x3c/strong\x3e")
			},
			formatAndAdd: function(a, c) {
				var e = this.defaultMessage(a, c.method),
					k = /\$?\{(\d+)\}/g;
				"function" === typeof e ? e = e.call(this, c.parameters, a) : k.test(e) && (e = b.validator.format(e.replace(k, "{$1}"), c.parameters));
				this.errorList.push({
					message: e,
					element: a
				});
				this.errorMap[a.name] = e;
				this.submitted[a.name] = e
			},
			addWrapper: function(a) {
				this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
				return a
			},
			defaultShowErrors: function() {
				var a;
				for (a = 0; this.errorList[a]; a++) {
					var c = this.errorList[a];
					this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.highlightErrorClass, this.settings.highlightValidClass);
					this.showLabel(c.element, c.message)
				}
				this.errorList.length && (this.toShow = this.toShow.add(this.containers));
				if (this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, c = this.validElements(); c[a]; a++) this.settings.unhighlight.call(this, c[a], this.settings.highlightErrorClass, this.settings.highlightValidClass);
				this.toHide = this.toHide.not(this.toShow).filter(function(a, c) {
					return b(c).is("[for]") || b(c).parent().is("wrapfor")
				});
				this.hideErrors();
				this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return b(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(a, c) {
				var e = this.errorsFor(a);
				e.length ? (e.removeClass(this.settings.validClass).addClass(this.settings.errorClass), e.attr("generated") && e.html(c)) : (e = b("\x3c" + this.settings.errorElement + "/\x3e").attr({
					"for": this.idOrName(a),
					generated: !0
				}).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (e = e.hide().show().wrap("\x3c" + this.settings.wrapper + "/\x3e").parent()), this.labelContainer.append(e).length || (this.settings.errorPlacement ? this.settings.errorPlacement(e, b(a)) : e.insertAfter(a)));
				!c && this.settings.success && (e.text(""), "string" === typeof this.settings.success ? e.addClass(this.settings.success) : this.settings.success(e, a));
				this.toShow = this.toShow.add(e)
			},
			errorsFor: function(a) {
				var c = this.idOrName(a);
				return this.errors().filter(function() {
					return b(this).attr("for") === c || b(this).parent().attr("wrapfor") === c
				})
			},
			idOrName: function(a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function(a) {
				this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]);
				return a
			},
			checkable: function(a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function(a) {
				return b(this.currentForm).find('[name\x3d"' + a + '"]')
			},
			getLength: function(a, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return b("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return a.length
			},
			depend: function(a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			},
			dependTypes: {
				"boolean": function(a, b) {
					return a
				},
				string: function(a, c) {
					return !!b(a, c.form).length
				},
				"function": function(a, b) {
					return a(b)
				}
			},
			optional: function(a) {
				var c = this.elementValue(a);
				return !b.validator.methods.required.call(this, c, a) && "dependency-mismatch"
			},
			startRequest: function(a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function(a, c) {
				this.pendingRequest--;
				0 > this.pendingRequest && (this.pendingRequest = 0);
				delete this.pending[a.name];
				c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (b(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (b(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(a) {
				return b.data(a, "previousValue") || b.data(a, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(a, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(a, c) {
			a.constructor === String ? this.classRuleSettings[a] = c : b.extend(this.classRuleSettings, a)
		},
		classRules: function(a) {
			var c = {};
			(a = b(a).attr("class")) && b.each(a.split(" "), function() {
				this in b.validator.classRuleSettings && b.extend(c, b.validator.classRuleSettings[this])
			});
			return c
		},
		attributeRules: function(a) {
			var c = {};
			a = b(a);
			for (var e in b.validator.methods) {
				if ("required" === e) {
					var k = a.get(0).getAttribute(e);
					"" === k && (k = !0);
					k = !!k
				} else k = a.attr(e);
				k ? c[e] = k : a[0].getAttribute("type") === e && (c[e] = !0)
			}
			c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
			return c
		},
		metadataRules: function(a) {
			if (!b.metadata) return {};
			var c = b.data(a.form, "validator").settings.meta;
			return c ? b(a).metadata()[c] : b(a).metadata()
		},
		staticRules: function(a) {
			var c = {},
				e = b.data(a.form, "validator");
			e.settings.rules && (c = b.validator.normalizeRule(e.settings.rules[a.name]) || {});
			return c
		},
		normalizeRules: function(a, c) {
			b.each(a, function(e, k) {
				if (!1 === k) delete a[e];
				else if (k.param || k.depends) {
					var d = !0;
					switch (typeof k.depends) {
						case "string":
							d = !!b(k.depends, c.form).length;
							break;
						case "function":
							d = k.depends.call(c, c)
					}
					d ? a[e] = void 0 !== k.param ? k.param : !0 : delete a[e]
				}
			});
			b.each(a, function(e, k) {
				a[e] = b.isFunction(k) ? k(c) : k
			});
			b.each(["minlength", "maxlength", "min", "max"], function() {
				a[this] && (a[this] = Number(a[this]))
			});
			b.each(["rangelength", "range"], function() {
				a[this] && (a[this] = [Number(a[this][0]), Number(a[this][1])])
			});
			b.validator.autoCreateRanges && (a.min && a.max && (a.range = [a.min, a.max], delete a.min, delete a.max), a.minlength && a.maxlength && (a.rangelength = [a.minlength, a.maxlength], delete a.minlength, delete a.maxlength));
			a.messages && delete a.messages;
			return a
		},
		normalizeRule: function(a) {
			if ("string" === typeof a) {
				var c = {};
				b.each(a.split(/\s/), function() {
					c[this] = !0
				});
				a = c
			}
			return a
		},
		addMethod: function(a, c, e) {
			b.validator.methods[a] = c;
			b.validator.messages[a] = void 0 !== e ? e : b.validator.messages[a];
			3 > c.length && b.validator.addClassRules(a, b.validator.normalizeRule(a))
		},
		methods: {
			required: function(a, c, e) {
				return this.depend(e, c) ? "select" === c.nodeName.toLowerCase() ? (a = b(c).val()) && 0 < a.length : this.checkable(c) ? 0 < this.getLength(a, c) : 0 < b.trim(a).length : "dependency-mismatch"
			},
			remote: function(a, c, e) {
				if (this.optional(c)) return "dependency-mismatch";
				var k = this.previousValue(c);
				this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
				k.originalMessage = this.settings.messages[c.name].remote;
				this.settings.messages[c.name].remote = k.message;
				e = "string" === typeof e && {
					url: e
				} || e;
				if (this.pending[c.name]) return "pending";
				if (k.old === a) return k.valid;
				k.old = a;
				var d = this;
				this.startRequest(c);
				var l = {};
				l[c.name] = a;
				b.ajax(b.extend(!0, {
					url: e,
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: l,
					success: function(e) {
						"undefined" != typeof d.settings.messages[c.name] && (d.settings.messages[c.name].remote = k.originalMessage);
						var f = !0 === e || "true" === e;
						if (f) {
							var g = d.formSubmitted;
							d.prepareElement(c);
							d.formSubmitted = g;
							d.successList.push(c);
							delete d.invalid[c.name];
							d.showErrors()
						} else g = {},
							e = e || d.defaultMessage(c, "remote"), g[c.name] = k.message = b.isFunction(e) ? e(a) : e, d.invalid[c.name] = !0, d.showErrors(g);
						k.valid = f;
						d.stopRequest(c, f)
					}
				}, e));
				return "pending"
			},
			minlength: function(a, c, e) {
				a = b.isArray(a) ? a.length : this.getLength(b.trim(a), c);
				return this.optional(c) || a >= e
			},
			maxlength: function(a, c, e) {
				a = b.isArray(a) ? a.length : this.getLength(b.trim(a), c);
				return this.optional(c) || a <= e
			},
			rangelength: function(a, c, e) {
				a = b.isArray(a) ? a.length : this.getLength(b.trim(a), c);
				return this.optional(c) || a >= e[0] && a <= e[1]
			},
			min: function(a, b, e) {
				return this.optional(b) || a >= e
			},
			max: function(a, b, e) {
				return this.optional(b) || a <= e
			},
			range: function(a, b, e) {
				return this.optional(b) || a >= e[0] && a <= e[1]
			},
			email: function(a, b) {
				return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
			},
			url: function(a, b) {
				return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
			},
			date: function(a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
			},
			dateISO: function(a, b) {
				return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
			},
			number: function(a, b) {
				return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function(a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			creditcard: function(a, b) {
				if (this.optional(b)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				var c = 0,
					k = !1;
				a = a.replace(/\D/g, "");
				for (var d = a.length - 1; 0 <= d; d--) {
					var l = a.charAt(d);
					l = parseInt(l, 10);
					k && 9 < (l *= 2) && (l -= 9);
					c += l;
					k = !k
				}
				return 0 === c % 10
			},
			equalTo: function(a, c, e) {
				e = b(e);
				this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					b(c).valid()
				});
				return a === e.val()
			}
		}
	});
	b.format = b.validator.format
})(jQuery);
(function(b) {
	var a = {};
	if (b.ajaxPrefilter) b.ajaxPrefilter(function(b, c, d) {
		c = b.port;
		"abort" === b.mode && (a[c] && a[c].abort(), a[c] = d)
	});
	else {
		var c = b.ajax;
		b.ajax = function(e) {
			var k = ("port" in e ? e : b.ajaxSettings).port;
			return "abort" === ("mode" in e ? e : b.ajaxSettings).mode ? (a[k] && a[k].abort(), a[k] = c.apply(this, arguments)) : c.apply(this, arguments)
		}
	}
})(jQuery);
(function(b) {
	jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || b.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, c) {
		function e(a) {
			a = b.event.fix(a);
			a.type = c;
			return b.event.handle.call(this, a)
		}
		b.event.special[c] = {
			setup: function() {
				this.addEventListener(a, e, !0)
			},
			teardown: function() {
				this.removeEventListener(a, e, !0)
			},
			handler: function(a) {
				var d = arguments;
				d[0] = b.event.fix(a);
				d[0].type = c;
				return b.event.handle.apply(this, d)
			}
		}
	});
	b.extend(b.fn, {
		validateDelegate: function(a, c, e) {
			return this.bind(c, function(c) {
				var d = b(c.target);
				if (d.is(a)) return e.apply(d, arguments)
			})
		}
	})
})(jQuery);
$.extend(!0, $.validator, {
	defaults: {
		errorWrap: !1,
		errorWrapElement: '\x3cdiv class\x3d"feedback-block"\x3e\x3c/div\x3e',
		ignore: ":disabled",
		onkeyup: !1,
		onfocus: !1,
		highlightErrorClass: "hlt-error",
		highlightValidClass: "hlt-valid",
		showErrors: function(b, a) {
			var c = this;
			$.each(a, function(a, b) {
				c.errorsFor(b.element).html(b.message)
			});
			this.defaultShowErrors()
		},
		highlight: !1,
		unhighlight: !1
	},
	messages: {
		enonly: "Please enter in English only.",
		teleCountryNum: "请用数字填写电话的国家区号",
		teleAreaNum: "请用数字填写电话的地区区号",
		telephoneNum: "请用数字、连字符（-）或空格填写电话号码",
		singleTelNum: "请输入电话号码"
	},
	prototype: {
		formatAndAdd: function(b, a) {
			var c = this.defaultMessage(b, a.method),
				e = /\$?\{(\d+)\}/g;
			"function" === typeof c ? c = c.call(this, a.parameters, b) : e.test(c) && (c = $.validator.format(c.replace(e, "{$1}"), a.parameters));
			this.errorList.push({
				message: c,
				element: b,
				method: a.method
			});
			this.errorMap[b.name] = c;
			this.submitted[b.name] = c
		},
		elements: function() {
			var b = this;
			return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
				!this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this);
				return b.objectLength($(this).rules()) ? !0 : !1
			})
		},
		errorWrapsFor: function(b) {
			var a = this.idOrName(b);
			return $(b).parents("form:first").find('[wrapfor\x3d"' + a + '"]')
		},
		showLabel: function(b, a) {
			var c = this.errorsFor(b);
			if (c.length) c.removeClass(this.settings.validClass).addClass(this.settings.errorClass), c.attr("generated") && c.html(a);
			else if (c = $("\x3c" + this.settings.errorElement + "/\x3e").attr({
					"for": this.idOrName(b),
					generated: !0
				}).addClass(this.settings.errorClass).html(a || ""), this.settings.wrapper && (c = c.hide().show().wrap("\x3c" + this.settings.wrapper + "/\x3e").parent()), !this.labelContainer.append(c).length)
				if (this.settings.errorPlacement) this.settings.errorPlacement(c, $(b));
				else if (this.settings.errorWrap) {
				var e = this.errorWrapsFor(b);
				e.length || (e = $("string" === typeof this.settings.errorWrap ? this.settings.errorWrap : this.settings.errorWrapElement).attr({
					wrapfor: this.idOrName(b)
				}), this.settings.errorWrapPlacement ? this.settings.errorWrapPlacement(e, $(b)) : $(b).after(e));
				e.append(c)
			} else c.insertAfter(b);
			!a && this.settings.success && (c.text(""), "string" === typeof this.settings.success ? c.addClass(this.settings.success) : this.settings.success(c, b));
			this.toShow = this.toShow.add(c)
		},
		getLength: function(b, a) {
			switch (a.nodeName.toLowerCase()) {
				case "select":
					return $("option:selected", a).length;
				case "input":
					if (this.checkable(a)) return this.findByName(a.name).filter(":checked").length;
				case "textarea":
					b = b.replace(/\n/g, "**")
			}
			return b.replace(/[^\x00-\xff]/g, "**").length
		}
	},
	methods: {
		date: function(b, a) {
			return this.optional(a) || !/Invalid|NaN/.test(new Date(b.replace(/-/g, "/")))
		},
		enonly: function(b, a, c) {
			return !/[^\x00-\xff]/.test(b)
		},
		email: function(b, a) {
			var c = $.trim(b);
			if ("" === c) return !0;
			if (!/^[-\.\w]+@[-\.a-zA-Z0-9]+\.[-\.a-zA-Z0-9]+$/.test(c)) return !1;
			var e = c.split("@")[0];
			c = c.split("@")[1];
			if (!/^.*[A-Za-z0-9]+.*$/.test(e) || /(^\..*)|(.*\.$)/.test(e) || /(\.){2,}/.test(e)) return !1;
			var k = c.lastIndexOf(".");
			e = c.substr(0, k);
			c = c.substr(k + 1);
			return /(^[\.-].*)|(.*[\.-]$)/.test(e) || /(\.){2,}/.test(e) || !/^[a-zA-Z]+$/.test(c) ? !1 : !0
		},
		url: function(b, a) {
			b = $.trim(b);
			return this.optional(a) || /^((?:https?):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)
		},
		teleCountryNum: function(b, a) {
			b = $.trim(b);
			return this.optional(a) || /^\d+$/.test(b)
		},
		teleAreaNum: function(b, a) {
			b = $.trim(b);
			return this.optional(a) || /^\d+$/.test(b)
		},
		telephoneNum: function(b) {
			b = $.trim(b);
			return !b || /^[\d\s\-]*$/.test(b)
		},
		singleTelNum: function(b) {
			b = $.trim(b);
			return !b || /^[a-zA-Z0-9\+\(\)\-]{1,20}$/.test(b)
		}
	}
});
$.fn.staticTip = function() {
	this.each(function(b, a) {
		(/input/i.test(a.tagName) && /text|password|hidden/i.test(a.type) || /textarea/i.test(a.tagName)) && $(a).blur(function() {
			var b = a.getAttribute("static-tip"),
				e = $("[tip4\x3d" + (a.name || a.id) + "]");
			$(a).valid() ? (b && !/true|false/i.test(b) && e.html(b), e.show()) : e.hide()
		})
	})
};
$(function() {
	$("input[static-tip],textarea[static-tip]").each(function() {
		$(this).staticTip()
	})
});
$(function() {
	function b() {
		var a = "https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d" + encodeURIComponent(window.location.href) + "";
		$("#J-signout a").attr("href", a)
	}
	$(".J-nav-fix").length && (new JFixed({
		carrier: $(".J-nav-fix")[0],
		isRestore: !0,
		position: {
			top: 0
		},
		triggerTop: $(".J-nav-fix").offset().top
	})).fixed();
	if ($(".J-editEntrance").length) {
		var a = $(".J-editEntrance"),
			c = a.offset().top - 51,
			e = $(".J-layout").offset().top + a.innerWidth() + 61,
			k = $(".sr-crumb").length;
		k && (c += 41, a.attr("style", "top:" + e + "px"));
		$(document).on("scroll", function() {
			$(document).scrollTop() > c ? (a.addClass("fix"), k && a.attr("style", "")) : (a.removeClass("fix"), k && a.attr("style", "top:" + e + "px"))
		})
	} else $(".sr-nav-wrap").length && setTimeout(function() {
		var a = $(".sr-nav-wrap").position().top + 51,
			b = $(".sr-nav-wrap").position().top + 223,
			c = $(".J-editEntrance", "body");
		c.attr("style", "top:" + b + "px");
		$(document).on("scroll", function() {
			$(document).scrollTop() > a ? (c.addClass("fix"), c.attr("style", "")) : (c.removeClass("fix"), c.attr("style", "top:" + b + "px"))
		})
	});
	$(".J-show-more").length && $(".J-show-more").click(function(a) {
		a.preventDefault();
		a = $(this).parents(".J-txt-wrap:first");
		a.hasClass("more") ? (a.removeClass("more"), $(this).html('View More \x3ci class\x3d"ob-icon icon-down"\x3e\x3c/i\x3e')) : (a.addClass("more"), $(this).html('View Less \x3ci class\x3d"ob-icon icon-up"\x3e\x3c/i\x3e'))
	});
	$(".J-proGroup-more").length && ($(".J-proGroup-more").on("click", function(a) {
		a.preventDefault();
		$(this).hide();
		$(".J-proGroup-less").show();
		$(".J-proGroup-more-list").slideDown(300)
	}), $(".J-proGroup-less").on("click", function(a) {
		a.preventDefault();
		$(this).hide();
		$(".J-proGroup-more").show();
		$(".J-proGroup-more-list").slideUp(300)
	}));
	var d = "ontouchend" in window ? "touchend" : "click",
		l = $(".J-menu-entry"),
		h = $(".J-menu-wrap"),
		f = $(".J-tab-trigger", h),
		g = $(".J-header-mark"),
		n = $(".J-search-entry"),
		m = $(".J-pad-search-bar"),
		u = $("html,body");
	$(".J-pad-rfq-wrap");
	var r = $(".pad-search-bar"),
		p = "ontouchend" in window;
	l.on(d, function() {
		h.addClass("open");
		g.fadeIn(200);
		r.css("z-index", "-1");
		u.css({
			overflow: "hidden",
			height: "100%"
		});
		u.on("touchmove", function(a) {
			a.preventDefault()
		});
		h.on("touchmove", function(a) {
			a.stopPropagation()
		})
	});
	$(".J-header-mark,.J-menu-close").on(d, function() {
		h.removeClass("open");
		f.removeClass("open");
		g.fadeOut(200);
		r.css("z-index", "");
		u.css({
			overflow: "auto",
			height: "auto"
		});
		u.unbind("touchmove")
	});
	$(".J-menu-wrap").on(d, ".J-tab-trigger", function(a) {
		a.stopPropagation();
		f.removeClass("open");
		$(this).addClass("open")
	});
	n.on(d, function() {
		m.addClass("open");
		g.fadeIn(200);
		u.css({
			overflow: "hidden",
			height: "100%"
		})
	});
	$(".J-header-mark,.J-search-close").on(d, function() {
		m.removeClass("open");
		g.fadeOut(200);
		u.css({
			overflow: "auto",
			height: "auto"
		});
		u.unbind("touchmove")
	});
	$(".J-searchType, .J-inputWrap").on("click touchstart touchmove touchend", function(a) {
		a.stopPropagation()
	});
	$(".m-search-input").on("focus", function() {
		var a = $(".J-searchType");
		a.hasClass("hover") && a.removeClass("hover")
	});
	$(document).on("click touchstart touchmove touchend", function(a) {
		var b = $(".J-searchType");
		b.hasClass("hover") && b.removeClass("hover");
		p && "click" === a.type && $(".J-cate-in-pc .cate-item.hover,.J-cate-in-pc .cate-more.hover").length && ($(".J-cate-in-pc .cate-item.hover,.J-cate-in-pc .cate-more.hover").removeClass("hover"), a.preventDefault(), a.stopPropagation());
		$(".m-search-input").blur()
	});
	$(".J-searchProdsByKeyWord").click(function(a) {
		a.preventDefault();
		a = $(this).parent().find("[name\x3dsearchInKeywordList]");
		a.find("[name\x3dsearchKeyword]").val($(this).attr("cz-value"));
		a.submit()
	});
	$("#safeimage").length && $("#safeimage").find("input:checkbox").change(function() {
		window.location.href = $(this).val()
	});
	var q = null,
		y = "ontouchend" in window;
	y || $(".J-title-comName").addClass("in-pc");
	$(".J-title-comName").hover(function() {
		y || (q = setTimeout(function() {
			$(".J-comInfo-details").stop(!1, !0).slideDown(300);
			$(".animate-start").addClass("animate-end")
		}, 200))
	}, function() {
		y || (q && clearTimeout(q), $(".J-comInfo-details").stop(!1, !0).slideUp(300), setTimeout(function() {
			$(".animate-start").removeClass("animate-end")
		}, 300))
	});
	window.login = function(a, b, c) {
		a = "logonFrom\x3d6\x26logonInCode\x3d17\x26newShow\x3d1" + (a || "");
		var d = window.location.protocol + "//" + window.location.host + (null == document.getElementById("rootpath") ? "" : document.getElementById("rootpath").value) + "/head/transition.do",
			e = window.loginLayer = new LoginLayer2({
				callback: function(a) {
					e.unload();
					asyncIsLogin(b)
				},
				closeBack: function() {
					c && c()
				}
			});
		e.load(a, d)
	};
	$(".J-sign-in").on("click", function() {
		login();
		return !1
	});
	$("#J-signout").length && b();
	window.SlideNav && (d = new SlideNav, d.addItem("goTop"), SlideNav.defaultsInit(d), d.show());
	d = function() {};
	l = function(a) {
		alert(a)
	};
	var t = {
		require: [{
			handle: function(a) {
				return "" !== a
			},
			errMsg: "Please input keyword(s).",
			ok: d,
			err: l
		}],
		enonly: [{
			handle: function(a) {
				return /^[\x00-\x7F]*$/.test(a)
			},
			errMsg: "Please input the information in English only.",
			ok: d,
			err: l
		}]
	};
	$.each([{
		form: "[name\x3dsearchInKeywordSide]",
		text: "[name\x3dsearchKeywordSide]"
	}, {
		form: "#searchInKeywordList",
		text: "[name\x3dsearchKeyword]"
	}], function(a, b) {
		var c = jQuery(b.form),
			d = c.find(b.text);
		c.length && d.length && c.submit(function(a) {
			var b = jQuery.trim(d.val()),
				c = !0,
				e;
			for (e in t) {
				var f = t[e];
				for (var g = 0; g < f.length; g++) {
					var h = f[g];
					var k = Object.prototype.toString.call(h.handle).match(/\w+/g)[1].toLowerCase();
					"function" === k ? c = h.handle.call(d[0], b) : "regexp" === k && (h.handle.exec(""), c = h.handle.test(b));
					if (c) h.ok.call(d[0]);
					else {
						h.err.call(d[0], h.errMsg);
						break
					}
				}
				if (!c) break
			}
			c || a.preventDefault()
		})
	})
});
var forbiddenScroll = function(b, a) {
	!$.browser.mozilla || !window.ActiveXObject && /function[\s\S]+?\[native\s+code\]/.test(window.ActiveXObject + "") ? b.bind("mousewheel", function(b) {
		this.scrollTop += 0 < b.originalEvent.wheelDelta ? -56 : 56;
		a && $(a, this).length && ($(a, this)[0].scrollTop += 0 < b.originalEvent.wheelDelta ? -56 : 56);
		b.preventDefault()
	}) : b.bind("DOMMouseScroll", function(b) {
		this.scrollTop += 0 < b.originalEvent.detail ? 56 : -56;
		a && $(a, this).length && ($(a, this)[0].scrollTop += 0 < b.originalEvent.detail ? 56 : -56);
		b.preventDefault()
	})
};