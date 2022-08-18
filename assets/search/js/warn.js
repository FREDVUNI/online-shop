setTimeout(function() {
	if (window.top === window.self && "undefined" === typeof __browserWarn && "undefined" !== typeof detect) {
		var p = [{
				name: /^(?:(?:ms)?ie)$/i,
				version: function(a) {
					return 8 >= parseInt(a)
				}
			}, {
				name: /^firefox$/i,
				version: function(a) {
					return 35 >= parseInt(a)
				}
			}, {
				name: /^(?:chrome|chromium)$/i,
				version: function(a) {
					return 30 >= parseInt(a)
				}
			}, {
				name: /^qqbrowser$/i,
				version: function(a) {
					return 5 >= parseInt(a)
				}
			}, {
				name: /^maxthon$/i,
				version: function(a) {
					return 3 >= parseInt(a)
				}
			}],
			q = [{
				name: /^(?:(?:ms)?ie)$/i,
				version: function(a) {
					return 9 == parseInt(a) || 10 == parseInt(a)
				}
			}, {
				name: /^firefox$/i,
				version: function(a) {
					return 35 < parseInt(a) && 40 >= parseInt(a)
				}
			}, {
				name: /^maxthon$/i,
				version: function(a) {
					return 4 >= parseInt(a)
				}
			}, {
				name: /^theworld$/i,
				version: function(a) {
					return 7 >= parseInt(a)
				}
			}, {
				name: /^(?:chrome|chromium)$/i,
				version: function(a) {
					return 40 >= parseInt(a) && 30 < parseInt(a)
				}
			}, {
				name: /^(?:360se|360ee)$/i,
				version: function() {
					return !0
				}
			}, {
				name: /^qqbrowser$/i,
				version: function(a) {
					return 6 == parseInt(a)
				}
			}],
			k = function(a, b) {
				for (var c = !1, m, d = 0; d < b.length; d++)
					if (m = b[d], m.name.test(a.name) && m.version(a.version)) {
						c = !0;
						break
					}
				return c
			},
			e = /[\w\-]+\.[\w\-]+$/.exec(location.hostname);
		e = e ? "." + e[0] : "";
		var l = !1;
		try {
			window.localStorage.setItem("__TEST_WARN__", "1"), window.localStorage.removeItem("__TEST_WARN__"), l = !0
		} catch (a) {}
		l = !1;
		var r = function() {
				if (l) {
					var a = window.localStorage.getItem("__BROWSER_WARN__");
					try {
						var b = JSON.parse(a)
					} catch (c) {}
					return b
				}(a = /(?:^|;\s*)_bwn=([^;]*)/.exec(document.cookie)) ? (a = a[1].split("."), a = {
					times: a[0],
					time: parseInt(a[1], 16)
				}) : a = null;
				return a
			},
			d = function(a, b, c) {
				return '\x3cdiv class\x3d"browser-warn-browsers"\x3e\x3ca class\x3d"bw-browser" target\x3d"_blank" href\x3d"\x3c%\x3dchrome%\x3e"\x3e\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/chrome' + (c ? "-top" : "") + '.png" alt\x3d"Google Chrome"\x3e \x3cdiv class\x3d"brower-name"\x3e' + (b ? "Google Chrome" : "Chrome") + '\x3c/div\x3e\x3c/a\x3e\x3ca class\x3d"bw-browser" target\x3d"_blank" href\x3d"http://www.firefox.com/download/"\x3e\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/firefox' + (c ? "-top" : "") + '.png" alt\x3d"Firefox"\x3e \x3cdiv class\x3d"brower-name"\x3eFireFox\x3c/div\x3e\x3c/a\x3e\x3ca class\x3d"bw-browser" target\x3d"_blank" href\x3d"https://support.microsoft.com/help/17621/internet-explorer-downloads"\x3e\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/ie' + (c ? "-top" : "") + '.png" alt\x3d"Internet Explorer"\x3e \x3cdiv class\x3d"brower-name"\x3e' + (b ? "Internet Explorer" : "IE") + '\x3c/div\x3e\x3c/a\x3e\x3ca class\x3d"bw-browser" target\x3d"_blank" href\x3d"\x3c%\x3dsafari%\x3e"\x3e\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/safari' + (c ? "-top" : "") + '.png" alt\x3d"Apple Safari"\x3e \x3cdiv class\x3d"brower-name"\x3e' + (b ? "Apple Safari" : "Safari") + "\x3c/div\x3e\x3c/a\x3e" + (a ? '\x3ca id\x3d"browser-warn-close-wrap" class\x3d"browser-warn-close" href\x3d"#"\x3e\x3ci class\x3d"bw-micon"\x3e\x26#xe00c;\x3c/i\x3e\x3c/a\x3e' : "") + "\x3c/div\x3e"
			},
			u = '\x3cdiv class\x3d"warn-modal"\x3e\n\x3cdiv class\x3d"warn-mask"\x3e\x3c/div\x3e\n\x3cdiv class\x3d"warn-inner"\x3e\n\x3ca id\x3d"modal-warn-close-wrap" class\x3d"browser-warn-close" href\x3d"#"\x3e\x3ci class\x3d"bw-micon"\x3e\x26#xe00c;\x3c/i\x3e\x3c/a\x3e\n\x3cdiv class\x3d"spec-t"\x3e\n\x3cdiv class\x3d"spec-t-1"\x3ePlease Update Your Browser !\x3c/div\x3e\n\x3cdiv class\x3d"spec-t-2"\x3eThe brower you are using is outdated and does\'t support some features.Please Click on any of the below icons to update  your  browser.\x3c/div\x3e\n' + d(!0, !0) + '\x3c/div\x3e\n\x3cdiv class\x3d"spec-b"\x3e\n\x3cdiv class\x3d"title"\x3eReasons to Update\x3c/div\x3e\n\x3cdiv class\x3d"content cf"\x3e\n\x3cdiv class\x3d"cv fl"\x3e\n\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/re1.png"/\x3e\n\x3cdiv class\x3d"t"\x3eFaster browsing speed\x3c/div\x3e\n\x3cdiv class\x3d"desc"\x3eUpdated browsers are optimized for faster browsing speed\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class\x3d"cv fl"\x3e\n\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/re2.png"/\x3e\n\x3cdiv class\x3d"t"\x3eMore features\x3c/div\x3e\n\x3cdiv class\x3d"desc"\x3eIf your browser is out of date,some of our features may not be accessible\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class\x3d"cv fl"\x3e\n\x3cimg src\x3d"//www.micstatic.com/gb/detect/img/re3.png"/\x3e\n\x3cdiv class\x3d"t"\x3eIncreased security\x3c/div\x3e\n\x3cdiv class\x3d"desc"\x3eUpdated browsers offer you the best protection against viruses and other online threats\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e\n\x3c/div\x3e',
			v = '\x3cdiv id\x3d"browser-warn" dir\x3d"ltr"\x3e\x3cdiv class\x3d"browser-warn-inner"\x3e' + d(!0, !1, !0) + '\x3cdiv class\x3d"browser-warn-tip"\x3e\x3cdiv class\x3d"browser-warn-txt"\x3e\x3c%\x3dtip%\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
			w = '\x3cdiv id\x3d"browser-warn" dir\x3d"ltr"\x3e\x3cdiv class\x3d"browser-warn-inner"\x3e' + d(!0, !1, !0) + '\x3cdiv class\x3d"browser-warn-tip"\x3e\x3cdiv class\x3d"browser-warn-txt"\x3e\x3c%\x3dtip%\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
			h = [{
				1: {
					tip: '\x3cspan class\x3d"light"\x3ePlease update  your  browser!\x3c/span\x3e The browser is outdated and does\'t support some features.you can click on any of the right icons to update  your  browser. \x3ca target\x3d"_blank" href\x3d"//www.micstatic.com/gb/detect/browsers.html"\x3e Learn more \x3e\x3c/a\x3e',
					chrome: "https://www.google.com/chrome/browser/desktop/index.html?v\x3d2",
					safari: "https://support.apple.com/downloads/safari"
				},
				2: {
					tip: '\x3cspan class\x3d"light"\x3ePlease update  your  browser!\x3c/span\x3e The browser is outdated and does\'t support some features.you can click on any of the right icons to update  your  browser. \x3ca target\x3d"_blank" href\x3d"//www.micstatic.com/gb/detect/browsers.html"\x3e Learn more \x3e\x3c/a\x3e',
					chrome: "https://www.google.com/chrome/browser/desktop/index.html?v\x3d2",
					safari: "https://support.apple.com/downloads/safari"
				}
			}, {
				1: {
					tip: '\x3cspan class\x3d"light"\x3ePlease update  your  browser!\x3c/span\x3e The browser is outdated and does\'t support some features.you can click on any of the right icons to update  your  browser. \x3ca target\x3d"_blank" href\x3d"//www.micstatic.com/gb/detect/browsers.html"\x3e Learn more \x3e\x3c/a\x3e',
					chrome: "http://www.google.cn/chrome/browser/desktop/index.html?v\x3d2",
					safari: "https://support.apple.com/zh_CN/downloads/safari"
				},
				2: {
					tip: '\x3cspan class\x3d"light"\x3ePlease update  your  browser!\x3c/span\x3e The browser is outdated and does\'t support some features.you can click on any of the right icons to update  your  browser. \x3ca target\x3d"_blank" href\x3d"//www.micstatic.com/gb/detect/browsers.html"\x3e Learn more \x3e\x3c/a\x3e',
					chrome: "http://www.google.cn/chrome/browser/desktop/index.html?v\x3d2",
					safari: "https://support.apple.com/zh_CN/downloads/safari"
				}
			}],
			t = function(a, b, c, d) {
				a.parentNode.removeChild(a);
				b = b || {
					times: 0
				};
				b.times++;
				b.time = (new Date).valueOf();
				if (!c || d) a = b, l ? window.localStorage.setItem("__BROWSER_WARN__", JSON.stringify(a)) : (a = [a.times, a.time.toString(16)], b = (new Date).valueOf() + 31536E6, a = "_bwn\x3d" + a.join(".") + "; expires\x3d" + (new Date(b)).toUTCString() + "; " + (e ? "domain\x3d" + e + "; " : "") + "path\x3d/", document.cookie = a);
				d && (n(!0, !1), d && (document.body.style.overflow = "auto"))
			},
			n = function(a, d) {
				if (a) {
					var c = r() || {
						times: 0,
						time: 0
					};
					if (2 > c.times && 6048E5 <= (new Date).valueOf() - c.time) {
						var b = u.replace(/<%=(\w+)%>/g, function(a, c) {
							return h[1][c]
						});
						var e = !0
					} else if (2 > c.times && 6048E5 > (new Date).valueOf() - c.time || 2 <= c.times) b = v.replace(/<%=(\w+)%>/g, function(a, c) {
						return h[1][c]
					})
				} else d && (c = r() || {
					times: 0,
					time: 0
				}, 2 > c.times && 864E5 <= (new Date).valueOf() - c.time || 2 <= c.times && 1728E5 <= (new Date).valueOf() - c.time) && (b = w.replace(/<%=(\w+)%>/g, function(a, c) {
					return h[2][c]
				}));
				if (b) {
					var g = document.createElement("div");
					g.innerHTML = b;
					var f = g.children[0];
					document.body.insertBefore(f, document.body.children[0]);
					e && (document.body.style.overflow = "hidden");
					setTimeout(function() {
						var b = document.getElementById("browser-warn-close-wrap");
						b && ("addEventListener" in b ? b.addEventListener("click", function(b) {
							b.preventDefault();
							t(f, c, a, e)
						}, !1) : b.attachEvent("onclick", function(b) {
							b = b || window.event;
							b.returnValue = !1;
							t(f, c, a, e)
						}));
						document.body.style.zoom = 1.01;
						setTimeout(function() {
							document.body.style.zoom = 1
						}, 0)
					}, 0)
				}
			};
		d = detect.parse();
		h = /zh-cn/i.test(d.lang) ? h[1] : h[0];
		if (!/mobile|tablet/i.test(d.device.type) && !/mobile/i.test(navigator.userAgent)) {
			var g = !1,
				f = !1;
			g = k(d.browser, p);
			f = k(d.browser, q);
			d.browser.isShell && (g = g ? g : k(d.browser.core, p), f = f ? f : k(d.browser.core, q));
			n(g, f)
		}
		window.__browserWarn = n
	}
}, 250);