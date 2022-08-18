jQuery.extend(jQuery.easing, {
	easeInQuart: function(c, g, e, d, h) {
		return d * (g /= h) * g * g * g + e
	}
});
(function(c) {
	c.path = {};
	var g = {
		rotate: function(c, d) {
			var e = d * Math.PI / 180,
				a = Math.cos(e);
			e = Math.sin(e);
			return [a * c[0] - e * c[1], e * c[0] + a * c[1]]
		},
		scale: function(c, d) {
			return [d * c[0], d * c[1]]
		},
		add: function(c, d) {
			return [c[0] + d[0], c[1] + d[1]]
		},
		minus: function(c, d) {
			return [c[0] - d[0], c[1] - d[1]]
		}
	};
	c.path.bezier = function(e, d) {
		e.start = c.extend({
			angle: 0,
			length: .3333
		}, e.start);
		e.end = c.extend({
			angle: 0,
			length: .3333
		}, e.end);
		this.p1 = [e.start.x, e.start.y];
		this.p4 = [e.end.x, e.end.y];
		var h = g.minus(this.p4, this.p1),
			a = g.scale(h, e.start.length);
		h = g.scale(h, -1);
		h = g.scale(h, e.end.length);
		a = g.rotate(a, e.start.angle);
		this.p2 = g.add(this.p1, a);
		h = g.rotate(h, e.end.angle);
		this.p3 = g.add(this.p4, h);
		this.f1 = function(b) {
			return b * b * b
		};
		this.f2 = function(b) {
			return 3 * b * b * (1 - b)
		};
		this.f3 = function(b) {
			return 3 * b * (1 - b) * (1 - b)
		};
		this.f4 = function(b) {
			return (1 - b) * (1 - b) * (1 - b)
		};
		this.css = function(b) {
			var a = this.f1(b),
				c = this.f2(b),
				m = this.f3(b);
			b = this.f4(b);
			var q = {};
			d && (q.prevX = this.x, q.prevY = this.y);
			q.x = this.x = this.p1[0] * a + this.p2[0] * c + this.p3[0] * m + this.p4[0] * b + .5 | 0;
			q.y = this.y = this.p1[1] * a + this.p2[1] * c + this.p3[1] * m + this.p4[1] * b + .5 | 0;
			q.left = q.x + "px";
			q.top = q.y + "px";
			return q
		}
	};
	c.path.arc = function(c, d) {
		for (var e in c) this[e] = c[e];
		for (this.dir = this.dir || 1; this.start > this.end && 0 < this.dir;) this.start -= 360;
		for (; this.start < this.end && 0 > this.dir;) this.start += 360;
		this.css = function(a) {
			a = (this.start * a + this.end * (1 - a)) * Math.PI / 180;
			var b = {};
			d && (b.prevX = this.x, b.prevY = this.y);
			b.x = this.x = Math.sin(a) * this.radius + this.center[0] + .5 | 0;
			b.y = this.y = Math.cos(a) * this.radius + this.center[1] + .5 | 0;
			b.left = b.x + "px";
			b.top = b.y + "px";
			return b
		}
	};
	c.fx.step.path = function(e) {
		var d = e.end.css(1 - e.pos);
		null != d.prevX && c.cssHooks.transform.set(e.elem, "rotate(" + Math.atan2(d.prevY - d.y, d.prevX - d.x) + ")");
		e.elem.style.top = d.top;
		e.elem.style.left = d.left
	}
})(jQuery);
(function(c) {
	function g() {}

	function e(a) {
		q = [a]
	}

	function d(a, b, c) {
		return a && a.apply && a.apply(b.context || b, c)
	}

	function h(l) {
		function h(a) {
			u++ || (v(), w && (f[p] = {
				s: [a]
			}), E && (a = E.apply(l, [a])), d(C, l, [a, "success", l]), d(F, l, [l, "success"]))
		}

		function B(a) {
			u++ || (v(), w && "timeout" != a && (f[p] = a), d(D, l, [l, a]), d(F, l, [l, a]))
		}
		l = c.extend({}, G, l);
		var C = l.success,
			D = l.error,
			F = l.complete,
			E = l.dataFilter,
			x = l.callbackParameter,
			H = l.callback,
			M = l.cache,
			w = l.pageCache,
			I = l.charset,
			p = l.url,
			r = l.data,
			J = l.timeout,
			y, u = 0,
			v = g,
			t;
		b && b(function(a) {
			a.done(C).fail(D);
			C = a.resolve;
			D = a.reject
		}).promise(l);
		l.abort = function() {
			!u++ && v()
		};
		if (!1 === d(l.beforeSend, l, [l]) || u) return l;
		p = p || "";
		r = r ? "string" == typeof r ? r : c.param(r, l.traditional) : "";
		p += r ? (/\?/.test(p) ? "\x26" : "?") + r : "";
		x && (p += (/\?/.test(p) ? "\x26" : "?") + encodeURIComponent(x) + "\x3d?");
		M || w || (p += (/\?/.test(p) ? "\x26" : "?") + "_" + (new Date).getTime() + "\x3d");
		p = p.replace(/=\?(&|$)/, "\x3d" + H + "$1");
		if (w && (y = f[p])) y.s ? h(y.s[0]) : B(y);
		else {
			a[H] = e;
			var n = c("\x3cscript\x3e")[0];
			n.id = "_jqjsp" + m++;
			I && (n.charset = I);
			K && 11.6 > K.version() ? (t = c("\x3cscript\x3e")[0]).text = "document.getElementById('" + n.id + "').onerror()" : n.async = "async";
			z && (n.htmlFor = n.id, n.event = "onclick");
			n.onload = n.onerror = n.onreadystatechange = function(a) {
				if (!n.readyState || !/i/.test(n.readyState)) {
					try {
						n.onclick && n.onclick()
					} catch (N) {}
					a = q;
					q = 0;
					a ? h(a[0]) : B("error")
				}
			};
			n.src = p;
			v = function(a) {
				L && clearTimeout(L);
				n.onreadystatechange = n.onload = n.onerror = null;
				k.removeChild(n);
				t && k.removeChild(t)
			};
			k.insertBefore(n, x = k.firstChild);
			t && k.insertBefore(t, x);
			var L = 0 < J && setTimeout(function() {
				B("timeout")
			}, J)
		}
		return l
	}
	var a = window,
		b = c.Deferred,
		k = c("head")[0] || document.documentElement,
		f = {},
		m = 0,
		q, G = {
			callback: "_jqjsp",
			url: location.href
		},
		K = a.opera,
		z = !!c("\x3cdiv\x3e").html("\x3c!--[if IE]\x3e\x3ci\x3e\x3c![endif]--\x3e").find("i").length;
	h.setup = function(a) {
		c.extend(G, a)
	};
	c.jsonp = h
})(jQuery);
(function(c, g) {
	"undefined" !== typeof module && module.exports ? module.exports = g() : "function" === typeof define && define.amd ? define(g) : c.InquiryMINI = g.call(c)
})(this, function() {
	function c() {
		if (!(this instanceof c)) return new c;
		if (e) return e;
		e = this;
		this._ = {};
		this._.type = null;
		this._.typeMap = {
			prod: "product",
			com: "supplier",
			o2o: "o2oProduct"
		};
		this._.typeInvertMap = {
			product: "prod",
			supplier: "com",
			o2oProduct: "o2o"
		};
		this._.expand = !1;
		this._.selected = {};
		this._.isIE6 = !window.XMLHttpRequest;
		this._.animateOpts = {
			speed: 1E3,
			carrier: null,
			width: "auto",
			height: "auto"
		};
		this._.inquiryOpts = {
			max: 10,
			min: 1,
			OVER_LIMIT: "Send inquiries on 10 items at most.",
			LESS_LIMIT: "Select at least 1 item to send inquiry."
		};
		this._.compareOpts = {
			max: 5,
			min: 2,
			OVER_LIMIT: "Each time compare 5 items at most.",
			LESS_LIMIT: "Select at least 2 items to compare."
		};
		this._.orderOpts = {
			min: 1,
			max: 100,
			OVER_LIMIT: "Start Order on 100 items at most.",
			LESS_LIMIT: "Select at least 1 item to start order."
		};
		this._.beforeInquiry = null;
		this._.beforeCompare = null;
		this.cacheData = this.showItem = this.currentData = this.carrier = this._.afterRender = null;
		this.style = {};
		this.style.selected = "ibselected";
		this.template = {
			tab: function(a) {
				a = a.o2oProduct && a.o2oProduct.data;
				var b = (a = 0 < (a ? a.reduce(function(a, b) {
						return a + b.items.length
					}, 0) : 0)) ? "in-basket-tab-3" : "in-basket-tab-2",
					c = "";
				a || (c = 'style\x3d"display: none;"');
				return ['\x3cul class\x3d"in-basket-tab"\x3e', '    \x3cli class\x3d"in-basket-tab-item ' + b + ' J-productCount" data-Type\x3d"product"\x3eProducts\x3cspan class\x3d"tab-count" style\x3d"margin-left:5px;"\x3e(\x3cem\x3e0\x3c/em\x3e)\x3c/span\x3e\x3c/li\x3e', '    \x3cli class\x3d"in-basket-tab-item ' + b + ' J-supplierCount" data-Type\x3d"supplier"\x3eSuppliers\x3cspan class\x3d"tab-count" style\x3d"margin-left:5px;"\x3e(\x3cem\x3e0\x3c/em\x3e)\x3c/span\x3e\x3c/li\x3e', '    \x3cli class\x3d"in-basket-tab-item ' + b + ' J-o2oProductCount" data-Type\x3d"o2oProduct" ' + c + '\x3eExhibition\x3cspan class\x3d"tab-count" style\x3d"margin-left:5px;"\x3e(\x3cem\x3e0\x3c/em\x3e)\x3c/span\x3e\x3c/li\x3e', "\x3c/ul\x3e"].join("")
			},
			nothing: '\x3cdiv class\x3d"in-basket-nomsg"\x3eThere are no {TYPE}s in your Inquiry Basket.\x3c/div\x3e',
			list: '\x3cdiv class\x3d"in-basket-wrap obelisk-form"\x3e    \x3cdiv class\x3d"in-basket-con J-productContent" style\x3d"display:none;"\x3e{PRODUCT}\x3c/div\x3e    \x3cdiv class\x3d"in-basket-con in-basket-con-supplier J-supplierContent" style\x3d"display:none;"\x3e{SUPPLIER}\x3c/div\x3e    \x3cdiv class\x3d"in-basket-con J-o2oProductContent" style\x3d"display:none;"\x3e{O2OPRODUCT}\x3c/div\x3e\x3c/div\x3e',
			container: '\x3cdiv id\x3d"in-basket"\x3e    \x3cdiv class\x3d"in-basket-main-info" id\x3d"J-inquiryControl"\x3e        \x3ci class\x3d"micon"\x3e\x26#xe020;\x3c/i\x3e        \x3cspan class\x3d"in-basket-main-info-txt"\x3eInquiry Basket \x3c/span\x3e\x3cspan class\x3d"in-basket-main-info-txt J-inquiryTotal"\x3e(\x3cem\x3e0\x3c/em\x3e/0)\x3c/span\x3e         \x3ci class\x3d"micon J-arr"\x3e\x26#xe007;\x3c/i\x3e    \x3c/div\x3e\x3c/div\x3e',
			items: function(a) {
				return ['{LIST}\x3cdiv class\x3d"in-basket-tips J-inquiryError" style\x3d"display:none;"\x3e\x3c/div\x3e', a.hasTrading ? '\x3cdiv class\x3d"in-basket-fun has-trading"\x3e' : '\x3cdiv class\x3d"in-basket-fun"\x3e', '    \x3cdiv class\x3d"input-checkbox"\x3e       \x3clabel class\x3d"input-wrap"\x3e           \x3cinput type\x3d"checkbox" class\x3d"J-inquiryCheckedAll"\x3e           \x3cspan class\x3d"input-ctnr"\x3e\x3c/span\x3e Select All       \x3c/label\x3e    \x3c/div\x3e    \x3cdiv class\x3d"in-basket-btn-group"\x3e',
					a.hasTrading ? '        \x3ca href\x3d"javascript:void(0);" rel\x3d"nofollow" class\x3d"btn btn-main-light btn-send J-sendInquiry" target\x3d"_blank"\x3eSend Inquiry\x3c/a\x3e' : '        \x3ca href\x3d"javascript:void(0);" rel\x3d"nofollow" class\x3d"btn btn-main btn-send J-sendInquiry" target\x3d"_blank"\x3eSend Inquiry\x3c/a\x3e', a.hasTrading ? '        \x3ca href\x3d"javascript:void(0);" rel\x3d"nofollow" class\x3d"btn btn-main btn-start-order-mini J-start-order-mini" target\x3d"_blank"\x3eStart Order\x3c/a\x3e' : "", '        \x3ca href\x3d"javascript:void(0);" rel\x3d"nofollow" class\x3d"btn btn-compare J-compare" target\x3d"_blank"\x3eCompare\x3c/a\x3e    \x3c/div\x3e\x3c/div\x3e'
				].join("")
			},
			item: function(a) {
				var b = "",
					c = "";
				a.shows && a.shows.length && (c += $.map(a.shows, function(a) {
					var b = "";
					a.boothNo && (b = '\x3cspan class\x3d"tag tag-color tag-main" title\x3d"' + (a.name || "") + '"\x3eBooth No. ' + a.boothNo + "\x3c/span\x3e");
					return b
				}).join(""));
				a.isOnlineTrading && (c += ' \x3cspan class\x3d"tag tag-color tag-main" title\x3d"Online Trading"\x3eOnline Trading\x3c/span\x3e');
				c && (b = '\x3cdiv class\x3d"in-basket-tags"\x3e{TAGS}\x3c/div\x3e'.replace("{TAGS}", c));
				c = "";
				"supplier" !== a.type && (c = ['\x3cdiv class\x3d"in-basket-pic-wrap"\x3e    \x3cdiv class\x3d"in-basket-pic"\x3e', '        \x3ca href\x3d"' + a.link + '"\x3e', '            \x3cimg data-src\x3d"' + a.imgLink + '" /\x3e', "        \x3c/a\x3e    \x3c/div\x3e\x3c/div\x3e"].join(""));
				return ['\x3cdiv class\x3d"in-basket-checker input-checkbox"\x3e    \x3clabel class\x3d"input-wrap"\x3e', '        \x3cinput type\x3d"checkbox" class\x3d"J-item-checkbox"' + (a.checked ? "checked" : "") + "\x3e", '        \x3cspan class\x3d"input-ctnr"\x3e\x3c/span\x3e    \x3c/label\x3e\x3c/div\x3e', c, '\x3cdiv class\x3d"in-basket-text"\x3e    \x3cdiv class\x3d"in-basket-title"\x3e', '        \x3ca href\x3d"' + a.link + '" title\x3d"' + a.name + '" alt\x3d"' + a.name + '" target\x3d"_blank"\x3e' + a.name + "\x3c/a\x3e", "    \x3c/div\x3e", b, '\x3c/div\x3e\x3cdiv class\x3d"in-basket-delete-wrap"\x3e', '    \x3ca href\x3d"javascript:void(0);" class\x3d"in-basket-delete"' + (h ? 'style\x3d"display:inline;"' : "") + '\x3e\x3ci class\x3d"micon"\x3e\x26#xe00c;\x3c/i\x3e\x3c/a\x3e', "\x3c/div\x3e"].join("")
			},
			companyItem: '\x3cli class\x3d"in-basket-supplier J-companyName"\x3e\x3cdiv class\x3d"in-basket-name" title\x3d"{COMPANYNAME}"\x3e{COMPANYNAME}\x3c/div\x3e\x3c/li\x3e'
		}
	}

	function g() {
		var a = this._.selected[this._.type] && this.showItem.find("li[data-itemid]").length === this._.selected[this._.type].length;
		this.showItem && this.showItem.find(".J-inquiryCheckedAll").prop("checked", a)
	}
	var e = null,
		d = "//www.made-in-china.com/inquirybasket.do?action\x3daddInquiry\x26type\x3d{type}\x26sourceId\x3d{id}\x26referrer\x3d" + encodeURIComponent(window.location.href),
		h = window.navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1;
	c.prototype._initEvent = function() {
		function a(a) {
			return "li" === a[0].nodeName.toLowerCase() ? a : a.parents("li")
		}
		if (!this.carrier) throw "carrier must be exist.";
		var b = this,
			c = null;
		this._.elems.inquiryControl.bind("click", function(a) {
			b._.expand ? b.hide.call(b) : b.show.call(b);
			a.stopPropagation()
		});
		this._.elems.tabMenu.children().bind("click", function(a) {
			var c = $(this).attr("data-Type");
			b.switchType(c);
			a.stopPropagation()
		});
		h || (this._.elems.list.bind("mouseover", function(b) {
			b = a($(b.target));
			b.hasClass("in-basket-supplier") || b.addClass("hover")
		}), this._.elems.list.bind("mouseout", function(b) {
			a($(b.target)).removeClass("hover")
		}));
		this._.elems.list.bind("click", function(k) {
			var f = a($(k.target));
			var d = f.attr("data-ItemId");
			var e = f.attr("data-UrlId"),
				m = null;
			k.stopPropagation();
			if (!f.hasClass("J-companyName"))
				if (m = $(k.target), m.is(".input-checkbox")) m.closest("li[data-itemid]").trigger("click");
				else if (!m.is(".input-ctnr, .input-wrap"))
				if (b.showItem && b.showItem.find(".J-inquiryError").hide(), m.hasClass("in-basket-delete") || m.closest(".in-basket-delete").length) k.preventDefault(), $(k.target).hide(), b.removeItem(d, function() {
					f.fadeOut("slow", function() {
						f.prev().hasClass("J-companyName") && (0 === f.next().length || f.next().hasClass("J-companyName")) && f.prev().remove();
						$(f).remove();
						b._autoScroll()
					});
					b._updateSelect.call(b, e, !1)
				});
				else if (m.hasClass("J-inquiryCheckedAll")) m.prop("checked") ? b.showItem.find("li[data-itemid]:not(.ibselected)").trigger("click") : b.showItem.find("li[data-itemid].ibselected").trigger("click");
			else if (m.is(".input-checkbox") || m.closest(".input-checkbox").length) f.toggleClass("ibselected"), b._updateSelect.call(b, e, f.hasClass("ibselected")), g.call(b);
			else if (0 === m.closest(".input-checkbox").length && (m.is("li[data-itemid]") || m.closest("li[data-itemid]").length && m.is(":not(a, img)"))) f.toggleClass("ibselected"), k = f.find(".J-item-checkbox"), k.prop("checked", !k.prop("checked")), b._updateSelect.call(b, e, k.prop("checked")), g.call(b);
			else if ($(k.target).hasClass("J-sendInquiry") && (m = b._transURL("//www.made-in-china.com/sendInquiry/{type}s_{ids}.html", b._.inquiryOpts), b._.type === b._.typeMap.o2o ? m && (m = m + "?" + $.param({
					from: "basket",
					type: "o2o"
				})) : b._.beforeInquiry && (c = b._.beforeInquiry(m)) && (m = c), m ? $(k.target).attr("href", m) : k.preventDefault()), $(k.target).hasClass("J-compare") && (d = "//www.made-in-china.com/compare/{type}_{ids}.html?from\x3d1\x26page\x3d", b._.beforeCompare && (c = b._.beforeCompare(d)) && (d = c), (m = b._transURL(d, b._.compareOpts)) ? $(k.target).attr("href", m) : k.preventDefault()), $(k.target).is(".J-start-order-mini")) {
				d = "//trading.made-in-china.com/start-order.html?from\x3d2\x26prodId\x3d";
				b._.beforeOrder && (c = b._.beforeOrder(d)) && (d = c);
				d = b._transURL(d, b._.orderOpts);
				var h = b.getSelectedItems(),
					A = [];
				$.each(b.cacheData.product && b.cacheData.product.data, function(a, b) {
					$.each(b.items, function(a, b) {
						-1 !== $.inArray(b.urlId, h) && b.isOnlineTrading && A.push(b.urlId)
					})
				});
				A.length ? k.target.href = d + A.join(",") : (b._showError("There is no tradable product selected!"), k.preventDefault())
			}
		});
		$(document.body).bind("click", function(a) {
			0 === $(a.target).parents("#in-basket").length && 0 === $(a.target).parents(".already-in-basket").length && b._.expand && 0 === $(a.target).parents(".add-to-basket").length && b.hide()
		});
		var f = !1;
		this._.elems.list.bind("mousewheel", function(a) {
			a = a.originalEvent.detail || a.originalEvent.wheelDelta;
			var b = $(this).find("ul:visible")[0];
			f = 0 < a && 0 === b.scrollTop || 0 > a && b.scrollHeight === b.scrollTop + $(b).height() ? !0 : !1
		});
		this._.elems.list.bind("mouseleave", function() {
			f = !1
		});
		$(window).bind("mousewheel", function(a) {
			f && a.preventDefault()
		});
		$(window).bind("resize", function() {
			b._.expand && b._autoScroll()
		});
		this._.isIE6 && $(window).bind("scroll", function() {
			var a = parseInt(document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop);
			b.carrier.css("top", a + parseInt(document.documentElement.clientHeight) - b.carrier.height() + "px")
		})
	};
	c.prototype._updateSelect = function(a, b) {
		if (!a) return this._.selected[this._.type];
		this._.selected[this._.type] || (this._.selected[this._.type] = []);
		var c = this._.selected[this._.type].join(",");
		if (b && -1 === c.indexOf(a)) this._.selected[this._.type].push(a);
		else
			for (c = this._.selected[this._.type].length; 0 < c;)
				if (c--, this._.selected[this._.type][c] === a) {
					this._.selected[this._.type].splice(c, 1);
					break
				} return this._.selected
	};
	c.prototype._initBasket = function(a) {
		function b(a) {
			var b = "",
				c = this.getSelectedItems().join(",");
			for (f = 0; f < a.length; f++) {
				var k = -1 !== c.indexOf(a[f].urlId);
				var e = this.template.item({
					type: d,
					link: decodeURIComponent(a[f].redirectUrl),
					name: this._escape(a[f].name),
					shortDesc: a[f].shortCut,
					imgLink: decodeURIComponent(a[f].imgUrl),
					shows: a[f].expo || [],
					checked: k,
					isOnlineTrading: !!a[f].isOnlineTrading
				});
				b += '\x3cli class\x3d"in-basket-item ' + (k ? "ibselected" : "") + '" data-ItemId\x3d"' + a[f].id + '" data-UrlId\x3d"' + a[f].urlId + '"\x3e' + e + "\x3c/li\x3e"
			}
			return b
		}
		var c, f, d = a || this._.type;
		a = d.toUpperCase();
		if (this.currentData && 0 < this[d + "Count"]) {
			var e = "\x3cul\x3e";
			if ("product" !== d && "o2oProduct" !== d || !this.currentData.length) e += b.call(this, this.currentData);
			else
				for (c = 0; c < this.currentData.length; c++) e += this.template.companyItem.replace(/{COMPANYNAME}/g, this._escape(this.currentData[c].name)), this.currentData[c].items && this.currentData[c].items.length && (e += b.call(this, this.currentData[c].items));
			e += "\x3c/ul\x3e";
			if ("product" !== d && "o2oProduct" !== d || !this.currentData.length) e = this.template.items({}).replace("{LIST}", e);
			else {
				var h = !1;
				$.each(this.currentData, function(a, b) {
					$.each(b.items, function(a, b) {
						b.isOnlineTrading && (h = !0)
					})
				});
				e = this.template.items({
					hasTrading: h
				}).replace("{LIST}", e)
			}
		}
		this.currentData && 0 !== this.currentData.length || (e = this.template.nothing.replace("{TYPE}", "o2oProduct" === d ? "exhibition product" : a.toLowerCase()));
		this._.elems[d + "Content"] && this._.elems[d + "Content"].html(e);
		this._lazyImage(this._.elems[d + "Content"]);
		g.call(this)
	};
	c.prototype._initCount = function() {
		this.o2oProductCount = this.supplierCount = this.supplierLimit = this.productCount = this.productLimit = 0;
		if (this.cacheData) {
			var a = this.cacheData;
			this.supplierCount = parseInt(a.supplier.data.length, 10);
			this.supplierLimit = parseInt(a.supplier.limit, 10);
			this.productLimit = parseInt(a.product.limit, 10);
			for (var b = 0; a.product && a.product.data[b];) this.productCount += a.product.data[b].items.length, b++;
			for (b = 0; a.o2oProduct && a.o2oProduct.data[b];) this.o2oProductCount += a.o2oProduct.data[b].items.length, b++;
			this.o2oProductCount = (a = a.o2oProduct && a.o2oProduct.data) ? a.reduce(function(a, b) {
				return a + b.items.length
			}, 0) : 0;
			this.totalCount = this.supplierCount + this.productCount + this.o2oProductCount
		}
		this._.elems.totalCount[0].innerHTML = "(\x3cem\x3e" + this.totalCount + "\x3c/em\x3e)";
		this._.elems.productCount[0].innerHTML = "(\x3cem\x3e" + this.productCount + "\x3c/em\x3e)";
		this._.elems.supplierCount[0].innerHTML = "(\x3cem\x3e" + this.supplierCount + "\x3c/em\x3e)";
		this._.elems.o2oProductCount[0].innerHTML = "(\x3cem\x3e" + this.o2oProductCount + "\x3c/em\x3e)"
	};
	c.prototype._escape = function(a) {
		if (a) try {
			return a.replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/'/g, "\x26#039;").replace(/"/g, "\x26#034;")
		} catch (b) {}
		return a
	};
	c.prototype._rePosition = function(a) {
		var b = 0,
			c = this,
			f = "hidden" !== this.carrier.css("overflow");
		this._.isIE6 && this.carrier.css("top", "auto");
		f ? b = parseInt(this._.elems.inquiryControl.outerHeight(), 10) - parseInt(this.carrier.outerHeight(), 10) : (this.carrier.css({
			height: "auto",
			overflow: "visible"
		}), this.carrier.css("bottom", parseInt(this._.elems.inquiryControl.outerHeight(), 10) - parseInt(this.carrier.outerHeight(), 10)));
		this.carrier.animate({
			bottom: b + "px"
		}, 400, "easeInQuart", function() {
			c._initCount.call(c);
			f && c.carrier.css({
				height: "34px",
				overflow: "hidden",
				bottom: 0
			});
			a && a.call(c)
		})
	};
	c.prototype._animate = function(a, b) {
		if (this._.animateOpts.carrier) {
			var c = this._.animateOpts,
				f = this.carrier;
			this._.expand && (f = this._.elems.tabMenu);
			a = $(a);
			c.carrier.style.cssText = "display:none;width:" + c.width + "px;height:" + c.height + "px;position:absolute; z-index:998;";
			a.show();
			f = {
				start: {
					x: a.offset().left,
					y: a.offset().top,
					angle: 325.325,
					length: .458
				},
				end: {
					x: f.offset().left + parseInt(f.width()) / 2,
					y: f.offset().top,
					angle: 39.018,
					length: .18
				}
			};
			document.body.appendChild(c.carrier);
			$(c.carrier).show();
			$(c.carrier).animate({
				path: new $.path.bezier(f)
			}, c.speed, function() {
				$(c.carrier).hide(200);
				$(c.carrier).remove();
				b && b()
			})
		}
	};
	c.prototype._showError = function(a) {
		var b = this;
		this._.timer && clearTimeout(this._.timer);
		this.showItem.find(".J-inquiryError").html(a).show();
		this._.timer = setTimeout(function() {
			b.showItem.find(".J-inquiryError").hide();
			b._.timer = null
		}, 4E3)
	};
	c.prototype._transURL = function(a, b) {
		var c = this._.typeInvertMap[this._.type === this._.typeMap.o2o ? this._.typeMap.prod : this._.type] || this._.typeInvertMap.product,
			f = this.getSelectedItems();
		return f.length < b.min ? (this._showError(b.LESS_LIMIT), null) : f.length > b.max ? (this._showError(b.OVER_LIMIT), null) : a.replace("{type}", c).replace("{ids}", f.join(","))
	};
	c.prototype._getItemData = function(a, b) {
		var c;
		if (a.length)
			for (var f = 0, d = a.length; f < d; f++)
				if (("product" === this._.type || "o2oProduct" === this._.type) && a[f].items) {
					if (c = this._getItemData(a[f].items, b)) return c
				} else if (a[f].id == b) return a[f];
		return null
	};
	c.prototype.geometric = function(a, b, c, f) {
		var d = {
			w: c,
			h: f
		};
		if (a <= c && b <= f) return {
			w: a,
			h: b
		};
		a / b > c / f ? c < a && (d.h = b * c / a) : f < b && (d.w = a * f / b);
		return d
	};
	c.prototype._lazyImage = function(a) {
		if (a) {
			a = a.find("img[data-src]");
			for (var b, c, f = this, d = 0; d < a.length; d++)(function(a) {
				a.src || (c = new Image, c.src = decodeURIComponent(a.getAttribute("data-src")), c.complete ? (b = f.geometric(c.width, c.height, 50, 50), a.width = b.w, a.height = b.h) : c.onload = function() {
					return function() {
						b = f.geometric(this.width, this.height, 50, 50);
						a.width = b.w;
						a.height = b.h
					}
				}(), a.src = decodeURIComponent(a.getAttribute("data-src")))
			})(a[d])
		}
	};
	c.prototype._autoScroll = function() {
		var a = this._.elems[this._.type + "Content"].find("ul");
		if (a.length && a.find("li").length && this._.expand) {
			a.css("height", "auto");
			a.css("overflow", "hidden");
			a.outerHeight();
			var b = this._.elems[this._.type + "Content"].outerHeight() + 72;
			var c = document.documentElement.clientHeight - b;
			b = a.find("li[data-itemId]").outerHeight();
			a.find(".J-companyName").length && (b += a.find(".J-companyName").outerHeight());
			200 >= c && (c = document.documentElement.clientHeight - 350, c <= b && (c = b), a.css("height", c), a.css("overflow-y", "auto"))
		}
	};
	c.prototype.render = function() {
		this.getCrossData("//www.made-in-china.com/inquirybasket.do?action\x3dinquiryList", function(a) {
			this.cacheData = a;
			this.carrier = $(this.template.container);
			this._.elems = {};
			this._.elems.inquiryControl = this.carrier.find("#J-inquiryControl");
			this._.elems.totalCount = this._.elems.inquiryControl.find(".J-inquiryTotal");
			this._.elems.arr = this._.elems.inquiryControl.find(".J-arr");
			this._.elems.list = $(this.template.list);
			this._.elems.productContent = this._.elems.list.find(".J-productContent");
			this._.elems.supplierContent = this._.elems.list.find(".J-supplierContent");
			this._.elems.o2oProductContent = this._.elems.list.find(".J-o2oProductContent");
			this.carrier.append(this._.elems.list);
			this._.elems.tabMenu = $(this.template.tab(a));
			this._.elems.productCount = this._.elems.tabMenu.find(".J-productCount\x3espan");
			this._.elems.supplierCount = this._.elems.tabMenu.find(".J-supplierCount\x3espan");
			this._.elems.o2oProductCount = this._.elems.tabMenu.find(".J-o2oProductCount\x3espan");
			this.carrier.append(this._.elems.tabMenu);
			this.carrier.css({
				height: "34px",
				overflow: "hidden"
			});
			this._initCount();
			0 === this.totalCount && this.carrier.css("display", "none");
			$(document.body).append(this.carrier);
			this._.isIE6 && (document.getElementsByTagName("html")[0].style.cssText = "background-image:url(about:blank); background-attachment:fixed;", this.carrier.css({
				position: "absolute",
				right: "0px"
			}));
			this._initEvent();
			this._.afterRender && this._.afterRender(null, a)
		}, null, function(a, b) {
			this._.afterRender && this._.afterRender("Oops! An Error Occurred.")
		})
	};
	c.prototype.show = function() {
		this._.elems.tabMenu.children("[data-Type\x3d" + (this._.type || "product") + "]").trigger("click");
		this._.expand || (this._.elems.arr.html("\x26#xe006;"), this._.expand = !0, this._.elems.inquiryControl.addClass("in-basket-main-info-top"), this._autoScroll(), this._rePosition())
	};
	c.prototype.hide = function() {
		this._rePosition(function() {
			this._.elems.arr.html("\x26#xe007;");
			this._.elems.inquiryControl.removeClass("in-basket-main-info-top");
			this._.expand = !1
		})
	};
	c.prototype.addItem = function(a, b, c, f) {
		var e = 1,
			k = this,
			h = d.replace("{type}", b),
			g = this._.typeMap[b] || "product",
			z = a;
		this.carrier.css("display", "");
		c && (this._.animateOpts.carrier = c.carrier || null, this._.animateOpts.start = c.start || null, this._.animateOpts.speed = c.speed || 1E3, this._.animateOpts.width = c.width || "auto", this._.animateOpts.height = c.height || "auto");
		"[object Array]" === Object.prototype.toString.call(a) && (e = a.length, h = "//www.made-in-china.com/inquirybasket.do?action\x3daddInquiryList", z = "type\x3d" + b + "\x26sourceIds\x3d" + a.join("\x26sourceIds\x3d"));
		if (this[g + "Count"] + e > this[g + "Limit"]) return this.switchType(g), this._showError("You only can add " + this[g + "Limit"] + " or fewer " + g + "s."), this.show(), !1;
		this.getCrossData(h, function(a) {
			k.cacheData = a;
			k.currentData = a[g].data;
			k._animate.call(k, c.start, function() {
				k._initCount();
				f && f(a);
				k.refresh(g);
				k._.expand && k._autoScroll()
			})
		}, z)
	};
	c.prototype.removeItem = function(a, b) {
		if ("function" === typeof a) this._.removeBack = a;
		else {
			var c = a,
				d = this,
				e = d._getItemData(this.currentData, a);
			"[object Array]" === Object.prototype.toString.call(a) && (c = a.join(","));
			this.getCrossData("//www.made-in-china.com/inquirybasket.do?action\x3ddeleteInquiry\x26type\x3d{type}\x26recordId\x3d{id}", function(a) {
				d.cacheData = a;
				d.currentData = a[d._.type].data;
				b && b();
				d._initBasket();
				d._.expand && d._autoScroll();
				d._initCount();
				d._.removeBack && e && d._.removeBack(e.urlId, d._.type, e.imgUrl);
				0 === this.totalCount && this.carrier.css("display", "none")
			}, c)
		}
	};
	c.prototype.refresh = function(a) {
		this._initBasket(a);
		this.switchType(a)
	};
	c.prototype.clear = function() {
		this.cacheData.supplier.data = [];
		this.cacheData.product.data = [];
		this.cacheData.o2oProduct.data = [];
		this.currentData = null;
		this._initCount();
		if (this._.type) {
			var a = ["product", "supplier", "o2oProduct"],
				b = a.indexOf(this._.type);
			this._.type = a[((0 <= b ? b : 0) + 1) % a.length];
			this._initBasket()
		}
		this._rePosition()
	};
	c.prototype.getSelectedItems = function() {
		return this._.type && this.cacheData[this._.type] ? this._.selected[this._.type] || [] : []
	};
	c.prototype.getCount = function(a) {
		return this[this._.type + "Count"] ? this[this._.type + "Count"] : 0
	};
	c.prototype.switchType = function(a) {
		this._.type === a || "product" !== a && "supplier" !== a && "o2oProduct" !== a || (this._.type = a, this.currentData = this.cacheData && this.cacheData[this._.type].data, this.showItem && this.showItem.hide(), this._initCount(), this.showItem = this._.elems[this._.type + "Content"], this._[this._.type + "init"] || (this._initBasket(), this._[this._.type + "init"] = !0), this._.elems.tabMenu.children().removeClass("ibselected"), this._.elems.tabMenu.children("[data-type\x3d" + this._.type + "]").addClass("ibselected"), this.showItem.show(), this._autoScroll())
	};
	c.prototype.getCrossData = function(a, b, c, d) {
		var f = this;
		a = a.replace("{type}", this._.typeInvertMap[this._.type] || this._.typeInvertMap.product);
		c && -1 !== a.indexOf("{id}") && (a = a.replace("{id}", c), c = null);
		$.jsonp({
			url: a + "\x26_\x3d" + (new Date).getTime(),
			cache: !1,
			callbackParameter: "jsoncallback",
			data: c || "",
			success: function(a) {
				b && b.call(f, a)
			},
			complete: function() {},
			error: function(a, b) {
				d && d.call(f, a, b);
				throw "Oops! An Error Occurred.";
			}
		})
	};
	c.prototype.beforeInquiry = function(a) {
		this._.beforeInquiry = a
	};
	c.prototype.beforeCompare = function(a) {
		this._.beforeCompare = a
	};
	c.prototype.afterRender = function(a) {
		this._.afterRender = a
	};
	return c
});
(function() {
	var c = document.createElement("link");
	c.type = "text/css";
	c.rel = "stylesheet";
	c.href = "//www.micstatic.com/gb/js/business/plugs/inquiryMINI/min-basket.css?t\x3d" + (new Date).getTime();
	document.getElementsByTagName("head")[0].appendChild(c)
})();
var IBalready = '\x3cspan class\x3d"already-in-basket link"\x3e\x3c/span\x3e',
	IBadd = '\x3cspan class\x3d"add-to-basket"\x3e\x3c/span\x3e',
	inquiryMini = new InquiryMINI;
