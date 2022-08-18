void
function() {
	var m = util.templatify(util.tpl('\x3c!--## select ##--\x3e\r\n\x3cdiv class\x3d"select"\x3e\r\n\t\x3cdiv class\x3d"select-title J-select-title"\x3e\r\n\t\t\x3cspan class\x3d"select-label J-label" style\x3d"display:none"\x3e\x3c/span\x3e\r\n\t\t\x3cdiv class\x3d"select-selected"\x3e\r\n\t\t\t\x3cspan class\x3d"J-text"\x3e\x3c/span\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"select-arrow J-arrow"\x3e\r\n\t\t\t\x3ci class\x3d"micon"\x3e\x26#xe006;\x3c/i\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"select-list J-select-list"\x3e\r\n\t\t{{ if(isShowTab){ }}\r\n\t\t\t\x3cdiv class\x3d"select-tabs-wrap"\x3e\r\n\t\t\t\t\x3cul class\x3d"select-tabs J-select-tabs"\x3e\r\n\t\t\t\t\t{{ util.each(tabs, function(tab){ }}\r\n\t\t\t\t\t\t\x3cli class\x3d"select-tab J-select-tab"\x3e{{\x3dtab.name}}\x3c/li\x3e\r\n\t\t\t\t\t{{ }); }}\r\n\t\t\t\t\x3c/ul\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t{{ } }}\r\n\r\n\t\t{{ util.each(tabs, function(tab){ }}\r\n\t\t\t\x3cul class\x3d"select-list-wrap J-select-tab-cnt"\x3e\r\n\t\t\t\t{{ util.each(tab.items, function(item){ }}\r\n\t\t\t\t\t{{ if(item.type \x3d\x3d\x3d ITEM_TYPE.OPTION){ }}\r\n\t\t\t\t\t\t\x3cli\x3e\r\n\t\t\t\t\t\t\t\x3ca href\x3d"javascript:void(\'{{\x3ditem.name}}\')" cz-id\x3d"{{\x3ditem.id}}" class\x3d"select-opt J-opt{{ if(item.css){ }} {{\x3ditem.css}}{{ } }}{{ if(item.disabled){ }} disabled{{ } }}"{{ if(item.title){ }} title\x3d"{{-item.title}}"{{ } }}\x3e\x3clabel class\x3d"select-opt-text"\x3e{{\x3ditem.name}}\x3c/label\x3e\x3c/a\x3e\r\n\t\t\t\t\t\t\x3c/li\x3e\r\n\t\t\t\t\t{{ }else if(item.type \x3d\x3d\x3d ITEM_TYPE.GROUP){ }}\r\n\t\t\t\t\t\t\x3cli class\x3d"select-group{{ if(isShowTab){ }} select-multab-group{{}}}"\x3e\r\n\t\t\t\t\t\t\t\x3cdl\x3e\r\n\t\t\t\t\t\t\t\t\x3cdt class\x3d"select-opt-label{{ if(item.css){ }} {{\x3ditem.css}}{{ } }}"{{ if(item.title){ }} title\x3d"{{-item.title}}"{{ } }}\x3e{{-item.name}}\x3c/dt\x3e\r\n\t\t\t\t\t\t\t\t{{ util.each(item.children, function(child){ }}\r\n\t\t\t\t\t\t\t\t\t\x3cdd class\x3d"select-opt-val"\x3e\x3ca href\x3d"javascript:void(\'{{\x3dchild.name}}\')" cz-id\x3d"{{\x3dchild.id}}" cz-pid\x3d"{{\x3ditem.id}}" class\x3d"select-opt J-opt{{ if(child.css){ }} {{\x3dchild.css}}{{ } }}{{ if(item.disabled){ }} disabled{{ } }}"{{ if(child.title){ }} title\x3d"{{-child.title}}"{{ } }}\x3e\x3clabel class\x3d"select-opt-text"\x3e{{\x3dchild.name}}\x3c/label\x3e\x3c/a\x3e\x3c/dd\x3e\r\n\t\t\t\t\t\t\t\t{{ }) }}\r\n\t\t\t\t\t\t\t\x3c/dl\x3e\r\n\t\t\t\t\t\t\x3c/li\x3e\r\n\t\t\t\t\t{{ } }}\r\n\t\t\t\t{{ }); }}\r\n\t\t\t\x3c/ul\x3e\r\n\t\t{{ }); }}\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3c!--## end ##--\x3e\r\n\r\n\x3c!--## title ##--\x3e\r\n\x3clabel class\x3d"select-opt-text"\x3e{{\x3dname}}\x3c/label\x3e\r\n\x3c!--## end ##--\x3e')),
		k = {},
		g = {
			OPTION: "option",
			GROUP: "group"
		},
		n = {
			source: null,
			stype: "el",
			dir: "down",
			label: "",
			tmpl: m,
			emptySelect: {
				name: "请选择",
				value: "",
				id: "__EMPTY_OPTION__"
			},
			css: {
				focus: "focus",
				open: "open",
				selected: "selected",
				disabled: "disabled",
				up: "top",
				down: "",
				wrap: "",
				active: "active"
			},
			elems: {
				title: ".J-select-title",
				text: ".J-text",
				label: ".J-label",
				arrow: ".J-arrow",
				list: ".J-select-list",
				option: ".J-opt",
				ignore: ".J-ignore-prevent",
				tabs: ".J-select-tab",
				tabContents: ".J-select-tab-cnt"
			}
		},
		f = function(a) {
			this.config = util.extend(!0, {}, n, a);
			return this.__init() || this
		};
	f.prototype = {
		constructor: f,
		__init: function() {
			this._ = {};
			this.elems = {};
			this._.baseId = 0;
			this._.prevSelected = null;
			this._.selected = null;
			this._.isOpen = !1;
			this._.isFocus = !1;
			this.elems.$source = $(this.config.source).first();
			if (!this.elems.$source.length) return null;
			if (this.elems.$source.attr("select-duck")) return k[this.elems.$source.attr("select-duck")];
			observe(this);
			if (this.elems.$source.attr("select-tab")) {
				var a = this.elems.$source.attr("select-tab").split("::");
				a.length && a[0] && (this._.tabname = a[0], this._.istabs = !0, this.elems.$source = this.__fakeSelect($('select[select-tab^\x3d"' + a[0] + '::"]')))
			}
			this.sid = "select-" + ((new Date).valueOf() + util.random(1, 1E3)).toString(16);
			this.elems.$source.attr("select-duck", this.sid);
			k[this.sid] = this;
			a = this.__resolveSource();
			this._.tabs = a.tabs;
			this._.items = a.items;
			this._.isDisabled = !!a.disabled;
			this._.plainItems = this.__plainItems(this._.items);
			a = this._.defaultSelected || this.__firstOpt() || this.config.emptySelect;
			var b = this.elems.$source.attr("select-css") || this.elems.$source.attr("cz-css") || "";
			this.config.css.wrap = $.trim(this.config.css.wrap + " " + b);
			this.config.label = this.elems.$source.attr("select-label") || this.elems.$source.attr("cz-label") || this.config.label || "";
			this.config.tmpl = util.extend(!0, {}, m, this.config.tmpl);
			this.render();
			this.__bindEvents();
			this.elems.$source.hide();
			this.elems.$source.first().before(this.elems.$select);
			this.__initTab();
			this.label(this.config.label);
			this._select(a, !0);
			this.__changeSelectedCss(this._.selected, this._.prevSelected);
			this._disabled(this._.isDisabled);
			this.close()
		},
		render: function() {
			this.elems.$select && this.elems.$select.remove();
			this.elems.$select = $(this.config.tmpl.select(util.extend(!0, {}, {
				tabs: this._.tabs,
				isShowTab: !!this._.istabs,
				ITEM_TYPE: g
			})));
			this.elems.$title = $(this.config.elems.title, this.elems.$select);
			this.elems.$text = $(this.config.elems.text, this.elems.$title);
			this.elems.$label = $(this.config.elems.label, this.elems.$title);
			this.elems.$arrow = $(this.config.elems.arrow, this.elems.$title);
			this.elems.$list = $(this.config.elems.list, this.elems.$select);
			this.elems.tabs = $(this.config.elems.tabs, this.elems.$select);
			this.elems.tabContents = $(this.config.elems.tabContents, this.elems.$select);
			var a = "";
			"up" === this.config.dir ? a = this.config.css.up : "down" === this.config.dir && (a = this.config.css.down);
			this.elems.$select.addClass(a);
			this.elems.$select.addClass(this.config.css.wrap)
		},
		__uiEvents: function() {
			var a = this;
			this.elems.$select.on("click", function(b) {
				b.stopPropagation();
				$(b.target).is(a.config.elems.ignore) || $(b.target).parents(a.config.elems.ignore).length && $(b.currentTarget).find(a.config.elems.ignore).length || b.preventDefault()
			});
			$(document).on("click", function() {
				a.close();
				a.blur()
			});
			this.elems.$title.on("click", function() {
				a.focus();
				a.isOpen() ? a.close() : a.open()
			});
			this.elems.$list.on("click", this.config.elems.option + ":not(." + this.config.css.disabled + ")", function(b) {
				a.focus();
				var c = this.getAttribute("cz-id"),
					d = this.getAttribute("cz-pid");
				b = a._.items;
				var e = null,
					h = null;
				d && (e = util.filter(b, function(a) {
					return a.id + "" === d
				})[0]);
				c && (h = util.filter(e && e.children || b, function(a) {
					return a.id + "" === c
				})[0]);
				a._select(h, !1, "human")
			});
			this.elems.tabs.on("click", function() {
				a.selectTab(a.elems.tabs.index(this), "human")
			})
		},
		__bindEvents: function() {
			var a = this;
			this.__uiEvents();
			this.on("select", function(a) {
				this.close()
			});
			this.on("add del disabledOption", function() {
				this._.plainItems = this.__plainItems(this._.items);
				this.render();
				this.__uiEvents();
				this.elems.$source.first().before(this.elems.$select);
				this._select(this._.selected, "silent")
			});
			this.on("disabled", function(a) {
				a && (this.close(), this.blur())
			});
			this.on("focus", function() {
				util.each(k, function(b) {
					b !== a && (b.close(), b.blur())
				})
			});
			this.on("change", function(a) {
				this.elems.$source.val(a.value);
				this.elems.$source.change()
			});
			this.on("change", function(a, c) {
				this.__changeSelectedCss(a, c)
			})
		},
		__changeSelectedCss: function(a, b) {
			b && b.css && this.elems.$text.removeClass(b.css);
			a.css && this.elems.$text.addClass(a.css)
		},
		_select: function(a, b, c) {
			var d = !this._.selected || this._.selected.id !== a.id;
			this._.prevSelected = this._.selected;
			this._.selected = a;
			this.elems.$text.html(this.config.tmpl.title(a));
			$(this.config.elems.option, this.elems.$list).removeClass(this.config.css.selected).filter("[cz-id\x3d" + a.id + "]").addClass(this.config.css.selected);
			this.selectTab(a.tabid);
			this.elems.$source.val(a.value);
			c || (this._.nonHumanSelected = !0);
			b || (this.fire("select", a, this._.prevSelected), d && this.fire("change", a, this._.prevSelected))
		},
		select: function(a, b) {
			this._select(a, b)
		},
		val: function(a, b) {
			if ("undefined" !== typeof a) {
				var c = util.filter(this._.plainItems, function(b) {
					return b.value === a
				})[0];
				c && this._select(c, b)
			} else return this._.selected && this._.selected.value
		},
		selectId: function(a, b) {
			var c = util.filter(this._.plainItems, function(b) {
				return b.id + "" === a + ""
			})[0];
			c && this._select(c, b)
		},
		empty: function() {
			this._select(this.config.emptySelect, "silent");
			this.fire("empty")
		},
		label: function(a) {
			this.elems.$label.html(a);
			a ? this.elems.$label.show() : this.elems.$label.hide()
		},
		_positionSelected: function(a) {
			var b = this;
			this.isOpen() && !this.isDisabled() && (this.selectTab(a.tabid), setTimeout(function() {
				var c = b.elems.tabContents[a.tabid],
					d = $(b.config.elems.option, b.elems.$list).filter("[cz-id\x3d" + a.id + "]")[0];
				if (c && d) {
					var e = c.getBoundingClientRect().top;
					d = d.getBoundingClientRect().top;
					c.scrollTop = c.scrollTop + d - e
				}
			}, 0))
		},
		open: function() {
			if (!this.isOpen() && !this.isDisabled()) {
				this.elems.$select.addClass(this.config.css.open);
				this._.isOpen = !0;
				if (this._.nonHumanSelected) {
					var a = this._.selected;
					this._.nonHumanSelected = !1;
					this._positionSelected(a)
				}
				this.fire("open")
			}
		},
		close: function() {
			this.isOpen() && this.elems.$select && (this.elems.$select.removeClass(this.config.css.open), this._.isOpen = !1, this.fire("close"))
		},
		isOpen: function() {
			return this._.isOpen
		},
		focus: function() {
			this.isFocus() || this.isDisabled() || !this.elems.$select || (this._.isFocus = !0, this.elems.$select.addClass(this.config.css.focus), this.fire("focus"))
		},
		blur: function() {
			this.isFocus() && this.elems.$select && (this._.isFocus = !1, this.elems.$select.removeClass(this.config.css.focus), this.fire("blur"))
		},
		isFocus: function() {
			return this._.isFocus
		},
		_disabled: function(a, b) {
			a = !!a;
			this._.isDisabled = a;
			this.elems.$select[a ? "addClass" : "removeClass"](this.config.css.disabled);
			this.elems.$source.attr("disabled", a);
			!b && this.fire("disabled", a)
		},
		disabled: function(a) {
			this._disabled(a)
		},
		isDisabled: function() {
			return !!this._.isDisabled
		},
		_disabledOption: function(a, b, c) {
			a && (a.disabled = !!b, !c && this.fire("disabledOption", a))
		},
		disabledOption: function(a, b) {
			var c = this;
			if ("function" === typeof a) {
				var d = a.call(this, this._.items);
				d.length && $.each(d, function(a, d) {
					c._disabledOption(d, !!b)
				})
			} else this._disabledOption(a, !!b)
		},
		disabledOptionById: function(a, b) {
			var c = util.filter(this._.plainItems, function(b) {
				return b.id + "" === a + ""
			})[0];
			c && this._disabledOption(c, !!b)
		},
		disabledByVal: function(a, b) {
			var c = this,
				d = util.filter(this._.plainItems, function(b) {
					return b.value + "" === a + ""
				});
			d.length && $.each(d, function(a, d) {
				c._disabledOption(d, !!b)
			})
		},
		addOption: function(a, b, c, d, e) {
			e = e || 0;
			this._.tabs[e] || (e = 0);
			a = {
				id: this._.baseId++,
				name: a,
				value: b,
				type: c === g.GROUP ? g.GROUP : g.OPTION,
				tabid: e
			};
			util.extend(!0, a, d);
			this._.items.push(a);
			this._.tabs[e].items.push(a);
			this.fire("add", a);
			return a
		},
		delOption: function(a) {
			var b = util.filter(this._.items, function(b) {
				return b.id + "" === a + ""
			});
			b && (this._.items = util.filter(this._.items, function(b) {
				return b.id + "" !== a + ""
			}), this._.tabs[b.tabid].items = util.filter(this._.tabs[b.tabid].items, function(b) {
				return b.id + "" !== a + ""
			}), this.fire("del", b))
		},
		dispose: function() {
			var a = this;
			setTimeout(function() {
				a.off();
				a.elems.$source && a.elems.$source.show();
				a.elems.$select && a.elems.$select.remove();
				a.elems.$source && a.elems.$source.removeAttr("select-duck");
				delete a.elems.$source;
				delete a.elems.$select;
				delete a.elems.$title;
				delete a.elems.$text;
				delete a.elems.$label;
				delete a.elems.$arrow;
				delete a.elems.$list;
				delete a.elems.tabs;
				delete a.elems.tabContents;
				delete a._.items;
				delete a._.tabs;
				delete k[a.sid]
			}, 0)
		},
		__firstOpt: function() {
			return this._.plainItems[0] || null
		},
		__getCustomAttrs: function(a, b) {
			for (var c = a.attributes, d = 0; d < c.length; d++) {
				var e = c[d].name;
				if (0 === e.indexOf("select-")) {
					var h = e.substr(7);
					e = a.getAttribute(e);
					try {
						!/^\s*$/.test(e) && (e = (new Function("return " + e))())
					} catch (l) {}
					b[h] = e
				}
			}
			return b
		},
		__gpAttrs: function(a) {
			var b = this,
				c = {
					id: this._.baseId++,
					type: g.GROUP,
					name: a.getAttribute("label"),
					title: a.getAttribute("title"),
					children: []
				};
			this.__getCustomAttrs(a, c);
			var d = c.tabid = c.tabid || 0;
			$(a).children().each(function(a, h) {
				var e = b.__optAttrs(h);
				e.pid = c.id;
				e.tabid = d;
				c.children.push(e)
			});
			return c
		},
		__optAttrs: function(a) {
			var b = {
				id: this._.baseId++,
				type: g.OPTION,
				name: a.innerHTML,
				value: a.value,
				disabled: a.disabled,
				title: a.getAttribute("title")
			};
			this.__getCustomAttrs(a, b);
			a.selected && (this._.defaultSelected = b);
			return b
		},
		__resolveSource: function() {
			var a = this,
				b = [],
				c = [];
			this.elems.$source.children().each(function(b, e) {
				var d = e.tagName.toUpperCase(),
					l = null;
				"OPTION" === d ? l = a.__optAttrs(e) : "OPTGROUP" === d && (l = a.__gpAttrs(e));
				c.push(l)
			});
			$.each(c, function(a, c) {
				var d = c.tabid || 0,
					e = b[d];
				e || (e = b[d] = {
					items: [],
					name: c.tabname
				});
				delete c.tabname;
				e.items.push(c)
			});
			return {
				tabs: b,
				items: c,
				disabled: this.elems.$source[0].disabled
			}
		},
		__plainItems: function(a) {
			var b = [];
			a.length && util.each(a, function(a) {
				a.type === g.OPTION ? b.push(a) : a.type === g.GROUP && [].push.apply(b, a.children)
			});
			return b
		},
		__initTab: function() {
			this.selectTab(0)
		},
		selectTab: function(a) {
			a = a || 0;
			this.elems.tabs.removeClass(this.config.css.active);
			this.elems.tabs.eq(a).addClass(this.config.css.active);
			this.elems.tabContents.hide().eq(a).show()
		},
		__fakeSelect: function(a) {
			a = $(a);
			var b = a.map(function(a, b) {
					var c = $(b),
						e = c.attr("select-tab").split("::")[1];
					return c.children().clone(!0).attr({
						"select-tabid": a,
						"select-tabname": e
					})
				}).toArray(),
				c = a.filter("select[name]:first").clone(!1).empty();
			c.length || (c = $("\x3cselect\x3e"));
			$.each(b, function(a, b) {
				c.append(b)
			});
			a.first().before(c);
			a.remove();
			return c
		}
	};
	f.instances = k;
	f.use = function(a, b) {
		var c = [],
			d = {};
		$(a || "select").filter("select").filter(function(a, b) {
			var c = $(b).attr("select-tab");
			if (c) {
				c = c.split("::")[0];
				if (c in d) return !1;
				d[c] = !0
			}
			return !0
		}).each(function(a, d) {
			c.push(new f($.extend(!0, {}, b, {
				source: d
			})))
		});
		return c
	};
	f.unuse = function(a) {
		var b = {};
		$(a || "select").filter("select").filter(function(a, d) {
			var c = $(d).attr("select-tab");
			if (c) {
				c = c.split("::")[0];
				if (c in b) return !1;
				b[c] = !0
			}
			return !0
		}).each(function(a, b) {
			$(b).attr("select-duck") && (new f({
				source: b
			})).dispose()
		})
	};
	f.reuse = function(a) {
		f.unuse(a);
		setTimeout(function() {
			f.use(a)
		}, 0)
	};
	"function" === typeof define ? define(function() {
		return f
	}) : "undefined" !== typeof module && "exports" in module ? module.exports = f : window.Select = f
}.call(this);