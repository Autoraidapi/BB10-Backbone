var $jscomp = {
    scope: {},
    getGlobal: function (a) {
        return "undefined" != typeof window && window === a ? a : "undefined" != typeof global ? global : a
    }
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.initSymbol = function () {
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
    $jscomp.initSymbol = function () {}
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (a) {
    return "jscomp_symbol_" + a + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    $jscomp.initSymbolIterator = function () {}
};
$jscomp.makeIterator = function (a) {
    $jscomp.initSymbolIterator();
    if (a[$jscomp.global.Symbol.iterator]) return a[$jscomp.global.Symbol.iterator]();
    var b = 0;
    return {
        next: function () {
            return b == a.length ? {
                done: !0
            } : {
                done: !1,
                value: a[b++]
            }
        }
    }
};
$jscomp.arrayFromIterator = function (a) {
    for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
    return c
};
$jscomp.arrayFromIterable = function (a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
};
$jscomp.inherits = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    for (var d in b)
        if ($jscomp.global.Object.defineProperties) {
            var e = $jscomp.global.Object.getOwnPropertyDescriptor(b, d);
            e && $jscomp.global.Object.defineProperty(a, d, e)
        } else a[d] = b[d]
};
$jscomp.array = $jscomp.array || {};
$jscomp.array.done_ = function () {
    return {
        done: !0,
        value: void 0
    }
};
$jscomp.array.arrayIterator_ = function (a, b) {
    a instanceof String && (a = String(a));
    var c = 0;
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    var d = {},
        e = (d.next = function () {
            if (c < a.length) {
                var d = c++;
                return {
                    value: b(d, a[d]),
                    done: !1
                }
            }
            e.next = $jscomp.array.done_;
            return $jscomp.array.done_()
        }, d[Symbol.iterator] = function () {
            return e
        }, d);
    return e
};
$jscomp.array.findInternal_ = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a)) return {
            i: e,
            v: f
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.array.from = function (a, b, c) {
    b = void 0 === b ? function (a) {
        return a
    } : b;
    var d = [];
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    if (a[Symbol.iterator]) {
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        a = a[Symbol.iterator]();
        for (var e; !(e = a.next()).done;) d.push(b.call(c, e.value))
    } else {
        e = a.length;
        for (var f = 0; f < e; f++) d.push(b.call(c, a[f]))
    }
    return d
};
$jscomp.array.of = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return $jscomp.array.from(b)
};
$jscomp.array.entries = function () {
    return $jscomp.array.arrayIterator_(this, function (a, b) {
        return [a, b]
    })
};
$jscomp.array.entries$install = function () {
    Array.prototype.entries || (Array.prototype.entries = $jscomp.array.entries)
};
$jscomp.array.keys = function () {
    return $jscomp.array.arrayIterator_(this, function (a) {
        return a
    })
};
$jscomp.array.keys$install = function () {
    Array.prototype.keys || (Array.prototype.keys = $jscomp.array.keys)
};
$jscomp.array.values = function () {
    return $jscomp.array.arrayIterator_(this, function (a, b) {
        return b
    })
};
$jscomp.array.values$install = function () {
    Array.prototype.values || (Array.prototype.values = $jscomp.array.values)
};
$jscomp.array.copyWithin = function (a, b, c) {
    var d = this.length;
    a = Number(a);
    b = Number(b);
    c = Number(null != c ? c : d);
    if (a < b)
        for (c = Math.min(c, d); b < c;) b in this ? this[a++] = this[b++] : (delete this[a++], b++);
    else
        for (c = Math.min(c, d + b - a), a += c - b; c > b;) --c in this ? this[--a] = this[c] : delete this[a];
    return this
};
$jscomp.array.copyWithin$install = function () {
    Array.prototype.copyWithin || (Array.prototype.copyWithin = $jscomp.array.copyWithin)
};
$jscomp.array.fill = function (a, b, c) {
    null != c && a.length || (c = this.length || 0);
    c = Number(c);
    for (b = Number((void 0 === b ? 0 : b) || 0); b < c; b++) this[b] = a;
    return this
};
$jscomp.array.fill$install = function () {
    Array.prototype.fill || (Array.prototype.fill = $jscomp.array.fill)
};
$jscomp.array.find = function (a, b) {
    return $jscomp.array.findInternal_(this, a, b).v
};
$jscomp.array.find$install = function () {
    Array.prototype.find || (Array.prototype.find = $jscomp.array.find)
};
$jscomp.array.findIndex = function (a, b) {
    return $jscomp.array.findInternal_(this, a, b).i
};
$jscomp.array.findIndex$install = function () {
    Array.prototype.findIndex || (Array.prototype.findIndex = $jscomp.array.findIndex)
};
$jscomp.Map = function (a) {
    a = void 0 === a ? [] : a;
    this.data_ = {};
    this.head_ = $jscomp.Map.createHead_();
    this.size = 0;
    if (a) {
        a = $jscomp.makeIterator(a);
        for (var b = a.next(); !b.done; b = a.next()) b = b.value, this.set(b[0], b[1])
    }
};
$jscomp.Map.checkBrowserConformance_ = function () {
    var a = $jscomp.global.Map;
    if (!a || !a.prototype.entries || !Object.seal) return !1;
    try {
        var b = Object.seal({
                x: 4
            }),
            c = new a($jscomp.makeIterator([
                [b, "s"]
            ]));
        if ("s" != c.get(b) || 1 != c.size || c.get({
                x: 4
            }) || c.set({
                x: 4
            }, "t") != c || 2 != c.size) return !1;
        var d = c.entries(),
            e = d.next();
        if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
        e = d.next();
        return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
    } catch (f) {
        return !1
    }
};
$jscomp.Map.createHead_ = function () {
    var a = {};
    return a.previous = a.next = a.head = a
};
$jscomp.Map.getId_ = function (a) {
    if (!(a instanceof Object)) return String(a);
    $jscomp.Map.key_ in a || a instanceof Object && Object.isExtensible && Object.isExtensible(a) && $jscomp.Map.defineProperty_(a, $jscomp.Map.key_, ++$jscomp.Map.index_);
    return $jscomp.Map.key_ in a ? a[$jscomp.Map.key_] : " " + a
};
$jscomp.Map.prototype.set = function (a, b) {
    var c = this.maybeGetEntry_(a),
        d = c.id,
        e = c.list,
        c = c.entry;
    e || (e = this.data_[d] = []);
    c ? c.value = b : (c = {
        next: this.head_,
        previous: this.head_.previous,
        head: this.head_,
        key: a,
        value: b
    }, e.push(c), this.head_.previous.next = c, this.head_.previous = c, this.size++);
    return this
};
$jscomp.Map.prototype["delete"] = function (a) {
    var b = this.maybeGetEntry_(a);
    a = b.id;
    var c = b.list,
        d = b.index;
    return (b = b.entry) && c ? (c.splice(d, 1), c.length || delete this.data_[a], b.previous.next = b.next, b.next.previous = b.previous, b.head = null, this.size--, !0) : !1
};
$jscomp.Map.prototype.clear = function () {
    this.data_ = {};
    this.head_ = this.head_.previous = $jscomp.Map.createHead_();
    this.size = 0
};
$jscomp.Map.prototype.has = function (a) {
    return !!this.maybeGetEntry_(a).entry
};
$jscomp.Map.prototype.get = function (a) {
    return (a = this.maybeGetEntry_(a).entry) && a.value
};
$jscomp.Map.prototype.maybeGetEntry_ = function (a) {
    var b = $jscomp.Map.getId_(a),
        c = this.data_[b];
    if (c)
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (a !== a && e.key !== e.key || a === e.key) return {
                id: b,
                list: c,
                index: d,
                entry: e
            }
        }
    return {
        id: b,
        list: c,
        index: -1,
        entry: void 0
    }
};
$jscomp.Map.prototype.entries = function () {
    return this.iter_(function (a) {
        return [a.key, a.value]
    })
};
$jscomp.Map.prototype.keys = function () {
    return this.iter_(function (a) {
        return a.key
    })
};
$jscomp.Map.prototype.values = function () {
    return this.iter_(function (a) {
        return a.value
    })
};
$jscomp.Map.prototype.forEach = function (a, b) {
    for (var c = $jscomp.makeIterator(this.entries()), d = c.next(); !d.done; d = c.next()) d = d.value, a.call(b, d[1], d[0], this)
};
$jscomp.Map.prototype.iter_ = function (a) {
    var b = this,
        c = this.head_;
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    var d = {};
    return d.next = function () {
        if (c) {
            for (; c.head != b.head_;) c = c.previous;
            for (; c.next != c.head;) return c = c.next, {
                done: !1,
                value: a(c)
            };
            c = null
        }
        return {
            done: !0,
            value: void 0
        }
    }, d[Symbol.iterator] = function () {
        return this
    }, d
};
$jscomp.Map.index_ = 0;
$jscomp.Map.defineProperty_ = Object.defineProperty ? function (a, b, c) {
    Object.defineProperty(a, b, {
        value: String(c)
    })
} : function (a, b, c) {
    a[b] = String(c)
};
$jscomp.Map.Entry_ = function () {};
$jscomp.Map.ASSUME_NO_NATIVE = !1;
$jscomp.Map$install = function () {
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    !$jscomp.Map.ASSUME_NO_NATIVE && $jscomp.Map.checkBrowserConformance_() ? $jscomp.Map = $jscomp.global.Map : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map.prototype[Symbol.iterator] = $jscomp.Map.prototype.entries, $jscomp.initSymbol(), $jscomp.Map.key_ = Symbol("map-id-key"));
    $jscomp.Map$install = function () {}
};
$jscomp.math = $jscomp.math || {};
$jscomp.math.clz32 = function (a) {
    a = Number(a) >>> 0;
    if (0 === a) return 32;
    var b = 0;
    0 === (a & 4294901760) && (a <<= 16, b += 16);
    0 === (a & 4278190080) && (a <<= 8, b += 8);
    0 === (a & 4026531840) && (a <<= 4, b += 4);
    0 === (a & 3221225472) && (a <<= 2, b += 2);
    0 === (a & 2147483648) && b++;
    return b
};
$jscomp.math.imul = function (a, b) {
    a = Number(a);
    b = Number(b);
    var c = a & 65535,
        d = b & 65535;
    return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0
};
$jscomp.math.sign = function (a) {
    a = Number(a);
    return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1
};
$jscomp.math.log10 = function (a) {
    return Math.log(a) / Math.LN10
};
$jscomp.math.log2 = function (a) {
    return Math.log(a) / Math.LN2
};
$jscomp.math.log1p = function (a) {
    a = Number(a);
    if (.25 > a && -.25 < a) {
        for (var b = a, c = 1, d = a, e = 0, f = 1; e != d;) b *= a, f *= -1, d = (e = d) + f * b / ++c;
        return d
    }
    return Math.log(1 + a)
};
$jscomp.math.expm1 = function (a) {
    a = Number(a);
    if (.25 > a && -.25 < a) {
        for (var b = a, c = 1, d = a, e = 0; e != d;) b *= a / ++c, d = (e = d) + b;
        return d
    }
    return Math.exp(a) - 1
};
$jscomp.math.cosh = function (a) {
    a = Number(a);
    return (Math.exp(a) + Math.exp(-a)) / 2
};
$jscomp.math.sinh = function (a) {
    a = Number(a);
    return 0 === a ? a : (Math.exp(a) - Math.exp(-a)) / 2
};
$jscomp.math.tanh = function (a) {
    a = Number(a);
    if (0 === a) return a;
    var b = Math.exp(2 * -Math.abs(a)),
        b = (1 - b) / (1 + b);
    return 0 > a ? -b : b
};
$jscomp.math.acosh = function (a) {
    a = Number(a);
    return Math.log(a + Math.sqrt(a * a - 1))
};
$jscomp.math.asinh = function (a) {
    a = Number(a);
    if (0 === a) return a;
    var b = Math.log(Math.abs(a) + Math.sqrt(a * a + 1));
    return 0 > a ? -b : b
};
$jscomp.math.atanh = function (a) {
    a = Number(a);
    return ($jscomp.math.log1p(a) - $jscomp.math.log1p(-a)) / 2
};
$jscomp.math.hypot = function (a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
    a = Number(a);
    b = Number(b);
    for (var f = Math.max(Math.abs(a), Math.abs(b)), g = $jscomp.makeIterator(d), e = g.next(); !e.done; e = g.next()) f = Math.max(f, Math.abs(e.value));
    if (1E100 < f || 1E-100 > f) {
        a /= f;
        b /= f;
        g = a * a + b * b;
        d = $jscomp.makeIterator(d);
        for (e = d.next(); !e.done; e = d.next()) e = e.value, e = Number(e) / f, g += e * e;
        return Math.sqrt(g) * f
    }
    f = a * a + b * b;
    d = $jscomp.makeIterator(d);
    for (e = d.next(); !e.done; e = d.next()) e = e.value, e = Number(e), f +=
        e * e;
    return Math.sqrt(f)
};
$jscomp.math.trunc = function (a) {
    a = Number(a);
    if (isNaN(a) || Infinity === a || -Infinity === a || 0 === a) return a;
    var b = Math.floor(Math.abs(a));
    return 0 > a ? -b : b
};
$jscomp.math.cbrt = function (a) {
    if (0 === a) return a;
    a = Number(a);
    var b = Math.pow(Math.abs(a), 1 / 3);
    return 0 > a ? -b : b
};
$jscomp.number = $jscomp.number || {};
$jscomp.number.isFinite = function (a) {
    return "number" !== typeof a ? !1 : !isNaN(a) && Infinity !== a && -Infinity !== a
};
$jscomp.number.isInteger = function (a) {
    return $jscomp.number.isFinite(a) ? a === Math.floor(a) : !1
};
$jscomp.number.isNaN = function (a) {
    return "number" === typeof a && isNaN(a)
};
$jscomp.number.isSafeInteger = function (a) {
    return $jscomp.number.isInteger(a) && Math.abs(a) <= $jscomp.number.MAX_SAFE_INTEGER
};
$jscomp.number.EPSILON = Math.pow(2, -52);
$jscomp.number.MAX_SAFE_INTEGER = 9007199254740991;
$jscomp.number.MIN_SAFE_INTEGER = -9007199254740991;
$jscomp.object = $jscomp.object || {};
$jscomp.object.assign = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    c = $jscomp.makeIterator(c);
    for (d = c.next(); !d.done; d = c.next())
        if (d = d.value)
            for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
    return a
};
$jscomp.object.is = function (a, b) {
    return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
};
$jscomp.Set = function (a) {
    a = void 0 === a ? [] : a;
    this.map_ = new $jscomp.Map;
    if (a) {
        a = $jscomp.makeIterator(a);
        for (var b = a.next(); !b.done; b = a.next()) this.add(b.value)
    }
    this.size = this.map_.size
};
$jscomp.Set.checkBrowserConformance_ = function () {
    var a = $jscomp.global.Set;
    if (!a || !a.prototype.entries || !Object.seal) return !1;
    var b = Object.seal({
            x: 4
        }),
        a = new a($jscomp.makeIterator([b]));
    if (a.has(b) || 1 != a.size || a.add(b) != a || 1 != a.size || a.add({
            x: 4
        }) != a || 2 != a.size) return !1;
    var a = a.entries(),
        c = a.next();
    if (c.done || c.value[0] != b || c.value[1] != b) return !1;
    c = a.next();
    return c.done || c.value[0] == b || 4 != c.value[0].x || c.value[1] != c.value[0] ? !1 : a.next().done
};
$jscomp.Set.prototype.add = function (a) {
    this.map_.set(a, a);
    this.size = this.map_.size;
    return this
};
$jscomp.Set.prototype["delete"] = function (a) {
    a = this.map_["delete"](a);
    this.size = this.map_.size;
    return a
};
$jscomp.Set.prototype.clear = function () {
    this.map_.clear();
    this.size = 0
};
$jscomp.Set.prototype.has = function (a) {
    return this.map_.has(a)
};
$jscomp.Set.prototype.entries = function () {
    return this.map_.entries()
};
$jscomp.Set.prototype.values = function () {
    return this.map_.values()
};
$jscomp.Set.prototype.forEach = function (a, b) {
    var c = this;
    this.map_.forEach(function (d) {
        return a.call(b, d, d, c)
    })
};
$jscomp.Set.ASSUME_NO_NATIVE = !1;
$jscomp.Set$install = function () {
    !$jscomp.Set.ASSUME_NO_NATIVE && $jscomp.Set.checkBrowserConformance_() ? $jscomp.Set = $jscomp.global.Set : ($jscomp.Map$install(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Set.prototype[Symbol.iterator] = $jscomp.Set.prototype.values);
    $jscomp.Set$install = function () {}
};
$jscomp.string = $jscomp.string || {};
$jscomp.string.noRegExp_ = function (a, b) {
    if (a instanceof RegExp) throw new TypeError("First argument to String.prototype." + b + " must not be a regular expression");
};
$jscomp.string.fromCodePoint = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    for (var c = "", b = $jscomp.makeIterator(b), d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        d = +d;
        if (0 > d || 1114111 < d || d !== Math.floor(d)) throw new RangeError("invalid_code_point " + d);
        65535 >= d ? c += String.fromCharCode(d) : (d -= 65536, c += String.fromCharCode(d >>> 10 & 1023 | 55296), c += String.fromCharCode(d & 1023 | 56320))
    }
    return c
};
$jscomp.string.repeat = function (a) {
    var b = this.toString();
    if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
    a |= 0;
    for (var c = ""; a;)
        if (a & 1 && (c += b), a >>>= 1) b += b;
    return c
};
$jscomp.string.repeat$install = function () {
    String.prototype.repeat || (String.prototype.repeat = $jscomp.string.repeat)
};
$jscomp.string.codePointAt = function (a) {
    var b = this.toString(),
        c = b.length;
    a = Number(a) || 0;
    if (0 <= a && a < c) {
        a |= 0;
        var d = b.charCodeAt(a);
        if (55296 > d || 56319 < d || a + 1 === c) return d;
        a = b.charCodeAt(a + 1);
        return 56320 > a || 57343 < a ? d : 1024 * (d - 55296) + a + 9216
    }
};
$jscomp.string.codePointAt$install = function () {
    String.prototype.codePointAt || (String.prototype.codePointAt = $jscomp.string.codePointAt)
};
$jscomp.string.includes = function (a, b) {
    b = void 0 === b ? 0 : b;
    $jscomp.string.noRegExp_(a, "includes");
    return -1 !== this.toString().indexOf(a, b)
};
$jscomp.string.includes$install = function () {
    String.prototype.includes || (String.prototype.includes = $jscomp.string.includes)
};
$jscomp.string.startsWith = function (a, b) {
    b = void 0 === b ? 0 : b;
    $jscomp.string.noRegExp_(a, "startsWith");
    var c = this.toString();
    a += "";
    for (var d = c.length, e = a.length, f = Math.max(0, Math.min(b | 0, c.length)), g = 0; g < e && f < d;)
        if (c[f++] != a[g++]) return !1;
    return g >= e
};
$jscomp.string.startsWith$install = function () {
    String.prototype.startsWith || (String.prototype.startsWith = $jscomp.string.startsWith)
};
$jscomp.string.endsWith = function (a, b) {
    $jscomp.string.noRegExp_(a, "endsWith");
    var c = this.toString();
    a += "";
    void 0 === b && (b = c.length);
    for (var d = Math.max(0, Math.min(b | 0, c.length)), e = a.length; 0 < e && 0 < d;)
        if (c[--d] != a[--e]) return !1;
    return 0 >= e
};
$jscomp.string.endsWith$install = function () {
    String.prototype.endsWith || (String.prototype.endsWith = $jscomp.string.endsWith)
};