! function(x) {
	"object" == typeof exports && "object" == typeof module ? module.exports = x() : x()
}(function() {
	function x() {
		this.sendingData = 0
	}
	try {
		var b = {},
			c = b._ = {};
		"object" != typeof JSON && (JSON = {});
		(function() {
			function a(a) {
				return 10 > a ? "0" + a : a
			}

			function b() {
				return this.valueOf()
			}

			function c(a) {
				return f.lastIndex = 0, f.test(a) ? '"' + a.replace(f, function(a) {
					var f = r[a];
					return "string" == typeof f ? f : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				}) + '"' : '"' + a + '"'
			}

			function g(a, f) {
				var b, l, d, e, r = n,
					h = f[a];
				switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(a)), "function" == typeof u && (h = u.call(f, a, h)), typeof h) {
					case "string":
						return c(h);
					case "number":
						return isFinite(h) ? String(h) : "null";
					case "boolean":
					case "null":
						return String(h);
					case "object":
						if (!h) return "null";
						if (n += t, e = [], "[object Array]" === Object.prototype.toString.apply(h)) {
							var y = h.length;
							for (b = 0; b < y; b += 1) e[b] = g(b, h) || "null";
							return d = 0 === e.length ? "[]" : n ? "[\n" + n + e.join(",\n" + n) + "\n" + r + "]" : "[" + e.join(",") + "]", n = r, d
						}
						if (u && "object" == typeof u)
							for (y = u.length, b = 0; b < y; b += 1) "string" == typeof u[b] && (l = u[b], d = g(l, h), d && e.push(c(l) + (n ? ": " : ":") + d));
						else
							for (l in h) Object.prototype.hasOwnProperty.call(h, l) && (d = g(l, h), d && e.push(c(l) + (n ? ": " : ":") + d));
						return d = 0 === e.length ? "{}" : n ? "{\n" + n + e.join(",\n" + n) + "\n" + r + "}" : "{" + e.join(",") + "}", n = r, d
				}
			}
			var h = /^[\],:{}\s]*$/,
				p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				k = /(?:^|:|,)(?:\s*\[)+/g,
				f = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
				l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
				return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
			}, Boolean.prototype.toJSON = b, Number.prototype.toJSON = b, String.prototype.toJSON = b);
			var n, t, r, u;
			"function" != typeof JSON.stringify && (r = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			}, JSON.stringify = function(a, f, b) {
				var c;
				if (n = "", t = "", "number" == typeof b)
					for (c = 0; c < b; c += 1) t += " ";
				else "string" == typeof b && (t = b);
				if (u = f, f && "function" != typeof f && ("object" != typeof f || "number" != typeof f.length)) throw Error("JSON.stringify");
				return g("", {
					"": a
				})
			});
			"function" != typeof JSON.parse && (JSON.parse = function(a, f) {
				function b(a, c) {
					var n, l, d = a[c];
					if (d && "object" == typeof d)
						for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (l = b(d, n), void 0 !== l ? d[n] = l : delete d[n]);
					return f.call(a, c, d)
				}
				var c;
				if (a = String(a), l.lastIndex = 0, l.test(a) && (a = a.replace(l, function(a) {
						return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
					})), h.test(a.replace(p, "@").replace(z, "]").replace(k, ""))) return c = eval("(" + a + ")"), "function" == typeof f ? b({
					"": c
				}, "") : c;
				throw new SyntaxError("JSON.parse");
			})
		})();
		(function() {
			var a = Array.prototype,
				e = Object.prototype,
				d = a.slice,
				g = e.toString,
				h = e.hasOwnProperty,
				p = (Function.prototype.bind, a.forEach);
			a = (a.indexOf, Array.isArray);
			var z = {},
				k = c.each = function(a, b, c) {
					if (null == a) return !1;
					if (p && a.forEach === p) a.forEach(b, c);
					else if (a.length === +a.length)
						for (var f = 0, n = a.length; f < n; f++) {
							if (f in a && b.call(c, a[f], f, a) === z) return !1
						} else
							for (f in a)
								if (h.call(a, f) && b.call(c, a[f], f, a) === z) return !1
				};
			c.extend = function(a) {
				return k(d.call(arguments, 1), function(f) {
					for (var b in f) void 0 !== f[b] && (a[b] = f[b])
				}), a
			};
			c.extend2Lev = function(a) {
				return k(d.call(arguments, 1), function(f) {
					for (var b in f) void 0 !== f[b] && (c.isObject(f[b]) && c.isObject(a[b]) ? c.extend(a[b], f[b]) : a[b] = f[b])
				}), a
			};
			c.coverExtend = function(a) {
				return k(d.call(arguments, 1), function(f) {
					for (var b in f) void 0 !== f[b] && void 0 === a[b] && (a[b] = f[b])
				}), a
			};
			c.isArray = a || function(a) {
				return "[object Array]" === g.call(a)
			};
			c.isFunction = function(a) {
				if (!a) return !1;
				try {
					return /^\s*\bfunction\b/.test(a)
				} catch (l) {
					return !1
				}
			};
			c.isArguments = function(a) {
				return !(!a || !h.call(a, "callee"))
			};
			c.toArray = function(a) {
				return a ? a.toArray ? a.toArray() : c.isArray(a) ? d.call(a) : c.isArguments(a) ? d.call(a) : c.values(a) : []
			};
			c.values = function(a) {
				var f = [];
				return null == a ? f : (k(a, function(a) {
					f[f.length] = a
				}), f)
			};
			c.indexOf = function(a, b) {
				var f = a.indexOf;
				if (f) return f.call(a, b);
				for (f = 0; f < a.length; f++)
					if (b === a[f]) return f;
				return -1
			};
			c.filter = function(a, b, c) {
				var f = Object.prototype.hasOwnProperty;
				if (a.filter) return a.filter(b);
				for (var d = [], n = 0; n < a.length; n++)
					if (f.call(a, n)) {
						var e = a[n];
						b.call(c, e, n, a) && d.push(e)
					}
				return d
			};
			c.inherit = function(a, b) {
				return a.prototype = new b, a.prototype.constructor = a, a.superclass = b.prototype, a
			};
			c.trim = function(a) {
				return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
			};
			c.isObject = function(a) {
				return null != a && "[object Object]" == g.call(a)
			};
			c.isEmptyObject = function(a) {
				if (c.isObject(a)) {
					for (var f in a)
						if (h.call(a, f)) return !1;
					return !0
				}
				return !1
			};
			c.isUndefined = function(a) {
				return void 0 === a
			};
			c.isString = function(a) {
				return "[object String]" == g.call(a)
			};
			c.isDate = function(a) {
				return "[object Date]" == g.call(a)
			};
			c.isBoolean = function(a) {
				return "[object Boolean]" == g.call(a)
			};
			c.isNumber = function(a) {
				return "[object Number]" == g.call(a) && /[\d\.]+/.test(String(a))
			};
			c.isElement = function(a) {
				return !(!a || 1 !== a.nodeType)
			};
			c.isJSONString = function(a) {
				try {
					JSON.parse(a)
				} catch (l) {
					return !1
				}
				return !0
			};
			c.safeJSONParse = function(a) {
				var b = null;
				try {
					b = JSON.parse(a)
				} catch (n) {
					return !1
				}
				return b
			};
			c.decodeURIComponent = function(a) {
				var b = a;
				try {
					b = decodeURIComponent(a)
				} catch (n) {
					b = a
				}
				return b
			};
			c.encodeDates = function(a) {
				return c.each(a, function(b, f) {
					c.isDate(b) ? a[f] = c.formatDate(b) : c.isObject(b) && (a[f] = c.encodeDates(b))
				}), a
			};
			c.mediaQueriesSupported = function() {
				return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
			};
			c.getScreenOrientation = function() {
				var a = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
					b = "未取到值";
				a ? b = -1 < a.indexOf("landscape") ? "landscape" : "portrait" : c.mediaQueriesSupported() && (a = window.matchMedia || window.msMatchMedia, a("(orientation: landscape)").matches ? b = "landscape" : a("(orientation: portrait)").matches && (b = "portrait"));
				return b
			};
			c.now = Date.now || function() {
				return (new Date).getTime()
			};
			c.throttle = function(a, b, d) {
				var f, e, n, l = null,
					g = 0;
				d || (d = {});
				var h = function() {
					g = !1 === d.leading ? 0 : c.now();
					l = null;
					n = a.apply(f, e);
					l || (f = e = null)
				};
				return function() {
					var t = c.now();
					g || !1 !== d.leading || (g = t);
					var r = b - (t - g);
					return f = this, e = arguments, 0 >= r || r > b ? (l && (clearTimeout(l), l = null), g = t, n = a.apply(f, e), l || (f = e = null)) : l || !1 === d.trailing || (l = setTimeout(h, r)), n
				}
			};
			c.hashCode = function(a) {
				if ("string" != typeof a) return 0;
				var b = 0;
				if (0 == a.length) return b;
				for (var f = 0; f < a.length; f++) {
					var c = a.charCodeAt(f);
					b = (b << 5) - b + c;
					b &= b
				}
				return b
			};
			c.formatDate = function(a) {
				function b(a) {
					return 10 > a ? "0" + a : a
				}
				return a.getFullYear() + "-" + b(a.getMonth() + 1) + "-" + b(a.getDate()) + " " + b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds()) + "." + b(a.getMilliseconds())
			};
			c.searchObjDate = function(a) {
				c.isObject(a) && c.each(a, function(b, f) {
					c.isObject(b) ? c.searchObjDate(a[f]) : c.isDate(b) && (a[f] = c.formatDate(b))
				})
			};
			c.searchZZAppStyle = function(a) {
				"undefined" != typeof a.properties.$project && (a.project = a.properties.$project, delete a.properties.$project);
				"undefined" != typeof a.properties.$token && (a.token = a.properties.$token, delete a.properties.$token)
			};
			c.formatJsonString = function(a) {
				try {
					return JSON.stringify(a, null, "  ")
				} catch (l) {
					return JSON.stringify(a)
				}
			};
			c.formatString = function(a) {
				return a.length > b.para.max_string_length ? (b.log("字符串长度超过限制，已经做截取--" + a), a.slice(0, b.para.max_string_length)) : a
			};
			c.searchObjString = function(a) {
				c.isObject(a) && c.each(a, function(b, f) {
					c.isObject(b) ? c.searchObjString(a[f]) : c.isString(b) && (a[f] = c.formatString(b))
				})
			};
			c.parseSuperProperties = function(a) {
				c.isObject(a) && (c.each(a, function(f, d) {
					if (c.isFunction(f)) try {
						a[d] = f(), c.isFunction(a[d]) && (b.log("您的属性- " + d + " 格式不满足要求，我们已经将其删除"), delete a[d])
					} catch (t) {
						delete a[d], b.log("您的属性- " + d + " 抛出了异常，我们已经将其删除")
					}
				}), c.strip_sa_properties(a))
			};
			c.filterReservedProperties = function(a) {
				var f = "distinct_id user_id id date datetime event events first_id original_id device_id properties second_id time users".split(" ");
				c.isObject(a) && c.each(f, function(c, f) {
					c in a && (3 > f ? (delete a[c], b.log("您的属性- " + c + "是保留字段，我们已经将其删除")) : b.log("您的属性- " + c + "是保留字段，请避免其作为属性名"))
				})
			};
			c.searchConfigData = function(a) {
				if ("object" == typeof a && a.$option) {
					var b = a.$option;
					return delete a.$option, b
				}
				return {}
			};
			c.unique = function(a) {
				for (var b, c = [], f = {}, d = 0; d < a.length; d++) b = a[d], b in f || (f[b] = !0, c.push(b));
				return c
			};
			c.strip_sa_properties = function(a) {
				return c.isObject(a) ? (c.each(a, function(f, d) {
					if (c.isArray(f)) {
						var e = [];
						c.each(f, function(a) {
							c.isString(a) ? e.push(a) : b.log("您的数据-", d, f, "的数组里的值必须是字符串,已经将其删除")
						});
						0 !== e.length ? a[d] = e : (delete a[d], b.log("已经删除空的数组"))
					}
					c.isString(f) || c.isNumber(f) || c.isDate(f) || c.isBoolean(f) || c.isArray(f) || c.isFunction(f) || "$option" === d || (b.log("您的数据-", d, f, "-格式不满足要求，我们已经将其删除"), delete a[d])
				}), a) : a
			};
			c.strip_empty_properties = function(a) {
				var b = {};
				return c.each(a, function(a, c) {
					null != a && (b[c] = a)
				}), b
			};
			c.utf8Encode = function(a) {
				a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
				var b, c, f = "";
				var d = b = 0;
				var e = a.length;
				for (c = 0; c < e; c++) {
					var g = a.charCodeAt(c),
						h = null;
					128 > g ? b++ : h = 127 < g && 2048 > g ? String.fromCharCode(g >> 6 | 192, 63 & g | 128) : String.fromCharCode(g >> 12 | 224, g >> 6 & 63 | 128, 63 & g | 128);
					null !== h && (b > d && (f += a.substring(d, b)), f += h, d = b = c + 1)
				}
				return b > d && (f += a.substring(d, a.length)), f
			};
			c.base64Encode = function(a) {
				if ("function" == typeof btoa) return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, b) {
					return String.fromCharCode("0x" + b)
				}));
				a = String(a);
				var b = 0,
					f = 0,
					d = "";
				d = [];
				if (!a) return a;
				a = c.utf8Encode(a);
				do {
					var e = a.charCodeAt(b++);
					var g = a.charCodeAt(b++);
					var h = a.charCodeAt(b++);
					var p = e << 16 | g << 8 | h;
					e = p >> 18 & 63;
					g = p >> 12 & 63;
					h = p >> 6 & 63;
					p &= 63;
					d[f++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(p)
				} while (b < a.length);
				switch (d = d.join(""), a.length % 3) {
					case 1:
						d = d.slice(0, -2) + "\x3d\x3d";
						break;
					case 2:
						d = d.slice(0, -1) + "\x3d"
				}
				return d
			};
			c.UUID = function() {
				var a = function() {
						for (var a = 1 * new Date, b = 0; a == 1 * new Date;) b++;
						return a.toString(16) + b.toString(16)
					},
					b = function(a) {
						function b(a, b) {
							var c, d = 0;
							for (c = 0; c < b.length; c++) d |= f[c] << 8 * c;
							return a ^ d
						}
						var c = navigator.userAgent,
							f = [],
							d = 0;
						for (a = 0; a < c.length; a++) {
							var e = c.charCodeAt(a);
							f.unshift(255 & e);
							4 <= f.length && (d = b(d, f), f = [])
						}
						return 0 < f.length && (d = b(d, f)), d.toString(16)
					};
				return function() {
					var c = String(screen.height * screen.width);
					c = c && /\d{5,}/.test(c) ? c.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8);
					return (c = a() + "-" + Math.random().toString(16).replace(".", "") + "-" + b() + "-" + c + "-" + a()) ? c : (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15)
				}
			}();
			c.getQueryParam = function(a, b) {
				b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				a = c.decodeURIComponent(a);
				var f = (new RegExp("[\\?\x26]" + b + "\x3d([^\x26#]*)")).exec(a);
				return null === f || f && "string" != typeof f[1] && f[1].length ? "" : c.decodeURIComponent(f[1])
			};
			c.urlParse = function(a) {
				var b = function(a) {
					this._fields = {
						Username: 4,
						Password: 5,
						Port: 7,
						Protocol: 2,
						Host: 6,
						Path: 8,
						URL: 0,
						QueryString: 9,
						Fragment: 10
					};
					this._values = {};
					this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
					"undefined" != typeof a && this._parse(a)
				};
				return b.prototype.setUrl = function(a) {
					this._parse(a)
				}, b.prototype._initValues = function() {
					for (var a in this._fields) this._values[a] = ""
				}, b.prototype.addQueryString = function(a) {
					if ("object" != typeof a) return !1;
					var b = this._values.QueryString || "",
						c;
					for (c in a) b = (new RegExp(c + "[^\x26]+")).test(b) ? b.replace(new RegExp(c + "[^\x26]+"), c + "\x3d" + a[c]) : "\x26" === b.slice(-1) ? b + c + "\x3d" + a[c] : "" === b ? c + "\x3d" + a[c] : b + "\x26" + c + "\x3d" + a[c];
					this._values.QueryString = b
				}, b.prototype.getUrl = function() {
					var a = "";
					return a += this._values.Origin, a += this._values.Port ? ":" + this._values.Port : "", a += this._values.Path, a += this._values.QueryString ? "?" + this._values.QueryString : "", a + (this._values.Fragment ? "#" + this._values.Fragment : "")
				}, b.prototype.getUrl = function() {
					var a = "";
					return a += this._values.Origin, a += this._values.Port ? ":" + this._values.Port : "", a += this._values.Path, a + (this._values.QueryString ? "?" + this._values.QueryString : "")
				}, b.prototype._parse = function(a) {
					this._initValues();
					a = this._regex.exec(a);
					if (!a) throw "DPURLParser::_parse -\x3e Invalid URL";
					for (var b in this._fields) "undefined" != typeof a[this._fields[b]] && (this._values[b] = a[this._fields[b]]);
					this._values.Hostname = this._values.Host.replace(/:\d+$/, "");
					this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
				}, new b(a)
			};
			c.addEvent = function() {
				function a(b) {
					return b && (b.preventDefault = a.preventDefault, b.stopPropagation = a.stopPropagation, b._getPath = a._getPath), b
				}

				function d(b, c, f) {
					return function(d) {
						if (d = d || a(window.event)) {
							d.target = d.srcElement;
							var e, g, l = !0;
							return "function" == typeof f && (e = f(d)), g = c.call(b, d), !1 !== e && !1 !== g || (l = !1), l
						}
					}
				}
				a._getPath = function() {
					var a = this,
						b = function() {
							try {
								var b = a.target,
									c = [b];
								if (null === b || null === b.parentElement) return [];
								for (; null !== b.parentElement;) b = b.parentElement, c.unshift(b);
								return c
							} catch (y) {
								return []
							}
						};
					return this.path || this.composedPath && this.composedPath() || b()
				};
				a.preventDefault = function() {
					this.returnValue = !1
				};
				a.stopPropagation = function() {
					this.cancelBubble = !0
				};
				(function(f, e, g) {
					var l = !(!c.isObject(b.para.heatmap) || !b.para.heatmap.useCapture);
					f && f.addEventListener ? f.addEventListener(e, function(b) {
						b._getPath = a._getPath;
						g.call(this, b)
					}, l) : (e = "on" + e, f[e] = d(f, g, f[e]))
				}).apply(null, arguments)
			};
			c.addHashEvent = function(a) {
				c.addEvent(window, "pushState" in window.history ? "popstate" : "hashchange", a)
			};
			c.addSinglePageEvent = function(a) {
				var b = location.href,
					f = window.history.pushState,
					d = window.history.replaceState;
				window.history.pushState = function() {
					f.apply(window.history, arguments);
					a(b);
					b = location.href
				};
				window.history.replaceState = function() {
					d.apply(window.history, arguments);
					a(b);
					b = location.href
				};
				c.addEvent(window, f ? "popstate" : "hashchange", function() {
					a(b);
					b = location.href
				})
			};
			c.cookie = {
				get: function(a) {
					a += "\x3d";
					for (var b = document.cookie.split(";"), f = 0; f < b.length; f++) {
						for (var d = b[f];
							" " == d.charAt(0);) d = d.substring(1, d.length);
						if (0 == d.indexOf(a)) return c.decodeURIComponent(d.substring(a.length, d.length))
					}
					return null
				},
				set: function(a, d, e, g, h) {
					g = "undefined" == typeof g ? b.para.cross_subdomain : g;
					var f = "",
						l = "",
						n = "";
					if (e = null == e ? 73E3 : e, g) f = c.getCurrentDomain(location.href), "url解析失败" === f && (f = ""), f = f ? "; domain\x3d" + f : "";
					0 !== e && (l = new Date, "s" === String(e).slice(-1) ? l.setTime(l.getTime() + 1E3 * Number(String(e).slice(0, -1))) : l.setTime(l.getTime() + 864E5 * e), l = "; expires\x3d" + l.toGMTString());
					h && (n = "; secure");
					document.cookie = a + "\x3d" + encodeURIComponent(d) + l + "; path\x3d/" + f + n
				},
				remove: function(a, d) {
					d = "undefined" == typeof d ? b.para.cross_subdomain : d;
					c.cookie.set(a, "", -1, d)
				},
				getCookieName: function(a, d) {
					var f = "";
					if (d = d || location.href, !1 === b.para.cross_subdomain) {
						try {
							f = c.URL(d).hostname
						} catch (t) {}
						f = "string" == typeof f && "" !== f ? "sajssdk_2015_" + a + "_" + f.replace(/\./g, "_") : "sajssdk_2015_root_" + a
					} else f = "sajssdk_2015_cross_" + a;
					return f
				},
				getNewUser: function() {
					return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName("new_user"))
				}
			};
			c.getEleInfo = function(a) {
				if (!a.target) return !1;
				a = a.target;
				var f = a.tagName.toLowerCase(),
					d = {};
				d.$element_type = f;
				d.$element_name = a.getAttribute("name");
				d.$element_id = a.getAttribute("id");
				d.$element_class_name = "string" == typeof a.className ? a.className : null;
				d.$element_target_url = a.getAttribute("href");
				var e = "";
				return a.textContent ? e = c.trim(a.textContent) : a.innerText && (e = c.trim(a.innerText)), e && (e = e.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), d.$element_content = e || "", "input" === f && ("button" === a.type || "submit" === a.type ? d.$element_content = a.value || "" : b.para.heatmap && "function" == typeof b.para.heatmap.collect_input && b.para.heatmap.collect_input(a) && (d.$element_content = a.value || "")), d = c.strip_empty_properties(d),
					d.$url = location.href, d.$url_path = location.pathname, d.$title = document.title, d.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, d
			};
			c.localStorage = {
				get: function(a) {
					return window.localStorage.getItem(a)
				},
				parse: function(a) {
					try {
						var b = JSON.parse(c.localStorage.get(a)) || null
					} catch (n) {}
					return b
				},
				set: function(a, b) {
					window.localStorage.setItem(a, b)
				},
				remove: function(a) {
					window.localStorage.removeItem(a)
				},
				isSupport: function() {
					var a = !0;
					try {
						c.localStorage.set("__sensorsdatasupport__", "testIsSupportStorage"), "testIsSupportStorage" !== c.localStorage.get("__sensorsdatasupport__") && (a = !1), c.localStorage.remove("__sensorsdatasupport__")
					} catch (l) {
						a = !1
					}
					return a
				}
			};
			c.sessionStorage = {
				isSupport: function() {
					var a = !0;
					try {
						sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__sensorsdatasupport__", "testIsSupportStorage"), sessionStorage.removeItem("__sensorsdatasupport__", "testIsSupportStorage"), a = !0) : a = !1
					} catch (l) {
						a = !1
					}
					return a
				}
			};
			c.isSupportCors = function() {
				return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
			};
			c.xhr = function(a) {
				if (a) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
				if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
				if (window.ActiveXObject) try {
					return new ActiveXObject("Msxml2.XMLHTTP")
				} catch (l) {
					try {
						return new ActiveXObject("Microsoft.XMLHTTP")
					} catch (n) {}
				}
			};
			c.ajax = function(a) {
				function b(a) {
					if (!a) return "";
					try {
						return JSON.parse(a)
					} catch (u) {
						return {}
					}
				}
				a.timeout = a.timeout || 2E4;
				a.credentials = "undefined" == typeof a.credentials || a.credentials;
				var d = c.xhr(a.cors);
				if (!d) return !1;
				a.type || (a.type = a.data ? "POST" : "GET");
				a = c.extend({
					success: function() {},
					error: function() {}
				}, a);
				try {
					"object" == typeof d && "timeout" in d ? d.timeout = a.timeout : setTimeout(function() {
						d.abort()
					}, a.timeout + 500)
				} catch (r) {
					try {
						setTimeout(function() {
							d.abort()
						}, a.timeout + 500)
					} catch (u) {}
				}
				d.onreadystatechange = function() {
					try {
						4 == d.readyState && (200 <= d.status && 300 > d.status || 304 == d.status ? a.success(b(d.responseText)) : a.error(b(d.responseText), d.status), d.onreadystatechange = null, d.onload = null)
					} catch (r) {
						d.onreadystatechange = null, d.onload = null
					}
				};
				d.open(a.type, a.url, !0);
				try {
					if (a.credentials && (d.withCredentials = !0), c.isObject(a.header))
						for (var f in a.header) d.setRequestHeader(f, a.header[f]);
					a.data && (a.cors || d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === a.contentType ? d.setRequestHeader("Content-type", "application/json; charset\x3dUTF-8") : d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
				} catch (r) {}
				d.send(a.data || null)
			};
			c.loadScript = function(a) {
				a = c.extend({
					success: function() {},
					error: function() {},
					appendCall: function(a) {
						document.getElementsByTagName("head")[0].appendChild(a)
					}
				}, a);
				var b = null;
				"css" === a.type && (b = document.createElement("link"), b.rel = "stylesheet", b.href = a.url);
				"js" === a.type && (b = document.createElement("script"), b.async = "async", b.setAttribute("charset", "UTF-8"), b.src = a.url, b.type = "text/javascript");
				b.onload = b.onreadystatechange = function() {
					this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (a.success(), b.onload = b.onreadystatechange = null)
				};
				b.onerror = function() {
					a.error();
					b.onerror = null
				};
				a.appendCall(b)
			};
			c.getHostname = function(a, b) {
				b && "string" == typeof b || (b = "hostname解析异常");
				var d = null;
				try {
					d = c.URL(a).hostname
				} catch (t) {}
				return d || b
			};
			c.getQueryParamsFromUrl = function(a) {
				var b = {};
				a = a.split("?")[1] || "";
				return a && (b = c.getURLSearchParams("?" + a)), b
			};
			c.getURLSearchParams = function(a) {
				var b = {};
				a = (a || "").substring(1).split("\x26");
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf("\x3d");
					if (-1 !== d) {
						var f = a[c].substring(0, d);
						d = a[c].substring(d + 1);
						f = decodeURIComponent(f);
						d = decodeURIComponent(d);
						b[f] = d
					}
				}
				return b
			};
			c.URL = function(a) {
				var b = {},
					d = "hash host hostname href origin password pathname port protocol search username".split(" ");
				if ("function" == typeof window.URL && function() {
						var a;
						try {
							return a = new URL("http://modernizr.com/"), "http://modernizr.com/" === a.href
						} catch (y) {
							return !1
						}
					}()) b = new URL(a);
				else {
					if (!1 === /^https?:\/\/.+/.test(a)) throw "Invalid URL";
					var f = document.createElement("a");
					f.href = a;
					for (a = d.length - 1; 0 <= a; a--) {
						var e = d[a];
						b[e] = f[e]
					}
					b.hostname && "string" == typeof b.pathname && 0 !== b.pathname.indexOf("/") && (b.pathname = "/" + b.pathname);
					b.searchParams = function() {
						var a = c.getURLSearchParams(b.search);
						return {
							get: function(b) {
								return a[b]
							}
						}
					}()
				}
				return b
			};
			c.getCurrentDomain = function(a) {
				var d = b.para.current_domain;
				switch (typeof d) {
					case "function":
						return a = d(), "" === a || "" === c.trim(a) ? "url解析失败" : -1 !== a.indexOf(".") ? a : "url解析失败";
					case "string":
						return "" === d || "" === c.trim(d) ? "url解析失败" : -1 !== d.indexOf(".") ? d : "url解析失败";
					default:
						return d = c.getCookieTopLevelDomain(), "" === a ? "url解析失败" : "" === d ? "url解析失败" : d
				}
			};
			c.getCookieTopLevelDomain = function(a) {
				a = a || window.location.hostname;
				var b = a.split(".");
				if (c.isArray(b) && 2 <= b.length && !/^(\d+\.)+\d+$/.test(a))
					for (a = "." + b.splice(b.length - 1, 1); 0 < b.length;)
						if (a = "." + b.splice(b.length - 1, 1) + a, document.cookie = "sensorsdata_domain_test\x3dtrue; path\x3d/; domain\x3d" + a, -1 !== document.cookie.indexOf("sensorsdata_domain_test\x3dtrue")) return b = new Date, b.setTime(b.getTime() - 1E3), document.cookie = "sensorsdata_domain_test\x3dtrue; expires\x3d" + b.toGMTString() + "; path\x3d/; domain\x3d" + a, a;
				return ""
			};
			c.isReferralTraffic = function(a) {
				return a = a || document.referrer, "" === a || c.getCookieTopLevelDomain(c.getHostname(a)) !== c.getCookieTopLevelDomain()
			};
			c.ry = function(a) {
				return new c.ry.init(a)
			};
			c.ry.init = function(a) {
				this.ele = a
			};
			c.ry.init.prototype = {
				addClass: function(a) {
					return -1 === (" " + this.ele.className + " ").indexOf(" " + a + " ") && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + a), this
				},
				removeClass: function(a) {
					var b = " " + this.ele.className + " ";
					return -1 !== b.indexOf(" " + a + " ") && (this.ele.className = b.replace(" " + a + " ", " ").slice(1, -1)), this
				},
				hasClass: function(a) {
					return -1 !== (" " + this.ele.className + " ").indexOf(" " + a + " ")
				},
				attr: function(a, b) {
					return "string" == typeof a && c.isUndefined(b) ? this.ele.getAttribute(a) : ("string" == typeof a && (b = String(b), this.ele.setAttribute(a, b)), this)
				},
				offset: function() {
					var a = this.ele.getBoundingClientRect();
					if (a.width || a.height) {
						var b = this.ele.ownerDocument.documentElement;
						return {
							top: a.top + window.pageYOffset - b.clientTop,
							left: a.left + window.pageXOffset - b.clientLeft
						}
					}
					return {
						top: 0,
						left: 0
					}
				},
				getSize: function() {
					if (!window.getComputedStyle) return {
						width: this.ele.offsetWidth,
						height: this.ele.offsetHeight
					};
					try {
						var a = this.ele.getBoundingClientRect();
						return {
							width: a.width,
							height: a.height
						}
					} catch (l) {
						return {
							width: 0,
							height: 0
						}
					}
				},
				getStyle: function(a) {
					return this.ele.currentStyle ? this.ele.currentStyle[a] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(a)
				},
				wrap: function(a) {
					a = document.createElement(a);
					return this.ele.parentNode.insertBefore(a, this.ele), a.appendChild(this.ele), c.ry(a)
				},
				getCssStyle: function(a) {
					var b = this.ele.style.getPropertyValue(a);
					if (b) return b;
					var d = null;
					if ("function" == typeof window.getMatchedCSSRules && (d = getMatchedCSSRules(this.ele)), !d || !c.isArray(d)) return null;
					for (var e = d.length - 1; 0 <= e; e--)
						if (b = d[e].style.getPropertyValue(a)) return b
				},
				sibling: function(a, b) {
					for (;
						(a = a[b]) && 1 !== a.nodeType;);
					return a
				},
				next: function() {
					return this.sibling(this.ele, "nextSibling")
				},
				prev: function(a) {
					return this.sibling(this.ele, "previousSibling")
				},
				siblings: function(a) {
					return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
				},
				children: function(a) {
					return this.siblings(this.ele.firstChild)
				},
				parent: function() {
					var a = this.ele.parentNode;
					return a = a && 11 !== a.nodeType ? a : null, c.ry(a)
				}
			};
			c.strToUnicode = function(a) {
				if ("string" != typeof a) return b.log("转换unicode错误", a), a;
				for (var c = "", d = 0; d < a.length; d++) c += "\\" + a.charCodeAt(d).toString(16);
				return c
			};
			c.getReferrer = function(a) {
				a = a || document.referrer;
				return "string" != typeof a ? "取值异常_referrer异常_" + String(a) : (0 === a.indexOf("https://www.baidu.com/") && (a = a.split("?")[0]), a = a.slice(0, b.para.max_referrer_string_length), "string" == typeof a ? a : "")
			};
			c.getKeywordFromReferrer = function(a) {
				a = a || document.referrer;
				var d = b.para.source_type.keyword;
				if (document && "string" == typeof a) {
					if (0 === a.indexOf("http")) {
						var e = c.getReferSearchEngine(a);
						a = c.getQueryParamsFromUrl(a);
						if (c.isEmptyObject(a)) return "未取到值";
						var g = null,
							f;
						for (f in d)
							if (e === f && "object" == typeof a)
								if (g = d[f], c.isArray(g))
									for (f = 0; f < g.length; f++) {
										var h = a[g[f]];
										if (h) return h
									} else if (a[g]) return a[g];
						return "未取到值"
					}
					return "" === a ? "未取到值_直接打开" : "未取到值_非http的url"
				}
				return "取值异常_referrer异常_" + String(a)
			};
			c.getReferSearchEngine = function(a) {
				a = c.getHostname(a);
				if (!a || "hostname解析异常" === a) return "";
				var d = (b.para.source_type.keyword, {
						baidu: [/^.*\.baidu\.com$/],
						bing: [/^.*\.bing\.com$/],
						google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
						sm: [/^m\.sm\.cn$/],
						so: [/^.+\.so\.com$/],
						sogou: [/^.*\.sogou\.com$/],
						yahoo: [/^.*\.yahoo\.com$/]
					}),
					e;
				for (e in d)
					for (var g = d[e], f = 0, h = g.length; f < h; f++)
						if (g[f].test(a)) return e;
				return "未知搜索引擎"
			};
			c.getSourceFromReferrer = function() {
				function a(a, b) {
					for (var c = 0; c < a.length; c++)
						if (-1 !== b.split("?")[0].indexOf(a[c])) return !0
				}
				var d = "(" + b.para.source_type.utm.join("|") + ")\\\x3d[^\x26]+",
					e = b.para.source_type.search,
					g = b.para.source_type.social,
					h = document.referrer || "",
					p = c.info.pageProp.url;
				return p ? (d = p.match(new RegExp(d))) && d[0] ? "付费广告流量" : a(e, h) ? "自然搜索流量" : a(g, h) ? "社交网站流量" : "" === h ? "直接流量" : "引荐流量" : "获取url异常"
			};
			c.info = {
				initPage: function() {
					var a = c.getReferrer(),
						d = location.href,
						e = c.getCurrentDomain(d);
					e || b.debug.jssdkDebug("url_domain异常_" + d + "_" + e);
					this.pageProp = {
						referrer: a,
						referrer_host: a ? c.getHostname(a) : "",
						url: d,
						url_host: c.getHostname(d, "url_host取值异常"),
						url_domain: e
					}
				},
				pageProp: {},
				campaignParams: function() {
					var a = b.source_channel_standard.split(" "),
						d = "",
						e = {};
					return c.isArray(b.para.source_channel) && 0 < b.para.source_channel.length && (a = a.concat(b.para.source_channel), a = c.unique(a)), c.each(a, function(a) {
						d = c.getQueryParam(location.href, a);
						d.length && (e[a] = d)
					}), e
				},
				campaignParamsStandard: function(a, d) {
					a = a || "";
					d = d || "";
					var e = c.info.campaignParams(),
						g = {},
						f = {},
						h;
					for (h in e) - 1 !== (" " + b.source_channel_standard + " ").indexOf(" " + h + " ") ? g[a + h] = e[h] : f[d + h] = e[h];
					return {
						$utms: g,
						otherUtms: f
					}
				},
				properties: function() {
					return {
						$screen_height: Number(screen.height) || 0,
						$screen_width: Number(screen.width) || 0,
						$lib: "js",
						$lib_version: String(b.lib_version)
					}
				},
				currentProps: {},
				register: function(a) {
					c.extend(c.info.currentProps, a)
				}
			};
			c.autoExeQueue = function() {
				return {
					items: [],
					enqueue: function(a) {
						this.items.push(a);
						this.start()
					},
					dequeue: function() {
						return this.items.shift()
					},
					getCurrentItem: function() {
						return this.items[0]
					},
					isRun: !1,
					start: function() {
						0 < this.items.length && !this.isRun && (this.isRun = !0, this.getCurrentItem().start())
					},
					close: function() {
						this.dequeue();
						this.isRun = !1;
						this.start()
					}
				}
			};
			c.trackLink = function(a, d, e) {
				function g(a) {
					function c() {
						g || (g = !0, location.href = f.href)
					}
					a.stopPropagation();
					a.preventDefault();
					var g = !1;
					setTimeout(c, 1E3);
					b.track(d, e, c)
				}
				a = a || {};
				var f = null;
				return a.ele && (f = a.ele), a.event && (f = a.target ? a.target : a.event.target), e = e || {}, !(!f || "object" != typeof f) && (!f.href || /^javascript/.test(f.href) || f.target || f.download || f.onclick ? (b.track(d, e), !1) : (a.event && g(a.event), void(a.ele && c.addEvent(a.ele, "click", function(a) {
					g(a)
				}))))
			}
		})();
		b.para_default = {
			preset_properties: {
				latest_utm: !0,
				latest_traffic_source_type: !0,
				latest_search_keyword: !0,
				latest_referrer: !0,
				latest_referrer_host: !1,
				latest_landing_page: !1,
				url: !1,
				title: !1
			},
			img_use_crossorigin: !1,
			name: "sa",
			max_referrer_string_length: 200,
			max_string_length: 500,
			cross_subdomain: !0,
			show_log: !0,
			is_debug: !1,
			debug_mode: !1,
			debug_mode_upload: !1,
			session_time: 0,
			use_client_time: !1,
			source_channel: [],
			send_type: "image",
			vtrack_ignore: {},
			auto_init: !0,
			is_track_single_page: !1,
			is_single_page: !1,
			batch_send: !1,
			source_type: {},
			callback_timeout: 200,
			datasend_timeout: 3E3,
			queue_timeout: 300,
			is_track_device_id: !1,
			use_app_track: !1,
			use_app_track_is_send: !0,
			ignore_oom: !0
		};
		b.addReferrerHost = function(a) {
			c.isObject(a.properties) && (a.properties.$first_referrer && (a.properties.$first_referrer_host = c.getHostname(a.properties.$first_referrer, "取值异常")), "track" === a.type && ("$referrer" in a.properties && (a.properties.$referrer_host = "" === a.properties.$referrer ? "" : c.getHostname(a.properties.$referrer, "取值异常")), b.para.preset_properties.latest_referrer && b.para.preset_properties.latest_referrer_host && (a.properties.$latest_referrer_host = "" === a.properties.$latest_referrer ? "" : c.getHostname(a.properties.$latest_referrer, "取值异常"))))
		};
		b.addPropsHook = function(a) {
			b.para.preset_properties && b.para.preset_properties.url && "track" === a.type && "undefined" == typeof a.properties.$url && (a.properties.$url = window.location.href);
			b.para.preset_properties && b.para.preset_properties.title && "track" === a.type && "undefined" == typeof a.properties.$title && (a.properties.$title = document.title)
		};
		b.initPara = function(a) {
			b.para = a || b.para || {};
			a = {};
			if (c.isObject(b.para.is_track_latest))
				for (var e in b.para.is_track_latest) a["latest_" + e] = b.para.is_track_latest[e];
			b.para.preset_properties = c.extend({}, b.para_default.preset_properties, a, b.para.preset_properties || {});
			for (var d in b.para_default) void 0 === b.para[d] && (b.para[d] = b.para_default[d]);
			"string" == typeof b.para.server_url && "://" === b.para.server_url.slice(0, 3) && (b.para.server_url = location.protocol + b.para.server_url);
			"string" == typeof b.para.web_url && "://" === b.para.web_url.slice(0, 3) && (b.para.web_url = location.protocol + b.para.web_url);
			"image" !== b.para.send_type && "ajax" !== b.para.send_type && "beacon" !== b.para.send_type && (b.para.send_type = "image");
			e = {
				datasend_timeout: 6E3,
				send_interval: 6E3,
				one_send_max_length: 6
			};
			c.localStorage.isSupport() && c.isSupportCors() && "object" == typeof localStorage ? !0 === b.para.batch_send ? (b.para.batch_send = c.extend({}, e), b.para.use_client_time = !0) : "object" == typeof b.para.batch_send && (b.para.use_client_time = !0, b.para.batch_send = c.extend({}, e, b.para.batch_send)) : b.para.batch_send = !1;
			e = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
			d = "www.baidu. m.baidu. m.sm.cn so.com sogou.com youdao.com google. yahoo.com/ bing.com/ ask.com/".split(" ");
			a = "weibo.com renren.com kaixin001.com douban.com qzone.qq.com zhihu.com tieba.baidu.com weixin.qq.com".split(" ");
			var g = {
				baidu: ["wd", "word", "kw", "keyword"],
				google: "q",
				bing: "q",
				yahoo: "p",
				sogou: ["query", "keyword"],
				so: "q",
				sm: "q"
			};
			if ("object" == typeof b.para.source_type && (b.para.source_type.utm = c.isArray(b.para.source_type.utm) ? b.para.source_type.utm.concat(e) : e, b.para.source_type.search = c.isArray(b.para.source_type.search) ? b.para.source_type.search.concat(d) : d, b.para.source_type.social = c.isArray(b.para.source_type.social) ? b.para.source_type.social.concat(a) : a, b.para.source_type.keyword = c.isObject(b.para.source_type.keyword) ? c.extend(g, b.para.source_type.keyword) : g), c.isObject(b.para.heatmap) && (b.para.heatmap.clickmap = b.para.heatmap.clickmap || "default", b.para.heatmap.scroll_notice_map = b.para.heatmap.scroll_notice_map || "default", b.para.heatmap.scroll_delay_time = b.para.heatmap.scroll_delay_time || 4E3, b.para.heatmap.scroll_event_duration = b.para.heatmap.scroll_event_duration || 18E3, b.para.heatmap.renderRefreshTime = b.para.heatmap.renderRefreshTime || 1E3, b.para.heatmap.loadTimeout = b.para.heatmap.loadTimeout || 1E3), "object" == typeof b.para.server_url && b.para.server_url.length)
				for (d = 0; d < b.para.server_url.length; d++) /sa\.gif[^\/]*$/.test(b.para.server_url[d]) || (b.para.server_url[d] = b.para.server_url[d].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
			else /sa\.gif[^\/]*$/.test(b.para.server_url) || (b.para.server_url = b.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
			"string" == typeof b.para.server_url && (b.para.debug_mode_url = b.para.debug_mode_url || b.para.server_url.replace("sa.gif", "debug"));
			!0 === b.para.noCache ? b.para.noCache = "?" + (new Date).getTime() : b.para.noCache = "";
			b.para.callback_timeout > b.para.datasend_timeout && (b.para.datasend_timeout = b.para.callback_timeout);
			b.para.callback_timeout > b.para.queue_timeout && (b.para.queue_timeout = b.para.callback_timeout);
			b.para.queue_timeout > b.para.datasend_timeout && (b.para.datasend_timeout = b.para.queue_timeout)
		};
		b.readyState = {
			state: 0,
			historyState: [],
			stateType: {
				1: "1-init未开始",
				2: "2-init开始",
				3: "3-store完成"
			},
			getState: function() {
				return this.historyState.join("\n")
			},
			setState: function(a) {
				String(a) in this.stateType && (this.state = a);
				this.historyState.push(this.stateType[a])
			}
		};
		b.setPreConfig = function(a) {
			b.para = a.para;
			b._q = a._q
		};
		b.setInitVar = function() {
			b._t = b._t || 1 * new Date;
			b.lib_version = "1.14.22";
			b.is_first_visitor = !1;
			b.source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term"
		};
		b.log = function() {
			if ((c.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || b.para.show_log) && (!0 !== b.para.show_log && "string" !== b.para.show_log && !1 !== b.para.show_log || (arguments[0] = c.formatJsonString(arguments[0])), "object" == typeof console && console.log)) try {
				return console.log.apply(console, arguments)
			} catch (a) {
				console.log(arguments[0])
			}
		};
		b.enableLocalLog = function() {
			if (c.sessionStorage.isSupport()) try {
				sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
			} catch (a) {
				b.log("enableLocalLog error: " + a.message)
			}
		};
		b.disableLocalLog = function() {
			c.sessionStorage.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
		};
		b.debug = {
			distinct_id: function() {},
			jssdkDebug: function() {},
			_sendDebug: function(a) {
				b.track("_sensorsdata2019_debug", {
					_jssdk_debug_info: a
				})
			},
			apph5: function(a) {
				var e = {
						1: "app_h5打通失败-use_app_track为false",
						2: "app_h5打通失败-Android或者iOS，没有暴露相应方法",
						"3.1": "app_h5打通失败-Android校验server_url失败",
						"3.2": "app_h5打通失败-iOS校验server_url失败"
					},
					d = a.output,
					g = a.step;
				a = a.data;
				"all" !== d && "console" !== d || b.log(e[g]);
				("all" === d || "code" === d) && c.isObject(b.para.is_debug) && b.para.is_debug.apph5 && (a.type && "profile" === a.type.slice(0, 7) || (a.properties._jssdk_debug_info = "apph5-" + String(g)))
			}
		};
		var C = {
			setOnlineState: function(a) {
				!0 === a && c.isObject(b.para.jsapp) && "function" == typeof b.para.jsapp.getData ? (b.para.jsapp.isOnline = !0, a = b.para.jsapp.getData(), c.isArray(a) && 0 < a.length && c.each(a, function(a) {
					c.isJSONString(a) && b.sendState.pushSend(JSON.parse(a))
				})) : b.para.jsapp.isOnline = !1
			},
			autoTrackIsUsed: !1,
			isReady: function(a) {
				a()
			},
			getUtm: function() {
				return c.info.campaignParams()
			},
			getStayTime: function() {
				return (new Date - b._t) / 1E3
			},
			setProfileLocal: function(a) {
				if (!c.localStorage.isSupport()) return b.setProfile(a), !1;
				if (!c.isObject(a) || c.isEmptyObject(a)) return !1;
				var e = c.localStorage.parse("sensorsdata_2015_jssdk_profile"),
					d = !1;
				if (c.isObject(e) && !c.isEmptyObject(e)) {
					for (var g in a) !(g in e && e[g] !== a[g]) && g in e || (e[g] = a[g], d = !0);
					d && (c.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)), b.setProfile(a))
				} else c.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(a)), b.setProfile(a)
			},
			setInitReferrer: function() {
				var a = c.getReferrer();
				b.setOnceProfile({
					_init_referrer: a,
					_init_referrer_host: c.info.pageProp.referrer_host
				})
			},
			setSessionReferrer: function() {
				var a = c.getReferrer();
				k.setSessionPropsOnce({
					_session_referrer: a,
					_session_referrer_host: c.info.pageProp.referrer_host
				})
			},
			setDefaultAttr: function() {
				c.info.register({
					_current_url: location.href,
					_referrer: c.getReferrer(),
					_referring_host: c.info.pageProp.referrer_host
				})
			},
			trackHeatMap: function(a, b, c) {
				if ("object" == typeof a && a.tagName) {
					var d = a.tagName.toLowerCase(),
						e = a.parentNode.tagName.toLowerCase();
					"button" !== d && "a" !== d && "a" !== e && "button" !== e && "input" !== d && "textarea" !== d && A.start(null, a, d, b, c)
				}
			},
			trackAllHeatMap: function(a, b, c) {
				if ("object" == typeof a && a.tagName) {
					var d = a.tagName.toLowerCase();
					A.start(null, a, d, b, c)
				}
			},
			autoTrackSinglePage: function(a, e) {
				function d() {
					var a = c.info.campaignParams(),
						d = {},
						e;
					for (e in a) - 1 !== (" " + b.source_channel_standard + " ").indexOf(" " + e + " ") ? d["$" + e] = a[e] : d[e] = a[e];
					return d
				}

				function g(a, e) {
					b.track("$pageview", c.extend({
						$referrer: h,
						$url: location.href,
						$url_path: location.pathname,
						$title: document.title
					}, a, d()), e);
					h = location.href
				}
				var h = this.autoTrackIsUsed ? c.info.pageProp.url : c.info.pageProp.referrer;
				a = c.isObject(a) ? a : {};
				a = c.isObject(a) ? a : {};
				b.is_first_visitor && !a.not_set_profile && (b.setOnceProfile(c.extend({
					$first_visit_time: new Date,
					$first_referrer: c.getReferrer(),
					$first_browser_language: navigator.language || "取值异常",
					$first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "取值异常",
					$first_traffic_source_type: c.getSourceFromReferrer(),
					$first_search_keyword: c.getKeywordFromReferrer()
				}, d())), b.is_first_visitor = !1);
				a.not_set_profile && delete a.not_set_profile;
				g(a, e);
				this.autoTrackSinglePage = g
			},
			autoTrackWithoutProfile: function(a, b) {
				a = c.isObject(a) ? a : {};
				this.autoTrack(c.extend(a, {
					not_set_profile: !0
				}), b)
			},
			autoTrack: function(a, e) {
				a = c.isObject(a) ? a : {};
				var d = c.info.campaignParams(),
					g = {},
					h;
				for (h in d) - 1 !== (" " + b.source_channel_standard + " ").indexOf(" " + h + " ") ? g["$" + h] = d[h] : g[h] = d[h];
				b.is_first_visitor && !a.not_set_profile && (b.setOnceProfile(c.extend({
					$first_visit_time: new Date,
					$first_referrer: c.getReferrer(),
					$first_browser_language: navigator.language || "取值异常",
					$first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "取值异常",
					$first_traffic_source_type: c.getSourceFromReferrer(),
					$first_search_keyword: c.getKeywordFromReferrer()
				}, g)), b.is_first_visitor = !1);
				a.not_set_profile && delete a.not_set_profile;
				var p = location.href;
				b.para.is_single_page && c.addHashEvent(function() {
					var d = c.getReferrer(p);
					b.track("$pageview", c.extend({
						$referrer: d,
						$url: location.href,
						$url_path: location.pathname,
						$title: document.title
					}, g, a), e);
					p = location.href
				});
				b.track("$pageview", c.extend({
					$referrer: c.getReferrer(),
					$url: location.href,
					$url_path: location.pathname,
					$title: document.title
				}, g, a), e);
				this.autoTrackIsUsed = !0
			},
			getAnonymousID: function() {
				return c.isEmptyObject(b.store._state) ? "请先初始化SDK" : b.store._state._first_id || b.store._state.first_id || b.store._state._distinct_id || b.store._state.distinct_id
			}
		};
		b.quick = function() {
			var a = Array.prototype.slice.call(arguments),
				c = a[0],
				d = a.slice(1);
			return "string" == typeof c && C[c] ? C[c].apply(C, d) : void("function" == typeof c ? c.apply(b, d) : b.log("quick方法中没有这个功能" + a[0]))
		};
		b.track = function(a, b, c) {
			q.check({
				event: a,
				properties: b
			}) && q.send({
				type: "track",
				event: a,
				properties: b
			}, c)
		};
		b.trackLink = function(a, b, d) {
			"object" == typeof a && a.tagName ? c.trackLink({
				ele: a
			}, b, d) : "object" == typeof a && a.target && a.event && c.trackLink(a, b, d)
		};
		b.trackLinks = function(a, e, d) {
			return d = d || {}, !(!a || "object" != typeof a) && !(!a.href || /^javascript/.test(a.href) || a.target) && void c.addEvent(a, "click", function(c) {
				function g() {
					p || (p = !0, location.href = a.href)
				}
				c.preventDefault();
				var p = !1;
				setTimeout(g, 1E3);
				b.track(e, d, g)
			})
		};
		b.setProfile = function(a, b) {
			q.check({
				propertiesMust: a
			}) && q.send({
				type: "profile_set",
				properties: a
			}, b)
		};
		b.setOnceProfile = function(a, b) {
			q.check({
				propertiesMust: a
			}) && q.send({
				type: "profile_set_once",
				properties: a
			}, b)
		};
		b.appendProfile = function(a, e) {
			q.check({
				propertiesMust: a
			}) && (c.each(a, function(d, e) {
				c.isString(d) ? a[e] = [d] : c.isArray(d) || (delete a[e], b.log("appendProfile属性的值必须是字符串或者数组"))
			}), c.isEmptyObject(a) || q.send({
				type: "profile_append",
				properties: a
			}, e))
		};
		b.incrementProfile = function(a, e) {
			var d = a;
			c.isString(a) && (a = {}, a[d] = 1);
			if (q.check({
					propertiesMust: a
				})) {
				a: {
					d = a;
					for (g in d)
						if (!/-*\d+/.test(String(d[g]))) {
							var g = !1;
							break a
						}
					g = !0
				}
				g ? q.send({
					type: "profile_increment",
					properties: a
				}, e) : b.log("profile_increment的值只能是数字")
			}
		};
		b.deleteProfile = function(a) {
			q.send({
				type: "profile_delete"
			}, a);
			k.set("distinct_id", c.UUID());
			k.set("first_id", "")
		};
		b.unsetProfile = function(a, e) {
			var d = a,
				g = {};
			c.isString(a) && (a = [], a.push(d));
			c.isArray(a) ? (c.each(a, function(a) {
				c.isString(a) ? g[a] = !0 : b.log("profile_unset给的数组里面的值必须时string,已经过滤掉", a)
			}), q.send({
				type: "profile_unset",
				properties: g
			}, e)) : b.log("profile_unset的参数是数组")
		};
		b.identify = function(a, e) {
			"number" == typeof a && (a = String(a));
			var d = k.getFirstId();
			"undefined" == typeof a ? d ? k.set("first_id", c.UUID()) : k.set("distinct_id", c.UUID()) : q.check({
				distinct_id: a
			}) ? !0 === e ? d ? k.set("first_id", a) : k.set("distinct_id", a) : d ? k.change("first_id", a) : k.change("distinct_id", a) : b.log("identify的参数必须是字符串")
		};
		b.trackSignup = function(a, b, c, g) {
			if (q.check({
					distinct_id: a,
					event: b,
					properties: c
				})) {
				var d = k.getFirstId() || k.getDistinctId();
				k.set("distinct_id", a);
				q.send({
					original_id: d,
					distinct_id: a,
					type: "track_signup",
					event: b,
					properties: c
				}, g)
			}
		};
		b.trackAbtest = function(a, b) {};
		b.registerPage = function(a) {
			q.check({
				properties: a
			}) ? c.extend(c.info.currentProps, a) : b.log("register输入的参数有误")
		};
		b.clearAllRegister = function(a) {
			k.clearAllProps(a)
		};
		b.register = function(a) {
			q.check({
				properties: a
			}) ? k.setProps(a) : b.log("register输入的参数有误")
		};
		b.registerOnce = function(a) {
			q.check({
				properties: a
			}) ? k.setPropsOnce(a) : b.log("registerOnce输入的参数有误")
		};
		b.registerSession = function(a) {
			q.check({
				properties: a
			}) ? k.setSessionProps(a) : b.log("registerSession输入的参数有误")
		};
		b.registerSessionOnce = function(a) {
			q.check({
				properties: a
			}) ? k.setSessionPropsOnce(a) : b.log("registerSessionOnce输入的参数有误")
		};
		b.login = function(a, c) {
			if ("number" == typeof a && (a = String(a)), q.check({
					distinct_id: a
				})) {
				var d = k.getFirstId(),
					e = k.getDistinctId();
				a !== e ? (d || k.set("first_id", e), b.trackSignup(a, "$SignUp", {}, c)) : c && c()
			} else b.log("login的参数必须是字符串"), c && c()
		};
		b.logout = function(a) {
			var e = k.getFirstId();
			e ? (k.set("first_id", ""), !0 === a ? k.set("distinct_id", c.UUID()) : k.set("distinct_id", e)) : b.log("没有first_id，logout失败")
		};
		b.getPresetProperties = function() {
			var a = {
				$referrer: c.info.pageProp.referrer || "",
				$referrer_host: c.info.pageProp.referrer ? c.getHostname(c.info.pageProp.referrer) : "",
				$url: location.href,
				$url_path: location.pathname,
				$title: document.title || "",
				_distinct_id: k.getDistinctId()
			};
			a = c.extend({}, c.info.properties(), b.store.getProps(), function() {
				var a = c.info.campaignParams(),
					d = {},
					g;
				for (g in a) - 1 !== (" " + b.source_channel_standard + " ").indexOf(" " + g + " ") ? d["$" + g] = a[g] : d[g] = a[g];
				return d
			}(), a);
			return b.para.preset_properties.latest_referrer && b.para.preset_properties.latest_referrer_host && (a.$latest_referrer_host = "" === a.$latest_referrer ? "" : c.getHostname(a.$latest_referrer)), a
		};
		x.prototype = {
			add: function(a) {
				c.isObject(a) && (this.writeStore(a), "track_signup" !== a.type && "$pageview" !== a.event || this.sendStrategy())
			},
			remove: function(a) {
				0 < this.sendingData && --this.sendingData;
				c.isArray(a) && 0 < a.length && c.each(a, function(a) {
					c.localStorage.remove(a)
				})
			},
			send: function(a) {
				var e = this,
					d = c.isArray(b.para.server_url) ? b.para.server_url[0] : b.para.server_url;
				c.ajax({
					url: d,
					type: "POST",
					data: "data_list\x3d" + encodeURIComponent(c.base64Encode(JSON.stringify(a.vals))),
					credentials: !1,
					timeout: b.para.batch_send.datasend_timeout,
					cors: !0,
					success: function() {
						e.remove(a.keys)
					},
					error: function() {
						0 < e.sendingData && --e.sendingData
					}
				})
			},
			sendPrepare: function(a) {
				var c = a.vals,
					d = b.para.batch_send.one_send_max_length,
					g = c.length;
				if (0 < g)
					if (g <= d) this.send({
						keys: a.keys,
						vals: c
					});
					else
						for (var h = 0; h * d < g; h++) this.send({
							keys: a.keys.splice(0, d),
							vals: c.splice(0, d)
						})
			},
			sendStrategy: function() {
				var a = this.readStore();
				0 < a.keys.length && 0 === this.sendingData && (this.sendingData = Math.ceil(a.vals.length / b.para.batch_send.one_send_max_length), this.sendPrepare(a))
			},
			batchInterval: function() {
				var a = this;
				setInterval(function() {
					a.sendStrategy()
				}, b.para.batch_send.send_interval)
			},
			readStore: function() {
				for (var a = [], e = [], d = null, g = (new Date).getTime(), h = localStorage.length, p = 0; p < h; p++) {
					var k = localStorage.key(p);
					0 === k.indexOf("sawebjssdk-") && /^sawebjssdk\-\d+$/.test(k) && (d = localStorage.getItem(k), d ? (d = c.safeJSONParse(d), d && c.isObject(d) ? (d._flush_time = g, a.push(k), e.push(d)) : (localStorage.removeItem(k), b.log("localStorage-数据parse异常" + d))) : (localStorage.removeItem(k), b.log("localStorage-数据取值异常" + d)))
				}
				return {
					keys: a,
					vals: e
				}
			},
			writeStore: function(a) {
				var b = String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 5) + String((new Date).getTime()).slice(3);
				localStorage.setItem("sawebjssdk-" + b, JSON.stringify(a))
			}
		};
		b.batchSend = new x;
		var v = {
			getSendUrl: function(a, b) {
				var d = c.base64Encode(b),
					e = "crc\x3d" + c.hashCode(d);
				return -1 !== a.indexOf("?") ? a + "\x26data\x3d" + encodeURIComponent(d) + "\x26ext\x3d" + encodeURIComponent(e) : a + "?data\x3d" + encodeURIComponent(d) + "\x26ext\x3d" + encodeURIComponent(e)
			},
			getSendData: function(a) {
				a = c.base64Encode(a);
				var b = "crc\x3d" + c.hashCode(a);
				return "data\x3d" + encodeURIComponent(a) + "\x26ext\x3d" + encodeURIComponent(b)
			},
			getInstance: function(a) {
				a = new(this[this.getSendType(a)])(a);
				var e = a.start;
				return a.start = function() {
					c.isObject(b.para.is_debug) && b.para.is_debug.storage && b.store.requests && b.store.requests.push({
						name: this.server_url,
						initiatorType: this.img ? "img" : "xmlhttprequest",
						entryType: "resource",
						requestData: this.data
					});
					var a = this;
					e.apply(this, arguments);
					setTimeout(function() {
						a.isEnd(!0)
					}, b.para.callback_timeout)
				}, a.end = function() {
					this.callback && this.callback();
					var a = this;
					setTimeout(function() {
						a.lastClear && a.lastClear()
					}, b.para.datasend_timeout - b.para.callback_timeout)
				}, a.isEnd = function(a) {
					if (!this.received) {
						this.received = !0;
						this.end();
						var c = this;
						a ? 0 >= b.para.queue_timeout - b.para.callback_timeout ? c.close() : setTimeout(function() {
							c.close()
						}, b.para.queue_timeout - b.para.callback_timeout) : c.close()
					}
				}, a
			},
			getSendType: function(a) {
				var e = ["image", "ajax", "beacon"],
					d = e[0];
				return d = a.config && -1 < c.indexOf(e, a.config.send_type) ? a.config.send_type : b.para.send_type, "beacon" === d && "function" != typeof navigator.sendBeacon && (d = "image"), "ajax" === d && !1 === c.isSupportCors() && (d = "image"), d
			},
			image: function(a) {
				this.callback = a.callback;
				this.img = document.createElement("img");
				this.img.width = 1;
				this.img.height = 1;
				b.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous");
				this.data = a.data;
				this.server_url = v.getSendUrl(a.server_url, a.data)
			}
		};
		v.image.prototype.start = function() {
			var a = this;
			b.para.ignore_oom && (this.img.onload = function() {
				this.onabort = this.onerror = this.onload = null;
				a.isEnd()
			}, this.img.onerror = function() {
				this.onabort = this.onerror = this.onload = null;
				a.isEnd()
			}, this.img.onabort = function() {
				this.onabort = this.onerror = this.onload = null;
				a.isEnd()
			});
			this.img.src = this.server_url
		};
		v.image.prototype.lastClear = function() {
			this.img.src = ""
		};
		v.ajax = function(a) {
			this.callback = a.callback;
			this.server_url = a.server_url;
			this.data = v.getSendData(a.data)
		};
		v.ajax.prototype.start = function() {
			var a = this;
			c.ajax({
				url: this.server_url,
				type: "POST",
				data: this.data,
				credentials: !1,
				timeout: b.para.datasend_timeout,
				cors: !0,
				success: function() {
					a.isEnd()
				},
				error: function() {
					a.isEnd()
				}
			})
		};
		v.beacon = function(a) {
			this.callback = a.callback;
			this.server_url = a.server_url;
			this.data = v.getSendData(a.data)
		};
		v.beacon.prototype.start = function() {
			var a = this;
			"object" == typeof navigator && "function" == typeof navigator.sendBeacon && navigator.sendBeacon(this.server_url, this.data);
			setTimeout(function() {
				a.isEnd()
			}, 40)
		};
		var w = {};
		b.sendState = w;
		w.queue = c.autoExeQueue();
		w.requestData = null;
		w.getSendCall = function(a, e, d) {
			if (b.is_heatmap_render_mode) return !1;
			if (3 > b.readyState.state) return b.log("初始化没有完成"), !1;
			a._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String((new Date).getTime()).slice(-4));
			b.para.use_client_time && (a._flush_time = (new Date).getTime());
			var g = a;
			if (a = JSON.stringify(a), this.requestData = {
					data: g,
					config: e,
					callback: d
				}, !b.para.use_app_track && b.para.batch_send && 200 > localStorage.length) return b.log(g), b.batchSend.add(this.requestData.data), !1;
			if (!0 === b.para.use_app_track || "only" === b.para.use_app_track)
				if ("object" == typeof SensorsData_APP_JS_Bridge && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) SensorsData_APP_JS_Bridge.sensorsdata_verify ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(c.extend({
					server_url: b.para.server_url
				}, g))) ? "function" == typeof d && d() : b.para.use_app_track_is_send && (b.debug.apph5({
					data: g,
					step: "3.1",
					output: "all"
				}), this.prepareServerUrl()) : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(c.extend({
					server_url: b.para.server_url
				}, g))), "function" == typeof d && d());
				else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) !0 === b.para.use_app_track && !0 === b.para.use_app_track_is_send && (b.debug.apph5({
				data: g,
				step: "2",
				output: "all"
			}), this.prepareServerUrl());
			else if (a = null, /sensors-verify/.test(navigator.userAgent)) {
				if ((e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/)) && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
					e = e[1].split("?");
					var h = null,
						p = null;
					try {
						h = c.URL(b.para.server_url).hostname, p = c.URL(b.para.server_url).searchParams.get("project") || "default"
					} catch (z) {}
					h && h === e[0] && p && p === e[1] ? (a = document.createElement("iframe"), a.setAttribute("src", "sensorsanalytics://trackEvent?event\x3d" + encodeURIComponent(JSON.stringify(c.extend({
						server_url: b.para.server_url
					}, g)))), document.documentElement.appendChild(a), a.parentNode.removeChild(a), "function" == typeof d && d()) : b.para.use_app_track_is_send && (b.debug.apph5({
						data: g,
						step: "3.2",
						output: "all"
					}), this.prepareServerUrl())
				}
			} else a = document.createElement("iframe"), a.setAttribute("src", "sensorsanalytics://trackEvent?event\x3d" + encodeURIComponent(JSON.stringify(c.extend({
					server_url: b.para.server_url
				}, g)))),
				document.documentElement.appendChild(a), a.parentNode.removeChild(a), "function" == typeof d && d();
			else "mui" === b.para.use_app_track ? c.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event && window.plus.SDAnalytics.trackH5Event(a) : (b.debug.apph5({
				data: g,
				step: "1",
				output: "code"
			}), this.prepareServerUrl());
			b.log(g)
		};
		w.prepareServerUrl = function() {
			if ("object" == typeof this.requestData.config && this.requestData.config.server_url) this.sendCall(this.requestData.config.server_url, this.requestData.callback);
			else if (c.isArray(b.para.server_url))
				for (var a = 0; a < b.para.server_url.length; a++) this.sendCall(b.para.server_url[a]);
			else this.sendCall(b.para.server_url, this.requestData.callback)
		};
		w.sendCall = function(a, e) {
			var d = {
				server_url: a,
				data: JSON.stringify(this.requestData.data),
				callback: e,
				config: this.requestData.config
			};
			c.isObject(b.para.jsapp) && !b.para.jsapp.isOnline && "function" == typeof b.para.jsapp.setData ? (delete d.callback, d = JSON.stringify(d), b.para.jsapp.setData(d)) : this.pushSend(d)
		};
		w.pushSend = function(a) {
			a = v.getInstance(a);
			var b = this;
			a.close = function() {
				b.queue.close()
			};
			this.queue.enqueue(a)
		};
		var q = {
				checkOption: {
					regChecks: {
						regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
					},
					checkPropertiesKey: function(a) {
						var b = this,
							d = !0;
						return c.each(a, function(a, c) {
							b.regChecks.regName.test(c) || (d = !1)
						}), d
					},
					check: function(a, b) {
						return "string" == typeof this[a] ? this[this[a]](b) : this[a](b)
					},
					str: function(a) {
						return !!c.isString(a) || (b.log("请检查参数格式,必须是字符串"), !0)
					},
					properties: function(a) {
						return c.strip_sa_properties(a), !a || (c.isObject(a) ? !!this.checkPropertiesKey(a) || (b.log("properties 里的自定义属性名需要是合法的变量名，不能以数字开头，且只包含：大小写字母、数字、下划线，自定义属性不能以 $ 开头"), !0) : (b.log("properties可以没有，但有的话必须是对象"), !0))
					},
					propertiesMust: function(a) {
						return c.strip_sa_properties(a), void 0 === a || !c.isObject(a) || c.isEmptyObject(a) ? (b.log("properties必须是对象且有值"), !0) : !!this.checkPropertiesKey(a) || (b.log("properties 里的自定义属性名需要是合法的变量名，不能以数字开头，且只包含：大小写字母、数字、下划线，自定义属性不能以 $ 开头"), !0)
					},
					event: function(a) {
						return !(!c.isString(a) || !this.regChecks.regName.test(a)) || (b.log("请检查参数格式，eventName 必须是字符串，且需是合法的变量名，即不能以数字开头，且只包含：大小写字母、数字、下划线和 $,其中以 $ 开头的表明是系统的保留字段，自定义事件名请不要以 $ 开头"), !0)
					},
					test_id: "str",
					group_id: "str",
					distinct_id: function(a) {
						return !(!c.isString(a) || !/^.{1,255}$/.test(a)) || (b.log("distinct_id必须是不能为空，且小于255位的字符串"), !1)
					}
				},
				check: function(a) {
					for (var b in a)
						if (!this.checkOption.check(b, a[b])) return !1;
					return !0
				},
				send: function(a, e) {
					var d = {
						distinct_id: k.getDistinctId(),
						lib: {
							$lib: "js",
							$lib_method: "code",
							$lib_version: String(b.lib_version)
						},
						properties: {}
					};
					c.isObject(a) && c.isObject(a.properties) && !c.isEmptyObject(a.properties) && a.properties.$lib_detail && (d.lib.$lib_detail = a.properties.$lib_detail, delete a.properties.$lib_detail);
					c.extend(d, b.store.getUnionId(), a);
					c.isObject(a.properties) && !c.isEmptyObject(a.properties) && c.extend(d.properties, a.properties);
					a.type && "profile" === a.type.slice(0, 7) || (d.properties = c.extend({}, c.info.properties(), k.getProps(), k.getSessionProps(), c.info.currentProps, d.properties), b.para.preset_properties.latest_referrer && !c.isString(d.properties.$latest_referrer) && (d.properties.$latest_referrer = "取值异常"), b.para.preset_properties.latest_search_keyword && !c.isString(d.properties.$latest_search_keyword) && (d.properties.$latest_search_keyword = "取值异常"), b.para.preset_properties.latest_traffic_source_type && !c.isString(d.properties.$latest_traffic_source_type) && (d.properties.$latest_traffic_source_type = "取值异常"), b.para.preset_properties.latest_landing_page && !c.isString(d.properties.$latest_landing_page) && (d.properties.$latest_landing_page = "取值异常"));
					d.properties.$time && c.isDate(d.properties.$time) ? (d.time = 1 * d.properties.$time, delete d.properties.$time) : b.para.use_client_time && (d.time = 1 * new Date);
					c.parseSuperProperties(d.properties);
					c.filterReservedProperties(d.properties);
					c.searchObjDate(d);
					c.searchObjString(d);
					c.searchZZAppStyle(d);
					var g = c.searchConfigData(d.properties);
					B.checkIsAddSign(d);
					B.checkIsFirstTime(d);
					b.addReferrerHost(d);
					b.addPropsHook(d);
					!0 === b.para.debug_mode ? (b.log(d), this.debugPath(JSON.stringify(d), e)) : b.sendState.getSendCall(d, g, e)
				},
				debugPath: function(a, e) {
					var d = "";
					d = -1 !== b.para.debug_mode_url.indexOf("?") ? b.para.debug_mode_url + "\x26data\x3d" + encodeURIComponent(c.base64Encode(a)) : b.para.debug_mode_url + "?data\x3d" + encodeURIComponent(c.base64Encode(a));
					c.ajax({
						url: d,
						type: "GET",
						cors: !0,
						header: {
							"Dry-Run": String(b.para.debug_mode_upload)
						},
						success: function(b) {
							!0 === c.isEmptyObject(b) ? alert("debug数据发送成功" + a) : alert("debug失败 错误原因" + JSON.stringify(b))
						}
					})
				}
			},
			k = b.store = {
				requests: [],
				_sessionState: {},
				_state: {
					distinct_id: "",
					first_id: "",
					props: {}
				},
				getProps: function() {
					return this._state.props || {}
				},
				getSessionProps: function() {
					return this._sessionState
				},
				getDistinctId: function() {
					return this._state._distinct_id || this._state.distinct_id
				},
				getUnionId: function() {
					var a = {},
						b = this._state._first_id || this._state.first_id,
						c = this._state._distinct_id || this._state.distinct_id;
					return b && c ? (a.login_id = c, a.anonymous_id = b) : a.anonymous_id = c, a
				},
				getFirstId: function() {
					return this._state._first_id || this._state.first_id
				},
				toState: function(a) {
					var e = null;
					if (null != a && c.isJSONString(a))
						if (e = JSON.parse(a), this._state = c.extend(e), e.distinct_id) {
							if ("object" == typeof e.props) {
								for (var d in e.props) "string" == typeof e.props[d] && (e.props[d] = e.props[d].slice(0, b.para.max_referrer_string_length));
								this.save()
							}
						} else this.set("distinct_id", c.UUID()), b.debug.distinct_id("1", a);
					else this.set("distinct_id", c.UUID()), b.debug.distinct_id("2", a)
				},
				initSessionState: function() {
					var a = c.cookie.get("sensorsdata2015session"),
						b = null;
					null !== a && "object" == typeof(b = JSON.parse(a)) && (this._sessionState = b || {})
				},
				setOnce: function(a, b) {
					a in this._state || this.set(a, b)
				},
				set: function(a, b) {
					this._state = this._state || {};
					this._state[a] = b;
					"first_id" === a ? delete this._state._first_id : "distinct_id" === a && delete this._state._distinct_id;
					this.save()
				},
				change: function(a, b) {
					this._state["_" + a] = b
				},
				setSessionProps: function(a) {
					var b = this._sessionState;
					c.extend(b, a);
					this.sessionSave(b)
				},
				setSessionPropsOnce: function(a) {
					var b = this._sessionState;
					c.coverExtend(b, a);
					this.sessionSave(b)
				},
				setProps: function(a, e) {
					var d = e ? a : c.extend(this._state.props || {}, a);
					for (var g in d) "string" == typeof d[g] && (d[g] = d[g].slice(0, b.para.max_referrer_string_length));
					this.set("props", d)
				},
				setPropsOnce: function(a) {
					var b = this._state.props || {};
					c.coverExtend(b, a);
					this.set("props", b)
				},
				clearAllProps: function(a) {
					if (this._sessionState = {}, c.isArray(a) && 0 < a.length)
						for (var b = 0; b < a.length; b++) c.isString(a[b]) && -1 === a[b].indexOf("latest_") && a[b] in this._state.props && delete this._state.props[a[b]];
					else
						for (b in this._state.props) 1 !== b.indexOf("latest_") && delete this._state.props[b];
					this.sessionSave({});
					this.save()
				},
				sessionSave: function(a) {
					this._sessionState = a;
					c.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
				},
				save: function() {
					var a = JSON.parse(JSON.stringify(this._state));
					delete a._first_id;
					delete a._distinct_id;
					c.cookie.set(this.getCookieName(), JSON.stringify(a), 73E3, b.para.cross_subdomain)
				},
				getCookieName: function() {
					var a = "";
					if (!1 === b.para.cross_subdomain) {
						try {
							a = c.URL(location.href).hostname
						} catch (e) {}
						a = "string" == typeof a && "" !== a ? "sa_jssdk_2015_" + a.replace(/\./g, "_") : "sa_jssdk_2015_root"
					} else a = "sensorsdata2015jssdkcross";
					return a
				},
				init: function() {
					this.initSessionState();
					var a = c.UUID(),
						e = c.cookie.get(this.getCookieName());
					null === e ? (b.is_first_visitor = !0, this.set("distinct_id", a)) : (c.isJSONString(e) && JSON.parse(e).distinct_id || (b.is_first_visitor = !0), this.toState(e));
					B.setDeviceId(a);
					B.storeInitCheck();
					B.checkIsFirstLatest()
				}
			},
			B = {
				checkIsAddSign: function(a) {
					"track" === a.type && (c.cookie.getNewUser() ? a.properties.$is_first_day = !0 : a.properties.$is_first_day = !1)
				},
				is_first_visit_time: !1,
				checkIsFirstTime: function(a) {
					"track" === a.type && "$pageview" === a.event && (this.is_first_visit_time ? (a.properties.$is_first_time = !0, this.is_first_visit_time = !1) : a.properties.$is_first_time = !1)
				},
				setDeviceId: function(a) {
					var e = null,
						d = c.cookie.get("sensorsdata2015jssdkcross"),
						g = {};
					null != d && c.isJSONString(d) && (g = JSON.parse(d), g.$device_id && (e = g.$device_id));
					e = e || a;
					!0 === b.para.cross_subdomain ? k.set("$device_id", e) : (g.$device_id = e, c.cookie.set("sensorsdata2015jssdkcross", JSON.stringify(g), null, !0));
					b.para.is_track_device_id && (c.info.currentProps.$device_id = e)
				},
				storeInitCheck: function() {
					if (b.is_first_visitor) {
						var a = new Date,
							e = 23 - a.getHours(),
							d = 59 - a.getMinutes();
						a = 59 - a.getSeconds();
						c.cookie.set(c.cookie.getCookieName("new_user"), "1", 3600 * e + 60 * d + a + "s");
						this.is_first_visit_time = !0
					} else c.cookie.getNewUser() || (this.checkIsAddSign = function(a) {
						"track" === a.type && (a.properties.$is_first_day = !1)
					}), this.checkIsFirstTime = function(a) {
						"track" === a.type && "$pageview" === a.event && (a.properties.$is_first_time = !1)
					}
				},
				checkIsFirstLatest: function() {
					for (var a = c.info.pageProp.url_domain, e = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], d = k.getProps(), g = 0; g < e.length; g++) e[g] in d && delete d[e[g]];
					k.setProps(d, !0);
					var h = {};
					if ("" === a && (a = "url解析失败"), c.each(b.para.preset_properties, function(d, e) {
							if (-1 === e.indexOf("latest_")) return !1;
							if (e = e.slice(7), d)
								if ("utm" !== e && "url解析失败" === a) h["$latest_" + e] = "url的domain解析失败";
								else {
									if (c.isReferralTraffic(document.referrer)) switch (e) {
										case "traffic_source_type":
											h.$latest_traffic_source_type = c.getSourceFromReferrer();
											break;
										case "referrer":
											h.$latest_referrer = c.info.pageProp.referrer;
											break;
										case "search_keyword":
											h.$latest_search_keyword = c.getKeywordFromReferrer();
											break;
										case "landing_page":
											h.$latest_landing_page = location.href
									}
								}
							else if ("utm" === e && b.store._state.props)
								for (var g in b.store._state.props) 0 !== g.indexOf("$latest_utm") && 0 !== g.indexOf("_latest_") || delete b.store._state.props[g];
							else b.store._state.props && "$latest_" + e in b.store._state.props && delete b.store._state.props["$latest_" + e]
						}), b.register(h), b.para.preset_properties.latest_utm) d = c.info.campaignParamsStandard("$latest_", "_latest_"), e = d.$utms, d = d.otherUtms, c.isEmptyObject(e) || b.register(e), c.isEmptyObject(d) || b.register(d)
				}
			},
			A = b.heatmap = {
				setNotice: function(a) {
					b.is_heatmap_render_mode = !0;
					b.para.heatmap || (b.errorMsg = "您SDK没有配置开启点击图，可能没有数据！");
					a && a[0] && a[1] && "http:" === a[1].slice(0, 5) && "https" === location.protocol && (b.errorMsg = "您的当前页面是https的地址，神策分析环境也必须是https！");
					b.para.heatmap_url || (b.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + b.lib_version + "/heatmap.min.js")
				},
				getDomIndex: function(a) {
					if (!a.parentNode) return -1;
					for (var b = 0, c = a.tagName, g = a.parentNode.children, h = 0; h < g.length; h++)
						if (g[h].tagName === c) {
							if (a === g[h]) return b;
							b++
						}
					return -1
				},
				selector: function(a) {
					var c = a.parentNode && 9 == a.parentNode.nodeType ? -1 : this.getDomIndex(a);
					return a.getAttribute && a.getAttribute("id") && (!b.para.heatmap || b.para.heatmap && "not_use_id" !== b.para.heatmap.element_selector) ? "#" + a.getAttribute("id") : a.tagName.toLowerCase() + (~c ? ":nth-of-type(" + (c + 1) + ")" : "")
				},
				getDomSelector: function(a, c) {
					if (!a || !a.parentNode || !a.parentNode.children) return !1;
					c = c && c.join ? c : [];
					var d = a.nodeName.toLowerCase();
					return a && "body" !== d && 1 == a.nodeType ? (c.unshift(this.selector(a)), a.getAttribute && a.getAttribute("id") && b.para.heatmap && "not_use_id" !== b.para.heatmap.element_selector ? c.join(" \x3e ") : this.getDomSelector(a.parentNode, c)) : (c.unshift("body"), c.join(" \x3e "))
				},
				na: function() {
					var a = document.documentElement.scrollLeft || window.pageXOffset;
					return parseInt(isNaN(a) ? 0 : a, 10)
				},
				i: function() {
					var a = 0;
					try {
						a = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, a = isNaN(a) ? 0 : a
					} catch (e) {
						a = 0
					}
					return parseInt(a, 10)
				},
				getBrowserWidth: function() {
					var a = window.innerWidth || document.body.clientWidth;
					return isNaN(a) ? 0 : parseInt(a, 10)
				},
				getBrowserHeight: function() {
					var a = window.innerHeight || document.body.clientHeight;
					return isNaN(a) ? 0 : parseInt(a, 10)
				},
				getScrollWidth: function() {
					var a = parseInt(document.body.scrollWidth, 10);
					return isNaN(a) ? 0 : a
				},
				W: function(a) {
					var b = parseInt(+a.clientX + +this.na(), 10);
					a = parseInt(+a.clientY + +this.i(), 10);
					return {
						x: isNaN(b) ? 0 : b,
						y: isNaN(a) ? 0 : a
					}
				},
				start: function(a, e, d, g, h) {
					var p = c.isObject(g) ? g : {};
					g = c.isFunction(h) ? h : c.isFunction(g) ? g : void 0;
					if (b.para.heatmap && b.para.heatmap.collect_element && !b.para.heatmap.collect_element(e)) return !1;
					var k = this.getDomSelector(e);
					h = c.getEleInfo({
						target: e
					});
					if (h.$element_selector = k ? k : "", b.para.heatmap && b.para.heatmap.custom_property) k = b.para.heatmap.custom_property(e), c.isObject(k) && (h = c.extend(h, k));
					h = c.extend(h, p);
					"a" === d && b.para.heatmap && !0 === b.para.heatmap.isTrackLink ? c.trackLink({
						event: a,
						target: e
					}, "$WebClick", h) : b.track("$WebClick", h, g)
				},
				hasElement: function(a) {
					a = a._getPath();
					if (c.isArray(a) && 0 < a.length)
						for (var b = 0; b < a.length; b++)
							if (a[b] && a[b].tagName && "a" === a[b].tagName.toLowerCase()) return a[b];
					return !1
				},
				initScrollmap: function() {
					if (!c.isObject(b.para.heatmap) || "default" !== b.para.heatmap.scroll_notice_map) return !1;
					var a = function() {
							return !(b.para.scrollmap && c.isFunction(b.para.scrollmap.collect_url) && !b.para.scrollmap.collect_url())
						},
						e = function(a) {
							var b = {};
							return b.timeout = a.timeout || 1E3, b.func = a.func, b.hasInit = !1, b.inter = null, b.main = function(a, b) {
								this.func(a, b);
								this.inter = null
							}, b.go = function(a) {
								var c = {};
								this.inter || (c.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, c.$viewport_position = Math.round(c.$viewport_position) || 0, c.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, c.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, a ? b.main(c, !0) : this.inter = setTimeout(function() {
									b.main(c)
								}, this.timeout))
							}, b
						}({
							timeout: 1E3,
							func: function(a, c) {
								var d = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
									e = new Date,
									g = e - this.current_time;
								(g > b.para.heatmap.scroll_delay_time && 0 !== d - a.$viewport_position || c) && (a.$url = location.href, a.$title = document.title, a.$url_path = location.pathname, a.event_duration = Math.min(b.para.heatmap.scroll_event_duration, parseInt(g) / 1E3), b.track("$WebStay", a));
								this.current_time = e
							}
						});
					e.current_time = new Date;
					c.addEvent(window, "scroll", function() {
						return !!a() && void e.go()
					});
					c.addEvent(window, "unload", function() {
						return !!a() && void e.go("notime")
					})
				},
				initHeatmap: function() {
					var a = this;
					return !(!c.isObject(b.para.heatmap) || "default" !== b.para.heatmap.clickmap) && !(c.isFunction(b.para.heatmap.collect_url) && !b.para.heatmap.collect_url()) && ("all" === b.para.heatmap.collect_elements ? b.para.heatmap.collect_elements = "all" : b.para.heatmap.collect_elements = "interact", void("all" === b.para.heatmap.collect_elements ? c.addEvent(document, "click", function(b) {
						b = b || window.event;
						if (!b) return !1;
						var c = b.target || b.srcElement;
						if ("object" != typeof c || "string" != typeof c.tagName) return !1;
						var e = c.tagName.toLowerCase();
						if ("body" === e || "html" === e || !c || !c.parentNode || !c.parentNode.children) return !1;
						var h = c.parentNode.tagName.toLowerCase();
						"a" === h || "button" === h ? a.start(b, c.parentNode, h) : a.start(b, c, e)
					}) : c.addEvent(document, "click", function(b) {
						var d = b || window.event;
						if (!d) return !1;
						var e = d.target || d.srcElement;
						if ("object" != typeof e || "string" != typeof e.tagName) return !1;
						var h = e.tagName.toLowerCase();
						if ("body" === h.toLowerCase() || "html" === h.toLowerCase() || !e || !e.parentNode || !e.parentNode.children) return !1;
						var k = e.parentNode;
						"a" === h || "button" === h || "input" === h || "textarea" === h ? a.start(d, e, h) : "button" === k.tagName.toLowerCase() || "a" === k.tagName.toLowerCase() ? a.start(d, k, e.parentNode.tagName.toLowerCase()) : "area" === h && "map" === k.tagName.toLowerCase() && c.ry(k).prev().tagName && "img" === c.ry(k).prev().tagName.toLowerCase() ? a.start(d, c.ry(k).prev(), c.ry(k).prev().tagName.toLowerCase()) : (b = a.hasElement(b)) && a.start(d, b, b.tagName.toLowerCase())
					})))
				},
				prepare: function(a) {
					function e(a, d, e) {
						b.para.heatmap_url ? c.loadScript({
							success: function() {
								setTimeout(function() {
									"undefined" != typeof sa_jssdk_heatmap_render && (sa_jssdk_heatmap_render(b, a, d, e), "object" == typeof console && "function" == typeof console.log && (b.heatmap_version && b.heatmap_version === b.lib_version || console.log("heatmap.js与sensorsdata.js版本号不一致，可能存在风险!")))
								}, 0)
							},
							error: function() {},
							type: "js",
							url: b.para.heatmap_url
						}) : b.log("没有指定heatmap_url的路径")
					}
					var d = location.search.match(/sa-request-id=([^&#]+)/),
						g = location.search.match(/sa-request-type=([^&#]+)/),
						h = location.search.match(/sa-request-url=([^&#]+)/);
					d && d[0] && d[1] ? (A.setNotice(h), c.sessionStorage.isSupport() && (h && h[0] && h[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(h[1])), sessionStorage.setItem("sensors_heatmap_id", d[1]), g && g[0] && g[1] ? "1" === g[1] || "2" === g[1] || "3" === g[1] ? (g = g[1], sessionStorage.setItem("sensors_heatmap_type", g)) : g = null : g = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), e(d[1], g)) : c.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id") ? (A.setNotice(), e(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)) : (a(), c.isObject(b.para.heatmap) && (this.initHeatmap(), this.initScrollmap()))
				}
			};
		b.init = function(a) {
			function e() {
				var a = null,
					e = null;
				window.sensorsdata_app_js_bridge_call_js = function(b) {
					a = b;
					c.isJSONString(a) && (a = JSON.parse(a));
					e && (e(a), e = null, a = null)
				};
				b.getAppStatus = function(b) {
					if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
						var d = document.createElement("iframe");
						d.setAttribute("src", "sensorsanalytics://getAppInfo");
						document.documentElement.appendChild(d);
						d.parentNode.removeChild(d)
					}
					"object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (a = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), c.isJSONString(a) && (a = JSON.parse(a)));
					return b ? void(null === a ? e = b : (b(a), a = null)) : a
				}
			}
			return !(b.readyState && b.readyState.state && 2 <= b.readyState.state) && (b.setInitVar(), b.readyState.setState(2), b.initPara(a), void A.prepare(function() {
				e();
				c.info.initPage();
				b.para.is_track_single_page && c.addSinglePageEvent(function(a) {
					var d = function(d) {
						d = d || {};
						a !== location.href && (c.info.pageProp.referrer = a, b.quick("autoTrack", c.extend({
							$url: location.href,
							$referrer: a
						}, d)))
					};
					if ("boolean" == typeof b.para.is_track_single_page) d();
					else if ("function" == typeof b.para.is_track_single_page) {
						var e = b.para.is_track_single_page();
						c.isObject(e) ? d(e) : !0 === e && d()
					}
				});
				b.para.batch_send && b.batchSend.batchInterval();
				b.store.init();
				b.readyState.setState(3);
				b._q && c.isArray(b._q) && 0 < b._q.length && c.each(b._q, function(a) {
					b[a[0]].apply(b, Array.prototype.slice.call(a[1]))
				})
			}))
		};
		if (c.each("track quick register registerPage registerOnce trackSignup setProfile setOnceProfile appendProfile incrementProfile deleteProfile unsetProfile identify login logout trackLink clearAllRegister".split(" "), function(a) {
				var c = b[a];
				b[a] = function() {
					if (b.readyState.getState()) return c.apply(b, arguments);
					try {
						console.error("请先初始化神策JS SDK")
					} catch (d) {}
				}
			}), "string" != typeof window.sensorsDataAnalytic201505) return "undefined" == typeof window.sensorsDataAnalytic201505 ? (window.sensorsDataAnalytic201505 = b, b) : window.sensorsDataAnalytic201505;
		b.setPreConfig(window[sensorsDataAnalytic201505]);
		window[sensorsDataAnalytic201505] = b;
		b.init();
		window.sensorsDataAnalytic201505 = b
	} catch (a) {
		if ("object" == typeof console && console.log) try {
			console.log(a)
		} catch (e) {}
	}
});