inquiryMini.render();
inquiryMini.beforeCompare(function(c) {
	if ($("#compareFromPage").length) return c + $("#compareFromPage").val()
});
inquiryMini.beforeInquiry(function(c) {
	if ($("#contactUrlParam").length) {
		var g = $("#contactUrlParam").val();
		if ("" !== g && "" !== c && null !== c) return -1 == g.indexOf("\x26event\x3dbasket") ? c + g + "\x26event\x3dbasket" : c + g
	}
});

function add2BasketProd(c, g) {
	var e = document.createElement("div"),
		d = document.createElement("img"),
		h = new Image,
		a = c;
	h.src = g;
	d.src = g;
	if (h.complete) {
		var b = inquiryMini.geometric(h.width, h.height, 50, 50);
		d.width = b.w;
		d.height = b.h
	} else d.width = 50, d.heigth = 50, h.onload = function() {
		return function() {
			b = inquiryMini.geometric(this.width, this.height, 50, 50);
			d.width = b.w;
			d.height = b.h
		}
	}();
	e.appendChild(d);
	c && 0 === c.indexOf("pro-") && (a = c.substring(4, c.length));
	inquiryMini.addItem(a, "prod", {
		start: $("." + c + ":visible").eq(0),
		carrier: e
	}, function() {
		var b = $("." + c);
		if (b.attr("iconOnly")) b.attr("href", "javascript:;"), b.attr("title", "").addClass("selected").html('\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3e');
		else {
			var d = $(IBalready);
			d.addClass(c);
			b.parent().hasClass("js_abs") || b.parent().hasClass("basket-wrap") ? (d.append('\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket'), b.replaceWith(d), $("." + a).parent().show()) : (b.parent().hasClass("J-prodList") ? (b.parent().find(".tip-para").html("Inquiry Basket"), b.parent().find(".tip-inquiry").addClass("tip-inquiry-already"), d.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'product\');"\x3e\x3ci class\x3d"ob-icon icon-cart-success"\x3e\x3c/i\x3e\x3c/a\x3e')) : d.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'product\');"\x3e\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket\x3c/a\x3e'), b.replaceWith(d))
		}
		refreshHead()
	})
}

