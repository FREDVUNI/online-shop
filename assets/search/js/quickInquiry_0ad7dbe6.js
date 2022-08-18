document.domain = /[\w\-]+\.[\w\-]+$/.exec(window.location.hostname)[0];
var hisLoginStatus = !1,
	hisformId = "",
	senderInfo = null,
	resetFlag = !1,
	isShowSideEmail = !1,
	hmToken = "",
	captchaIns, captchaId = "",
	logError = !1,
	submitForm = "",
	submitBtn = "";
$(function() {
	$.ajax({
		type: "get",
		url: "//www.made-in-china.com/inquiryabout.do?xcase\x3dgetCookieSendEmail",
		dataType: "jsonp",
		success: function(b) {
			b && b.senderMail && (document.forms.inqueryForm && (document.forms.inqueryForm.senderMail.value = b.senderMail), document.forms.sideInqueryForm && (document.forms.sideInqueryForm.senderMail.value = b.senderMail))
		}
	});
	var a = $("#loginStatu").val();
	a && 0 != a && (hisLoginStatus = !0);
	0 < $("#captcha").length ? loadAsyncScript("//cstaticdun.126.net/load.min.js", function() {
		"undefined" !== typeof initNECaptcha && initNECaptcha({
			captchaId: $(".J-hmCaptchaId").val(),
			element: "#captcha",
			mode: "bind",
			width: "320px",
			lang: "en",
			onVerify: function(b, a) {
				b ? logError && (logError = !1, $.ajax({
					type: "post",
					url: "//www.made-in-china.com/sendInquiry/hmstat/",
					data: {
						captchaId: captchaId,
						mail: $("#" + submitForm).find('input[name\x3d"senderMail"]').val(),
						content: $("#" + submitForm).find("#inquiryContent").val()
					},
					dataType: "jsonp",
					success: function(b) {}
				})) : (hmToken = a.validate, submitFun(submitForm, submitBtn))
			}
		}, function(b) {
			captchaIns = b;
			captchaId = b.captchaId || ""
		}, function(b) {});
		initQuickInquiry()
	}) : initQuickInquiry();
	$(".J-side-contSupplier-message").on("focus", function() {
		isShowSideEmail || (isShowSideEmail = !0, $(".J-contSupplier-email-field").show("slow"))
	})
});

function loadAsyncScript(a, b) {
	var c = document.createElement("script");
	c.type = "text/javascript";
	c.readyState ? c.onreadystatechange = function() {
		"complete" !== c.readyState && "loaded" !== c.readyState || b()
	} : c.onload = function() {
		b()
	};
	c.src = a;
	document.head.appendChild(c)
}

function initQuickInquiry() {
	if ($("#inqueryForm").length) {
		var a = inquiryFormValidate("inqueryForm");
		$("#inqueryForm").bind("submit", function(b) {
			quickRequestFormLog();
			b.preventDefault();
			a.isValidate() && (captchaIns && "" === hmToken ? (submitForm = "inqueryForm", submitBtn = "inquirySend", logError = !0, captchaIns.verify()) : submitFun("inqueryForm", "inquirySend"))
		})
	}
	if ($("#sideInqueryForm").length) {
		var b = inquiryFormValidate("sideInqueryForm");
		$("#sideInqueryForm").bind("submit", function(a) {
			quickRequestFormLog();
			a.preventDefault();
			if (b.isValidate()) {
				captchaIns && "" === hmToken ? (submitForm = "sideInqueryForm", submitBtn = "sideInquirySend", logError = !0, captchaIns.verify()) : submitFun("sideInqueryForm", "sideInquirySend");
				var c = new Image;
				c.onload = c.onerror = function() {
					c = c.onload = c.onerror = null
				};
				c.src = "//stat.made-in-china.com/popup/common.html?t\x3d9"
			}
		})
	}
}

function submitFun(a, b) {
	$("#" + b).addClass("btn-disabled").attr("disabled", "disabled");
	if (senderInfo && !hisLoginStatus && hisformId === a) {
		senderInfo.show();
		var c = $(senderInfo.DOM.content[0]).find("iframe")[0].contentWindow;
		initDialog(hisLoginStatus, c, !1, a, b)
	} else senderInfoDialog(a, b, hisLoginStatus);
	hisformId = a;
	senderInfo && senderInfo.lock();
	senderInfo && senderInfo.position("50%", "33%")
}

function quickRequestFormLog() {
	var a = $("#showRoomUrl").val().replace(".html", "_1.html") + "\x26qkSendStep\x3dsecond";
	$.ajax({
		type: "get",
		url: a,
		dataType: "jsonp",
		success: function(b) {}
	})
}

