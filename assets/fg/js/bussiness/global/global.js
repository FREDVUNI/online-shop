var ATF;
void
function() {
	var a = window.location;
	if (!/^192\.168\.\d+\.\d+$/.test(a.hostname)) {
		var b = /(?:^|\.)(?:(?:made-in-china|vemic|micstatic|e-cigaretteschina|crov)\.com|bmic\.org\.cn)$/i;
		var e = /^[\w\-]+\.[\w\-]+$/,
			d = window.self !== window.top,
			l = document.referrer;
		if (l) {
			var c = l.match(/^\w+:\/\/([^\/]*)/)[1];
			c = c.replace(/\:\d+$/, "")
		}
		if (d && c && !b.test(c)) {
			e = window.top;
			b = a.href;
			try {
				e.location.replace ? e.location.replace(b) : e.location.href = b
			} catch (g) {
				e.top.location = b
			}
		} else b.test(a.hostname) || (b = a.href.replace(a.hostname.match(/[\w\-]+\.[\w\-]+$/)[0], (e.test(a.hostname) ? "www." : "") + "made-in-china.com"), a.replace ? a.replace(b) : a.href = b)
	}
}.call(this);
void
function() {
	var a = location.hostname;
	if (!/^[\d\.]+$/.test(a)) {
		var b = /[\w\-]+\.[\w\-]+$/.exec(a)[0];
		a = function(b) {
			var a = new Image;
			a.onload = function() {
				b(!0)
			};
			a.onerror = function() {
				b(!1)
			};
			a.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vz0AAA\x3d"
		};
		var e = function(a) {
			document.cookie = "webp\x3d" + (a || "t") + "; path\x3d/; domain\x3d." + b + "; expires\x3d" + (new Date("2099-12-31")).toUTCString()
		};
		(function() {
			var b = !1,
				a = document.createElement("canvas");
			a.toDataURL && (b = /^data:image\/webp/.test(a.toDataURL("image/webp")));
			return b
		})() ? e("t"): a(function(b) {
			b ? e("t") : e("f")
		})
	}
}.call(this);
if ("undefined" === typeof ATF) {
	var events = "selectstart contextmenu dragstart mousedown copy cut",
		shield = function(a) {
			"img" === a.target.tagName.toLowerCase() && a.preventDefault()
		};
	ATF = function(a) {
		var b = function(b) {
			a(b).unbind(events, shield).bind(events, shield)
		};
		b(".J-ATF");
		a(function() {
			b(".J-ATF")
		});
		return b
	}.call(this, this.jQuery)
}
void
function() {
	var a = 1;
	window.devicePixelRatio && (a = window.devicePixelRatio);
	var b = new Date;
	b.setFullYear(b.getFullYear + 1);
	try {
		document.cookie = ["dpr\x3d", a, "; domain\x3d.", document.domain.match(/[\w\-]+\.[\w\-]+$/)[0], "; path\x3d/; expires\x3d", b.toUTCString()].join("")
	} catch (e) {}
}.call(this);
var _templateResolve = function() {
	var a = /(.)^/,
		b = {
			"\x26": "\x26amp;",
			"\x3c": "\x26lt;",
			"\x3e": "\x26gt;",
			'"': "\x26quot;",
			"'": "\x26#x27;",
			"/": "\x26#x2F;"
		},
		e = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\t": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		d = /\\|'|\r|\n|\t|\u2028|\u2029/g;
	window.__htmlEscape = function(a) {
		return null == a ? "" : ("" + a).replace(RegExp("[\x26\x3c\x3e\"/']", "g"), function(a) {
			return b[a]
		})
	};
	return function(b, c, g) {
		if (b) {
			g = {
				evaluate: /{{([\s\S]+?)}}/g,
				interpolate: /{{=([\s\S]+?)}}/g,
				escape: /{{-([\s\S]+?)}}/g
			};
			var h = new RegExp([(g.escape || a).source, (g.interpolate || a).source, (g.evaluate || a).source].join("|") + "|$", "g"),
				l = 0,
				k = "__p+\x3d'";
			b.replace(h, function(a, c, r, t, f) {
				k += b.slice(l, f).replace(d, function(b) {
					return "\\" + e[b]
				});
				c && (k += "'+\n((__t\x3d(" + c + "))\x3d\x3dnull?'':__htmlEscape(__t))+\n'");
				r && (k += "'+\n((__t\x3d(" + r + "))\x3d\x3dnull?'':__t)+\n'");
				t && (k += "';\n" + t + "\n__p+\x3d'");
				l = f + a.length;
				return a
			});
			k += "';\n";
			g.variable || (k = "with(obj||{}){\n" + k + "}\n");
			k = "var __t,__p\x3d'',__j\x3dArray.prototype.join,print\x3dfunction(){__p+\x3d__j.call(arguments,'');};\n" + k + "return __p;\n";
			try {
				var m = new Function(g.variable || "obj", k)
			} catch (n) {
				throw n.source = k, n;
			}
			if (c) return m(c);
			c = function(b) {
				return m.call(this, b)
			};
			c.source = "function(" + (g.variable || "obj") + "){\n" + k + "}";
			return c
		}
	}
}();
void
function(a, b) {
	var e = function() {
		return !!b(".J-top-loginInfo").length
	};
	if (!a.topLoginInfo && e()) {
		var d = b(".J-header-signInfo-2");
		if (d.length) {
			var l = b(".J-userFeature").clone();
			d.replaceWith(l);
			b(".J-search-remove", l).remove()
		}
		var c = b(".J-search-bar-wrap"),
			g = b(".J-top-logged-2"),
			h = b(".J-header-inquiry-2"),
			q = function(b, a, e) {
				a = a || 0;
				e = e || 0;
				0 === (b ? a + e : e) ? (g.addClass("middel-title"), h.addClass("middel-title")) : (g.removeClass("middel-title"), h.removeClass("middel-title"));
				0 === a ? g.addClass("zero-num") : g.removeClass("zero-num");
				0 === e ? h.addClass("zero-num") : h.removeClass("zero-num");
				b ? c.addClass("user-signed") : c.removeClass("user-signed")
			},
			k = function(a) {
				if (e()) {
					a = b.extend({}, {
						messages: [],
						rfqContents: [],
						noticeContents: [],
						newMailNum: 0,
						rfqNum: 0,
						userType: "",
						isForeign: !0
					}, a);
					b(".J-top-basketNum").html(a.inquiryBasketNum || 0);
					var c = a.canManageInquiry ? parseInt(a.newMailNum + a.rfqNum) || 0 : a.newMailNum || 0;
					q(a.login, c, a.inquiryBasketNum);
					if (a.login) {
						b(".J-top-unlogin").hide();
						b(".J-top-logged").show();
						var f = b(".J-top-username");
						!f.is(".J-top-named") && a.name && f.text(a.name || "");
						f = b(".J-userFeature");
						if (("2" == a.userType || "3" == a.userType) && b("#J-top-inquiry-tmpl").length) {
							var d = _templateResolve(b("#J-top-inquiry-tmpl").html()),
								g = _templateResolve(b("#J-top-rfq-tmpl").html()),
								h = _templateResolve(b("#J-top-notice-tmpl").html()),
								k = b(".J-top-notice", f);
							b(".J-num", k).html(a.unReadNoticeNum || 0);
							a.unReadNoticeNum && (c += a.unReadNoticeNum || 0);
							b(".J-top-inquiry-block", f).html(d(a));
							b(".J-top-rfq-block", f).html(g(a));
							b(".J-top-notice-block", f).html(h(a));
							d = a;
							(d.newMailNum || d.rfqNum || d.unReadNoticeNum) && !d.newMailNum || b(".J-top-tab").eq(0).trigger("click");
							!d.newMailNum && d.rfqNum && b(".J-top-tab").eq(1).trigger("click");
							d.newMailNum || d.rfqNum || !d.unReadNoticeNum || b(".J-top-tab").eq(2).trigger("click")
						}
						b(".J-messageTotal").html(c);
						"1" == a.userType ? (b(".J-buyer", f).show(), b(".J-supplier", f).hide()) : "2" == a.userType ? (b(".J-supplier", f).show(), b(".J-buyer", f).hide()) : "3" === a.userType && (b(".J-supplier", f).show(), b(".J-buyer", f).hide(), b(".J-top-editor", f).hide(), b(".J-top-visit", f).hide(), b(".J-top-visit", f).prev(".m-header-option-item.J-supplier").hide());
						c = b(".J-top-inquiry", f);
						b(".J-num", c).html(a.newMailNum);
						0 < a.newMailNum && (c = b(".J-top-inquiry a", f), c.attr("href", c.attr("data-unRead")));
						c = b(".J-top-rfq", f);
						b(".J-num", c).html(a.rfqNum || 0);
						"1" == a.userType && a.rfqNum && 0 < a.rfqNum && (d = b(".J-buyer.J-top-rfq a", f), d.attr("href", d.attr("data-unRead")));
						a.canManageInquiry || c.hide();
						c = b(".J-top-editor", f);
						d = b(".J-top-visit", f);
						"2" == a.userType && a.canManageInfo || (c.hide(), d.hide(), b(".J-top-visit", f).prev(".m-header-option-item.J-supplier").hide());
						f = b(".J-focusChinaLink");
						("2" === a.userType || "3" === a.userType || "" === a.userType && !a.isForeign) && f.attr("href", "//www.focuschina.com/");
						a = a.login || a.name ? "1" === a.userType ? "//www.made-in-china.com/special/forbuyerapp/" : "http://service.made-in-china.com/bulletin/function/4992.htm" : a.isForeign ? "//www.made-in-china.com/special/forbuyerapp/" : "http://service.made-in-china.com/bulletin/function/4992.htm";
						b(".J-header-app-link").attr("href", a)
					} else b(".J-top-unlogin").show(), b(".J-top-logged").hide()
				}
			},
			m = null,
			n = function(a, d) {
				if (e()) {
					var c = {},
						g = b(".J-top-loginInfo").attr("data-useless");
					g && (c.useless = g);
					b(".J-top-head-type").length && "vo" === b(".J-top-head-type").val() && (c.envo = !0);
					g = encodeURIComponent(window.location.href);
					b(".J-jumpNext").length ? b(".J-top-signIn").attr("href", b(".J-top-signIn").attr("href") + "?jumpNext\x3d1\x26baseNextPage\x3d" + g) : b(".J-top-signIn").attr("href", b(".J-top-signIn").attr("href") + "?baseNextPage\x3d" + g);
					b(".J-top-signOut").attr("href", b(".J-top-signOut").attr("href") + "\x26baseNextPage\x3d" + g);
					b.extend(!0, c, a);
					m && m.abort();
					m = b.ajax({
						url: "//www.made-in-china.com/head.do?xcase\x3dgetHead\x26callback\x3d?",
						dataType: "jsonp",
						data: c,
						timeout: 1E5,
						success: function(a) {
							k(a);
							m = null;
							"function" === typeof d && d(a)
						},
						error: function() {
							m = null
						}
					})
				}
			},
			p = null;
		d = function(a, c) {
			if (e()) {
				var d = {};
				b.extend(!0, d, a);
				p && p.abort();
				p = b.ajax({
					url: "//www.made-in-china.com/head.do?xcase\x3dgetBasketNum\x26callback\x3d?",
					dataType: "jsonp",
					data: d,
					timeout: 1E5,
					success: function(a) {
						e() && (b(".J-top-basketNum").html(a.basketNum || 0), q(!1, 0, a.basketNum), p = null, "function" === typeof c && c(a))
					},
					error: function() {
						p = null
					}
				})
			}
		};
		b(".J-top-tab").each(function(a, c) {
			b(this).click(function() {
				b(".J-top-tab").removeClass("selected");
				b(this).addClass("selected");
				b(".J-top-block").hide();
				b(".J-top-block").eq(a).show()
			})
		});
		"__IS_USER_LOGED__" in a && !a.__IS_USER_LOGED__ ? d() : n();
		a.topLoginInfo = {
			update: k,
			request: n,
			getStatus: function(a) {
				n(null, a)
			}
		}
	}
}.call(this, this, this.jQuery || this.Zepto);
(function(a) {
	function b() {
		var b = "";
		"/report-cart/" === a("#top .site-nav .inquiry a").eq(0).attr("href") && (b = "\x26sc\x3d1");
		b = "//www.made-in-china.com/ajaxfunction.do?xcase\x3dajaxlogonconnection" + b + "\x26t\x3d" + (new Date).getTime() + "\x26callback\x3d?";
		a.ajax({
			url: b,
			type: "get",
			dataType: "jsonp",
			cache: !1,
			success: function(b) {
				if (b && b.length) {
					var e = encodeURIComponent(window.location.href),
						c = a("#top .user-nav").eq(0),
						d = a("#top .site-nav .inquiry a strong")[0],
						h = b[3] || 0,
						q = '\x3cli class\x3d"first menu-item"\x3eWelcome \x3ca href\x3d"' + (b[4] ? "//purchase.made-in-china.com/" : "//membercenter.made-in-china.com") + '"\x3e\x3cstrong\x3e' + (b[1] || "") + "\x3c/strong\x3e\x3c/a\x3e!";
					h = '\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"' + h + ' New Message(s)" title\x3d"' + h + ' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e' + h + "\x3c/a\x3e\x3c/li\x3e";
					var k = "1" == a("#sendInquiryBuyerStatus").val() ? '\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout"\x3eSign Out\x3c/a\x3e\x3c/li\x3e' : '\x3cli class\x3d"menu-item last"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d' + e + '"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';
					d && a(d).html(b[2] || 0);
					c.length && (b && !b[0] ? (b = '\x3cli class\x3d"first menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"//membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"signin menu-item"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/sign-in/?baseNextPage\x3d' + e + '"\x3eSign In\x3c/a\x3e\x3c/li\x3e', c.empty(), c.html(b)) : (c.empty(), c.html(q + h + k)))
				}
			},
			error: {}
		})
	}
	window.topLoginInfo ? window.logonRefresh = window.topLoginInfo.request : (b(), window.logonRefresh = b)
})(this.jQuery || this.Zepto);
window.$ && $(function() {
	var a = [],
		b;
	a.push($("#multi-lang"));
	a.push($("#quick-nav"));
	a.push($("#dev_hotword"));
	a.push($("#buyer-guide"));
	a.push($("#supplier-guide"));
	for (var e = 0; e < a.length; e++)(b = a[e]) && b.length && function(a) {
		a.find(".dropmenu-hd").bind("mouseover", function() {
			a.addClass("hover");
			a.find(".icon").html("\x26#xf0d8;")
		});
		a.bind("mouseleave", function() {
			a.removeClass("hover");
			a.find(".icon").html("\x26#xf0d7;")
		})
	}(b);
	0 !== $("#buyerappend").length && $("#buyer-guide").bind("mouseover", function() {
		window.initAsyncBuyer || ($("#buyerappend").after('\x3ca href\x3d"//purchase.made-in-china.com/trade-service/quotation-request.html" rel\x3d"nofollow"\x3ePost Sourcing Request\x3c/a\x3e\x3ca href\x3d"//resources.made-in-china.com/industry-analysis-reports/" rel\x3d"nofollow"\x3eIndustry Analysis\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/tradeservice/private-sourcing-meetings.html" rel\x3d"nofollow"\x3eMeet Suppliers\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/trademessenger/" rel\x3d"nofollow"\x3eTradeMessenger\x3c/a\x3e'), window.initAsyncBuyer = !0)
	});
	0 !== $("#supplierappend").length && $("#supplier-guide").bind("mouseover", function() {
		window.initAsyncSupplier || ($("#supplierappend").append('\x3ca href\x3d"//sourcing.made-in-china.com/suppliers.html" rel\x3d"nofollow"\x3eSearch Sourcing Requests\x3c/a\x3e\x3ca href\x3d"//membercenter.made-in-china.com/product.do?xcase\x3dlist" rel\x3d"nofollow"\x3eManage Products\x3c/a\x3e\x3ca href\x3d"//membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox\x26assignFlag\x3d0" rel\x3d"nofollow"\x3eManage Messages\x3c/a\x3e\x3ca href\x3d"http://service.made-in-china.com/" rel\x3d"nofollow"\x3e\x26#x4f1a;\x26#x5458;e\x26#x5bb6;\x3c/a\x3e\x3ca href\x3d"//www.made-in-china.com/audited-suppliers/for-suppliers/index-cn.html" rel\x3d"nofollow"\x3e\x26#x52a0;\x26#x5165;\x26#x8ba4;\x26#x8bc1;\x26#x4f9b;\x26#x5e94;\x26#x5546;\x3c/a\x3e'), window.initAsyncSupplier = !0)
	})
});
(function() {
	var a = "undefined" === typeof __supplierFeatureIsShowCn ? !1 : __supplierFeatureIsShowCn,
		b = "",
		e = ["For Supplier", "中国供应商"][$(".J-top-lan").length && "English" !== $(".J-top-lan").val() ? 1 : 0];
	a && (b = '\x3cli class\x3d"m-header-option J-showCn"\x3e    \x3ca rel\x3d"nofollow" href\x3d"//cn.made-in-china.com/" target\x3d"_blank"\x3e加入内贸站\x3c/a\x3e\x3c/li\x3e');
	a = "";
	window.__IS_USER_LOGED__ || (a = '\x3cli class\x3d"m-header-option-btns"\x3e\x3ca href\x3d"//login.made-in-china.com/join/?accountType\x3dsupplier" class\x3d"btn"\x3e注册供应商\x3c/a\x3e\x3ca href\x3d"//login.made-in-china.com/sign-in/?switchLan\x3d1" class\x3d"btn"\x3e登录\x3c/a\x3e\x3c/li\x3e');
	b = '\x3cdiv class\x3d"m-header-menu-item m-header-select pad-header-menu-item J-tab-trigger"\x3e    \x3cspan class\x3d"m-header-menu-title m-header-select-title"\x3e' + e + '\x3ci class\x3d"ob-icon icon-down"\x3e\x3c/i\x3e\x3c/span\x3e    \x3cul class\x3d"m-header-option-list m-header-option-list-supplier"\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"//www.made-in-china.com/supplier-membership.html" target\x3d"_blank"\x3e加入高级会员\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"//sourcing.made-in-china.com/suppliers.html" target\x3d"_blank"\x3eSearch Sourcing Requests\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"http://g.made-in-china.com/import-export-service" target\x3d"_blank"\x3eImport \x26 Export Service\x3c/a\x3e        \x3c/li\x3e        \x3cli class\x3d"m-header-option"\x3e            \x3ca rel\x3d"nofollow" href\x3d"http://service.made-in-china.com/" target\x3d"_blank"\x3e会员e家\x3c/a\x3e        \x3c/li\x3e' + b + a + "    \x3c/ul\x3e\x3c/div\x3e";
	$("#J-supplierFeature-container").replaceWith(b)
})();
$(function() {
	var a = function() {
		var a = document.createElement("div");
		return function(b, d) {
			if (b && d) {
				var e = "function" === typeof d;
				b = "length" in b && "function" !== typeof b ? b : [b];
				for (var c, g = 0; g < b.length; g++)
					if (c = b[g]) {
						var h = c;
						c = e ? d.call(c, g) : d;
						a.innerHTML = "";
						"string" === typeof c && (a.innerHTML = c);
						(c = a.firstChild.cloneNode(!1)) && 1 === c.nodeType && (h.parentNode && h.parentNode.insertBefore(c, h), c.appendChild(h))
					}
			}
		}
	}.call(this);
	document.getElementById("headRfqList") && (document.getElementById("rfqPostBox") || (a(document.getElementById("headRfqList"), "\x3cdiv class\x3d'rfq-post-box' id\x3d'rfqPostBox'\x3e\x3c/div\x3e"), document.getElementById("rfqPostBox").innerHTML = document.getElementById("rfqPostBox").innerHTML + '\x3cdiv class\x3d"rfq-post-tip" style\x3d"display:none"\x3e\x3cdiv class\x3d"rfq-post-tipcont"\x3e\x3ch3\x3eEasy Sourcing\x3c/h3\x3e\x3cp class\x3d"rfq-sub-title"\x3eMore Convenient, More Efficient\x3c/p\x3e\x3cul class\x3d"rfq-info-list"\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eOne request, multiple quotes\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eVerified suppliers matching\x3c/li\x3e\x3cli\x3e\x3ci class\x3d"micon"\x3e\x26#xe05a;\x3c/i\x3eQuotes comparison and sample request\x3c/li\x3e\x3c/ul\x3e\x3cdiv\x3e\x3ca id\x3d"headRfqList-sub" href\x3d"//purchase.made-in-china.com/trade-service/quotation-request.html?source\x3d2" target\x3d"_blank" class\x3d"btn btn-main"\x3ePost Your Request NOW\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-top"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e', a = document.createElement("link"), a.type = "text/css", a.rel = "stylesheet", a.href = "//www.micstatic.com/gb/js/business/showRfqList/rfq-post-dropmenu.css?t\x3d20190626", document.getElementsByTagName("head")[0].appendChild(a)), document.getElementById("rfqPostBox").onmouseover = function() {
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
(function(a) {
	var b = {
		mn: null,
		el: null,
		eopt: null,
		eotm: null,
		link: ""
	};
	b.link = encodeURIComponent(a.location.host + a.location.pathname);
	window.UELog = function(a) {
		if (!a || "[object Object]" !== Object.prototype.toString.call(a)) throw "send ue log error: log format error!";
		"undefined" !== typeof Probe && Probe().post($.extend({}, b, a))
	}
})(window);
$(function() {
	var a = $(".J-supplier a");
	0 < a.length && a.bind("click", function() {
		UELog({
			mn: "headerLink",
			el: $(this).html(),
			eopt: "click"
		})
	});
	a = $(".vo-nav-sub-item");
	0 < a.length && a.bind("click", function() {
		UELog({
			mn: "voSubNav",
			el: $(this).html(),
			eopt: "click"
		})
	})
});