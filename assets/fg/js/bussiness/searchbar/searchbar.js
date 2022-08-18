"undefined" !== typeof FileReader && Array.prototype.filter && ! function(z, r) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = r();
	else if ("function" == typeof define && define.amd) define([], r);
	else {
		var g = r(),
			p;
		for (p in g)("object" == typeof exports ? exports : z)[p] = g[p]
	}
}(this, function() {
	return function(z) {
		function r(p) {
			if (g[p]) return g[p].exports;
			var t = g[p] = {
				exports: {},
				id: p,
				loaded: !1
			};
			return z[p].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
		}
		var g = {};
		return r.m = z, r.c = g, r.p = "", r(0)
	}([function(z, r, g) {
		g(6);
		g(7);
		z.exports = g(8)
	}, function(z, r, g) {
		(function(g) {
			! function(t) {
				function e(a, c) {
					return function() {
						a.apply(c, arguments)
					}
				}

				function k(c) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof c) throw new TypeError("not a function");
					this._value = this._state = null;
					this._deferreds = [];
					n(c, e(a, this), e(b, this))
				}

				function v(a) {
					var c = this;
					return null === this._state ? void this._deferreds.push(a) : void u(function() {
						var b = c._state ? a.onFulfilled : a.onRejected;
						if (null === b) return void(c._state ? a.resolve : a.reject)(c._value);
						try {
							var h = b(c._value)
						} catch (E) {
							return void a.reject(E)
						}
						a.resolve(h)
					})
				}

				function a(c) {
					try {
						if (c === this) throw new TypeError("A promise cannot be resolved with itself.");
						if (c && ("object" == typeof c || "function" == typeof c)) {
							var h = c.then;
							if ("function" == typeof h) return void n(e(h, c), e(a, this), e(b, this))
						}
						this._state = !0;
						this._value = c;
						d.call(this)
					} catch (m) {
						b.call(this, m)
					}
				}

				function b(a) {
					this._state = !1;
					this._value = a;
					d.call(this)
				}

				function d() {
					for (var a = 0, c = this._deferreds.length; c > a; a++) v.call(this, this._deferreds[a]);
					this._deferreds = null
				}

				function c(a, c, b, d) {
					this.onFulfilled = "function" == typeof a ? a : null;
					this.onRejected = "function" == typeof c ? c : null;
					this.resolve = b;
					this.reject = d
				}

				function n(a, c, b) {
					var h = !1;
					try {
						a(function(a) {
							h || (h = !0, c(a))
						}, function(a) {
							h || (h = !0, b(a))
						})
					} catch (E) {
						h || (h = !0, b(E))
					}
				}
				var u = "function" == typeof g && g || function(a) {
						setTimeout(a, 1)
					},
					l = Array.isArray || function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					};
				k.prototype["catch"] = function(a) {
					return this.then(null, a)
				};
				k.prototype.then = function(a, b) {
					var h = this;
					return new k(function(d, e) {
						v.call(h, new c(a, b, d, e))
					})
				};
				k.all = function() {
					var a = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);
					return new k(function(c, b) {
						function h(f, e) {
							try {
								if (e && ("object" == typeof e || "function" == typeof e)) {
									var x = e.then;
									if ("function" == typeof x) return void x.call(e, function(a) {
										h(f, a)
									}, b)
								}
								a[f] = e;
								0 === --d && c(a)
							} catch (C) {
								b(C)
							}
						}
						if (0 === a.length) return c([]);
						for (var d = a.length,
								f = 0; f < a.length; f++) h(f, a[f])
					})
				};
				k.resolve = function(a) {
					return a && "object" == typeof a && a.constructor === k ? a : new k(function(c) {
						c(a)
					})
				};
				k.reject = function(a) {
					return new k(function(c, b) {
						b(a)
					})
				};
				k.race = function(a) {
					return new k(function(c, b) {
						for (var d = 0, h = a.length; h > d; d++) a[d].then(c, b)
					})
				};
				k._setImmediateFn = function(a) {
					u = a
				};
				k.prototype.always = function(a) {
					var c = this.constructor;
					return this.then(function(b) {
						return c.resolve(a()).then(function() {
							return b
						})
					}, function(b) {
						return c.resolve(a()).then(function() {
							throw b;
						})
					})
				};
				"undefined" != typeof z && z.exports ? z.exports = k : t.Promise || (t.Promise = k)
			}(this)
		}).call(r, g(2).setImmediate)
	}, function(z, r, g) {
		(function(p, t) {
			function e(a, b) {
				this._id = a;
				this._clearFn = b
			}
			var k = g(3).nextTick,
				v = Function.prototype.apply,
				a = Array.prototype.slice,
				b = {},
				d = 0;
			r.setTimeout = function() {
				return new e(v.call(setTimeout, window, arguments), clearTimeout)
			};
			r.setInterval = function() {
				return new e(v.call(setInterval, window, arguments), clearInterval)
			};
			r.clearTimeout = r.clearInterval = function(a) {
				a.close()
			};
			e.prototype.unref = e.prototype.ref = function() {};
			e.prototype.close = function() {
				this._clearFn.call(window, this._id)
			};
			r.enroll = function(a, b) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = b
			};
			r.unenroll = function(a) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = -1
			};
			r._unrefActive = r.active = function(a) {
				clearTimeout(a._idleTimeoutId);
				var c = a._idleTimeout;
				0 <= c && (a._idleTimeoutId = setTimeout(function() {
					a._onTimeout && a._onTimeout()
				}, c))
			};
			r.setImmediate = "function" == typeof p ? p : function(c) {
				var e = d++,
					u = 2 > arguments.length ? !1 : a.call(arguments, 1);
				return b[e] = !0, k(function() {
					b[e] && (u ? c.apply(null, u) : c.call(null), r.clearImmediate(e))
				}), e
			};
			r.clearImmediate = "function" == typeof t ? t : function(a) {
				delete b[a]
			}
		}).call(r, g(2).setImmediate, g(2).clearImmediate)
	}, function(z, r) {
		function g() {
			b = !1;
			k.length ? a = k.concat(a) : d = -1;
			a.length && p()
		}

		function p() {
			if (!b) {
				var c = setTimeout(g);
				b = !0;
				for (var e = a.length; e;) {
					k = a;
					for (a = []; ++d < e;) k && k[d].run();
					d = -1;
					e = a.length
				}
				k = null;
				b = !1;
				clearTimeout(c)
			}
		}

		function t(a, b) {
			this.fun = a;
			this.array = b
		}

		function e() {}
		var k, v = z.exports = {},
			a = [],
			b = !1,
			d = -1;
		v.nextTick = function(c) {
			var d = Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
			a.push(new t(c, d));
			1 !== a.length || b || setTimeout(p, 0)
		};
		t.prototype.run = function() {
			this.fun.apply(null, this.array)
		};
		v.title = "browser";
		v.browser = !0;
		v.env = {};
		v.argv = [];
		v.version = "";
		v.versions = {};
		v.on = e;
		v.addListener = e;
		v.once = e;
		v.off = e;
		v.removeListener = e;
		v.removeAllListeners = e;
		v.emit = e;
		v.binding = function(a) {
			throw Error("process.binding is not supported");
		};
		v.cwd = function() {
			return "/"
		};
		v.chdir = function(a) {
			throw Error("process.chdir is not supported");
		};
		v.umask = function() {
			return 0
		}
	}, function(z, r) {
		try {
			var g = (new Blob, !0)
		} catch (t) {
			g = !1
		}
		var p = g ? window.Blob : function(g, e) {
			var k = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
			return g.forEach(function(e) {
				k.append(e)
			}), k.getBlob(e ? e.type : void 0)
		};
		g = function() {
			function g() {
				var k = this,
					g = [],
					a = Array(21).join("-") + (1E16 * +new Date * Math.random()).toString(36),
					b = XMLHttpRequest.prototype.send;
				this.getParts = function() {
					return g.toString()
				};
				this.append = function(b, c, e) {
					g.push("--" + a + '\r\nContent-Disposition: form-data; name\x3d"' + b + '"');
					c instanceof Blob ? (g.push('; filename\x3d"' + (e || "blob") + '"\r\nContent-Type: ' + c.type + "\r\n\r\n"), g.push(c)) : g.push("\r\n\r\n" + c);
					g.push("\r\n")
				};
				e++;
				XMLHttpRequest.prototype.send = function(d) {
					var c, n, u = this;
					d === k ? (g.push("--" + a + "--\r\n"), n = new p(g), c = new FileReader, c.onload = function() {
						b.call(u, c.result)
					}, c.onerror = function(a) {
						throw a;
					}, c.readAsArrayBuffer(n), this.setRequestHeader("Content-Type", "multipart/form-data; boundary\x3d" + a), e--, 0 == e && (XMLHttpRequest.prototype.send = b)) : b.call(this, d)
				}
			}
			var e = 0;
			return g.prototype = Object.create(FormData.prototype), g
		}();
		z.exports = {
			Blob: p,
			FormData: ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome") && 534 >= navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() || /MQQBrowser/g.test(navigator.userAgent) ? g : FormData
		}
	}, function(z, r, g) {
		var p, t;
		(function() {
			function e(a, c) {
				c || a.match(/^data\:([^\;]+)\;base64,/im);
				a = a.replace(/^data\:([^\;]+)\;base64,/gim, "");
				for (var b = atob(a), f = b.length, e = new ArrayBuffer(f), d = new Uint8Array(e), h = 0; f > h; h++) d[h] = b.charCodeAt(h);
				return e
			}

			function k(a, c) {
				var b = new XMLHttpRequest;
				b.open("GET", a, !0);
				b.responseType = "blob";
				b.onload = function(a) {
					200 != this.status && 0 !== this.status || c(this.response)
				};
				b.send()
			}

			function g(b, d) {
				function f(f) {
					var e = a(f);
					a: {
						var h = new DataView(f);
						if (u && console.log("Got file of length " + f.byteLength), 255 != h.getUint8(0) || 216 != h.getUint8(1)) f = (u && console.log("Not a valid JPEG"), !1);
						else {
							for (var x = 2, w = f.byteLength; w > x;) {
								var A = h,
									q = x;
								if (56 === A.getUint8(q) && 66 === A.getUint8(q + 1) && 73 === A.getUint8(q + 2) && 77 === A.getUint8(q + 3) && 4 === A.getUint8(q + 4) && 4 === A.getUint8(q + 5)) {
									w = h.getUint8(x + 7);
									0 !== w % 2 && (w += 1);
									0 === w && (w = 4);
									q = x + 8 + w;
									var n = h.getUint16(x + 6 + w);
									A = w = x = h = void 0;
									f = new DataView(f);
									for (var m = {}, C = q; q + n > C;) 28 === f.getUint8(C) && 2 === f.getUint8(C + 1) && (h = f.getUint8(C + 2), h in E && (x = f.getInt16(C + 3), w = E[h], A = c(f, C + 5, x), m.hasOwnProperty(w) ? m[w] instanceof Array ? m[w].push(A) : m[w] = [m[w], A] : m[w] = A)), C++;
									f = m;
									break a
								}
								x++
							}
							f = void 0
						}
					}
					b.exifdata = e || {};
					b.iptcdata = f || {};
					d && d.call(b)
				}
				if (b.src)
					if (/^data\:/i.test(b.src)) {
						var h = e(b.src);
						f(h)
					} else if (/^blob\:/i.test(b.src)) {
					var x = new FileReader;
					x.onload = function(a) {
						f(a.target.result)
					};
					k(b.src, function(a) {
						x.readAsArrayBuffer(a)
					})
				} else {
					var w = new XMLHttpRequest;
					w.onload = function() {
						200 == this.status || 0 === this.status ? f(w.response) : d(Error("Could not load image"));
						w = null
					};
					w.open("GET", b.src, !0);
					w.responseType = "arraybuffer";
					w.send(null)
				} else window.FileReader && (b instanceof window.Blob || b instanceof window.File || "object" === typeof b.lastModifiedDate) && (x = new FileReader, x.onload = function(a) {
					u && console.log("Got file of length " + a.target.result.byteLength);
					f(a.target.result)
				}, x.readAsArrayBuffer(b))
			}

			function a(a) {
				var c = new DataView(a);
				if (u && console.log("Got file of length " + a.byteLength), 255 != c.getUint8(0) || 216 != c.getUint8(1)) return u && console.log("Not a valid JPEG"), !1;
				var b, f = 2;
				for (a = a.byteLength; a > f;) {
					if (255 != c.getUint8(f)) return u && console.log("Not a valid marker at offset " + f + ", found: " + c.getUint8(f)), !1;
					if (b = c.getUint8(f + 1), u && console.log(b), 225 == b) return u && console.log("Found 0xFFE1 marker"), n(c, f + 4, c.getUint16(f + 2) - 2);
					f += 2 + c.getUint16(f + 2)
				}
			}

			function b(a, c, b, e, h) {
				var f, x = a.getUint16(b, !h),
					q = {};
				for (f = 0; x > f; f++) {
					var A = b + 12 * f + 2;
					var m = e[a.getUint16(A, !h)];
					!m && u && console.log("Unknown tag: " + a.getUint16(A, !h));
					q[m] = d(a, A, c, b, h)
				}
				return q
			}

			function d(a, b, h, e, d) {
				var f, q, m, x = a.getUint16(b + 2, !d);
				e = a.getUint32(b + 4, !d);
				h = a.getUint32(b + 8, !d) + h;
				switch (x) {
					case 1:
					case 7:
						if (1 == e) return a.getUint8(b + 8, !d);
						var n = 4 < e ? h : b + 8;
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint8(n + f);
						return b;
					case 2:
						return n = 4 < e ? h : b + 8, c(a, n, e - 1);
					case 3:
						if (1 == e) return a.getUint16(b + 8, !d);
						n = 2 < e ? h : b + 8;
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint16(n + 2 * f, !d);
						return b;
					case 4:
						if (1 == e) return a.getUint32(b + 8, !d);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint32(h + 4 * f, !d);
						return b;
					case 5:
						if (1 == e) return q = a.getUint32(h, !d), m = a.getUint32(h + 4, !d), f = new Number(q / m), f.numerator = q, f.denominator = m, f;
						b = [];
						for (f = 0; e > f; f++) q = a.getUint32(h + 8 * f, !d), m = a.getUint32(h + 4 + 8 * f, !d), b[f] = new Number(q / m), b[f].numerator = q, b[f].denominator = m;
						return b;
					case 9:
						if (1 == e) return a.getInt32(b + 8, !d);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getInt32(h + 4 * f, !d);
						return b;
					case 10:
						if (1 == e) return a.getInt32(h, !d) / a.getInt32(h + 4, !d);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getInt32(h + 8 * f, !d) / a.getInt32(h + 4 + 8 * f, !d);
						return b
				}
			}

			function c(a, b, c) {
				var f, e = "";
				for (f = b; b + c > f; f++) e += String.fromCharCode(a.getUint8(f));
				return e
			}

			function n(a, e) {
				if ("Exif" != c(a, e, 4)) return u && console.log("Not valid EXIF data! " + c(a, e, 4)), !1;
				var f, d, n = e + 6;
				if (18761 == a.getUint16(n)) var x = !1;
				else {
					if (19789 != a.getUint16(n)) return u && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
					x = !0
				}
				if (42 != a.getUint16(n + 2, !x)) return u && console.log("Not valid TIFF data! (no 0x002A)"), !1;
				var l = a.getUint32(n + 4, !x);
				if (8 > l) return u && console.log("Not valid TIFF data! (First offset less than 8)", a.getUint32(n + 4, !x)), !1;
				if (f = b(a, n, n + l, q, x), f.ExifIFDPointer)
					for (d in l = b(a, n, n + f.ExifIFDPointer, h, x), l) {
						switch (d) {
							case "LightSource":
							case "Flash":
							case "MeteringMode":
							case "ExposureProgram":
							case "SensingMethod":
							case "SceneCaptureType":
							case "SceneType":
							case "CustomRendered":
							case "WhiteBalance":
							case "GainControl":
							case "Contrast":
							case "Saturation":
							case "Sharpness":
							case "SubjectDistanceRange":
							case "FileSource":
								l[d] = G[d][l[d]];
								break;
							case "ExifVersion":
							case "FlashpixVersion":
								l[d] = String.fromCharCode(l[d][0], l[d][1], l[d][2], l[d][3]);
								break;
							case "ComponentsConfiguration":
								l[d] = G.Components[l[d][0]] + G.Components[l[d][1]] + G.Components[l[d][2]] + G.Components[l[d][3]]
						}
						f[d] = l[d]
					}
				if (f.GPSInfoIFDPointer)
					for (d in x = b(a, n, n + f.GPSInfoIFDPointer, m, x), x) {
						switch (d) {
							case "GPSVersionID":
								x[d] = x[d][0] + "." + x[d][1] + "." + x[d][2] + "." + x[d][3]
						}
						f[d] = x[d]
					}
				return f
			}
			var u = !1,
				l = function(a) {
					return a instanceof l ? a : this instanceof l ? void(this.EXIFwrapped = a) : new l(a)
				};
			"undefined" != typeof z && z.exports && (r = z.exports = l);
			r.EXIF = l;
			var h = l.Tags = {
					36864: "ExifVersion",
					40960: "FlashpixVersion",
					40961: "ColorSpace",
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					37121: "ComponentsConfiguration",
					37122: "CompressedBitsPerPixel",
					37500: "MakerNote",
					37510: "UserComment",
					40964: "RelatedSoundFile",
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37520: "SubsecTime",
					37521: "SubsecTimeOriginal",
					37522: "SubsecTimeDigitized",
					33434: "ExposureTime",
					33437: "FNumber",
					34850: "ExposureProgram",
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: "OECF",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBias",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: "MeteringMode",
					37384: "LightSource",
					37385: "Flash",
					37396: "SubjectArea",
					37386: "FocalLength",
					41483: "FlashEnergy",
					41484: "SpatialFrequencyResponse",
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: "FocalPlaneResolutionUnit",
					41492: "SubjectLocation",
					41493: "ExposureIndex",
					41495: "SensingMethod",
					41728: "FileSource",
					41729: "SceneType",
					41730: "CFAPattern",
					41985: "CustomRendered",
					41986: "ExposureMode",
					41987: "WhiteBalance",
					41988: "DigitalZoomRation",
					41989: "FocalLengthIn35mmFilm",
					41990: "SceneCaptureType",
					41991: "GainControl",
					41992: "Contrast",
					41993: "Saturation",
					41994: "Sharpness",
					41995: "DeviceSettingDescription",
					41996: "SubjectDistanceRange",
					40965: "InteroperabilityIFDPointer",
					42016: "ImageUniqueID"
				},
				q = l.TiffTags = {
					256: "ImageWidth",
					257: "ImageHeight",
					34665: "ExifIFDPointer",
					34853: "GPSInfoIFDPointer",
					40965: "InteroperabilityIFDPointer",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					274: "Orientation",
					277: "SamplesPerPixel",
					284: "PlanarConfiguration",
					530: "YCbCrSubSampling",
					531: "YCbCrPositioning",
					282: "XResolution",
					283: "YResolution",
					296: "ResolutionUnit",
					273: "StripOffsets",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					301: "TransferFunction",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					529: "YCbCrCoefficients",
					532: "ReferenceBlackWhite",
					306: "DateTime",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					305: "Software",
					315: "Artist",
					33432: "Copyright"
				},
				m = l.GPSTags = {
					0: "GPSVersionID",
					1: "GPSLatitudeRef",
					2: "GPSLatitude",
					3: "GPSLongitudeRef",
					4: "GPSLongitude",
					5: "GPSAltitudeRef",
					6: "GPSAltitude",
					7: "GPSTimeStamp",
					8: "GPSSatellites",
					9: "GPSStatus",
					10: "GPSMeasureMode",
					11: "GPSDOP",
					12: "GPSSpeedRef",
					13: "GPSSpeed",
					14: "GPSTrackRef",
					15: "GPSTrack",
					16: "GPSImgDirectionRef",
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: "GPSDestLatitudeRef",
					20: "GPSDestLatitude",
					21: "GPSDestLongitudeRef",
					22: "GPSDestLongitude",
					23: "GPSDestBearingRef",
					24: "GPSDestBearing",
					25: "GPSDestDistanceRef",
					26: "GPSDestDistance",
					27: "GPSProcessingMethod",
					28: "GPSAreaInformation",
					29: "GPSDateStamp",
					30: "GPSDifferential"
				},
				G = l.StringValues = {
					ExposureProgram: {
						0: "Not defined",
						1: "Manual",
						2: "Normal program",
						3: "Aperture priority",
						4: "Shutter priority",
						5: "Creative program",
						6: "Action program",
						7: "Portrait mode",
						8: "Landscape mode"
					},
					MeteringMode: {
						0: "Unknown",
						1: "Average",
						2: "CenterWeightedAverage",
						3: "Spot",
						4: "MultiSpot",
						5: "Pattern",
						6: "Partial",
						255: "Other"
					},
					LightSource: {
						0: "Unknown",
						1: "Daylight",
						2: "Fluorescent",
						3: "Tungsten (incandescent light)",
						4: "Flash",
						9: "Fine weather",
						10: "Cloudy weather",
						11: "Shade",
						12: "Daylight fluorescent (D 5700 - 7100K)",
						13: "Day white fluorescent (N 4600 - 5400K)",
						14: "Cool white fluorescent (W 3900 - 4500K)",
						15: "White fluorescent (WW 3200 - 3700K)",
						17: "Standard light A",
						18: "Standard light B",
						19: "Standard light C",
						20: "D55",
						21: "D65",
						22: "D75",
						23: "D50",
						24: "ISO studio tungsten",
						255: "Other"
					},
					Flash: {
						0: "Flash did not fire",
						1: "Flash fired",
						5: "Strobe return light not detected",
						7: "Strobe return light detected",
						9: "Flash fired, compulsory flash mode",
						13: "Flash fired, compulsory flash mode, return light not detected",
						15: "Flash fired, compulsory flash mode, return light detected",
						16: "Flash did not fire, compulsory flash mode",
						24: "Flash did not fire, auto mode",
						25: "Flash fired, auto mode",
						29: "Flash fired, auto mode, return light not detected",
						31: "Flash fired, auto mode, return light detected",
						32: "No flash function",
						65: "Flash fired, red-eye reduction mode",
						69: "Flash fired, red-eye reduction mode, return light not detected",
						71: "Flash fired, red-eye reduction mode, return light detected",
						73: "Flash fired, compulsory flash mode, red-eye reduction mode",
						77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89: "Flash fired, auto mode, red-eye reduction mode",
						93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod: {
						1: "Not defined",
						2: "One-chip color area sensor",
						3: "Two-chip color area sensor",
						4: "Three-chip color area sensor",
						5: "Color sequential area sensor",
						7: "Trilinear sensor",
						8: "Color sequential linear sensor"
					},
					SceneCaptureType: {
						0: "Standard",
						1: "Landscape",
						2: "Portrait",
						3: "Night scene"
					},
					SceneType: {
						1: "Directly photographed"
					},
					CustomRendered: {
						0: "Normal process",
						1: "Custom process"
					},
					WhiteBalance: {
						0: "Auto white balance",
						1: "Manual white balance"
					},
					GainControl: {
						0: "None",
						1: "Low gain up",
						2: "High gain up",
						3: "Low gain down",
						4: "High gain down"
					},
					Contrast: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					Saturation: {
						0: "Normal",
						1: "Low saturation",
						2: "High saturation"
					},
					Sharpness: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					SubjectDistanceRange: {
						0: "Unknown",
						1: "Macro",
						2: "Close view",
						3: "Distant view"
					},
					FileSource: {
						3: "DSC"
					},
					Components: {
						0: "",
						1: "Y",
						2: "Cb",
						3: "Cr",
						4: "R",
						5: "G",
						6: "B"
					}
				},
				E = {
					120: "caption",
					110: "credit",
					25: "keywords",
					55: "dateCreated",
					80: "byline",
					85: "bylineTitle",
					122: "captionWriter",
					105: "headline",
					116: "copyright",
					15: "category"
				};
			l.getData = function(a, b) {
				return (a instanceof Image || a instanceof HTMLImageElement) && !a.complete ? !1 : (a.exifdata ? b && b.call(a) : g(a, b), !0)
			};
			l.getTag = function(a, b) {
				return a.exifdata ? a.exifdata[b] : void 0
			};
			l.getAllTags = function(a) {
				if (!a.exifdata) return {};
				var b;
				a = a.exifdata;
				var c = {};
				for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
				return c
			};
			l.pretty = function(a) {
				if (!a.exifdata) return "";
				var b;
				a = a.exifdata;
				var c = "";
				for (b in a) a.hasOwnProperty(b) && (c += "object" == typeof a[b] ? a[b] instanceof Number ? b + " : " + a[b] + " [" + a[b].numerator + "/" + a[b].denominator + "]\r\n" : b + " : [" + a[b].length + " values]\r\n" : b + " : " + a[b] + "\r\n");
				return c
			};
			l.readFromBinaryFile = function(b) {
				return a(b)
			};
			p = [];
			t = function() {
				return l
			}.apply(r, p);
			!(void 0 !== t && (z.exports = t))
		}).call(this)
	}, function(z, r, g) {
		var p, t;
		! function() {
			function e(a, b, d) {
				var c = document.createElement("canvas");
				return k(a, c, b, d), c.toDataURL("image/jpeg", b.quality || .8)
			}

			function k(a, b, d, c) {
				var e = a.naturalWidth,
					u = a.naturalHeight,
					l = d.width,
					h = d.height,
					q = b.getContext("2d");
				q.save();
				d = d.orientation;
				switch (d) {
					case 5:
					case 6:
					case 7:
					case 8:
						b.width = h;
						b.height = l;
						break;
					default:
						b.width = l, b.height = h
				}
				switch (d) {
					case 2:
						q.translate(l, 0);
						q.scale(-1, 1);
						break;
					case 3:
						q.translate(l, h);
						q.rotate(Math.PI);
						break;
					case 4:
						q.translate(0, h);
						q.scale(1, -1);
						break;
					case 5:
						q.rotate(.5 * Math.PI);
						q.scale(1, -1);
						break;
					case 6:
						q.rotate(.5 * Math.PI);
						q.translate(0, -h);
						break;
					case 7:
						q.rotate(.5 * Math.PI);
						q.translate(l, -h);
						q.scale(-1, 1);
						break;
					case 8:
						q.rotate(-.5 * Math.PI), q.translate(-l, 0)
				}
				b = a.naturalWidth;
				1048576 < b * a.naturalHeight ? (d = document.createElement("canvas"), d.width = d.height = 1, d = d.getContext("2d"), b = (d.drawImage(a, -b + 1, 0), 0 === d.getImageData(0, 0, 1, 1).data[3])) : b = !1;
				b && (e /= 2, u /= 2);
				b = document.createElement("canvas");
				b.width = b.height = 1024;
				d = b.getContext("2d");
				if (c) {
					c = u;
					var m = document.createElement("canvas");
					m.width = 1;
					m.height = c;
					m = m.getContext("2d");
					m.drawImage(a, 0, 0);
					m = m.getImageData(0, 0, 1, c).data;
					for (var k = 0, g = c, f = c; f > k;) 0 === m[4 * (f - 1) + 3] ? g = f : k = f, f = g + k >> 1;
					c = f / c;
					c = 0 === c ? 1 : c
				} else c = 1;
				l = Math.ceil(1024 * l / e);
				h = Math.ceil(1024 * h / u / c);
				for (m = c = 0; u > c;) {
					for (g = k = 0; e > k;) d.clearRect(0, 0, 1024, 1024), d.drawImage(a, -k, -c), q.drawImage(b, 0, 0, 1024, 1024, g, m, l, h), k += 1024, g += l;
					c += 1024;
					m += h
				}
				q.restore()
			}

			function g(a) {
				if (window.Blob && a instanceof Blob) {
					var b = new Image,
						d = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
					if (!d) throw Error("No createObjectURL function found to create blob url");
					b.src = d.createObjectURL(a);
					this.blob = a;
					a = b
				}
				if (!a.naturalWidth && !a.naturalHeight) {
					var c = this;
					a.onload = function() {
						var a = c.imageLoadListeners;
						if (a) {
							c.imageLoadListeners = null;
							for (var b = 0, d = a.length; d > b; b++) a[b]()
						}
					};
					this.imageLoadListeners = []
				}
				this.srcImage = a
			}
			g.prototype.render = function(a, b, d) {
				if (this.imageLoadListeners) {
					var c = this;
					return void this.imageLoadListeners.push(function() {
						c.render(a, b, d)
					})
				}
				b = b || {};
				var n = this.srcImage,
					u = n.src,
					l = u.length,
					h = n.naturalWidth;
				n = n.naturalHeight;
				var q = b.width,
					m = b.height,
					g = b.maxWidth,
					t = b.maxHeight;
				u = this.blob && "image/jpeg" === this.blob.type || 0 === u.indexOf("data:image/jpeg") || u.indexOf(".jpg") === l - 4 || u.indexOf(".jpeg") === l - 5;
				q && !m ? m = n * q / h << 0 : m && !q ? q = h * m / n << 0 : (q = h, m = n);
				g && q > g && (q = g, m = n * q / h << 0);
				t && m > t && (m = t, q = h * m / n << 0);
				h = {
					width: q,
					height: m
				};
				for (var f in b) h[f] = b[f];
				f = a.tagName.toLowerCase();
				"img" === f ? a.src = e(this.srcImage, h, u) : "canvas" === f && k(this.srcImage, a, h, u);
				"function" == typeof this.onrender && this.onrender(a);
				d && d()
			};
			p = [];
			t = function() {
				return g
			}.apply(r, p);
			!(void 0 !== t && (z.exports = t))
		}()
	}, function(z, r) {
		z.exports = function(g) {
			function p(a, b) {
				for (var c = 0, f = 0, d = [], e = 1; 16 >= e; e++) {
					for (var h = 1; h <= a[e]; h++) d[b[f]] = [], d[b[f]][0] = c, d[b[f]][1] = e, f++, c++;
					c *= 2
				}
				return d
			}

			function t(a) {
				var b = a[0];
				for (a = a[1] - 1; 0 <= a;) b & 1 << a && (C |= 1 << w), a--, w--, 0 > w && (255 == C ? (e(255), e(0)) : e(C), w = 7, C = 0)
			}

			function e(a) {
				A.push(I[a])
			}

			function k(a) {
				e(a >> 8 & 255);
				e(255 & a)
			}

			function v(a, b, c, d, e) {
				var h, y = e[0],
					q = e[240],
					m, n = 0;
				for (m = 0; 8 > m; ++m) {
					var l = a[n];
					var u = a[n + 1];
					var D = a[n + 2];
					var g = a[n + 3];
					var k = a[n + 4];
					var w = a[n + 5];
					var A = a[n + 6];
					var C = a[n + 7];
					var p = l + C;
					l -= C;
					C = u + A;
					u -= A;
					A = D + w;
					D -= w;
					w = g + k;
					g -= k;
					k = p + w;
					p -= w;
					w = C + A;
					C -= A;
					a[n] = k + w;
					a[n + 4] = k - w;
					k = .707106781 * (C + p);
					a[n + 2] = p + k;
					a[n + 6] = p - k;
					k = g + D;
					w = D + u;
					C = u + l;
					D = .382683433 * (k - C);
					g = .5411961 * k + D;
					k = 1.306562965 * C + D;
					w *= .707106781;
					D = l + w;
					l -= w;
					a[n + 5] = l + g;
					a[n + 3] = l - g;
					a[n + 1] = D + k;
					a[n + 7] = D - k;
					n += 8
				}
				for (m = n = 0; 8 > m; ++m) l = a[n], u = a[n + 8], D = a[n + 16], g = a[n + 24], k = a[n + 32], w = a[n + 40], A = a[n + 48], C = a[n + 56], p = l + C, l -= C, C = u + A, u -= A, A = D + w, D -= w, w = g + k, g -= k, k = p + w, p -= w, w = C + A, C -= A, a[n] = k + w, a[n + 32] = k - w, k = .707106781 * (C + p), a[n + 16] = p + k, a[n + 48] = p - k, k = g + D, w = D + u, C = u + l, D = .382683433 * (k - C), g = .5411961 * k + D, k = 1.306562965 * C + D, w *= .707106781, D = l + w, l -= w, a[n + 40] = l + g, a[n + 24] = l - g, a[n + 8] = D + k, a[n + 56] = D - k, n++;
				for (m = 0; 64 > m; ++m) n = a[m] * b[m], x[m] = 0 < n ? n + .5 | 0 : n - .5 | 0;
				a = x;
				for (b = 0; 64 > b; ++b) B[H[b]] = a[b];
				a = B[0] - c;
				c = B[0];
				0 == a ? t(d[0]) : (h = 32767 + a, t(d[f[h]]), t(E[h]));
				for (d = 63; 0 < d && 0 == B[d]; d--);
				if (0 == d) return t(y), c;
				for (a = 1; d >= a;) {
					for (h = a; 0 == B[a] && d >= a; ++a);
					b = a - h;
					if (16 <= b) {
						h = b >> 4;
						for (m = 1; h >= m; ++m) t(q);
						b &= 15
					}
					h = 32767 + B[a];
					t(e[(b << 4) + f[h]]);
					t(E[h]);
					a++
				}
				return 63 != d && t(y), c
			}

			function a(a) {
				if (0 >= a && (a = 1), 100 < a && (a = 100), u != a) {
					var b = 50 > a ? Math.floor(5E3 / a) : Math.floor(200 - 2 * a);
					for (var c = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], d = 0; 64 > d; d++) {
						var f = l((c[d] * b + 50) / 100);
						1 > f ? f = 1 : 255 < f && (f = 255);
						h[H[d]] = f
					}
					c = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
					for (d = 0; 64 > d; d++) f = l((c[d] * b + 50) / 100), 1 > f ? f = 1 : 255 < f && (f = 255), q[H[d]] = f;
					b = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379];
					for (d = c = 0; 8 > d; d++)
						for (f = 0; 8 > f; f++) m[c] = 1 / (h[H[c]] * b[d] * b[f] * 8), r[c] = 1 / (q[H[c]] * b[d] * b[f] * 8), c++;
					u = a
				}
			}
			var b, d, c, n, u, l = (Math.round, Math.floor),
				h = Array(64),
				q = Array(64),
				m = Array(64),
				r = Array(64),
				E = Array(65535),
				f = Array(65535),
				x = Array(64),
				B = Array(64),
				A = [],
				C = 0,
				w = 7,
				K = Array(64),
				z = Array(64),
				L = Array(64),
				I = Array(256),
				F = Array(2048),
				H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
				M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				O = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
				P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65,
					6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233,
					234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
				],
				R = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
				S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				T = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
				U = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
					152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
				];
			this.encode = function(f, y, l) {
				var u = (new Date).getTime();
				y && a(y);
				A = [];
				C = 0;
				w = 7;
				k(65496);
				k(65504);
				k(16);
				e(74);
				e(70);
				e(73);
				e(70);
				e(0);
				e(1);
				e(1);
				e(0);
				k(1);
				k(1);
				e(0);
				e(0);
				k(65499);
				k(132);
				e(0);
				for (y = 0; 64 > y; y++) e(h[y]);
				e(1);
				for (y = 0; 64 > y; y++) e(q[y]);
				y = f.width;
				var g = f.height;
				k(65472);
				k(17);
				e(8);
				k(g);
				k(y);
				e(3);
				e(1);
				e(17);
				e(0);
				e(2);
				e(17);
				e(1);
				e(3);
				e(17);
				e(1);
				k(65476);
				k(418);
				e(0);
				for (y = 0; 16 > y; y++) e(M[y + 1]);
				for (y = 0; 11 >= y; y++) e(N[y]);
				e(16);
				for (y = 0; 16 > y; y++) e(O[y + 1]);
				for (y = 0; 161 >= y; y++) e(P[y]);
				e(1);
				for (y = 0; 16 > y; y++) e(R[y + 1]);
				for (y = 0; 11 >= y; y++) e(S[y]);
				e(17);
				for (y = 0; 16 > y; y++) e(T[y + 1]);
				for (y = 0; 161 >= y; y++) e(U[y]);
				k(65498);
				k(12);
				e(3);
				e(1);
				e(0);
				e(2);
				e(17);
				e(3);
				e(17);
				e(0);
				e(63);
				e(0);
				var x = g = y = 0;
				C = 0;
				w = 7;
				this.encode.displayName = "_encode_";
				for (var D, p, B, E, G, H = f.data, J = f.height, I = 4 * f.width, Q = 0; J > Q;) {
					for (f = 0; I > f;) {
						E = I * Q + f;
						for (G = 0; 64 > G; G++) p = G >> 3, D = 4 * (7 & G), B = E + p * I + D, Q + p >= J && (B -= I * (Q + 1 + p - J)), f + D >= I && (B -= f + D - I + 4), D = H[B++], p = H[B++], B = H[B++], K[G] = (F[D] + F[p + 256 >> 0] + F[B + 512 >> 0] >> 16) - 128, z[G] = (F[D + 768 >> 0] + F[p + 1024 >> 0] + F[B + 1280 >> 0] >> 16) - 128, L[G] = (F[D + 1280 >> 0] + F[p + 1536 >> 0] + F[B + 1792 >> 0] >> 16) - 128;
						y = v(K, m, y, b, c);
						g = v(z, r, g, d, n);
						x = v(L, r, x, d, n);
						f += 32
					}
					Q += 8
				}
				0 <= w && (f = [], f[1] = w + 1, f[0] = (1 << w + 1) - 1, t(f));
				if (k(65497), l) {
					l = A.length;
					f = new Uint8Array(l);
					for (y = 0; l > y; y++) f[y] = A[y].charCodeAt();
					A = [];
					(new Date).getTime() - u;
					return f
				}
				l = "data:image/jpeg;base64," + btoa(A.join(""));
				A = [];
				(new Date).getTime() - u;
				return l
			};
			(function() {
				var e = (new Date).getTime();
				g || (g = 50);
				for (var h = String.fromCharCode, m = 0; 256 > m; m++) I[m] = h(m);
				b = p(M, N);
				d = p(R, S);
				c = p(O, P);
				n = p(T, U);
				h = 1;
				m = 2;
				for (var q = 1; 15 >= q; q++) {
					for (var l = h; m > l; l++) f[32767 + l] = q, E[32767 + l] = [], E[32767 + l][1] = q, E[32767 + l][0] = l;
					for (l = -(m - 1); - h >= l; l++) f[32767 + l] = q, E[32767 + l] = [], E[32767 + l][1] = q, E[32767 + l][0] = m - 1 + l;
					h <<= 1;
					m <<= 1
				}
				for (h = 0; 256 > h; h++) F[h] = 19595 * h, F[h + 256 >> 0] = 38470 * h, F[h + 512 >> 0] = 7471 * h + 32768, F[h + 768 >> 0] = -11059 * h, F[h + 1024 >> 0] = -21709 * h, F[h + 1280 >> 0] = 32768 * h + 8421375, F[h + 1536 >> 0] = -27439 * h, F[h + 1792 >> 0] = -5329 * h;
				a(g);
				(new Date).getTime() - e
			})()
		}
	}, function(z, r, g) {
		function p(a, b) {
			if (!a) throw Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
			b = b || {};
			this.defaults = {
				width: null,
				height: null,
				fieldName: "file",
				quality: .7
			};
			this.file = a;
			for (var d in b) b.hasOwnProperty(d) && (this.defaults[d] = b[d]);
			return this.init()
		}
		g.p = function(a) {
			var b = null;
			return b = a ? [].filter.call(document.scripts, function(b) {
				return -1 !== b.src.indexOf(a)
			})[0] : document.scripts[document.scripts.length - 1], b ? b.src.substr(0, b.src.lastIndexOf("/")) : null
		}("lrz") + "/";
		window.URL = window.URL || window.webkitURL;
		var t = g(1),
			e = g(4),
			k = g(5),
			v = function(a) {
				var b = /OS (\d)_.* like Mac OS X/g.exec(a),
					d = /Android (\d.*?);/g.exec(a) || /Android\/(\d.*?) /g.exec(a);
				return {
					oldIOS: b ? 8 > +b.pop() : !1,
					oldAndroid: d ? 4.5 > +d.pop().substr(0, 3) : !1,
					iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(a),
					android: /Android/g.test(a),
					mQQBrowser: /MQQBrowser/g.test(a)
				}
			}(navigator.userAgent);
		p.prototype.init = function() {
			var a = this,
				b = a.file,
				d = "string" == typeof b,
				c = /^data:/.test(b),
				n = new Image,
				k = document.createElement("canvas"),
				l = d ? b : URL.createObjectURL(b);
			if (a.img = n, a.blob = l, a.canvas = k, d ? a.fileName = c ? "base64.jpg" : b.split("/").pop() : a.fileName = b.name, !document.createElement("canvas").getContext) throw Error("浏览器不支持canvas");
			return new t(function(d, q) {
				n.onerror = function() {
					var a = Error("加载图片文件失败");
					throw q(a), a;
				};
				n.onload = function() {
					a._getBase64().then(function(a) {
						if (10 > a.length) throw a = Error("生成base64失败"),
							q(a), a;
						return a
					}).then(function(c) {
						if ("object" == typeof a.file && c.length > a.file.size) {
							var h = new FormData;
							b = a.file
						} else {
							h = new e.FormData;
							var n = 0 <= c.split(",")[0].indexOf("base64") ? atob(c.split(",")[1]) : unescape(c.split(",")[1]);
							for (var f = c.split(",")[0].split(":")[1].split(";")[0], l = new Uint8Array(n.length), q = 0; q < n.length; q++) l[q] = n.charCodeAt(q);
							b = new e.Blob([l.buffer], {
								type: f
							})
						}
						h.append(a.defaults.fieldName, b, a.fileName.replace(/\..+/g, ".jpg"));
						d({
							formData: h,
							fileLen: +b.size,
							base64: c,
							base64Len: c.length,
							origin: a.file,
							file: b
						});
						for (var m in a) a.hasOwnProperty(m) && (a[m] = null);
						URL.revokeObjectURL(a.blob)
					})
				};
				!c && (n.crossOrigin = "*");
				n.src = l
			})
		};
		p.prototype._getBase64 = function() {
			var a = this,
				b = a.img,
				d = a.file,
				c = a.canvas;
			return new t(function(e) {
				try {
					k.getData("object" == typeof d ? d : b, function() {
						a.orientation = k.getTag(this, "Orientation");
						a.resize = a._getResize();
						a.ctx = c.getContext("2d");
						c.width = a.resize.width;
						c.height = a.resize.height;
						a.ctx.fillStyle = "#fff";
						a.ctx.fillRect(0, 0, c.width, c.height);
						v.oldIOS ? a._createBase64ForOldIOS().then(e) : a._createBase64().then(e)
					})
				} catch (u) {
					throw Error(u);
				}
			})
		};
		p.prototype._createBase64ForOldIOS = function() {
			var a = this.img,
				b = this.canvas,
				d = this.defaults,
				c = this.orientation;
			return new t(function(e) {
				! function() {
					var n = [g(6)];
					(function(n) {
						n = new n(a); - 1 < "5678".indexOf(c) ? n.render(b, {
							width: b.height,
							height: b.width,
							orientation: c
						}) : n.render(b, {
							width: b.width,
							height: b.height,
							orientation: c
						});
						e(b.toDataURL("image/jpeg", d.quality))
					}).apply(null, n)
				}()
			})
		};
		p.prototype._createBase64 = function() {
			var a = this.resize,
				b = this.img,
				d = this.canvas,
				c = this.ctx,
				e = this.defaults;
			switch (this.orientation) {
				case 3:
					c.rotate(180 * Math.PI / 180);
					c.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 6:
					c.rotate(90 * Math.PI / 180);
					c.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 8:
					c.rotate(270 * Math.PI / 180);
					c.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				case 2:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.drawImage(b, 0, 0, a.width, a.height);
					break;
				case 4:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(180 * Math.PI / 180);
					c.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 5:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(90 * Math.PI / 180);
					c.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 7:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(270 * Math.PI / 180);
					c.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				default:
					c.drawImage(b, 0, 0, a.width, a.height)
			}
			return new t(function(a) {
				v.oldAndroid || v.mQQBrowser || !navigator.userAgent ? ! function() {
					var b = [g(7)];
					(function(b) {
						b = new b;
						var h = c.getImageData(0, 0, d.width, d.height);
						a(b.encode(h, 100 * e.quality))
					}).apply(null, b)
				}() : a(d.toDataURL("image/jpeg", e.quality))
			})
		};
		p.prototype._getResize = function() {
			var a = this.img,
				b = this.defaults,
				d = b.width;
			b = b.height;
			var c = {
				width: a.width,
				height: a.height
			};
			if (-1 < "5678".indexOf(this.orientation) && (c.width = a.height, c.height = a.width), c.width < d || c.height < b) return c;
			a = c.width / c.height;
			for (d && b ? a >= d / b ? c.width > d && (c.width = d, c.height = Math.ceil(d / a)) : c.height > b && (c.height = b, c.width = Math.ceil(b * a)) : d ? d < c.width && (c.width = d, c.height = Math.ceil(d / a)) : b && b < c.height && (c.width = Math.ceil(b * a), c.height = b); 3264 <= c.width || 2448 <= c.height;) c.width *= .8, c.height *= .8;
			return c
		};
		window.lrz = function(a, b) {
			return new p(a, b)
		};
		window.lrz.version = "4.9.40";
		z.exports = window.lrz
	}])
});
$(function() {
	function z(a) {
		function b() {
			if (window.InputSuggest && !m && p && q[p]) {
				var b = function(a, b) {
						if (k) return !1;
						var c = a.elems.$list.parent(),
							d = b.data[0],
							h;
						f = !1;
						x = null;
						v.find(".m-search-tips-wrap .J-suggest-list li").removeClass("hover");
						$(d).addClass("hover");
						if ($(d).hasClass("J-related")) {
							c.addClass("m-query-open");
							var n = "";
							0 == c.find(".J-suggest-related").length && (n += '\x3cdiv class\x3d"m-search-tips-query J-suggest-related"\x3e');
							n = n + '\x3cdiv class\x3d"m-search-tips-query-box J-related-box"\x3e' + ('\x3cdiv class\x3d"m-search-tips-query-title"\x3e' + $(d).attr("val") + "\x3c/div\x3e");
							if ((h = a.getData(a.getLastWord(), "sug", $(d).attr("data-index"))) && h.related && 0 < h.related.length) {
								var l = a.getData(a.getLastWord(), "sug", 0);
								var q = l.rUrlMode;
								l = l.replaceWord;
								if (q)
									for (var m = 0; m < h.related.length; m++) n += '\x3ca href\x3d"' + q.replace(l, h.related[m].linkWord) + '" class\x3d"m-search-tips-query-item"\x3e' + h.related[m].word + "\x3c/a\x3e"
							}
							n += "\x3c/div\x3e";
							0 == c.find(".J-suggest-related").length ? c.append(n + "\x3c/div\x3e") : c.find(".J-suggest-related").html(n);
							d = d.offsetTop;
							n = c.find(".J-suggest-related");
							q = c.find(".J-related-box");
							h = parseInt(q.height(), 10);
							n = parseInt(n.height(), 10);
							q.css("marginTop", (d + h + 5 >= n ? n - h - 5 : d + 5) + "px");
							f = !0;
							e = c.find(".J-related-box a")
						} else c.find(".J-suggest-related").remove(), c.removeClass("m-query-open");
						A = null
					},
					c = {
						sug: '\x3cli class\x3d"m-search-tip \x3c$ if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) return "J-related"; $\x3e" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" data-code\x3d"{catCode}" \x3c$ if (typeof _index !\x3d "undefined") { return "data-index\x3d\\"" + _index + "\\"" } $\x3e \x3e{{word}}\x3c$ if (catName) { return (" in " + "\x3cem class\x3d\\"keyword-cate\\"\x3e"+ catName + "\x3c/em\x3e"); } else if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) { return "\x3ci class\x3d\\"ob-icon icon-right\\"\x3e\x3c/i\x3e"; } $\x3e\x3c/li\x3e',
						seo: '\x3cli class\x3d"m-search-suggest-seo" unchoose\x3d"true"\x3e\x3ca href\x3d"{link}"\x3e{word}\x3c/a\x3e\x3c/li\x3e',
						ads: '\x3cli class\x3d"m-search-suggest-ads" unchoose\x3d"true"\x3e\x3cdiv class\x3d"suggest-pro cf"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" class\x3d"pro-img" ads-data\x3d"{adsData},pa:1"\x3e\x3cimg src\x3d"{img}" width\x3d"80" height\x3d"60" alt\x3d""\x3e\x3c/a\x3e\x3cdiv class\x3d"pro-links"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" ads-data\x3d"{adsData},pa:2"\x3e{name}\x3c/a\x3e\x3ca href\x3d"{comUrl}" target\x3d"_blank" class\x3d"company" ads-data\x3d"{adsData},pa:3"\x3e{comName}\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e'
					},
					f = !1,
					h = !1,
					e = null,
					x = null,
					u = $(a).find(".J-searchSuggest");
				k && (c.sug = '\x3cli class\x3d"m-search-tip \x3c$ if (typeof related !\x3d"undefined" \x26\x26 related.length \x3e 0) return "J-related"; $\x3e" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" data-code\x3d"{catCode}" style\x3d"\x3c$ if (related.length \x3d\x3d 0) return "display:none"; $\x3e"\x3c$ if (typeof _index !\x3d "undefined") { return "data-index\x3d\\"" + _index + "\\"" } $\x3e \x3e{{word}}\x3c/li\x3e');
				$(l).bind("keydown", function(a) {
					if (f) {
						x && x.removeClass("hover");
						switch (a.keyCode) {
							case 38:
							case 40:
								h = !1;
								x = null;
								break;
							case 37:
								a.preventDefault();
								x = x && x.prev("a").length ? x.prev("a") : e.last();
								break;
							case 39:
								x = x && x.next("a").length ? x.next("a") : e.first();
								break;
							case 13:
								x && (h = !0, x.get(0).click())
						}
						x && x.addClass("hover")
					}
				});
				g = new InputSuggest({
					carrier: l,
					targetCarrier: u,
					ignoreCase: !0,
					asyncData: {
						url: q[p]
					},
					isEncodeParam: !0,
					style: {
						container: "ul",
						highlightCls: "keyword-highlight",
						selectedCls: " ",
						listCls: "J-suggest-list"
					},
					templates: c,
					triggerOver: !1
				});
				window.inputSuggest = g;
				g.sugCustomAction = function(b) {
					h || (b.attr("data-code") && n(a, "code", b.attr("data-code")), n(a, "log_from", "1"), $(a).submit())
				};
				g.adsCustomAction = function(a, b) {
					13 == b.keyCode && a.find("a:eq(0)")[0].click()
				};
				g.on("show", function() {
					k ? u.find(".J-related").length ? u.show() : u.hide() : u.show()
				});
				g.on("hide", function() {
					u.hide()
				});
				var A = null;
				g.on("over", function(a) {
					A = a;
					b(this, A)
				});
				g.on("originalMouseMove", function(a) {
					A = a
				});
				g.on("inputChange", function() {
					var a = this.elems.$list.parent();
					a.find(".J-suggest-related").remove();
					a.removeClass("m-query-open")
				});
				$(l).bind("focus", function() {
					$.trim($(l).val()).length && g.show()
				});
				m = !0;
				var t = null,
					B = -1,
					r = v.find(".m-search-tips-wrap");
				r.on("mouseleave", ".J-suggest-list .J-related", function(a) {
					0 > B && !t && (t = {
						x: a.clientX,
						y: a.clientY
					})
				}).on("mousemove", ".J-suggest-list li", function(a) {
					if (t) {
						if (t.x !== a.clientX || t.y !== a.clientY) 45 > Math.abs(d(t, {
							x: a.clientX,
							y: a.clientY
						})) ? B = setTimeout(function() {
							A && (r.find(".J-suggest-list li").removeClass("hover"), b(g, $.extend(!0, {}, A)), A = null);
							B = -1
						}, 400) : (r.find(".J-suggest-list li").removeClass("hover"), A && b(g, A)), t = null
					} else 0 > B && (r.find(".J-suggest-list li").removeClass("hover"), A && b(g, A))
				}).on("mouseenter", ".J-suggest-related", function() {
					0 < B && (r.find(".J-suggest-list li.hover").trigger("mousemove"), clearTimeout(B), B = -1)
				})
			}
		}

		function d(a, b) {
			return 360 * Math.atan((b.y - a.y) / (b.x - a.x)) / (2 * Math.PI)
		}

		function c(b, c) {
			var f = document.createElement("input");
			f.type = "hidden";
			f.name = b;
			f.value = c;
			a.appendChild(f)
		}

		function n(a, b, c) {
			0 < $(a).find("input[name\x3d" + b + "]").length && $(a).find("input[name\x3d" + b + "]").remove();
			$(a).append('\x3cinput type\x3d"hidden" name\x3d"' + b + '" value\x3d"' + c + '"/\x3e')
		}
		var g;
		if (a && a.word) {
			var l = a.word,
				h = $(a).find(".J-searchType select")[0],
				q = {
					product: "//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26seo\x3d1\x26call\x3d?",
					supplier: "//keywordsuggestions.made-in-china.com/suggest/getEnSupplierSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"
				},
				m = !1,
				p = $(l).attr("data-suggest");
			$(a).attr("data-type");
			b();
			if (h) {
				var t = $(a).find(".J-searchType"),
					f = null,
					x, B;
				h = new MaskSelect({
					carrier: t,
					trigger: "ontouchend" in window ? "click" : "mouseover",
					control: {
						selectedHide: $(a).find(".J-selectedHide").length ? "true" === $(a).find(".J-selectedHide").val() : !1
					},
					style: {
						tagName: "m-search-select",
						listCls: "m-search-option-list",
						menuCls: "m-search-select-title",
						optCls: "m-search-option"
					}
				});
				var A;
				window.topSearchSelect = h;
				h.onchange(function() {
					p = $(this).attr("data-suggest");
					a.action = $(this).attr("data-action");
					m || b();
					g && (q[p] ? (g.changeAsync(q[p]), g.disabled(!1)) : g.disabled(!0));
					A = $(this).attr("data-width") + "px";
					t.parent().css("width", A);
					$(a).find(".m-search-input-wrap .layout-body").css("marginLeft", A);
					l.setAttribute("placeholder", this.getAttribute("placeholder"));
					f = $(a).attr("action");
					if (-1 !== f.indexOf("?"))
						if (f = f.split("?")[1], $(a).find("input[type\x3dhidden]").not("[name\x3dpreviewPersonalFlag]").remove(), -1 !== f.indexOf("\x26")) {
							x = f.split("\x26");
							for (var d = 0; d < x.length; d++) B = x[d].split("\x3d"), c(B[0], -1 !== B[1].indexOf("{word}") ? encodeURIComponent(l.value) : B[1])
						} else -1 !== f.indexOf("\x3d") && (B = f.split("\x3d"), c(B[0], B[1]))
				});
				h.triggerChange();
				h.onchange(function(a) {
					"Products" === $(this).text() ? $(".J-at-pic-search").show() : $(".J-at-pic-search").hide()
				})
			}
			$(a).bind("submit", function(b) {
				if ($(l).attr("data-customLink") && "" === $.trim(l.value)) return window.location.href = $(l).attr("data-customLink"), b.preventDefault(), !1;
				if ("" === $.trim(l.value)) return alert("Please enter a keyword at least for your search."),
					b.preventDefault(), !1;
				if (!/^[\x00-\x7F\xB0]*$/.test(l.value)) return alert("Please input the information in English only."), b.preventDefault(), !1;
				if (0 < $(".J-reset-action").length) {
					b = $(".J-reset-action").val();
					var c = $(".J-extra-param");
					0 < c.length && $(a).append(c);
					$(a).attr("action", b)
				}
			});
			(function() {
				function b() {
					h || (h = !0, $.getJSON("//www.made-in-china.com/ajaxfunction.do?xcase\x3dgetKeywordHistory\x26jsoncallback\x3d?", function(a) {
						var b = "",
							f = "\x3cul\x3e";
						a && a.type && ("1" == a.type && (b = "Popular Searches"), "2" == a.type && (b = "Your Recent Keywords"));
						b && (f += '\x3cli class\x3d"m-search-tip-title"\x3e' + b + "\x3c/li\x3e");
						if (a && a.list && 0 < a.list.length) {
							b = a.list;
							for (var h = 0; h < b.length; h++) f += '\x3cli class\x3d"m-search-tip J-search-tip-item" ' + ("2" == a.type ? 'data-word\x3d"' + e(decodeURIComponent(b[h].word).replace(/\+/g, " ")) + '"' : "") + '\x3e\x3ca class\x3d"ellipsis" href\x3d"' + (b[h].link ? b[h].link : "javascript:void(0);") + '"\x3e' + e(decodeURIComponent(b[h].word).replace(/\+/g, " ")) + "\x3c/a\x3e\x3c/li\x3e";
							"2" == a.type && (f += '\x3cli class\x3d"m-search-tip-clear"\x3e\x3ca class\x3d"link-blue J-clear-search-history" href\x3d"javascript:void(0);"\x3eClear History\x3c/a\x3e\x3c/li\x3e');
							d.html(f + "\x3c/ul\x3e");
							c()
						}
					}))
				}

				function c() {
					"none" === d.css("display") && n && "" === $.trim(l.value) && "" !== $.trim(d.html()) && (d.show(), q = $(d).find(".J-search-tip-item"), q.hover(function() {
						m && m.removeClass("hover");
						$(this).addClass("hover");
						m = $(this)
					}, function() {
						$(this).removeClass("hover")
					}))
				}

				function f() {
					d.hide();
					m && m.removeClass("hover");
					m = null
				}
				var d = $(a).find(".J-searchHistory"),
					h = !1,
					n = !1,
					q, m;
				0 !== d.length && ($(a).find(".J-inputWrap").hover(function() {
					b();
					c()
				}, function(a) {
					f()
				}), $(l).bind("keyup", function(a) {
					27 !== a.keyCode && ("" !== $.trim(l.value) ? f() : c())
				}), $(l).bind("focus", function() {
					n = !0;
					c()
				}), $(l).bind("blur", function() {
					n = !1
				}), $(window).bind("load", function() {
					document.activeElement === l && (n = !0, b())
				}), $(l).bind("keydown", function(b) {
					if (q && 0 < q.length) {
						m && m.removeClass("hover");
						switch (b.keyCode) {
							case 38:
								m = m && m.prev(".J-search-tip-item").length ? m.prev(".J-search-tip-item") : m ? null : q.last();
								break;
							case 40:
								m = m && m.next(".J-search-tip-item").length ? m.next(".J-search-tip-item") : m ? null : q.first();
								break;
							case 13:
								m && (m.attr("data-word") ? ($(this).blur(), $(this).val(m.attr("data-word")), $(a).submit()) : (m.find("a").get(0).click(), b.preventDefault()));
								break;
							case 27:
								f()
						}
						m && m.addClass("hover")
					}
				}), d.bind("click", function(b) {
					if ($(b.target).hasClass("J-clear-search-history")) return $.removeCookie && ($.removeCookie("_kwd"), $.removeCookie("_cat"), $.cookie("_kwd", "", {
						domain: ".made-in-china.com",
						expires: -1,
						path: "/"
					}), $.cookie("_cat", "", {
						domain: ".made-in-china.com",
						expires: -1,
						path: "/"
					}), d.empty(), d.hide(), h = !1, $.cookie("_kwd", "", {
						domain: "www.made-in-china.com",
						expires: -1,
						path: "/"
					}), $.cookie("_cat", "", {
						domain: "www.made-in-china.com",
						expires: -1,
						path: "/"
					})), b.preventDefault(), !1;
					if ("a" === b.target.nodeName.toLowerCase() && "javascript:void(0);" === $(b.target).attr("href")) return $.trim(b.target.innerHTML) && (l.value = b.target.childNodes[0].nodeValue, $(a).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'4'/\x3e"), $(a).submit()), b.preventDefault(), !1
				}))
			})()
		}
	}
	if (0 != $("#J-search-new-flag").length) {
		var r = {
				"\x26": "\x26amp;",
				"\x3c": "\x26lt;",
				"\x3e": "\x26gt;",
				'"': "\x26quot;",
				"'": "\x26#x27;",
				"/": "\x26#x2F;"
			},
			g = [],
			p;
		for (p in r) g.push(p);
		var t = new RegExp("[" + g.join("") + "]", "g"),
			e = function(a) {
				return null == a ? "" : ("" + a).replace(t, function(a) {
					return r[a]
				})
			},
			k = 0 < $(".J-navController").length,
			v = $("form[name\x3dsearchForm]");
		0 < v.length && v.each(function(a, b) {
			z(b)
		});
		(function() {
			function a() {
				if (!b) {
					b = setTimeout(function() {
						b = null
					}, 200);
					var a = $(".J-header-related-words");
					if (0 < a.length) {
						a.css("overflow", "inherit");
						var c = a.find(".J-related-content"),
							e = a.find(".J-related-more"),
							h = parseInt(e.width(), 10),
							q = a.find(".J-related-more-list"),
							m = q.find(".J-related-keywords"),
							g = a.find(".J-related-keywords:visible"),
							k = g.length - 1,
							f = parseInt(a[0].scrollWidth, 10);
						a = parseInt(a.width(), 10);
						h = a - h;
						c = parseInt(c.width(), 10);
						if (d !== a)
							if (d = a, f > a) {
								for (; 0 < g.eq(k).length && 0 < k && !(f = f - parseInt(g.eq(k).width(), 10) - 10, q.prepend(g.eq(k)), k--, h > f););
								e.css("display", "inline-block")
							} else if (0 < m.length) {
							q.show();
							for (k = 0; 0 < m.eq(k).length;) m.eq(k) && c + m.eq(k).width() + 10 < a && (c = c + m.eq(k).width() + 10, e.before(m.eq(k))), k++;
							q.removeAttr("style");
							0 === q.find(".J-related-keywords").length && e.hide()
						}
					}
				}
			}
			var b, d;
			if (0 < $(".J-hasSearchTip").length) {
				var c = !0;
				$(".J-inputWrap").append('\x3cdiv class\x3d"J-search-input-tip search-input-tip arrow-left"\x3e\x3cdiv class\x3d"tip-con"\x3eEnter Product Name / CAS No. / Formula / EINECS\x3ci class\x3d"J-close-tip ob-icon icon-delete"\x3e\x3c/i\x3e\x3c/div\x3e\x3cspan class\x3d"arrow arrow-out"\x3e\x3cspan class\x3d"arrow arrow-in"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e');
				$(".m-search-input").on("focus", function() {
					$(".J-search-input-tip").hide()
				}).on("blur", function() {
					c && $(".J-search-input-tip").show()
				});
				$(document).on("click", ".J-close-tip", function() {
					$(".J-search-input-tip").hide();
					c = !1
				})
			}
			a();
			$(window).bind("resize", a)
		})()
	}
});
"undefined" !== typeof FileReader && Array.prototype.filter && ! function(z, r) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = r();
	else if ("function" == typeof define && define.amd) define([], r);
	else {
		var g = r(),
			p;
		for (p in g)("object" == typeof exports ? exports : z)[p] = g[p]
	}
}(this, function() {
	return function(z) {
		function r(p) {
			if (g[p]) return g[p].exports;
			var t = g[p] = {
				exports: {},
				id: p,
				loaded: !1
			};
			return z[p].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
		}
		var g = {};
		return r.m = z, r.c = g, r.p = "", r(0)
	}([function(z, r, g) {
		g(6);
		g(7);
		z.exports = g(8)
	}, function(z, r, g) {
		(function(g) {
			! function(p) {
				function e(a, b) {
					return function() {
						a.apply(b, arguments)
					}
				}

				function k(c) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof c) throw new TypeError("not a function");
					this._value = this._state = null;
					this._deferreds = [];
					n(c, e(a, this), e(b, this))
				}

				function t(a) {
					var b = this;
					return null === this._state ? void this._deferreds.push(a) : void u(function() {
						var c = b._state ? a.onFulfilled : a.onRejected;
						if (null === c) return void(b._state ? a.resolve : a.reject)(b._value);
						try {
							var d = c(b._value)
						} catch (E) {
							return void a.reject(E)
						}
						a.resolve(d)
					})
				}

				function a(c) {
					try {
						if (c === this) throw new TypeError("A promise cannot be resolved with itself.");
						if (c && ("object" == typeof c || "function" == typeof c)) {
							var h = c.then;
							if ("function" == typeof h) return void n(e(h, c), e(a, this), e(b, this))
						}
						this._state = !0;
						this._value = c;
						d.call(this)
					} catch (m) {
						b.call(this, m)
					}
				}

				function b(a) {
					this._state = !1;
					this._value = a;
					d.call(this)
				}

				function d() {
					for (var a = 0, b = this._deferreds.length; b > a; a++) t.call(this, this._deferreds[a]);
					this._deferreds = null
				}

				function c(a, b, c, d) {
					this.onFulfilled = "function" == typeof a ? a : null;
					this.onRejected = "function" == typeof b ? b : null;
					this.resolve = c;
					this.reject = d
				}

				function n(a, b, c) {
					var d = !1;
					try {
						a(function(a) {
							d || (d = !0, b(a))
						}, function(a) {
							d || (d = !0, c(a))
						})
					} catch (E) {
						d || (d = !0, c(E))
					}
				}
				var u = "function" == typeof g && g || function(a) {
						setTimeout(a, 1)
					},
					l = Array.isArray || function(a) {
						return "[object Array]" === Object.prototype.toString.call(a)
					};
				k.prototype["catch"] = function(a) {
					return this.then(null, a)
				};
				k.prototype.then = function(a, b) {
					var d = this;
					return new k(function(e, h) {
						t.call(d, new c(a, b, e, h))
					})
				};
				k.all = function() {
					var a = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);
					return new k(function(b, c) {
						function d(f, h) {
							try {
								if (h && ("object" == typeof h || "function" == typeof h)) {
									var n = h.then;
									if ("function" == typeof n) return void n.call(h, function(a) {
										d(f, a)
									}, c)
								}
								a[f] = h;
								0 === --e && b(a)
							} catch (C) {
								c(C)
							}
						}
						if (0 === a.length) return b([]);
						for (var e = a.length,
								f = 0; f < a.length; f++) d(f, a[f])
					})
				};
				k.resolve = function(a) {
					return a && "object" == typeof a && a.constructor === k ? a : new k(function(b) {
						b(a)
					})
				};
				k.reject = function(a) {
					return new k(function(b, c) {
						c(a)
					})
				};
				k.race = function(a) {
					return new k(function(b, c) {
						for (var d = 0, e = a.length; e > d; d++) a[d].then(b, c)
					})
				};
				k._setImmediateFn = function(a) {
					u = a
				};
				k.prototype.always = function(a) {
					var b = this.constructor;
					return this.then(function(c) {
						return b.resolve(a()).then(function() {
							return c
						})
					}, function(c) {
						return b.resolve(a()).then(function() {
							throw c;
						})
					})
				};
				"undefined" != typeof z && z.exports ? z.exports = k : p.Promise || (p.Promise = k)
			}(this)
		}).call(r, g(2).setImmediate)
	}, function(z, r, g) {
		(function(p, t) {
			function e(a, b) {
				this._id = a;
				this._clearFn = b
			}
			var k = g(3).nextTick,
				v = Function.prototype.apply,
				a = Array.prototype.slice,
				b = {},
				d = 0;
			r.setTimeout = function() {
				return new e(v.call(setTimeout, window, arguments), clearTimeout)
			};
			r.setInterval = function() {
				return new e(v.call(setInterval, window, arguments), clearInterval)
			};
			r.clearTimeout = r.clearInterval = function(a) {
				a.close()
			};
			e.prototype.unref = e.prototype.ref = function() {};
			e.prototype.close = function() {
				this._clearFn.call(window, this._id)
			};
			r.enroll = function(a, b) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = b
			};
			r.unenroll = function(a) {
				clearTimeout(a._idleTimeoutId);
				a._idleTimeout = -1
			};
			r._unrefActive = r.active = function(a) {
				clearTimeout(a._idleTimeoutId);
				var b = a._idleTimeout;
				0 <= b && (a._idleTimeoutId = setTimeout(function() {
					a._onTimeout && a._onTimeout()
				}, b))
			};
			r.setImmediate = "function" == typeof p ? p : function(c) {
				var e = d++,
					g = 2 > arguments.length ? !1 : a.call(arguments, 1);
				return b[e] = !0, k(function() {
					b[e] && (g ? c.apply(null, g) : c.call(null), r.clearImmediate(e))
				}), e
			};
			r.clearImmediate = "function" == typeof t ? t : function(a) {
				delete b[a]
			}
		}).call(r, g(2).setImmediate, g(2).clearImmediate)
	}, function(z, r) {
		function g() {
			b = !1;
			k.length ? a = k.concat(a) : d = -1;
			a.length && p()
		}

		function p() {
			if (!b) {
				var c = setTimeout(g);
				b = !0;
				for (var e = a.length; e;) {
					k = a;
					for (a = []; ++d < e;) k && k[d].run();
					d = -1;
					e = a.length
				}
				k = null;
				b = !1;
				clearTimeout(c)
			}
		}

		function t(a, b) {
			this.fun = a;
			this.array = b
		}

		function e() {}
		var k, v = z.exports = {},
			a = [],
			b = !1,
			d = -1;
		v.nextTick = function(c) {
			var d = Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
			a.push(new t(c, d));
			1 !== a.length || b || setTimeout(p, 0)
		};
		t.prototype.run = function() {
			this.fun.apply(null, this.array)
		};
		v.title = "browser";
		v.browser = !0;
		v.env = {};
		v.argv = [];
		v.version = "";
		v.versions = {};
		v.on = e;
		v.addListener = e;
		v.once = e;
		v.off = e;
		v.removeListener = e;
		v.removeAllListeners = e;
		v.emit = e;
		v.binding = function(a) {
			throw Error("process.binding is not supported");
		};
		v.cwd = function() {
			return "/"
		};
		v.chdir = function(a) {
			throw Error("process.chdir is not supported");
		};
		v.umask = function() {
			return 0
		}
	}, function(z, r) {
		try {
			var g = (new Blob, !0)
		} catch (t) {
			g = !1
		}
		var p = g ? window.Blob : function(g, e) {
			var k = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
			return g.forEach(function(e) {
				k.append(e)
			}), k.getBlob(e ? e.type : void 0)
		};
		g = function() {
			function g() {
				var g = this,
					t = [],
					a = Array(21).join("-") + (1E16 * +new Date * Math.random()).toString(36),
					b = XMLHttpRequest.prototype.send;
				this.getParts = function() {
					return t.toString()
				};
				this.append = function(b, c, e) {
					t.push("--" + a + '\r\nContent-Disposition: form-data; name\x3d"' + b + '"');
					c instanceof Blob ? (t.push('; filename\x3d"' + (e || "blob") + '"\r\nContent-Type: ' + c.type + "\r\n\r\n"), t.push(c)) : t.push("\r\n\r\n" + c);
					t.push("\r\n")
				};
				e++;
				XMLHttpRequest.prototype.send = function(d) {
					var c, n, k = this;
					d === g ? (t.push("--" + a + "--\r\n"), n = new p(t), c = new FileReader, c.onload = function() {
						b.call(k, c.result)
					}, c.onerror = function(a) {
						throw a;
					}, c.readAsArrayBuffer(n), this.setRequestHeader("Content-Type", "multipart/form-data; boundary\x3d" + a), e--, 0 == e && (XMLHttpRequest.prototype.send = b)) : b.call(this, d)
				}
			}
			var e = 0;
			return g.prototype = Object.create(FormData.prototype), g
		}();
		z.exports = {
			Blob: p,
			FormData: ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome") && 534 >= navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() || /MQQBrowser/g.test(navigator.userAgent) ? g : FormData
		}
	}, function(z, r, g) {
		var p, t;
		(function() {
			function e(a, b) {
				b || a.match(/^data\:([^\;]+)\;base64,/im);
				a = a.replace(/^data\:([^\;]+)\;base64,/gim, "");
				for (var c = atob(a), d = c.length, f = new ArrayBuffer(d), e = new Uint8Array(f), h = 0; d > h; h++) e[h] = c.charCodeAt(h);
				return f
			}

			function g(a, b) {
				var c = new XMLHttpRequest;
				c.open("GET", a, !0);
				c.responseType = "blob";
				c.onload = function(a) {
					200 != this.status && 0 !== this.status || b(this.response)
				};
				c.send()
			}

			function v(b, d) {
				function f(f) {
					var e = a(f);
					a: {
						var h = new DataView(f);
						if (u && console.log("Got file of length " + f.byteLength), 255 != h.getUint8(0) || 216 != h.getUint8(1)) f = (u && console.log("Not a valid JPEG"), !1);
						else {
							for (var g = 2, n = f.byteLength; n > g;) {
								var m = h,
									l = g;
								if (56 === m.getUint8(l) && 66 === m.getUint8(l + 1) && 73 === m.getUint8(l + 2) && 77 === m.getUint8(l + 3) && 4 === m.getUint8(l + 4) && 4 === m.getUint8(l + 5)) {
									n = h.getUint8(g + 7);
									0 !== n % 2 && (n += 1);
									0 === n && (n = 4);
									l = g + 8 + n;
									var k = h.getUint16(g + 6 + n);
									m = n = g = h = void 0;
									f = new DataView(f);
									for (var q = {}, x = l; l + k > x;) 28 === f.getUint8(x) && 2 === f.getUint8(x + 1) && (h = f.getUint8(x + 2), h in E && (g = f.getInt16(x + 3), n = E[h], m = c(f, x + 5, g), q.hasOwnProperty(n) ? q[n] instanceof Array ? q[n].push(m) : q[n] = [q[n], m] : q[n] = m)), x++;
									f = q;
									break a
								}
								g++
							}
							f = void 0
						}
					}
					b.exifdata = e || {};
					b.iptcdata = f || {};
					d && d.call(b)
				}
				if (b.src)
					if (/^data\:/i.test(b.src)) {
						var h = e(b.src);
						f(h)
					} else if (/^blob\:/i.test(b.src)) {
					var m = new FileReader;
					m.onload = function(a) {
						f(a.target.result)
					};
					g(b.src, function(a) {
						m.readAsArrayBuffer(a)
					})
				} else {
					var n = new XMLHttpRequest;
					n.onload = function() {
						200 == this.status || 0 === this.status ? f(n.response) : d(Error("Could not load image"));
						n = null
					};
					n.open("GET", b.src, !0);
					n.responseType = "arraybuffer";
					n.send(null)
				} else window.FileReader && (b instanceof window.Blob || b instanceof window.File || "object" === typeof b.lastModifiedDate) && (m = new FileReader, m.onload = function(a) {
					u && console.log("Got file of length " + a.target.result.byteLength);
					f(a.target.result)
				}, m.readAsArrayBuffer(b))
			}

			function a(a) {
				var b = new DataView(a);
				if (u && console.log("Got file of length " + a.byteLength), 255 != b.getUint8(0) || 216 != b.getUint8(1)) return u && console.log("Not a valid JPEG"), !1;
				var c, d = 2;
				for (a = a.byteLength; a > d;) {
					if (255 != b.getUint8(d)) return u && console.log("Not a valid marker at offset " + d + ", found: " + b.getUint8(d)), !1;
					if (c = b.getUint8(d + 1), u && console.log(c), 225 == c) return u && console.log("Found 0xFFE1 marker"), n(b, d + 4, b.getUint16(d + 2) - 2);
					d += 2 + b.getUint16(d + 2)
				}
			}

			function b(a, b, c, e, h) {
				var f, n = a.getUint16(c, !h),
					g = {};
				for (f = 0; n > f; f++) {
					var m = c + 12 * f + 2;
					var l = e[a.getUint16(m, !h)];
					!l && u && console.log("Unknown tag: " + a.getUint16(m, !h));
					g[l] = d(a, m, b, c, h)
				}
				return g
			}

			function d(a, b, d, e, h) {
				var f, n, m, g = a.getUint16(b + 2, !h);
				e = a.getUint32(b + 4, !h);
				d = a.getUint32(b + 8, !h) + d;
				switch (g) {
					case 1:
					case 7:
						if (1 == e) return a.getUint8(b + 8, !h);
						var l = 4 < e ? d : b + 8;
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint8(l + f);
						return b;
					case 2:
						return l = 4 < e ? d : b + 8, c(a, l, e - 1);
					case 3:
						if (1 == e) return a.getUint16(b + 8, !h);
						l = 2 < e ? d : b + 8;
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint16(l + 2 * f, !h);
						return b;
					case 4:
						if (1 == e) return a.getUint32(b + 8, !h);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getUint32(d + 4 * f, !h);
						return b;
					case 5:
						if (1 == e) return n = a.getUint32(d, !h), m = a.getUint32(d + 4, !h), f = new Number(n / m), f.numerator = n, f.denominator = m, f;
						b = [];
						for (f = 0; e > f; f++) n = a.getUint32(d + 8 * f, !h), m = a.getUint32(d + 4 + 8 * f, !h), b[f] = new Number(n / m), b[f].numerator = n, b[f].denominator = m;
						return b;
					case 9:
						if (1 == e) return a.getInt32(b + 8, !h);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getInt32(d + 4 * f, !h);
						return b;
					case 10:
						if (1 == e) return a.getInt32(d, !h) / a.getInt32(d + 4, !h);
						b = [];
						for (f = 0; e > f; f++) b[f] = a.getInt32(d + 8 * f, !h) / a.getInt32(d + 4 + 8 * f, !h);
						return b
				}
			}

			function c(a, b, c) {
				var d, f = "";
				for (d = b; b + c > d; d++) f += String.fromCharCode(a.getUint8(d));
				return f
			}

			function n(a, d) {
				if ("Exif" != c(a, d, 4)) return u && console.log("Not valid EXIF data! " + c(a, d, 4)), !1;
				var f, e, n = d + 6;
				if (18761 == a.getUint16(n)) var g = !1;
				else {
					if (19789 != a.getUint16(n)) return u && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
					g = !0
				}
				if (42 != a.getUint16(n + 2, !g)) return u && console.log("Not valid TIFF data! (no 0x002A)"), !1;
				var l = a.getUint32(n + 4, !g);
				if (8 > l) return u && console.log("Not valid TIFF data! (First offset less than 8)", a.getUint32(n + 4, !g)), !1;
				if (f = b(a, n, n + l, q, g), f.ExifIFDPointer)
					for (e in l = b(a, n, n + f.ExifIFDPointer, h, g), l) {
						switch (e) {
							case "LightSource":
							case "Flash":
							case "MeteringMode":
							case "ExposureProgram":
							case "SensingMethod":
							case "SceneCaptureType":
							case "SceneType":
							case "CustomRendered":
							case "WhiteBalance":
							case "GainControl":
							case "Contrast":
							case "Saturation":
							case "Sharpness":
							case "SubjectDistanceRange":
							case "FileSource":
								l[e] = G[e][l[e]];
								break;
							case "ExifVersion":
							case "FlashpixVersion":
								l[e] = String.fromCharCode(l[e][0], l[e][1], l[e][2], l[e][3]);
								break;
							case "ComponentsConfiguration":
								l[e] = G.Components[l[e][0]] + G.Components[l[e][1]] + G.Components[l[e][2]] + G.Components[l[e][3]]
						}
						f[e] = l[e]
					}
				if (f.GPSInfoIFDPointer)
					for (e in g = b(a, n, n + f.GPSInfoIFDPointer, m, g), g) {
						switch (e) {
							case "GPSVersionID":
								g[e] = g[e][0] + "." + g[e][1] + "." + g[e][2] + "." + g[e][3]
						}
						f[e] = g[e]
					}
				return f
			}
			var u = !1,
				l = function(a) {
					return a instanceof l ? a : this instanceof l ? void(this.EXIFwrapped = a) : new l(a)
				};
			"undefined" != typeof z && z.exports && (r = z.exports = l);
			r.EXIF = l;
			var h = l.Tags = {
					36864: "ExifVersion",
					40960: "FlashpixVersion",
					40961: "ColorSpace",
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					37121: "ComponentsConfiguration",
					37122: "CompressedBitsPerPixel",
					37500: "MakerNote",
					37510: "UserComment",
					40964: "RelatedSoundFile",
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37520: "SubsecTime",
					37521: "SubsecTimeOriginal",
					37522: "SubsecTimeDigitized",
					33434: "ExposureTime",
					33437: "FNumber",
					34850: "ExposureProgram",
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: "OECF",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBias",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: "MeteringMode",
					37384: "LightSource",
					37385: "Flash",
					37396: "SubjectArea",
					37386: "FocalLength",
					41483: "FlashEnergy",
					41484: "SpatialFrequencyResponse",
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: "FocalPlaneResolutionUnit",
					41492: "SubjectLocation",
					41493: "ExposureIndex",
					41495: "SensingMethod",
					41728: "FileSource",
					41729: "SceneType",
					41730: "CFAPattern",
					41985: "CustomRendered",
					41986: "ExposureMode",
					41987: "WhiteBalance",
					41988: "DigitalZoomRation",
					41989: "FocalLengthIn35mmFilm",
					41990: "SceneCaptureType",
					41991: "GainControl",
					41992: "Contrast",
					41993: "Saturation",
					41994: "Sharpness",
					41995: "DeviceSettingDescription",
					41996: "SubjectDistanceRange",
					40965: "InteroperabilityIFDPointer",
					42016: "ImageUniqueID"
				},
				q = l.TiffTags = {
					256: "ImageWidth",
					257: "ImageHeight",
					34665: "ExifIFDPointer",
					34853: "GPSInfoIFDPointer",
					40965: "InteroperabilityIFDPointer",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					274: "Orientation",
					277: "SamplesPerPixel",
					284: "PlanarConfiguration",
					530: "YCbCrSubSampling",
					531: "YCbCrPositioning",
					282: "XResolution",
					283: "YResolution",
					296: "ResolutionUnit",
					273: "StripOffsets",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					301: "TransferFunction",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					529: "YCbCrCoefficients",
					532: "ReferenceBlackWhite",
					306: "DateTime",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					305: "Software",
					315: "Artist",
					33432: "Copyright"
				},
				m = l.GPSTags = {
					0: "GPSVersionID",
					1: "GPSLatitudeRef",
					2: "GPSLatitude",
					3: "GPSLongitudeRef",
					4: "GPSLongitude",
					5: "GPSAltitudeRef",
					6: "GPSAltitude",
					7: "GPSTimeStamp",
					8: "GPSSatellites",
					9: "GPSStatus",
					10: "GPSMeasureMode",
					11: "GPSDOP",
					12: "GPSSpeedRef",
					13: "GPSSpeed",
					14: "GPSTrackRef",
					15: "GPSTrack",
					16: "GPSImgDirectionRef",
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: "GPSDestLatitudeRef",
					20: "GPSDestLatitude",
					21: "GPSDestLongitudeRef",
					22: "GPSDestLongitude",
					23: "GPSDestBearingRef",
					24: "GPSDestBearing",
					25: "GPSDestDistanceRef",
					26: "GPSDestDistance",
					27: "GPSProcessingMethod",
					28: "GPSAreaInformation",
					29: "GPSDateStamp",
					30: "GPSDifferential"
				},
				G = l.StringValues = {
					ExposureProgram: {
						0: "Not defined",
						1: "Manual",
						2: "Normal program",
						3: "Aperture priority",
						4: "Shutter priority",
						5: "Creative program",
						6: "Action program",
						7: "Portrait mode",
						8: "Landscape mode"
					},
					MeteringMode: {
						0: "Unknown",
						1: "Average",
						2: "CenterWeightedAverage",
						3: "Spot",
						4: "MultiSpot",
						5: "Pattern",
						6: "Partial",
						255: "Other"
					},
					LightSource: {
						0: "Unknown",
						1: "Daylight",
						2: "Fluorescent",
						3: "Tungsten (incandescent light)",
						4: "Flash",
						9: "Fine weather",
						10: "Cloudy weather",
						11: "Shade",
						12: "Daylight fluorescent (D 5700 - 7100K)",
						13: "Day white fluorescent (N 4600 - 5400K)",
						14: "Cool white fluorescent (W 3900 - 4500K)",
						15: "White fluorescent (WW 3200 - 3700K)",
						17: "Standard light A",
						18: "Standard light B",
						19: "Standard light C",
						20: "D55",
						21: "D65",
						22: "D75",
						23: "D50",
						24: "ISO studio tungsten",
						255: "Other"
					},
					Flash: {
						0: "Flash did not fire",
						1: "Flash fired",
						5: "Strobe return light not detected",
						7: "Strobe return light detected",
						9: "Flash fired, compulsory flash mode",
						13: "Flash fired, compulsory flash mode, return light not detected",
						15: "Flash fired, compulsory flash mode, return light detected",
						16: "Flash did not fire, compulsory flash mode",
						24: "Flash did not fire, auto mode",
						25: "Flash fired, auto mode",
						29: "Flash fired, auto mode, return light not detected",
						31: "Flash fired, auto mode, return light detected",
						32: "No flash function",
						65: "Flash fired, red-eye reduction mode",
						69: "Flash fired, red-eye reduction mode, return light not detected",
						71: "Flash fired, red-eye reduction mode, return light detected",
						73: "Flash fired, compulsory flash mode, red-eye reduction mode",
						77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
						79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
						89: "Flash fired, auto mode, red-eye reduction mode",
						93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
						95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
					},
					SensingMethod: {
						1: "Not defined",
						2: "One-chip color area sensor",
						3: "Two-chip color area sensor",
						4: "Three-chip color area sensor",
						5: "Color sequential area sensor",
						7: "Trilinear sensor",
						8: "Color sequential linear sensor"
					},
					SceneCaptureType: {
						0: "Standard",
						1: "Landscape",
						2: "Portrait",
						3: "Night scene"
					},
					SceneType: {
						1: "Directly photographed"
					},
					CustomRendered: {
						0: "Normal process",
						1: "Custom process"
					},
					WhiteBalance: {
						0: "Auto white balance",
						1: "Manual white balance"
					},
					GainControl: {
						0: "None",
						1: "Low gain up",
						2: "High gain up",
						3: "Low gain down",
						4: "High gain down"
					},
					Contrast: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					Saturation: {
						0: "Normal",
						1: "Low saturation",
						2: "High saturation"
					},
					Sharpness: {
						0: "Normal",
						1: "Soft",
						2: "Hard"
					},
					SubjectDistanceRange: {
						0: "Unknown",
						1: "Macro",
						2: "Close view",
						3: "Distant view"
					},
					FileSource: {
						3: "DSC"
					},
					Components: {
						0: "",
						1: "Y",
						2: "Cb",
						3: "Cr",
						4: "R",
						5: "G",
						6: "B"
					}
				},
				E = {
					120: "caption",
					110: "credit",
					25: "keywords",
					55: "dateCreated",
					80: "byline",
					85: "bylineTitle",
					122: "captionWriter",
					105: "headline",
					116: "copyright",
					15: "category"
				};
			l.getData = function(a, b) {
				return (a instanceof Image || a instanceof HTMLImageElement) && !a.complete ? !1 : (a.exifdata ? b && b.call(a) : v(a, b), !0)
			};
			l.getTag = function(a, b) {
				return a.exifdata ? a.exifdata[b] : void 0
			};
			l.getAllTags = function(a) {
				if (!a.exifdata) return {};
				var b;
				a = a.exifdata;
				var c = {};
				for (b in a) a.hasOwnProperty(b) && (c[b] = a[b]);
				return c
			};
			l.pretty = function(a) {
				if (!a.exifdata) return "";
				var b;
				a = a.exifdata;
				var c = "";
				for (b in a) a.hasOwnProperty(b) && (c += "object" == typeof a[b] ? a[b] instanceof Number ? b + " : " + a[b] + " [" + a[b].numerator + "/" + a[b].denominator + "]\r\n" : b + " : [" + a[b].length + " values]\r\n" : b + " : " + a[b] + "\r\n");
				return c
			};
			l.readFromBinaryFile = function(b) {
				return a(b)
			};
			p = [];
			t = function() {
				return l
			}.apply(r, p);
			!(void 0 !== t && (z.exports = t))
		}).call(this)
	}, function(z, r, g) {
		var p, t;
		! function() {
			function e(a, b, d) {
				var c = document.createElement("canvas");
				return g(a, c, b, d), c.toDataURL("image/jpeg", b.quality || .8)
			}

			function g(a, b, d, c) {
				var e = a.naturalWidth,
					g = a.naturalHeight,
					l = d.width,
					h = d.height,
					k = b.getContext("2d");
				k.save();
				d = d.orientation;
				switch (d) {
					case 5:
					case 6:
					case 7:
					case 8:
						b.width = h;
						b.height = l;
						break;
					default:
						b.width = l, b.height = h
				}
				switch (d) {
					case 2:
						k.translate(l, 0);
						k.scale(-1, 1);
						break;
					case 3:
						k.translate(l, h);
						k.rotate(Math.PI);
						break;
					case 4:
						k.translate(0, h);
						k.scale(1, -1);
						break;
					case 5:
						k.rotate(.5 * Math.PI);
						k.scale(1, -1);
						break;
					case 6:
						k.rotate(.5 * Math.PI);
						k.translate(0, -h);
						break;
					case 7:
						k.rotate(.5 * Math.PI);
						k.translate(l, -h);
						k.scale(-1, 1);
						break;
					case 8:
						k.rotate(-.5 * Math.PI), k.translate(-l, 0)
				}
				b = a.naturalWidth;
				1048576 < b * a.naturalHeight ? (d = document.createElement("canvas"), d.width = d.height = 1, d = d.getContext("2d"), b = (d.drawImage(a, -b + 1, 0), 0 === d.getImageData(0, 0, 1, 1).data[3])) : b = !1;
				b && (e /= 2, g /= 2);
				b = document.createElement("canvas");
				b.width = b.height = 1024;
				d = b.getContext("2d");
				if (c) {
					c = g;
					var m = document.createElement("canvas");
					m.width = 1;
					m.height = c;
					m = m.getContext("2d");
					m.drawImage(a, 0, 0);
					m = m.getImageData(0, 0, 1, c).data;
					for (var p = 0, t = c, f = c; f > p;) 0 === m[4 * (f - 1) + 3] ? t = f : p = f, f = t + p >> 1;
					c = f / c;
					c = 0 === c ? 1 : c
				} else c = 1;
				l = Math.ceil(1024 * l / e);
				h = Math.ceil(1024 * h / g / c);
				for (m = c = 0; g > c;) {
					for (t = p = 0; e > p;) d.clearRect(0, 0, 1024, 1024), d.drawImage(a, -p, -c), k.drawImage(b, 0, 0, 1024, 1024, t, m, l, h), p += 1024, t += l;
					c += 1024;
					m += h
				}
				k.restore()
			}

			function v(a) {
				if (window.Blob && a instanceof Blob) {
					var b = new Image,
						d = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
					if (!d) throw Error("No createObjectURL function found to create blob url");
					b.src = d.createObjectURL(a);
					this.blob = a;
					a = b
				}
				if (!a.naturalWidth && !a.naturalHeight) {
					var c = this;
					a.onload = function() {
						var a = c.imageLoadListeners;
						if (a) {
							c.imageLoadListeners = null;
							for (var b = 0, d = a.length; d > b; b++) a[b]()
						}
					};
					this.imageLoadListeners = []
				}
				this.srcImage = a
			}
			v.prototype.render = function(a, b, d) {
				if (this.imageLoadListeners) {
					var c = this;
					return void this.imageLoadListeners.push(function() {
						c.render(a, b, d)
					})
				}
				b = b || {};
				var n = this.srcImage,
					k = n.src,
					l = k.length,
					h = n.naturalWidth;
				n = n.naturalHeight;
				var q = b.width,
					m = b.height,
					p = b.maxWidth,
					t = b.maxHeight;
				k = this.blob && "image/jpeg" === this.blob.type || 0 === k.indexOf("data:image/jpeg") || k.indexOf(".jpg") === l - 4 || k.indexOf(".jpeg") === l - 5;
				q && !m ? m = n * q / h << 0 : m && !q ? q = h * m / n << 0 : (q = h, m = n);
				p && q > p && (q = p, m = n * q / h << 0);
				t && m > t && (m = t, q = h * m / n << 0);
				h = {
					width: q,
					height: m
				};
				for (var f in b) h[f] = b[f];
				f = a.tagName.toLowerCase();
				"img" === f ? a.src = e(this.srcImage, h, k) : "canvas" === f && g(this.srcImage, a, h, k);
				"function" == typeof this.onrender && this.onrender(a);
				d && d()
			};
			p = [];
			t = function() {
				return v
			}.apply(r, p);
			!(void 0 !== t && (z.exports = t))
		}()
	}, function(z, r) {
		z.exports = function(g) {
			function p(a, b) {
				for (var c = 0, d = 0, e = [], f = 1; 16 >= f; f++) {
					for (var h = 1; h <= a[f]; h++) e[b[d]] = [], e[b[d]][0] = c, e[b[d]][1] = f, d++, c++;
					c *= 2
				}
				return e
			}

			function t(a) {
				var b = a[0];
				for (a = a[1] - 1; 0 <= a;) b & 1 << a && (C |= 1 << w), a--, w--, 0 > w && (255 == C ? (e(255), e(0)) : e(C), w = 7, C = 0)
			}

			function e(a) {
				A.push(I[a])
			}

			function k(a) {
				e(a >> 8 & 255);
				e(255 & a)
			}

			function r(a, b, c, d, e) {
				var h, g = e[0],
					n = e[240],
					l, m = 0;
				for (l = 0; 8 > l; ++l) {
					var k = a[m];
					var q = a[m + 1];
					var y = a[m + 2];
					var p = a[m + 3];
					var u = a[m + 4];
					var r = a[m + 5];
					var v = a[m + 6];
					var w = a[m + 7];
					var z = k + w;
					k -= w;
					w = q + v;
					q -= v;
					v = y + r;
					y -= r;
					r = p + u;
					p -= u;
					u = z + r;
					z -= r;
					r = w + v;
					w -= v;
					a[m] = u + r;
					a[m + 4] = u - r;
					u = .707106781 * (w + z);
					a[m + 2] = z + u;
					a[m + 6] = z - u;
					u = p + y;
					r = y + q;
					w = q + k;
					y = .382683433 * (u - w);
					p = .5411961 * u + y;
					u = 1.306562965 * w + y;
					r *= .707106781;
					y = k + r;
					k -= r;
					a[m + 5] = k + p;
					a[m + 3] = k - p;
					a[m + 1] = y + u;
					a[m + 7] = y - u;
					m += 8
				}
				for (l = m = 0; 8 > l; ++l) k = a[m], q = a[m + 8], y = a[m + 16], p = a[m + 24], u = a[m + 32], r = a[m + 40], v = a[m + 48], w = a[m + 56], z = k + w, k -= w, w = q + v, q -= v, v = y + r, y -= r, r = p + u, p -= u, u = z + r, z -= r, r = w + v, w -= v, a[m] = u + r, a[m + 32] = u - r, u = .707106781 * (w + z), a[m + 16] = z + u, a[m + 48] = z - u, u = p + y, r = y + q, w = q + k, y = .382683433 * (u - w), p = .5411961 * u + y, u = 1.306562965 * w + y, r *= .707106781, y = k + r, k -= r, a[m + 40] = k + p, a[m + 24] = k - p, a[m + 8] = y + u, a[m + 56] = y - u, m++;
				for (l = 0; 64 > l; ++l) m = a[l] * b[l], x[l] = 0 < m ? m + .5 | 0 : m - .5 | 0;
				a = x;
				for (b = 0; 64 > b; ++b) B[H[b]] = a[b];
				a = B[0] - c;
				c = B[0];
				0 == a ? t(d[0]) : (h = 32767 + a, t(d[f[h]]), t(E[h]));
				for (d = 63; 0 < d && 0 == B[d]; d--);
				if (0 == d) return t(g), c;
				for (a = 1; d >= a;) {
					for (h = a; 0 == B[a] && d >= a; ++a);
					b = a - h;
					if (16 <= b) {
						h = b >> 4;
						for (l = 1; h >= l; ++l) t(n);
						b &= 15
					}
					h = 32767 + B[a];
					t(e[(b << 4) + f[h]]);
					t(E[h]);
					a++
				}
				return 63 != d && t(g), c
			}

			function a(a) {
				if (0 >= a && (a = 1), 100 < a && (a = 100), u != a) {
					var b = 50 > a ? Math.floor(5E3 / a) : Math.floor(200 - 2 * a);
					for (var c = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], d = 0; 64 > d; d++) {
						var e = l((c[d] * b + 50) / 100);
						1 > e ? e = 1 : 255 < e && (e = 255);
						h[H[d]] = e
					}
					c = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
					for (d = 0; 64 > d; d++) e = l((c[d] * b + 50) / 100), 1 > e ? e = 1 : 255 < e && (e = 255), q[H[d]] = e;
					b = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379];
					for (d = c = 0; 8 > d; d++)
						for (e = 0; 8 > e; e++) m[c] = 1 / (h[H[c]] * b[d] * b[e] * 8), z[c] = 1 / (q[H[c]] * b[d] * b[e] * 8), c++;
					u = a
				}
			}
			var b, d, c, n, u, l = (Math.round, Math.floor),
				h = Array(64),
				q = Array(64),
				m = Array(64),
				z = Array(64),
				E = Array(65535),
				f = Array(65535),
				x = Array(64),
				B = Array(64),
				A = [],
				C = 0,
				w = 7,
				K = Array(64),
				V = Array(64),
				L = Array(64),
				I = Array(256),
				F = Array(2048),
				H = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
				M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				O = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
				P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65,
					6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233,
					234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
				],
				R = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
				S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				T = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
				U = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151,
					152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
				];
			this.encode = function(f, g, l) {
				var p = (new Date).getTime();
				g && a(g);
				A = [];
				C = 0;
				w = 7;
				k(65496);
				k(65504);
				k(16);
				e(74);
				e(70);
				e(73);
				e(70);
				e(0);
				e(1);
				e(1);
				e(0);
				k(1);
				k(1);
				e(0);
				e(0);
				k(65499);
				k(132);
				e(0);
				for (g = 0; 64 > g; g++) e(h[g]);
				e(1);
				for (g = 0; 64 > g; g++) e(q[g]);
				g = f.width;
				var u = f.height;
				k(65472);
				k(17);
				e(8);
				k(u);
				k(g);
				e(3);
				e(1);
				e(17);
				e(0);
				e(2);
				e(17);
				e(1);
				e(3);
				e(17);
				e(1);
				k(65476);
				k(418);
				e(0);
				for (g = 0; 16 > g; g++) e(M[g + 1]);
				for (g = 0; 11 >= g; g++) e(N[g]);
				e(16);
				for (g = 0; 16 > g; g++) e(O[g + 1]);
				for (g = 0; 161 >= g; g++) e(P[g]);
				e(1);
				for (g = 0; 16 > g; g++) e(R[g + 1]);
				for (g = 0; 11 >= g; g++) e(S[g]);
				e(17);
				for (g = 0; 16 > g; g++) e(T[g + 1]);
				for (g = 0; 161 >= g; g++) e(U[g]);
				k(65498);
				k(12);
				e(3);
				e(1);
				e(0);
				e(2);
				e(17);
				e(3);
				e(17);
				e(0);
				e(63);
				e(0);
				var y = u = g = 0;
				C = 0;
				w = 7;
				this.encode.displayName = "_encode_";
				for (var v, x, B, E, D, G = f.data, H = f.height, J = 4 * f.width, I = 0; H > I;) {
					for (f = 0; J > f;) {
						E = J * I + f;
						for (D = 0; 64 > D; D++) x = D >> 3, v = 4 * (7 & D), B = E + x * J + v, I + x >= H && (B -= J * (I + 1 + x - H)), f + v >= J && (B -= f + v - J + 4), v = G[B++], x = G[B++], B = G[B++], K[D] = (F[v] + F[x + 256 >> 0] + F[B + 512 >> 0] >> 16) - 128, V[D] = (F[v + 768 >> 0] + F[x + 1024 >> 0] + F[B + 1280 >> 0] >> 16) - 128, L[D] = (F[v + 1280 >> 0] + F[x + 1536 >> 0] + F[B + 1792 >> 0] >> 16) - 128;
						g = r(K, m, g, b, c);
						u = r(V, z, u, d, n);
						y = r(L, z, y, d, n);
						f += 32
					}
					I += 8
				}
				0 <= w && (f = [], f[1] = w + 1, f[0] = (1 << w + 1) - 1, t(f));
				if (k(65497), l) {
					l = A.length;
					f = new Uint8Array(l);
					for (g = 0; l > g; g++) f[g] = A[g].charCodeAt();
					A = [];
					(new Date).getTime() - p;
					return f
				}
				l = "data:image/jpeg;base64," + btoa(A.join(""));
				A = [];
				(new Date).getTime() - p;
				return l
			};
			(function() {
				var e = (new Date).getTime();
				g || (g = 50);
				for (var h = String.fromCharCode, m = 0; 256 > m; m++) I[m] = h(m);
				b = p(M, N);
				d = p(R, S);
				c = p(O, P);
				n = p(T, U);
				h = 1;
				m = 2;
				for (var l = 1; 15 >= l; l++) {
					for (var k = h; m > k; k++) f[32767 + k] = l, E[32767 + k] = [], E[32767 + k][1] = l, E[32767 + k][0] = k;
					for (k = -(m - 1); - h >= k; k++) f[32767 + k] = l, E[32767 + k] = [], E[32767 + k][1] = l, E[32767 + k][0] = m - 1 + k;
					h <<= 1;
					m <<= 1
				}
				for (h = 0; 256 > h; h++) F[h] = 19595 * h, F[h + 256 >> 0] = 38470 * h, F[h + 512 >> 0] = 7471 * h + 32768, F[h + 768 >> 0] = -11059 * h, F[h + 1024 >> 0] = -21709 * h, F[h + 1280 >> 0] = 32768 * h + 8421375, F[h + 1536 >> 0] = -27439 * h, F[h + 1792 >> 0] = -5329 * h;
				a(g);
				(new Date).getTime() - e
			})()
		}
	}, function(z, r, g) {
		function p(a, b) {
			if (!a) throw Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
			b = b || {};
			this.defaults = {
				width: null,
				height: null,
				fieldName: "file",
				quality: .7
			};
			this.file = a;
			for (var d in b) b.hasOwnProperty(d) && (this.defaults[d] = b[d]);
			return this.init()
		}
		g.p = function(a) {
			var b = null;
			return b = a ? [].filter.call(document.scripts, function(b) {
				return -1 !== b.src.indexOf(a)
			})[0] : document.scripts[document.scripts.length - 1], b ? b.src.substr(0, b.src.lastIndexOf("/")) : null
		}("lrz") + "/";
		window.URL = window.URL || window.webkitURL;
		var t = g(1),
			e = g(4),
			k = g(5),
			v = function(a) {
				var b = /OS (\d)_.* like Mac OS X/g.exec(a),
					d = /Android (\d.*?);/g.exec(a) || /Android\/(\d.*?) /g.exec(a);
				return {
					oldIOS: b ? 8 > +b.pop() : !1,
					oldAndroid: d ? 4.5 > +d.pop().substr(0, 3) : !1,
					iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(a),
					android: /Android/g.test(a),
					mQQBrowser: /MQQBrowser/g.test(a)
				}
			}(navigator.userAgent);
		p.prototype.init = function() {
			var a = this,
				b = a.file,
				d = "string" == typeof b,
				c = /^data:/.test(b),
				g = new Image,
				k = document.createElement("canvas"),
				l = d ? b : URL.createObjectURL(b);
			if (a.img = g, a.blob = l, a.canvas = k, d ? a.fileName = c ? "base64.jpg" : b.split("/").pop() : a.fileName = b.name, !document.createElement("canvas").getContext) throw Error("浏览器不支持canvas");
			return new t(function(d, k) {
				g.onerror = function() {
					var a = Error("加载图片文件失败");
					throw k(a), a;
				};
				g.onload = function() {
					a._getBase64().then(function(a) {
						if (10 > a.length) throw a = Error("生成base64失败"),
							k(a), a;
						return a
					}).then(function(c) {
						if ("object" == typeof a.file && c.length > a.file.size) {
							var h = new FormData;
							b = a.file
						} else {
							h = new e.FormData;
							var g = 0 <= c.split(",")[0].indexOf("base64") ? atob(c.split(",")[1]) : unescape(c.split(",")[1]);
							for (var f = c.split(",")[0].split(":")[1].split(";")[0], m = new Uint8Array(g.length), l = 0; l < g.length; l++) m[l] = g.charCodeAt(l);
							b = new e.Blob([m.buffer], {
								type: f
							})
						}
						h.append(a.defaults.fieldName, b, a.fileName.replace(/\..+/g, ".jpg"));
						d({
							formData: h,
							fileLen: +b.size,
							base64: c,
							base64Len: c.length,
							origin: a.file,
							file: b
						});
						for (var k in a) a.hasOwnProperty(k) && (a[k] = null);
						URL.revokeObjectURL(a.blob)
					})
				};
				!c && (g.crossOrigin = "*");
				g.src = l
			})
		};
		p.prototype._getBase64 = function() {
			var a = this,
				b = a.img,
				d = a.file,
				c = a.canvas;
			return new t(function(e) {
				try {
					k.getData("object" == typeof d ? d : b, function() {
						a.orientation = k.getTag(this, "Orientation");
						a.resize = a._getResize();
						a.ctx = c.getContext("2d");
						c.width = a.resize.width;
						c.height = a.resize.height;
						a.ctx.fillStyle = "#fff";
						a.ctx.fillRect(0, 0, c.width, c.height);
						v.oldIOS ? a._createBase64ForOldIOS().then(e) : a._createBase64().then(e)
					})
				} catch (u) {
					throw Error(u);
				}
			})
		};
		p.prototype._createBase64ForOldIOS = function() {
			var a = this.img,
				b = this.canvas,
				d = this.defaults,
				c = this.orientation;
			return new t(function(e) {
				! function() {
					var k = [g(6)];
					(function(g) {
						g = new g(a); - 1 < "5678".indexOf(c) ? g.render(b, {
							width: b.height,
							height: b.width,
							orientation: c
						}) : g.render(b, {
							width: b.width,
							height: b.height,
							orientation: c
						});
						e(b.toDataURL("image/jpeg", d.quality))
					}).apply(null, k)
				}()
			})
		};
		p.prototype._createBase64 = function() {
			var a = this.resize,
				b = this.img,
				d = this.canvas,
				c = this.ctx,
				e = this.defaults;
			switch (this.orientation) {
				case 3:
					c.rotate(180 * Math.PI / 180);
					c.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 6:
					c.rotate(90 * Math.PI / 180);
					c.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 8:
					c.rotate(270 * Math.PI / 180);
					c.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				case 2:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.drawImage(b, 0, 0, a.width, a.height);
					break;
				case 4:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(180 * Math.PI / 180);
					c.drawImage(b, -a.width, -a.height, a.width, a.height);
					break;
				case 5:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(90 * Math.PI / 180);
					c.drawImage(b, 0, -a.width, a.height, a.width);
					break;
				case 7:
					c.translate(a.width, 0);
					c.scale(-1, 1);
					c.rotate(270 * Math.PI / 180);
					c.drawImage(b, -a.height, 0, a.height, a.width);
					break;
				default:
					c.drawImage(b, 0, 0, a.width, a.height)
			}
			return new t(function(a) {
				v.oldAndroid || v.mQQBrowser || !navigator.userAgent ? ! function() {
					var b = [g(7)];
					(function(b) {
						b = new b;
						var h = c.getImageData(0, 0, d.width, d.height);
						a(b.encode(h, 100 * e.quality))
					}).apply(null, b)
				}() : a(d.toDataURL("image/jpeg", e.quality))
			})
		};
		p.prototype._getResize = function() {
			var a = this.img,
				b = this.defaults,
				d = b.width;
			b = b.height;
			var c = {
				width: a.width,
				height: a.height
			};
			if (-1 < "5678".indexOf(this.orientation) && (c.width = a.height, c.height = a.width), c.width < d || c.height < b) return c;
			a = c.width / c.height;
			for (d && b ? a >= d / b ? c.width > d && (c.width = d, c.height = Math.ceil(d / a)) : c.height > b && (c.height = b, c.width = Math.ceil(b * a)) : d ? d < c.width && (c.width = d, c.height = Math.ceil(d / a)) : b && b < c.height && (c.width = Math.ceil(b * a), c.height = b); 3264 <= c.width || 2448 <= c.height;) c.width *= .8, c.height *= .8;
			return c
		};
		window.lrz = function(a, b) {
			return new p(a, b)
		};
		window.lrz.version = "4.9.40";
		z.exports = window.lrz
	}])
});
(function(z) {
	function r(a, b) {
		lrz(a, b).then(function(c) {
			g(500)(c.file.size, "kb") ? p(c.formData, {
				ImgWidth: u,
				ImgHeight: l,
				zipSize: c.file.size,
				orgSize: a.size
			}) : (c = JSON.parse(JSON.stringify(b)), c.quality -= .1, r(a, c))
		})["catch"](function(a) {
			c.close();
			k()
		})
	}

	function g(a) {
		return function(b, c) {
			var d = (b / 1024).toFixed(2),
				e = (d / 1024).toFixed(2);
			return parseFloat({
				kb: d,
				mb: e
			}[c]) <= a ? !0 : !1
		}
	}

	function p(b, d) {
		b.append("orgwidth", d.ImgWidth);
		b.append("orgheight", d.ImgHeight);
		b.append("zipsize", d.zipSize);
		b.append("orgsize", d.orgSize);
		$.ajax({
			type: "post",
			url: "//file.made-in-china.com/img-search/upload",
			data: b,
			processData: !1,
			contentType: !1,
			crossDomain: !0,
			success: function(b) {
				200 === b.code ? (a(b.data.statUrl), z.location.href = b.data.url) : (c.close(), v())
			},
			error: function(a) {
				v();
				console.log(a);
				c.close()
			}
		})
	}

	function t(a, b, d) {
		c.show();
		var e = new FileReader;
		e.readAsDataURL(a);
		e.onload = function(e) {
			var f = new Image;
			f.src = e.target.result;
			f.onload = function(e) {
				this.width ? (u = this.width, l = this.height, b(a)) : (c.close(), d())
			};
			f.onerror = function(a) {
				c.close();
				d()
			}
		}
	}

	function e(a) {
		c.show();
		if (g(500)(a.size, "kb")) {
			var b = new FormData;
			b.append("multipartFile", a);
			p(b, {
				ImgWidth: u,
				ImgHeight: l,
				zipSize: a.size,
				orgSize: a.size
			})
		} else r(a, n)
	}

	function k() {
		$(".m-search-img-tips").empty().append("Upload failed.Incorrect image format. Supported formats：JPG,PNG,BMP.");
		$(".m-search-img-tips").addClass("imgUpload-error-tip")
	}

	function v() {
		$(".m-search-img-tips").empty().append("No network connection. Please check your networksettings and try again.");
		$(".m-search-img-tips").addClass("imgUpload-error-tip")
	}

	function a(a) {
		var b = new Image;
		b.src = a;
		"complete" === b.readyState ? b = null : b.onload = function() {
			b = null
		}
	}
	try {
		var b = "localStorage" in window && null !== window.localStorage && window.Promise
	} catch (h) {
		b = !1
	}
	if (b) {
		$(".J-at-pic-search").show();
		var d = {
				"image/jpeg": !0,
				"image/bmp": !0,
				"image/png": !0
			},
			c = {
				show: function() {
					$(".m-search-img-loading").css("display", "table")
				},
				close: function() {
					$(".m-search-img-loading").css("display", "none")
				}
			},
			n = {
				quality: .7,
				fieldName: "multipartFile"
			},
			u = 0,
			l = 0;
		c = {
			show: function() {
				$(".m-search-img-loading").css("visibility", "visible")
			},
			close: function() {
				$(".m-search-img-loading").css("visibility", "hidden")
			}
		};
		(function() {
			$(".J-at-pic-search").on("click", function(a) {
				"none" === $(".J-at-search-img-wrap").css("display") && ($(".J-at-search-img-wrap").show(), $(".J-searchHistory").hide());
				a.preventDefault();
				a.stopPropagation()
			});
			$(".J-inputWrap .m-search-input").on("focus", function() {
				$(".J-at-search-img-wrap").hide();
				0 < $(".J-inputWrap .J-at-pic-search").length && $(this).css("padding-right", "45px")
			});
			$(document).on("click", function(a) {
				a.target !== $(".J-at-search-img-wrap").get(0) && ($(".J-at-search-img-wrap").hide(), $(".m-search-img-tips").removeClass("imgUpload-error-tip"), $(".m-search-img-tips").empty().html("Upload Image \x3cspan\x3e (Max 20MB per Image) \x3c/span\x3e"))
			});
			$(".J-at-search-img-wrap").on("click", function(a) {
				a.stopPropagation()
			});
			0 < $(".J-searchType option:selected").length && "Products" !== $(".J-searchType option:selected").text() && $(".J-at-pic-search").hide();
			$(".J-search-upload-img").on("change", function(a) {
				var b = a.target && a.target.files && a.target.files[0];
				$(a.target).val("");
				b && (g(20)(b.size, "mb") ? d[b.type] ? t(b, e, k) : k() : ($(".m-search-img-tips").empty().append("Upload failed. Max image size is 20MB"), $(".m-search-img-tips").addClass("imgUpload-error-tip")))
			})
		})()
	}
})(window);
$(function() {
	function z(a, b) {
		var d = document.createElement("input");
		d.type = "hidden";
		d.name = a;
		d.value = b;
		g.appendChild(d)
	}
	if (!(0 < $("#J-search-new-flag").length)) {
		var r, g = document.getElementById("SearchForm");
		if (g && g.word) {
			var p = g.word;
			if (window.InputSuggest) {
				var t = new InputSuggest({
					carrier: p,
					asyncData: {
						url: "//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"
					},
					isEncodeParam: !0,
					style: {
						container: "div",
						highlightCls: "blue",
						selectedCls: "hover",
						listCls: "dropmenu-list",
						itemMarkCls: "suggestItem"
					},
					templates: {
						sug: '\x3ca href\x3d"javascript:;" val\x3d"\x3c$ return word.replace(/"/g, "\x26quot;"); $\x3e" J-code\x3d"{catCode}"\x3e{{word}}\x3c$ if (catName) { return " in "; } $\x3e\x3cspan class\x3dhighlight-category\x3e{catName}\x3c/span\x3e\x3c/a\x3e',
						ads: '\x3cdiv class\x3d"suggest-pro cf"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" class\x3d"pro-img" ads-data\x3d"{adsData},pa:1"\x3e\x3cimg src\x3d"{img}" width\x3d"80" height\x3d"60" alt\x3d""\x3e\x3c/a\x3e\x3cdiv class\x3d"pro-links"\x3e\x3ca href\x3d"{url}" target\x3d"_blank" ads-data\x3d"{adsData},pa:2"\x3e{name}\x3c/a\x3e\x3ca href\x3d"{comUrl}" target\x3d"_blank" class\x3d"company" ads-data\x3d"{adsData},pa:3"\x3e{comName}\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'
					}
				});
				t.sugCustomAction = function(a) {
					a.attr("J-code") && $(g).find("input[name\x3dcode]").val(a.attr("J-code"));
					$(g).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'1'/\x3e");
					g.submit()
				};
				t.adsCustomAction = function(a, b) {
					13 == b.keyCode && a.find("a:eq(0)")[0].click()
				};
				("1" === $("#searchType select").val() || "2" === $("#searchType select").val()) && t && t.disabled(!0);
				t.on("show", function() {
					$(g).find(".J-inputWrap").addClass("search-focus")
				});
				t.on("hide", function() {
					$(g).find(".J-inputWrap").removeClass("search-focus")
				});
				$(p).bind("focus", function() {
					$.trim($(p).val()).length && t.show()
				})
			}
			if (document.getElementById("searchType")) {
				var e = function(a) {
					t && ("0" === a || "1" === a ? ("0" === a ? t.changeAsync("//keywordsuggestions.made-in-china.com/suggest/getEnProdSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?") : t.changeAsync("//keywordsuggestions.made-in-china.com/suggest/getEnSupplierSuggest.do?param\x3d#param#\x26kind\x3d5\x26ad\x3d1\x26id\x3dMICSearchSuggest\x26count\x3d10\x26ignoreCase\x3dtrue\x26matchAnywhere\x3dtrue\x26catflag\x3d1\x26call\x3d?"), t.disabled(!1)) : t.disabled(!0))
				};
				var k = new MaskSelect({
					carrier: document.getElementById("searchType"),
					control: {
						selectedHide: !0
					}
				});
				var v = k.value();
				e(v);
				k.onchange(function() {
					v = k.value();
					r = $(this).attr("data-args");
					g.action = $(this).attr("data-action");
					e(v);
					p.setAttribute("placeholder", this.getAttribute("placeholder"))
				})
			}
			$(g).bind("submit", function(a) {
				if ("" === $.trim(p.value)) return alert("Please enter a keyword at least for your search."), a.preventDefault(), !1;
				if (!/^[\x00-\x7F\xB0]*$/.test(p.value)) return alert("Please input the information in English only."),
					a.preventDefault(), !1;
				r || -1 == g.action.indexOf("?") || (r = g.action.substr(g.action.indexOf("?") + 1));
				if (r)
					if ($(g).find("input[type\x3dhidden]").remove(), -1 !== r.indexOf("\x26")) {
						var b = r.split("\x26");
						for (var d = 0; d < b.length; d++) {
							var c = b[d].split("\x3d");
							z(c[0], -1 !== c[1].indexOf("{word}") ? encodeURIComponent(p.value) : c[1])
						}
					} else -1 !== r.indexOf("\x3d") && (c = r.split("\x3d"), z(c[0], c[1]));
				if (k && "2" === k.value()) return window.location.href = "//sourcing.made-in-china.com/sourcingrequest?keyword\x3d" + encodeURIComponent(p.value) + "\x26type\x3dkeyword\x26requestfor\x3d1", a.preventDefault(), !1
			});
			(function() {
				var a = $(g).find(".J-history"),
					b = !1;
				$(g).find(".J-inputWrap").hover(function() {
					b || (b = !0, $.getJSON("//www.made-in-china.com/ajaxfunction.do?xcase\x3dgetKeywordHistory\x26jsoncallback\x3d?", function(b) {
						var c = '\x3cdiv class\x3d"history-word J-hisWord"\x3e\x3ca href\x3d"//www.made-in-china.com/browsing-history/"\x3e\x3cstrong\x3eYour Recent KeyWords: \x3c/strong\x3e\x3c/a\x3e';
						if (b && b.list && 0 < b.list.length) {
							b = b.list;
							for (var d = 0; d < b.length; d++) c += '\x3ca href\x3d"javascript:;"\x3e' + decodeURIComponent(b[d].word.replace(/\+/g, " ")) + "\x3c/a\x3e" + (d === b.length - 1 ? "" : ", ");
							a.html(c + "\x3c/div\x3e")
						}
					}));
					"" === p.value && "" !== $.trim(a.html()) && a.show()
				}, function(b) {
					a.hide()
				});
				$(p).bind("keyup", function() {
					"" === p.value && "" !== $.trim(a.html()) ? a.show() : a.hide()
				});
				$(g).find(".J-history").bind("click", function(a) {
					if ("a" === a.target.nodeName.toLowerCase() && "javascript:;" === $(a.target).attr("href")) return $.trim(a.target.innerHTML) && (p.value = a.target.childNodes[0].nodeValue, $(g).append("\x3cinput type\x3d'hidden' name\x3d'log_from' value\x3d'4'/\x3e"), $(g).submit()), a.preventDefault(), !1
				})
			})();
			(function() {
				if ($("#searchWordMore").length) {
					var a = $("#searchWordMore");
					a.find(".dropmenu-hd").bind("mouseover", function() {
						a.addClass("hover");
						a.find(".icon").html("\x26#xf0d8;")
					});
					a.bind("mouseleave", function() {
						a.removeClass("hover");
						a.find(".icon").html("\x26#xf0d7;")
					})
				}
				if ($("#qpMore").length && 0 === $("#linkMoreN").length) {
					var b = null;
					$("#qpKeys").show();
					$("#qpMore").before($("#linkMore").clone().removeClass().attr("id", "linkMoreN").removeClass("mr").mouseover(function() {
						var a = $("#linkMoreN").position(),
							b = document.documentElement && document.documentElement.clientWidth + document.documentElement.scrollLeft || document.body && document.body.clientWidth + document.body.scrollLeft;
						a.left + $("#qpMore").width() > b ? $("#qpKeys").css({
							position: "absolute",
							right: "-53px"
						}) : $("#qpKeys").removeAttr("style");
						$("#qpMore").css({
							left: a.left - 8 + "px",
							top: a.top + 5 + "px"
						}).show()
					})).hover(function() {
						clearTimeout(b)
					}, function() {
						clearTimeout(b);
						b = setTimeout(function() {
							$("#qpMore").hide()
						}, 400)
					})
				}
			})();
			(function() {
				window.advancedSearch = function() {
					var a = "",
						b = "";
					var d = 0 < $('.dropItem input[name\x3d"type"]').size() ? $('.dropItem input[name\x3d"type"]').val() : "999";
					0 < $('.dropItem input[name\x3d"code"]').size() && (b = $('.dropItem input[name\x3d"code"]').val(), b = "-1" == b || "0" == b ? "" : b);
					switch (k.value()) {
						case "0":
							a = "product";
							break;
						case "1":
							a = "supplier";
							break;
						case "2":
							a = "sourcing";
							break;
						case "4":
						case "5":
						case "6":
							a = "offer"
					}
					var c = jQuery.trim(jQuery("#searchWord").val());
					for (var e = "", g = 0; g < c.length; g++) {
						var l = c.substring(g, g + 1);
						if ("?" == l) return alert("Please input an legal keyword(s)."), !1;
						"." != l && (e = /^\W+$/.test(l) ? e + " " : e + l)
					}
					e = $.trim(e);
					c = e.replace(/_/ig, " ").split(" ");
					e = "";
					for (g = 0; g < c.length; g++) "" !== c[g] && (e += (0 === g ? "" : "_") + c[g]);
					window.location.href = "/advanced-search/" + e + "/" + a + "-" + b + "-nolimit-" + d + "--.html"
				}
			})();
			(function() {
				$("#advanced-search").length && ($("#advanced-search").attr("href", "javascript:;"), $("#advanced-search").on("click", function() {
					advancedSearch()
				}))
			})()
		}
	}
});