function inquiryFormValidate(a) {
	function b(b, a) {
		$(a).parent().find(".feedback-block").remove();
		$(a).parent().append(l.replace("{Message}", b))
	}

	function c() {
		var a = !0,
			c = $(g).find("[name\x3dsenderMail]")[0];
		if (!/\S+/.test(c.value)) return b("Please enter your email address.", c), !1;
		var d = c.value;
		if (/^[-\.\w]+@[-\.a-zA-Z0-9]+\.[-\.a-zA-Z0-9]+$/.test(d)) {
			var h = d.split("@")[0];
			d = d.split("@")[1];
			if (!/^.*[A-Za-z0-9]+.*$/.test(h) || /(^\..*)|(.*\.$)/.test(h) || /(\.){2,}/.test(h)) d = !1;
			else {
				var e = d.lastIndexOf(".");
				h = d.substr(0, e);
				d = d.substr(e + 1);
				d = /(^[\.-].*)|(.*[\.-]$)/.test(h) || /(\.){2,}/.test(h) || !/^[a-zA-Z]+$/.test(d) ? !1 : !0
			}
		} else d = !1;
		d || (b("Please enter a valid email address.", c), a = !1);
		return a
	}

	function f() {
		var a = !0;
		/\S+/.test(e.value) || (b("Please enter the content for your inquiry.", e), a = !1);
		if (20 > e.value.length || 4E3 < e.value.length) b("Your inquiry content must be between 20 to 4000 characters.", e), a = !1;
		return a
	}
	var g = document.forms[a],
		e = g.content,
		l = window._GLOBAL_ERROR_MESSAGE_TMPL_ || '\x3cdiv class\x3d"feedback-block"\x3e\x3cdiv class\x3d"error"\x3e{Message}\x3c/div\x3e\x3c/div\x3e';
	$(g).on("blur", "[name\x3dsenderMail]", function(a) {
		c() ? $(a.target).parent().find(".feedback-block").remove() : b()
	});
	$(e).bind("blur", function(a) {
		f() ? $(a.target).parent().find(".feedback-block").remove() : b()
	});
	return {
		isValidate: function() {
			var a = c(),
				b = f();
			return a && b
		}
	}
}

function senderInfoDialog(a, b, c, f) {
	var g = "display:none";
	$.browser.msie && 7 >= parseInt($.browser.version) && (g = "visibility:hidden;");
	senderInfo = new art.dialog({
		fixed: !0,
		show: f ? !1 : !0,
		title: c ? "" : "Enter your contact to build trust with supplier(s)",
		duration: 0,
		content: '\x3cdiv class\x3d"aui_loading" style\x3d"margin:60px auto; width:540px; height:55px; background:url(https://img.made-in-china.com/img/athena/loading-big.gif) no-repeat center center;"\x3e\x3c/div\x3e\x3ciframe src\x3d"//www.made-in-china.com/sendInquiry/showQuickForm/" frameborder\x3d"0" style\x3d"max-height:550px;overflow-x: hidden;' + g + '"\x3e\x3c/iframe\x3e',
		init: function() {
			var e = this;
			resetFlag = !1;
			$(this.DOM.content[0]).find("iframe").bind("load", function() {
				initDialog(c, $(e.DOM.content[0]).find("iframe")[0].contentWindow, f, a, b)
			})
		},
		close: function() {
			asyncIsLogin(function(c) {
				c && c !== hisLoginStatus ? window.location.reload() : ($("#" + b).removeClass("btn-disabled").removeAttr("disabled"), resetFlag && ($("#" + a).find("#inquiryContent").val(""), senderInfo.close(), senderInfo = null))
			});
			if (!resetFlag) return senderInfo.hide(), !1
		}
	})
}

function initDialog(a, b, c, f, g) {
	var e = document.forms[f].content.value,
		l = document.forms[f].senderMail.value;
	b.loginClickHandle = function() {
		login && login("\x26loginUserName\x3d" + l, function(a, b, c) {
			senderInfoDialog(a, b, c);
			senderInfo && senderInfo.lock();
			senderInfo && senderInfo.position("50%", "33%")
		});
		senderInfo.close();
		senderInfo = null;
		$("#" + g).removeClass("btn-disabled").removeAttr("disabled")
	};
	var m = $("#showRoomUrl").val().replace(".html", "_1.html") + "\x26qkSendStep\x3dsecond";
	"sideInqueryForm" === f && (m += "\x26sc\x3d1");
	b.setForm && b.setForm({
		senderMail: l,
		content: e,
		requestUrl: m,
		hmToken: hmToken
	});
	b.setForm || (resetFlag = !0);
	if (senderInfo && !a || !b.setForm) $(senderInfo.DOM.content[0]).find("iframe").css("visibility", "visible"), $(senderInfo.DOM.content[0]).find("iframe").show(), $(senderInfo.DOM.content[0]).find(".aui_loading").remove(), resizeForm();
	if (b) {
		var k = $(senderInfo.DOM.content[0]);
		b.handleFormInvalid = function() {
			var a = k.find(".aui_loading:visible"),
				b = k.find("iframe");
			a = 0 < a.length;
			b = 0 >= b.length || 0 < b.filter(":hidden").length || "hidden" === b.css("visibility");
			if (a || b) b = k.find(".aui_loading:visible"), a = k.find("iframe"), b.length && b.remove(), a.length && (a.css("visibility", "visible"), a.show())
		}
	}
	a && !c && b && b.autoSubmit && b.autoSubmit(hmToken);
	b.result && senderInfo.title("")
}

function _resizeForm() {
	if (senderInfo) {
		var a = $(senderInfo.DOM.content[0]).find("iframe")[0];
		$(a).css({
			width: a.contentWindow.document.body.clientWidth,
			height: a.contentWindow.document.body.clientHeight + 20
		});
		senderInfo._reset()
	}
	window.priceDialog && (a = $(priceDialog.DOM.content[0]).find("iframe")[0], $(a).css({
		height: a.contentWindow.document.body.clientHeight + 20
	}), window.priceDialog._reset());
	window.senderQAInfo && (a = $(senderQAInfo.DOM.content[0]).find("iframe")[0], $(a).css({
		width: a.contentWindow.document.body.clientWidth,
		height: a.contentWindow.document.body.clientHeight + 20
	}), senderQAInfo._reset())
}
var resizeForm = function() {
	setTimeout(_resizeForm, 25)
};