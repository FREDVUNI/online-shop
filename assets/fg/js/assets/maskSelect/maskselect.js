void
function() {
	function n() {
		var a = this;
		"click" === this._.triggerEvent && (this.elems.$menu.on(this._.triggerEvent, function(b) {
			b.stopPropagation();
			a._unfold.call(a)
		}), $(document).on("click", function(b) {
			a.elems.$carrier.removeClass(a._.showPos)
		}));
		"mouseover" === this._.triggerEvent && this.elems.$carrier.hover(function() {
			a._unfold.call(a)
		}, function() {
			a.elems.$carrier.removeClass(a._.showPos)
		});
		this.elems.$list.on("mouseover", function(b) {
			a.elems.$list.find(f(a.config.style.chooseCls)).removeClass(a.config.style.chooseCls)
		});
		this.elems.$list.on("click", function(b) {
			var d = a._.selectedIndex;
			b.stopPropagation();
			"a" === b.target.nodeName.toLowerCase() && (a._.selectedIndex = p.call(a, b.target.innerText || decodeURIComponent(b.target.textContent)), h.call(a), a.elems.$carrier.removeClass(a._.showPos), d !== a._.selectedIndex && l.call(a))
		})
	}

	function h() {
		this._options() && (this.config.control.selectedHide ? (this.elems.$list.empty(), this.elems.$list[0].appendChild(m.call(this, this._.data, document.createDocumentFragment())), this._options().eq(this._.selectedIndex).remove()) : (this._.selectedOption = this._options().eq(this._.selectedIndex), this._options().removeClass(this.config.style.chooseCls), this._.selectedOption.addClass(this.config.style.chooseCls)), this.elems.$menu.find("span").html((this._.options[this._.selectedIndex] ? this._.options[this._.selectedIndex] : null) && (this._.options[this._.selectedIndex] ? this._.options[this._.selectedIndex] : null).text), this._.target.selectedIndex = this._.selectedIndex)
	}

	function p(a) {
		var b = 0,
			d;
		for (d = this._.options.length; b < d && a !== this._.options[b].text; b++);
		return b
	}

	function l() {
		if (this._.changeEvents.length)
			for (var a = 0; this._.changeEvents[a];) this._.changeEvents[a] instanceof Function && this._.changeEvents[a].call(this._.target.options[this._.target.selectedIndex]), a++
	}

	function m(a, b) {
		var d;
		var c = 0;
		for (d = a.length; c < d; c++) {
			var e = document.createElement("dd");
			if (a[c].value instanceof Array) {
				var g = document.createElement("dl");
				var f = document.createElement("dt");
				!a[c].value.length && a[c].type ? (f.className = this.config.style.tagName + "-" + a[c].type, g.appendChild(f)) : (f.innerHTML = a[c].text, g.appendChild(f), g.className = this.config.style.optgroupCls, g.appendChild(arguments.callee.call(this, a[c].value, document.createDocumentFragment())));
				e.appendChild(g)
			} else e.className = this.config.style.optCls, e.innerHTML = '\x3ca href\x3d"javascript:;"\x3e' + a[c].text + "\x3c/a\x3e";
			b.appendChild(e)
		}
		return b
	}

	function q(a, b) {
		if (!a) return null;
		var d = a.childNodes,
			c;
		for (c = 0; c < d.length; c++)
			if (d[c] && 1 === d[c].nodeType) {
				if ("optgroup" === d[c].nodeName.toLowerCase()) {
					var e = {
						text: d[c].label,
						value: arguments.callee(d[c], [])
					};
					d[c].getAttributeNode("data-type") && (e.type = d[c].getAttributeNode("data-type").nodeValue)
				} else e = {
					text: d[c].text,
					value: d[c].value
				};
				b.push(e)
			}
		return b
	}

	function f(a) {
		return "." === a.substring(0, 1) ? a : "." + a
	}
	var k = new Abstract({
		onchange: function(a) {},
		triggerChange: function() {},
		selectedIndex: function(a) {},
		options: function() {},
		optgroups: function() {},
		disabled: function(a) {},
		unfold: function() {},
		value: function() {}
	});
	k = new Clazz(k, {
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
	}, function(a) {
		this.setConfig(a);
		a: {
			a = Error();
			var b = this.config;
			try {
				throw a.name = "selectInit", b.carrier || (a.message = "Carrier must not be null."), b.style.menuCls && b.style.listCls && b.style.optCls || (a.message = "Style structure insufficiency."), a;
			} catch (g) {
				if (window.console && g.message) {
					console.log(g.message);
					a = null;
					break a
				}
			}
			a = !0
		}
		if (a) {
			this._.selectedIndex = 0;
			this._.triggerEvent = this.config.trigger;
			this._.selectedOption = null;
			this._.optsWidth = null;
			this._.disabled = !1;
			this._.changeEvents = [];
			this._.showPos = this.config.style.unfoldCls;
			this.elems.$carrier = $(this.config.carrier);
			this.elems.$menu = this.elems.$carrier.find(f(this.config.style.menuCls));
			this.elems.$list = this.elems.$carrier.find(f(this.config.style.listCls));
			this._.target = this.elems.$carrier.find("select")[0];
			this._.data = q(this._.target, []);
			a = this._;
			b = this._.target.options;
			var d, c = [];
			var e = 0;
			for (d = b.length; e < d; e++) c.push({
				text: b[e].text,
				value: b[e].value
			});
			a.options = c;
			this._.selectedIndex = this._.target.selectedIndex;
			this.elems.$carrier.attr("data-trigger") && (this._.triggerEvent = this.elems.$carrier.attr("data-trigger"));
			this.elems.$carrier.attr("data-width") && (this._.optsWidth = this.elems.$carrier.attr("data-width"), this.elems.$list.css("width", this._.optsWidth));
			this.elems.$list.empty();
			this.elems.$list[0].appendChild(m.call(this, this._.data, document.createDocumentFragment()));
			this.config.control.selectedHide && this._options().eq(this._.selectedIndex).remove();
			h.call(this);
			this.config.control.dropRows && this._options().eq(0) && this.config.control.dropRows < this._.target.options.length + this._.target.getElementsByTagName("optgroup").length && this.elems.$list.css({
				overflow: "auto",
				height: parseInt(this._options().eq(0).outerHeight(), 10) * this.config.control.dropRows
			});
			n.call(this);
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
	k.extend({
		_onchange: function(a) {
			this._.changeEvents.push(a)
		},
		_triggerChange: function() {
			l.call(this)
		},
		_selectedIndex: function(a) {
			parseInt(a, 10) > this._.options.length || (this._.selectedIndex = a, h.call(this))
		},
		_disabled: function(a) {
			this._.disabled = a
		},
		_unfold: function() {
			if (!this._.disabled) {
				var a = $(f(this.config.style.tagName)),
					b = this.config.carrier;
				b.nodeType || (b = b[0]);
				for (var d = 0, c = a.length; d < c; d++) a[d] !== b && $(a[d]).removeClass(this.config.style.unfoldCls).removeClass(this.config.style.unfoldReverseCls);
				a = document.body.scrollTop || document.documentElement.scrollTop;
				a = parseInt(this.elems.$carrier.offset().top, 10) + parseInt(this.elems.$list.outerHeight(), 10) + parseInt(this.elems.$menu.outerHeight(), 10) > $(window).height() + a && parseInt(this.elems.$carrier.offset().top, 10) - a > parseInt(this.elems.$list.outerHeight(), 10) ? !0 : !1;
				a ? (this._.showPos = this.config.style.unfoldReverseCls, "none" !== this.elems.$list.css("display") && this.elems.$carrier.addClass(this._.showPos), this.elems.$carrier.removeClass(this.config.style.unfoldCls)) : (this._.showPos = this.config.style.unfoldCls, "none" !== this.elems.$list.css("display") && this.elems.$carrier.addClass(this._.showPos), this.elems.$carrier.removeClass(this.config.style.unfoldReverseCls));
				this.elems.$carrier.toggleClass(this._.showPos);
				h.call(this)
			}
		},
		_options: function() {
			return this.config.style.optCls ? this.elems.$list.find(f(this.config.style.optCls)) : []
		},
		_optgroups: function() {
			return this.config.style.optgroupCls ? this.elems.$list.find(f(this.config.style.optgroupCls)) : []
		},
		_value: function() {
			return this._.options[this._.selectedIndex].value
		}
	});
	this.MaskSelect = k
}.call(window);