function add2BasketCom(c, g) {
	var e = document.createElement("div"),
		d = document.createElement("img"),
		h = c,
		a = $("." + h);
	d.src = "//www.micstatic.com/gb/js/business/plugs/inquiryMINI/img/min-basket-com-logo.png";
	e.appendChild(d);
	e.className = h + "Animate";
	c && 0 === c.indexOf("com-") && (h = c.substring(4, c.length));
	a.eq(0).parent().show();
	inquiryMini.addItem(h, "com", {
		start: $("." + c + ":visible").eq(0),
		carrier: e
	}, function() {
		$("." + h + "Animate").remove();
		var b = $(IBalready);
		b.addClass(c);
		a.parent().hasClass("js_abs") || a.parent().hasClass("basket-wrap") ? (b.append('\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket'), a.replaceWith(b), $("." + c).parent().show()) : (a.parent().hasClass("J-prodList") ? (a.parent().find(".tip-para").html("Inquiry Basket"), a.parent().find(".tip-inquiry").addClass("tip-inquiry-already"), b.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'product\');"\x3e\x3ci class\x3d"ob-icon icon-cart-success"\x3e\x3c/i\x3e\x3c/a\x3e')) : b.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'supplier\');"\x3e\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket\x3c/a\x3e'), a.replaceWith(b));
		var d = b.parent().find("div.pic .micon");
		1 == d.size() && (b.find(".micon").remove(), d.html("\x26#xe05f;"), d.attr("title", ""), d.parent().attr("href", "//www.made-in-china.com/inquiry-basket/"), d.parent().attr("target", "_blank"));
		refreshHead()
	})
}

