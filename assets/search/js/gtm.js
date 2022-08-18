// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
	w[g] = w[g] || {};
	w[g].e = function(s) {
		return eval(s);
	};
})(window, 'google_tag_manager');
(function() {
	var data = {
		"resource": {
			"version": "56",
			"macros": [{
				"function": "__e"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "products.0.productSku"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "products.0.productBrand"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "products.0.productType"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "orderid"
			}, {
				"function": "__gas",
				"vtp_cookieDomain": "auto",
				"vtp_doubleClick": false,
				"vtp_setTrackerName": false,
				"vtp_useDebugVersion": false,
				"vtp_fieldsToSet": ["list", ["map", "fieldName", "SKU", "value", ["macro", 1]],
					["map", "fieldName", "Brand", "value", ["macro", 2]],
					["map", "fieldName", "Type", "value", ["macro", 3]],
					["map", "fieldName", "Orderid", "value", ["macro", 4]]
				],
				"vtp_useHashAutoLink": false,
				"vtp_decorateFormsAutoLink": false,
				"vtp_enableLinkId": false,
				"vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 1]],
					["map", "index", "3", "dimension", ["macro", 2]],
					["map", "index", "4", "dimension", ["macro", 3]],
					["map", "index", "5", "dimension", ["macro", 4]]
				],
				"vtp_enableEcommerce": false,
				"vtp_trackingId": "UA-37452587-1",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false
			}, {
				"function": "__v",
				"vtp_name": "gtm.elementClasses",
				"vtp_dataLayerVersion": 1
			}, {
				"function": "__v",
				"vtp_name": "gtm.elementUrl",
				"vtp_dataLayerVersion": 1
			}, {
				"function": "__u",
				"vtp_component": "PATH",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__u",
				"vtp_component": "URL",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__d",
				"vtp_elementId": "productId",
				"vtp_attributeName": "value",
				"vtp_selectorType": "ID"
			}, {
				"function": "__u",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__aev",
				"vtp_varType": "TEXT"
			}, {
				"function": "__u",
				"vtp_component": "HOST",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__u",
				"vtp_component": "URL",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__d",
				"vtp_elementSelector": "body \u003E div.sr-container.J-layout \u003E div \u003E div \u003E div.sr-layout-main \u003E div:nth-child(1) \u003E div \u003E div.sr-proMainInfo-baseInfo \u003E div.sr-proMainInfo-baseInfo-property \u003E span \u003E meta:nth-child(2)",
				"vtp_attributeName": "content",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__d",
				"vtp_elementId": "productId",
				"vtp_attributeName": "value",
				"vtp_selectorType": "ID"
			}, {
				"function": "__d",
				"vtp_elementSelector": "#J-main \u003E div \u003E div.product \u003E div.pro-info \u003E div.pro-box \u003E div.pro-price \u003E div.price-box \u003E div.price-item.cf \u003E span.price \u003E b",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__d",
				"vtp_elementId": "prodId",
				"vtp_attributeName": "value",
				"vtp_selectorType": "ID"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "revenue"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "products"
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 20], 8, 16], ",c=[],d;var a=0;for(d=b.length;a\u003Cd;a++)c.push(b[a].productSku);return c})();"]
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 20], 8, 16], ",c=[],d;var a=0;for(d=b.length;a\u003Cd;a++)c.push(b[a].productPrice);return c})();"]
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 20], 8, 16], ",c=[],d;var a=0;for(d=b.length;a\u003Cd;a++)c.push(b[a].productQuantity);return c})();"]
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "discount"
			}, {
				"function": "__v",
				"vtp_dataLayerVersion": 2,
				"vtp_setDefaultValue": false,
				"vtp_name": "coupon"
			}, {
				"function": "__k",
				"vtp_decodeCookie": false,
				"vtp_name": "cjevent"
			}, {
				"function": "__d",
				"vtp_elementId": "inquiryIds",
				"vtp_attributeName": "value",
				"vtp_selectorType": "ID"
			}, {
				"function": "__k",
				"vtp_decodeCookie": false,
				"vtp_name": "shareasaleSSCID"
			}, {
				"function": "__d",
				"vtp_elementSelector": "#J-main \u003E div.page.grid.J-page-wrap \u003E div.products-wrap.cf.J-items-wrap.wptr \u003E div.list-item.cf.J-item-wrap.J-wave.wave-classic.J-pagetag-1.waves-effect \u003E div.products-box.J-product.cf \u003E div \u003E div.pro-price \u003E span.pro-price-fob",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__d",
				"vtp_elementSelector": "#J-main \u003E div.page.grid.J-page-wrap \u003E div.products-wrap.cf.J-items-wrap.wptr \u003E div.list-item.cf.J-item-wrap.J-wave.wave-classic.J-pagetag-1.waves-effect \u003E div.products-box.J-product.cf \u003E div \u003E a",
				"vtp_attributeName": "href",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 30], 8, 16], ";return a=a.substring(22,31)})();"]
			}, {
				"function": "__d",
				"vtp_elementSelector": "body \u003E div.auto-size.J-auto-size \u003E div.page.cf \u003E div.page-wrap.search-list.cf \u003E div.search-list-container.main-wrap \u003E div \u003E div.search-list \u003E div.prod-list \u003E div:nth-child(1) \u003E div \u003E div.prod-content \u003E div \u003E div.product-property \u003E span:nth-child(1)",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__d",
				"vtp_elementSelector": "body \u003E div.auto-size.J-auto-size \u003E div.page.cf \u003E div.page-wrap.search-list.cf \u003E div.search-list-container.main-wrap \u003E div \u003E div.search-list \u003E div.prod-list \u003E div:nth-child(1) \u003E div \u003E div.prod-content \u003E div \u003E h2 \u003E a",
				"vtp_attributeName": "ads-data",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 33], 8, 16], ";return a=a.substring(24,36)})();"]
			}, {
				"function": "__d",
				"vtp_elementSelector": "body \u003E div.auto-size \u003E div.page.cf \u003E div \u003E div.search-list-container.main-wrap \u003E div \u003E div \u003E div.prod-list.cf \u003E div:nth-child(1) \u003E div \u003E div \u003E div.detail \u003E div.product-property \u003E div:nth-child(1) \u003E span \u003E strong.price",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__d",
				"vtp_elementSelector": "body \u003E div.auto-size \u003E div.page.cf \u003E div \u003E div.search-list-container.main-wrap \u003E div \u003E div \u003E div.prod-list.cf \u003E div:nth-child(1) \u003E div \u003E div \u003E div.product-btn \u003E a",
				"vtp_attributeName": "href",
				"vtp_selectorType": "CSS"
			}, {
				"function": "__jsm",
				"vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 36], 8, 16], ";return a=a.substring(41,53)})();"]
			}, {
				"function": "__u",
				"vtp_component": "PATH",
				"vtp_enableMultiQueryKeys": false,
				"vtp_enableIgnoreEmptyQueryParam": false
			}, {
				"function": "__f",
				"vtp_component": "URL"
			}, {
				"function": "__e"
			}, {
				"function": "__v",
				"vtp_name": "gtm.elementClasses",
				"vtp_dataLayerVersion": 1
			}, {
				"function": "__v",
				"vtp_name": "gtm.elementId",
				"vtp_dataLayerVersion": 1
			}, {
				"function": "__v",
				"vtp_name": "gtm.elementUrl",
				"vtp_dataLayerVersion": 1
			}],
			"tags": [{
				"function": "__ua",
				"once_per_load": true,
				"vtp_overrideGaSettings": false,
				"vtp_trackType": "TRACK_PAGEVIEW",
				"vtp_gaSettings": ["macro", 5],
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"tag_id": 1
			}, {
				"function": "__ua",
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "IOS 下载",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 3
			}, {
				"function": "__ua",
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "Android下载",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 4
			}, {
				"function": "__baut",
				"once_per_event": true,
				"vtp_tagId": "13001299",
				"vtp_uetqName": "uetq",
				"vtp_eventType": "PAGE_LOAD",
				"tag_id": 6
			}, {
				"function": "__paused",
				"vtp_originalTagType": "bzi",
				"tag_id": 9
			}, {
				"function": "__ua",
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "主站点击Send Inquiry按钮",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 11
			}, {
				"function": "__ua",
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "触屏点击Send Inquiry按钮",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 12
			}, {
				"function": "__ua",
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "多语点击Send Inquiry按钮",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 13
			}, {
				"function": "__paused",
				"vtp_originalTagType": "html",
				"tag_id": 14
			}, {
				"function": "__sp",
				"once_per_event": true,
				"vtp_enableDynamicRemarketing": false,
				"vtp_customParams": ["list", ["map", "key", "ecomm_prodid", "value", ["macro", 10]]],
				"vtp_conversionId": "731984560",
				"vtp_customParamsFormat": "USER_SPECIFIED",
				"vtp_conversionLabel": "v7ktCOKJmaMBELDlhN0C",
				"vtp_enableOgtRmktParams": true,
				"vtp_enableUserId": false,
				"vtp_url": ["macro", 11],
				"vtp_enableRdpCheckbox": true,
				"tag_id": 20
			}, {
				"function": "__ua",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "Start Order",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 81
			}, {
				"function": "__ua",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "Submit Order",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 83
			}, {
				"function": "__ua",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "On-site authorization",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 100
			}, {
				"function": "__ua",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_nonInteraction": false,
				"vtp_overrideGaSettings": false,
				"vtp_eventCategory": "Button",
				"vtp_trackType": "TRACK_EVENT",
				"vtp_gaSettings": ["macro", 5],
				"vtp_eventAction": "Click",
				"vtp_eventLabel": "Request BusinessCard",
				"vtp_enableRecaptchaOption": false,
				"vtp_enableTransportUrl": false,
				"vtp_enableUaRlsa": false,
				"vtp_enableUseInternalVersion": false,
				"vtp_enableFirebaseCampaignData": true,
				"vtp_trackTypeIsEvent": true,
				"tag_id": 102
			}, {
				"function": "__cl",
				"tag_id": 103
			}, {
				"function": "__cl",
				"tag_id": 104
			}, {
				"function": "__cl",
				"tag_id": 105
			}, {
				"function": "__cl",
				"tag_id": 106
			}, {
				"function": "__cl",
				"tag_id": 107
			}, {
				"function": "__cl",
				"tag_id": 108
			}, {
				"function": "__cl",
				"tag_id": 109
			}, {
				"function": "__cl",
				"tag_id": 110
			}, {
				"function": "__cl",
				"tag_id": 111
			}, {
				"function": "__cl",
				"tag_id": 112
			}, {
				"function": "__html",
				"once_per_event": true,
				"vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 8
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 15], 8, 16], ",currency:\"USD\",content_type:\"product\",content_ids:", ["escape", ["macro", 16], 8, 16], "});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 15
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 17], 8, 16], ",currency:\"USD\",content_type:\"product\",content_ids:", ["escape", ["macro", 18], 8, 16], "});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 16
			}, {
				"function": "__html",
				"once_per_event": true,
				"vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 18
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" name=\"cj_conversion\" id=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar prod_q=", ["escape", ["macro", 21], 8, 16], ",price_q=", ["escape", ["macro", 22], 8, 16], ",quantity_q=", ["escape", ["macro", 23], 8, 16], ",price=price_q.toString(),prod=prod_q.toString(),quantity=quantity_q.toString(),trueDiscount=", ["escape", ["macro", 24], 8, 16], ",trueCoupon=", ["escape", ["macro", 25], 8, 16], ",tag=\"34246\",type=\"416089\",cid=\"1556919\";void 0==trueDiscount\u0026\u0026(trueDiscount=\"\");void 0==trueCoupon\u0026\u0026(trueCoupon=\"\");\nvar src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d\"+tag+\"\\x26CID\\x3d\"+cid+\"\\x26AMOUNT\\x3d\"+", ["escape", ["macro", 19], 8, 16], "+\"\\x26OID\\x3d\"+", ["escape", ["macro", 4], 8, 16], "+\"\\x26TYPE\\x3d\"+type+\"\\x26CURRENCY\\x3dUSD\\x26COUPON\\x3d0\\x26DISCOUNT\\x3d\"+trueDiscount+\"\\x26CJEVENT\\x3d\"+", ["escape", ["macro", 26], 8, 16], ";document.getElementById(\"cj_conversion\").src=src;\u003C\/script\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 19
			}, {
				"function": "__html",
				"once_per_event": true,
				"vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar img=new Image;img.src=\"https:\/\/www.shareasale.com\/sale.cfm?tracking\\x3d\"+", ["escape", ["macro", 27], 8, 16], "+\"\\x26amount\\x3d0.00\\x26merchantID\\x3d90336\\x26transtype\\x3dlead\\x26sscidmode\\x3d6\\x26sscid\\x3d\"+", ["escape", ["macro", 28], 8, 16], ";\u003C\/script\u003E\n\u003Cscript defer async type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/shareasale-analytics.com\/j.js\"\u003E\u003C\/script\u003E"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 21
			}, {
				"function": "__html",
				"once_per_event": true,
				"vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar shareasaleSSCID=shareasaleGetParameterByName(\"sscid\");function shareasaleSetCookie(a,b,c,d,e){if(a\u0026\u0026b){var f;d=d?\"; path\\x3d\"+d:\"\";e=e?\"; domain\\x3d\"+e:\"\";var g=\"\";c\u0026\u0026((f=new Date).setTime(f.getTime()+c),g=\"; expires\\x3d\"+f.toUTCString());document.cookie=a+\"\\x3d\"+b+g+d+e}}\nfunction shareasaleGetParameterByName(a,b){b||(b=window.location.href);a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var c=(new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\")).exec(b);return c?c[2]?decodeURIComponent(c[2].replace(\/\\+\/g,\" \")):\"\":null}shareasaleSSCID\u0026\u0026shareasaleSetCookie(\"shareasaleSSCID\",shareasaleSSCID,94670778E4,\"\/\",\".made-in-china.com\");\u003C\/script\u003E",
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 22
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" name=\"cj_conversion\" id=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar prod_q=", ["escape", ["macro", 21], 8, 16], ",price_q=", ["escape", ["macro", 22], 8, 16], ",quantity_q=", ["escape", ["macro", 23], 8, 16], ",price=price_q.toString(),prod=prod_q.toString(),quantity=quantity_q.toString(),trueDiscount=", ["escape", ["macro", 24], 8, 16], ",trueCoupon=", ["escape", ["macro", 25], 8, 16], ",tag=\"34689\",type=\"416909\",cid=\"1556919\";void 0==trueDiscount\u0026\u0026(trueDiscount=\"\");void 0==trueCoupon\u0026\u0026(trueCoupon=\"\");\nvar src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d\"+tag+\"\\x26CID\\x3d\"+cid+\"\\x26AMOUNT\\x3d\"+", ["escape", ["macro", 19], 8, 16], "+\"\\x26OID\\x3d\"+", ["escape", ["macro", 4], 8, 16], "+\"\\x26TYPE\\x3d\"+type+\"\\x26CURRENCY\\x3dUSD\\x26COUPON\\x3d0\\x26DISCOUNT\\x3d\"+trueDiscount+\"\\x26CJEVENT\\x3d\"+", ["escape", ["macro", 26], 8, 16], ";document.getElementById(\"cj_conversion\").src=src;\u003C\/script\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 23
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 29], 8, 16], ",currency:\"USD\",content_type:\"product\",content_ids:", ["escape", ["macro", 31], 8, 16], "});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 89
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 32], 8, 16], ",currency:\"USD\",content_type:\"product\",content_ids:", ["escape", ["macro", 34], 8, 16], "});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 93
			}, {
				"function": "__html",
				"metadata": ["map"],
				"once_per_event": true,
				"vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2037053586588160\");fbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 35], 8, 16], ",currency:\"USD\",content_type:\"product\",content_ids:", ["escape", ["macro", 37], 8, 16], "});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2037053586588160\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n"],
				"vtp_supportDocumentWrite": false,
				"vtp_enableIframeMode": false,
				"vtp_enableEditJsMacroBehavior": false,
				"tag_id": 97
			}],
			"predicates": [{
				"function": "_eq",
				"arg0": ["macro", 0],
				"arg1": "gtm.js"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn-item ios"
			}, {
				"function": "_cn",
				"arg0": ["macro", 7],
				"arg1": "\/mobile\/forbuyerapp-iphone"
			}, {
				"function": "_eq",
				"arg0": ["macro", 0],
				"arg1": "gtm.click"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn-item google"
			}, {
				"function": "_cn",
				"arg0": ["macro", 7],
				"arg1": "\/mobile\/forbuyerapp-android"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn btn-main btn-large"
			}, {
				"function": "_cn",
				"arg0": ["macro", 8],
				"arg1": "\/sendInquiry\/"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn btn-main J-wave waves-effect"
			}, {
				"function": "_cn",
				"arg0": ["macro", 8],
				"arg1": "\/inquiry\/"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn btn-main"
			}, {
				"function": "_re",
				"arg0": ["macro", 9],
				"arg1": ".*"
			}, {
				"function": "_eq",
				"arg0": ["macro", 12],
				"arg1": "Start Order"
			}, {
				"function": "_eq",
				"arg0": ["macro", 12],
				"arg1": "Submit Order"
			}, {
				"function": "_eq",
				"arg0": ["macro", 12],
				"arg1": "On-site authorization"
			}, {
				"function": "_eq",
				"arg0": ["macro", 13],
				"arg1": "expo.made-in-china.com"
			}, {
				"function": "_eq",
				"arg0": ["macro", 6],
				"arg1": "btn btn-main btn-submit"
			}, {
				"function": "_cn",
				"arg0": ["macro", 14],
				"arg1": "\/product\/"
			}, {
				"function": "_cn",
				"arg0": ["macro", 13],
				"arg1": "en.made-in-china.com"
			}, {
				"function": "_sw",
				"arg0": ["macro", 13],
				"arg1": "m.made-in-china.com"
			}, {
				"function": "_re",
				"arg0": ["macro", 6],
				"arg1": "btn btn-main (btn-large|J-wave)"
			}, {
				"function": "_re",
				"arg0": ["macro", 13],
				"arg1": "(www|m).made-in-china.com"
			}, {
				"function": "_re",
				"arg0": ["macro", 14],
				"arg1": "\/sendInquiry\/success"
			}, {
				"function": "_re",
				"arg0": ["macro", 13],
				"arg1": "www.made-in-china.com"
			}, {
				"function": "_eq",
				"arg0": ["macro", 19],
				"arg1": "0"
			}, {
				"function": "_cn",
				"arg0": ["macro", 14],
				"arg1": "\/sendInquiry\/success"
			}, {
				"function": "_eq",
				"arg0": ["macro", 13],
				"arg1": "www.made-in-china.com"
			}, {
				"function": "_re",
				"arg0": ["macro", 14],
				"arg1": "\/inquiry\/success_.*(page=p_detail|from=search)"
			}, {
				"function": "_re",
				"arg0": ["macro", 13],
				"arg1": "m.made-in-china.com"
			}, {
				"function": "_cn",
				"arg0": ["macro", 14],
				"arg1": "\/hot-china-products\/"
			}, {
				"function": "_cn",
				"arg0": ["macro", 14],
				"arg1": "\/products-search\/hot-china-products\/"
			}, {
				"function": "_cn",
				"arg0": ["macro", 13],
				"arg1": "www.made-in-china.com"
			}, {
				"function": "_cn",
				"arg0": ["macro", 14],
				"arg1": "\/cs\/"
			}],
			"rules": [
				[
					["if", 0],
					["add", 0, 3, 4, 8, 24, 30, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
				],
				[
					["if", 1, 2, 3],
					["add", 1]
				],
				[
					["if", 3, 4, 5],
					["add", 2]
				],
				[
					["if", 3, 6, 7],
					["add", 5]
				],
				[
					["if", 3, 8, 9],
					["add", 6]
				],
				[
					["if", 3, 7, 10],
					["add", 7]
				],
				[
					["if", 0, 11],
					["add", 9]
				],
				[
					["if", 3, 12],
					["add", 10]
				],
				[
					["if", 3, 13],
					["add", 11]
				],
				[
					["if", 3, 14, 15],
					["add", 12]
				],
				[
					["if", 3, 15, 16],
					["add", 13]
				],
				[
					["if", 0, 17, 18],
					["add", 25]
				],
				[
					["if", 0, 17, 19],
					["add", 26]
				],
				[
					["if", 3, 20, 21],
					["add", 27]
				],
				[
					["if", 0, 22, 23, 24],
					["add", 28]
				],
				[
					["if", 0, 25, 26],
					["add", 29]
				],
				[
					["if", 0, 24, 27, 28],
					["add", 31]
				],
				[
					["if", 0, 19, 29],
					["add", 32]
				],
				[
					["if", 0, 30, 31],
					["add", 33]
				],
				[
					["if", 0, 31, 32],
					["add", 34]
				]
			]
		},
		"runtime": []
	};
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var ca, da = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		fa;
	if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
	else {
		var ha;
		a: {
			var ia = {
					Hf: !0
				},
				ja = {};
			try {
				ja.__proto__ = ia;
				ha = ja.Hf;
				break a
			} catch (a) {}
			ha = !1
		}
		fa = ha ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var ka = fa,
		la = this || self,
		ma = /^[\w+/_-]+[=]{0,2}$/,
		na = null;
	var pa = function() {},
		qa = function(a) {
			return "function" == typeof a
		},
		g = function(a) {
			return "string" == typeof a
		},
		ra = function(a) {
			return "number" == typeof a && !isNaN(a)
		},
		sa = function(a) {
			return "[object Array]" == Object.prototype.toString.call(Object(a))
		},
		n = function(a, b) {
			if (Array.prototype.indexOf) {
				var c = a.indexOf(b);
				return "number" == typeof c ? c : -1
			}
			for (var d = 0; d < a.length; d++)
				if (a[d] === b) return d;
			return -1
		},
		wa = function(a, b) {
			if (a && sa(a))
				for (var c = 0; c < a.length; c++)
					if (a[c] && b(a[c])) return a[c]
		},
		xa = function(a, b) {
			if (!ra(a) || !ra(b) || a > b) a = 0, b = 2147483647;
			return Math.floor(Math.random() * (b - a + 1) + a)
		},
		za = function(a, b) {
			for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
			for (var e = 0; e < b.length; e++)
				if (c.get(b[e])) return !0;
			return !1
		},
		Aa = function(a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
		},
		Ba = function(a) {
			return Math.round(Number(a)) || 0
		},
		Ca = function(a) {
			return "false" == String(a).toLowerCase() ? !1 : !!a
		},
		Da = function(a) {
			var b = [];
			if (sa(a))
				for (var c = 0; c < a.length; c++) b.push(String(a[c]));
			return b
		},
		Fa = function(a) {
			return a ? a.replace(/^\s+|\s+$/g, "") : ""
		},
		Ga = function() {
			return (new Date).getTime()
		},
		ya = function() {
			this.prefix = "gtm.";
			this.values = {}
		};
	ya.prototype.set = function(a, b) {
		this.values[this.prefix + a] = b
	};
	ya.prototype.get = function(a) {
		return this.values[this.prefix + a]
	};
	var Ha = function(a, b, c) {
			return a && a.hasOwnProperty(b) ? a[b] : c
		},
		Ia = function(a) {
			var b = !1;
			return function() {
				if (!b) try {
					a()
				} catch (c) {}
				b = !0
			}
		},
		Ja = function(a, b) {
			for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
		},
		Ka = function(a) {
			for (var b in a)
				if (a.hasOwnProperty(b)) return !0;
			return !1
		},
		La = function(a, b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
			return c
		},
		Ma = function(a, b) {
			for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
			d[e[e.length - 1]] = b;
			return c
		},
		Na = function(a) {
			var b = [];
			Aa(a, function(c, d) {
				10 > c.length && d && b.push(c)
			});
			return b.join(",")
		};
	/*
	 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
	var Oa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
		Pa = function(a) {
			if (null == a) return String(a);
			var b = Oa.exec(Object.prototype.toString.call(Object(a)));
			return b ? b[1].toLowerCase() : "object"
		},
		Qa = function(a, b) {
			return Object.prototype.hasOwnProperty.call(Object(a), b)
		},
		Ra = function(a) {
			if (!a || "object" != Pa(a) || a.nodeType || a == a.window) return !1;
			try {
				if (a.constructor && !Qa(a, "constructor") && !Qa(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			for (var b in a);
			return void 0 === b || Qa(a, b)
		},
		C = function(a, b) {
			var c = b || ("array" == Pa(a) ? [] : {}),
				d;
			for (d in a)
				if (Qa(a, d)) {
					var e = a[d];
					"array" == Pa(e) ? ("array" != Pa(c[d]) && (c[d] = []), c[d] = C(e, c[d])) : Ra(e) ? (Ra(c[d]) || (c[d] = {}), c[d] = C(e, c[d])) : c[d] = e
				}
			return c
		};
	var Sa = [],
		Ta = {
			"\x00": "&#0;",
			'"': "&quot;",
			"&": "&amp;",
			"'": "&#39;",
			"<": "&lt;",
			">": "&gt;",
			"\t": "&#9;",
			"\n": "&#10;",
			"\x0B": "&#11;",
			"\f": "&#12;",
			"\r": "&#13;",
			" ": "&#32;",
			"-": "&#45;",
			"/": "&#47;",
			"=": "&#61;",
			"`": "&#96;",
			"\u0085": "&#133;",
			"\u00a0": "&#160;",
			"\u2028": "&#8232;",
			"\u2029": "&#8233;"
		},
		Ua = function(a) {
			return Ta[a]
		},
		Va = /[\x00\x22\x26\x27\x3c\x3e]/g;
	var Za = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
		$a = {
			"\x00": "\\x00",
			"\b": "\\x08",
			"\t": "\\t",
			"\n": "\\n",
			"\x0B": "\\x0b",
			"\f": "\\f",
			"\r": "\\r",
			'"': "\\x22",
			"&": "\\x26",
			"'": "\\x27",
			"/": "\\/",
			"<": "\\x3c",
			"=": "\\x3d",
			">": "\\x3e",
			"\\": "\\\\",
			"\u0085": "\\x85",
			"\u2028": "\\u2028",
			"\u2029": "\\u2029",
			$: "\\x24",
			"(": "\\x28",
			")": "\\x29",
			"*": "\\x2a",
			"+": "\\x2b",
			",": "\\x2c",
			"-": "\\x2d",
			".": "\\x2e",
			":": "\\x3a",
			"?": "\\x3f",
			"[": "\\x5b",
			"]": "\\x5d",
			"^": "\\x5e",
			"{": "\\x7b",
			"|": "\\x7c",
			"}": "\\x7d"
		},
		db = function(a) {
			return $a[a]
		};
	Sa[8] = function(a) {
		if (null == a) return " null ";
		switch (typeof a) {
			case "boolean":
			case "number":
				return " " + a + " ";
			default:
				return "'" + String(String(a)).replace(Za, db) + "'"
		}
	};
	var lb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
		mb = {
			"\x00": "%00",
			"\u0001": "%01",
			"\u0002": "%02",
			"\u0003": "%03",
			"\u0004": "%04",
			"\u0005": "%05",
			"\u0006": "%06",
			"\u0007": "%07",
			"\b": "%08",
			"\t": "%09",
			"\n": "%0A",
			"\x0B": "%0B",
			"\f": "%0C",
			"\r": "%0D",
			"\u000e": "%0E",
			"\u000f": "%0F",
			"\u0010": "%10",
			"\u0011": "%11",
			"\u0012": "%12",
			"\u0013": "%13",
			"\u0014": "%14",
			"\u0015": "%15",
			"\u0016": "%16",
			"\u0017": "%17",
			"\u0018": "%18",
			"\u0019": "%19",
			"\u001a": "%1A",
			"\u001b": "%1B",
			"\u001c": "%1C",
			"\u001d": "%1D",
			"\u001e": "%1E",
			"\u001f": "%1F",
			" ": "%20",
			'"': "%22",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"<": "%3C",
			">": "%3E",
			"\\": "%5C",
			"{": "%7B",
			"}": "%7D",
			"\u007f": "%7F",
			"\u0085": "%C2%85",
			"\u00a0": "%C2%A0",
			"\u2028": "%E2%80%A8",
			"\u2029": "%E2%80%A9",
			"\uff01": "%EF%BC%81",
			"\uff03": "%EF%BC%83",
			"\uff04": "%EF%BC%84",
			"\uff06": "%EF%BC%86",
			"\uff07": "%EF%BC%87",
			"\uff08": "%EF%BC%88",
			"\uff09": "%EF%BC%89",
			"\uff0a": "%EF%BC%8A",
			"\uff0b": "%EF%BC%8B",
			"\uff0c": "%EF%BC%8C",
			"\uff0f": "%EF%BC%8F",
			"\uff1a": "%EF%BC%9A",
			"\uff1b": "%EF%BC%9B",
			"\uff1d": "%EF%BC%9D",
			"\uff1f": "%EF%BC%9F",
			"\uff20": "%EF%BC%A0",
			"\uff3b": "%EF%BC%BB",
			"\uff3d": "%EF%BC%BD"
		},
		ob = function(a) {
			return mb[a]
		};
	Sa[16] = function(a) {
		return a
	};
	var qb;
	var rb = [],
		sb = [],
		tb = [],
		ub = [],
		vb = [],
		wb = {},
		xb, yb, Ab, Bb = function(a, b) {
			var c = {};
			c["function"] = "__" + a;
			for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
			return c
		},
		Cb = function(a, b) {
			var c = a["function"];
			if (!c) throw Error("Error: No function name given for function call.");
			var d = wb[c],
				e = {},
				f;
			for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]);
			return void 0 !== d ? d(e) : qb(c, e, b)
		},
		Eb = function(a, b, c) {
			c = c || [];
			var d = {},
				e;
			for (e in a) a.hasOwnProperty(e) && (d[e] = Db(a[e], b, c));
			return d
		},
		Fb = function(a) {
			var b = a["function"];
			if (!b) throw "Error: No function name given for function call.";
			var c = wb[b];
			return c ? c.priorityOverride || 0 : 0
		},
		Db = function(a, b, c) {
			if (sa(a)) {
				var d;
				switch (a[0]) {
					case "function_id":
						return a[1];
					case "list":
						d = [];
						for (var e = 1; e < a.length; e++) d.push(Db(a[e], b, c));
						return d;
					case "macro":
						var f = a[1];
						if (c[f]) return;
						var h = rb[f];
						if (!h || b.Vc(h)) return;
						c[f] = !0;
						try {
							var k = Eb(h, b, c);
							k.vtp_gtmEventId = b.id;
							d = Cb(k, b);
							Ab && (d = Ab.fg(d, k))
						} catch (x) {
							b.De && b.De(x, Number(f)), d = !1
						}
						c[f] = !1;
						return d;
					case "map":
						d = {};
						for (var l = 1; l < a.length; l += 2) d[Db(a[l], b, c)] = Db(a[l + 1], b, c);
						return d;
					case "template":
						d = [];
						for (var m = !1, q = 1; q < a.length; q++) {
							var r = Db(a[q], b, c);
							yb && (m = m || r === yb.Gb);
							d.push(r)
						}
						return yb && m ? yb.ig(d) : d.join("");
					case "escape":
						d = Db(a[1], b, c);
						if (yb && sa(a[1]) && "macro" === a[1][0] && yb.Ig(a)) return yb.$g(d);
						d = String(d);
						for (var u = 2; u < a.length; u++) Sa[a[u]] && (d = Sa[a[u]](d));
						return d;
					case "tag":
						var p = a[1];
						if (!ub[p]) throw Error("Unable to resolve tag reference " + p + ".");
						return d = {
							pe: a[2],
							index: p
						};
					case "zb":
						var t = {
							arg0: a[2],
							arg1: a[3],
							ignore_case: a[5]
						};
						t["function"] = a[1];
						var v = Gb(t, b, c),
							w = !!a[4];
						return w || 2 !== v ? w !== (1 === v) : null;
					default:
						throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
				}
			}
			return a
		},
		Gb = function(a, b, c) {
			try {
				return xb(Eb(a, b, c))
			} catch (d) {
				JSON.stringify(a)
			}
			return 2
		};
	var Hb = function() {
		var a = function(b) {
			return {
				toString: function() {
					return b
				}
			}
		};
		return {
			yd: a("convert_case_to"),
			zd: a("convert_false_to"),
			Ad: a("convert_null_to"),
			Bd: a("convert_true_to"),
			Cd: a("convert_undefined_to"),
			Hh: a("debug_mode_metadata"),
			va: a("function"),
			ff: a("instance_name"),
			lf: a("live_only"),
			pf: a("malware_disabled"),
			qf: a("metadata"),
			Ih: a("original_vendor_template_id"),
			uf: a("once_per_event"),
			Jd: a("once_per_load"),
			Rd: a("setup_tags"),
			Td: a("tag_id"),
			Ud: a("teardown_tags")
		}
	}();
	var Ib = null,
		Lb = function(a) {
			function b(r) {
				for (var u = 0; u < r.length; u++) d[r[u]] = !0
			}
			var c = [],
				d = [];
			Ib = Jb(a);
			for (var e = 0; e < sb.length; e++) {
				var f = sb[e],
					h = Kb(f);
				if (h) {
					for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
					b(f.block || [])
				} else null === h && b(f.block || [])
			}
			for (var m = [], q = 0; q < ub.length; q++) c[q] && !d[q] && (m[q] = !0);
			return m
		},
		Kb = function(a) {
			for (var b = a["if"] || [], c = 0; c < b.length; c++) {
				var d = Ib(b[c]);
				if (0 === d) return !1;
				if (2 === d) return null
			}
			for (var e = a.unless || [], f = 0; f < e.length; f++) {
				var h = Ib(e[f]);
				if (2 === h) return null;
				if (1 === h) return !1
			}
			return !0
		},
		Jb = function(a) {
			var b = [];
			return function(c) {
				void 0 === b[c] && (b[c] = Gb(tb[c], a));
				return b[c]
			}
		};
	/*
	 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
	var D = window,
		E = document,
		gc = navigator,
		hc = E.currentScript && E.currentScript.src,
		ic = function(a, b) {
			var c = D[a];
			D[a] = void 0 === c ? b : c;
			return D[a]
		},
		jc = function(a, b) {
			b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
				a.readyState in {
					loaded: 1,
					complete: 1
				} && (a.onreadystatechange = null, b())
			})
		},
		kc = function(a, b, c) {
			var d = E.createElement("script");
			d.type = "text/javascript";
			d.async = !0;
			d.src = a;
			jc(d, b);
			c && (d.onerror = c);
			var e;
			if (null === na) b: {
				var f = la.document,
					h = f.querySelector && f.querySelector("script[nonce]");
				if (h) {
					var k = h.nonce || h.getAttribute("nonce");
					if (k && ma.test(k)) {
						na = k;
						break b
					}
				}
				na = ""
			}
			e = na;
			e && d.setAttribute("nonce", e);
			var l = E.getElementsByTagName("script")[0] || E.body || E.head;
			l.parentNode.insertBefore(d, l);
			return d
		},
		lc = function() {
			if (hc) {
				var a = hc.toLowerCase();
				if (0 === a.indexOf("https://")) return 2;
				if (0 === a.indexOf("http://")) return 3
			}
			return 1
		},
		mc = function(a, b) {
			var c = E.createElement("iframe");
			c.height = "0";
			c.width = "0";
			c.style.display = "none";
			c.style.visibility = "hidden";
			var d = E.body && E.body.lastChild || E.body || E.head;
			d.parentNode.insertBefore(c, d);
			jc(c, b);
			void 0 !== a && (c.src = a);
			return c
		},
		nc = function(a, b, c) {
			var d = new Image(1, 1);
			d.onload = function() {
				d.onload = null;
				b && b()
			};
			d.onerror = function() {
				d.onerror = null;
				c && c()
			};
			d.src = a;
			return d
		},
		oc = function(a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		pc = function(a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
		},
		H = function(a) {
			D.setTimeout(a, 0)
		},
		qc = function(a, b) {
			return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
		},
		rc = function(a) {
			var b = a.innerText || a.textContent || "";
			b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
			b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
			return b
		},
		sc = function(a) {
			var b = E.createElement("div");
			b.innerHTML = "A<div>" + a + "</div>";
			b = b.lastChild;
			for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
			return c
		},
		tc = function(a, b, c) {
			c = c || 100;
			for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
			for (var f = a, h = 0; f && h <= c; h++) {
				if (d[String(f.tagName).toLowerCase()]) return f;
				f = f.parentElement
			}
			return null
		},
		uc = function(a) {
			gc.sendBeacon && gc.sendBeacon(a) || nc(a)
		},
		vc = function(a, b) {
			var c = a[b];
			c && "string" === typeof c.animVal && (c = c.animVal);
			return c
		};
	var xc = function(a) {
			return wc ? E.querySelectorAll(a) : null
		},
		yc = function(a, b) {
			if (!wc) return null;
			if (Element.prototype.closest) try {
				return a.closest(b)
			} catch (e) {
				return null
			}
			var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
				d = a;
			if (!E.documentElement.contains(d)) return null;
			do {
				try {
					if (c.call(d, b)) return d
				} catch (e) {
					break
				}
				d = d.parentElement || d.parentNode
			} while (null !== d && 1 === d.nodeType);
			return null
		},
		zc = !1;
	if (E.querySelectorAll) try {
		var Ac = E.querySelectorAll(":root");
		Ac && 1 == Ac.length && Ac[0] == E.documentElement && (zc = !0)
	} catch (a) {}
	var wc = zc;
	var I = {},
		Qc = null,
		Rc = Math.random();
	I.s = "GTM-T39J99";
	I.Kb = "4m0";
	I.Id = "";
	var Sc = {
			__cl: !0,
			__ecl: !0,
			__ehl: !0,
			__evl: !0,
			__fal: !0,
			__fil: !0,
			__fsl: !0,
			__hl: !0,
			__jel: !0,
			__lcl: !0,
			__sdl: !0,
			__tl: !0,
			__ytl: !0,
			__paused: !0,
			__tg: !0
		},
		Tc = "www.googletagmanager.com/gtm.js";
	var Uc = Tc,
		Vc = null,
		Wc = null,
		Xc = null,
		Yc = "//www.googletagmanager.com/a?id=" + I.s + "&cv=56",
		Zc = {},
		$c = {},
		ad = function() {
			var a = Qc.sequence || 0;
			Qc.sequence = a + 1;
			return a
		};
	var bd = {},
		J = function(a, b) {
			bd[a] = bd[a] || [];
			bd[a][b] = !0
		},
		cd = function(a) {
			for (var b = [], c = bd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
			for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
			return b.join("")
		};
	var dd = function() {
			return "&tc=" + ub.filter(function(a) {
				return a
			}).length
		},
		gd = function() {
			ed || (ed = D.setTimeout(fd, 500))
		},
		fd = function() {
			ed && (D.clearTimeout(ed), ed = void 0);
			void 0 === id || jd[id] && !kd && !ld || (md[id] || nd.Kg() || 0 >= od-- ? (J("GTM", 1), md[id] = !0) : (nd.ih(), nc(pd()), jd[id] = !0, qd = rd = ld = kd = ""))
		},
		pd = function() {
			var a = id;
			if (void 0 === a) return "";
			var b = cd("GTM"),
				c = cd("TAGGING");
			return [sd, jd[a] ? "" : "&es=1", td[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", dd(), kd, ld, rd, qd, "&z=0"].join("")
		},
		ud = function() {
			return [Yc, "&v=3&t=t", "&pid=" + xa(), "&rv=" + I.Kb].join("")
		},
		vd = "0.005000" > Math.random(),
		sd = ud(),
		wd = function() {
			sd = ud()
		},
		jd = {},
		kd = "",
		ld = "",
		qd = "",
		rd = "",
		id = void 0,
		td = {},
		md = {},
		ed = void 0,
		nd = function(a, b) {
			var c = 0,
				d = 0;
			return {
				Kg: function() {
					if (c < a) return !1;
					Ga() - d >= b && (c = 0);
					return c >= a
				},
				ih: function() {
					Ga() - d >= b && (c = 0);
					c++;
					d = Ga()
				}
			}
		}(2, 1E3),
		od = 1E3,
		xd = function(a, b) {
			if (vd && !md[a] && id !== a) {
				fd();
				id = a;
				qd = kd = "";
				var c;
				c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
				td[a] = "&e=" + c + "&eid=" + a;
				gd()
			}
		},
		yd = function(a, b, c) {
			if (vd && !md[a] && b) {
				a !== id && (fd(), id = a);
				var d, e = String(b[Hb.va] || "").replace(/_/g, "");
				0 === e.indexOf("cvt") && (e = "cvt");
				d = e;
				var f = c + d;
				kd = kd ? kd + "." + f : "&tr=" + f;
				var h = b["function"];
				if (!h) throw Error("Error: No function name given for function call.");
				var k = (wb[h] ? "1" : "2") + d;
				qd = qd ? qd + "." + k : "&ti=" + k;
				gd();
				2022 <= pd().length && fd()
			}
		},
		zd = function(a, b, c) {
			if (vd && !md[a]) {
				a !== id && (fd(), id = a);
				var d = c + b;
				ld = ld ? ld + "." + d : "&epr=" + d;
				gd();
				2022 <= pd().length && fd()
			}
		};
	var Ad = {},
		Bd = new ya,
		Cd = {},
		Dd = {},
		Gd = {
			name: "dataLayer",
			set: function(a, b) {
				C(Ma(a, b), Cd);
				Ed()
			},
			get: function(a) {
				return Fd(a, 2)
			},
			reset: function() {
				Bd = new ya;
				Cd = {};
				Ed()
			}
		},
		Fd = function(a, b) {
			if (2 != b) {
				var c = Bd.get(a);
				if (vd) {
					var d = Hd(a);
					c !== d && J("GTM", 5)
				}
				return c
			}
			return Hd(a)
		},
		Hd = function(a) {
			var b = a.split("."),
				c = !1,
				d = void 0;
			return c ? d : Id(b)
		},
		Id = function(a) {
			for (var b = Cd, c = 0; c < a.length; c++) {
				if (null === b) return !1;
				if (void 0 === b) break;
				b = b[a[c]]
			}
			return b
		};
	var Jd = function(a, b) {
			Dd.hasOwnProperty(a) || (Bd.set(a, b), C(Ma(a, b), Cd), Ed())
		},
		Ed = function(a) {
			Aa(Dd, function(b, c) {
				Bd.set(b, c);
				C(Ma(b, void 0), Cd);
				C(Ma(b, c), Cd);
				a && delete Dd[b]
			})
		},
		Kd = function(a, b, c) {
			Ad[a] = Ad[a] || {};
			var d = 1 !== c ? Hd(b) : Bd.get(b);
			"array" === Pa(d) || "object" === Pa(d) ? Ad[a][b] = C(d) : Ad[a][b] = d
		},
		Ld = function(a, b) {
			if (Ad[a]) return Ad[a][b]
		},
		Md = function(a, b) {
			Ad[a] && delete Ad[a][b]
		};
	var Q = {
		ra: "_ee",
		Kh: "_uci",
		yc: "event_callback",
		Fb: "event_timeout",
		D: "gtag.config",
		aa: "allow_ad_personalization_signals",
		zc: "restricted_data_processing",
		Za: "allow_google_signals",
		ba: "cookie_expires",
		Eb: "cookie_update",
		$a: "session_duration",
		ja: "user_properties"
	};
	Q.ze = [Q.aa, Q.Za, Q.Eb];
	Q.Ce = [Q.ba, Q.Fb, Q.$a];
	var Pd = /[A-Z]+/,
		Qd = /\s/,
		Rd = function(a) {
			if (g(a) && (a = Fa(a), !Qd.test(a))) {
				var b = a.indexOf("-");
				if (!(0 > b)) {
					var c = a.substring(0, b);
					if (Pd.test(c)) {
						for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
							if (!d[e]) return;
						return {
							id: a,
							prefix: c,
							containerId: c + "-" + d[0],
							w: d
						}
					}
				}
			}
		},
		Td = function(a) {
			for (var b = {}, c = 0; c < a.length; ++c) {
				var d = Rd(a[c]);
				d && (b[d.id] = d)
			}
			Sd(b);
			var e = [];
			Aa(b, function(f, h) {
				e.push(h)
			});
			return e
		};

	function Sd(a) {
		var b = [],
			c;
		for (c in a)
			if (a.hasOwnProperty(c)) {
				var d = a[c];
				"AW" === d.prefix && d.w[1] && b.push(d.containerId)
			}
		for (var e = 0; e < b.length; ++e) delete a[b[e]]
	};
	var Ud = function() {
		var a = !1;
		return a
	};
	var T = function(a, b, c, d) {
			return (2 === Vd() || d || "http:" != D.location.protocol ? a : b) + c
		},
		Vd = function() {
			var a = lc(),
				b;
			if (1 === a) a: {
				var c = Uc;c = c.toLowerCase();
				for (var d = "https://" + c, e = "http://" + c, f = 1, h = E.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
					var l = h[k].src;
					if (l) {
						l = l.toLowerCase();
						if (0 === l.indexOf(e)) {
							b = 3;
							break a
						}
						1 === f && 0 === l.indexOf(d) && (f = 2)
					}
				}
				b = f
			}
			else b = a;
			return b
		};
	var ie = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
		je = {
			cl: ["ecl"],
			customPixels: ["nonGooglePixels"],
			ecl: ["cl"],
			ehl: ["hl"],
			hl: ["ehl"],
			html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			nonGooglePixels: [],
			nonGoogleScripts: ["nonGooglePixels"],
			nonGoogleIframes: ["nonGooglePixels"]
		},
		ke = {
			cl: ["ecl"],
			customPixels: ["customScripts", "html"],
			ecl: ["cl"],
			ehl: ["hl"],
			hl: ["ehl"],
			html: ["customScripts"],
			customScripts: ["html"],
			nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
			nonGoogleScripts: ["customScripts", "html"],
			nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
		},
		le = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
	var ne = function(a) {
			var b = Fd("gtm.whitelist");
			b && J("GTM", 9);
			var c = b && La(Da(b), je),
				d = Fd("gtm.blacklist");
			d || (d = Fd("tagTypeBlacklist")) && J("GTM", 3);
			d ? J("GTM", 8) : d = [];
			me() && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
			0 <= n(Da(d), "google") && J("GTM", 2);
			var e = d && La(Da(d), ke),
				f = {};
			return function(h) {
				var k = h && h[Hb.va];
				if (!k || "string" != typeof k) return !0;
				k = k.replace(/^_*/, "");
				if (void 0 !== f[k]) return f[k];
				var l = $c[k] || [],
					m = a(k, l);
				if (b) {
					var q;
					if (q = m) a: {
						if (0 > n(c, k))
							if (l && 0 < l.length)
								for (var r = 0; r < l.length; r++) {
									if (0 > n(c, l[r])) {
										J("GTM", 11);
										q = !1;
										break a
									}
								} else {
									q = !1;
									break a
								}
						q = !0
					}
					m = q
				}
				var u = !1;
				if (d) {
					var p = 0 <= n(e, k);
					if (p) u = p;
					else {
						var t = za(e, l || []);
						t && J("GTM", 10);
						u = t
					}
				}
				var v = !m || u;
				v || !(0 <= n(l, "sandboxedScripts")) || c && -1 !== n(c, "sandboxedScripts") || (v = za(e, le));
				return f[k] = v
			}
		},
		me = function() {
			return ie.test(D.location && D.location.hostname)
		};
	var oe = {
		fg: function(a, b) {
			b[Hb.yd] && "string" === typeof a && (a = 1 == b[Hb.yd] ? a.toLowerCase() : a.toUpperCase());
			b.hasOwnProperty(Hb.Ad) && null === a && (a = b[Hb.Ad]);
			b.hasOwnProperty(Hb.Cd) && void 0 === a && (a = b[Hb.Cd]);
			b.hasOwnProperty(Hb.Bd) && !0 === a && (a = b[Hb.Bd]);
			b.hasOwnProperty(Hb.zd) && !1 === a && (a = b[Hb.zd]);
			return a
		}
	};
	var pe = {
			active: !0,
			isWhitelisted: function() {
				return !0
			}
		},
		qe = function(a) {
			var b = Qc.zones;
			!b && a && (b = Qc.zones = a());
			return b
		};
	var re = function() {};
	var se = !1,
		te = 0,
		ue = [];

	function ve(a) {
		if (!se) {
			var b = E.createEventObject,
				c = "complete" == E.readyState,
				d = "interactive" == E.readyState;
			if (!a || "readystatechange" != a.type || c || !b && d) {
				se = !0;
				for (var e = 0; e < ue.length; e++) H(ue[e])
			}
			ue.push = function() {
				for (var f = 0; f < arguments.length; f++) H(arguments[f]);
				return 0
			}
		}
	}

	function we() {
		if (!se && 140 > te) {
			te++;
			try {
				E.documentElement.doScroll("left"), ve()
			} catch (a) {
				D.setTimeout(we, 50)
			}
		}
	}
	var xe = function(a) {
		se ? a() : ue.push(a)
	};
	var ye = {},
		ze = {},
		Ae = function(a, b, c, d) {
			if (!ze[a] || Sc[b] || "__zone" === b) return -1;
			var e = {};
			Ra(d) && (e = C(d, e));
			e.id = c;
			e.status = "timeout";
			return ze[a].tags.push(e) - 1
		},
		Be = function(a, b, c, d) {
			if (ze[a]) {
				var e = ze[a].tags[b];
				e && (e.status = c, e.executionTime = d)
			}
		};

	function Ce(a) {
		for (var b = ye[a] || [], c = 0; c < b.length; c++) b[c]();
		ye[a] = {
			push: function(d) {
				d(I.s, ze[a])
			}
		}
	}
	var Fe = function(a, b, c) {
			ze[a] = {
				tags: []
			};
			qa(b) && De(a, b);
			c && D.setTimeout(function() {
				return Ce(a)
			}, Number(c));
			return Ee(a)
		},
		De = function(a, b) {
			ye[a] = ye[a] || [];
			ye[a].push(Ia(function() {
				return H(function() {
					b(I.s, ze[a])
				})
			}))
		};

	function Ee(a) {
		var b = 0,
			c = 0,
			d = !1;
		return {
			add: function() {
				c++;
				return Ia(function() {
					b++;
					d && b >= c && Ce(a)
				})
			},
			Sf: function() {
				d = !0;
				b >= c && Ce(a)
			}
		}
	};
	var Ge = function() {
		function a(d) {
			return !ra(d) || 0 > d ? 0 : d
		}
		if (!Qc._li && D.performance && D.performance.timing) {
			var b = D.performance.timing.navigationStart,
				c = ra(Gd.get("gtm.start")) ? Gd.get("gtm.start") : 0;
			Qc._li = {
				cst: a(c - b),
				cbt: a(Wc - b)
			}
		}
	};
	var Ke = {},
		Le = function() {
			return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject]
		},
		Me = !1;
	var Ne = function(a) {
			D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
			var b = D.GoogleAnalyticsObject;
			if (D[b]) D.hasOwnProperty(b) || J("GTM", 12);
			else {
				var c = function() {
					c.q = c.q || [];
					c.q.push(arguments)
				};
				c.l = Number(new Date);
				D[b] = c
			}
			Ge();
			return D[b]
		},
		Oe = function(a, b, c, d) {
			b = String(b).replace(/\s+/g, "").split(",");
			var e = Le();
			e(a + "require", "linker");
			e(a + "linker:autoLink", b, c, d)
		};
	var Qe = function(a) {},
		Pe = function() {
			return D.GoogleAnalyticsObject || "ga"
		};
	var Se = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	var Te = /:[0-9]+$/,
		Ue = function(a, b, c) {
			for (var d = a.split("&"), e = 0; e < d.length; e++) {
				var f = d[e].split("=");
				if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
					var h = f.slice(1).join("=");
					return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
				}
			}
		},
		Xe = function(a, b, c, d, e) {
			b && (b = String(b).toLowerCase());
			if ("protocol" === b || "port" === b) a.protocol = Ve(a.protocol) || Ve(D.location.protocol);
			"port" === b ? a.port = String(Number(a.hostname ? a.port : D.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || D.location.hostname).replace(Te, "").toLowerCase());
			return We(a, b, c, d, e)
		},
		We = function(a, b, c, d, e) {
			var f, h = Ve(a.protocol);
			b && (b = String(b).toLowerCase());
			switch (b) {
				case "url_no_fragment":
					f = Ye(a);
					break;
				case "protocol":
					f = h;
					break;
				case "host":
					f = a.hostname.replace(Te, "").toLowerCase();
					if (c) {
						var k = /^www\d*\./.exec(f);
						k && k[0] && (f = f.substr(k[0].length))
					}
					break;
				case "port":
					f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
					break;
				case "path":
					a.pathname || a.hostname || J("TAGGING", 1);
					f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
					var l = f.split("/");
					0 <= n(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
					f = l.join("/");
					break;
				case "query":
					f = a.search.replace("?", "");
					e && (f = Ue(f, e, void 0));
					break;
				case "extension":
					var m = a.pathname.split(".");
					f = 1 < m.length ? m[m.length - 1] : "";
					f = f.split("/")[0];
					break;
				case "fragment":
					f = a.hash.replace("#", "");
					break;
				default:
					f = a && a.href
			}
			return f
		},
		Ve = function(a) {
			return a ? a.replace(":", "").toLowerCase() : ""
		},
		Ye = function(a) {
			var b = "";
			if (a && a.href) {
				var c = a.href.indexOf("#");
				b = 0 > c ? a.href : a.href.substr(0, c)
			}
			return b
		},
		Ze = function(a) {
			var b = E.createElement("a");
			a && (b.href = a);
			var c = b.pathname;
			"/" !== c[0] && (a || J("TAGGING", 1), c = "/" + c);
			var d = b.hostname.replace(Te, "");
			return {
				href: b.href,
				protocol: b.protocol,
				host: b.host,
				hostname: d,
				pathname: c,
				search: b.search,
				hash: b.hash,
				port: b.port
			}
		};

	function df(a, b, c, d) {
		var e = ub[a],
			f = ef(a, b, c, d);
		if (!f) return null;
		var h = Db(e[Hb.Rd], c, []);
		if (h && h.length) {
			var k = h[0];
			f = df(k.index, {
				C: f,
				B: 1 === k.pe ? b.terminate : f,
				terminate: b.terminate
			}, c, d)
		}
		return f
	}

	function ef(a, b, c, d) {
		function e() {
			if (f[Hb.pf]) k();
			else {
				var w = Eb(f, c, []),
					x = Ae(c.id, String(f[Hb.va]), Number(f[Hb.Td]), w[Hb.qf]),
					y = !1;
				w.vtp_gtmOnSuccess = function() {
					if (!y) {
						y = !0;
						var A = Ga() - z;
						yd(c.id, ub[a], "5");
						Be(c.id, x, "success", A);
						h()
					}
				};
				w.vtp_gtmOnFailure = function() {
					if (!y) {
						y = !0;
						var A = Ga() - z;
						yd(c.id, ub[a], "6");
						Be(c.id, x, "failure", A);
						k()
					}
				};
				w.vtp_gtmTagId = f.tag_id;
				w.vtp_gtmEventId = c.id;
				yd(c.id, f, "1");
				var B = function() {
					var A = Ga() - z;
					yd(c.id, f, "7");
					Be(c.id, x, "exception", A);
					y || (y = !0, k())
				};
				var z = Ga();
				try {
					Cb(w, c)
				} catch (A) {
					B(A)
				}
			}
		}
		var f = ub[a],
			h = b.C,
			k = b.B,
			l = b.terminate;
		if (c.Vc(f)) return null;
		var m = Db(f[Hb.Ud], c, []);
		if (m && m.length) {
			var q = m[0],
				r = df(q.index, {
					C: h,
					B: k,
					terminate: l
				}, c, d);
			if (!r) return null;
			h = r;
			k = 2 === q.pe ? l : r
		}
		if (f[Hb.Jd] || f[Hb.uf]) {
			var u = f[Hb.Jd] ? vb : c.rh,
				p = h,
				t = k;
			if (!u[a]) {
				e = Ia(e);
				var v = ff(a, u, e);
				h = v.C;
				k = v.B
			}
			return function() {
				u[a](p, t)
			}
		}
		return e
	}

	function ff(a, b, c) {
		var d = [],
			e = [];
		b[a] = gf(d, e, c);
		return {
			C: function() {
				b[a] = hf;
				for (var f = 0; f < d.length; f++) d[f]()
			},
			B: function() {
				b[a] = jf;
				for (var f = 0; f < e.length; f++) e[f]()
			}
		}
	}

	function gf(a, b, c) {
		return function(d, e) {
			a.push(d);
			b.push(e);
			c()
		}
	}

	function hf(a) {
		a()
	}

	function jf(a, b) {
		b()
	};
	var mf = function(a, b) {
		for (var c = [], d = 0; d < ub.length; d++)
			if (a.ub[d]) {
				var e = ub[d];
				var f = b.add();
				try {
					var h = df(d, {
						C: f,
						B: f,
						terminate: f
					}, a, d);
					h ? c.push({
						Te: d,
						Ne: Fb(e),
						qg: h
					}) : (kf(d, a), f())
				} catch (l) {
					f()
				}
			}
		b.Sf();
		c.sort(lf);
		for (var k = 0; k < c.length; k++) c[k].qg();
		return 0 < c.length
	};

	function lf(a, b) {
		var c, d = b.Ne,
			e = a.Ne;
		c = d > e ? 1 : d < e ? -1 : 0;
		var f;
		if (0 !== c) f = c;
		else {
			var h = a.Te,
				k = b.Te;
			f = h > k ? 1 : h < k ? -1 : 0
		}
		return f
	}

	function kf(a, b) {
		if (!vd) return;
		var c = function(d) {
			var e = b.Vc(ub[d]) ? "3" : "4",
				f = Db(ub[d][Hb.Rd], b, []);
			f && f.length && c(f[0].index);
			yd(b.id, ub[d], e);
			var h = Db(ub[d][Hb.Ud], b, []);
			h && h.length && c(h[0].index)
		};
		c(a);
	}
	var nf = !1,
		of = function(a, b, c, d, e) {
			if ("gtm.js" == b) {
				if (nf) return !1;
				nf = !0
			}
			xd(a, b);
			var f = Fe(a, d, e);
			Kd(a, "event", 1);
			Kd(a, "ecommerce", 1);
			Kd(a, "gtm");
			var h = {
				id: a,
				name: b,
				Vc: ne(c),
				ub: [],
				rh: [],
				De: function() {
					J("GTM", 6)
				}
			};
			h.ub = Lb(h);
			var k = mf(h, f);
			"gtm.js" !== b && "gtm.sync" !== b || Qe(I.s);
			if (!k) return k;
			for (var l = 0; l < h.ub.length; l++)
				if (h.ub[l]) {
					var m = ub[l];
					if (m && !Sc[String(m[Hb.va])]) return !0
				}
			return !1
		};
	var pf = [];

	function qf() {
		var a = ic("google_tag_data", {});
		a.ics || (a.ics = {
			entries: {},
			set: rf,
			update: sf,
			addListener: tf,
			notifyListeners: uf,
			active: !1
		});
		return a.ics
	}

	function rf(a, b, c, d, e) {
		var f = qf();
		f.active = !0;
		if (void 0 != b) {
			var h = f.entries,
				k = h[a] || {},
				l = k.region,
				m = c && g(c) ? c.toUpperCase() : void 0;
			d = d.toUpperCase();
			e = e.toUpperCase();
			m !== e && (m === d ? l === e : m || l) || (h[a] = {
				region: m,
				initial: "granted" === b,
				update: k.update
			})
		}
	}

	function sf(a, b) {
		var c = qf();
		c.active = !0;
		if (void 0 != b) {
			var d = vf(a),
				e = c.entries;
			e[a] = e[a] || {};
			e[a].update = "granted" === b;
			if (vf(a) !== d)
				for (var f = 0; f < pf.length; ++f) {
					var h = pf[f];
					sa(h.je) && -1 !== h.je.indexOf(a) && (h.Me = !0)
				}
		}
	}

	function tf(a, b) {
		pf.push({
			je: a,
			sg: b
		})
	}

	function uf() {
		for (var a = 0; a < pf.length; ++a) {
			var b = pf[a];
			if (b.Me) {
				b.Me = !1;
				try {
					b.sg.call()
				} catch (c) {}
			}
		}
	}
	var vf = function(a) {
			var b = qf().entries[a] || {};
			return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
		},
		wf = function() {
			return qf().active
		},
		xf = function(a, b) {
			qf().addListener(a, b)
		},
		yf = function(a, b) {
			if (!1 === vf(b)) {
				var c = !1;
				xf([b], function() {
					!c && vf(b) && (a(), c = !0)
				})
			}
		};
	var zf = [Q.o, Q.J],
		Af = function(a) {
			var b = a.region;
			b && J("GTM", 40);
			for (var c = sa(b) ? b : [b], d = 0; d < c.length; ++d)
				for (var e = 0; e < zf.length; e++) {
					var f = zf[e],
						h = a[zf[e]],
						k = c[d];
					qf().set(f, h, k, "AE", "AE-DU")
				}
		},
		Bf = function(a) {
			for (var b = 0; b < zf.length; b++) {
				var c = zf[b],
					d = a[zf[b]];
				qf().update(c, d)
			}
			qf().notifyListeners()
		},
		Cf = function(a) {
			var b = vf(a);
			return void 0 != b ? b : !0
		},
		Df = function() {
			for (var a = [], b = 0; b < zf.length; b++) {
				var c = vf(zf[b]);
				a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
			}
			return "G1" + a.join("")
		};

	function Ff(a, b) {}

	function Gf(a, b) {
		return Hf() ? Ff(a, b) : void 0
	}

	function Hf() {
		var a = !1;
		return a
	};
	var If = function() {
			this.eventModel = {};
			this.targetConfig = {};
			this.containerConfig = {};
			this.h = {};
			this.globalConfig = {};
			this.C = function() {};
			this.B = function() {};
			this.ie = void 0
		},
		Jf = function(a) {
			var b = new If;
			b.eventModel = a;
			return b
		},
		Kf = function(a, b) {
			a.targetConfig = b;
			return a
		},
		Lf = function(a, b) {
			a.containerConfig = b;
			return a
		},
		Mf = function(a, b) {
			a.h = b;
			return a
		},
		Nf = function(a, b) {
			a.globalConfig = b;
			return a
		},
		Of = function(a, b) {
			a.C = b;
			return a
		},
		Pf = function(a, b) {
			a.B = b;
			return a
		};
	If.prototype.getWithConfig = function(a) {
		if (void 0 !== this.eventModel[a]) return this.eventModel[a];
		if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
		if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
		if (void 0 !== this.h[a]) return this.h[a];
		if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
	};
	var Qf = function(a) {
		function b(e) {
			Aa(e, function(f) {
				c[f] = null
			})
		}
		var c = {};
		b(a.eventModel);
		b(a.targetConfig);
		b(a.containerConfig);
		b(a.globalConfig);
		var d = [];
		Aa(c, function(e) {
			d.push(e)
		});
		return d
	};

	function Rf(a, b, c) {
		for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
			var h = e[f].split("="),
				k = h[0].replace(/^\s*|\s*$/g, "");
			if (k && k == a) {
				var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
				l && c && (l = decodeURIComponent(l));
				d.push(l)
			}
		}
		return d
	};
	var Sf = {},
		Tf = function(a) {
			return void 0 == Sf[a] ? !1 : Sf[a]
		};
	var Vf = function(a, b, c, d) {
			return Uf(d) ? Rf(a, String(b || document.cookie), c) : []
		},
		Yf = function(a, b, c, d, e) {
			if (Uf(e)) {
				var f = Wf(a, d, e);
				if (1 === f.length) return f[0].id;
				if (0 !== f.length) {
					f = Xf(f, function(h) {
						return h.Sb
					}, b);
					if (1 === f.length) return f[0].id;
					f = Xf(f, function(h) {
						return h.vb
					}, c);
					return f[0] ? f[0].id : void 0
				}
			}
		};

	function Zf(a, b, c, d) {
		var e = document.cookie;
		document.cookie = a;
		var f = document.cookie;
		return e != f || void 0 != c && 0 <= Vf(b, f, !1, d).indexOf(c)
	}
	var cg = function(a, b, c) {
			function d(p, t, v) {
				if (null == v) return delete h[t], p;
				h[t] = v;
				return p + "; " + t + "=" + v
			}

			function e(p, t) {
				if (null == t) return delete h[t], p;
				h[t] = !0;
				return p + "; " + t
			}
			if (!Uf(c.Ca)) return !1;
			var f;
			void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = $f(b), f = a + "=" + b);
			var h = {};
			f = d(f, "path", c.path);
			var k;
			c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
			f = d(f, "expires", k);
			f = d(f, "max-age", c.Uh);
			f = d(f, "samesite", c.$h);
			c.ai && (f = e(f, "secure"));
			f = e(f, c.flags);
			var l = c.domain;
			if ("auto" === l) {
				for (var m = ag(), q = 0; q < m.length; ++q) {
					var r = "none" !== m[q] ? m[q] : void 0,
						u = d(f, "domain", r);
					if (!bg(r, c.path) && Zf(u, a, b, c.Ca)) return !0
				}
				return !1
			}
			l && "none" !== l && (f = d(f, "domain", l));
			return bg(l, c.path) ? !1 : Zf(f, a, b, c.Ca)
		},
		dg = function(a, b, c) {
			null == c.path && (c.path = "/");
			c.domain || (c.domain = "auto");
			return cg(a, b, c)
		};

	function Xf(a, b, c) {
		for (var d = [], e = [], f, h = 0; h < a.length; h++) {
			var k = a[h],
				l = b(k);
			l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
		}
		return 0 < d.length ? d : e
	}

	function Wf(a, b, c) {
		for (var d = [], e = Vf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
			var h = e[f].split("."),
				k = h.shift();
			if (!b || -1 !== b.indexOf(k)) {
				var l = h.shift();
				l && (l = l.split("-"), d.push({
					id: h.join("."),
					Sb: 1 * l[0] || 1,
					vb: 1 * l[1] || 1
				}))
			}
		}
		return d
	}
	var $f = function(a) {
			a && 1200 < a.length && (a = a.substring(0, 1200));
			return a
		},
		eg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
		fg = /(^|\.)doubleclick\.net$/i,
		bg = function(a, b) {
			return fg.test(document.location.hostname) || "/" === b && eg.test(a)
		},
		ag = function() {
			var a = [],
				b = document.location.hostname.split(".");
			if (4 === b.length) {
				var c = b[b.length - 1];
				if (parseInt(c, 10).toString() === c) return ["none"]
			}
			for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
			var e = document.location.hostname;
			fg.test(e) || eg.test(e) || a.push("none");
			return a
		},
		Uf = function(a) {
			if (!Tf("gtag_cs_api") || !a || !wf()) return !0;
			var b = vf(a);
			return null == b ? !0 : !!b
		};
	var gg = function() {
			for (var a = gc.userAgent + (E.cookie || "") + (E.referrer || ""), b = a.length, c = D.history.length; 0 < c;) a += c-- ^ b++;
			var d = 1,
				e, f, h;
			if (a)
				for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
			return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Ga() / 1E3)].join(".")
		},
		jg = function(a, b, c, d, e) {
			var f = hg(b);
			return Yf(a, f, ig(c), d, e)
		},
		kg = function(a, b, c, d) {
			var e = "" + hg(c),
				f = ig(d);
			1 < f && (e += "-" + f);
			return [b, e, a].join(".")
		},
		hg = function(a) {
			if (!a) return 1;
			a = 0 === a.indexOf(".") ? a.substr(1) : a;
			return a.split(".").length
		},
		ig = function(a) {
			if (!a || "/" === a) return 1;
			"/" !== a[0] && (a = "/" + a);
			"/" !== a[a.length - 1] && (a += "/");
			return a.split("/").length - 1
		};

	function lg(a, b, c) {
		var d, e = a.tb;
		null == e && (e = 7776E3);
		0 !== e && (d = new Date((b || Ga()) + 1E3 * e));
		return {
			path: a.path,
			domain: a.domain,
			flags: a.flags,
			encode: !!c,
			expires: d
		}
	};

	function mg() {
		for (var a = ng, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
		return b
	}

	function og() {
		var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		a += a.toLowerCase() + "0123456789-_";
		return a + "."
	}
	var ng, pg;

	function rg(a) {
		ng = ng || og();
		pg = pg || mg();
		for (var b = [], c = 0; c < a.length; c += 3) {
			var d = c + 1 < a.length,
				e = c + 2 < a.length,
				f = a.charCodeAt(c),
				h = d ? a.charCodeAt(c + 1) : 0,
				k = e ? a.charCodeAt(c + 2) : 0,
				l = f >> 2,
				m = (f & 3) << 4 | h >> 4,
				q = (h & 15) << 2 | k >> 6,
				r = k & 63;
			e || (r = 64, d || (q = 64));
			b.push(ng[l], ng[m], ng[q], ng[r])
		}
		return b.join("")
	}

	function sg(a) {
		function b(l) {
			for (; d < a.length;) {
				var m = a.charAt(d++),
					q = pg[m];
				if (null != q) return q;
				if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
			}
			return l
		}
		ng = ng || og();
		pg = pg || mg();
		for (var c = "", d = 0;;) {
			var e = b(-1),
				f = b(0),
				h = b(64),
				k = b(64);
			if (64 === k && -1 === e) return c;
			c += String.fromCharCode(e << 2 | f >> 4);
			64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
		}
	};
	var tg;
	var xg = function() {
			var a = ug,
				b = vg,
				c = wg(),
				d = function(h) {
					a(h.target || h.srcElement || {})
				},
				e = function(h) {
					b(h.target || h.srcElement || {})
				};
			if (!c.init) {
				oc(E, "mousedown", d);
				oc(E, "keyup", d);
				oc(E, "submit", e);
				var f = HTMLFormElement.prototype.submit;
				HTMLFormElement.prototype.submit = function() {
					b(this);
					f.call(this)
				};
				c.init = !0
			}
		},
		yg = function(a, b, c, d, e) {
			var f = {
				callback: a,
				domains: b,
				fragment: 2 === c,
				placement: c,
				forms: d,
				sameHost: e
			};
			wg().decorators.push(f)
		},
		zg = function(a, b, c) {
			for (var d = wg().decorators, e = {}, f = 0; f < d.length; ++f) {
				var h = d[f],
					k;
				if (k = !c || h.forms) a: {
					var l = h.domains,
						m = a;
					if (l && (h.sameHost || m !== E.location.hostname))
						for (var q = 0; q < l.length; q++)
							if (l[q] instanceof RegExp) {
								if (l[q].test(m)) {
									k = !0;
									break a
								}
							} else if (0 <= m.indexOf(l[q])) {
						k = !0;
						break a
					}
					k = !1
				}
				if (k) {
					var r = h.placement;
					void 0 == r && (r = h.fragment ? 2 : 1);
					r === b && Ja(e, h.callback())
				}
			}
			return e
		},
		wg = function() {
			var a = ic("google_tag_data", {}),
				b = a.gl;
			b && b.decorators || (b = {
				decorators: []
			}, a.gl = b);
			return b
		};
	var Ag = /(.*?)\*(.*?)\*(.*)/,
		Bg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
		Cg = /^(?:www\.|m\.|amp\.)+/,
		Dg = /([^?#]+)(\?[^#]*)?(#.*)?/;

	function Eg(a) {
		return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
	}
	var Gg = function(a) {
			var b = [],
				c;
			for (c in a)
				if (a.hasOwnProperty(c)) {
					var d = a[c];
					void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(rg(String(d))))
				}
			var e = b.join("*");
			return ["1", Fg(e), e].join("*")
		},
		Fg = function(a, b) {
			var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
				d;
			if (!(d = tg)) {
				for (var e = Array(256), f = 0; 256 > f; f++) {
					for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
					e[f] = h
				}
				d = e
			}
			tg = d;
			for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ tg[(l ^ c.charCodeAt(m)) & 255];
			return ((l ^ -1) >>> 0).toString(36)
		},
		Ig = function() {
			return function(a) {
				var b = Ze(D.location.href),
					c = b.search.replace("?", ""),
					d = Ue(c, "_gl", !0) || "";
				a.query = Hg(d) || {};
				var e = Xe(b, "fragment").match(Eg("_gl"));
				a.fragment = Hg(e && e[3] || "") || {}
			}
		},
		Jg = function() {
			var a = Ig(),
				b = wg();
			b.data || (b.data = {
				query: {},
				fragment: {}
			}, a(b.data));
			var c = {},
				d = b.data;
			d && (Ja(c, d.query), Ja(c, d.fragment));
			return c
		},
		Hg = function(a) {
			var b;
			b = void 0 === b ? 3 : b;
			try {
				if (a) {
					var c;
					a: {
						for (var d = a, e = 0; 3 > e; ++e) {
							var f = Ag.exec(d);
							if (f) {
								c = f;
								break a
							}
							d = decodeURIComponent(d)
						}
						c = void 0
					}
					var h = c;
					if (h && "1" === h[1]) {
						var k = h[3],
							l;
						a: {
							for (var m = h[2], q = 0; q < b; ++q)
								if (m === Fg(k, q)) {
									l = !0;
									break a
								}
							l = !1
						}
						if (l) {
							for (var r = {}, u = k ? k.split("*") : [], p = 0; p < u.length; p += 2) r[u[p]] = sg(u[p + 1]);
							return r
						}
					}
				}
			} catch (t) {}
		};

	function Kg(a, b, c, d) {
		function e(q) {
			var r = q,
				u = Eg(a).exec(r),
				p = r;
			if (u) {
				var t = u[2],
					v = u[4];
				p = u[1];
				v && (p = p + t + v)
			}
			q = p;
			var w = q.charAt(q.length - 1);
			q && "&" !== w && (q += "&");
			return q + m
		}
		d = void 0 === d ? !1 : d;
		var f = Dg.exec(c);
		if (!f) return "";
		var h = f[1],
			k = f[2] || "",
			l = f[3] || "",
			m = a + "=" + b;
		d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
		return "" + h + k + l
	}

	function Lg(a, b) {
		var c = "FORM" === (a.tagName || "").toUpperCase(),
			d = zg(b, 1, c),
			e = zg(b, 2, c),
			f = zg(b, 3, c);
		if (Ka(d)) {
			var h = Gg(d);
			c ? Mg("_gl", h, a) : Ng("_gl", h, a, !1)
		}
		if (!c && Ka(e)) {
			var k = Gg(e);
			Ng("_gl", k, a, !0)
		}
		for (var l in f)
			if (f.hasOwnProperty(l)) a: {
				var m = l,
					q = f[l],
					r = a;
				if (r.tagName) {
					if ("a" === r.tagName.toLowerCase()) {
						Ng(m, q, r, void 0);
						break a
					}
					if ("form" === r.tagName.toLowerCase()) {
						Mg(m, q, r);
						break a
					}
				}
				"string" == typeof r && Kg(m, q, r, void 0)
			}
	}

	function Ng(a, b, c, d) {
		if (c.href) {
			var e = Kg(a, b, c.href, void 0 === d ? !1 : d);
			Se.test(e) && (c.href = e)
		}
	}

	function Mg(a, b, c) {
		if (c && c.action) {
			var d = (c.method || "").toLowerCase();
			if ("get" === d) {
				for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
					var k = e[h];
					if (k.name === a) {
						k.setAttribute("value", b);
						f = !0;
						break
					}
				}
				if (!f) {
					var l = E.createElement("input");
					l.setAttribute("type", "hidden");
					l.setAttribute("name", a);
					l.setAttribute("value", b);
					c.appendChild(l)
				}
			} else if ("post" === d) {
				var m = Kg(a, b, c.action);
				Se.test(m) && (c.action = m)
			}
		}
	}
	var ug = function(a) {
			try {
				var b;
				a: {
					for (var c = a, d = 100; c && 0 < d;) {
						if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
							b = c;
							break a
						}
						c = c.parentNode;
						d--
					}
					b = null
				}
				var e = b;
				if (e) {
					var f = e.protocol;
					"http:" !== f && "https:" !== f || Lg(e, e.hostname)
				}
			} catch (h) {}
		},
		vg = function(a) {
			try {
				if (a.action) {
					var b = Xe(Ze(a.action), "host");
					Lg(a, b)
				}
			} catch (c) {}
		},
		Og = function(a, b, c, d) {
			xg();
			yg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
		},
		Pg = function(a, b) {
			xg();
			yg(a, [We(D.location, "host", !0)], b, !0, !0)
		},
		Qg = function() {
			var a = E.location.hostname,
				b = Bg.exec(E.referrer);
			if (!b) return !1;
			var c = b[2],
				d = b[1],
				e = "";
			if (c) {
				var f = c.split("/"),
					h = f[1];
				e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
			} else if (d) {
				if (0 === d.indexOf("xn--")) return !1;
				e = d.replace(/-/g, ".").replace(/\.\./g, "-")
			}
			var k = a.replace(Cg, ""),
				l = e.replace(Cg, ""),
				m;
			if (!(m = k === l)) {
				var q = "." + l;
				m = k.substring(k.length - q.length, k.length) === q
			}
			return m
		},
		Rg = function(a, b) {
			return !1 === a ? !1 : a || b || Qg()
		};
	var Sg = /^\w+$/,
		Tg = /^[\w-]+$/,
		Ug = /^~?[\w-]+$/,
		Vg = {
			aw: "_aw",
			dc: "_dc",
			gf: "_gf",
			ha: "_ha",
			gp: "_gp"
		},
		Wg = function() {
			if (!Tf("gtag_cs_api") || !wf()) return !0;
			var a = vf("ad_storage");
			return null == a ? !0 : !!a
		},
		Xg = function(a) {
			Wg() ? a() : yf(a, "ad_storage")
		};

	function Yg(a) {
		return a && "string" == typeof a && a.match(Sg) ? a : "_gcl"
	}
	var $g = function() {
			var a = Ze(D.location.href),
				b = Xe(a, "query", !1, void 0, "gclid"),
				c = Xe(a, "query", !1, void 0, "gclsrc"),
				d = Xe(a, "query", !1, void 0, "dclid");
			if (!b || !c) {
				var e = a.hash.replace("#", "");
				b = b || Ue(e, "gclid", void 0);
				c = c || Ue(e, "gclsrc", void 0)
			}
			return Zg(b, c, d)
		},
		Zg = function(a, b, c) {
			var d = {},
				e = function(f, h) {
					d[h] || (d[h] = []);
					d[h].push(f)
				};
			d.gclid = a;
			d.gclsrc = b;
			d.dclid = c;
			if (void 0 !== a && a.match(Tg)) switch (b) {
				case void 0:
					e(a, "aw");
					break;
				case "aw.ds":
					e(a, "aw");
					e(a, "dc");
					break;
				case "ds":
					e(a, "dc");
					break;
				case "3p.ds":
					Tf("gtm_3pds") && e(a, "dc");
					break;
				case "gf":
					e(a, "gf");
					break;
				case "ha":
					e(a, "ha");
					break;
				case "gp":
					e(a, "gp")
			}
			c && e(c, "dc");
			return d
		},
		bh = function(a) {
			var b = $g();
			Xg(function() {
				return ah(b, a)
			})
		};

	function ah(a, b, c) {
		function d(m, q) {
			var r = ch(m, e);
			r && (dg(r, q, f), h = !0)
		}
		b = b || {};
		var e = Yg(b.prefix);
		c = c || Ga();
		var f = lg(b, c, !0);
		f.Ca = "ad_storage";
		var h = !1,
			k = Math.round(c / 1E3),
			l = function(m) {
				return ["GCL", k, m].join(".")
			};
		a.aw && (!0 === b.ei ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0])));
		a.dc && d("dc", l(a.dc[0]));
		a.gf && d("gf", l(a.gf[0]));
		a.ha && d("ha", l(a.ha[0]));
		a.gp && d("gp", l(a.gp[0]));
		return h
	}
	var eh = function(a, b) {
			var c = Jg();
			Xg(function() {
				for (var d = Yg(b.prefix), e = 0; e < a.length; ++e) {
					var f = a[e];
					if (void 0 !== Vg[f]) {
						var h = ch(f, d),
							k = c[h];
						if (k) {
							var l = Math.min(dh(k), Ga()),
								m;
							b: {
								for (var q = l, r = Vf(h, E.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
									if (dh(r[u]) > q) {
										m = !0;
										break b
									}
								m = !1
							}
							if (!m) {
								var p = lg(b, l, !0);
								p.Ca = "ad_storage";
								dg(h, k, p)
							}
						}
					}
				}
				ah(Zg(c.gclid, c.gclsrc), b)
			})
		},
		ch = function(a, b) {
			var c = Vg[a];
			if (void 0 !== c) return b + c
		},
		dh = function(a) {
			var b = a.split(".");
			return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
		};

	function fh(a) {
		var b = a.split(".");
		if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
	}
	var gh = function(a, b, c, d, e) {
			if (sa(b)) {
				var f = Yg(e),
					h = function() {
						for (var k = {}, l = 0; l < a.length; ++l) {
							var m = ch(a[l], f);
							if (m) {
								var q = Vf(m, E.cookie, void 0, "ad_storage");
								q.length && (k[m] = q.sort()[q.length - 1])
							}
						}
						return k
					};
				Xg(function() {
					Og(h, b, c, d)
				})
			}
		},
		hh = function(a) {
			return a.filter(function(b) {
				return Ug.test(b)
			})
		},
		ih = function(a, b) {
			for (var c = Yg(b.prefix), d = {}, e = 0; e < a.length; e++) Vg[a[e]] && (d[a[e]] = Vg[a[e]]);
			Xg(function() {
				Aa(d, function(f, h) {
					var k = Vf(c + h, E.cookie, void 0, "ad_storage");
					if (k.length) {
						var l = k[0],
							m = dh(l),
							q = {};
						q[f] = [fh(l)];
						ah(q, b, m)
					}
				})
			})
		};

	function jh(a) {
		for (var b = ["aw", "dc"], c = 0; c < b.length; ++c)
			if (a[b[c]]) return !0;
		return !1
	}
	var kh = function() {
			function a(d, e, f) {
				f && (d[e] = f)
			}
			var b = $g();
			if (jh(b)) {
				var c = {};
				a(c, "gclid", b.gclid);
				a(c, "dclid", b.dclid);
				a(c, "gclsrc", b.gclsrc);
				Pg(function() {
					return c
				}, 3);
				Pg(function() {
					var d = {};
					return d._up = "1", d
				}, 1)
			}
		},
		lh = function() {
			var a;
			if (Wg()) {
				for (var b = [], c = E.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
					var f = c[e].match(d);
					f && b.push({
						nd: f[1],
						value: f[2]
					})
				}
				var h = {};
				if (b && b.length)
					for (var k = 0; k < b.length; k++) {
						var l = b[k].value.split(".");
						"1" == l[0] && 3 == l.length && l[1] && (h[b[k].nd] || (h[b[k].nd] = []), h[b[k].nd].push({
							timestamp: l[1],
							vg: l[2]
						}))
					}
				a = h
			} else a = {};
			return a
		};

	function mh() {
		var a = !1;
		return a
	}

	function nh(a) {
		function b(l) {
			var m;
			Qc.reported_gclid || (Qc.reported_gclid = {});
			m = Qc.reported_gclid;
			var q = d + (l ? "gcu" : "gcs");
			if (!m[q]) {
				m[q] = !0;
				var r = [],
					u = function(v, w) {
						w && r.push(v + "=" + encodeURIComponent(w))
					},
					p = d;
				u("gclid", p);
				u("gclsrc", e);
				var t = "https://www.google.com/pagead/landing?" + r.join("&");
				uc(t)
			}
		}
		var c = $g(),
			d = c.gclid || "",
			e = c.gclsrc,
			f = !a && (!d || e && "aw.ds" !== e ? !1 : !0),
			h = mh();
		if (f || h) {
			var k = "" + gg();
			b();
		}
	};
	var oh;
	if (3 === I.Kb.length) oh = "g";
	else {
		var ph = "G";
		oh = ph
	}
	var qh = {
			"": "n",
			UA: "u",
			AW: "a",
			DC: "d",
			G: "e",
			GF: "f",
			HA: "h",
			GTM: oh,
			OPT: "o"
		},
		rh = function(a) {
			var b = I.s.split("-"),
				c = b[0].toUpperCase(),
				d = qh[c] || "i",
				e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
				f;
			if (3 === I.Kb.length) {
				var h = void 0;
				f = "2" + (h || "w")
			} else f = "";
			return f + d + I.Kb + e
		};
	var Bh = ["1"],
		Ch = {},
		Gh = function(a) {
			var b = Dh(a.prefix);
			Ch[b] || Eh(b, a.path, a.domain) || (Fh(b, gg(), a), Eh(b, a.path, a.domain))
		};

	function Fh(a, b, c) {
		var d = kg(b, "1", c.domain, c.path),
			e = lg(c);
		e.Ca = "ad_storage";
		dg(a, d, e)
	}

	function Eh(a, b, c) {
		var d = jg(a, b, c, Bh, "ad_storage");
		d && (Ch[a] = d);
		return d
	}

	function Dh(a) {
		return (a || "_gcl") + "_au"
	};
	var Hh = /^\d+\.fls\.doubleclick\.net$/;

	function Ih(a) {
		Cf("ad_storage") ? a() : yf(a, "ad_storage")
	}

	function Jh(a) {
		var b = Ze(D.location.href),
			c = Xe(b, "host", !1);
		if (c && c.match(Hh)) {
			var d = Xe(b, "path").split(a + "=");
			if (1 < d.length) return d[1].split(";")[0].split("?")[0]
		}
	}

	function Kh(a, b) {
		if ("aw" == a || "dc" == a) {
			var c = Jh("gcl" + a);
			if (c) return c.split(".")
		}
		var d = Yg(b);
		if (Cf("ad_storage") && "_gcl" == d) {
			var e;
			e = $g()[a] || [];
			if (0 < e.length) return e
		}
		var f = ch(a, d),
			h;
		if (f) {
			var k = [];
			if (E.cookie) {
				var l = Vf(f, E.cookie, void 0, "ad_storage");
				if (l && 0 != l.length) {
					for (var m = 0; m < l.length; m++) {
						var q = fh(l[m]);
						q && -1 === n(k, q) && k.push(q)
					}
					h = hh(k)
				} else h = k
			} else h = k
		} else h = [];
		return h
	}
	var Lh = function() {
			var a = Jh("gac");
			if (a) return decodeURIComponent(a);
			var b = lh(),
				c = [];
			Aa(b, function(d, e) {
				for (var f = [], h = 0; h < e.length; h++) f.push(e[h].vg);
				f = hh(f);
				f.length && c.push(d + ":" + f.join(","))
			});
			return c.join(";")
		},
		Mh = function(a, b) {
			var c = $g().dc || [];
			Ih(function() {
				Gh(b);
				var d = Ch[Dh(b.prefix)],
					e = !1;
				if (d && 0 < c.length) {
					var f = Qc.joined_au = Qc.joined_au || {},
						h = b.prefix || "_gcl";
					if (!f[h])
						for (var k = 0; k < c.length; k++) {
							var l = "https://adservice.google.com/ddm/regclk";
							l = l + "?gclid=" + c[k] + "&auiddc=" + d;
							uc(l);
							e = f[h] = !0
						}
				}
				null == a && (a = e);
				if (a && d) {
					var m = Dh(b.prefix),
						q = Ch[m];
					q && Fh(m, q, b)
				}
			})
		};
	var Gi = {},
		Hi = ["G", "GP"];
	Gi.Ve = "";
	var Ii = Gi.Ve.split(",");

	function Ji() {
		var a = Qc;
		return a.gcq = a.gcq || new Ki
	}
	var Li = function(a, b, c) {
			Ji().register(a, b, c)
		},
		Mi = function(a, b, c, d) {
			Ji().push("event", [b, a], c, d)
		},
		Ni = function(a, b) {
			Ji().push("config", [a], b)
		},
		Oi = {},
		Pi = function(a) {
			return !0
		},
		Qi = function() {
			this.status = 1;
			this.containerConfig = {};
			this.targetConfig = {};
			this.i = {};
			this.m = null;
			this.h = !1
		},
		Ri = function(a, b, c, d, e) {
			this.type = a;
			this.m = b;
			this.Y = c || "";
			this.h = d;
			this.i = e
		},
		Ki = function() {
			this.m = {};
			this.i = {};
			this.h = []
		},
		Si = function(a, b) {
			var c = Rd(b);
			return a.m[c.containerId] = a.m[c.containerId] || new Qi
		},
		Ti = function(a, b, c) {
			if (b) {
				var d = Rd(b);
				if (d && 1 === Si(a, b).status && Pi(d.prefix)) {
					Si(a, b).status = 2;
					var e = {};
					vd && (e.timeoutId = D.setTimeout(function() {
						J("GTM", 38);
						gd()
					}, 3E3));
					a.push("require", [e], d.containerId);
					Oi[d.containerId] = Ga();
					if (Ud()) {} else {
						var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
							k = ("http:" != D.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h),
							l = Gf(c, h) || k;
						kc(l)
					}
				}
			}
		},
		Ui = function(a, b, c, d) {
			if (d.Y) {
				var e = Si(a, d.Y),
					f = e.m;
				if (f) {
					var h = C(c),
						k = C(e.targetConfig[d.Y]),
						l = C(e.containerConfig),
						m = C(e.i),
						q = C(a.i),
						r = Fd("gtm.uniqueEventId"),
						u = Rd(d.Y).prefix,
						p = Pf(Of(Nf(Mf(Lf(Kf(Jf(h), k), l), m), q), function() {
							zd(r, u, "2");
						}), function() {
							zd(r, u, "3");
						});
					try {
						zd(r, u, "1");
						f(d.Y, b, d.m, p)
					} catch (t) {
						zd(r, u, "4");
					}
				}
			}
		};
	Ki.prototype.register = function(a, b, c) {
		if (3 !== Si(this, a).status) {
			Si(this, a).m = b;
			Si(this, a).status = 3;
			c && (Si(this, a).i = c);
			var d = Rd(a),
				e = Oi[d.containerId];
			if (void 0 !== e) {
				var f = Qc[d.containerId].bootstrap,
					h = d.prefix.toUpperCase();
				Qc[d.containerId]._spx && (h = h.toLowerCase());
				var k = Fd("gtm.uniqueEventId"),
					l = h,
					m = Ga() - f;
				if (vd && !md[k]) {
					k !== id && (fd(), id = k);
					var q = l + "." + Math.floor(f - e) + "." + Math.floor(m);
					rd = rd ? rd + "," + q : "&cl=" + q
				}
				delete Oi[d.containerId]
			}
			this.flush()
		}
	};
	Ki.prototype.push = function(a, b, c, d) {
		var e = Math.floor(Ga() / 1E3);
		Ti(this, c, b[0][Q.xa] || this.i[Q.xa]);
		this.h.push(new Ri(a, e, c, b, d));
		d || this.flush()
	};
	Ki.prototype.flush = function(a) {
		for (var b = this; this.h.length;) {
			var c = this.h[0];
			if (c.i) c.i = !1, this.h.push(c);
			else switch (c.type) {
				case "require":
					if (3 !== Si(this, c.Y).status && !a) return;
					vd && D.clearTimeout(c.h[0].timeoutId);
					break;
				case "set":
					Aa(c.h[0], function(l, m) {
						C(Ma(l, m), b.i)
					});
					break;
				case "config":
					var d = c.h[0],
						e = !!d[Q.bc];
					delete d[Q.bc];
					var f = Si(this, c.Y),
						h = Rd(c.Y),
						k = h.containerId === h.id;
					e || (k ? f.containerConfig = {} : f.targetConfig[c.Y] = {});
					f.h && e || Ui(this, Q.D, d, c);
					f.h = !0;
					delete d[Q.ra];
					k ? C(d, f.containerConfig) : C(d, f.targetConfig[c.Y]);
					break;
				case "event":
					Ui(this, c.h[1], c.h[0], c)
			}
			this.h.shift()
		}
	};
	var Vi = ["GP", "G"],
		Wi = "G".split(/,/);
	Wi.push("GF");
	Wi.push("HA");
	var Xi = !1;
	Xi = !0;
	var Yi = null,
		Zi = {},
		$i = {},
		aj;

	function bj(a, b) {
		var c = {
			event: a
		};
		b && (c.eventModel = C(b), b[Q.yc] && (c.eventCallback = b[Q.yc]), b[Q.Fb] && (c.eventTimeout = b[Q.Fb]));
		return c
	}
	var hj = {
		config: function(a) {},
		event: function(a) {
			var b = a[1];
			if (g(b) && !(3 < a.length)) {
				var c;
				if (2 < a.length) {
					if (!Ra(a[2]) && void 0 != a[2]) return;
					c = a[2]
				}
				var d = bj(b, c);
				return d
			}
		},
		js: function(a) {
			if (2 == a.length && a[1].getTime) return {
				event: "gtm.js",
				"gtm.start": a[1].getTime()
			}
		},
		policy: function() {},
		set: function(a) {
			var b;
			2 == a.length && Ra(a[1]) ? b = C(a[1]) : 3 == a.length && g(a[1]) && (b = {}, Ra(a[2]) || sa(a[2]) ? b[a[1]] = C(a[2]) : b[a[1]] = a[2]);
			if (b) {
				b._clear = !0;
				return b
			}
		}
	};
	var ij = {
		policy: !0
	};
	var jj = function(a, b) {
			var c = a.hide;
			if (c && void 0 !== c[b] && c.end) {
				c[b] = !1;
				var d = !0,
					e;
				for (e in c)
					if (c.hasOwnProperty(e) && !0 === c[e]) {
						d = !1;
						break
					}
				d && (c.end(), c.end = null)
			}
		},
		lj = function(a) {
			var b = kj(),
				c = b && b.hide;
			c && c.end && (c[a] = !0)
		};
	var mj = !1,
		nj = [];

	function oj() {
		if (!mj) {
			mj = !0;
			for (var a = 0; a < nj.length; a++) H(nj[a])
		}
	}
	var pj = function(a) {
		mj ? H(a) : nj.push(a)
	};
	var Hj = function(a) {
		if (Gj(a)) return a;
		this.h = a
	};
	Hj.prototype.zg = function() {
		return this.h
	};
	var Gj = function(a) {
		return !a || "object" !== Pa(a) || Ra(a) ? !1 : "getUntrustedUpdateValue" in a
	};
	Hj.prototype.getUntrustedUpdateValue = Hj.prototype.zg;
	var Ij = [],
		Jj = !1,
		Kj = function(a) {
			return D["dataLayer"].push(a)
		},
		Lj = function(a) {
			var b = Qc["dataLayer"],
				c = b ? b.subscribers : 1,
				d = 0;
			return function() {
				++d === c && a()
			}
		};

	function Mj(a) {
		var b = a._clear;
		Aa(a, function(f, h) {
			"_clear" !== f && (b && Jd(f, void 0), Jd(f, h))
		});
		Vc || (Vc = a["gtm.start"]);
		var c = a.event;
		if (!c) return !1;
		var d = a["gtm.uniqueEventId"];
		d || (d = ad(), a["gtm.uniqueEventId"] = d, Jd("gtm.uniqueEventId", d));
		Xc = c;
		var e = Nj(a);
		Xc = null;
		switch (c) {
			case "gtm.init":
				J("GTM", 19), e && J("GTM", 20)
		}
		return e
	}

	function Nj(a) {
		var b = a.event,
			c = a["gtm.uniqueEventId"],
			d, e = Qc.zones;
		d = e ? e.checkState(I.s, c) : pe;
		return d.active ? of (c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
	}

	function Oj() {
		for (var a = !1; !Jj && 0 < Ij.length;) {
			Jj = !0;
			delete Cd.eventModel;
			Ed();
			var b = Ij.shift();
			if (null != b) {
				var c = Gj(b);
				if (c) {
					var d = b;
					b = Gj(d) ? d.getUntrustedUpdateValue() : void 0;
					for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
						var h = e[f],
							k = Fd(h, 1);
						if (sa(k) || Ra(k)) k = C(k);
						Dd[h] = k
					}
				}
				try {
					if (qa(b)) try {
						b.call(Gd)
					} catch (v) {} else if (sa(b)) {
						var l = b;
						if (g(l[0])) {
							var m = l[0].split("."),
								q = m.pop(),
								r = l.slice(1),
								u = Fd(m.join("."), 2);
							if (void 0 !== u && null !== u) try {
								u[q].apply(u, r)
							} catch (v) {}
						}
					} else {
						var p = b;
						if (p && ("[object Arguments]" == Object.prototype.toString.call(p) || Object.prototype.hasOwnProperty.call(p, "callee"))) {
							a: {
								if (b.length && g(b[0])) {
									var t = hj[b[0]];
									if (t && (!c || !ij[b[0]])) {
										b = t(b);
										break a
									}
								}
								b = void 0
							}
							if (!b) {
								Jj = !1;
								continue
							}
						}
						a = Mj(b) || a
					}
				} finally {
					c && Ed(!0)
				}
			}
			Jj = !1
		}
		return !a
	}

	function Pj() {
		var a = Oj();
		try {
			jj(D["dataLayer"], I.s)
		} catch (b) {}
		return a
	}
	var Rj = function() {
			var a = ic("dataLayer", []),
				b = ic("google_tag_manager", {});
			b = b["dataLayer"] = b["dataLayer"] || {};
			xe(function() {
				b.gtmDom || (b.gtmDom = !0, a.push({
					event: "gtm.dom"
				}))
			});
			pj(function() {
				b.gtmLoad || (b.gtmLoad = !0, a.push({
					event: "gtm.load"
				}))
			});
			b.subscribers = (b.subscribers || 0) + 1;
			var c = a.push;
			a.push = function() {
				var d;
				if (0 < Qc.SANDBOXED_JS_SEMAPHORE) {
					d = [];
					for (var e = 0; e < arguments.length; e++) d[e] = new Hj(arguments[e])
				} else d = [].slice.call(arguments, 0);
				var f = c.apply(a, d);
				Ij.push.apply(Ij, d);
				if (300 < this.length)
					for (J("GTM", 4); 300 < this.length;) this.shift();
				var h = "boolean" !== typeof f || f;
				return Oj() && h
			};
			Ij.push.apply(Ij, a.slice(0));
			Qj() && H(Pj)
		},
		Qj = function() {
			var a = !0;
			return a
		};
	var Sj = {};
	Sj.Gb = new String("undefined");
	var Tj = function(a) {
		this.h = function(b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Sj.Gb ? b : a[d]);
			return c.join("")
		}
	};
	Tj.prototype.toString = function() {
		return this.h("undefined")
	};
	Tj.prototype.valueOf = Tj.prototype.toString;
	Sj.Df = Tj;
	Sj.Hc = {};
	Sj.ig = function(a) {
		return new Tj(a)
	};
	var Uj = {};
	Sj.jh = function(a, b) {
		var c = ad();
		Uj[c] = [a, b];
		return c
	};
	Sj.ke = function(a) {
		var b = a ? 0 : 1;
		return function(c) {
			var d = Uj[c];
			if (d && "function" === typeof d[b]) d[b]();
			Uj[c] = void 0
		}
	};
	Sj.Ig = function(a) {
		for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
		return b && c
	};
	Sj.$g = function(a) {
		if (a === Sj.Gb) return a;
		var b = ad();
		Sj.Hc[b] = a;
		return 'google_tag_manager["' + I.s + '"].macro(' + b + ")"
	};
	Sj.Sg = function(a, b, c) {
		a instanceof Sj.Df && (a = a.h(Sj.jh(b, c)), b = pa);
		return {
			Tc: a,
			C: b
		}
	};
	var Vj = function(a, b, c) {
			function d(f, h) {
				var k = f[h];
				return k
			}
			var e = {
				event: b,
				"gtm.element": a,
				"gtm.elementClasses": d(a, "className"),
				"gtm.elementId": a["for"] || qc(a, "id") || "",
				"gtm.elementTarget": a.formTarget || d(a, "target") || ""
			};
			c && (e["gtm.triggers"] = c.join(","));
			e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase || "";
			return e
		},
		Wj = function(a) {
			Qc.hasOwnProperty("autoEventsSettings") || (Qc.autoEventsSettings = {});
			var b = Qc.autoEventsSettings;
			b.hasOwnProperty(a) || (b[a] = {});
			return b[a]
		},
		Xj = function(a, b, c) {
			Wj(a)[b] = c
		},
		Yj = function(a, b, c, d) {
			var e = Wj(a),
				f = Ha(e, b, d);
			e[b] = c(f)
		},
		Zj = function(a, b, c) {
			var d = Wj(a);
			return Ha(d, b, c)
		};
	var ak = ["input", "select", "textarea"],
		bk = ["button", "hidden", "image", "reset", "submit"],
		ck = function(a) {
			var b = a.tagName.toLowerCase();
			return !wa(ak, function(c) {
				return c === b
			}) || "input" === b && wa(bk, function(c) {
				return c === a.type.toLowerCase()
			}) ? !1 : !0
		},
		dk = function(a) {
			return a.form ? a.form.tagName ? a.form : E.getElementById(a.form) : tc(a, ["form"], 100)
		},
		ek = function(a, b, c) {
			if (!a.elements) return 0;
			for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
				var h = a.elements[e];
				if (ck(h)) {
					if (h.getAttribute(c) === d) return f;
					f++
				}
			}
			return 0
		};
	var fk = !!D.MutationObserver,
		gk = void 0,
		hk = function(a) {
			if (!gk) {
				var b = function() {
					var c = E.body;
					if (c)
						if (fk)(new MutationObserver(function() {
							for (var e = 0; e < gk.length; e++) H(gk[e])
						})).observe(c, {
							childList: !0,
							subtree: !0
						});
						else {
							var d = !1;
							oc(c, "DOMNodeInserted", function() {
								d || (d = !0, H(function() {
									d = !1;
									for (var e = 0; e < gk.length; e++) H(gk[e])
								}))
							})
						}
				};
				gk = [];
				E.body ? b() : H(b)
			}
			gk.push(a)
		};
	var Ck = D.clearTimeout,
		Dk = D.setTimeout,
		U = function(a, b, c) {
			if (Ud()) {
				b && H(b)
			} else return kc(a, b, c)
		},
		Ek = function() {
			return D.location.href
		},
		Fk = function(a) {
			return Xe(Ze(a), "fragment")
		},
		Gk = function(a) {
			return Ye(Ze(a))
		},
		V = function(a, b) {
			return Fd(a, b || 2)
		},
		Hk = function(a, b, c) {
			var d;
			b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Kj(a)) : d = Kj(a);
			return d
		},
		Ik = function(a, b) {
			D[a] = b
		},
		W = function(a, b, c) {
			b && (void 0 === D[a] || c && !D[a]) && (D[a] = b);
			return D[a]
		},
		Jk = function(a, b, c) {
			return Vf(a, b, void 0 === c ? !0 : !!c)
		},
		Kk = function(a, b) {
			if (Ud()) {
				b && H(b)
			} else mc(a, b)
		},
		Lk = function(a) {
			return !!Zj(a, "init", !1)
		},
		Mk = function(a) {
			Xj(a, "init", !0)
		},
		Nk = function(a, b) {
			var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Uc;
			c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
			U(T("https://", "http://", c))
		},
		Ok = function(a, b) {
			var c = a[b];
			return c
		};
	var Pk = Sj.Sg;
	var ll = new ya;

	function ml(a, b) {
		function c(h) {
			var k = Ze(h),
				l = Xe(k, "protocol"),
				m = Xe(k, "host", !0),
				q = Xe(k, "port"),
				r = Xe(k, "path").toLowerCase().replace(/\/$/, "");
			if (void 0 === l || "http" == l && "80" == q || "https" == l && "443" == q) l = "web", q = "default";
			return [l, m, q, r]
		}
		for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
			if (d[f] !== e[f]) return !1;
		return !0
	}

	function nl(a) {
		return ol(a) ? 1 : 0
	}

	function ol(a) {
		var b = a.arg0,
			c = a.arg1;
		if (a.any_of && sa(c)) {
			for (var d = 0; d < c.length; d++)
				if (nl({
						"function": a["function"],
						arg0: b,
						arg1: c[d]
					})) return !0;
			return !1
		}
		switch (a["function"]) {
			case "_cn":
				return 0 <= String(b).indexOf(String(c));
			case "_css":
				var e;
				a: {
					if (b) {
						var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
						try {
							for (var h = 0; h < f.length; h++)
								if (b[f[h]]) {
									e = b[f[h]](c);
									break a
								}
						} catch (v) {}
					}
					e = !1
				}
				return e;
			case "_ew":
				var k, l;
				k = String(b);
				l = String(c);
				var m = k.length - l.length;
				return 0 <= m && k.indexOf(l, m) == m;
			case "_eq":
				return String(b) == String(c);
			case "_ge":
				return Number(b) >= Number(c);
			case "_gt":
				return Number(b) > Number(c);
			case "_lc":
				var q;
				q = String(b).split(",");
				return 0 <= n(q, String(c));
			case "_le":
				return Number(b) <= Number(c);
			case "_lt":
				return Number(b) < Number(c);
			case "_re":
				var r;
				var u = a.ignore_case ? "i" : void 0;
				try {
					var p = String(c) + u,
						t = ll.get(p);
					t || (t = new RegExp(c, u), ll.set(p, t));
					r = t.test(b)
				} catch (v) {
					r = !1
				}
				return r;
			case "_sw":
				return 0 == String(b).indexOf(String(c));
			case "_um":
				return ml(b, c)
		}
		return !1
	};
	var pl = function(a, b) {
		var c = function() {};
		c.prototype = a.prototype;
		var d = new c;
		a.apply(d, Array.prototype.slice.call(arguments, 1));
		return d
	};
	var ql = {},
		rl = encodeURI,
		X = encodeURIComponent,
		sl = nc;
	var tl = function(a, b) {
		if (!a) return !1;
		var c = Xe(Ze(a), "host");
		if (!c) return !1;
		for (var d = 0; b && d < b.length; d++) {
			var e = b[d] && b[d].toLowerCase();
			if (e) {
				var f = c.length - e.length;
				0 < f && "." != e.charAt(0) && (f--, e = "." + e);
				if (0 <= f && c.indexOf(e, f) == f) return !0
			}
		}
		return !1
	};
	var ul = function(a, b, c) {
		for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
		return e ? d : null
	};
	ql.Jg = function() {
		var a = !1;
		return a
	};
	var Im = function() {
		var a = D.gaGlobal = D.gaGlobal || {};
		a.hid = a.hid || xa();
		return a.hid
	};
	var Tm = window,
		Um = document,
		Vm = function(a) {
			var b = Tm._gaUserPrefs;
			if (b && b.ioo && b.ioo() || a && !0 === Tm["ga-disable-" + a]) return !0;
			try {
				var c = Tm.external;
				if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
			} catch (f) {}
			for (var d = Rf("AMP_TOKEN", String(Um.cookie), !0), e = 0; e < d.length; e++)
				if ("$OPT_OUT" == d[e]) return !0;
			return Um.getElementById("__gaOptOutExtension") ? !0 : !1
		};
	var Ym = function(a) {
		Aa(a, function(c) {
			"_" === c.charAt(0) && delete a[c]
		});
		var b = a[Q.ja] || {};
		Aa(b, function(c) {
			"_" === c.charAt(0) && delete b[c]
		})
	};
	var bn = function(a, b, c) {
			Mi(b, c, a)
		},
		cn = function(a, b, c) {
			Mi(b, c, a, !0)
		},
		en = function(a, b) {};

	function dn(a, b) {}
	var Y = {
		a: {}
	};
	Y.a.jsm = ["customScripts"],
		function() {
			(function(a) {
				Y.__jsm = a;
				Y.__jsm.b = "jsm";
				Y.__jsm.g = !0;
				Y.__jsm.priorityOverride = 0
			})(function(a) {
				if (void 0 !== a.vtp_javascript) {
					var b = a.vtp_javascript;
					try {
						var c = W("google_tag_manager");
						return c && c.e && c.e(b)
					} catch (d) {}
				}
			})
		}();
	Y.a.sp = ["google"],
		function() {
			(function(a) {
				Y.__sp = a;
				Y.__sp.b = "sp";
				Y.__sp.g = !0;
				Y.__sp.priorityOverride = 0
			})(function(a) {
				var b = -1 == navigator.userAgent.toLowerCase().indexOf("firefox") ? "//www.googleadservices.com/pagead/conversion_async.js" : "https://www.google.com/pagead/conversion_async.js",
					c = a.vtp_gtmOnFailure;
				Ge();
				U(b, function() {
					var d = W("google_trackConversion");
					if (qa(d)) {
						var e = {};
						"DATA_LAYER" == a.vtp_customParamsFormat ? e = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (e = ul(a.vtp_customParams, "key", "value"));
						var f = {};
						a.vtp_enableDynamicRemarketing && (a.vtp_eventName && (e.event = a.vtp_eventName), a.vtp_eventValue && (f.value = a.vtp_eventValue), a.vtp_eventItems && (f.items = a.vtp_eventItems));
						var h = {
							google_conversion_id: a.vtp_conversionId,
							google_conversion_label: a.vtp_conversionLabel,
							google_custom_params: e,
							google_gtag_event_data: f,
							google_remarketing_only: !0,
							onload_callback: a.vtp_gtmOnSuccess,
							google_gtm: rh()
						};
						a.vtp_rdp && (h.google_restricted_data_processing = !0);
						a.vtp_userId && (h.google_user_id = a.vtp_userId);
						d(h) || c()
					} else c()
				}, c)
			})
		}();
	Y.a.d = ["google"],
		function() {
			(function(a) {
				Y.__d = a;
				Y.__d.b = "d";
				Y.__d.g = !0;
				Y.__d.priorityOverride = 0
			})(function(a) {
				var b = null,
					c = null,
					d = a.vtp_attributeName;
				if ("CSS" == a.vtp_selectorType) {
					var e = xc(a.vtp_elementSelector);
					e && 0 < e.length && (b = e[0])
				} else b = E.getElementById(a.vtp_elementId);
				b && (d ? c = qc(b, d) : c = rc(b));
				return Fa(String(b && c))
			})
		}();
	Y.a.e = ["google"],
		function() {
			(function(a) {
				Y.__e = a;
				Y.__e.b = "e";
				Y.__e.g = !0;
				Y.__e.priorityOverride = 0
			})(function(a) {
				return String(Ld(a.vtp_gtmEventId, "event"))
			})
		}();
	Y.a.f = ["google"],
		function() {
			(function(a) {
				Y.__f = a;
				Y.__f.b = "f";
				Y.__f.g = !0;
				Y.__f.priorityOverride = 0
			})(function(a) {
				var b = V("gtm.referrer", 1) || E.referrer;
				return b ? a.vtp_component && "URL" != a.vtp_component ? Xe(Ze(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Gk(String(b)) : String(b)
			})
		}();
	Y.a.cl = ["google"],
		function() {
			function a(b) {
				var c = b.target;
				if (c) {
					var d = Vj(c, "gtm.click");
					Hk(d)
				}
			}(function(b) {
				Y.__cl = b;
				Y.__cl.b = "cl";
				Y.__cl.g = !0;
				Y.__cl.priorityOverride = 0
			})(function(b) {
				if (!Lk("cl")) {
					var c = W("document");
					oc(c, "click", a, !0);
					Mk("cl")
				}
				H(b.vtp_gtmOnSuccess)
			})
		}();
	Y.a.k = ["google"],
		function() {
			(function(a) {
				Y.__k = a;
				Y.__k.b = "k";
				Y.__k.g = !0;
				Y.__k.priorityOverride = 0
			})(function(a) {
				return Jk(a.vtp_name, V("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
			})
		}();
	Y.a.u = ["google"],
		function() {
			var a = function(b) {
				return {
					toString: function() {
						return b
					}
				}
			};
			(function(b) {
				Y.__u = b;
				Y.__u.b = "u";
				Y.__u.g = !0;
				Y.__u.priorityOverride = 0
			})(function(b) {
				var c;
				b.vtp_customUrlSource ? c = b.vtp_customUrlSource : c = V("gtm.url", 1);
				c = c || Ek();
				var d = b[a("vtp_component")];
				if (!d || "URL" == d) return Gk(String(c));
				var e = Ze(String(c)),
					f;
				if ("QUERY" === d) a: {
					var h = b[a("vtp_multiQueryKeys").toString()],
						k = b[a("vtp_queryKey").toString()] || "",
						l = b[a("vtp_ignoreEmptyQueryParam").toString()],
						m;h ? sa(k) ? m = k : m = String(k).replace(/\s+/g, "").split(",") : m = [String(k)];
					for (var q = 0; q < m.length; q++) {
						var r = Xe(e, "QUERY", void 0, void 0, m[q]);
						if (void 0 != r && (!l || "" !== r)) {
							f = r;
							break a
						}
					}
					f = void 0
				}
				else f = Xe(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
				return f
			})
		}();
	Y.a.v = ["google"],
		function() {
			(function(a) {
				Y.__v = a;
				Y.__v.b = "v";
				Y.__v.g = !0;
				Y.__v.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_name;
				if (!b || !b.replace) return !1;
				var c = V(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
				return void 0 !== c ? c : a.vtp_defaultValue
			})
		}();
	Y.a.ua = ["google"],
		function() {
			var a, b = {},
				c = function(d) {
					var e = {},
						f = {},
						h = {},
						k = {},
						l = {},
						m = void 0;
					if (d.vtp_gaSettings) {
						var q = d.vtp_gaSettings;
						C(ul(q.vtp_fieldsToSet, "fieldName", "value"), f);
						C(ul(q.vtp_contentGroup, "index", "group"), h);
						C(ul(q.vtp_dimension, "index", "dimension"), k);
						C(ul(q.vtp_metric, "index", "metric"), l);
						d.vtp_gaSettings = null;
						q.vtp_fieldsToSet = void 0;
						q.vtp_contentGroup = void 0;
						q.vtp_dimension = void 0;
						q.vtp_metric = void 0;
						var r = C(q);
						d = C(d, r)
					}
					C(ul(d.vtp_fieldsToSet, "fieldName", "value"), f);
					C(ul(d.vtp_contentGroup, "index", "group"), h);
					C(ul(d.vtp_dimension, "index", "dimension"), k);
					C(ul(d.vtp_metric, "index", "metric"), l);
					var u = Ne(d.vtp_functionName);
					if (qa(u)) {
						var p = "",
							t = "";
						d.vtp_setTrackerName && "string" == typeof d.vtp_trackerName ? "" !== d.vtp_trackerName && (t = d.vtp_trackerName, p = t + ".") : (t = "gtm" + ad(), p = t + ".");
						var v = {
								name: !0,
								clientId: !0,
								sampleRate: !0,
								siteSpeedSampleRate: !0,
								alwaysSendReferrer: !0,
								allowAnchor: !0,
								allowLinker: !0,
								cookieName: !0,
								cookieDomain: !0,
								cookieExpires: !0,
								cookiePath: !0,
								cookieUpdate: !0,
								cookieFlags: !0,
								legacyCookieDomain: !0,
								legacyHistoryImport: !0,
								storage: !0,
								useAmpClientId: !0,
								storeGac: !0
							},
							w = {
								allowAnchor: !0,
								allowLinker: !0,
								alwaysSendReferrer: !0,
								anonymizeIp: !0,
								cookieUpdate: !0,
								exFatal: !0,
								forceSSL: !0,
								javaEnabled: !0,
								legacyHistoryImport: !0,
								nonInteraction: !0,
								useAmpClientId: !0,
								useBeacon: !0,
								storeGac: !0,
								allowAdFeatures: !0,
								allowAdPersonalizationSignals: !0
							},
							x = function(O) {
								var K = [].slice.call(arguments, 0);
								K[0] = p + K[0];
								u.apply(window, K)
							},
							y = function(O, K) {
								return void 0 === K ? K : O(K)
							},
							B = function(O, K) {
								if (K)
									for (var ua in K) K.hasOwnProperty(ua) && x("set", O + ua, K[ua])
							},
							z = function() {},
							A = function(O, K, ua) {
								var Qb = 0;
								if (O)
									for (var Ea in O)
										if (O.hasOwnProperty(Ea) && (ua && v[Ea] || !ua && void 0 === v[Ea])) {
											var ab = w[Ea] ? Ca(O[Ea]) : O[Ea];
											"anonymizeIp" != Ea || ab || (ab = void 0);
											K[Ea] = ab;
											Qb++
										}
								return Qb
							},
							F = {
								name: t
							};
						A(f, F, !0);
						u("create", d.vtp_trackingId || e.trackingId, F);
						x("set", "&gtm", rh(!0));
						d.vtp_enableRecaptcha && x("require", "recaptcha", "recaptcha.js");
						(function(O, K) {
							void 0 !== d[K] && x("set", O, d[K])
						})("nonInteraction", "vtp_nonInteraction");
						B("contentGroup", h);
						B("dimension", k);
						B("metric", l);
						var G = {};
						A(f, G, !1) && x("set", G);
						var L;
						d.vtp_enableLinkId && x("require", "linkid", "linkid.js");
						x("set", "hitCallback", function() {
							var O = f && f.hitCallback;
							qa(O) && O();
							d.vtp_gtmOnSuccess()
						});
						if ("TRACK_EVENT" == d.vtp_trackType) {
							d.vtp_enableEcommerce && (x("require", "ec", "ec.js"), z());
							var R = {
								hitType: "event",
								eventCategory: String(d.vtp_eventCategory || e.category),
								eventAction: String(d.vtp_eventAction || e.action),
								eventLabel: y(String, d.vtp_eventLabel || e.label),
								eventValue: y(Ba, d.vtp_eventValue || e.value)
							};
							A(L, R, !1);
							x("send", R);
						} else if ("TRACK_SOCIAL" == d.vtp_trackType) {} else if ("TRACK_TRANSACTION" == d.vtp_trackType) {} else if ("TRACK_TIMING" == d.vtp_trackType) {} else if ("DECORATE_LINK" == d.vtp_trackType) {} else if ("DECORATE_FORM" == d.vtp_trackType) {} else if ("TRACK_DATA" == d.vtp_trackType) {} else {
							d.vtp_enableEcommerce && (x("require", "ec", "ec.js"), z());
							if (d.vtp_doubleClick || "DISPLAY_FEATURES" == d.vtp_advertisingFeaturesType) {
								var ta = "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
								x("require", "displayfeatures", void 0, {
									cookieName: ta
								})
							}
							if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == d.vtp_advertisingFeaturesType) {
								var oa = "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
								x("require", "adfeatures", {
									cookieName: oa
								})
							}
							L ? x("send", "pageview", L) : x("send", "pageview");
						}
						if (!a) {
							var va = d.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
							d.vtp_useInternalVersion && !d.vtp_useDebugVersion && (va = "internal/" + va);
							a = !0;
							var cb = T("https:", "http:", "//www.google-analytics.com/" + va, f && f.forceSSL);
							U(cb, function() {
								var O = Le();
								O && O.loaded || d.vtp_gtmOnFailure();
							}, d.vtp_gtmOnFailure)
						}
					} else H(d.vtp_gtmOnFailure)
				};
			Y.__ua = c;
			Y.__ua.b = "ua";
			Y.__ua.g = !0;
			Y.__ua.priorityOverride = 0
		}();
	Y.a.aev = ["google"],
		function() {
			function a(p, t) {
				var v = Ld(p, "gtm");
				if (v) return v[t]
			}

			function b(p, t, v, w) {
				w || (w = "element");
				var x = p + "." + t,
					y;
				if (q.hasOwnProperty(x)) y = q[x];
				else {
					var B = a(p, w);
					if (B && (y = v(B), q[x] = y, r.push(x), 35 < r.length)) {
						var z = r.shift();
						delete q[z]
					}
				}
				return y
			}

			function c(p, t, v) {
				var w = a(p, u[t]);
				return void 0 !== w ? w : v
			}

			function d(p, t) {
				if (!p) return !1;
				var v = e(Ek());
				sa(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
				for (var w = [v], x = 0; x < t.length; x++)
					if (t[x] instanceof RegExp) {
						if (t[x].test(p)) return !1
					} else {
						var y = t[x];
						if (0 != y.length) {
							if (0 <= e(p).indexOf(y)) return !1;
							w.push(e(y))
						}
					}
				return !tl(p, w)
			}

			function e(p) {
				m.test(p) || (p = "http://" + p);
				return Xe(Ze(p), "HOST", !0)
			}

			function f(p, t, v) {
				switch (p) {
					case "SUBMIT_TEXT":
						return b(t, "FORM." + p, h, "formSubmitElement") || v;
					case "LENGTH":
						var w = b(t, "FORM." + p, k);
						return void 0 === w ? v : w;
					case "INTERACTED_FIELD_ID":
						return l(t, "id", v);
					case "INTERACTED_FIELD_NAME":
						return l(t, "name", v);
					case "INTERACTED_FIELD_TYPE":
						return l(t, "type", v);
					case "INTERACTED_FIELD_POSITION":
						var x = a(t, "interactedFormFieldPosition");
						return void 0 === x ? v : x;
					case "INTERACT_SEQUENCE_NUMBER":
						var y = a(t, "interactSequenceNumber");
						return void 0 === y ? v : y;
					default:
						return v
				}
			}

			function h(p) {
				switch (p.tagName.toLowerCase()) {
					case "input":
						return qc(p, "value");
					case "button":
						return rc(p);
					default:
						return null
				}
			}

			function k(p) {
				if ("form" === p.tagName.toLowerCase() && p.elements) {
					for (var t = 0, v = 0; v < p.elements.length; v++) ck(p.elements[v]) && t++;
					return t
				}
			}

			function l(p, t, v) {
				var w = a(p, "interactedFormField");
				return w && qc(w, t) || v
			}
			var m = /^https?:\/\//i,
				q = {},
				r = [],
				u = {
					ATTRIBUTE: "elementAttribute",
					CLASSES: "elementClasses",
					ELEMENT: "element",
					ID: "elementId",
					HISTORY_CHANGE_SOURCE: "historyChangeSource",
					HISTORY_NEW_STATE: "newHistoryState",
					HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
					HISTORY_OLD_STATE: "oldHistoryState",
					HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
					TARGET: "elementTarget"
				};
			(function(p) {
				Y.__aev = p;
				Y.__aev.b = "aev";
				Y.__aev.g = !0;
				Y.__aev.priorityOverride = 0
			})(function(p) {
				var t = p.vtp_gtmEventId,
					v = p.vtp_defaultValue,
					w = p.vtp_varType;
				switch (w) {
					case "TAG_NAME":
						var x = a(t, "element");
						return x && x.tagName || v;
					case "TEXT":
						return b(t, w, rc) || v;
					case "URL":
						var y;
						a: {
							var B = String(a(t, "elementUrl") || v || ""),
								z = Ze(B),
								A = String(p.vtp_component || "URL");
							switch (A) {
								case "URL":
									y = B;
									break a;
								case "IS_OUTBOUND":
									y = d(B, p.vtp_affiliatedDomains);
									break a;
								default:
									y = Xe(z, A, p.vtp_stripWww, p.vtp_defaultPages, p.vtp_queryKey)
							}
						}
						return y;
					case "ATTRIBUTE":
						var F;
						if (void 0 === p.vtp_attribute) F = c(t, w, v);
						else {
							var G = p.vtp_attribute,
								L = a(t, "element");
							F = L && qc(L, G) || v || ""
						}
						return F;
					case "MD":
						var R = p.vtp_mdValue,
							aa = b(t, "MD", ok);
						return R && aa ? rk(aa, R) || v : aa || v;
					case "FORM":
						return f(String(p.vtp_component || "SUBMIT_TEXT"), t, v);
					default:
						return c(t, w, v)
				}
			})
		}();
	Y.a.gas = ["google"],
		function() {
			function a(b, c, d) {
				b.vtp_fieldsToSet = b.vtp_fieldsToSet || [];
				var e = b[c];
				void 0 !== e && (b.vtp_fieldsToSet.push({
					fieldName: d,
					value: e
				}), delete b[c])
			}(function(b) {
				Y.__gas = b;
				Y.__gas.b = "gas";
				Y.__gas.g = !0;
				Y.__gas.priorityOverride = 0
			})(function(b) {
				var c = C(b),
					d = c;
				d[Hb.va] = null;
				d[Hb.ff] = null;
				c = d;
				a(c, "vtp_cookieDomain", "cookieDomain");
				return c
			})
		}();
	Y.a.baut = ["nonGoogleScripts"],
		function() {
			var a = !1,
				b = function(c) {
					var d = c.vtp_uetqName || "uetq",
						e = W(d, [], !0);
					if ("VARIABLE_REVENUE" == c.vtp_eventType) e.push({
						gv: c.vtp_goalValue
					}), c.vtp_gtmOnSuccess();
					else if ("CUSTOM" == c.vtp_eventType) {
						var f = {},
							h = function(k, l) {
								void 0 !== c[k] && (f[l] = c[k])
							};
						h("vtp_goalValue", "gv");
						h("vtp_eventCategory", "ec");
						h("vtp_eventAction", "ea");
						h("vtp_eventLabel", "el");
						h("vtp_eventValue", "ev");
						e.push(f);
						c.vtp_gtmOnSuccess()
					} else if (a) c.vtp_gtmOnSuccess();
					else try {
						U("//bat.bing.com/bat.js", function() {
							var k = pl(W("UET"), {
								ti: c.vtp_tagId,
								q: e
							});
							D[d] = k;
							k.push("pageLoad");
							c.vtp_gtmOnSuccess()
						}, c.vtp_gtmOnFailure), a = !0
					} catch (k) {
						H(c.vtp_gtmOnFailure)
					}
				};
			Y.__baut = b;
			Y.__baut.b = "baut";
			Y.__baut.g = !0;
			Y.__baut.priorityOverride = 0
		}();
	Y.a.paused = [],
		function() {
			(function(a) {
				Y.__paused = a;
				Y.__paused.b = "paused";
				Y.__paused.g = !0;
				Y.__paused.priorityOverride = 0
			})(function(a) {
				H(a.vtp_gtmOnFailure)
			})
		}();
	Y.a.html = ["customScripts"],
		function() {
			function a(d, e, f, h) {
				return function() {
					try {
						if (0 < e.length) {
							var k = e.shift(),
								l = a(d, e, f, h);
							if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
								var m = E.createElement("script");
								m.async = !1;
								m.type = "text/javascript";
								m.id = k.id;
								m.text = k.text || k.textContent || k.innerHTML || "";
								k.charset && (m.charset = k.charset);
								var q = k.getAttribute("data-gtmsrc");
								q && (m.src = q, jc(m, l));
								d.insertBefore(m, null);
								q || l()
							} else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
								for (var r = []; k.firstChild;) r.push(k.removeChild(k.firstChild));
								d.insertBefore(k, null);
								a(k, r, l, h)()
							} else d.insertBefore(k, null), l()
						} else f()
					} catch (u) {
						H(h)
					}
				}
			}
			var c = function(d) {
				if (E.body) {
					var e = d.vtp_gtmOnFailure,
						f = Pk(d.vtp_html, d.vtp_gtmOnSuccess, e),
						h = f.Tc,
						k = f.C;
					if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(h, k, e) : a(E.body, sc(h), k, e)()
				} else Dk(function() {
					c(d)
				}, 200)
			};
			Y.__html = c;
			Y.__html.b = "html";
			Y.__html.g = !0;
			Y.__html.priorityOverride = 0
		}();
	var fn = {};
	fn.macro = function(a) {
		if (Sj.Hc.hasOwnProperty(a)) return Sj.Hc[a]
	}, fn.onHtmlSuccess = Sj.ke(!0), fn.onHtmlFailure = Sj.ke(!1);
	fn.dataLayer = Gd;
	fn.callback = function(a) {
		Zc.hasOwnProperty(a) && qa(Zc[a]) && Zc[a]();
		delete Zc[a]
	};

	function gn() {
		Qc[I.s] = fn;
		Ja($c, Y.a);
		yb = yb || Sj;
		Ab = oe
	}

	function hn() {
		Sf.gtm_3pds = !0;
		Qc = D.google_tag_manager = D.google_tag_manager || {};
		if (Qc[I.s]) {
			var a = Qc.zones;
			a && a.unregisterChild(I.s);
		} else {
			for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) rb.push(c[d]);
			for (var e = b.tags || [], f = 0; f < e.length; f++) ub.push(e[f]);
			for (var h = b.predicates || [], k = 0; k < h.length; k++) tb.push(h[k]);
			for (var l = b.rules || [], m = 0; m < l.length; m++) {
				for (var q = l[m], r = {}, u = 0; u < q.length; u++) r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
				sb.push(r)
			}
			wb = Y;
			xb = nl;
			gn();
			Rj();
			se = !1;
			te = 0;
			if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) ve();
			else {
				oc(E, "DOMContentLoaded", ve);
				oc(E, "readystatechange", ve);
				if (E.createEventObject && E.documentElement.doScroll) {
					var p = !0;
					try {
						p = !D.frameElement
					} catch (x) {}
					p && we()
				}
				oc(D, "load", ve)
			}
			mj = !1;
			"complete" === E.readyState ? oj() : oc(D, "load", oj);
			a: {
				if (!vd) break a;D.setInterval(wd, 864E5);
			}
			Wc = (new Date).getTime();
		}
	}
	(function(a) {
		a()
	})(hn);
})()