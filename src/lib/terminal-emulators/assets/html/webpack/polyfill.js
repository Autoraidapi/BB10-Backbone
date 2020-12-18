! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t) : e(t)
}("undefined" != typeof window ? window : global, function (t) {
    "use strict";
    var e = Object.defineProperty,
        r = Object.defineProperties,
        n = 0,
        o = [],
        i = Array.prototype.slice,
        a = "object" == typeof t.ES6 ? t.ES6 : t.ES6 = {},
        u = Array.isArray,
        l = Object.prototype.toString,
        f = Array.prototype.push,
        c = function () {},
        s = function (t) {
            return t
        },
        h = function (t) {
            return "function" == typeof t
        },
        p = function () {},
        y = function (t, e) {
            this._array = t, this._flag = e, this._nextIndex = 0
        },
        g = function (t, e) {
            this._string = t, this._flag = e, this._nextIndex = 0
        },
        b = function (t) {
            return null !== t && ("object" == typeof t || "function" == typeof t)
        },
        d = function (t, e) {
            if ("number" == typeof t.length && t.length >= 0 && "number" == typeof e.length && e.length >= 0) {
                var r = Math.floor(t.length),
                    n = Math.floor(e.length),
                    o = 0;
                for (t.length = r + n; o < n; ++o) e.hasOwnProperty(o) && (t[r + o] = e[o])
            }
        },
        w = function (t, e) {
            if ("function" != typeof t || "function" != typeof e) throw new TypeError("Child and Parent must be function type");
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t
        },
        v = function t(e) {
            if (e = void 0 === e ? "" : String(e), this instanceof t) throw new TypeError("Symbol is not a constructor");
            return function (t, e) {
                return r(t, {
                    _description: {
                        value: e
                    },
                    _isSymbol: {
                        value: !0
                    },
                    _id: {
                        value: n++
                    }
                }), t
            }(Object.create(t.prototype), e)
        };
    r(v, {
        for: {
            value: function (t) {
                t = String(t);
                for (var e, r = o.length, n = 0; n < r; ++n)
                    if ((e = o[n]).key === t) return e.symbol;
                return e = {
                    key: t,
                    symbol: v(t)
                }, o.push(e), e.symbol
            },
            writable: !0,
            configurable: !0
        },
        keyFor: {
            value: function (t) {
                if (!a.isSymbol(t)) throw new TypeError(String(t) + " is not a symbol");
                for (var e, r = o.length, n = 0; n < r; ++n)
                    if ((e = o[n]).symbol === t) return e.key
            },
            writable: !0,
            configurable: !0
        },
        hasInstance: {
            value: v("Symbol.hasInstance")
        },
        isConcatSpreadable: {
            value: v("Symbol.isConcatSpreadable")
        },
        iterator: {
            value: v("Symbol.iterator")
        },
        toStringTag: {
            value: v("Symbol.toStringTag")
        }
    }), v.prototype.toString = function () {
        return "@@_____" + this._id + "_____"
    }, v.prototype.valueOf = function () {
        return this
    }, e(p.prototype, v.iterator.toString(), {
        value: function () {
            return this
        },
        writable: !0,
        configurable: !0
    }), w(y, p), w(g, p), e(y.prototype, v.toStringTag.toString(), {
        value: "Array Iterator",
        configurable: !0
    }), e(g.prototype, v.toStringTag.toString(), {
        value: "String Iterator",
        configurable: !0
    }), y.prototype.next = function () {
        if (!(this instanceof y)) throw new TypeError("Method Array Iterator.prototype.next called on incompatible receiver " + String(this));
        var t;
        return -1 === this._nextIndex ? {
            done: !0,
            value: void 0
        } : "number" == typeof this._array.length && this._array.length >= 0 && this._nextIndex < Math.floor(this._array.length) ? (1 === this._flag ? t = [this._nextIndex, this._array[this._nextIndex]] : 2 === this._flag ? t = this._array[this._nextIndex] : 3 === this._flag && (t = this._nextIndex), this._nextIndex++, {
            done: !1,
            value: t
        }) : (this._nextIndex = -1, {
            done: !0,
            value: void 0
        })
    }, g.prototype.next = function () {
        if (!(this instanceof g)) throw new TypeError("Method String Iterator.prototype.next called on incompatible receiver " + String(this));
        var t, e = new String(this._string);
        return -1 === this._nextIndex ? {
            done: !0,
            value: void 0
        } : this._nextIndex < e.length ? (t = e[this._nextIndex], this._nextIndex++, {
            done: !1,
            value: t
        }) : (this._nextIndex = -1, {
            done: !0,
            value: void 0
        })
    };
    var _ = function (t, e) {
        this._target = t, this._values = [], this._thisArg = e
    };
    _.prototype.spread = function () {
        var t = this;
        return i.call(arguments).forEach(function (e) {
            a.forOf(e, function (e) {
                t._values.push(e)
            })
        }), t
    }, _.prototype.add = function () {
        var t = this;
        return i.call(arguments).forEach(function (e) {
            t._values.push(e)
        }), t
    }, _.prototype.call = function (t) {
        if ("function" != typeof this._target) throw new TypeError("Target is not a function");
        return t = arguments.length <= 0 ? this._thisArg : t, this._target.apply(t, this._values)
    }, _.prototype.new = function () {
        if ("function" != typeof this._target) throw new TypeError("Target is not a constructor");
        var t, e;
        return t = Object.create(this._target.prototype), e = this._target.apply(t, this._values), b(e) ? e : t
    }, _.prototype.array = function () {
        if (!u(this._target)) throw new TypeError("Target is not a array");
        return f.apply(this._target, this._values), this._target
    };
    return r(a, {
        isSymbol: {
            value: function (t) {
                return t instanceof v && function (t) {
                    return !0 === t._isSymbol && "number" == typeof t._id && "string" == typeof t._description
                }(t)
            },
            writable: !0,
            configurable: !0
        },
        instanceOf: {
            value: function (t, e) {
                if (!b(e)) throw new TypeError("Right-hand side of 'instanceof' is not an object");
                var r = e[v.hasInstance];
                if (void 0 === r) return t instanceof e;
                if ("function" != typeof r) throw new TypeError(typeof r + " is not a function");
                return r.call(e, t)
            },
            writable: !0,
            configurable: !0
        },
        forOf: {
            value: function (t, e, r) {
                if (e = "function" != typeof e ? c : e, "function" != typeof t[v.iterator]) throw new TypeError("Iterable[Symbol.iterator] is not a function");
                var n, o = t[v.iterator]();
                if ("function" != typeof o.next) throw new TypeError(".iterator.next is not a function");
                for (;;) {
                    if (n = o.next(), !b(n)) throw new TypeError("Iterator result " + n + " is not an object");
                    if (n.done) break;
                    e.call(r, n.value)
                }
            },
            writable: !0,
            configurable: !0
        },
        spreadOperator: {
            value: function (t, e) {
                if ("function" != typeof t && !u(t)) throw new TypeError("Spread operator only supports on array and function objects at this moment");
                return new _(t, e)
            },
            writable: !0,
            configurable: !0
        }
    }), e(t, "Symbol", {
        value: v,
        writable: !0,
        configurable: !0
    }), e(Function.prototype, v.hasInstance.toString(), {
        value: function (t) {
            return "function" == typeof this && t instanceof this
        }
    }), e(Array.prototype, "concat", {
        value: function () {
            if (null == this) throw new TypeError("Array.prototype.concat called on null or undefined");
            var t = Object(this),
                e = i.call(arguments),
                r = [];
            return e.unshift(t), e.forEach(function (t) {
                b(t) ? void 0 !== t[v.isConcatSpreadable] ? t[v.isConcatSpreadable] ? d(r, t) : r.push(t) : u(t) ? d(r, t) : r.push(t) : r.push(t)
            }), r
        },
        writable: !0,
        configurable: !0
    }), e(Object.prototype, "toString", {
        value: function () {
            return null == this ? l.call(this) : "string" == typeof this[v.toStringTag] ? "[object " + this[v.toStringTag] + "]" : l.call(this)
        },
        writable: !0,
        configurable: !0
    }), e(Array.prototype, v.iterator.toString(), {
        value: function () {
            if (null == this) throw new TypeError("Cannot convert undefined or null to object");
            var t = Object(this);
            return new y(t, 2)
        },
        writable: !0,
        configurable: !0
    }), e(Array, "from", {
        value: function (t, e, r) {
            var n, o, i, u = 0;
            if (n = h(this) ? this : Array, null == t) throw new TypeError("Cannot convert undefined or null to object");
            if (t = Object(t), void 0 === e) e = s;
            else if (!h(e)) throw new TypeError(e + " is not a function");
            if (void 0 === t[v.iterator]) {
                if (!("number" == typeof t.length && t.length >= 0)) return (i = new n(0)).length = 0, i;
                for (o = Math.floor(t.length), (i = new n(o)).length = o; u < o; ++u) i[u] = e.call(r, t[u])
            } else(i = new n).length = 0, a.forOf(t, function (t) {
                i.length++, i[i.length - 1] = e.call(r, t)
            });
            return i
        },
        writable: !0,
        configurable: !0
    }), e(Array.prototype, "entries", {
        value: function () {
            if (null == this) throw new TypeError("Cannot convert undefined or null to object");
            var t = Object(this);
            return new y(t, 1)
        },
        writable: !0,
        configurable: !0
    }), e(Array.prototype, "keys", {
        value: function () {
            if (null == this) throw new TypeError("Cannot convert undefined or null to object");
            var t = Object(this);
            return new y(t, 3)
        },
        writable: !0,
        configurable: !0
    }), e(String.prototype, v.iterator.toString(), {
        value: function () {
            if (null == this) throw new TypeError("String.prototype[Symbol.iterator] called on null or undefined");
            return new g(String(this), 0)
        },
        writable: !0,
        configurable: !0
    }), a
});
var createObjectIdentifier = function () {
    return "_" + ++createObjectIdentifier._last
};
createObjectIdentifier._last = 0;
var Map = function () {
    this._map = {}, this._size = 0
};
Map.prototype = {
    put: function (i, t) {
        var e = i.__identifier;
        e || (e = createObjectIdentifier(), i.__identifier = e), this._map[e] || ++this._size, this._map[e] = [i, t]
    },
    remove: function (i) {
        var t = this._map[i.__identifier];
        if (t) return --this._size, delete this._map[i.__identifier], t[1]
    },
    keys: function () {
        return this._list(0)
    },
    values: function () {
        return this._list(1)
    },
    _list: function (i) {
        var t = new Array(this._size),
            e = 0;
        for (var r in this._map) t[e++] = this._map[r][i];
        return t
    },
    get: function (i) {
        var t = this._map[i.__identifier];
        return t ? t[1] : void 0
    },
    size: function () {
        return this._size
    },
    clear: function () {
        this._map = {}, this._size = 0
    }
};