function add2BasketO2o(c, g) {
	var e = document.createElement("div"),
		d = document.createElement("img"),
		h = new Image,
		a = c;
	h.src = g;
	d.src = g;
	if (h.complete) {
		var b = inquiryMini.geometric(h.width, h.height, 50, 50);
		d.width = b.w;
		d.height = b.h
	} else d.width = 50, d.heigth = 50, h.onload = function() {
		return function() {
			b = inquiryMini.geometric(this.width, this.height, 50, 50);
			d.width = b.w;
			d.height = b.h
		}
	}();
	e.appendChild(d);
	c && 0 === c.indexOf("o2o-") && (a = c.substring(4, c.length));
	inquiryMini.addItem(a, "o2o", {
		start: $("." + c + ":visible").eq(0),
		carrier: e
	}, function() {
		var b = $("." + c);
		if (b.attr("iconOnly")) b.attr("href", "javascript:;"), b.attr("title", "").addClass("selected").html('\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3e');
		else {
			var d = $(IBalready);
			d.addClass(c);
			b.parent().hasClass("js_abs") || b.parent().hasClass("basket-wrap") ? (d.append('\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket'), b.replaceWith(d), $("." + a).parent().show()) : (b.parent().hasClass("J-prodList") ? (b.parent().find(".tip-para").html("Inquiry Basket"), b.parent().find(".tip-inquiry").addClass("tip-inquiry-already"), d.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'o2oProduct\');"\x3e\x3ci class\x3d"ob-icon icon-cart-success"\x3e\x3c/i\x3e\x3c/a\x3e')) : d.append('\x3ca style\x3d"text-decoration:none;" href\x3d"javascript:;" onclick\x3d"showMiniInquiry(\'o2oProduct\');"\x3e\x3ci class\x3d"micon"\x3e\x26#xe05f;\x3c/i\x3eInquiry Basket\x3c/a\x3e'), b.replaceWith(d))
		}
		refreshHead()
	})
}

