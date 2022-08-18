$(function() {
	if ($(".J-show-card").length) {
		var d = "",
			c, a = function(a) {
				$(".J-card-error .error").show().html(a)
			},
			b = function() {
				$(".J-card-form").valid() && $.ajax({
					url: "/sendBusinessCardEmail",
					data: $(".J-card-form").serialize(),
					type: "post",
					dataType: "json",
					success: function(b) {
						b && "0" === b.execflag ? (c && c.close(), artDialog.alert("The business card information has been sent to your mailbox successfully!", "Business Card", {
							fn: function() {},
							text: "Confirm"
						}, {
							type: "success"
						})) : a(b.errormsg || "net error")
					},
					error: function() {
						alert("net error")
					}
				})
			},
			r = function() {
				$(".J-send").click(function(a) {
					a.preventDefault();
					b()
				});
				$(".J-card-form").submit(function(a) {
					a.preventDefault();
					b()
				})
			},
			h = function() {
				r();
				$("#J-validator").length && $.ajax({
					url: "//" + window.location.host + "/captcha?action\x3dwidget\x26k\x3d6LfzAc0SAADE5CteqEn5zUBDtNHIGZ6NGtaHh0g9\x26inputattrs\x3dmaxLength%3D4%20placeholder%3D%22Enter%20the%20code%20shown%22%20Code%20autocorrect%3Doff%20autocapitalize%3Doff%20autocomplete%3Doff%20class%3Dtext",
					type: "get",
					dataType: "html",
					cache: !1,
					success: function(a) {
						$("#J-validator").html(a)
					},
					error: function() {}
				});
				$(".J-card-form").validate({
					errorWrap: !0,
					rules: {
						businessCardEmail: {
							required: !0,
							email: !0
						},
						verCode: {
							required: !0
						}
					},
					messages: {
						businessCardEmail: {
							required: "Please enter your email address first!",
							email: "Please enter a valid email."
						},
						verCode: {
							required: "Please enter verification code."
						}
					}
				})
			};
		$(".J-show-card").click(function(a) {
			a.preventDefault();
			$.ajax({
				url: "/getBusinessCardQrUrl",
				dataType: "json",
				async: !1,
				success: function(a) {
					a && a.data ? (d = a.data, c = new artDialog({
						content: '\x3cdiv class\x3d"virtual-card-wrap J-card-cnt"\x3e\x3cdiv class\x3d"card-cnt-detail J-card-detail"\x3e\x3cdiv class\x3d"J-card-step1"\x3e\x3cdiv class\x3d"detail-info"\x3eScan the QR code or leave your email address, you\'ll take my contact card on your mobile phone!\x3c/div\x3e\x3cdiv class\x3d"detail-qr"\x3e\x3cimg src\x3d"' + d + '" alt\x3d""\x3e\x3c/div\x3e\x3cdiv class\x3d"detail-form obelisk-form"\x3e\x3cform action\x3d"" class\x3d"J-card-form"\x3e\x3cdiv class\x3d"card-captcha" id\x3d"J-validator"\x3e\x3c/div\x3e\x3cinput class\x3d"input-text" type\x3d"text" name\x3d"businessCardEmail" placeholder\x3d"Email Address"\x3e\x3ca href\x3d"" class\x3d"btn btn-main detail-btn J-send"\x3eGet Card\x3c/a\x3e\x3cdiv class\x3d"feedback-block J-card-error" wrapfor\x3d"businessCardEmail"\x3e\x3clabel for\x3d"businessCardEmail"class\x3d"error" style\x3d"display:none;"\x3e\x3c/label\x3e\x3c/div\x3e\x3c/form\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
						title: "Business Card",
						init: function() {
							h()
						},
						width: 390,
						lock: !0,
						resize: !1,
						drag: !1
					})) : alert(a.errormsg || "net error")
				},
				error: function() {
					alert("net error")
				}
			})
		})
	}
});
$(function() {
	var d = function() {
		var a = $(".J-contact-fix");
		if (0 !== a.length) {
			var b = a.parents(".sr-layout-nav:first").length ? a.parents(".sr-layout-nav:first") : a.parents(".sr-layout-extra:first"),
				d = $(".J-about-nav").length ? $(".J-about-nav").height() + 120 : 40,
				h;
			var c = h = $(".J-about-nav").length ? b.offset().top - 40 : a.offset().top - 40;
			var f = function() {
					return $(".J-about-nav").length ? b.offset().top - 40 : a.offset().top - 40
				},
				e = new JFixed({
					carrier: a[0],
					isRestore: !0,
					position: {
						top: d
					},
					triggerTop: h
				}),
				g = !0;
			e.on("fixed", function() {
				a.css("width", b.width());
				g = !0
			});
			$(".J-proGroup-more").click(function() {
				setTimeout(function() {
					e.triggerTop(f())
				}, 300)
			});
			$(".J-proGroup-less").click(function() {
				e.triggerTop(c);
				setTimeout(function() {
					e.triggerTop(f())
				}, 300)
			});
			e.on("unfixed", function() {
				a.css("width", "auto");
				g && h != f() && 1024 <= window.innerWidth && (g = !1, e.triggerTop(f()))
			});
			$(window).resize(function() {
				a.css("width", b.width())
			});
			e.fixed();
			var k = 0,
				l = setInterval(function() {
					25 < k && clearInterval(l);
					50 < f() && 1024 <= window.innerWidth && e.triggerTop(f());
					k++
				}, 200)
		}
	};
	if (1024 <= window.innerWidth) d();
	else {
		var c = !0;
		$(window).resize(function() {
			1024 <= window.innerWidth && c && (setTimeout(function() {
				d()
			}, 200), c = !1)
		})
	}
});
(function() {
	function d(a) {
		this.config = $.extend({}, c, a);
		this.init()
	}
	if (!window.ProdQuickView) {
		var c = {
			target: ".J-quick-view",
			tempId: "J-quickView-temp",
			data: "",
			container: ".J-quick-view-container"
		};
		d.prototype = {
			init: function() {
				if (0 != $("#" + this.config.tempId).length)
					if ("ipad" == navigator.userAgent.toLowerCase().match(/iPad/i)) $(this.config.target).hide();
					else {
						var a = this;
						$(this.config.target).on("click", function(b) {
							b.preventDefault();
							b.stopPropagation();
							$(a.config.container).show();
							$(".J-quick-view-loading").show();
							b = $(this).closest(".J-prod-result-item").attr("data-ProdId");
							a.contactUsUrl = $(this).closest(".J-prod-result-item").find(".J-ContactUs-url").val();
							a.customUrl = $(this).closest(".J-prod-result-item").find(".J-CustomizedRequest-url").val();
							a.requestSampleUrl = $(this).closest(".J-prod-result-item").find(".J-RequestSample-url").val();
							a.getProdInfoAsync(b)
						})
					}
			},
			getProdInfoAsync: function(a) {
				var b = this;
				$.ajax({
					type: "post",
					url: "/product/slideShow",
					dataType: "json",
					cache: !1,
					data: {
						slideType: 0,
						slideProdIds: a
					},
					success: function(a) {
						0 == a.status && b.renderHTML(a.data)
					},
					error: function() {}
				})
			},
			renderHTML: function(a) {
				var b = this;
				if (0 != a.length && (a = a[0])) {
					var d = document.getElementById(this.config.tempId).innerHTML;
					var c = 0;
					a.videoPicUrlOrig && c++;
					a.picEnSearchInfoList && 0 < a.picEnSearchInfoList.length && (c += a.picEnSearchInfoList.length);
					a.prodPicEnGifs && 0 < a.prodPicEnGifs.length && c++;
					a = template(d, {
						item: a,
						picNum: c,
						contactUsUrl: b.contactUsUrl,
						customUrl: b.customUrl,
						requestSampleUrl: b.requestSampleUrl,
						entryProdId: a.entryProdId,
						showStartOrder: a.showStartOrder
					});
					$(".J-quick-view-loading").hide();
					$(b.config.container).find(".J-quick-view-content").append(a);
					$("body, html").css({
						overflow: "hidden"
					});
					$(".J-prod-quick-view-close").on("click", function() {
						$(b.config.container).find(".J-quick-view-content").empty();
						$(b.config.container).hide();
						$("body, html").css({
							overflow: "auto"
						})
					});
					if ($(".J-proSlide-content").length) {
						var n = $(".J-proSlide-left"),
							f = $(".J-proSlide-right"),
							e = $(".J-proSlide-content");
						c = $(".J-pic-dot").length;
						var g = 0,
							k = function(a, b) {
								a.css({
									WebkitTransform: "translateX(-" + 100 * b + "%) translateX(-" + 10 * b + "px)",
									transform: "translateX(-" + 100 * b + "%) translateX(-" + 10 * b + "px)"
								})
							};
						n.on("click", function() {
							if (!$(this).hasClass("disabled")) {
								f.removeClass("disabled");
								var a = --g;
								k($(".J-pic-dot", e), a);
								0 === a && $(this).addClass("disabled")
							}
						});
						f.on("click", function() {
							if (!$(this).hasClass("disabled")) {
								n.removeClass("disabled");
								var a = ++g;
								k($(".J-pic-dot", e), a);
								a === c - 7 && $(this).addClass("disabled")
							}
						})
					}
					a = $(".J-pic-box");
					var l = $(".J-pic-item", a),
						m = $(".J-pic-dot", a),
						p = function(a) {
							a = a || 0;
							m.removeClass("selected");
							l.hide();
							m.eq(a).addClass("selected");
							l.eq(a).show()
						};
					m.hover(function() {
						var a = $(this).index();
						p(a)
					});
					p();
					a = $(".J-prod-quick-view-gif");
					if (0 < a.length) {
						var q = new PicRound({
							isAutoPlay: !1,
							speed: 200,
							carrier: {
								imgbox: a.find("#picRoundBox")
							}
						});
						a.hover(function() {
							q.picRoundStart()
						}, function() {
							q.picRoundStop()
						})
					}
				}
			}
		};
		window.ProdQuickView = d
	}
})();
(function() {
	$(".J-page-option").not(".selected").click(function() {
		window.submitSearchBySize($(this).attr("cz-num"))
	});
	new SlidePre({});
	$(".J-show-menu").on("click", function() {
		$(".J-prodlist-page-nav").addClass("prodList-page-nav-show")
	});
	$(".J-prod-menu-bg").on("click", function() {
		$(".J-prodlist-page-nav").removeClass("prodList-page-nav-show")
	});
	$(".J-showSubList").on("click", function(a) {
		a.preventDefault();
		a.stopPropagation();
		a = $(this).closest("li");
		a.hasClass("subList-show") ? a.removeClass("subList-show") : a.addClass("subList-show")
	});
	window.submitSearchByView = function(a) {
		var b = $("#viewExhibition");
		b && ($("[name\x3d'viewType']").val(a), $("#pageNumber").val(1), $("#pageUrlFrom").val("1"), b.submit())
	};
	window.submitSearchBySize = function(a) {
		var b = $("#viewExhibition");
		b && (a ? ($("#pageSize").val(a), $("#pageSizeSel").val(a), $("#viewPageSize").val(a)) : $("#pageSize").val($("#pageSizeSel").val()), $("#pageNumber").val(1), $("#pageUrlFrom").val("1"), b.submit())
	};
	window.submitSearchByPage = function(a) {
		var b = $("#viewExhibition");
		b && ($("#pageNumber").val(a), $("#pageUrlFrom").val("1"), b.submit())
	};
	window.submitSearchByGroupOrCatId = function(a) {
		var b = $("#viewExhibition");
		b.attr("action", "/productList");
		b && ($("#pageNumber").val(1), $("#offerGroupInfo").val(a), b.submit())
	};
	$(".J-proListSlide-wrapper").each(function() {
		var a = null;
		$(this).parents(".J-prod-result-item").on("mousemove touchstart", function() {
			a || (a = new ProSlide({
				wrapper: $(this),
				container: $(this).find(".J-proListSlide-container"),
				slideCls: ".J-proListSlide-slide",
				paginationCls: ".J-proListSlide-pagination",
				leftCls: ".J-proListSlide-left",
				rightCls: ".J-proListSlide-right",
				autoplay: !1,
				onInit: function() {}
			}))
		})
	});
	$("#J-validator").length && $.ajax({
		url: "//" + window.location.host + "/captcha?action\x3dwidget\x26k\x3d6LfzAc0SAADE5CteqEn5zUBDtNHIGZ6NGtaHh0g9",
		type: "get",
		dataType: "html",
		cache: !1,
		success: function(a) {
			$("#J-validator").html(a)
		},
		error: function() {}
	});
	new ProdQuickView;
	$(".J-gif-slide").each(function() {
		var a = null;
		$(this).hover(function() {
			a || (a = new PicRound({
				isAutoPlay: !1,
				speed: 200,
				carrier: {
					imgbox: $(this).find("#picRoundBox")
				}
			}), $(this).find(".J-prod-gif-pic").hide(), $(this).find("#picRoundBox img").each(function() {
				var a = $(this).attr("data-src");
				$(this).attr("src", a)
			}), $(this).find("#picRoundBox img").css("top", "-9999px"), $(this).find("#picRoundBox img").show(), $(this).find("#picRoundBox img").css("top", "0px"));
			a.picRoundStart()
		}, function() {
			a.picRoundStop()
		})
	});
	var d = function() {
		$(".J-prodList-fixed-header").length && (new JFixed({
			carrier: $(".J-prodList-fixed-header")[0],
			isRestore: !0,
			position: {
				top: "40px",
				left: 0
			},
			triggerTop: $(".J-prodList-fixed-header").offset().top
		})).fixed()
	};
	if (1024 >= $(window).width()) d();
	else {
		var c = !0;
		$(window).resize(function() {
			1024 >= $(window).width() && c && (setTimeout(function() {
				d()
			}, 200), c = !1)
		})
	}
})();