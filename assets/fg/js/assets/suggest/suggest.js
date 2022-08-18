(function(g, k) {
	"undefined" !== typeof module && module.exports ? module.exports = k() : "function" === typeof define && define.amd ? define(k) : g.InputSuggest = k.call(g)
})(this, function() {
	function g(a) {
		if (!a._.disabled) {
			var b = this.value;
			a._.hisWord = b;
			a.config.asyncData.url && (a._.timer && clearTimeout(a._.timer), a._.timer = setTimeout(function() {
				if (!b) return a.hide(), !1;
				w.call(a, b, function(b) {
					p.call(a, b)
				})
			}, a.config.asyncData.interval));
			if (a.config.syncData.data) {
				var c = a.config.syncData.trigger;
				var e = a.config.syncData.tipFiled;
				m(a.config.syncData.data);
				c && e && b ? RegExp(c, "g").test(b) ? (c = u.call(a, x(a.config.syncData.data, b, RegExp.$1, RegExp.$2), this.value.toLowerCase()), p.call(a, c)) : a.hide() : a.hide()
			}
		}
	}

	function k(a) {
		if (!this._.selected) return null;
		var b = this._.selected.attr("template");
		if (b && this[b + "CustomAction"] && this[b + "CustomAction"] instanceof Function) this[b + "CustomAction"](this._.selected, a)
	}

	function p(a) {
		this.elems.$list.empty();
		this._.selected = null;
		this.elems.$list[0].appendChild(a);
		$.trim(this.elems.$list.html()) ? (this.elems.$list.show(), this.fire("show"), this.elems.$list.children().addClass(this._.itemMark)) : this.hide()
	}

	function x(a, b, c, e) {
		if (!c) return a;
		var d;
		b = 0;
		a = $.extend(!0, {}, a);
		for (d in a)
			for (; a[d][b];) e && a[d][b].email.slice(0, e.length) !== e ? a[d].splice(b, 1) : (a[d][b].input = c, b++);
		return a
	}

	function w(a, b) {
		if (this.config.asyncData.blankInput || a) {
			var c = this.config.asyncData.url,
				e = this;
			c && (c = -1 !== c.indexOf("?") ? c + ("\x26_" + (new Date).getTime()) : c + ("?_" + (new Date).getTime()), e._.cache[a] ? b && b.call(null, u.call(e, e._.cache[a], a)) : $.ajax({
				type: "get",
				url: c.replace("#param#", this.config.isEncodeParam ? encodeURIComponent(a) : a),
				dataType: "json",
				success: function(c) {
					m(c);
					e._.cache[a] || (e._.cache[a] = c, e._.hisWord = a);
					b && b.call(null, u.call(e, c, a))
				}
			}))
		}
	}

	function m(a) {
		if (a) {
			var b = 0;
			try {
				for (var c in a)
					if (a[c] && 0 < a[c].length)
						for (b = 0; b < a[c].length; b++) a[c][b]._index = b
			} catch (e) {
				window.console && console.log("init index error")
			}
		}
	}

	function u(a, b) {
		var c, e, d, g = document.createDocumentFragment();
		var f = "";
		var k = this.config.ignoreCase,
			l = this.config.style.highlightCls;
		for (c in a)
			if (a[c] && this.config.templates[c]) {
				var q = 0;
				for (d = a[c].length; q < d; q++) {
					a: {
						var r = a[c][q];f = this.config.templates[c];
						var t = "";
						var p = /<\$([\w\W]*?)\$>/gi,
							n = null;n = null;
						var h = void 0,
							m = f;
						for (n in r) h = r[n],
						"string" !== typeof h || -1 === h.indexOf('"') && -1 === h.indexOf("'") || (h = h.replace(/"/g, '\\"'), h = h.replace(/'/g, "'")),
						t += "var " + n + '\x3d"' + h + '";';
						for (; null !== (n = p.exec(f));) {
							r = t;
							r += n[1];
							try {
								m = m.replace(n[0], (new Function(r))() || "")
							} catch (z) {
								f = "";
								break a
							}
						}
						f = m
					}
					for (e in a[c][q]) f = f.replace(RegExp("{" + e + "}", "gi"), a[c][q][e]);l && (f = f.replace(RegExp("({.+})", "gi"), function(a) {
						a = a.substring(1, a.length - 1);
						return k ? a.replace(RegExp(b, "gi"), '\x3cspan class\x3d"' + l + '"\x3e$\x26\x3c/span\x3e') : a.replace(RegExp(b, "g"), '\x3cspan class\x3d"' + l + '"\x3e' + b + "\x3c/span\x3e")
					}));t = document.createElement("div");t.innerHTML = f;f = t.childNodes[0];f.setAttribute("template", c);g.appendChild(f)
				}
			}
		return g
	}

	function y(a) {
		var b = null,
			c = ("." === this._.itemMark.substring(0, 1) ? this._.itemMark : "." + this._.itemMark) + "[unchoose!\x3dtrue]",
			e = this.elems.$list.children(c),
			d = this._.selected;
		d && d.removeClass(this.config.style.selectedCls);
		if (27 === a) return this.hide(), null;
		38 === a && (b = d && d.prev(c).length ? d.prev(c) : d ? null : e.last());
		40 === a && (b = d && d.next(c).length ? d.next(c) : d ? null : e.first());
		b && b.addClass(this.config.style.selectedCls);
		this._.selected = b
	}

	function v(a, b) {
		return a.hasClass(b) ? a : a.parents("." === b.substring(0, 1) ? b : "." + b)
	}
	var l = new Abstract({
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
	l = new Clazz(l, {
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
		} catch (b) {
			if (window.console && b.message) return console.log(b.message), null
		}
		this.__init();
		this.__events()
	});
	l.extend({
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
			var a, b = this;
			this.elems.$carrier.on("focus", function() {
				b.elems.$list.html() && b._.hisWord && b.show();
				"onpropertychange" in document.createElement("input") && (b._.onInputHack = !1, b._.hisWord = this.value)
			});
			this.elems.$carrier.on("blur", function() {
				b._.onInputHack = !0;
				setTimeout(function() {
					b.hide();
					b.fire("inputChange")
				}, 200)
			});
			this.elems.$carrier.on("keydown", function(c) {
				a = c.keyCode;
				b._.onInputHack = 38 === a || 40 === a ? !0 : !1;
				!a || 38 !== a && 40 !== a && 27 !== a || (b.elems.$list.html() || 27 === a ? (y.call(b, a), b.fire("over", b._.selected)) : b.show(), c.preventDefault(), 27 !== a && (b._.selected && b._.selected.attr("val") ? b.elems.$carrier.val(b._.selected.attr("val")) : b._.hisWord && b.elems.$carrier.val(b._.hisWord)));
				a && 13 === a && null !== k.call(b, c) && (b.hide(!0), c.preventDefault())
			});
			if ($.browser.msie && "9.0" === $.browser.version) this.elems.$carrier.on("keyup", function(c) {
				a = c.keyCode;
				8 !== a && 46 !== a || g.call(b.elems.$carrier[0], b)
			});
			this.elems.$list.on("mousedown", function(a) {
				if (0 === a.button || 1 === a.which) {
					var c = v($(a.target), b._.itemMark);
					c.attr("val") && ("onpropertychange" in document.createElement("input") && (b._.onInputHack = !0), b.elems.$carrier.val(c.attr("val")));
					k.call(b, a)
				} else a.preventDefault()
			});
			this.elems.$list.on("mousemove", function(a) {
				var c = b._.selected;
				a = v($(a.target), b._.itemMark);
				var d = b.config.style.selectedCls;
				a.hasClass(d) && b._.selected.hasClass(d) || (c && c.removeClass(d), a.addClass(d), b._.selected = a, b.config.triggerOver ? b.fire("over", b._.selected) : b.fire("originalMouseMove", b._.selected))
			});
			this.elems.$list.on("mouseout", function(a) {
				var c = v($(a.relatedTarget), b._.itemMark),
					d = b.config.style.selectedCls;
				if (!c.hasClass(d) || !b._.selected.hasClass(d))
					if (c = b.elems.$list, a = a.relatedTarget, "undefined" === typeof c.nodeType && (c = c.get(0)), c.contains ? c != a && c.contains(a) : c.compareDocumentPosition(a) & 16) b.fire("out", b._.selected), b._.selected && b._.selected.removeClass(d), b._.selected = null
			});
			if ("onpropertychange" in document.createElement("input")) this.elems.$carrier[0].attachEvent("onpropertychange", function() {
				b._.onInputHack || (g.call(b.elems.$carrier[0], b), b.fire("inputChange"))
			});
			else this.elems.$carrier.on("input", function() {
				g.call(this, b);
				b.fire("inputChange")
			})
		},
		disabled: function(a) {
			this._.disabled = a
		},
		show: function() {
			if (!this._.disabled) {
				var a = this.elems.$carrier.val(),
					b = this;
				a === this._.hisWord && this.elems.$list.html() ? (this.elems.$list.show(), this.fire("show")) : (this.config.asyncData.url && w.call(this, a, function(a) {
					p.call(b, a)
				}), b.config.syncData.data && g.call(b.elems.$carrier[0], b))
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
			this.config.syncData.data && (m(a), this.config.syncData.data = a, g.call(this.elems.$carrier[0], this))
		},
		changeAsync: function(a) {
			a && (this.config.asyncData.url = a, this._.cache = {})
		},
		getData: function(a, b, c) {
			var e = this._.cache;
			if (e[a] && e[a][b] && (a = e[a][b], 0 < a.length))
				for (b = 0; b < a.length; b++)
					if (a[b]._index + "" === c + "") return a[b];
			return null
		},
		getLastWord: function() {
			return this._.hisWord || this.elems.$carrier.val()
		}
	});
	return l
});