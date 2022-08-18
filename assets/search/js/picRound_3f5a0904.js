void
function(b) {
	this.PicRound || (b = new Abstract({
		picRoundStart: function() {},
		picRoundStop: function() {},
		onChangeDerection: function(a) {},
		getRoundDirection: function() {},
		changeSpeed: function(a) {}
	}), b = new Clazz(b, {
		config: {
			isAutoPlay: !0,
			autoPlayAction: "",
			speed: 1E3,
			roundDirection: "right",
			roundTimeOut: null,
			picSize: null,
			imgNum: 0,
			imgs: [],
			carrier: {
				imgbox: "#egimgbox",
				imgboxWrap: "#egimgboxWrap",
				startBtn: null,
				stopBtn: null,
				turnRightBtn: null,
				turnLeftBtn: null
			}
		},
		inherit: Component
	}, function(a) {
		this.setConfig(a);
		this._init()
	}), b.extend({
		_init: function() {
			var a = this;
			this.picRoundStart.implement(this._start);
			this.picRoundStop.implement(this._stop);
			this.onChangeDerection.implement(this._onChangeDerection);
			this.getRoundDirection.implement(this._getRoundDirection);
			this.changeSpeed.implement(this._changeSpeed);
			this.config.imgs = $(this.config.carrier.imgbox);
			this.config.hasloaded = !1;
			this.config.imgs.css({
				position: "relative"
			});
			this.config.imgNum = 0 < $(this.config.carrier.imgbox).find(".J-gif-mainPic").length ? 1 : 0;
			var d = $(this.config.carrier.imgbox).find("img:eq(0)");
			d.css({
				display: "block",
				margin: "auto",
				position: "relative",
				top: 0
			});
			var c = d.attr("data-giforiginal") || d.attr("data-original");
			c && d.attr("src", c).css({
				display: "block",
				margin: "auto",
				position: "relative",
				top: 0
			});
			this.config.imgs.find("img").filter(function(a) {
				return 0 < a
			}).css({
				display: "block",
				margin: "auto",
				position: "absolute",
				top: 0,
				left: -9999
			});
			a.config.isAutoPlay && a._start();
			this.config.carrier.startBtn && $(this.config.carrier.startBtn).bind("click", function() {
				a._start();
				$(a.config.carrier.startBtn).hide();
				a.config.carrier.stopBtn && $(a.config.carrier.stopBtn).show()
			});
			this.config.carrier.stopBtn && $(this.config.carrier.stopBtn).bind("click", function() {
				a._stop();
				$(a.config.carrier.stopBtn).hide();
				a.config.carrier.startBtn && $(a.config.carrier.startBtn).show()
			});
			this.config.carrier.turnRightBtn && $(this.config.carrier.turnRightBtn).bind("click", function() {
				a._onChangeDerection("right")
			});
			this.config.carrier.turnLeftBtn && $(this.config.carrier.turnLeftBtn).bind("click", function() {
				a._onChangeDerection("left")
			});
			"hover" == this.config.autoPlayAction && $(this.config.carrier.imgbox).hover(function() {
				a._start()
			}, function() {
				a._stop()
			})
		},
		_change: function() {
			this.isPlayed && $(this.config.carrier.imgbox) && ("right" == this.config.roundDirection ? (this.config.imgNum >= this.config.picSize && (this.config.imgNum = 0 < $(this.config.carrier.imgbox).find(".J-gif-mainPic").length ? 1 : 0), $(this.config.carrier.imgbox).find("img").css({
				left: -9999,
				position: "absolute"
			}), $(this.config.carrier.imgbox).find("img:eq(" + this.config.imgNum + ")").css({
				left: 0,
				position: "relative"
			}), this.config.imgNum++) : (0 > this.config.imgNum && (this.config.imgNum = this.config.picSize - 1), $(this.config.carrier.imgbox).find("img").css({
				left: -9999,
				position: "absolute"
			}), $(this.config.carrier.imgbox).find("img:eq(" + this.config.imgNum + ")").css({
				left: 0,
				position: "relative"
			}), this.config.imgNum--))
		},
		_onChangeDerection: function(a) {
			this.config.roundDirection = a
		},
		_getRoundDirection: function() {
			var a = event.clientX;
			a -= a;
			0 < a && (direction = "right");
			0 > a && (direction = "left");
			this._stop()
		},
		_start: function() {
			var a = this;
			if (!this.isPlayed) {
				var d = function(b) {
					$(a.config.carrier.imgbox).find(".J-picround-loading").remove();
					b.show();
					setTimeout(function() {
						a.isPlayed && (a.config.roundTimeOut = setInterval(function() {
							a._change()
						}, a.config.speed))
					}, 19)
				};
				this.isPlayed = !0;
				var c = $(this.config.carrier.imgbox).find("img");
				this.config.imgs.find("img").css({
					display: "block",
					margin: "auto",
					position: "absolute",
					top: 0,
					left: -9999
				});
				var b = $(this.config.carrier.imgbox).find("img:eq(" + this.config.imgNum + ")"),
					e = b.attr("data-giforiginal") || b.attr("data-original");
				e && b.attr("src") != e && b.attr("src", e);
				b.css({
					display: "block",
					margin: "auto",
					position: "relative",
					top: 0,
					left: 0
				});
				this.config.picSize = this.config.picSize ? this.config.picSize : $(this.config.carrier.imgbox).find("img").size();
				$(this.config.carrier.imgbox).prepend("\x3cdiv class\x3d'J-picround-loading' style\x3d'position: absolute;background: #fff;border-radius: 40px;width:80px;height:80px;top:50%;left:50%;margin-left: -40px;margin-top: -40px;'\x3e\x3cdiv style\x3d'position: absolute;text-align:center;width:55px;height:55px;top:50%;left:50%;margin-left: -28px;margin-top: -28px;z-index:1'\x3e\x3cimg src\x3d'' style\x3d'position: absolute;text-align:center;width:55px;height:55px;top:50%;left:50%;margin-left: -28px;margin-top: -28px;z-index:1'/\x3e\x3c/div\x3e\x3c/div\x3e");
				$(this.config.carrier.imgbox).find(".J-picround-loading img").attr("src", "//www.micstatic.com/gb/img/loading.gif");
				if (!0 === a.config.hasloaded) d(c);
				else {
					var g = 0;
					c.each(function(b, f) {
						var e = $(this).attr("data-giforiginal") || $(this).attr("data-original");
						e && $(this).attr("src", e);
						f.complete ? (g++, g >= c.length && (a.config.hasloaded = !0, d(c))) : f.onload = f.onerror = function() {
							g++;
							g >= c.length && (a.config.hasloaded = !0, d(c));
							f.onload = f.onerror = null
						}
					})
				}
			}
		},
		_stop: function() {
			clearInterval(this.config.roundTimeOut);
			this.config.roundTimeOut = null;
			this.isPlayed = !1;
			this.config.carrier.startBtn && $(this.config.carrier.startBtn).show();
			this.config.carrier.stopBtn && $(this.config.carrier.stopBtn).hide();
			var a = 0 < $(this.config.carrier.imgbox).find(".J-gif-mainPic").length ? 1 : 0;
			this.config.imgNum !== a && ($(this.config.carrier.imgbox).find("img").css({
				left: -9999,
				position: "absolute"
			}), $(this.config.carrier.imgbox).find("img:eq(" + a + ")").css({
				left: 0,
				position: "relative"
			}), this.config.imgNum = 0 < $(this.config.carrier.imgbox).find(".J-gif-mainPic").length ? 1 : 0)
		},
		_changeSpeed: function(a) {
			var b = this;
			null != this.config.roundTimeOut && (this._stop(), this.config.roundTimeOut = setInterval(function() {
				b._change()
			}, a))
		}
	}), this.PicRound = b)
}.call(window, document);