function showMiniInquiry(c) {
	inquiryMini && (inquiryMini.switchType(c), inquiryMini.show());
	return !1
}
inquiryMini.removeItem(function(c, g, e) {
	if (c) {
		var d = {
				product: "pro-",
				supplier: "com-",
				o2oProduct: "o2o-"
			},
			h = {
				product: "add2BasketProd",
				supplier: "add2BasketCom",
				o2oProduct: "add2BasketO2o"
			},
			a = $(IBadd),
			b = $("." + c);
		d = d[g] || d.product;
		g = h[g] || h.product;
		0 == b.size() ? (b = $("." + d + c), c = d + c, a.addClass(c), a.append('\x3ca title\x3d"Add to inquiry basket to compare." href\x3d"javascript:' + g + "('" + c + "', '" + e + '\')" rel\x3d"nofollow"\x3e\x3ci class\x3d"micon"\x3e\x26#xe05e;\x3c/i\x3eInquiry Basket\x3c/a\x3e'), b.replaceWith(a)) : b.attr("iconOnly") ? (b.attr("href", "javascript:" + g + "('" + c + "', '" + e + "')"), b.attr("title", "Add to inquiry basket to compare."), b.removeClass("selected").html('\x3ci class\x3d"micon"\x3e\x26#xe020;\x3c/i\x3e')) : b.parent().hasClass("J-prodList") ? (b.parent().find(".tip-para").html("Add to inquiry basket to compare."), b.parent().find(".tip-inquiry").removeClass("tip-inquiry-already"), a.addClass(c), a.append('\x3ca href\x3d"javascript:' + g + "('" + c + "', '" + e + '\')" rel\x3d"nofollow"\x3e\x3ci class\x3d"ob-icon icon-cart-add"\x3e\x3c/i\x3e\x3c/a\x3e'), b.replaceWith(a)) : (a.addClass(c), a.append('\x3ca title\x3d"Add to inquiry basket to compare." href\x3d"javascript:' + g + "('" + c + "', '" + e + '\')" rel\x3d"nofollow"\x3e\x3ci class\x3d"micon"\x3e\x26#xe05e;\x3c/i\x3eInquiry Basket\x3c/a\x3e'), b.replaceWith(a), $("." + c).parent().hasClass("js_abs") && $("." + c).parent().hide());
		b = a.parent().find("div.pic .micon");
		1 == b.size() && (a.find(".micon").remove(), b.html("\x26#xe05e;"), b.attr("title", "Add to inquiry basket to compare."), b.parent().attr("href", "javascript:add2BasketCom('" + c + "', '" + e + "')"), b.parent().removeAttr("target"));
		refreshHead()
	}
});

function refreshHead() {
	window.requestLogonStatus && window.requestLogonStatus();
	window.logonRefresh && window.logonRefresh()
}

function addCom2BasketNormally(c, g) {
	var e = document.createElement("div"),
		d = document.createElement("img");
	d.src = "//www.micstatic.com/gb/js/business/plugs/inquiryMINI/img/min-basket-com-logo.png";
	e.appendChild(d);
	var h = [c, "Animate", Math.floor(1E4 * Math.random())].join("-");
	e.className = h;
	return new Promise(function(a, b) {
		inquiryMini.addItem(c, "com", {
			start: g,
			carrier: e
		}, function() {
			$("." + h).remove();
			a()
		})
	})
};