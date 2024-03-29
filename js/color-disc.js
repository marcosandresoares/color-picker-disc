! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ColorDisc = e() : t.ColorDisc = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(i, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 3)
    }([function(t, e, n) {
        (e = t.exports = n(2)(!1)).push([t.i, ".color-stage-2IK7n,.color-stage-3OBgB{position:absolute;z-index:10;border-radius:50%;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.35);box-shadow:3px 3px 3px rgba(0,0,0,.35);border:1px solid #fff;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;cursor:pointer}", ""]), e.locals = {
            huePicker: "color-stage-2IK7n",
            wheelPicker: "color-stage-3OBgB"
        }
    }, function(t, e, n) {
        (e = t.exports = n(2)(!1)).push([t.i, ".color-disc-3j_Sx{background-color:#222;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]), e.locals = {
            colorDisc: "color-disc-3j_Sx"
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = function(t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i) return n;
                        if (e && "function" == typeof btoa) {
                            var o = (s = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                r = i.sources.map(function(t) {
                                    return "/*# sourceURL=" + i.sourceRoot + t + " */"
                                });
                            return [n].concat(r).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    null != r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    null != s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = {
                degToRad: function(t) {
                    return t * Math.PI / 180
                },
                radToDeg: function(t) {
                    return 180 * t / Math.PI
                },
                getAngleFromPos: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Math.atan2(t.y, t.x);
                    return n < 0 && (n += 2 * Math.PI), e ? n : Math.floor(this.radToDeg(n))
                },
                getPosFromDegAndRadius: function(t, e) {
                    var n = this.degToRad(t);
                    return {
                        x: e * Math.cos(n),
                        y: e * Math.sin(n)
                    }
                },
                getRgb: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e /= 100, n /= 100;
                    var o = (1 - Math.abs(2 * n - 1)) * e,
                        r = o * (1 - Math.abs(t / 60 % 2 - 1)),
                        s = n - o / 2,
                        a = 0,
                        c = 0,
                        h = 0;
                    return t >= 0 && t < 60 ? (a = o, c = r, h = 0) : t >= 60 && t < 120 ? (a = r, c = o, h = 0) : t >= 120 && t < 180 ? (a = 0, c = o, h = r) : t >= 180 && t < 240 ? (a = 0, c = r, h = o) : t >= 240 && t < 300 ? (a = r, c = 0, h = o) : t >= 300 && t < 360 && (a = o, c = 0, h = r), a = Math.round(255 * (a + s)), c = Math.round(255 * (c + s)), h = Math.round(255 * (h + s)), i ? {
                        r: a,
                        g: c,
                        b: h
                    } : "rgb(".concat(a, ", ").concat(c, ", ").concat(h, ")")
                },
                getHsl: function(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    t /= 255, e /= 255, n /= 255;
                    var o = Math.min(t, e, n),
                        r = Math.max(t, e, n),
                        s = r - o,
                        a = 0,
                        c = 0,
                        h = 0;
                    return a = 0 === s ? 0 : r === t ? (e - n) / s % 6 : r === e ? (n - t) / s + 2 : (t - e) / s + 4, (a = Math.round(60 * a)) < 0 && (a += 360), h = (r + o) / 2, c = +(100 * (c = 0 === s ? 0 : s / (1 - Math.abs(2 * h - 1)))).toFixed(1), h = +(100 * h).toFixed(1), i ? {
                        h: a,
                        s: c,
                        l: h
                    } : "hsl(".concat(a, ", ").concat(c, "%, ").concat(h, "%)")
                },
                getHex: function(t, e, n) {
                    return t = t.toString(16), e = e.toString(16), n = n.toString(16), 1 === t.length && (t = "0".concat(t)), 1 === e.length && (e = "0".concat(e)), 1 === n.length && (n = "0".concat(n)), "#".concat(t).concat(e).concat(n)
                }
            },
            o = n(1),
            r = n.n(o);

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function a(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function h(t, e) {
            return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function u(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (u = function(t) {
                if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                var n;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return l(t, arguments, f(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), _(i, t)
            })(t)
        }

        function l(t, e, n) {
            return (l = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct : function(t, e, n) {
                var i = [null];
                i.push.apply(i, e);
                var o = new(Function.bind.apply(t, i));
                return n && _(o, n.prototype), o
            }).apply(null, arguments)
        }

        function _(t, e) {
            return (_ = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function f(t) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var d = function(t) {
                function e() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (t = h(this, f(e).call(this))).attachShadow({
                        mode: "open"
                    }), t
                }
                var n, o, s;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && _(t, e)
                }(e, u(HTMLElement)), n = e, s = [{
                    key: "observedAttributes",
                    get: function() {
                        return ["size", "format"]
                    }
                }], (o = [{
                    key: "attributeChangedCallback",
                    value: function(t, e, n) {
                        if (e !== n && this.shadowRoot.childNodes.length > 0) switch (t) {
                            case "size":
                                this.__render(), this.__observeStage();
                                break;
                            case "format":
                                this.__onColorFormatChange(n, this.shadowRoot.querySelector("color-stage"))
                        }
                    }
                }, {
                    key: "connectedCallback",
                    value: function() {
                        this.__render(), this.__observeStage()
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function() {
                        this.__colorObserver.disconnect()
                    }
                }, {
                    key: "__render",
                    value: function() {
                        // Change default BG color
                        var t = r.a.locals,
                            e = this.__getAllFormats(343, 69, 44);
                        this.setAttribute("color", e[this.getAttribute("format")]), this.__padding = 20, this.__size = parseInt(this.getAttribute("size"), 10) || 390, this.shadowRoot.innerHTML = "\n      <style>\n        ".concat(r.a.toString().replace(/\n|\t/g, ""), '\n      </style>\n      <div\n        class="').concat(t.colorDisc, '"\n        style="width: ').concat(this.__size, 'px;"\n      >\n        <color-stage\n          size="').concat(this.__size, '"\n          padding="').concat(this.__padding, '"\n        ></color-stage>\n      </div>\n      ')
                    }
                }, {
                    key: "__observeStage",
                    value: function() {
                        var t = this,
                            e = this,
                            n = this.shadowRoot.querySelector("color-stage");
                        this.__colorObserver = new MutationObserver(function(n) {
                            n.forEach(function(n) {
                                return t.__onColorFormatChange(e.getAttribute("format"), n.target)
                            })
                        }), this.__colorObserver.observe(n, {
                            attributes: !0
                        })
                    }
                }, {
                    key: "__onColorFormatChange",
                    value: function(t, e) {
                        var n = parseInt(e.getAttribute("h"), 10),
                            i = parseInt(e.getAttribute("s"), 10),
                            o = parseInt(e.getAttribute("l"), 10),
                            r = this.__getAllFormats(n, i, o);
                        this.setAttribute("color", r[t])
                    }
                }, {
                    key: "__getAllFormats",
                    value: function(t, e, n) {
                        return {
                            hsl: "hsl(".concat(t, ", ").concat(e, "%, ").concat(n, "%)"),
                            rgb: i.getRgb(t, e, n),
                            hex: i.getHex.apply(i, a(Object.values(i.getRgb(t, e, n, !0))))
                        }
                    }
                }]) && c(n.prototype, o), s && c(n, s), e
            }(),
            g = function() {
                function t() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return "".concat(t()).concat(t(), "-").concat(t(), "-").concat(t(), "-").concat(t())
            },
            p = n(0),
            y = n.n(p);

        function b(t) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function v(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function m(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function R(t, e) {
            return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function w(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (w = function(t) {
                if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                var n;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return x(t, arguments, C(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), k(i, t)
            })(t)
        }

        function x(t, e, n) {
            return (x = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct : function(t, e, n) {
                var i = [null];
                i.push.apply(i, e);
                var o = new(Function.bind.apply(t, i));
                return n && k(o, n.prototype), o
            }).apply(null, arguments)
        }

        function k(t, e) {
            return (k = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function C(t) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }[{
            tag: "color-stage",
            node: function(t) {
                function e() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (t = R(this, C(e).call(this))).attachShadow({
                        mode: "open"
                    }), t
                }
                var n, o, r;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && k(t, e)
                }(e, w(HTMLElement)), n = e, r = [{
                    key: "observedAttributes",
                    get: function() {
                        return ["h", "s", "l"]
                    }
                }], (o = [{
                    key: "connectedCallback",
                    value: function() {
                        this.__init()
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function(t, e, n) {
                        if (e !== n) switch (t) {
                            case "h":
                                e && (this.__wheelPicker.style.backgroundColor = i.getRgb(n, parseFloat(this.getAttribute("s")), parseFloat(this.getAttribute("l"))))
                        }
                    }
                }, {
                    key: "__init",
                    value: function() {
                        this.setAttribute("h", 0), this.__hue = 0, this.__mount(), this.__initCanvasEnvironment(), this.__drawHueRing(), this.__drawWheel(), this.__drawWheelPicker(), this.__drawHuePicker(), this.__addCanvasListeners()
                    }
                }, {
                    key: "__mount",
                    value: function() {
                        var t = "position: relative; width: ".concat(this.getAttribute("size"));
                        this.__sceneCanvasId = g(), this.__containerId = g(), this.shadowRoot.innerHTML = "\n      <style>\n        ".concat(y.a.toString().replace(/\n|\t/g, ""), '\n      </style>\n      <div id="').concat(this.__containerId, '" style="').concat(t, '">\n        <canvas id="').concat(this.__sceneCanvasId, '" style="').concat("position: absolute;", '"></canvas>\n      </div>\n    ')
                    }
                }, {
                    key: "__initCanvasEnvironment",
                    value: function() {
                        var t = this.shadowRoot;
                        this.__shapeRegistry = {}, this.__size = parseInt(this.getAttribute("size"), 10), this.__padding = parseInt(this.getAttribute("padding"), 10), this.__half = this.__size / 2, this.__scene = t.getElementById(this.__sceneCanvasId), this.__sceneCtx = this.__scene.getContext("2d"), this.__hitCanvas = document.createElement("canvas"), this.__hitCtx = this.__hitCanvas.getContext("2d"), this.__scene.width = this.__size, this.__scene.height = this.__size, this.__hitCanvas.width = this.__size, this.__hitCanvas.height = this.__size, this.__sceneCtx.fillStyle = "#e6e6e6", this.__sceneCtx.fillRect(0, 0, this.__size, this.__size), this.__sceneCtx.translate(this.__half, this.__half), this.__hitCtx.translate(this.__half, this.__half)
                    }
                }, {
                    key: "__drawHueRing",
                    value: function() {
                        this.__hueRingOuterR = this.__half - this.__padding, this.__hueRingInnerR = .75 * this.__hueRingOuterR, this.__hueRingRectH = this.__hueRingOuterR - this.__hueRingInnerR;
                        for (var t = this.__sceneCtx, e = this.__hitCtx, n = 0; n < 360; n += 1) {
                            t.save(), t.rotate(i.degToRad(n));
                            var o = [this.__hueRingInnerR, 0],
                                r = [this.__hueRingOuterR, 0],
                                s = Object.values(i.getPosFromDegAndRadius(1, this.__hueRingOuterR)),
                                a = Object.values(i.getPosFromDegAndRadius(1, this.__hueRingInnerR)),
                                c = Object.values(i.getPosFromDegAndRadius(.5, this.__hueRingOuterR)),
                                h = Object.values(i.getPosFromDegAndRadius(.5, this.__hueRingInnerR));
                            t.fillStyle = "hsl(".concat(n, ", 100%, 50%)"), t.strokeStyle = "hsl(".concat(n, ", 100%, 50%)"), t.moveTo.apply(t, o), t.beginPath(), t.lineTo.apply(t, r), t.quadraticCurveTo.apply(t, v(c).concat(v(s))), t.lineTo.apply(t, v(a)), t.quadraticCurveTo.apply(t, v(h).concat(o)), t.closePath(), t.fill(), t.stroke(), t.restore(), t.moveTo(0, 0)
                        }
                        this.__shapeRegistry.ring = this.__getRandomColor(), e.fillStyle = this.__shapeRegistry.ring, e.beginPath(), e.arc(0, 0, this.__hueRingOuterR, 0, 2 * Math.PI, !1), e.arc(0, 0, this.__hueRingInnerR, 0, 2 * Math.PI, !0), e.fill(), e.closePath()
                    }
                }, {
                    key: "__drawWheelPicker",
                    value: function() {
                        var t = y.a.locals,
                            e = this.shadowRoot.getElementById(this.__containerId);
                        this.__wheelPickerR = this.__size / 40, this.__wheelPicker = document.createElement("a"), this.__wheelPicker.classList.add(t.wheelPicker), this.__wheelPicker.style.width = "".concat(2 * this.__wheelPickerR, "px"), this.__wheelPicker.style.height = "".concat(2 * this.__wheelPickerR, "px"), this.__wheelPicker.style.left = "".concat(this.__half, "px"), this.__wheelPicker.style.top = "".concat(this.__half, "px");
                        var n = this.__sceneCtx.getImageData(this.__half, this.__half, 1, 1).data,
                            o = "rgb(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ")");
                        this.__wheelPicker.style.backgroundColor = o;
                        var r = i.getHsl(n[0], n[1], n[2], !0);
                        this.setAttribute("s", Math.round(r.s)), this.setAttribute("l", Math.round(r.l)), e.appendChild(this.__wheelPicker), this.__makeDraggable(this.__wheelPicker, this.__positionWheelPicker.bind(this))
                    }
                }, {
                    key: "__redrawWheel",
                    value: function() {
                        this.__sceneCtx.restore(), 0 !== parseInt(this.getAttribute("h"), 10) && (this.__sceneCtx.beginPath(), this.__sceneCtx.arc(0, 0, this.__wheelR, 0, 2 * Math.PI), this.__sceneCtx.closePath(), this.__sceneCtx.fillStyle = "#222222", this.__sceneCtx.fill()), this.__brightnessGradient = this.__sceneCtx.createLinearGradient(-this.__wheelR, -this.__wheelR, -this.__wheelR, this.__wheelR), this.__brightnessGradient.addColorStop(0, "white"), this.__brightnessGradient.addColorStop(1, "black");
                        var t = this.__sceneCtx.createLinearGradient(-this.__wheelR, -this.__wheelR, this.__wheelR, -this.__wheelR);
                        t.addColorStop(0, "hsla(".concat(this.getAttribute("h"), ",100%,50%,0)")), t.addColorStop(1, "hsla(".concat(this.getAttribute("h"), ",100%,50%,1)")), this.__sceneCtx.beginPath(), this.__sceneCtx.arc(0, 0, this.__wheelR, 0, 2 * Math.PI), this.__sceneCtx.closePath(), this.__sceneCtx.fillStyle = this.__brightnessGradient, this.__sceneCtx.fill(), this.__sceneCtx.fillStyle = t, this.__sceneCtx.globalCompositeOperation = "multiply", this.__sceneCtx.fill(), this.__sceneCtx.globalCompositeOperation = "source-over", this.__sceneCtx.save()
                    }
                }, {
                    key: "__drawWheel",
                    value: function() {
                        this.__wheelR = this.__hueRingOuterR / 1.61, this.__redrawWheel(), this.__shapeRegistry.wheel = this.__getRandomColor(), this.__hitCtx.beginPath(), this.__hitCtx.arc(0, 0, this.__wheelR, 0, 2 * Math.PI), this.__hitCtx.fillStyle = this.__shapeRegistry.wheel, this.__hitCtx.closePath(), this.__hitCtx.fill()
                    }
                }, {
                    key: "__drawHuePicker",
                    value: function() {
                        var t = y.a.locals,
                            e = this.shadowRoot.getElementById(this.__containerId);
                        this.__huePicker = document.createElement("a"), this.__huePicker.classList.add(t.huePicker), this.__huePicker.style.width = "".concat(this.__hueRingRectH, "px"), this.__huePicker.style.height = "".concat(this.__hueRingRectH, "px"), this.__huePicker.style.backgroundColor = "hsl(".concat(this.getAttribute("hue"), ", 0%, 95%)"), this.__huePicker.style.left = "".concat(this.__size - this.__padding - this.__hueRingRectH, "px"), this.__huePicker.style.top = "".concat(this.__half - this.__hueRingRectH / 2, "px"), this.__makeDraggable(this.__huePicker, this.__huePickerMoveHandler.bind(this)), e.appendChild(this.__huePicker)
                    }
                }, {
                    key: "__huePickerMoveHandler",
                    value: function(t) {
                        this.__positionHuePicker(t), this.__redrawWheel()
                    }
                }, {
                    key: "__makeDraggable",
                    value: function(t, e) {
                        var n = this;
                        t.addEventListener("mousedown", function(t) {
                            return n.__onElementDown(t, e)
                        }), t.addEventListener("touchstart", function(t) {
                            return n.__onElementDown(t, e)
                        })
                    }
                }, {
                    key: "__onElementDown",
                    value: function(t, e) {
                        var n = this;

                        function i(t) {
                            e(t), document.addEventListener("mouseup", function(t) {
                                return n.__onElementUp(t)(i)
                            }), document.addEventListener("touchend", function(t) {
                                return n.__onElementUp(t)(i)
                            })
                        }
                        document.addEventListener("mousemove", i), document.addEventListener("touchmove", i)
                    }
                }, {
                    key: "__onElementUp",
                    value: function() {
                        var t = this;
                        return function(e) {
                            document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), document.removeEventListener("mouseup", t.__onElementUp), document.removeEventListener("touchend", t.__onElementUp)
                        }
                    }
                }, {
                    key: "__getRandomColor",
                    value: function() {
                        var t = Math.round(255 * Math.random()),
                            e = Math.round(255 * Math.random()),
                            n = Math.round(255 * Math.random());
                        return "rgb(".concat(t, ", ").concat(e, ", ").concat(n, ")")
                    }
                }, {
                    key: "__addCanvasListeners",
                    value: function() {
                        var t = this;
                        this.__scene.addEventListener("mousemove", function(e) {
                            var n = t.__getHitColor(e);
                            n === t.__shapeRegistry.ring || n === t.__shapeRegistry.wheel ? t.__scene.style.cursor = "pointer" : t.__scene.style.cursor = "default"
                        }), this.__scene.addEventListener("click", function(e) {
                            var n = t.__getHitColor(e);
                            n === t.__shapeRegistry.ring ? (t.__positionHuePicker(e), t.__redrawWheel()) : n === t.__shapeRegistry.wheel && t.__positionWheelPicker(e)
                        })
                    }
                }, {
                    key: "__positionHuePicker",
                    value: function(t) {
                        var e = this.__getAngleFromClientXY(t),
                            n = this.__hueRingOuterR - this.__hueRingRectH / 2,
                            o = i.getPosFromDegAndRadius(e, n),
                            r = this.__getAbsoluteCanvasPos(o);
                        this.__huePicker.style.left = "".concat(r.x, "px"), this.__huePicker.style.top = "".concat(r.y, "px"), this.__huePicker.style.backgroundColor = "hsl(".concat(e, ", 100%, 50%)"), this.__wheelPicker.style.backgroundColor = "hsl(".concat(e, ", ").concat(this.getAttribute("s"), "%, ").concat(this.getAttribute("l"), "%)"), this.setAttribute("h", e)
                    }
                }, {
                    key: "__positionWheelPicker",
                    value: function(t) {
                        var e = this.__getClientXY(t),
                            n = this.__getAngleFromClientXY(t),
                            o = this.__wheelR,
                            r = this.__getTranslatedCanvasPos(e),
                            s = Math.sqrt(Math.pow(r.x, 2) + Math.pow(r.y, 2)),
                            a = s > o - 2 ? i.getPosFromDegAndRadius(n, o - 2) : i.getPosFromDegAndRadius(n, s),
                            c = this.__getAbsoluteCanvasPos(a, !0),
                            h = {
                                x: c.x - this.__wheelPickerR,
                                y: c.y - this.__wheelPickerR
                            },
                            u = this.__sceneCtx.getImageData(c.x, c.y, 1, 1).data;
                        this.__wheelPicker.style.left = "".concat(h.x, "px"), this.__wheelPicker.style.top = "".concat(h.y, "px");
                        var l = i.getHsl(u[0], u[1], u[2], !0);
                        this.__wheelPicker.style.backgroundColor = "hsl(".concat(l.h, ", ").concat(l.s, "%, ").concat(l.l, "%)"), this.setAttribute("s", Math.round(l.s)), this.setAttribute("l", Math.round(l.l))
                    }
                }, {
                    key: "__getHitColor",
                    value: function(t) {
                        var e = this.__getClientXY(t),
                            n = this.__getCanvasPos(e),
                            i = this.__hitCtx.getImageData(n.x, n.y, 1, 1).data;
                        return "rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")")
                    }
                }, {
                    key: "__getCanvasPos",
                    value: function(t) {
                        return {
                            x: t.x - this.parentElement.getBoundingClientRect().left,
                            y: t.y - this.parentElement.getBoundingClientRect().top
                        }
                    }
                }, {
                    key: "__getClientXY",
                    value: function(t) {
                        return {
                            x: "touchmove" === t.type ? t.touches[0].clientX : t.clientX,
                            y: "touchmove" === t.type ? t.touches[0].clientY : t.clientY
                        }
                    }
                }, {
                    key: "__getTranslatedCanvasPos",
                    value: function(t) {
                        var e = this.__half + this.parentElement.getBoundingClientRect().left,
                            n = this.__half + this.parentElement.getBoundingClientRect().top;
                        return {
                            x: Math.round(t.x - e),
                            y: Math.round(t.y - n)
                        }
                    }
                }, {
                    key: "__getAbsoluteCanvasPos",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return {
                            x: Math.round(this.__half + t.x - (e ? 0 : this.__hueRingRectH / 2)),
                            y: Math.round(this.__half + t.y - (e ? 0 : this.__hueRingRectH / 2))
                        }
                    }
                }, {
                    key: "__getAngleFromClientXY",
                    value: function(t) {
                        var e = this.__getClientXY(t),
                            n = this.__getTranslatedCanvasPos(e);
                        return i.getAngleFromPos(n)
                    }
                }]) && m(n.prototype, o), r && m(n, r), e
            }()
        }, {
            tag: "color-disc",
            node: d
        }].forEach(function(t) {
            customElements.get(t.tag) || customElements.define(t.tag, t.node)
        })
    }])
});