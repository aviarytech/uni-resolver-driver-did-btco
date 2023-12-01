// @bun
// node_modules/elysia/dist/bun/index.js
var qX = Object.create;
var { defineProperty: W$, getPrototypeOf: NX, getOwnPropertyNames: X6 } = Object;
var Z6 = Object.prototype.hasOwnProperty;
var c = ($, Y, W) => {
  for (let X of X6(Y))
    if (!Z6.call($, X) && X !== "default")
      W$($, X, { get: () => Y[X], enumerable: true });
  if (W) {
    for (let X of X6(Y))
      if (!Z6.call(W, X) && X !== "default")
        W$(W, X, { get: () => Y[X], enumerable: true });
    return W;
  }
};
var v0 = ($, Y, W) => {
  W = $ != null ? qX(NX($)) : {};
  const X = Y || !$ || !$.__esModule ? W$(W, "default", { value: $, enumerable: true }) : W;
  for (let Z of X6($))
    if (!Z6.call(X, Z))
      W$(X, Z, { get: () => $[Z], enumerable: true });
  return X;
};
var z0 = ($, Y) => () => (Y || $((Y = { exports: {} }).exports, Y), Y.exports);
var k8 = ($, Y) => {
  for (var W in Y)
    W$($, W, { get: Y[W], enumerable: true, configurable: true, set: (X) => Y[W] = () => X });
};
var d8 = z0((_7, Q6) => {
  var X$ = function() {
  }, AX = function($, Y, W) {
    this.fn = $, this.context = Y, this.once = W || false;
  }, T8 = function($, Y, W, X, Z) {
    if (typeof W !== "function")
      throw new TypeError("The listener must be a function");
    var J = new AX(W, X || $, Z), Q = V0 ? V0 + Y : Y;
    if (!$._events[Q])
      $._events[Q] = J, $._eventsCount++;
    else if (!$._events[Q].fn)
      $._events[Q].push(J);
    else
      $._events[Q] = [$._events[Q], J];
    return $;
  }, b$ = function($, Y) {
    if (--$._eventsCount === 0)
      $._events = new X$;
    else
      delete $._events[Y];
  }, G0 = function() {
    this._events = new X$, this._eventsCount = 0;
  }, MX = Object.prototype.hasOwnProperty, V0 = "~";
  if (Object.create) {
    if (X$.prototype = Object.create(null), !new X$().__proto__)
      V0 = false;
  }
  G0.prototype.eventNames = function $() {
    var Y = [], W, X;
    if (this._eventsCount === 0)
      return Y;
    for (X in W = this._events)
      if (MX.call(W, X))
        Y.push(V0 ? X.slice(1) : X);
    if (Object.getOwnPropertySymbols)
      return Y.concat(Object.getOwnPropertySymbols(W));
    return Y;
  };
  G0.prototype.listeners = function $(Y) {
    var W = V0 ? V0 + Y : Y, X = this._events[W];
    if (!X)
      return [];
    if (X.fn)
      return [X.fn];
    for (var Z = 0, J = X.length, Q = new Array(J);Z < J; Z++)
      Q[Z] = X[Z].fn;
    return Q;
  };
  G0.prototype.listenerCount = function $(Y) {
    var W = V0 ? V0 + Y : Y, X = this._events[W];
    if (!X)
      return 0;
    if (X.fn)
      return 1;
    return X.length;
  };
  G0.prototype.emit = function $(Y, W, X, Z, J, Q) {
    var z = V0 ? V0 + Y : Y;
    if (!this._events[z])
      return false;
    var U = this._events[z], F = arguments.length, D, S;
    if (U.fn) {
      if (U.once)
        this.removeListener(Y, U.fn, undefined, true);
      switch (F) {
        case 1:
          return U.fn.call(U.context), true;
        case 2:
          return U.fn.call(U.context, W), true;
        case 3:
          return U.fn.call(U.context, W, X), true;
        case 4:
          return U.fn.call(U.context, W, X, Z), true;
        case 5:
          return U.fn.call(U.context, W, X, Z, J), true;
        case 6:
          return U.fn.call(U.context, W, X, Z, J, Q), true;
      }
      for (S = 1, D = new Array(F - 1);S < F; S++)
        D[S - 1] = arguments[S];
      U.fn.apply(U.context, D);
    } else {
      var b = U.length, j;
      for (S = 0;S < b; S++) {
        if (U[S].once)
          this.removeListener(Y, U[S].fn, undefined, true);
        switch (F) {
          case 1:
            U[S].fn.call(U[S].context);
            break;
          case 2:
            U[S].fn.call(U[S].context, W);
            break;
          case 3:
            U[S].fn.call(U[S].context, W, X);
            break;
          case 4:
            U[S].fn.call(U[S].context, W, X, Z);
            break;
          default:
            if (!D)
              for (j = 1, D = new Array(F - 1);j < F; j++)
                D[j - 1] = arguments[j];
            U[S].fn.apply(U[S].context, D);
        }
      }
    }
    return true;
  };
  G0.prototype.on = function $(Y, W, X) {
    return T8(this, Y, W, X, false);
  };
  G0.prototype.once = function $(Y, W, X) {
    return T8(this, Y, W, X, true);
  };
  G0.prototype.removeListener = function $(Y, W, X, Z) {
    var J = V0 ? V0 + Y : Y;
    if (!this._events[J])
      return this;
    if (!W)
      return b$(this, J), this;
    var Q = this._events[J];
    if (Q.fn) {
      if (Q.fn === W && (!Z || Q.once) && (!X || Q.context === X))
        b$(this, J);
    } else {
      for (var z = 0, U = [], F = Q.length;z < F; z++)
        if (Q[z].fn !== W || Z && !Q[z].once || X && Q[z].context !== X)
          U.push(Q[z]);
      if (U.length)
        this._events[J] = U.length === 1 ? U[0] : U;
      else
        b$(this, J);
    }
    return this;
  };
  G0.prototype.removeAllListeners = function $(Y) {
    var W;
    if (Y) {
      if (W = V0 ? V0 + Y : Y, this._events[W])
        b$(this, W);
    } else
      this._events = new X$, this._eventsCount = 0;
    return this;
  };
  G0.prototype.off = G0.prototype.removeListener;
  G0.prototype.addListener = G0.prototype.on;
  G0.prefixed = V0;
  G0.EventEmitter = G0;
  if (typeof Q6 !== "undefined")
    Q6.exports = G0;
});
var x0 = z0((l8) => {
  var UX = function($) {
    return G$($) && (Symbol.asyncIterator in $);
  }, BX = function($) {
    return G$($) && (Symbol.iterator in $);
  }, FX = function($) {
    return ArrayBuffer.isView($);
  }, DX = function($) {
    return $ instanceof Promise;
  }, wX = function($) {
    return $ instanceof Uint8Array;
  }, jX = function($) {
    return $ instanceof Date && Number.isFinite($.getTime());
  }, KX = function($, Y) {
    return Y in $;
  }, PX = function($) {
    return G$($) && o8($.constructor) && $.constructor.name === "Object";
  }, G$ = function($) {
    return $ !== null && typeof $ === "object";
  }, OX = function($) {
    return Array.isArray($) && !ArrayBuffer.isView($);
  }, i8 = function($) {
    return $ === undefined;
  }, m8 = function($) {
    return $ === null;
  }, u8 = function($) {
    return typeof $ === "boolean";
  }, z6 = function($) {
    return typeof $ === "number";
  }, SX = function($) {
    return z6($) && Number.isInteger($);
  }, h8 = function($) {
    return typeof $ === "bigint";
  }, n8 = function($) {
    return typeof $ === "string";
  }, o8 = function($) {
    return typeof $ === "function";
  }, c8 = function($) {
    return typeof $ === "symbol";
  }, LX = function($) {
    return h8($) || u8($) || m8($) || z6($) || n8($) || c8($) || i8($);
  };
  Object.defineProperty(l8, "__esModule", { value: true });
  l8.IsValueType = l8.IsSymbol = l8.IsFunction = l8.IsString = l8.IsBigInt = l8.IsInteger = l8.IsNumber = l8.IsBoolean = l8.IsNull = l8.IsUndefined = l8.IsArray = l8.IsObject = l8.IsPlainObject = l8.HasPropertyKey = l8.IsDate = l8.IsUint8Array = l8.IsPromise = l8.IsTypedArray = l8.IsIterator = l8.IsAsyncIterator = undefined;
  l8.IsAsyncIterator = UX;
  l8.IsIterator = BX;
  l8.IsTypedArray = FX;
  l8.IsPromise = DX;
  l8.IsUint8Array = wX;
  l8.IsDate = jX;
  l8.HasPropertyKey = KX;
  l8.IsPlainObject = PX;
  l8.IsObject = G$;
  l8.IsArray = OX;
  l8.IsUndefined = i8;
  l8.IsNull = m8;
  l8.IsBoolean = u8;
  l8.IsNumber = z6;
  l8.IsInteger = SX;
  l8.IsBigInt = h8;
  l8.IsString = n8;
  l8.IsFunction = o8;
  l8.IsSymbol = c8;
  l8.IsValueType = LX;
});
var g0 = z0((e8) => {
  Object.defineProperty(e8, "__esModule", { value: true });
  e8.Type = e8.JsonType = e8.JavaScriptTypeBuilder = e8.JsonTypeBuilder = e8.TypeBuilder = e8.TypeBuilderError = e8.TransformEncodeBuilder = e8.TransformDecodeBuilder = e8.TemplateLiteralDslParser = e8.TemplateLiteralGenerator = e8.TemplateLiteralGeneratorError = e8.TemplateLiteralFinite = e8.TemplateLiteralFiniteError = e8.TemplateLiteralParser = e8.TemplateLiteralParserError = e8.TemplateLiteralResolver = e8.TemplateLiteralPattern = e8.TemplateLiteralPatternError = e8.UnionResolver = e8.KeyArrayResolver = e8.KeyArrayResolverError = e8.KeyResolver = e8.ObjectMap = e8.Intrinsic = e8.IndexedAccessor = e8.TypeClone = e8.TypeExtends = e8.TypeExtendsResult = e8.TypeExtendsError = e8.ExtendsUndefined = e8.TypeGuard = e8.TypeGuardUnknownTypeError = e8.ValueGuard = e8.FormatRegistry = e8.TypeBoxError = e8.TypeRegistry = e8.PatternStringExact = e8.PatternNumberExact = e8.PatternBooleanExact = e8.PatternString = e8.PatternNumber = e8.PatternBoolean = e8.Kind = e8.Hint = e8.Optional = e8.Readonly = e8.Transform = undefined;
  e8.Transform = Symbol.for("TypeBox.Transform");
  e8.Readonly = Symbol.for("TypeBox.Readonly");
  e8.Optional = Symbol.for("TypeBox.Optional");
  e8.Hint = Symbol.for("TypeBox.Hint");
  e8.Kind = Symbol.for("TypeBox.Kind");
  e8.PatternBoolean = "(true|false)";
  e8.PatternNumber = "(0|[1-9][0-9]*)";
  e8.PatternString = "(.*)";
  e8.PatternBooleanExact = `^${e8.PatternBoolean}$`;
  e8.PatternNumberExact = `^${e8.PatternNumber}$`;
  e8.PatternStringExact = `^${e8.PatternString}$`;
  var H6;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(U) {
      return Y.delete(U);
    }
    $.Delete = Z;
    function J(U) {
      return Y.has(U);
    }
    $.Has = J;
    function Q(U, F) {
      Y.set(U, F);
    }
    $.Set = Q;
    function z(U) {
      return Y.get(U);
    }
    $.Get = z;
  })(H6 || (e8.TypeRegistry = H6 = {}));

  class W1 extends Error {
    constructor($) {
      super($);
    }
  }
  e8.TypeBoxError = W1;
  var s8;
  (function($) {
    const Y = new Map;
    function W() {
      return new Map(Y);
    }
    $.Entries = W;
    function X() {
      return Y.clear();
    }
    $.Clear = X;
    function Z(U) {
      return Y.delete(U);
    }
    $.Delete = Z;
    function J(U) {
      return Y.has(U);
    }
    $.Has = J;
    function Q(U, F) {
      Y.set(U, F);
    }
    $.Set = Q;
    function z(U) {
      return Y.get(U);
    }
    $.Get = z;
  })(s8 || (e8.FormatRegistry = s8 = {}));
  var V;
  (function($) {
    function Y(F) {
      return Array.isArray(F);
    }
    $.IsArray = Y;
    function W(F) {
      return typeof F === "bigint";
    }
    $.IsBigInt = W;
    function X(F) {
      return typeof F === "boolean";
    }
    $.IsBoolean = X;
    function Z(F) {
      return F === null;
    }
    $.IsNull = Z;
    function J(F) {
      return typeof F === "number";
    }
    $.IsNumber = J;
    function Q(F) {
      return typeof F === "object" && F !== null;
    }
    $.IsObject = Q;
    function z(F) {
      return typeof F === "string";
    }
    $.IsString = z;
    function U(F) {
      return F === undefined;
    }
    $.IsUndefined = U;
  })(V || (e8.ValueGuard = V = {}));

  class a8 extends W1 {
  }
  e8.TypeGuardUnknownTypeError = a8;
  var B;
  (function($) {
    function Y(N) {
      try {
        return new RegExp(N), true;
      } catch {
        return false;
      }
    }
    function W(N) {
      if (!V.IsString(N))
        return false;
      for (let t = 0;t < N.length; t++) {
        const L0 = N.charCodeAt(t);
        if (L0 >= 7 && L0 <= 13 || L0 === 27 || L0 === 127)
          return false;
      }
      return true;
    }
    function X(N) {
      return Q(N) || X0(N);
    }
    function Z(N) {
      return V.IsUndefined(N) || V.IsBigInt(N);
    }
    function J(N) {
      return V.IsUndefined(N) || V.IsNumber(N);
    }
    function Q(N) {
      return V.IsUndefined(N) || V.IsBoolean(N);
    }
    function z(N) {
      return V.IsUndefined(N) || V.IsString(N);
    }
    function U(N) {
      return V.IsUndefined(N) || V.IsString(N) && W(N) && Y(N);
    }
    function F(N) {
      return V.IsUndefined(N) || V.IsString(N) && W(N);
    }
    function D(N) {
      return V.IsUndefined(N) || X0(N);
    }
    function S(N) {
      return _(N, "Any") && z(N.$id);
    }
    $.TAny = S;
    function b(N) {
      return _(N, "Array") && N.type === "array" && z(N.$id) && X0(N.items) && J(N.minItems) && J(N.maxItems) && Q(N.uniqueItems) && D(N.contains) && J(N.minContains) && J(N.maxContains);
    }
    $.TArray = b;
    function j(N) {
      return _(N, "AsyncIterator") && N.type === "AsyncIterator" && z(N.$id) && X0(N.items);
    }
    $.TAsyncIterator = j;
    function M(N) {
      return _(N, "BigInt") && N.type === "bigint" && z(N.$id) && Z(N.exclusiveMaximum) && Z(N.exclusiveMinimum) && Z(N.maximum) && Z(N.minimum) && Z(N.multipleOf);
    }
    $.TBigInt = M;
    function P(N) {
      return _(N, "Boolean") && N.type === "boolean" && z(N.$id);
    }
    $.TBoolean = P;
    function O(N) {
      return _(N, "Constructor") && N.type === "Constructor" && z(N.$id) && V.IsArray(N.parameters) && N.parameters.every((t) => X0(t)) && X0(N.returns);
    }
    $.TConstructor = O;
    function A(N) {
      return _(N, "Date") && N.type === "Date" && z(N.$id) && J(N.exclusiveMaximumTimestamp) && J(N.exclusiveMinimumTimestamp) && J(N.maximumTimestamp) && J(N.minimumTimestamp) && J(N.multipleOfTimestamp);
    }
    $.TDate = A;
    function w(N) {
      return _(N, "Function") && N.type === "Function" && z(N.$id) && V.IsArray(N.parameters) && N.parameters.every((t) => X0(t)) && X0(N.returns);
    }
    $.TFunction = w;
    function I(N) {
      return _(N, "Integer") && N.type === "integer" && z(N.$id) && J(N.exclusiveMaximum) && J(N.exclusiveMinimum) && J(N.maximum) && J(N.minimum) && J(N.multipleOf);
    }
    $.TInteger = I;
    function G(N) {
      return _(N, "Intersect") && (V.IsString(N.type) && N.type !== "object" ? false : true) && V.IsArray(N.allOf) && N.allOf.every((t) => X0(t) && !P0(t)) && z(N.type) && (Q(N.unevaluatedProperties) || D(N.unevaluatedProperties)) && z(N.$id);
    }
    $.TIntersect = G;
    function k(N) {
      return _(N, "Iterator") && N.type === "Iterator" && z(N.$id) && X0(N.items);
    }
    $.TIterator = k;
    function _(N, t) {
      return J0(N) && N[e8.Kind] === t;
    }
    $.TKindOf = _;
    function J0(N) {
      return V.IsObject(N) && (e8.Kind in N) && V.IsString(N[e8.Kind]);
    }
    $.TKind = J0;
    function Y0(N) {
      return u0(N) && V.IsString(N.const);
    }
    $.TLiteralString = Y0;
    function A0(N) {
      return u0(N) && V.IsNumber(N.const);
    }
    $.TLiteralNumber = A0;
    function k1(N) {
      return u0(N) && V.IsBoolean(N.const);
    }
    $.TLiteralBoolean = k1;
    function u0(N) {
      return _(N, "Literal") && z(N.$id) && (V.IsBoolean(N.const) || V.IsNumber(N.const) || V.IsString(N.const));
    }
    $.TLiteral = u0;
    function h0(N) {
      return _(N, "Never") && V.IsObject(N.not) && Object.getOwnPropertyNames(N.not).length === 0;
    }
    $.TNever = h0;
    function N0(N) {
      return _(N, "Not") && X0(N.not);
    }
    $.TNot = N0;
    function H0(N) {
      return _(N, "Null") && N.type === "null" && z(N.$id);
    }
    $.TNull = H0;
    function n0(N) {
      return _(N, "Number") && N.type === "number" && z(N.$id) && J(N.exclusiveMaximum) && J(N.exclusiveMinimum) && J(N.maximum) && J(N.minimum) && J(N.multipleOf);
    }
    $.TNumber = n0;
    function $1(N) {
      return _(N, "Object") && N.type === "object" && z(N.$id) && V.IsObject(N.properties) && X(N.additionalProperties) && J(N.minProperties) && J(N.maxProperties) && Object.entries(N.properties).every(([t, L0]) => W(t) && X0(L0));
    }
    $.TObject = $1;
    function y0(N) {
      return _(N, "Promise") && N.type === "Promise" && z(N.$id) && X0(N.item);
    }
    $.TPromise = y0;
    function R(N) {
      return _(N, "Record") && N.type === "object" && z(N.$id) && X(N.additionalProperties) && V.IsObject(N.patternProperties) && ((t) => {
        const L0 = Object.getOwnPropertyNames(t.patternProperties);
        return L0.length === 1 && Y(L0[0]) && V.IsObject(t.patternProperties) && X0(t.patternProperties[L0[0]]);
      })(N);
    }
    $.TRecord = R;
    function f(N) {
      return V.IsObject(N) && (e8.Hint in N) && N[e8.Hint] === "Recursive";
    }
    $.TRecursive = f;
    function i(N) {
      return _(N, "Ref") && z(N.$id) && V.IsString(N.$ref);
    }
    $.TRef = i;
    function h(N) {
      return _(N, "String") && N.type === "string" && z(N.$id) && J(N.minLength) && J(N.maxLength) && U(N.pattern) && F(N.format);
    }
    $.TString = h;
    function q0(N) {
      return _(N, "Symbol") && N.type === "symbol" && z(N.$id);
    }
    $.TSymbol = q0;
    function j0(N) {
      return _(N, "TemplateLiteral") && N.type === "string" && V.IsString(N.pattern) && N.pattern[0] === "^" && N.pattern[N.pattern.length - 1] === "$";
    }
    $.TTemplateLiteral = j0;
    function K0(N) {
      return _(N, "This") && z(N.$id) && V.IsString(N.$ref);
    }
    $.TThis = K0;
    function P0(N) {
      return V.IsObject(N) && (e8.Transform in N);
    }
    $.TTransform = P0;
    function M0(N) {
      return _(N, "Tuple") && N.type === "array" && z(N.$id) && V.IsNumber(N.minItems) && V.IsNumber(N.maxItems) && N.minItems === N.maxItems && (V.IsUndefined(N.items) && V.IsUndefined(N.additionalItems) && N.minItems === 0 || V.IsArray(N.items) && N.items.every((t) => X0(t)));
    }
    $.TTuple = M0;
    function w1(N) {
      return _(N, "Undefined") && N.type === "undefined" && z(N.$id);
    }
    $.TUndefined = w1;
    function K(N) {
      return E(N) && N.anyOf.every((t) => Y0(t) || A0(t));
    }
    $.TUnionLiteral = K;
    function E(N) {
      return _(N, "Union") && z(N.$id) && V.IsObject(N) && V.IsArray(N.anyOf) && N.anyOf.every((t) => X0(t));
    }
    $.TUnion = E;
    function L(N) {
      return _(N, "Uint8Array") && N.type === "Uint8Array" && z(N.$id) && J(N.minByteLength) && J(N.maxByteLength);
    }
    $.TUint8Array = L;
    function p(N) {
      return _(N, "Unknown") && z(N.$id);
    }
    $.TUnknown = p;
    function T(N) {
      return _(N, "Unsafe");
    }
    $.TUnsafe = T;
    function d(N) {
      return _(N, "Void") && N.type === "void" && z(N.$id);
    }
    $.TVoid = d;
    function W0(N) {
      return V.IsObject(N) && N[e8.Readonly] === "Readonly";
    }
    $.TReadonly = W0;
    function S0(N) {
      return V.IsObject(N) && N[e8.Optional] === "Optional";
    }
    $.TOptional = S0;
    function X0(N) {
      return V.IsObject(N) && (S(N) || b(N) || P(N) || M(N) || j(N) || O(N) || A(N) || w(N) || I(N) || G(N) || k(N) || u0(N) || h0(N) || N0(N) || H0(N) || n0(N) || $1(N) || y0(N) || R(N) || i(N) || h(N) || q0(N) || j0(N) || K0(N) || M0(N) || w1(N) || E(N) || L(N) || p(N) || T(N) || d(N) || J0(N) && H6.Has(N[e8.Kind]));
    }
    $.TSchema = X0;
  })(B || (e8.TypeGuard = B = {}));
  var r8;
  (function($) {
    function Y(W) {
      return W[e8.Kind] === "Intersect" ? W.allOf.every((X) => Y(X)) : W[e8.Kind] === "Union" ? W.anyOf.some((X) => Y(X)) : W[e8.Kind] === "Undefined" ? true : W[e8.Kind] === "Not" ? !Y(W.not) : false;
    }
    $.Check = Y;
  })(r8 || (e8.ExtendsUndefined = r8 = {}));

  class A6 extends W1 {
  }
  e8.TypeExtendsError = A6;
  var C;
  (function($) {
    $[$.Union = 0] = "Union", $[$.True = 1] = "True", $[$.False = 2] = "False";
  })(C || (e8.TypeExtendsResult = C = {}));
  var b1;
  (function($) {
    function Y(H) {
      return H === C.False ? H : C.True;
    }
    function W(H) {
      throw new A6(H);
    }
    function X(H) {
      return B.TNever(H) || B.TIntersect(H) || B.TUnion(H) || B.TUnknown(H) || B.TAny(H);
    }
    function Z(H, q) {
      return B.TNever(q) ? _(H, q) : B.TIntersect(q) ? w(H, q) : B.TUnion(q) ? W6(H, q) : B.TUnknown(q) ? x8(H, q) : B.TAny(q) ? J(H, q) : W("StructuralRight");
    }
    function J(H, q) {
      return C.True;
    }
    function Q(H, q) {
      return B.TIntersect(q) ? w(H, q) : B.TUnion(q) && q.anyOf.some((e) => B.TAny(e) || B.TUnknown(e)) ? C.True : B.TUnion(q) ? C.Union : B.TUnknown(q) ? C.True : B.TAny(q) ? C.True : C.Union;
    }
    function z(H, q) {
      return B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : B.TNever(H) ? C.True : C.False;
    }
    function U(H, q) {
      return B.TObject(q) && j0(q) ? C.True : X(q) ? Z(H, q) : !B.TArray(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function F(H, q) {
      return X(q) ? Z(H, q) : !B.TAsyncIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function D(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TBigInt(q) ? C.True : C.False;
    }
    function S(H, q) {
      return B.TLiteral(H) && V.IsBoolean(H.const) ? C.True : B.TBoolean(H) ? C.True : C.False;
    }
    function b(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TBoolean(q) ? C.True : C.False;
    }
    function j(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : !B.TConstructor(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every((e, o0) => Y(Q0(q.parameters[o0], e)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function M(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TDate(q) ? C.True : C.False;
    }
    function P(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : !B.TFunction(q) ? C.False : H.parameters.length > q.parameters.length ? C.False : !H.parameters.every((e, o0) => Y(Q0(q.parameters[o0], e)) === C.True) ? C.False : Y(Q0(H.returns, q.returns));
    }
    function O(H, q) {
      return B.TLiteral(H) && V.IsNumber(H.const) ? C.True : B.TNumber(H) || B.TInteger(H) ? C.True : C.False;
    }
    function A(H, q) {
      return B.TInteger(q) || B.TNumber(q) ? C.True : X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : C.False;
    }
    function w(H, q) {
      return q.allOf.every((e) => Q0(H, e) === C.True) ? C.True : C.False;
    }
    function I(H, q) {
      return H.allOf.some((e) => Q0(e, q) === C.True) ? C.True : C.False;
    }
    function G(H, q) {
      return X(q) ? Z(H, q) : !B.TIterator(q) ? C.False : Y(Q0(H.items, q.items));
    }
    function k(H, q) {
      return B.TLiteral(q) && q.const === H.const ? C.True : X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TString(q) ? d(H, q) : B.TNumber(q) ? u0(H, q) : B.TInteger(q) ? O(H, q) : B.TBoolean(q) ? S(H, q) : C.False;
    }
    function _(H, q) {
      return C.False;
    }
    function J0(H, q) {
      return C.True;
    }
    function Y0(H) {
      let [q, e] = [H, 0];
      while (true) {
        if (!B.TNot(q))
          break;
        q = q.not, e += 1;
      }
      return e % 2 === 0 ? q : e8.Type.Unknown();
    }
    function A0(H, q) {
      return B.TNot(H) ? Q0(Y0(H), q) : B.TNot(q) ? Q0(H, Y0(q)) : W("Invalid fallthrough for Not");
    }
    function k1(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TNull(q) ? C.True : C.False;
    }
    function u0(H, q) {
      return B.TLiteralNumber(H) ? C.True : B.TNumber(H) || B.TInteger(H) ? C.True : C.False;
    }
    function h0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TInteger(q) || B.TNumber(q) ? C.True : C.False;
    }
    function N0(H, q) {
      return Object.getOwnPropertyNames(H.properties).length === q;
    }
    function H0(H) {
      return j0(H);
    }
    function n0(H) {
      return N0(H, 0) || N0(H, 1) && ("description" in H.properties) && B.TUnion(H.properties.description) && H.properties.description.anyOf.length === 2 && (B.TString(H.properties.description.anyOf[0]) && B.TUndefined(H.properties.description.anyOf[1]) || B.TString(H.properties.description.anyOf[1]) && B.TUndefined(H.properties.description.anyOf[0]));
    }
    function $1(H) {
      return N0(H, 0);
    }
    function y0(H) {
      return N0(H, 0);
    }
    function R(H) {
      return N0(H, 0);
    }
    function f(H) {
      return N0(H, 0);
    }
    function i(H) {
      return j0(H);
    }
    function h(H) {
      const q = e8.Type.Number();
      return N0(H, 0) || N0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function q0(H) {
      return N0(H, 0);
    }
    function j0(H) {
      const q = e8.Type.Number();
      return N0(H, 0) || N0(H, 1) && ("length" in H.properties) && Y(Q0(H.properties.length, q)) === C.True;
    }
    function K0(H) {
      const q = e8.Type.Function([e8.Type.Any()], e8.Type.Any());
      return N0(H, 0) || N0(H, 1) && ("then" in H.properties) && Y(Q0(H.properties.then, q)) === C.True;
    }
    function P0(H, q) {
      return Q0(H, q) === C.False ? C.False : B.TOptional(H) && !B.TOptional(q) ? C.False : C.True;
    }
    function M0(H, q) {
      return B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : B.TNever(H) || B.TLiteralString(H) && H0(q) || B.TLiteralNumber(H) && $1(q) || B.TLiteralBoolean(H) && y0(q) || B.TSymbol(H) && n0(q) || B.TBigInt(H) && R(q) || B.TString(H) && H0(q) || B.TSymbol(H) && n0(q) || B.TNumber(H) && $1(q) || B.TInteger(H) && $1(q) || B.TBoolean(H) && y0(q) || B.TUint8Array(H) && i(q) || B.TDate(H) && f(q) || B.TConstructor(H) && q0(q) || B.TFunction(H) && h(q) ? C.True : B.TRecord(H) && B.TString(E(H)) ? (() => {
        return q[e8.Hint] === "Record" ? C.True : C.False;
      })() : B.TRecord(H) && B.TNumber(E(H)) ? (() => {
        return N0(q, 0) ? C.True : C.False;
      })() : C.False;
    }
    function w1(H, q) {
      return X(q) ? Z(H, q) : B.TRecord(q) ? p(H, q) : !B.TObject(q) ? C.False : (() => {
        for (let e of Object.getOwnPropertyNames(q.properties)) {
          if (!(e in H.properties) && !B.TOptional(q.properties[e]))
            return C.False;
          if (B.TOptional(q.properties[e]))
            return C.True;
          if (P0(H.properties[e], q.properties[e]) === C.False)
            return C.False;
        }
        return C.True;
      })();
    }
    function K(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) && K0(q) ? C.True : !B.TPromise(q) ? C.False : Y(Q0(H.item, q.item));
    }
    function E(H) {
      return e8.PatternNumberExact in H.patternProperties ? e8.Type.Number() : (e8.PatternStringExact in H.patternProperties) ? e8.Type.String() : W("Unknown record key pattern");
    }
    function L(H) {
      return e8.PatternNumberExact in H.patternProperties ? H.patternProperties[e8.PatternNumberExact] : (e8.PatternStringExact in H.patternProperties) ? H.patternProperties[e8.PatternStringExact] : W("Unable to get record value schema");
    }
    function p(H, q) {
      const [e, o0] = [E(q), L(q)];
      return B.TLiteralString(H) && B.TNumber(e) && Y(Q0(H, o0)) === C.True ? C.True : B.TUint8Array(H) && B.TNumber(e) ? Q0(H, o0) : B.TString(H) && B.TNumber(e) ? Q0(H, o0) : B.TArray(H) && B.TNumber(e) ? Q0(H, o0) : B.TObject(H) ? (() => {
        for (let HX of Object.getOwnPropertyNames(H.properties))
          if (P0(o0, H.properties[HX]) === C.False)
            return C.False;
        return C.True;
      })() : C.False;
    }
    function T(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : !B.TRecord(q) ? C.False : Q0(L(H), L(q));
    }
    function d(H, q) {
      return B.TLiteral(H) && V.IsString(H.const) ? C.True : B.TString(H) ? C.True : C.False;
    }
    function W0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TString(q) ? C.True : C.False;
    }
    function S0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TSymbol(q) ? C.True : C.False;
    }
    function X0(H, q) {
      return B.TTemplateLiteral(H) ? Q0(H1.Resolve(H), q) : B.TTemplateLiteral(q) ? Q0(H, H1.Resolve(q)) : W("Invalid fallthrough for TemplateLiteral");
    }
    function N(H, q) {
      return B.TArray(q) && H.items !== undefined && H.items.every((e) => Q0(e, q.items) === C.True);
    }
    function t(H, q) {
      return B.TNever(H) ? C.True : B.TUnknown(H) ? C.False : B.TAny(H) ? C.Union : C.False;
    }
    function L0(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) && j0(q) ? C.True : B.TArray(q) && N(H, q) ? C.True : !B.TTuple(q) ? C.False : V.IsUndefined(H.items) && !V.IsUndefined(q.items) || !V.IsUndefined(H.items) && V.IsUndefined(q.items) ? C.False : V.IsUndefined(H.items) && !V.IsUndefined(q.items) ? C.True : H.items.every((e, o0) => Q0(e, q.items[o0]) === C.True) ? C.True : C.False;
    }
    function $6(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TUint8Array(q) ? C.True : C.False;
    }
    function Y6(H, q) {
      return X(q) ? Z(H, q) : B.TObject(q) ? M0(H, q) : B.TRecord(q) ? p(H, q) : B.TVoid(q) ? JX(H, q) : B.TUndefined(q) ? C.True : C.False;
    }
    function W6(H, q) {
      return q.anyOf.some((e) => Q0(H, e) === C.True) ? C.True : C.False;
    }
    function XX(H, q) {
      return H.anyOf.every((e) => Q0(e, q) === C.True) ? C.True : C.False;
    }
    function x8(H, q) {
      return C.True;
    }
    function ZX(H, q) {
      return B.TNever(q) ? _(H, q) : B.TIntersect(q) ? w(H, q) : B.TUnion(q) ? W6(H, q) : B.TAny(q) ? J(H, q) : B.TString(q) ? d(H, q) : B.TNumber(q) ? u0(H, q) : B.TInteger(q) ? O(H, q) : B.TBoolean(q) ? S(H, q) : B.TArray(q) ? z(H, q) : B.TTuple(q) ? t(H, q) : B.TObject(q) ? M0(H, q) : B.TUnknown(q) ? C.True : C.False;
    }
    function JX(H, q) {
      return B.TUndefined(H) ? C.True : B.TUndefined(H) ? C.True : C.False;
    }
    function QX(H, q) {
      return B.TIntersect(q) ? w(H, q) : B.TUnion(q) ? W6(H, q) : B.TUnknown(q) ? x8(H, q) : B.TAny(q) ? J(H, q) : B.TObject(q) ? M0(H, q) : B.TVoid(q) ? C.True : C.False;
    }
    function Q0(H, q) {
      return B.TTemplateLiteral(H) || B.TTemplateLiteral(q) ? X0(H, q) : B.TNot(H) || B.TNot(q) ? A0(H, q) : B.TAny(H) ? Q(H, q) : B.TArray(H) ? U(H, q) : B.TBigInt(H) ? D(H, q) : B.TBoolean(H) ? b(H, q) : B.TAsyncIterator(H) ? F(H, q) : B.TConstructor(H) ? j(H, q) : B.TDate(H) ? M(H, q) : B.TFunction(H) ? P(H, q) : B.TInteger(H) ? A(H, q) : B.TIntersect(H) ? I(H, q) : B.TIterator(H) ? G(H, q) : B.TLiteral(H) ? k(H, q) : B.TNever(H) ? J0(H, q) : B.TNull(H) ? k1(H, q) : B.TNumber(H) ? h0(H, q) : B.TObject(H) ? w1(H, q) : B.TRecord(H) ? T(H, q) : B.TString(H) ? W0(H, q) : B.TSymbol(H) ? S0(H, q) : B.TTuple(H) ? L0(H, q) : B.TPromise(H) ? K(H, q) : B.TUint8Array(H) ? $6(H, q) : B.TUndefined(H) ? Y6(H, q) : B.TUnion(H) ? XX(H, q) : B.TUnknown(H) ? ZX(H, q) : B.TVoid(H) ? QX(H, q) : W(`Unknown left type operand '${H[e8.Kind]}'`);
    }
    function zX(H, q) {
      return Q0(H, q);
    }
    $.Extends = zX;
  })(b1 || (e8.TypeExtends = b1 = {}));
  var m;
  (function($) {
    function Y(Q) {
      const z = Object.getOwnPropertyNames(Q).reduce((F, D) => ({ ...F, [D]: X(Q[D]) }), {}), U = Object.getOwnPropertySymbols(Q).reduce((F, D) => ({ ...F, [D]: X(Q[D]) }), {});
      return { ...z, ...U };
    }
    function W(Q) {
      return Q.map((z) => X(z));
    }
    function X(Q) {
      return V.IsArray(Q) ? W(Q) : V.IsObject(Q) ? Y(Q) : Q;
    }
    function Z(Q) {
      return Q.map((z) => J(z));
    }
    $.Rest = Z;
    function J(Q, z = {}) {
      return { ...X(Q), ...z };
    }
    $.Type = J;
  })(m || (e8.TypeClone = m = {}));
  var q6;
  (function($) {
    function Y(j) {
      return j.map((M) => {
        const { [e8.Optional]: P, ...O } = m.Type(M);
        return O;
      });
    }
    function W(j) {
      return j.every((M) => B.TOptional(M));
    }
    function X(j) {
      return j.some((M) => B.TOptional(M));
    }
    function Z(j) {
      return W(j.allOf) ? e8.Type.Optional(e8.Type.Intersect(Y(j.allOf))) : j;
    }
    function J(j) {
      return X(j.anyOf) ? e8.Type.Optional(e8.Type.Union(Y(j.anyOf))) : j;
    }
    function Q(j) {
      return j[e8.Kind] === "Intersect" ? Z(j) : j[e8.Kind] === "Union" ? J(j) : j;
    }
    function z(j, M) {
      const P = j.allOf.reduce((O, A) => {
        const w = S(A, M);
        return w[e8.Kind] === "Never" ? O : [...O, w];
      }, []);
      return Q(e8.Type.Intersect(P));
    }
    function U(j, M) {
      const P = j.anyOf.map((O) => S(O, M));
      return Q(e8.Type.Union(P));
    }
    function F(j, M) {
      const P = j.properties[M];
      return V.IsUndefined(P) ? e8.Type.Never() : e8.Type.Union([P]);
    }
    function D(j, M) {
      const P = j.items;
      if (V.IsUndefined(P))
        return e8.Type.Never();
      const O = P[M];
      if (V.IsUndefined(O))
        return e8.Type.Never();
      return O;
    }
    function S(j, M) {
      return j[e8.Kind] === "Intersect" ? z(j, M) : j[e8.Kind] === "Union" ? U(j, M) : j[e8.Kind] === "Object" ? F(j, M) : j[e8.Kind] === "Tuple" ? D(j, M) : e8.Type.Never();
    }
    function b(j, M, P = {}) {
      const O = M.map((A) => S(j, A.toString()));
      return Q(e8.Type.Union(O, P));
    }
    $.Resolve = b;
  })(q6 || (e8.IndexedAccessor = q6 = {}));
  var f1;
  (function($) {
    function Y(D) {
      const [S, b] = [D.slice(0, 1), D.slice(1)];
      return `${S.toLowerCase()}${b}`;
    }
    function W(D) {
      const [S, b] = [D.slice(0, 1), D.slice(1)];
      return `${S.toUpperCase()}${b}`;
    }
    function X(D) {
      return D.toUpperCase();
    }
    function Z(D) {
      return D.toLowerCase();
    }
    function J(D, S) {
      const b = v1.ParseExact(D.pattern);
      if (!p1.Check(b))
        return { ...D, pattern: Q(D.pattern, S) };
      const P = [...i1.Generate(b)].map((w) => e8.Type.Literal(w)), O = z(P, S), A = e8.Type.Union(O);
      return e8.Type.TemplateLiteral([A]);
    }
    function Q(D, S) {
      return typeof D === "string" ? S === "Uncapitalize" ? Y(D) : S === "Capitalize" ? W(D) : S === "Uppercase" ? X(D) : S === "Lowercase" ? Z(D) : D : D.toString();
    }
    function z(D, S) {
      if (D.length === 0)
        return [];
      const [b, ...j] = D;
      return [F(b, S), ...z(j, S)];
    }
    function U(D, S) {
      return B.TTemplateLiteral(D) ? J(D, S) : B.TUnion(D) ? e8.Type.Union(z(D.anyOf, S)) : B.TLiteral(D) ? e8.Type.Literal(Q(D.const, S)) : D;
    }
    function F(D, S) {
      return U(D, S);
    }
    $.Map = F;
  })(f1 || (e8.Intrinsic = f1 = {}));
  var T1;
  (function($) {
    function Y(Q, z) {
      return e8.Type.Intersect(Q.allOf.map((U) => Z(U, z)), { ...Q });
    }
    function W(Q, z) {
      return e8.Type.Union(Q.anyOf.map((U) => Z(U, z)), { ...Q });
    }
    function X(Q, z) {
      return z(Q);
    }
    function Z(Q, z) {
      return Q[e8.Kind] === "Intersect" ? Y(Q, z) : Q[e8.Kind] === "Union" ? W(Q, z) : Q[e8.Kind] === "Object" ? X(Q, z) : Q;
    }
    function J(Q, z, U) {
      return { ...Z(m.Type(Q), z), ...U };
    }
    $.Map = J;
  })(T1 || (e8.ObjectMap = T1 = {}));
  var _$;
  (function($) {
    function Y(F) {
      return F[0] === "^" && F[F.length - 1] === "$" ? F.slice(1, F.length - 1) : F;
    }
    function W(F, D) {
      return F.allOf.reduce((S, b) => [...S, ...Q(b, D)], []);
    }
    function X(F, D) {
      const S = F.anyOf.map((b) => Q(b, D));
      return [...S.reduce((b, j) => j.map((M) => S.every((P) => P.includes(M)) ? b.add(M) : b)[0], new Set)];
    }
    function Z(F, D) {
      return Object.getOwnPropertyNames(F.properties);
    }
    function J(F, D) {
      return D.includePatterns ? Object.getOwnPropertyNames(F.patternProperties) : [];
    }
    function Q(F, D) {
      return B.TIntersect(F) ? W(F, D) : B.TUnion(F) ? X(F, D) : B.TObject(F) ? Z(F, D) : B.TRecord(F) ? J(F, D) : [];
    }
    function z(F, D) {
      return [...new Set(Q(F, D))];
    }
    $.ResolveKeys = z;
    function U(F) {
      return `^(${z(F, { includePatterns: true }).map((b) => `(${Y(b)})`).join("|")})$`;
    }
    $.ResolvePattern = U;
  })(_$ || (e8.KeyResolver = _$ = {}));

  class U6 extends W1 {
  }
  e8.KeyArrayResolverError = U6;
  var Z$;
  (function($) {
    function Y(W) {
      return Array.isArray(W) ? W : B.TUnionLiteral(W) ? W.anyOf.map((X) => X.const.toString()) : B.TLiteral(W) ? [W.const] : B.TTemplateLiteral(W) ? (() => {
        const X = v1.ParseExact(W.pattern);
        if (!p1.Check(X))
          throw new U6("Cannot resolve keys from infinite template expression");
        return [...i1.Generate(X)];
      })() : [];
    }
    $.Resolve = Y;
  })(Z$ || (e8.KeyArrayResolver = Z$ = {}));
  var N6;
  (function($) {
    function* Y(X) {
      for (let Z of X.anyOf)
        if (Z[e8.Kind] === "Union")
          yield* Y(Z);
        else
          yield Z;
    }
    function W(X) {
      return e8.Type.Union([...Y(X)], { ...X });
    }
    $.Resolve = W;
  })(N6 || (e8.UnionResolver = N6 = {}));

  class B6 extends W1 {
  }
  e8.TemplateLiteralPatternError = B6;
  var E$;
  (function($) {
    function Y(J) {
      throw new B6(J);
    }
    function W(J) {
      return J.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function X(J, Q) {
      return B.TTemplateLiteral(J) ? J.pattern.slice(1, J.pattern.length - 1) : B.TUnion(J) ? `(${J.anyOf.map((z) => X(z, Q)).join("|")})` : B.TNumber(J) ? `${Q}${e8.PatternNumber}` : B.TInteger(J) ? `${Q}${e8.PatternNumber}` : B.TBigInt(J) ? `${Q}${e8.PatternNumber}` : B.TString(J) ? `${Q}${e8.PatternString}` : B.TLiteral(J) ? `${Q}${W(J.const.toString())}` : B.TBoolean(J) ? `${Q}${e8.PatternBoolean}` : Y(`Unexpected Kind '${J[e8.Kind]}'`);
    }
    function Z(J) {
      return `^${J.map((Q) => X(Q, "")).join("")}\$`;
    }
    $.Create = Z;
  })(E$ || (e8.TemplateLiteralPattern = E$ = {}));
  var H1;
  (function($) {
    function Y(W) {
      const X = v1.ParseExact(W.pattern);
      if (!p1.Check(X))
        return e8.Type.String();
      const Z = [...i1.Generate(X)].map((J) => e8.Type.Literal(J));
      return e8.Type.Union(Z);
    }
    $.Resolve = Y;
  })(H1 || (e8.TemplateLiteralResolver = H1 = {}));

  class V$ extends W1 {
  }
  e8.TemplateLiteralParserError = V$;
  var v1;
  (function($) {
    function Y(j, M, P) {
      return j[M] === P && j.charCodeAt(M - 1) !== 92;
    }
    function W(j, M) {
      return Y(j, M, "(");
    }
    function X(j, M) {
      return Y(j, M, ")");
    }
    function Z(j, M) {
      return Y(j, M, "|");
    }
    function J(j) {
      if (!(W(j, 0) && X(j, j.length - 1)))
        return false;
      let M = 0;
      for (let P = 0;P < j.length; P++) {
        if (W(j, P))
          M += 1;
        if (X(j, P))
          M -= 1;
        if (M === 0 && P !== j.length - 1)
          return false;
      }
      return true;
    }
    function Q(j) {
      return j.slice(1, j.length - 1);
    }
    function z(j) {
      let M = 0;
      for (let P = 0;P < j.length; P++) {
        if (W(j, P))
          M += 1;
        if (X(j, P))
          M -= 1;
        if (Z(j, P) && M === 0)
          return true;
      }
      return false;
    }
    function U(j) {
      for (let M = 0;M < j.length; M++)
        if (W(j, M))
          return true;
      return false;
    }
    function F(j) {
      let [M, P] = [0, 0];
      const O = [];
      for (let w = 0;w < j.length; w++) {
        if (W(j, w))
          M += 1;
        if (X(j, w))
          M -= 1;
        if (Z(j, w) && M === 0) {
          const I = j.slice(P, w);
          if (I.length > 0)
            O.push(S(I));
          P = w + 1;
        }
      }
      const A = j.slice(P);
      if (A.length > 0)
        O.push(S(A));
      if (O.length === 0)
        return { type: "const", const: "" };
      if (O.length === 1)
        return O[0];
      return { type: "or", expr: O };
    }
    function D(j) {
      function M(A, w) {
        if (!W(A, w))
          throw new V$("TemplateLiteralParser: Index must point to open parens");
        let I = 0;
        for (let G = w;G < A.length; G++) {
          if (W(A, G))
            I += 1;
          if (X(A, G))
            I -= 1;
          if (I === 0)
            return [w, G];
        }
        throw new V$("TemplateLiteralParser: Unclosed group parens in expression");
      }
      function P(A, w) {
        for (let I = w;I < A.length; I++)
          if (W(A, I))
            return [w, I];
        return [w, A.length];
      }
      const O = [];
      for (let A = 0;A < j.length; A++)
        if (W(j, A)) {
          const [w, I] = M(j, A), G = j.slice(w, I + 1);
          O.push(S(G)), A = I;
        } else {
          const [w, I] = P(j, A), G = j.slice(w, I);
          if (G.length > 0)
            O.push(S(G));
          A = I - 1;
        }
      return O.length === 0 ? { type: "const", const: "" } : O.length === 1 ? O[0] : { type: "and", expr: O };
    }
    function S(j) {
      return J(j) ? S(Q(j)) : z(j) ? F(j) : U(j) ? D(j) : { type: "const", const: j };
    }
    $.Parse = S;
    function b(j) {
      return S(j.slice(1, j.length - 1));
    }
    $.ParseExact = b;
  })(v1 || (e8.TemplateLiteralParser = v1 = {}));

  class F6 extends W1 {
  }
  e8.TemplateLiteralFiniteError = F6;
  var p1;
  (function($) {
    function Y(Q) {
      throw new F6(Q);
    }
    function W(Q) {
      return Q.type === "or" && Q.expr.length === 2 && Q.expr[0].type === "const" && Q.expr[0].const === "0" && Q.expr[1].type === "const" && Q.expr[1].const === "[1-9][0-9]*";
    }
    function X(Q) {
      return Q.type === "or" && Q.expr.length === 2 && Q.expr[0].type === "const" && Q.expr[0].const === "true" && Q.expr[1].type === "const" && Q.expr[1].const === "false";
    }
    function Z(Q) {
      return Q.type === "const" && Q.const === ".*";
    }
    function J(Q) {
      return X(Q) ? true : W(Q) || Z(Q) ? false : Q.type === "and" ? Q.expr.every((z) => J(z)) : Q.type === "or" ? Q.expr.every((z) => J(z)) : Q.type === "const" ? true : Y("Unknown expression type");
    }
    $.Check = J;
  })(p1 || (e8.TemplateLiteralFinite = p1 = {}));

  class D6 extends W1 {
  }
  e8.TemplateLiteralGeneratorError = D6;
  var i1;
  (function($) {
    function* Y(Q) {
      if (Q.length === 1)
        return yield* Q[0];
      for (let z of Q[0])
        for (let U of Y(Q.slice(1)))
          yield `${z}${U}`;
    }
    function* W(Q) {
      return yield* Y(Q.expr.map((z) => [...J(z)]));
    }
    function* X(Q) {
      for (let z of Q.expr)
        yield* J(z);
    }
    function* Z(Q) {
      return yield Q.const;
    }
    function* J(Q) {
      return Q.type === "and" ? yield* W(Q) : Q.type === "or" ? yield* X(Q) : Q.type === "const" ? yield* Z(Q) : (() => {
        throw new D6("Unknown expression");
      })();
    }
    $.Generate = J;
  })(i1 || (e8.TemplateLiteralGenerator = i1 = {}));
  var M6;
  (function($) {
    function* Y(J) {
      const Q = J.trim().replace(/"|'/g, "");
      return Q === "boolean" ? yield e8.Type.Boolean() : Q === "number" ? yield e8.Type.Number() : Q === "bigint" ? yield e8.Type.BigInt() : Q === "string" ? yield e8.Type.String() : yield (() => {
        const z = Q.split("|").map((U) => e8.Type.Literal(U.trim()));
        return z.length === 0 ? e8.Type.Never() : z.length === 1 ? z[0] : e8.Type.Union(z);
      })();
    }
    function* W(J) {
      if (J[1] !== "{") {
        const Q = e8.Type.Literal("$"), z = X(J.slice(1));
        return yield* [Q, ...z];
      }
      for (let Q = 2;Q < J.length; Q++)
        if (J[Q] === "}") {
          const z = Y(J.slice(2, Q)), U = X(J.slice(Q + 1));
          return yield* [...z, ...U];
        }
      yield e8.Type.Literal(J);
    }
    function* X(J) {
      for (let Q = 0;Q < J.length; Q++)
        if (J[Q] === "$") {
          const z = e8.Type.Literal(J.slice(0, Q)), U = W(J.slice(Q));
          return yield* [z, ...U];
        }
      yield e8.Type.Literal(J);
    }
    function Z(J) {
      return [...X(J)];
    }
    $.Parse = Z;
  })(M6 || (e8.TemplateLiteralDslParser = M6 = {}));

  class w6 {
    constructor($) {
      this.schema = $;
    }
    Decode($) {
      return new j6(this.schema, $);
    }
  }
  e8.TransformDecodeBuilder = w6;

  class j6 {
    constructor($, Y) {
      this.schema = $, this.decode = Y;
    }
    Encode($) {
      const Y = m.Type(this.schema);
      return B.TTransform(Y) ? (() => {
        const Z = { Encode: (J) => Y[e8.Transform].Encode($(J)), Decode: (J) => this.decode(Y[e8.Transform].Decode(J)) };
        return { ...Y, [e8.Transform]: Z };
      })() : (() => {
        const W = { Decode: this.decode, Encode: $ };
        return { ...Y, [e8.Transform]: W };
      })();
    }
  }
  e8.TransformEncodeBuilder = j6;
  var uX = 0;

  class K6 extends W1 {
  }
  e8.TypeBuilderError = K6;

  class P6 {
    Create($) {
      return $;
    }
    Throw($) {
      throw new K6($);
    }
    Discard($, Y) {
      return Y.reduce((W, X) => {
        const { [X]: Z, ...J } = W;
        return J;
      }, $);
    }
    Strict($) {
      return JSON.parse(JSON.stringify($));
    }
  }
  e8.TypeBuilder = P6;

  class x$ extends P6 {
    ReadonlyOptional($) {
      return this.Readonly(this.Optional($));
    }
    Readonly($) {
      return { ...m.Type($), [e8.Readonly]: "Readonly" };
    }
    Optional($) {
      return { ...m.Type($), [e8.Optional]: "Optional" };
    }
    Any($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Any" });
    }
    Array($, Y = {}) {
      return this.Create({ ...Y, [e8.Kind]: "Array", type: "array", items: m.Type($) });
    }
    Boolean($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Boolean", type: "boolean" });
    }
    Capitalize($, Y = {}) {
      return { ...f1.Map(m.Type($), "Capitalize"), ...Y };
    }
    Composite($, Y) {
      const W = e8.Type.Intersect($, {}), Z = _$.ResolveKeys(W, { includePatterns: false }).reduce((J, Q) => ({ ...J, [Q]: e8.Type.Index(W, [Q]) }), {});
      return e8.Type.Object(Z, Y);
    }
    Enum($, Y = {}) {
      if (V.IsUndefined($))
        return this.Throw("Enum undefined or empty");
      const W = Object.getOwnPropertyNames($).filter((J) => isNaN(J)).map((J) => $[J]), Z = [...new Set(W)].map((J) => e8.Type.Literal(J));
      return this.Union(Z, { ...Y, [e8.Hint]: "Enum" });
    }
    Extends($, Y, W, X, Z = {}) {
      switch (b1.Extends($, Y)) {
        case C.Union:
          return this.Union([m.Type(W, Z), m.Type(X, Z)]);
        case C.True:
          return m.Type(W, Z);
        case C.False:
          return m.Type(X, Z);
      }
    }
    Exclude($, Y, W = {}) {
      return B.TTemplateLiteral($) ? this.Exclude(H1.Resolve($), Y, W) : B.TTemplateLiteral(Y) ? this.Exclude($, H1.Resolve(Y), W) : B.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => b1.Extends(Z, Y) === C.False);
        return X.length === 1 ? m.Type(X[0], W) : this.Union(X, W);
      })() : b1.Extends($, Y) !== C.False ? this.Never(W) : m.Type($, W);
    }
    Extract($, Y, W = {}) {
      return B.TTemplateLiteral($) ? this.Extract(H1.Resolve($), Y, W) : B.TTemplateLiteral(Y) ? this.Extract($, H1.Resolve(Y), W) : B.TUnion($) ? (() => {
        const X = $.anyOf.filter((Z) => b1.Extends(Z, Y) !== C.False);
        return X.length === 1 ? m.Type(X[0], W) : this.Union(X, W);
      })() : b1.Extends($, Y) !== C.False ? m.Type($, W) : this.Never(W);
    }
    Index($, Y, W = {}) {
      return B.TArray($) && B.TNumber(Y) ? (() => {
        return m.Type($.items, W);
      })() : B.TTuple($) && B.TNumber(Y) ? (() => {
        const Z = (V.IsUndefined($.items) ? [] : $.items).map((J) => m.Type(J));
        return this.Union(Z, W);
      })() : (() => {
        const X = Z$.Resolve(Y), Z = m.Type($);
        return q6.Resolve(Z, X, W);
      })();
    }
    Integer($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Integer", type: "integer" });
    }
    Intersect($, Y = {}) {
      if ($.length === 0)
        return e8.Type.Never();
      if ($.length === 1)
        return m.Type($[0], Y);
      if ($.some((J) => B.TTransform(J)))
        this.Throw("Cannot intersect transform types");
      const W = $.every((J) => B.TObject(J)), X = m.Rest($), Z = B.TSchema(Y.unevaluatedProperties) ? { unevaluatedProperties: m.Type(Y.unevaluatedProperties) } : {};
      return Y.unevaluatedProperties === false || B.TSchema(Y.unevaluatedProperties) || W ? this.Create({ ...Y, ...Z, [e8.Kind]: "Intersect", type: "object", allOf: X }) : this.Create({ ...Y, ...Z, [e8.Kind]: "Intersect", allOf: X });
    }
    KeyOf($, Y = {}) {
      return B.TRecord($) ? (() => {
        const W = Object.getOwnPropertyNames($.patternProperties)[0];
        return W === e8.PatternNumberExact ? this.Number(Y) : W === e8.PatternStringExact ? this.String(Y) : this.Throw("Unable to resolve key type from Record key pattern");
      })() : B.TTuple($) ? (() => {
        const X = (V.IsUndefined($.items) ? [] : $.items).map((Z, J) => e8.Type.Literal(J.toString()));
        return this.Union(X, Y);
      })() : B.TArray($) ? (() => {
        return this.Number(Y);
      })() : (() => {
        const W = _$.ResolveKeys($, { includePatterns: false });
        if (W.length === 0)
          return this.Never(Y);
        const X = W.map((Z) => this.Literal(Z));
        return this.Union(X, Y);
      })();
    }
    Literal($, Y = {}) {
      return this.Create({ ...Y, [e8.Kind]: "Literal", const: $, type: typeof $ });
    }
    Lowercase($, Y = {}) {
      return { ...f1.Map(m.Type($), "Lowercase"), ...Y };
    }
    Never($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Never", not: {} });
    }
    Not($, Y) {
      return this.Create({ ...Y, [e8.Kind]: "Not", not: m.Type($) });
    }
    Null($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Null", type: "null" });
    }
    Number($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Number", type: "number" });
    }
    Object($, Y = {}) {
      const W = Object.getOwnPropertyNames($), X = W.filter((z) => B.TOptional($[z])), Z = W.filter((z) => !X.includes(z)), J = B.TSchema(Y.additionalProperties) ? { additionalProperties: m.Type(Y.additionalProperties) } : {}, Q = W.reduce((z, U) => ({ ...z, [U]: m.Type($[U]) }), {});
      return Z.length > 0 ? this.Create({ ...Y, ...J, [e8.Kind]: "Object", type: "object", properties: Q, required: Z }) : this.Create({ ...Y, ...J, [e8.Kind]: "Object", type: "object", properties: Q });
    }
    Omit($, Y, W = {}) {
      const X = Z$.Resolve(Y);
      return T1.Map(this.Discard(m.Type($), ["$id", e8.Transform]), (Z) => {
        if (V.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((J) => !X.includes(J)), Z.required.length === 0)
            delete Z.required;
        }
        for (let J of Object.getOwnPropertyNames(Z.properties))
          if (X.includes(J))
            delete Z.properties[J];
        return this.Create(Z);
      }, W);
    }
    Partial($, Y = {}) {
      return T1.Map(this.Discard(m.Type($), ["$id", e8.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, J) => {
          return { ...Z, [J]: this.Optional(W.properties[J]) };
        }, {});
        return this.Object(X, this.Discard(W, ["required"]));
      }, Y);
    }
    Pick($, Y, W = {}) {
      const X = Z$.Resolve(Y);
      return T1.Map(this.Discard(m.Type($), ["$id", e8.Transform]), (Z) => {
        if (V.IsArray(Z.required)) {
          if (Z.required = Z.required.filter((J) => X.includes(J)), Z.required.length === 0)
            delete Z.required;
        }
        for (let J of Object.getOwnPropertyNames(Z.properties))
          if (!X.includes(J))
            delete Z.properties[J];
        return this.Create(Z);
      }, W);
    }
    Record($, Y, W = {}) {
      return B.TTemplateLiteral($) ? (() => {
        const X = v1.ParseExact($.pattern);
        return p1.Check(X) ? this.Object([...i1.Generate(X)].reduce((Z, J) => ({ ...Z, [J]: m.Type(Y) }), {}), W) : this.Create({ ...W, [e8.Kind]: "Record", type: "object", patternProperties: { [$.pattern]: m.Type(Y) } });
      })() : B.TUnion($) ? (() => {
        const X = N6.Resolve($);
        if (B.TUnionLiteral(X)) {
          const Z = X.anyOf.reduce((J, Q) => ({ ...J, [Q.const]: m.Type(Y) }), {});
          return this.Object(Z, { ...W, [e8.Hint]: "Record" });
        } else
          this.Throw("Record key of type union contains non-literal types");
      })() : B.TLiteral($) ? (() => {
        return V.IsString($.const) || V.IsNumber($.const) ? this.Object({ [$.const]: m.Type(Y) }, W) : this.Throw("Record key of type literal is not of type string or number");
      })() : B.TInteger($) || B.TNumber($) ? (() => {
        return this.Create({ ...W, [e8.Kind]: "Record", type: "object", patternProperties: { [e8.PatternNumberExact]: m.Type(Y) } });
      })() : B.TString($) ? (() => {
        const X = V.IsUndefined($.pattern) ? e8.PatternStringExact : $.pattern;
        return this.Create({ ...W, [e8.Kind]: "Record", type: "object", patternProperties: { [X]: m.Type(Y) } });
      })() : this.Never();
    }
    Recursive($, Y = {}) {
      if (V.IsUndefined(Y.$id))
        Y.$id = `T${uX++}`;
      const W = $({ [e8.Kind]: "This", $ref: `${Y.$id}` });
      return W.$id = Y.$id, this.Create({ ...Y, [e8.Hint]: "Recursive", ...W });
    }
    Ref($, Y = {}) {
      if (V.IsString($))
        return this.Create({ ...Y, [e8.Kind]: "Ref", $ref: $ });
      if (V.IsUndefined($.$id))
        this.Throw("Reference target type must specify an $id");
      return this.Create({ ...Y, [e8.Kind]: "Ref", $ref: $.$id });
    }
    Required($, Y = {}) {
      return T1.Map(this.Discard(m.Type($), ["$id", e8.Transform]), (W) => {
        const X = Object.getOwnPropertyNames(W.properties).reduce((Z, J) => {
          return { ...Z, [J]: this.Discard(W.properties[J], [e8.Optional]) };
        }, {});
        return this.Object(X, W);
      }, Y);
    }
    Rest($) {
      return B.TTuple($) && !V.IsUndefined($.items) ? m.Rest($.items) : B.TIntersect($) ? m.Rest($.allOf) : B.TUnion($) ? m.Rest($.anyOf) : [];
    }
    String($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "String", type: "string" });
    }
    TemplateLiteral($, Y = {}) {
      const W = V.IsString($) ? E$.Create(M6.Parse($)) : E$.Create($);
      return this.Create({ ...Y, [e8.Kind]: "TemplateLiteral", type: "string", pattern: W });
    }
    Transform($) {
      return new w6($);
    }
    Tuple($, Y = {}) {
      const [W, X, Z] = [false, $.length, $.length], J = m.Rest($), Q = $.length > 0 ? { ...Y, [e8.Kind]: "Tuple", type: "array", items: J, additionalItems: W, minItems: X, maxItems: Z } : { ...Y, [e8.Kind]: "Tuple", type: "array", minItems: X, maxItems: Z };
      return this.Create(Q);
    }
    Uncapitalize($, Y = {}) {
      return { ...f1.Map(m.Type($), "Uncapitalize"), ...Y };
    }
    Union($, Y = {}) {
      return B.TTemplateLiteral($) ? H1.Resolve($) : (() => {
        const W = $;
        if (W.length === 0)
          return this.Never(Y);
        if (W.length === 1)
          return this.Create(m.Type(W[0], Y));
        const X = m.Rest(W);
        return this.Create({ ...Y, [e8.Kind]: "Union", anyOf: X });
      })();
    }
    Unknown($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Unknown" });
    }
    Unsafe($ = {}) {
      return this.Create({ ...$, [e8.Kind]: $[e8.Kind] || "Unsafe" });
    }
    Uppercase($, Y = {}) {
      return { ...f1.Map(m.Type($), "Uppercase"), ...Y };
    }
  }
  e8.JsonTypeBuilder = x$;

  class O6 extends x$ {
    AsyncIterator($, Y = {}) {
      return this.Create({ ...Y, [e8.Kind]: "AsyncIterator", type: "AsyncIterator", items: m.Type($) });
    }
    Awaited($, Y = {}) {
      const W = (X) => X.length > 0 ? (() => {
        const [Z, ...J] = X;
        return [this.Awaited(Z), ...W(J)];
      })() : X;
      return B.TIntersect($) ? e8.Type.Intersect(W($.allOf)) : B.TUnion($) ? e8.Type.Union(W($.anyOf)) : B.TPromise($) ? this.Awaited($.item) : m.Type($, Y);
    }
    BigInt($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "BigInt", type: "bigint" });
    }
    ConstructorParameters($, Y = {}) {
      return this.Tuple([...$.parameters], { ...Y });
    }
    Constructor($, Y, W) {
      const [X, Z] = [m.Rest($), m.Type(Y)];
      return this.Create({ ...W, [e8.Kind]: "Constructor", type: "Constructor", parameters: X, returns: Z });
    }
    Date($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Date", type: "Date" });
    }
    Function($, Y, W) {
      const [X, Z] = [m.Rest($), m.Type(Y)];
      return this.Create({ ...W, [e8.Kind]: "Function", type: "Function", parameters: X, returns: Z });
    }
    InstanceType($, Y = {}) {
      return m.Type($.returns, Y);
    }
    Iterator($, Y = {}) {
      return this.Create({ ...Y, [e8.Kind]: "Iterator", type: "Iterator", items: m.Type($) });
    }
    Parameters($, Y = {}) {
      return this.Tuple($.parameters, { ...Y });
    }
    Promise($, Y = {}) {
      return this.Create({ ...Y, [e8.Kind]: "Promise", type: "Promise", item: m.Type($) });
    }
    RegExp($, Y = {}) {
      const W = V.IsString($) ? $ : $.source;
      return this.Create({ ...Y, [e8.Kind]: "String", type: "string", pattern: W });
    }
    RegEx($, Y = {}) {
      return this.RegExp($, Y);
    }
    ReturnType($, Y = {}) {
      return m.Type($.returns, Y);
    }
    Symbol($) {
      return this.Create({ ...$, [e8.Kind]: "Symbol", type: "symbol" });
    }
    Undefined($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Undefined", type: "undefined" });
    }
    Uint8Array($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Uint8Array", type: "Uint8Array" });
    }
    Void($ = {}) {
      return this.Create({ ...$, [e8.Kind]: "Void", type: "void" });
    }
  }
  e8.JavaScriptTypeBuilder = O6;
  e8.JsonType = new x$;
  e8.Type = new O6;
});
var G6 = z0((XY) => {
  var I6 = function($, Y) {
    switch (Y) {
      case y.ValueErrorType.ArrayContains:
        return "Expected array to contain at least one matching value";
      case y.ValueErrorType.ArrayMaxContains:
        return `Expected array to contain no more than ${$.maxContains} matching values`;
      case y.ValueErrorType.ArrayMinContains:
        return `Expected array to contain at least ${$.minContains} matching values`;
      case y.ValueErrorType.ArrayMaxItems:
        return `Expected array length to be less or equal to ${$.maxItems}`;
      case y.ValueErrorType.ArrayMinItems:
        return `Expected array length to be greater or equal to ${$.minItems}`;
      case y.ValueErrorType.ArrayUniqueItems:
        return "Expected array elements to be unique";
      case y.ValueErrorType.Array:
        return "Expected array";
      case y.ValueErrorType.AsyncIterator:
        return "Expected AsyncIterator";
      case y.ValueErrorType.BigIntExclusiveMaximum:
        return `Expected bigint to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.BigIntExclusiveMinimum:
        return `Expected bigint to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.BigIntMaximum:
        return `Expected bigint to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.BigIntMinimum:
        return `Expected bigint to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.BigIntMultipleOf:
        return `Expected bigint to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.BigInt:
        return "Expected bigint";
      case y.ValueErrorType.Boolean:
        return "Expected boolean";
      case y.ValueErrorType.DateExclusiveMinimumTimestamp:
        return `Expected Date timestamp to be greater than ${$.exclusiveMinimumTimestamp}`;
      case y.ValueErrorType.DateExclusiveMaximumTimestamp:
        return `Expected Date timestamp to be less than ${$.exclusiveMaximumTimestamp}`;
      case y.ValueErrorType.DateMinimumTimestamp:
        return `Expected Date timestamp to be greater or equal to ${$.minimumTimestamp}`;
      case y.ValueErrorType.DateMaximumTimestamp:
        return `Expected Date timestamp to be less or equal to ${$.maximumTimestamp}`;
      case y.ValueErrorType.DateMultipleOfTimestamp:
        return `Expected Date timestamp to be a multiple of ${$.multipleOfTimestamp}`;
      case y.ValueErrorType.Date:
        return "Expected Date";
      case y.ValueErrorType.Function:
        return "Expected function";
      case y.ValueErrorType.IntegerExclusiveMaximum:
        return `Expected integer to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.IntegerExclusiveMinimum:
        return `Expected integer to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.IntegerMaximum:
        return `Expected integer to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.IntegerMinimum:
        return `Expected integer to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.IntegerMultipleOf:
        return `Expected integer to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Integer:
        return "Expected integer";
      case y.ValueErrorType.IntersectUnevaluatedProperties:
        return "Unexpected property";
      case y.ValueErrorType.Intersect:
        return "Expected all values to match";
      case y.ValueErrorType.Iterator:
        return "Expected Iterator";
      case y.ValueErrorType.Literal:
        return `Expected ${typeof $.const === "string" ? `'${$.const}'` : $.const}`;
      case y.ValueErrorType.Never:
        return "Never";
      case y.ValueErrorType.Not:
        return "Value should not match";
      case y.ValueErrorType.Null:
        return "Expected null";
      case y.ValueErrorType.NumberExclusiveMaximum:
        return `Expected number to be less than ${$.exclusiveMaximum}`;
      case y.ValueErrorType.NumberExclusiveMinimum:
        return `Expected number to be greater than ${$.exclusiveMinimum}`;
      case y.ValueErrorType.NumberMaximum:
        return `Expected number to be less or equal to ${$.maximum}`;
      case y.ValueErrorType.NumberMinimum:
        return `Expected number to be greater or equal to ${$.minimum}`;
      case y.ValueErrorType.NumberMultipleOf:
        return `Expected number to be a multiple of ${$.multipleOf}`;
      case y.ValueErrorType.Number:
        return "Expected number";
      case y.ValueErrorType.Object:
        return "Expected object";
      case y.ValueErrorType.ObjectAdditionalProperties:
        return "Unexpected property";
      case y.ValueErrorType.ObjectMaxProperties:
        return `Expected object to have no more than ${$.maxProperties} properties`;
      case y.ValueErrorType.ObjectMinProperties:
        return `Expected object to have at least ${$.minProperties} properties`;
      case y.ValueErrorType.ObjectRequiredProperty:
        return "Required property";
      case y.ValueErrorType.Promise:
        return "Expected Promise";
      case y.ValueErrorType.StringFormatUnknown:
        return `Unknown format '${$.format}'`;
      case y.ValueErrorType.StringFormat:
        return `Expected string to match '${$.format}' format`;
      case y.ValueErrorType.StringMaxLength:
        return `Expected string length less or equal to ${$.maxLength}`;
      case y.ValueErrorType.StringMinLength:
        return `Expected string length greater or equal to ${$.minLength}`;
      case y.ValueErrorType.StringPattern:
        return `Expected string to match '${$.pattern}'`;
      case y.ValueErrorType.String:
        return "Expected string";
      case y.ValueErrorType.Symbol:
        return "Expected symbol";
      case y.ValueErrorType.TupleLength:
        return `Expected tuple to have ${$.maxItems || 0} elements`;
      case y.ValueErrorType.Tuple:
        return "Expected tuple";
      case y.ValueErrorType.Uint8ArrayMaxByteLength:
        return `Expected byte length less or equal to ${$.maxByteLength}`;
      case y.ValueErrorType.Uint8ArrayMinByteLength:
        return `Expected byte length greater or equal to ${$.minByteLength}`;
      case y.ValueErrorType.Uint8Array:
        return "Expected Uint8Array";
      case y.ValueErrorType.Undefined:
        return "Expected undefined";
      case y.ValueErrorType.Union:
        return "Expected union value";
      case y.ValueErrorType.Void:
        return "Expected void";
      case y.ValueErrorType.Kind:
        return `Expected kind '${$[q1.Kind]}'`;
      default:
        return "Unknown error type";
    }
  };
  Object.defineProperty(XY, "__esModule", { value: true });
  XY.DefaultErrorFunction = XY.TypeSystemPolicy = XY.TypeSystemErrorFunction = XY.TypeSystem = XY.TypeSystemDuplicateFormat = XY.TypeSystemDuplicateTypeKind = undefined;
  var k$ = x0(), y = z$(), q1 = g0();

  class b6 extends q1.TypeBoxError {
    constructor($) {
      super(`Duplicate type kind '${$}' detected`);
    }
  }
  XY.TypeSystemDuplicateTypeKind = b6;

  class R6 extends q1.TypeBoxError {
    constructor($) {
      super(`Duplicate string format '${$}' detected`);
    }
  }
  XY.TypeSystemDuplicateFormat = R6;
  var $Y;
  (function($) {
    function Y(X, Z) {
      if (q1.TypeRegistry.Has(X))
        throw new b6(X);
      return q1.TypeRegistry.Set(X, Z), (J = {}) => q1.Type.Unsafe({ ...J, [q1.Kind]: X });
    }
    $.Type = Y;
    function W(X, Z) {
      if (q1.FormatRegistry.Has(X))
        throw new R6(X);
      return q1.FormatRegistry.Set(X, Z), X;
    }
    $.Format = W;
  })($Y || (XY.TypeSystem = $Y = {}));
  var YY;
  (function($) {
    let Y = I6;
    function W() {
      Y = I6;
    }
    $.Reset = W;
    function X(J) {
      Y = J;
    }
    $.Set = X;
    function Z() {
      return Y;
    }
    $.Get = Z;
  })(YY || (XY.TypeSystemErrorFunction = YY = {}));
  var WY;
  (function($) {
    $.ExactOptionalPropertyTypes = false, $.AllowArrayObject = false, $.AllowNaN = false, $.AllowNullVoid = false;
    function Y(Q, z) {
      return $.ExactOptionalPropertyTypes ? z in Q : Q[z] !== undefined;
    }
    $.IsExactOptionalProperty = Y;
    function W(Q) {
      const z = (0, k$.IsObject)(Q);
      return $.AllowArrayObject ? z : z && !(0, k$.IsArray)(Q);
    }
    $.IsObjectLike = W;
    function X(Q) {
      return W(Q) && !(Q instanceof Date) && !(Q instanceof Uint8Array);
    }
    $.IsRecordLike = X;
    function Z(Q) {
      const z = (0, k$.IsNumber)(Q);
      return $.AllowNaN ? z : z && Number.isFinite(Q);
    }
    $.IsNumberLike = Z;
    function J(Q) {
      const z = (0, k$.IsUndefined)(Q);
      return $.AllowNullVoid ? z || Q === null : z;
    }
    $.IsVoidLike = J;
  })(WY || (XY.TypeSystemPolicy = WY = {}));
  XY.DefaultErrorFunction = I6;
});
var K1 = z0((JY) => {
  var xZ = function($, Y) {
    const W = Y.findIndex((X) => X.$id === $.$ref);
    if (W === -1)
      throw new _6($);
    return Y[W];
  };
  Object.defineProperty(JY, "__esModule", { value: true });
  JY.Deref = JY.TypeDereferenceError = undefined;
  var VZ = g0();

  class _6 extends VZ.TypeBoxError {
    constructor($) {
      super(`Unable to dereference schema with $id '${$.$id}'`);
      this.schema = $;
    }
  }
  JY.TypeDereferenceError = _6;
  JY.Deref = xZ;
});
var H$ = z0((NY) => {
  function* dZ($) {
    const Y = $ === 0 ? 1 : Math.ceil(Math.floor(Math.log2($) + 1) / 8);
    for (let W = 0;W < Y; W++)
      yield $ >> 8 * (Y - 1 - W) & 255;
  }
  var yZ = function($) {
    _0(f0.Array);
    for (let Y of $)
      u1(Y);
  }, vZ = function($) {
    _0(f0.Boolean), _0($ ? 1 : 0);
  }, pZ = function($) {
    _0(f0.BigInt), HY.setBigInt64(0, $);
    for (let Y of qY)
      _0(Y);
  }, iZ = function($) {
    _0(f0.Date), u1($.getTime());
  }, mZ = function($) {
    _0(f0.Null);
  }, uZ = function($) {
    _0(f0.Number), HY.setFloat64(0, $);
    for (let Y of qY)
      _0(Y);
  }, hZ = function($) {
    _0(f0.Object);
    for (let Y of globalThis.Object.keys($).sort())
      u1(Y), u1($[Y]);
  }, nZ = function($) {
    _0(f0.String);
    for (let Y = 0;Y < $.length; Y++)
      for (let W of dZ($.charCodeAt(Y)))
        _0(W);
  }, oZ = function($) {
    _0(f0.Symbol), u1($.description);
  }, cZ = function($) {
    _0(f0.Uint8Array);
    for (let Y = 0;Y < $.length; Y++)
      _0($[Y]);
  }, lZ = function($) {
    return _0(f0.Undefined);
  }, u1 = function($) {
    if ((0, c0.IsArray)($))
      return yZ($);
    if ((0, c0.IsBoolean)($))
      return vZ($);
    if ((0, c0.IsBigInt)($))
      return pZ($);
    if ((0, c0.IsDate)($))
      return iZ($);
    if ((0, c0.IsNull)($))
      return mZ($);
    if ((0, c0.IsNumber)($))
      return uZ($);
    if ((0, c0.IsPlainObject)($))
      return hZ($);
    if ((0, c0.IsString)($))
      return nZ($);
    if ((0, c0.IsSymbol)($))
      return oZ($);
    if ((0, c0.IsUint8Array)($))
      return cZ($);
    if ((0, c0.IsUndefined)($))
      return lZ($);
    throw new E6($);
  }, _0 = function($) {
    m1 = m1 ^ TZ[$], m1 = m1 * gZ % fZ;
  }, tZ = function($) {
    return m1 = BigInt("14695981039346656037"), u1($), m1;
  };
  Object.defineProperty(NY, "__esModule", { value: true });
  NY.Hash = NY.ByteMarker = NY.ValueHashError = undefined;
  var c0 = x0();

  class E6 extends Error {
    constructor($) {
      super("Unable to hash value");
      this.value = $;
    }
  }
  NY.ValueHashError = E6;
  var f0;
  (function($) {
    $[$.Undefined = 0] = "Undefined", $[$.Null = 1] = "Null", $[$.Boolean = 2] = "Boolean", $[$.Number = 3] = "Number", $[$.String = 4] = "String", $[$.Object = 5] = "Object", $[$.Array = 6] = "Array", $[$.Date = 7] = "Date", $[$.Uint8Array = 8] = "Uint8Array", $[$.Symbol = 9] = "Symbol", $[$.BigInt = 10] = "BigInt";
  })(f0 || (NY.ByteMarker = f0 = {}));
  var m1 = BigInt("14695981039346656037"), [gZ, fZ] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")], TZ = Array.from({ length: 256 }).map(($, Y) => BigInt(Y)), zY = new Float64Array(1), HY = new DataView(zY.buffer), qY = new Uint8Array(zY.buffer);
  NY.Hash = tZ;
});
var z$ = z0((UY) => {
  var X1 = function($) {
    return $.replace(/~/g, "~0").replace(/\//g, "~1");
  }, s = function($) {
    return $ !== undefined;
  }, g = function($, Y, W, X) {
    return { type: $, schema: Y, path: W, value: X, message: h1.TypeSystemErrorFunction.Get()(Y, $) };
  };
  function* eZ($, Y, W, X) {
  }
  function* $J($, Y, W, X) {
    if (!(0, D0.IsArray)(X))
      return yield g(x.Array, $, W, X);
    if (s($.minItems) && !(X.length >= $.minItems))
      yield g(x.ArrayMinItems, $, W, X);
    if (s($.maxItems) && !(X.length <= $.maxItems))
      yield g(x.ArrayMaxItems, $, W, X);
    for (let Q = 0;Q < X.length; Q++)
      yield* C0($.items, Y, `${W}/${Q}`, X[Q]);
    if ($.uniqueItems === true && !function() {
      const Q = new Set;
      for (let z of X) {
        const U = (0, aZ.Hash)(z);
        if (Q.has(U))
          return false;
        else
          Q.add(U);
      }
      return true;
    }())
      yield g(x.ArrayUniqueItems, $, W, X);
    if (!(s($.contains) || s($.minContains) || s($.maxContains)))
      return;
    const Z = s($.contains) ? $.contains : p0.Type.Never(), J = X.reduce((Q, z, U) => C0(Z, Y, `${W}${U}`, z).next().done === true ? Q + 1 : Q, 0);
    if (J === 0)
      yield g(x.ArrayContains, $, W, X);
    if ((0, D0.IsNumber)($.minContains) && J < $.minContains)
      yield g(x.ArrayMinContains, $, W, X);
    if ((0, D0.IsNumber)($.maxContains) && J > $.maxContains)
      yield g(x.ArrayMaxContains, $, W, X);
  }
  function* YJ($, Y, W, X) {
    if (!(0, D0.IsAsyncIterator)(X))
      yield g(x.AsyncIterator, $, W, X);
  }
  function* WJ($, Y, W, X) {
    if (!(0, D0.IsBigInt)(X))
      return yield g(x.BigInt, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.BigIntExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.BigIntExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(x.BigIntMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(x.BigIntMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== BigInt(0))
      yield g(x.BigIntMultipleOf, $, W, X);
  }
  function* XJ($, Y, W, X) {
    if (!(0, D0.IsBoolean)(X))
      yield g(x.Boolean, $, W, X);
  }
  function* ZJ($, Y, W, X) {
    yield* C0($.returns, Y, W, X.prototype);
  }
  function* JJ($, Y, W, X) {
    if (!(0, D0.IsDate)(X))
      return yield g(x.Date, $, W, X);
    if (s($.exclusiveMaximumTimestamp) && !(X.getTime() < $.exclusiveMaximumTimestamp))
      yield g(x.DateExclusiveMaximumTimestamp, $, W, X);
    if (s($.exclusiveMinimumTimestamp) && !(X.getTime() > $.exclusiveMinimumTimestamp))
      yield g(x.DateExclusiveMinimumTimestamp, $, W, X);
    if (s($.maximumTimestamp) && !(X.getTime() <= $.maximumTimestamp))
      yield g(x.DateMaximumTimestamp, $, W, X);
    if (s($.minimumTimestamp) && !(X.getTime() >= $.minimumTimestamp))
      yield g(x.DateMinimumTimestamp, $, W, X);
    if (s($.multipleOfTimestamp) && X.getTime() % $.multipleOfTimestamp !== 0)
      yield g(x.DateMultipleOfTimestamp, $, W, X);
  }
  function* QJ($, Y, W, X) {
    if (!(0, D0.IsFunction)(X))
      yield g(x.Function, $, W, X);
  }
  function* zJ($, Y, W, X) {
    if (!(0, D0.IsInteger)(X))
      return yield g(x.Integer, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.IntegerExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.IntegerExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(x.IntegerMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(x.IntegerMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== 0)
      yield g(x.IntegerMultipleOf, $, W, X);
  }
  function* HJ($, Y, W, X) {
    for (let Z of $.allOf) {
      const J = C0(Z, Y, W, X).next();
      if (!J.done)
        yield g(x.Intersect, $, W, X), yield J.value;
    }
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let J of Object.getOwnPropertyNames(X))
        if (!Z.test(J))
          yield g(x.IntersectUnevaluatedProperties, $, `${W}/${J}`, X);
    }
    if (typeof $.unevaluatedProperties === "object") {
      const Z = new RegExp(p0.KeyResolver.ResolvePattern($));
      for (let J of Object.getOwnPropertyNames(X))
        if (!Z.test(J)) {
          const Q = C0($.unevaluatedProperties, Y, `${W}/${J}`, X[J]).next();
          if (!Q.done)
            yield Q.value;
        }
    }
  }
  function* qJ($, Y, W, X) {
    if (!(0, D0.IsIterator)(X))
      yield g(x.Iterator, $, W, X);
  }
  function* NJ($, Y, W, X) {
    if (X !== $.const)
      yield g(x.Literal, $, W, X);
  }
  function* MJ($, Y, W, X) {
    yield g(x.Never, $, W, X);
  }
  function* AJ($, Y, W, X) {
    if (C0($.not, Y, W, X).next().done === true)
      yield g(x.Not, $, W, X);
  }
  function* UJ($, Y, W, X) {
    if (!(0, D0.IsNull)(X))
      yield g(x.Null, $, W, X);
  }
  function* BJ($, Y, W, X) {
    if (!h1.TypeSystemPolicy.IsNumberLike(X))
      return yield g(x.Number, $, W, X);
    if (s($.exclusiveMaximum) && !(X < $.exclusiveMaximum))
      yield g(x.NumberExclusiveMaximum, $, W, X);
    if (s($.exclusiveMinimum) && !(X > $.exclusiveMinimum))
      yield g(x.NumberExclusiveMinimum, $, W, X);
    if (s($.maximum) && !(X <= $.maximum))
      yield g(x.NumberMaximum, $, W, X);
    if (s($.minimum) && !(X >= $.minimum))
      yield g(x.NumberMinimum, $, W, X);
    if (s($.multipleOf) && X % $.multipleOf !== 0)
      yield g(x.NumberMultipleOf, $, W, X);
  }
  function* FJ($, Y, W, X) {
    if (!h1.TypeSystemPolicy.IsObjectLike(X))
      return yield g(x.Object, $, W, X);
    if (s($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(x.ObjectMinProperties, $, W, X);
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(x.ObjectMaxProperties, $, W, X);
    const Z = Array.isArray($.required) ? $.required : [], J = Object.getOwnPropertyNames($.properties), Q = Object.getOwnPropertyNames(X);
    for (let z of Z) {
      if (Q.includes(z))
        continue;
      yield g(x.ObjectRequiredProperty, $.properties[z], `${W}/${X1(z)}`, undefined);
    }
    if ($.additionalProperties === false) {
      for (let z of Q)
        if (!J.includes(z))
          yield g(x.ObjectAdditionalProperties, $, `${W}/${X1(z)}`, X[z]);
    }
    if (typeof $.additionalProperties === "object")
      for (let z of Q) {
        if (J.includes(z))
          continue;
        yield* C0($.additionalProperties, Y, `${W}/${X1(z)}`, X[z]);
      }
    for (let z of J) {
      const U = $.properties[z];
      if ($.required && $.required.includes(z)) {
        if (yield* C0(U, Y, `${W}/${X1(z)}`, X[z]), p0.ExtendsUndefined.Check($) && !(z in X))
          yield g(x.ObjectRequiredProperty, U, `${W}/${X1(z)}`, undefined);
      } else if (h1.TypeSystemPolicy.IsExactOptionalProperty(X, z))
        yield* C0(U, Y, `${W}/${X1(z)}`, X[z]);
    }
  }
  function* DJ($, Y, W, X) {
    if (!(0, D0.IsPromise)(X))
      yield g(x.Promise, $, W, X);
  }
  function* wJ($, Y, W, X) {
    if (!h1.TypeSystemPolicy.IsRecordLike(X))
      return yield g(x.Object, $, W, X);
    if (s($.minProperties) && !(Object.getOwnPropertyNames(X).length >= $.minProperties))
      yield g(x.ObjectMinProperties, $, W, X);
    if (s($.maxProperties) && !(Object.getOwnPropertyNames(X).length <= $.maxProperties))
      yield g(x.ObjectMaxProperties, $, W, X);
    const [Z, J] = Object.entries($.patternProperties)[0], Q = new RegExp(Z);
    for (let [z, U] of Object.entries(X))
      if (Q.test(z))
        yield* C0(J, Y, `${W}/${X1(z)}`, U);
    if (typeof $.additionalProperties === "object") {
      for (let [z, U] of Object.entries(X))
        if (!Q.test(z))
          yield* C0($.additionalProperties, Y, `${W}/${X1(z)}`, U);
    }
    if ($.additionalProperties === false)
      for (let [z, U] of Object.entries(X)) {
        if (Q.test(z))
          continue;
        return yield g(x.ObjectAdditionalProperties, $, `${W}/${X1(z)}`, U);
      }
  }
  function* jJ($, Y, W, X) {
    yield* C0((0, AY.Deref)($, Y), Y, W, X);
  }
  function* KJ($, Y, W, X) {
    if (!(0, D0.IsString)(X))
      return yield g(x.String, $, W, X);
    if (s($.minLength) && !(X.length >= $.minLength))
      yield g(x.StringMinLength, $, W, X);
    if (s($.maxLength) && !(X.length <= $.maxLength))
      yield g(x.StringMaxLength, $, W, X);
    if ((0, D0.IsString)($.pattern)) {
      if (!new RegExp($.pattern).test(X))
        yield g(x.StringPattern, $, W, X);
    }
    if ((0, D0.IsString)($.format)) {
      if (!p0.FormatRegistry.Has($.format))
        yield g(x.StringFormatUnknown, $, W, X);
      else if (!p0.FormatRegistry.Get($.format)(X))
        yield g(x.StringFormat, $, W, X);
    }
  }
  function* PJ($, Y, W, X) {
    if (!(0, D0.IsSymbol)(X))
      yield g(x.Symbol, $, W, X);
  }
  function* OJ($, Y, W, X) {
    if (!(0, D0.IsString)(X))
      return yield g(x.String, $, W, X);
    if (!new RegExp($.pattern).test(X))
      yield g(x.StringPattern, $, W, X);
  }
  function* SJ($, Y, W, X) {
    yield* C0((0, AY.Deref)($, Y), Y, W, X);
  }
  function* LJ($, Y, W, X) {
    if (!(0, D0.IsArray)(X))
      return yield g(x.Tuple, $, W, X);
    if ($.items === undefined && X.length !== 0)
      return yield g(x.TupleLength, $, W, X);
    if (X.length !== $.maxItems)
      return yield g(x.TupleLength, $, W, X);
    if (!$.items)
      return;
    for (let Z = 0;Z < $.items.length; Z++)
      yield* C0($.items[Z], Y, `${W}/${Z}`, X[Z]);
  }
  function* CJ($, Y, W, X) {
    if (!(0, D0.IsUndefined)(X))
      yield g(x.Undefined, $, W, X);
  }
  function* IJ($, Y, W, X) {
    let Z = 0;
    for (let J of $.anyOf) {
      const Q = [...C0(J, Y, W, X)];
      if (Q.length === 0)
        return;
      Z += Q.length;
    }
    if (Z > 0)
      yield g(x.Union, $, W, X);
  }
  function* bJ($, Y, W, X) {
    if (!(0, D0.IsUint8Array)(X))
      return yield g(x.Uint8Array, $, W, X);
    if (s($.maxByteLength) && !(X.length <= $.maxByteLength))
      yield g(x.Uint8ArrayMaxByteLength, $, W, X);
    if (s($.minByteLength) && !(X.length >= $.minByteLength))
      yield g(x.Uint8ArrayMinByteLength, $, W, X);
  }
  function* RJ($, Y, W, X) {
  }
  function* GJ($, Y, W, X) {
    if (!h1.TypeSystemPolicy.IsVoidLike(X))
      yield g(x.Void, $, W, X);
  }
  function* _J($, Y, W, X) {
    if (!p0.TypeRegistry.Get($[p0.Kind])($, X))
      yield g(x.Kind, $, W, X);
  }
  function* C0($, Y, W, X) {
    const Z = s($.$id) ? [...Y, $] : Y, J = $;
    switch (J[p0.Kind]) {
      case "Any":
        return yield* eZ(J, Z, W, X);
      case "Array":
        return yield* $J(J, Z, W, X);
      case "AsyncIterator":
        return yield* YJ(J, Z, W, X);
      case "BigInt":
        return yield* WJ(J, Z, W, X);
      case "Boolean":
        return yield* XJ(J, Z, W, X);
      case "Constructor":
        return yield* ZJ(J, Z, W, X);
      case "Date":
        return yield* JJ(J, Z, W, X);
      case "Function":
        return yield* QJ(J, Z, W, X);
      case "Integer":
        return yield* zJ(J, Z, W, X);
      case "Intersect":
        return yield* HJ(J, Z, W, X);
      case "Iterator":
        return yield* qJ(J, Z, W, X);
      case "Literal":
        return yield* NJ(J, Z, W, X);
      case "Never":
        return yield* MJ(J, Z, W, X);
      case "Not":
        return yield* AJ(J, Z, W, X);
      case "Null":
        return yield* UJ(J, Z, W, X);
      case "Number":
        return yield* BJ(J, Z, W, X);
      case "Object":
        return yield* FJ(J, Z, W, X);
      case "Promise":
        return yield* DJ(J, Z, W, X);
      case "Record":
        return yield* wJ(J, Z, W, X);
      case "Ref":
        return yield* jJ(J, Z, W, X);
      case "String":
        return yield* KJ(J, Z, W, X);
      case "Symbol":
        return yield* PJ(J, Z, W, X);
      case "TemplateLiteral":
        return yield* OJ(J, Z, W, X);
      case "This":
        return yield* SJ(J, Z, W, X);
      case "Tuple":
        return yield* LJ(J, Z, W, X);
      case "Undefined":
        return yield* CJ(J, Z, W, X);
      case "Union":
        return yield* IJ(J, Z, W, X);
      case "Uint8Array":
        return yield* bJ(J, Z, W, X);
      case "Unknown":
        return yield* RJ(J, Z, W, X);
      case "Void":
        return yield* GJ(J, Z, W, X);
      default:
        if (!p0.TypeRegistry.Has(J[p0.Kind]))
          throw new V6($);
        return yield* _J(J, Z, W, X);
    }
  }
  var EJ = function(...$) {
    const Y = $.length === 3 ? C0($[0], $[1], "", $[2]) : C0($[0], [], "", $[1]);
    return new x6(Y);
  };
  Object.defineProperty(UY, "__esModule", { value: true });
  UY.Errors = UY.ValueErrorIterator = UY.EscapeKey = UY.ValueErrorsUnknownTypeError = UY.ValueErrorType = undefined;
  var D0 = x0(), h1 = G6(), AY = K1(), aZ = H$(), p0 = g0(), x;
  (function($) {
    $[$.ArrayContains = 0] = "ArrayContains", $[$.ArrayMaxContains = 1] = "ArrayMaxContains", $[$.ArrayMaxItems = 2] = "ArrayMaxItems", $[$.ArrayMinContains = 3] = "ArrayMinContains", $[$.ArrayMinItems = 4] = "ArrayMinItems", $[$.ArrayUniqueItems = 5] = "ArrayUniqueItems", $[$.Array = 6] = "Array", $[$.AsyncIterator = 7] = "AsyncIterator", $[$.BigIntExclusiveMaximum = 8] = "BigIntExclusiveMaximum", $[$.BigIntExclusiveMinimum = 9] = "BigIntExclusiveMinimum", $[$.BigIntMaximum = 10] = "BigIntMaximum", $[$.BigIntMinimum = 11] = "BigIntMinimum", $[$.BigIntMultipleOf = 12] = "BigIntMultipleOf", $[$.BigInt = 13] = "BigInt", $[$.Boolean = 14] = "Boolean", $[$.DateExclusiveMaximumTimestamp = 15] = "DateExclusiveMaximumTimestamp", $[$.DateExclusiveMinimumTimestamp = 16] = "DateExclusiveMinimumTimestamp", $[$.DateMaximumTimestamp = 17] = "DateMaximumTimestamp", $[$.DateMinimumTimestamp = 18] = "DateMinimumTimestamp", $[$.DateMultipleOfTimestamp = 19] = "DateMultipleOfTimestamp", $[$.Date = 20] = "Date", $[$.Function = 21] = "Function", $[$.IntegerExclusiveMaximum = 22] = "IntegerExclusiveMaximum", $[$.IntegerExclusiveMinimum = 23] = "IntegerExclusiveMinimum", $[$.IntegerMaximum = 24] = "IntegerMaximum", $[$.IntegerMinimum = 25] = "IntegerMinimum", $[$.IntegerMultipleOf = 26] = "IntegerMultipleOf", $[$.Integer = 27] = "Integer", $[$.IntersectUnevaluatedProperties = 28] = "IntersectUnevaluatedProperties", $[$.Intersect = 29] = "Intersect", $[$.Iterator = 30] = "Iterator", $[$.Kind = 31] = "Kind", $[$.Literal = 32] = "Literal", $[$.Never = 33] = "Never", $[$.Not = 34] = "Not", $[$.Null = 35] = "Null", $[$.NumberExclusiveMaximum = 36] = "NumberExclusiveMaximum", $[$.NumberExclusiveMinimum = 37] = "NumberExclusiveMinimum", $[$.NumberMaximum = 38] = "NumberMaximum", $[$.NumberMinimum = 39] = "NumberMinimum", $[$.NumberMultipleOf = 40] = "NumberMultipleOf", $[$.Number = 41] = "Number", $[$.ObjectAdditionalProperties = 42] = "ObjectAdditionalProperties", $[$.ObjectMaxProperties = 43] = "ObjectMaxProperties", $[$.ObjectMinProperties = 44] = "ObjectMinProperties", $[$.ObjectRequiredProperty = 45] = "ObjectRequiredProperty", $[$.Object = 46] = "Object", $[$.Promise = 47] = "Promise", $[$.StringFormatUnknown = 48] = "StringFormatUnknown", $[$.StringFormat = 49] = "StringFormat", $[$.StringMaxLength = 50] = "StringMaxLength", $[$.StringMinLength = 51] = "StringMinLength", $[$.StringPattern = 52] = "StringPattern", $[$.String = 53] = "String", $[$.Symbol = 54] = "Symbol", $[$.TupleLength = 55] = "TupleLength", $[$.Tuple = 56] = "Tuple", $[$.Uint8ArrayMaxByteLength = 57] = "Uint8ArrayMaxByteLength", $[$.Uint8ArrayMinByteLength = 58] = "Uint8ArrayMinByteLength", $[$.Uint8Array = 59] = "Uint8Array", $[$.Undefined = 60] = "Undefined", $[$.Union = 61] = "Union", $[$.Void = 62] = "Void";
  })(x || (UY.ValueErrorType = x = {}));

  class V6 extends p0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  UY.ValueErrorsUnknownTypeError = V6;
  UY.EscapeKey = X1;

  class x6 {
    constructor($) {
      this.iterator = $;
    }
    [Symbol.iterator]() {
      return this.iterator;
    }
    First() {
      const $ = this.iterator.next();
      return $.done ? undefined : $.value;
    }
  }
  UY.ValueErrorIterator = x6;
  UY.Errors = EJ;
});
var g$ = z0((G1) => {
  var fJ = G1 && G1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), TJ = G1 && G1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        fJ(Y, $, W);
  };
  Object.defineProperty(G1, "__esModule", { value: true });
  TJ(z$(), G1);
});
var f$ = z0((DY) => {
  Object.defineProperty(DY, "__esModule", { value: true });
  DY.ValuePointer = DY.ValuePointerRootDeleteError = DY.ValuePointerRootSetError = undefined;

  class k6 extends Error {
    constructor($, Y, W) {
      super("Cannot set root value");
      this.value = $, this.path = Y, this.update = W;
    }
  }
  DY.ValuePointerRootSetError = k6;

  class g6 extends Error {
    constructor($, Y) {
      super("Cannot delete root value");
      this.value = $, this.path = Y;
    }
  }
  DY.ValuePointerRootDeleteError = g6;
  var FY;
  (function($) {
    function Y(z) {
      return z.indexOf("~") === -1 ? z : z.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function* W(z) {
      if (z === "")
        return;
      let [U, F] = [0, 0];
      for (let D = 0;D < z.length; D++)
        if (z.charAt(D) === "/")
          if (D === 0)
            U = D + 1;
          else
            F = D, yield Y(z.slice(U, F)), U = D + 1;
        else
          F = D;
      yield Y(z.slice(U));
    }
    $.Format = W;
    function X(z, U, F) {
      if (U === "")
        throw new k6(z, U, F);
      let [D, S, b] = [null, z, ""];
      for (let j of W(U)) {
        if (S[j] === undefined)
          S[j] = {};
        D = S, S = S[j], b = j;
      }
      D[b] = F;
    }
    $.Set = X;
    function Z(z, U) {
      if (U === "")
        throw new g6(z, U);
      let [F, D, S] = [null, z, ""];
      for (let b of W(U)) {
        if (D[b] === undefined || D[b] === null)
          return;
        F = D, D = D[b], S = b;
      }
      if (Array.isArray(F)) {
        const b = parseInt(S);
        F.splice(b, 1);
      } else
        delete F[S];
    }
    $.Delete = Z;
    function J(z, U) {
      if (U === "")
        return true;
      let [F, D, S] = [null, z, ""];
      for (let b of W(U)) {
        if (D[b] === undefined)
          return false;
        F = D, D = D[b], S = b;
      }
      return Object.getOwnPropertyNames(F).includes(S);
    }
    $.Has = J;
    function Q(z, U) {
      if (U === "")
        return z;
      let F = z;
      for (let D of W(U)) {
        if (F[D] === undefined)
          return;
        F = F[D];
      }
      return F;
    }
    $.Get = Q;
  })(FY || (DY.ValuePointer = FY = {}));
});
var n1 = z0((jY) => {
  var vJ = function($) {
    return [...Object.getOwnPropertyNames($), ...Object.getOwnPropertySymbols($)].reduce((W, X) => ({ ...W, [X]: f6($[X]) }), {});
  }, pJ = function($) {
    return $.map((Y) => f6(Y));
  }, iJ = function($) {
    return $.slice();
  }, mJ = function($) {
    return new Date($.toISOString());
  }, uJ = function($) {
    return $;
  }, f6 = function($) {
    if ((0, q$.IsArray)($))
      return pJ($);
    if ((0, q$.IsDate)($))
      return mJ($);
    if ((0, q$.IsPlainObject)($))
      return vJ($);
    if ((0, q$.IsTypedArray)($))
      return iJ($);
    if ((0, q$.IsValueType)($))
      return uJ($);
    throw new Error("ValueClone: Unable to clone value");
  };
  Object.defineProperty(jY, "__esModule", { value: true });
  jY.Clone = undefined;
  var q$ = x0();
  jY.Clone = f6;
});
var v6 = z0((SY) => {
  var N$ = function($, Y) {
    return { type: "update", path: $, value: Y };
  }, PY = function($, Y) {
    return { type: "insert", path: $, value: Y };
  }, OY = function($) {
    return { type: "delete", path: $ };
  };
  function* hJ($, Y, W) {
    if (!(0, E0.IsPlainObject)(W))
      return yield N$($, W);
    const X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)], Z = [...Object.keys(W), ...Object.getOwnPropertySymbols(W)];
    for (let J of X) {
      if ((0, E0.IsSymbol)(J))
        throw new o1(J);
      if ((0, E0.IsUndefined)(W[J]) && Z.includes(J))
        yield N$(`${$}/${String(J)}`, undefined);
    }
    for (let J of Z) {
      if ((0, E0.IsUndefined)(Y[J]) || (0, E0.IsUndefined)(W[J]))
        continue;
      if ((0, E0.IsSymbol)(J))
        throw new o1(J);
      yield* T$(`${$}/${String(J)}`, Y[J], W[J]);
    }
    for (let J of Z) {
      if ((0, E0.IsSymbol)(J))
        throw new o1(J);
      if ((0, E0.IsUndefined)(Y[J]))
        yield PY(`${$}/${String(J)}`, W[J]);
    }
    for (let J of X.reverse()) {
      if ((0, E0.IsSymbol)(J))
        throw new o1(J);
      if ((0, E0.IsUndefined)(W[J]) && !Z.includes(J))
        yield OY(`${$}/${String(J)}`);
    }
  }
  function* nJ($, Y, W) {
    if (!(0, E0.IsArray)(W))
      return yield N$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* T$(`${$}/${X}`, Y[X], W[X]);
    for (let X = 0;X < W.length; X++) {
      if (X < Y.length)
        continue;
      yield PY(`${$}/${X}`, W[X]);
    }
    for (let X = Y.length - 1;X >= 0; X--) {
      if (X < W.length)
        continue;
      yield OY(`${$}/${X}`);
    }
  }
  function* oJ($, Y, W) {
    if (!(0, E0.IsTypedArray)(W) || Y.length !== W.length || Object.getPrototypeOf(Y).constructor.name !== Object.getPrototypeOf(W).constructor.name)
      return yield N$($, W);
    for (let X = 0;X < Math.min(Y.length, W.length); X++)
      yield* T$(`${$}/${X}`, Y[X], W[X]);
  }
  function* cJ($, Y, W) {
    if (Y === W)
      return;
    yield N$($, W);
  }
  function* T$($, Y, W) {
    if ((0, E0.IsPlainObject)(Y))
      return yield* hJ($, Y, W);
    if ((0, E0.IsArray)(Y))
      return yield* nJ($, Y, W);
    if ((0, E0.IsTypedArray)(Y))
      return yield* oJ($, Y, W);
    if ((0, E0.IsValueType)(Y))
      return yield* cJ($, Y, W);
    throw new y6(Y);
  }
  var lJ = function($, Y) {
    return [...T$("", $, Y)];
  }, tJ = function($) {
    return $.length > 0 && $[0].path === "" && $[0].type === "update";
  }, sJ = function($) {
    return $.length === 0;
  }, rJ = function($, Y) {
    if (tJ(Y))
      return (0, d6.Clone)(Y[0].value);
    if (sJ(Y))
      return (0, d6.Clone)($);
    const W = (0, d6.Clone)($);
    for (let X of Y)
      switch (X.type) {
        case "insert": {
          T6.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "update": {
          T6.ValuePointer.Set(W, X.path, X.value);
          break;
        }
        case "delete": {
          T6.ValuePointer.Delete(W, X.path);
          break;
        }
      }
    return W;
  };
  Object.defineProperty(SY, "__esModule", { value: true });
  SY.Patch = SY.Diff = SY.ValueDeltaUnableToDiffUnknownValue = SY.ValueDeltaObjectWithSymbolKeyError = SY.Edit = SY.Delete = SY.Update = SY.Insert = undefined;
  var E0 = x0(), i0 = g0(), T6 = f$(), d6 = n1();
  SY.Insert = i0.Type.Object({ type: i0.Type.Literal("insert"), path: i0.Type.String(), value: i0.Type.Unknown() });
  SY.Update = i0.Type.Object({ type: i0.Type.Literal("update"), path: i0.Type.String(), value: i0.Type.Unknown() });
  SY.Delete = i0.Type.Object({ type: i0.Type.Literal("delete"), path: i0.Type.String() });
  SY.Edit = i0.Type.Union([SY.Insert, SY.Update, SY.Delete]);

  class o1 extends Error {
    constructor($) {
      super("Cannot diff objects with symbol keys");
      this.key = $;
    }
  }
  SY.ValueDeltaObjectWithSymbolKeyError = o1;

  class y6 extends Error {
    constructor($) {
      super("Unable to create diff edits for unknown value");
      this.value = $;
    }
  }
  SY.ValueDeltaUnableToDiffUnknownValue = y6;
  SY.Diff = lJ;
  SY.Patch = rJ;
});
var EY = z0((GY) => {
  var WQ = function($, Y, W, X) {
    if (!(0, T0.IsPlainObject)(W))
      d$.ValuePointer.Set($, Y, (0, p6.Clone)(X));
    else {
      const Z = Object.keys(W), J = Object.keys(X);
      for (let Q of Z)
        if (!J.includes(Q))
          delete W[Q];
      for (let Q of J)
        if (!Z.includes(Q))
          W[Q] = null;
      for (let Q of J)
        u6($, `${Y}/${Q}`, W[Q], X[Q]);
    }
  }, XQ = function($, Y, W, X) {
    if (!(0, T0.IsArray)(W))
      d$.ValuePointer.Set($, Y, (0, p6.Clone)(X));
    else {
      for (let Z = 0;Z < X.length; Z++)
        u6($, `${Y}/${Z}`, W[Z], X[Z]);
      W.splice(X.length);
    }
  }, ZQ = function($, Y, W, X) {
    if ((0, T0.IsTypedArray)(W) && W.length === X.length)
      for (let Z = 0;Z < W.length; Z++)
        W[Z] = X[Z];
    else
      d$.ValuePointer.Set($, Y, (0, p6.Clone)(X));
  }, JQ = function($, Y, W, X) {
    if (W === X)
      return;
    d$.ValuePointer.Set($, Y, X);
  }, u6 = function($, Y, W, X) {
    if ((0, T0.IsArray)(X))
      return XQ($, Y, W, X);
    if ((0, T0.IsTypedArray)(X))
      return ZQ($, Y, W, X);
    if ((0, T0.IsPlainObject)(X))
      return WQ($, Y, W, X);
    if ((0, T0.IsValueType)(X))
      return JQ($, Y, W, X);
  }, RY = function($) {
    return (0, T0.IsTypedArray)($) || (0, T0.IsValueType)($);
  }, QQ = function($, Y) {
    return (0, T0.IsPlainObject)($) && (0, T0.IsArray)(Y) || (0, T0.IsArray)($) && (0, T0.IsPlainObject)(Y);
  }, zQ = function($, Y) {
    if (RY($) || RY(Y))
      throw new m6;
    if (QQ($, Y))
      throw new i6;
    u6($, "", $, Y);
  };
  Object.defineProperty(GY, "__esModule", { value: true });
  GY.Mutate = GY.ValueMutateInvalidRootMutationError = GY.ValueMutateTypeMismatchError = undefined;
  var T0 = x0(), d$ = f$(), p6 = n1();

  class i6 extends Error {
    constructor() {
      super("Cannot assign due type mismatch of assignable values");
    }
  }
  GY.ValueMutateTypeMismatchError = i6;

  class m6 extends Error {
    constructor() {
      super("Only object and array types can be mutated at the root level");
    }
  }
  GY.ValueMutateInvalidRootMutationError = m6;
  GY.Mutate = zQ;
});
var kY = z0((VY) => {
  var NQ = function($, Y) {
    if (!(0, N1.IsPlainObject)(Y))
      return false;
    const W = [...Object.keys($), ...Object.getOwnPropertySymbols($)], X = [...Object.keys(Y), ...Object.getOwnPropertySymbols(Y)];
    if (W.length !== X.length)
      return false;
    return W.every((Z) => y$($[Z], Y[Z]));
  }, MQ = function($, Y) {
    return (0, N1.IsDate)(Y) && $.getTime() === Y.getTime();
  }, AQ = function($, Y) {
    if (!(0, N1.IsArray)(Y) || $.length !== Y.length)
      return false;
    return $.every((W, X) => y$(W, Y[X]));
  }, UQ = function($, Y) {
    if (!(0, N1.IsTypedArray)(Y) || $.length !== Y.length || Object.getPrototypeOf($).constructor.name !== Object.getPrototypeOf(Y).constructor.name)
      return false;
    return $.every((W, X) => y$(W, Y[X]));
  }, BQ = function($, Y) {
    return $ === Y;
  }, y$ = function($, Y) {
    if ((0, N1.IsPlainObject)($))
      return NQ($, Y);
    if ((0, N1.IsDate)($))
      return MQ($, Y);
    if ((0, N1.IsTypedArray)($))
      return UQ($, Y);
    if ((0, N1.IsArray)($))
      return AQ($, Y);
    if ((0, N1.IsValueType)($))
      return BQ($, Y);
    throw new Error("ValueEquals: Unable to compare value");
  };
  Object.defineProperty(VY, "__esModule", { value: true });
  VY.Equal = undefined;
  var N1 = x0();
  VY.Equal = y$;
});
var M$ = z0((M1) => {
  var FQ = M1 && M1.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), DQ = M1 && M1.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        FQ(Y, $, W);
  };
  Object.defineProperty(M1, "__esModule", { value: true });
  M1.ValueErrorType = undefined;
  var wQ = z$();
  Object.defineProperty(M1, "ValueErrorType", { enumerable: true, get: function() {
    return wQ.ValueErrorType;
  } });
  DQ(G6(), M1);
});
var U$ = z0((fY) => {
  var KQ = function($) {
    return $[I0.Kind] === "Any" || $[I0.Kind] === "Unknown";
  }, r = function($) {
    return $ !== undefined;
  }, PQ = function($, Y, W) {
    return true;
  }, OQ = function($, Y, W) {
    if (!(0, w0.IsArray)(W))
      return false;
    if (r($.minItems) && !(W.length >= $.minItems))
      return false;
    if (r($.maxItems) && !(W.length <= $.maxItems))
      return false;
    if (!W.every((J) => b0($.items, Y, J)))
      return false;
    if ($.uniqueItems === true && !function() {
      const J = new Set;
      for (let Q of W) {
        const z = (0, jQ.Hash)(Q);
        if (J.has(z))
          return false;
        else
          J.add(z);
      }
      return true;
    }())
      return false;
    if (!(r($.contains) || (0, w0.IsNumber)($.minContains) || (0, w0.IsNumber)($.maxContains)))
      return true;
    const X = r($.contains) ? $.contains : I0.Type.Never(), Z = W.reduce((J, Q) => b0(X, Y, Q) ? J + 1 : J, 0);
    if (Z === 0)
      return false;
    if ((0, w0.IsNumber)($.minContains) && Z < $.minContains)
      return false;
    if ((0, w0.IsNumber)($.maxContains) && Z > $.maxContains)
      return false;
    return true;
  }, SQ = function($, Y, W) {
    return (0, w0.IsAsyncIterator)(W);
  }, LQ = function($, Y, W) {
    if (!(0, w0.IsBigInt)(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== BigInt(0))
      return false;
    return true;
  }, CQ = function($, Y, W) {
    return (0, w0.IsBoolean)(W);
  }, IQ = function($, Y, W) {
    return b0($.returns, Y, W.prototype);
  }, bQ = function($, Y, W) {
    if (!(0, w0.IsDate)(W))
      return false;
    if (r($.exclusiveMaximumTimestamp) && !(W.getTime() < $.exclusiveMaximumTimestamp))
      return false;
    if (r($.exclusiveMinimumTimestamp) && !(W.getTime() > $.exclusiveMinimumTimestamp))
      return false;
    if (r($.maximumTimestamp) && !(W.getTime() <= $.maximumTimestamp))
      return false;
    if (r($.minimumTimestamp) && !(W.getTime() >= $.minimumTimestamp))
      return false;
    if (r($.multipleOfTimestamp) && W.getTime() % $.multipleOfTimestamp !== 0)
      return false;
    return true;
  }, RQ = function($, Y, W) {
    return (0, w0.IsFunction)(W);
  }, GQ = function($, Y, W) {
    if (!(0, w0.IsInteger)(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, _Q = function($, Y, W) {
    const X = $.allOf.every((Z) => b0(Z, Y, W));
    if ($.unevaluatedProperties === false) {
      const Z = new RegExp(I0.KeyResolver.ResolvePattern($)), J = Object.getOwnPropertyNames(W).every((Q) => Z.test(Q));
      return X && J;
    } else if (I0.TypeGuard.TSchema($.unevaluatedProperties)) {
      const Z = new RegExp(I0.KeyResolver.ResolvePattern($)), J = Object.getOwnPropertyNames(W).every((Q) => Z.test(Q) || b0($.unevaluatedProperties, Y, W[Q]));
      return X && J;
    } else
      return X;
  }, EQ = function($, Y, W) {
    return (0, w0.IsIterator)(W);
  }, VQ = function($, Y, W) {
    return W === $.const;
  }, xQ = function($, Y, W) {
    return false;
  }, kQ = function($, Y, W) {
    return !b0($.not, Y, W);
  }, gQ = function($, Y, W) {
    return (0, w0.IsNull)(W);
  }, fQ = function($, Y, W) {
    if (!A$.TypeSystemPolicy.IsNumberLike(W))
      return false;
    if (r($.exclusiveMaximum) && !(W < $.exclusiveMaximum))
      return false;
    if (r($.exclusiveMinimum) && !(W > $.exclusiveMinimum))
      return false;
    if (r($.minimum) && !(W >= $.minimum))
      return false;
    if (r($.maximum) && !(W <= $.maximum))
      return false;
    if (r($.multipleOf) && W % $.multipleOf !== 0)
      return false;
    return true;
  }, TQ = function($, Y, W) {
    if (!A$.TypeSystemPolicy.IsObjectLike(W))
      return false;
    if (r($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (r($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const X = Object.getOwnPropertyNames($.properties);
    for (let Z of X) {
      const J = $.properties[Z];
      if ($.required && $.required.includes(Z)) {
        if (!b0(J, Y, W[Z]))
          return false;
        if ((I0.ExtendsUndefined.Check(J) || KQ(J)) && !(Z in W))
          return false;
      } else if (A$.TypeSystemPolicy.IsExactOptionalProperty(W, Z) && !b0(J, Y, W[Z]))
        return false;
    }
    if ($.additionalProperties === false) {
      const Z = Object.getOwnPropertyNames(W);
      if ($.required && $.required.length === X.length && Z.length === X.length)
        return true;
      else
        return Z.every((J) => X.includes(J));
    } else if (typeof $.additionalProperties === "object")
      return Object.getOwnPropertyNames(W).every((J) => X.includes(J) || b0($.additionalProperties, Y, W[J]));
    else
      return true;
  }, dQ = function($, Y, W) {
    return (0, w0.IsPromise)(W);
  }, yQ = function($, Y, W) {
    if (!A$.TypeSystemPolicy.IsRecordLike(W))
      return false;
    if (r($.minProperties) && !(Object.getOwnPropertyNames(W).length >= $.minProperties))
      return false;
    if (r($.maxProperties) && !(Object.getOwnPropertyNames(W).length <= $.maxProperties))
      return false;
    const [X, Z] = Object.entries($.patternProperties)[0], J = new RegExp(X), Q = Object.entries(W).every(([F, D]) => {
      return J.test(F) ? b0(Z, Y, D) : true;
    }), z = typeof $.additionalProperties === "object" ? Object.entries(W).every(([F, D]) => {
      return !J.test(F) ? b0($.additionalProperties, Y, D) : true;
    }) : true, U = $.additionalProperties === false ? Object.getOwnPropertyNames(W).every((F) => {
      return J.test(F);
    }) : true;
    return Q && z && U;
  }, vQ = function($, Y, W) {
    return b0((0, gY.Deref)($, Y), Y, W);
  }, pQ = function($, Y, W) {
    if (!(0, w0.IsString)(W))
      return false;
    if (r($.minLength)) {
      if (!(W.length >= $.minLength))
        return false;
    }
    if (r($.maxLength)) {
      if (!(W.length <= $.maxLength))
        return false;
    }
    if (r($.pattern)) {
      if (!new RegExp($.pattern).test(W))
        return false;
    }
    if (r($.format)) {
      if (!I0.FormatRegistry.Has($.format))
        return false;
      return I0.FormatRegistry.Get($.format)(W);
    }
    return true;
  }, iQ = function($, Y, W) {
    return (0, w0.IsSymbol)(W);
  }, mQ = function($, Y, W) {
    return (0, w0.IsString)(W) && new RegExp($.pattern).test(W);
  }, uQ = function($, Y, W) {
    return b0((0, gY.Deref)($, Y), Y, W);
  }, hQ = function($, Y, W) {
    if (!(0, w0.IsArray)(W))
      return false;
    if ($.items === undefined && W.length !== 0)
      return false;
    if (W.length !== $.maxItems)
      return false;
    if (!$.items)
      return true;
    for (let X = 0;X < $.items.length; X++)
      if (!b0($.items[X], Y, W[X]))
        return false;
    return true;
  }, nQ = function($, Y, W) {
    return (0, w0.IsUndefined)(W);
  }, oQ = function($, Y, W) {
    return $.anyOf.some((X) => b0(X, Y, W));
  }, cQ = function($, Y, W) {
    if (!(0, w0.IsUint8Array)(W))
      return false;
    if (r($.maxByteLength) && !(W.length <= $.maxByteLength))
      return false;
    if (r($.minByteLength) && !(W.length >= $.minByteLength))
      return false;
    return true;
  }, lQ = function($, Y, W) {
    return true;
  }, tQ = function($, Y, W) {
    return A$.TypeSystemPolicy.IsVoidLike(W);
  }, sQ = function($, Y, W) {
    if (!I0.TypeRegistry.Has($[I0.Kind]))
      return false;
    return I0.TypeRegistry.Get($[I0.Kind])($, W);
  }, b0 = function($, Y, W) {
    const X = r($.$id) ? [...Y, $] : Y, Z = $;
    switch (Z[I0.Kind]) {
      case "Any":
        return PQ(Z, X, W);
      case "Array":
        return OQ(Z, X, W);
      case "AsyncIterator":
        return SQ(Z, X, W);
      case "BigInt":
        return LQ(Z, X, W);
      case "Boolean":
        return CQ(Z, X, W);
      case "Constructor":
        return IQ(Z, X, W);
      case "Date":
        return bQ(Z, X, W);
      case "Function":
        return RQ(Z, X, W);
      case "Integer":
        return GQ(Z, X, W);
      case "Intersect":
        return _Q(Z, X, W);
      case "Iterator":
        return EQ(Z, X, W);
      case "Literal":
        return VQ(Z, X, W);
      case "Never":
        return xQ(Z, X, W);
      case "Not":
        return kQ(Z, X, W);
      case "Null":
        return gQ(Z, X, W);
      case "Number":
        return fQ(Z, X, W);
      case "Object":
        return TQ(Z, X, W);
      case "Promise":
        return dQ(Z, X, W);
      case "Record":
        return yQ(Z, X, W);
      case "Ref":
        return vQ(Z, X, W);
      case "String":
        return pQ(Z, X, W);
      case "Symbol":
        return iQ(Z, X, W);
      case "TemplateLiteral":
        return mQ(Z, X, W);
      case "This":
        return uQ(Z, X, W);
      case "Tuple":
        return hQ(Z, X, W);
      case "Undefined":
        return nQ(Z, X, W);
      case "Union":
        return oQ(Z, X, W);
      case "Uint8Array":
        return cQ(Z, X, W);
      case "Unknown":
        return lQ(Z, X, W);
      case "Void":
        return tQ(Z, X, W);
      default:
        if (!I0.TypeRegistry.Has(Z[I0.Kind]))
          throw new h6(Z);
        return sQ(Z, X, W);
    }
  }, rQ = function(...$) {
    return $.length === 3 ? b0($[0], $[1], $[2]) : b0($[0], [], $[1]);
  };
  Object.defineProperty(fY, "__esModule", { value: true });
  fY.Check = fY.ValueCheckUnknownTypeError = undefined;
  var w0 = x0(), A$ = M$(), gY = K1(), jQ = H$(), I0 = g0();

  class h6 extends I0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  fY.ValueCheckUnknownTypeError = h6;
  fY.Check = rQ;
});
var r6 = z0((pY) => {
  var $4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, Y4 = function($, Y) {
    if ($.uniqueItems === true && !(0, a.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the uniqueItems constraint requires a default value");
    else if (("contains" in $) && !(0, a.HasPropertyKey)($, "default"))
      throw new Error("ValueCreate.Array: Array with the contains constraint requires a default value");
    else if ("default" in $)
      return $.default;
    else if ($.minItems !== undefined)
      return Array.from({ length: $.minItems }).map((W) => {
        return d0($.items, Y);
      });
    else
      return [];
  }, W4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return async function* () {
      }();
  }, X4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return BigInt(0);
  }, Z4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return false;
  }, J4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = d0($.returns, Y);
      if (typeof W === "object" && !Array.isArray(W))
        return class {
          constructor() {
            for (let [X, Z] of Object.entries(W)) {
              const J = this;
              J[X] = Z;
            }
          }
        };
      else
        return class {
        };
    }
  }, Q4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimumTimestamp !== undefined)
      return new Date($.minimumTimestamp);
    else
      return new Date(0);
  }, z4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return () => d0($.returns, Y);
  }, H4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, q4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = $.allOf.reduce((X, Z) => {
        const J = d0(Z, Y);
        return typeof J === "object" ? { ...X, ...J } : J;
      }, {});
      if (!(0, eQ.Check)($, Y, W))
        throw new l6($);
      return W;
    }
  }, N4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return function* () {
      }();
  }, M4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return $.const;
  }, A4 = function($, Y) {
    throw new o6($);
  }, U4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new c6($);
  }, B4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return null;
  }, F4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minimum !== undefined)
      return $.minimum;
    else
      return 0;
  }, D4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else {
      const W = new Set($.required);
      return $.default || Object.entries($.properties).reduce((X, [Z, J]) => {
        return W.has(Z) ? { ...X, [Z]: d0(J, Y) } : { ...X };
      }, {});
    }
  }, w4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return Promise.resolve(d0($.item, Y));
  }, j4 = function($, Y) {
    const [W, X] = Object.entries($.patternProperties)[0];
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if (!(W === k0.PatternStringExact || W === k0.PatternNumberExact))
      return W.slice(1, W.length - 1).split("|").reduce((J, Q) => {
        return { ...J, [Q]: d0(X, Y) };
      }, {});
    else
      return {};
  }, K4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return d0((0, yY.Deref)($, Y), Y);
  }, P4 = function($, Y) {
    if ($.pattern !== undefined)
      if (!(0, a.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with patterns must specify a default value");
      else
        return $.default;
    else if ($.format !== undefined)
      if (!(0, a.HasPropertyKey)($, "default"))
        throw new Error("ValueCreate.String: String types with formats must specify a default value");
      else
        return $.default;
    else if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minLength !== undefined)
      return Array.from({ length: $.minLength }).map(() => ".").join("");
    else
      return "";
  }, O4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ("value" in $)
      return Symbol.for($.value);
    else
      return Symbol();
  }, S4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    const W = k0.TemplateLiteralParser.ParseExact($.pattern);
    if (!k0.TemplateLiteralFinite.Check(W))
      throw new t6($);
    return k0.TemplateLiteralGenerator.Generate(W).next().value;
  }, L4 = function($, Y) {
    if (vY++ > dY)
      throw new s6($, dY);
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return d0((0, yY.Deref)($, Y), Y);
  }, C4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    if ($.items === undefined)
      return [];
    else
      return Array.from({ length: $.minItems }).map((W, X) => d0($.items[X], Y));
  }, I4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, b4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.anyOf.length === 0)
      throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
    else
      return d0($.anyOf[0], Y);
  }, R4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else if ($.minByteLength !== undefined)
      return new Uint8Array($.minByteLength);
    else
      return new Uint8Array(0);
  }, G4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return {};
  }, _4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      return;
  }, E4 = function($, Y) {
    if ((0, a.HasPropertyKey)($, "default"))
      return $.default;
    else
      throw new Error("User defined types must specify a default value");
  }, d0 = function($, Y) {
    const W = (0, a.IsString)($.$id) ? [...Y, $] : Y, X = $;
    switch (X[k0.Kind]) {
      case "Any":
        return $4(X, W);
      case "Array":
        return Y4(X, W);
      case "AsyncIterator":
        return W4(X, W);
      case "BigInt":
        return X4(X, W);
      case "Boolean":
        return Z4(X, W);
      case "Constructor":
        return J4(X, W);
      case "Date":
        return Q4(X, W);
      case "Function":
        return z4(X, W);
      case "Integer":
        return H4(X, W);
      case "Intersect":
        return q4(X, W);
      case "Iterator":
        return N4(X, W);
      case "Literal":
        return M4(X, W);
      case "Never":
        return A4(X, W);
      case "Not":
        return U4(X, W);
      case "Null":
        return B4(X, W);
      case "Number":
        return F4(X, W);
      case "Object":
        return D4(X, W);
      case "Promise":
        return w4(X, W);
      case "Record":
        return j4(X, W);
      case "Ref":
        return K4(X, W);
      case "String":
        return P4(X, W);
      case "Symbol":
        return O4(X, W);
      case "TemplateLiteral":
        return S4(X, W);
      case "This":
        return L4(X, W);
      case "Tuple":
        return C4(X, W);
      case "Undefined":
        return I4(X, W);
      case "Union":
        return b4(X, W);
      case "Uint8Array":
        return R4(X, W);
      case "Unknown":
        return G4(X, W);
      case "Void":
        return _4(X, W);
      default:
        if (!k0.TypeRegistry.Has(X[k0.Kind]))
          throw new n6(X);
        return E4(X, W);
    }
  }, V4 = function(...$) {
    return vY = 0, $.length === 2 ? d0($[0], $[1]) : d0($[0], []);
  };
  Object.defineProperty(pY, "__esModule", { value: true });
  pY.Create = pY.ValueCreateRecursiveInstantiationError = pY.ValueCreateTempateLiteralTypeError = pY.ValueCreateIntersectTypeError = pY.ValueCreateNotTypeError = pY.ValueCreateNeverTypeError = pY.ValueCreateUnknownTypeError = undefined;
  var a = x0(), eQ = U$(), yY = K1(), k0 = g0();

  class n6 extends k0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  pY.ValueCreateUnknownTypeError = n6;

  class o6 extends k0.TypeBoxError {
    constructor($) {
      super("Never types cannot be created");
      this.schema = $;
    }
  }
  pY.ValueCreateNeverTypeError = o6;

  class c6 extends k0.TypeBoxError {
    constructor($) {
      super("Not types must have a default value");
      this.schema = $;
    }
  }
  pY.ValueCreateNotTypeError = c6;

  class l6 extends k0.TypeBoxError {
    constructor($) {
      super("Intersect produced invalid value. Consider using a default value.");
      this.schema = $;
    }
  }
  pY.ValueCreateIntersectTypeError = l6;

  class t6 extends k0.TypeBoxError {
    constructor($) {
      super("Can only create template literal values from patterns that produce finite sequences. Consider using a default value.");
      this.schema = $;
    }
  }
  pY.ValueCreateTempateLiteralTypeError = t6;

  class s6 extends k0.TypeBoxError {
    constructor($, Y) {
      super("Value cannot be created as recursive type may produce value of infinite size. Consider using a default.");
      this.schema = $, this.recursiveMaxDepth = Y;
    }
  }
  pY.ValueCreateRecursiveInstantiationError = s6;
  var dY = 512, vY = 0;
  pY.Create = V4;
});
var lY = z0((oY) => {
  var hY = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? (0, c1.Clone)(W) : (0, U1.Create)($, Y);
  }, e6 = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? W : (0, U1.Create)($, Y);
  }, y4 = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, c1.Clone)(W);
    const X = (0, P1.IsArray)(W) ? (0, c1.Clone)(W) : (0, U1.Create)($, Y), Z = (0, P1.IsNumber)($.minItems) && X.length < $.minItems ? [...X, ...Array.from({ length: $.minItems - X.length }, () => null)] : X, Q = ((0, P1.IsNumber)($.maxItems) && Z.length > $.maxItems ? Z.slice(0, $.maxItems) : Z).map((U) => Z1($.items, Y, U));
    if ($.uniqueItems !== true)
      return Q;
    const z = [...new Set(Q)];
    if (!(0, m0.Check)($, Y, z))
      throw new $8($, z);
    return z;
  }, v4 = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, U1.Create)($, Y);
    const X = new Set($.returns.required || []), Z = function() {
    };
    for (let [J, Q] of Object.entries($.returns.properties)) {
      if (!X.has(J) && W.prototype[J] === undefined)
        continue;
      Z.prototype[J] = Z1(Q, Y, W.prototype[J]);
    }
    return Z;
  }, p4 = function($, Y, W) {
    const X = (0, U1.Create)($, Y), Z = (0, P1.IsPlainObject)(X) && (0, P1.IsPlainObject)(W) ? { ...X, ...W } : W;
    return (0, m0.Check)($, Y, Z) ? Z : (0, U1.Create)($, Y);
  }, i4 = function($, Y, W) {
    throw new Y8($);
  }, m4 = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return W;
    if (W === null || typeof W !== "object")
      return (0, U1.Create)($, Y);
    const X = new Set($.required || []), Z = {};
    for (let [J, Q] of Object.entries($.properties)) {
      if (!X.has(J) && W[J] === undefined)
        continue;
      Z[J] = Z1(Q, Y, W[J]);
    }
    if (typeof $.additionalProperties === "object") {
      const J = Object.getOwnPropertyNames($.properties);
      for (let Q of Object.getOwnPropertyNames(W)) {
        if (J.includes(Q))
          continue;
        Z[Q] = Z1($.additionalProperties, Y, W[Q]);
      }
    }
    return Z;
  }, u4 = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, c1.Clone)(W);
    if (W === null || typeof W !== "object" || Array.isArray(W) || W instanceof Date)
      return (0, U1.Create)($, Y);
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], J = {};
    for (let [Q, z] of Object.entries(W))
      J[Q] = Z1(Z, Y, z);
    return J;
  }, h4 = function($, Y, W) {
    return Z1((0, mY.Deref)($, Y), Y, W);
  }, n4 = function($, Y, W) {
    return Z1((0, mY.Deref)($, Y), Y, W);
  }, o4 = function($, Y, W) {
    if ((0, m0.Check)($, Y, W))
      return (0, c1.Clone)(W);
    if (!(0, P1.IsArray)(W))
      return (0, U1.Create)($, Y);
    if ($.items === undefined)
      return [];
    return $.items.map((X, Z) => Z1(X, Y, W[Z]));
  }, c4 = function($, Y, W) {
    return (0, m0.Check)($, Y, W) ? (0, c1.Clone)(W) : a6.Create($, Y, W);
  }, Z1 = function($, Y, W) {
    const X = (0, P1.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[A1.Kind]) {
      case "Array":
        return y4(Z, X, W);
      case "Constructor":
        return v4(Z, X, W);
      case "Intersect":
        return p4(Z, X, W);
      case "Never":
        return i4(Z, X, W);
      case "Object":
        return m4(Z, X, W);
      case "Record":
        return u4(Z, X, W);
      case "Ref":
        return h4(Z, X, W);
      case "This":
        return n4(Z, X, W);
      case "Tuple":
        return o4(Z, X, W);
      case "Union":
        return c4(Z, X, W);
      case "Date":
      case "Symbol":
      case "Uint8Array":
        return hY($, Y, W);
      case "Any":
      case "AsyncIterator":
      case "BigInt":
      case "Boolean":
      case "Function":
      case "Integer":
      case "Iterator":
      case "Literal":
      case "Not":
      case "Null":
      case "Number":
      case "Promise":
      case "String":
      case "TemplateLiteral":
      case "Undefined":
      case "Unknown":
      case "Void":
        return e6(Z, X, W);
      default:
        if (!A1.TypeRegistry.Has(Z[A1.Kind]))
          throw new W8(Z);
        return e6(Z, X, W);
    }
  }, nY = function(...$) {
    return $.length === 3 ? Z1($[0], $[1], $[2]) : Z1($[0], [], $[1]);
  };
  Object.defineProperty(oY, "__esModule", { value: true });
  oY.Cast = oY.Default = oY.DefaultClone = oY.ValueCastUnknownTypeError = oY.ValueCastRecursiveTypeError = oY.ValueCastNeverTypeError = oY.ValueCastArrayUniqueItemsTypeError = undefined;
  var P1 = x0(), U1 = r6(), m0 = U$(), c1 = n1(), mY = K1(), A1 = g0();

  class $8 extends A1.TypeBoxError {
    constructor($, Y) {
      super("Array cast produced invalid data due to uniqueItems constraint");
      this.schema = $, this.value = Y;
    }
  }
  oY.ValueCastArrayUniqueItemsTypeError = $8;

  class Y8 extends A1.TypeBoxError {
    constructor($) {
      super("Never types cannot be cast");
      this.schema = $;
    }
  }
  oY.ValueCastNeverTypeError = Y8;

  class uY extends A1.TypeBoxError {
    constructor($) {
      super("Cannot cast recursive schemas");
      this.schema = $;
    }
  }
  oY.ValueCastRecursiveTypeError = uY;

  class W8 extends A1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  oY.ValueCastUnknownTypeError = W8;
  var a6;
  (function($) {
    function Y(Z, J, Q) {
      if (Z[A1.Kind] === "Object" && typeof Q === "object" && !(0, P1.IsNull)(Q)) {
        const z = Z, U = Object.getOwnPropertyNames(Q), F = Object.entries(z.properties), [D, S] = [1 / F.length, F.length];
        return F.reduce((b, [j, M]) => {
          const P = M[A1.Kind] === "Literal" && M.const === Q[j] ? S : 0, O = (0, m0.Check)(M, J, Q[j]) ? D : 0, A = U.includes(j) ? D : 0;
          return b + (P + O + A);
        }, 0);
      } else
        return (0, m0.Check)(Z, J, Q) ? 1 : 0;
    }
    function W(Z, J, Q) {
      let [z, U] = [Z.anyOf[0], 0];
      for (let F of Z.anyOf) {
        const D = Y(F, J, Q);
        if (D > U)
          z = F, U = D;
      }
      return z;
    }
    function X(Z, J, Q) {
      if ("default" in Z)
        return Z.default;
      else {
        const z = W(Z, J, Q);
        return nY(z, J, Q);
      }
    }
    $.Create = X;
  })(a6 || (a6 = {}));
  oY.DefaultClone = hY;
  oY.Default = e6;
  oY.Cast = nY;
});
var YW = z0((eY) => {
  var v$ = function($) {
    return (0, Z0.IsString)($) && !isNaN($) && !isNaN(parseFloat($));
  }, W9 = function($) {
    return (0, Z0.IsBigInt)($) || (0, Z0.IsBoolean)($) || (0, Z0.IsNumber)($);
  }, B$ = function($) {
    return $ === true || (0, Z0.IsNumber)($) && $ === 1 || (0, Z0.IsBigInt)($) && $ === BigInt("1") || (0, Z0.IsString)($) && ($.toLowerCase() === "true" || $ === "1");
  }, F$ = function($) {
    return $ === false || (0, Z0.IsNumber)($) && ($ === 0 || Object.is($, -0)) || (0, Z0.IsBigInt)($) && $ === BigInt("0") || (0, Z0.IsString)($) && ($.toLowerCase() === "false" || $ === "0" || $ === "-0");
  }, X9 = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, Z9 = function($) {
    return (0, Z0.IsString)($) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, J9 = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test($);
  }, Q9 = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test($);
  }, z9 = function($) {
    return (0, Z0.IsString)($) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test($);
  }, H9 = function($, Y) {
    const W = rY($);
    return W === Y ? W : $;
  }, q9 = function($, Y) {
    const W = aY($);
    return W === Y ? W : $;
  }, N9 = function($, Y) {
    const W = sY($);
    return W === Y ? W : $;
  }, M9 = function($, Y) {
    if (typeof $.const === "string")
      return H9(Y, $.const);
    else if (typeof $.const === "number")
      return q9(Y, $.const);
    else if (typeof $.const === "boolean")
      return N9(Y, $.const);
    else
      return (0, $9.Clone)(Y);
  }, sY = function($) {
    return B$($) ? true : F$($) ? false : $;
  }, A9 = function($) {
    return v$($) ? BigInt(parseInt($)) : (0, Z0.IsNumber)($) ? BigInt($ | 0) : F$($) ? BigInt(0) : B$($) ? BigInt(1) : $;
  }, rY = function($) {
    return W9($) ? $.toString() : (0, Z0.IsSymbol)($) && $.description !== undefined ? $.description.toString() : $;
  }, aY = function($) {
    return v$($) ? parseFloat($) : B$($) ? 1 : F$($) ? 0 : $;
  }, U9 = function($) {
    return v$($) ? parseInt($) : (0, Z0.IsNumber)($) ? $ | 0 : B$($) ? 1 : F$($) ? 0 : $;
  }, B9 = function($) {
    return (0, Z0.IsString)($) && $.toLowerCase() === "null" ? null : $;
  }, F9 = function($) {
    return (0, Z0.IsString)($) && $ === "undefined" ? undefined : $;
  }, D9 = function($) {
    return (0, Z0.IsDate)($) ? $ : (0, Z0.IsNumber)($) ? new Date($) : B$($) ? new Date(1) : F$($) ? new Date(0) : v$($) ? new Date(parseInt($)) : Z9($) ? new Date(`1970-01-01T${$}.000Z`) : X9($) ? new Date(`1970-01-01T${$}`) : Q9($) ? new Date(`${$}.000Z`) : J9($) ? new Date($) : z9($) ? new Date(`${$}T00:00:00.000Z`) : $;
  }, X8 = function($) {
    return $;
  }, w9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W))
      return W.map((X) => l0($.items, Y, X));
    return W;
  }, j9 = function($, Y, W) {
    return A9(W);
  }, K9 = function($, Y, W) {
    return sY(W);
  }, P9 = function($, Y, W) {
    return D9(W);
  }, O9 = function($, Y, W) {
    return U9(W);
  }, S9 = function($, Y, W) {
    return $.allOf.every((X) => l1.TypeGuard.TObject(X)) ? l0(l1.Type.Composite($.allOf), Y, W) : l0($.allOf[0], Y, W);
  }, L9 = function($, Y, W) {
    return M9($, W);
  }, C9 = function($, Y, W) {
    return B9(W);
  }, I9 = function($, Y, W) {
    return aY(W);
  }, b9 = function($, Y, W) {
    if ((0, Z0.IsObject)(W))
      return Object.getOwnPropertyNames($.properties).reduce((X, Z) => {
        return W[Z] !== undefined ? { ...X, [Z]: l0($.properties[Z], Y, W[Z]) } : { ...X };
      }, W);
    return W;
  }, R9 = function($, Y, W) {
    const X = Object.getOwnPropertyNames($.patternProperties)[0], Z = $.patternProperties[X], J = {};
    for (let [Q, z] of Object.entries(W))
      J[Q] = l0(Z, Y, z);
    return J;
  }, G9 = function($, Y, W) {
    return l0((0, tY.Deref)($, Y), Y, W);
  }, _9 = function($, Y, W) {
    return rY(W);
  }, E9 = function($, Y, W) {
    return (0, Z0.IsString)(W) || (0, Z0.IsNumber)(W) ? Symbol(W) : W;
  }, V9 = function($, Y, W) {
    return l0((0, tY.Deref)($, Y), Y, W);
  }, x9 = function($, Y, W) {
    if ((0, Z0.IsArray)(W) && !(0, Z0.IsUndefined)($.items))
      return W.map((X, Z) => {
        return Z < $.items.length ? l0($.items[Z], Y, X) : X;
      });
    return W;
  }, k9 = function($, Y, W) {
    return F9(W);
  }, g9 = function($, Y, W) {
    for (let X of $.anyOf) {
      const Z = l0(X, Y, W);
      if ((0, Y9.Check)(X, Y, Z))
        return Z;
    }
    return W;
  }, l0 = function($, Y, W) {
    const X = (0, Z0.IsString)($.$id) ? [...Y, $] : Y, Z = $;
    switch ($[l1.Kind]) {
      case "Array":
        return w9(Z, X, W);
      case "BigInt":
        return j9(Z, X, W);
      case "Boolean":
        return K9(Z, X, W);
      case "Date":
        return P9(Z, X, W);
      case "Integer":
        return O9(Z, X, W);
      case "Intersect":
        return S9(Z, X, W);
      case "Literal":
        return L9(Z, X, W);
      case "Null":
        return C9(Z, X, W);
      case "Number":
        return I9(Z, X, W);
      case "Object":
        return b9(Z, X, W);
      case "Record":
        return R9(Z, X, W);
      case "Ref":
        return G9(Z, X, W);
      case "String":
        return _9(Z, X, W);
      case "Symbol":
        return E9(Z, X, W);
      case "This":
        return V9(Z, X, W);
      case "Tuple":
        return x9(Z, X, W);
      case "Undefined":
        return k9(Z, X, W);
      case "Union":
        return g9(Z, X, W);
      case "Any":
      case "AsyncIterator":
      case "Constructor":
      case "Function":
      case "Iterator":
      case "Never":
      case "Promise":
      case "TemplateLiteral":
      case "Uint8Array":
      case "Unknown":
      case "Void":
        return X8(W);
      default:
        if (!l1.TypeRegistry.Has(Z[l1.Kind]))
          throw new Z8(Z);
        return X8(W);
    }
  }, f9 = function(...$) {
    return $.length === 3 ? l0($[0], $[1], $[2]) : l0($[0], [], $[1]);
  };
  Object.defineProperty(eY, "__esModule", { value: true });
  eY.Convert = eY.Default = eY.ValueConvertUnknownTypeError = undefined;
  var Z0 = x0(), $9 = n1(), Y9 = U$(), tY = K1(), l1 = g0();

  class Z8 extends l1.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  eY.ValueConvertUnknownTypeError = Z8;
  eY.Default = X8;
  eY.Convert = f9;
});
var z8 = z0((zW) => {
  Object.defineProperty(zW, "__esModule", { value: true });
  zW.EncodeTransform = zW.DecodeTransform = zW.HasTransform = zW.TransformEncodeError = zW.TransformDecodeError = zW.TransformEncodeCheckError = zW.TransformDecodeCheckError = zW.TransformUnknownTypeError = undefined;
  var t0 = x0(), t1 = K1(), n = g0();

  class D$ extends n.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  zW.TransformUnknownTypeError = D$;

  class JW extends n.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to decode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  zW.TransformDecodeCheckError = JW;

  class QW extends n.TypeBoxError {
    constructor($, Y, W) {
      super("Unable to encode due to invalid value");
      this.schema = $, this.value = Y, this.error = W;
    }
  }
  zW.TransformEncodeCheckError = QW;

  class J8 extends n.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  zW.TransformDecodeError = J8;

  class Q8 extends n.TypeBoxError {
    constructor($, Y, W) {
      super(`${W instanceof Error ? W.message : "Unknown error"}`);
      this.schema = $, this.value = Y;
    }
  }
  zW.TransformEncodeError = Q8;
  var WW;
  (function($) {
    function Y(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.items, I);
    }
    function W(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.items, I);
    }
    function X(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.returns, I) || w.parameters.some((G) => P(G, I));
    }
    function Z(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.returns, I) || w.parameters.some((G) => P(G, I));
    }
    function J(w, I) {
      return n.TypeGuard.TTransform(w) || n.TypeGuard.TTransform(w.unevaluatedProperties) || w.allOf.some((G) => P(G, I));
    }
    function Q(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.items, I);
    }
    function z(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.not, I);
    }
    function U(w, I) {
      return n.TypeGuard.TTransform(w) || Object.values(w.properties).some((G) => P(G, I)) || n.TypeGuard.TSchema(w.additionalProperties) && P(w.additionalProperties, I);
    }
    function F(w, I) {
      return n.TypeGuard.TTransform(w) || P(w.item, I);
    }
    function D(w, I) {
      const G = Object.getOwnPropertyNames(w.patternProperties)[0], k = w.patternProperties[G];
      return n.TypeGuard.TTransform(w) || P(k, I) || n.TypeGuard.TSchema(w.additionalProperties) && n.TypeGuard.TTransform(w.additionalProperties);
    }
    function S(w, I) {
      if (n.TypeGuard.TTransform(w))
        return true;
      return P((0, t1.Deref)(w, I), I);
    }
    function b(w, I) {
      if (n.TypeGuard.TTransform(w))
        return true;
      return P((0, t1.Deref)(w, I), I);
    }
    function j(w, I) {
      return n.TypeGuard.TTransform(w) || n.TypeGuard.TSchema(w.items) && w.items.some((G) => P(G, I));
    }
    function M(w, I) {
      return n.TypeGuard.TTransform(w) || w.anyOf.some((G) => P(G, I));
    }
    function P(w, I) {
      const G = (0, t0.IsString)(w.$id) ? [...I, w] : I, k = w;
      if (w.$id && O.has(w.$id))
        return false;
      if (w.$id)
        O.add(w.$id);
      switch (w[n.Kind]) {
        case "Array":
          return Y(k, G);
        case "AsyncIterator":
          return W(k, G);
        case "Constructor":
          return X(k, G);
        case "Function":
          return Z(k, G);
        case "Intersect":
          return J(k, G);
        case "Iterator":
          return Q(k, G);
        case "Not":
          return z(k, G);
        case "Object":
          return U(k, G);
        case "Promise":
          return F(k, G);
        case "Record":
          return D(k, G);
        case "Ref":
          return S(k, G);
        case "This":
          return b(k, G);
        case "Tuple":
          return j(k, G);
        case "Union":
          return M(k, G);
        case "Any":
        case "BigInt":
        case "Boolean":
        case "Date":
        case "Integer":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return n.TypeGuard.TTransform(w);
        default:
          if (!n.TypeRegistry.Has(k[n.Kind]))
            throw new D$(k);
          return n.TypeGuard.TTransform(w);
      }
    }
    const O = new Set;
    function A(w, I) {
      return O.clear(), P(w, I);
    }
    $.Has = A;
  })(WW || (zW.HasTransform = WW = {}));
  var XW;
  (function($) {
    function Y(M, P) {
      try {
        return n.TypeGuard.TTransform(M) ? M[n.Transform].Decode(P) : P;
      } catch (O) {
        throw new J8(M, P, O);
      }
    }
    function W(M, P, O) {
      const A = O.map((w) => S(M.items, P, w));
      return Y(M, A);
    }
    function X(M, P, O) {
      if (!(0, t0.IsPlainObject)(O) || (0, t0.IsValueType)(O))
        return Y(M, O);
      const A = n.KeyResolver.ResolveKeys(M, { includePatterns: false }), w = Object.entries(O).reduce((G, [k, _]) => {
        return !A.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(n.IndexedAccessor.Resolve(M, [k]), _) };
      }, {});
      if (!n.TypeGuard.TTransform(M.unevaluatedProperties))
        return Y(M, w);
      const I = Object.entries(w).reduce((G, [k, _]) => {
        return A.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(M.unevaluatedProperties, _) };
      }, {});
      return Y(M, I);
    }
    function Z(M, P, O) {
      const A = S(M.not, P, O);
      return Y(M, A);
    }
    function J(M, P, O) {
      if (!(0, t0.IsPlainObject)(O))
        return Y(M, O);
      const A = Object.entries(O).reduce((G, [k, _]) => {
        return !(k in M.properties) ? { ...G, [k]: _ } : { ...G, [k]: S(M.properties[k], P, _) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return Y(M, A);
      const w = M.additionalProperties, I = Object.entries(A).reduce((G, [k, _]) => {
        return k in M.properties ? { ...G, [k]: _ } : { ...G, [k]: S(w, P, _) };
      }, {});
      return Y(M, I);
    }
    function Q(M, P, O) {
      if (!(0, t0.IsPlainObject)(O))
        return Y(M, O);
      const A = Object.getOwnPropertyNames(M.patternProperties)[0], w = M.patternProperties[A], I = new RegExp(A), G = Object.entries(O).reduce((J0, [Y0, A0]) => {
        return !I.test(Y0) ? { ...J0, [Y0]: A0 } : { ...J0, [Y0]: S(w, P, A0) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return Y(M, G);
      const k = M.additionalProperties, _ = Object.entries(G).reduce((J0, [Y0, A0]) => {
        return I.test(Y0) ? { ...J0, [Y0]: A0 } : { ...J0, [Y0]: S(k, P, A0) };
      }, {});
      return Y(M, _);
    }
    function z(M, P, O) {
      const A = (0, t1.Deref)(M, P), w = S(A, P, O);
      return Y(M, w);
    }
    function U(M, P, O) {
      const A = (0, t1.Deref)(M, P), w = S(A, P, O);
      return Y(M, w);
    }
    function F(M, P, O) {
      const A = (0, t0.IsArray)(M.items) ? M.items.map((w, I) => S(w, P, O[I])) : [];
      return Y(M, A);
    }
    function D(M, P, O) {
      const A = Y(M, O);
      for (let w of M.anyOf) {
        if (!b(w, P, A))
          continue;
        return S(w, P, A);
      }
      return A;
    }
    function S(M, P, O) {
      const A = typeof M.$id === "string" ? [...P, M] : P, w = M;
      switch (M[n.Kind]) {
        case "Array":
          return W(w, A, O);
        case "Intersect":
          return X(w, A, O);
        case "Not":
          return Z(w, A, O);
        case "Object":
          return J(w, A, O);
        case "Record":
          return Q(w, A, O);
        case "Ref":
          return z(w, A, O);
        case "Symbol":
          return Y(w, O);
        case "This":
          return U(w, A, O);
        case "Tuple":
          return F(w, A, O);
        case "Union":
          return D(w, A, O);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(w, O);
        default:
          if (!n.TypeRegistry.Has(w[n.Kind]))
            throw new D$(w);
          return Y(w, O);
      }
    }
    let b = () => false;
    function j(M, P, O, A) {
      return b = A, S(M, P, O);
    }
    $.Decode = j;
  })(XW || (zW.DecodeTransform = XW = {}));
  var ZW;
  (function($) {
    function Y(M, P) {
      try {
        return n.TypeGuard.TTransform(M) ? M[n.Transform].Encode(P) : P;
      } catch (O) {
        throw new Q8(M, P, O);
      }
    }
    function W(M, P, O) {
      return Y(M, O).map((w) => S(M.items, P, w));
    }
    function X(M, P, O) {
      const A = Y(M, O);
      if (!(0, t0.IsPlainObject)(O) || (0, t0.IsValueType)(O))
        return A;
      const w = n.KeyResolver.ResolveKeys(M, { includePatterns: false }), I = Object.entries(A).reduce((G, [k, _]) => {
        return !w.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(n.IndexedAccessor.Resolve(M, [k]), _) };
      }, {});
      if (!n.TypeGuard.TTransform(M.unevaluatedProperties))
        return Y(M, I);
      return Object.entries(I).reduce((G, [k, _]) => {
        return w.includes(k) ? { ...G, [k]: _ } : { ...G, [k]: Y(M.unevaluatedProperties, _) };
      }, {});
    }
    function Z(M, P, O) {
      const A = Y(M, O);
      return Y(M.not, A);
    }
    function J(M, P, O) {
      const A = Y(M, O);
      if (!(0, t0.IsPlainObject)(O))
        return A;
      const w = Object.entries(A).reduce((G, [k, _]) => {
        return !(k in M.properties) ? { ...G, [k]: _ } : { ...G, [k]: S(M.properties[k], P, _) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return w;
      const I = M.additionalProperties;
      return Object.entries(w).reduce((G, [k, _]) => {
        return k in M.properties ? { ...G, [k]: _ } : { ...G, [k]: S(I, P, _) };
      }, {});
    }
    function Q(M, P, O) {
      const A = Y(M, O);
      if (!(0, t0.IsPlainObject)(O))
        return A;
      const w = Object.getOwnPropertyNames(M.patternProperties)[0], I = M.patternProperties[w], G = new RegExp(w), k = Object.entries(A).reduce((J0, [Y0, A0]) => {
        return !G.test(Y0) ? { ...J0, [Y0]: A0 } : { ...J0, [Y0]: S(I, P, A0) };
      }, {});
      if (!n.TypeGuard.TSchema(M.additionalProperties))
        return Y(M, k);
      const _ = M.additionalProperties;
      return Object.entries(k).reduce((J0, [Y0, A0]) => {
        return G.test(Y0) ? { ...J0, [Y0]: A0 } : { ...J0, [Y0]: S(_, P, A0) };
      }, {});
    }
    function z(M, P, O) {
      const A = (0, t1.Deref)(M, P), w = S(A, P, O);
      return Y(M, w);
    }
    function U(M, P, O) {
      const A = (0, t1.Deref)(M, P), w = S(A, P, O);
      return Y(M, w);
    }
    function F(M, P, O) {
      const A = Y(M, O);
      return (0, t0.IsArray)(M.items) ? M.items.map((w, I) => S(w, P, A[I])) : [];
    }
    function D(M, P, O) {
      for (let A of M.anyOf) {
        if (!b(A, P, O))
          continue;
        const w = S(A, P, O);
        return Y(M, w);
      }
      for (let A of M.anyOf) {
        const w = S(A, P, O);
        if (!b(M, P, w))
          continue;
        return Y(M, w);
      }
      return Y(M, O);
    }
    function S(M, P, O) {
      const A = typeof M.$id === "string" ? [...P, M] : P, w = M;
      switch (M[n.Kind]) {
        case "Array":
          return W(w, A, O);
        case "Intersect":
          return X(w, A, O);
        case "Not":
          return Z(w, A, O);
        case "Object":
          return J(w, A, O);
        case "Record":
          return Q(w, A, O);
        case "Ref":
          return z(w, A, O);
        case "This":
          return U(w, A, O);
        case "Tuple":
          return F(w, A, O);
        case "Union":
          return D(w, A, O);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Constructor":
        case "Date":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Never":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "Symbol":
        case "TemplateLiteral":
        case "Undefined":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Y(w, O);
        default:
          if (!n.TypeRegistry.Has(w[n.Kind]))
            throw new D$(w);
          return Y(w, O);
      }
    }
    let b = () => false;
    function j(M, P, O, A) {
      return b = A, S(M, P, O);
    }
    $.Encode = j;
  })(ZW || (zW.EncodeTransform = ZW = {}));
});
var wW = z0((FW) => {
  Object.defineProperty(FW, "__esModule", { value: true });
  FW.Value = undefined;
  var qW = g$(), n9 = EY(), o9 = H$(), c9 = kY(), NW = lY(), l9 = n1(), MW = YW(), AW = r6(), p$ = U$(), UW = v6(), i$ = z8(), BW;
  (function($) {
    function Y(...M) {
      return NW.Cast.apply(NW, M);
    }
    $.Cast = Y;
    function W(...M) {
      return AW.Create.apply(AW, M);
    }
    $.Create = W;
    function X(...M) {
      return p$.Check.apply(p$, M);
    }
    $.Check = X;
    function Z(...M) {
      return MW.Convert.apply(MW, M);
    }
    $.Convert = Z;
    function J(M) {
      return l9.Clone(M);
    }
    $.Clone = J;
    function Q(...M) {
      const [P, O, A] = M.length === 3 ? [M[0], M[1], M[2]] : [M[0], [], M[1]];
      if (!X(P, O, A))
        throw new i$.TransformDecodeCheckError(P, A, U(P, O, A).First());
      return i$.DecodeTransform.Decode(P, O, A, p$.Check);
    }
    $.Decode = Q;
    function z(...M) {
      const [P, O, A] = M.length === 3 ? [M[0], M[1], M[2]] : [M[0], [], M[1]], w = i$.EncodeTransform.Encode(P, O, A, p$.Check);
      if (!X(P, O, w))
        throw new i$.TransformEncodeCheckError(P, A, U(P, O, A).First());
      return w;
    }
    $.Encode = z;
    function U(...M) {
      return qW.Errors.apply(qW, M);
    }
    $.Errors = U;
    function F(M, P) {
      return c9.Equal(M, P);
    }
    $.Equal = F;
    function D(M, P) {
      return UW.Diff(M, P);
    }
    $.Diff = D;
    function S(M) {
      return o9.Hash(M);
    }
    $.Hash = S;
    function b(M, P) {
      return UW.Patch(M, P);
    }
    $.Patch = b;
    function j(M, P) {
      n9.Mutate(M, P);
    }
    $.Mutate = j;
  })(BW || (FW.Value = BW = {}));
});
var u$ = z0((J1) => {
  Object.defineProperty(J1, "__esModule", { value: true });
  J1.Value = J1.ValuePointer = J1.Delete = J1.Update = J1.Insert = J1.Edit = J1.ValueErrorIterator = J1.ValueErrorType = undefined;
  var jW = g$();
  Object.defineProperty(J1, "ValueErrorType", { enumerable: true, get: function() {
    return jW.ValueErrorType;
  } });
  Object.defineProperty(J1, "ValueErrorIterator", { enumerable: true, get: function() {
    return jW.ValueErrorIterator;
  } });
  var m$ = v6();
  Object.defineProperty(J1, "Edit", { enumerable: true, get: function() {
    return m$.Edit;
  } });
  Object.defineProperty(J1, "Insert", { enumerable: true, get: function() {
    return m$.Insert;
  } });
  Object.defineProperty(J1, "Update", { enumerable: true, get: function() {
    return m$.Update;
  } });
  Object.defineProperty(J1, "Delete", { enumerable: true, get: function() {
    return m$.Delete;
  } });
  var t9 = f$();
  Object.defineProperty(J1, "ValuePointer", { enumerable: true, get: function() {
    return t9.ValuePointer;
  } });
  var s9 = wW();
  Object.defineProperty(J1, "Value", { enumerable: true, get: function() {
    return s9.Value;
  } });
});
var CW = z0((SW) => {
  Object.defineProperty(SW, "__esModule", { value: true });
  SW.TypeCompiler = SW.Policy = SW.TypeCompilerTypeGuardError = SW.TypeCompilerUnknownTypeError = SW.TypeCheck = undefined;
  var j$ = z8(), l = x0(), J7 = z$(), K$ = M$(), Q7 = K1(), z7 = H$(), F0 = g0();

  class U8 {
    constructor($, Y, W, X) {
      this.schema = $, this.references = Y, this.checkFunc = W, this.code = X, this.hasTransform = j$.HasTransform.Has($, Y);
    }
    Code() {
      return this.code;
    }
    Errors($) {
      return (0, J7.Errors)(this.schema, this.references, $);
    }
    Check($) {
      return this.checkFunc($);
    }
    Decode($) {
      if (!this.checkFunc($))
        throw new j$.TransformDecodeCheckError(this.schema, $, this.Errors($).First());
      return this.hasTransform ? j$.DecodeTransform.Decode(this.schema, this.references, $, (Y, W, X) => this.Check(X)) : $;
    }
    Encode($) {
      const Y = this.hasTransform ? j$.EncodeTransform.Encode(this.schema, this.references, $, (W, X, Z) => this.Check(Z)) : $;
      if (!this.checkFunc(Y))
        throw new j$.TransformEncodeCheckError(this.schema, $, this.Errors($).First());
      return Y;
    }
  }
  SW.TypeCheck = U8;
  var B1;
  (function($) {
    function Y(J) {
      return J === 36;
    }
    $.DollarSign = Y;
    function W(J) {
      return J === 95;
    }
    $.IsUnderscore = W;
    function X(J) {
      return J >= 65 && J <= 90 || J >= 97 && J <= 122;
    }
    $.IsAlpha = X;
    function Z(J) {
      return J >= 48 && J <= 57;
    }
    $.IsNumeric = Z;
  })(B1 || (B1 = {}));
  var c$;
  (function($) {
    function Y(J) {
      if (J.length === 0)
        return false;
      return B1.IsNumeric(J.charCodeAt(0));
    }
    function W(J) {
      if (Y(J))
        return false;
      for (let Q = 0;Q < J.length; Q++) {
        const z = J.charCodeAt(Q);
        if (!(B1.IsAlpha(z) || B1.IsNumeric(z) || B1.DollarSign(z) || B1.IsUnderscore(z)))
          return false;
      }
      return true;
    }
    function X(J) {
      return J.replace(/'/g, "\\'");
    }
    function Z(J, Q) {
      return W(Q) ? `${J}.${Q}` : `${J}['${X(Q)}']`;
    }
    $.Encode = Z;
  })(c$ || (c$ = {}));
  var M8;
  (function($) {
    function Y(W) {
      const X = [];
      for (let Z = 0;Z < W.length; Z++) {
        const J = W.charCodeAt(Z);
        if (B1.IsNumeric(J) || B1.IsAlpha(J))
          X.push(W.charAt(Z));
        else
          X.push(`_${J}_`);
      }
      return X.join("").replace(/__/g, "_");
    }
    $.Encode = Y;
  })(M8 || (M8 = {}));
  var A8;
  (function($) {
    function Y(W) {
      return W.replace(/'/g, "\\'");
    }
    $.Escape = Y;
  })(A8 || (A8 = {}));

  class B8 extends F0.TypeBoxError {
    constructor($) {
      super("Unknown type");
      this.schema = $;
    }
  }
  SW.TypeCompilerUnknownTypeError = B8;

  class l$ extends F0.TypeBoxError {
    constructor($) {
      super("Preflight validation check failed to guard for the given schema");
      this.schema = $;
    }
  }
  SW.TypeCompilerTypeGuardError = l$;
  var E1;
  (function($) {
    function Y(Q, z, U) {
      return K$.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${z}' in ${Q} ? ${U} : true)` : `(${c$.Encode(Q, z)} !== undefined ? ${U} : true)`;
    }
    $.IsExactOptionalProperty = Y;
    function W(Q) {
      return !K$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${Q} === 'object' && ${Q} !== null && !Array.isArray(${Q}))` : `(typeof ${Q} === 'object' && ${Q} !== null)`;
    }
    $.IsObjectLike = W;
    function X(Q) {
      return !K$.TypeSystemPolicy.AllowArrayObject ? `(typeof ${Q} === 'object' && ${Q} !== null && !Array.isArray(${Q}) && !(${Q} instanceof Date) && !(${Q} instanceof Uint8Array))` : `(typeof ${Q} === 'object' && ${Q} !== null && !(${Q} instanceof Date) && !(${Q} instanceof Uint8Array))`;
    }
    $.IsRecordLike = X;
    function Z(Q) {
      return !K$.TypeSystemPolicy.AllowNaN ? `(typeof ${Q} === 'number' && Number.isFinite(${Q}))` : `typeof ${Q} === 'number'`;
    }
    $.IsNumberLike = Z;
    function J(Q) {
      return K$.TypeSystemPolicy.AllowNullVoid ? `(${Q} === undefined || ${Q} === null)` : `${Q} === undefined`;
    }
    $.IsVoidLike = J;
  })(E1 || (SW.Policy = E1 = {}));
  var OW;
  (function($) {
    function Y(K) {
      return K[F0.Kind] === "Any" || K[F0.Kind] === "Unknown";
    }
    function* W(K, E, L) {
      yield "true";
    }
    function* X(K, E, L) {
      yield `Array.isArray(${L})`;
      const [p, T] = [j0("value", "any"), j0("acc", "number")];
      if ((0, l.IsNumber)(K.maxItems))
        yield `${L}.length <= ${K.maxItems}`;
      if ((0, l.IsNumber)(K.minItems))
        yield `${L}.length >= ${K.minItems}`;
      const d = f(K.items, E, "value");
      if (yield `${L}.every((${p}) => ${d})`, F0.TypeGuard.TSchema(K.contains) || (0, l.IsNumber)(K.minContains) || (0, l.IsNumber)(K.maxContains)) {
        const W0 = F0.TypeGuard.TSchema(K.contains) ? K.contains : F0.Type.Never(), S0 = f(W0, E, "value"), X0 = (0, l.IsNumber)(K.minContains) ? [`(count >= ${K.minContains})`] : [], N = (0, l.IsNumber)(K.maxContains) ? [`(count <= ${K.maxContains})`] : [], t = `const count = value.reduce((${T}, ${p}) => ${S0} ? acc + 1 : acc, 0)`, L0 = ["(count > 0)", ...X0, ...N].join(" && ");
        yield `((${p}) => { ${t}; return ${L0}})(${L})`;
      }
      if (K.uniqueItems === true)
        yield `((${p}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${L})`;
    }
    function* Z(K, E, L) {
      yield `(typeof value === 'object' && Symbol.asyncIterator in ${L})`;
    }
    function* J(K, E, L) {
      if (yield `(typeof ${L} === 'bigint')`, (0, l.IsBigInt)(K.exclusiveMaximum))
        yield `${L} < BigInt(${K.exclusiveMaximum})`;
      if ((0, l.IsBigInt)(K.exclusiveMinimum))
        yield `${L} > BigInt(${K.exclusiveMinimum})`;
      if ((0, l.IsBigInt)(K.maximum))
        yield `${L} <= BigInt(${K.maximum})`;
      if ((0, l.IsBigInt)(K.minimum))
        yield `${L} >= BigInt(${K.minimum})`;
      if ((0, l.IsBigInt)(K.multipleOf))
        yield `(${L} % BigInt(${K.multipleOf})) === 0`;
    }
    function* Q(K, E, L) {
      yield `(typeof ${L} === 'boolean')`;
    }
    function* z(K, E, L) {
      yield* y0(K.returns, E, `${L}.prototype`);
    }
    function* U(K, E, L) {
      if (yield `(${L} instanceof Date) && Number.isFinite(${L}.getTime())`, (0, l.IsNumber)(K.exclusiveMaximumTimestamp))
        yield `${L}.getTime() < ${K.exclusiveMaximumTimestamp}`;
      if ((0, l.IsNumber)(K.exclusiveMinimumTimestamp))
        yield `${L}.getTime() > ${K.exclusiveMinimumTimestamp}`;
      if ((0, l.IsNumber)(K.maximumTimestamp))
        yield `${L}.getTime() <= ${K.maximumTimestamp}`;
      if ((0, l.IsNumber)(K.minimumTimestamp))
        yield `${L}.getTime() >= ${K.minimumTimestamp}`;
      if ((0, l.IsNumber)(K.multipleOfTimestamp))
        yield `(${L}.getTime() % ${K.multipleOfTimestamp}) === 0`;
    }
    function* F(K, E, L) {
      yield `(typeof ${L} === 'function')`;
    }
    function* D(K, E, L) {
      if (yield `(typeof ${L} === 'number' && Number.isInteger(${L}))`, (0, l.IsNumber)(K.exclusiveMaximum))
        yield `${L} < ${K.exclusiveMaximum}`;
      if ((0, l.IsNumber)(K.exclusiveMinimum))
        yield `${L} > ${K.exclusiveMinimum}`;
      if ((0, l.IsNumber)(K.maximum))
        yield `${L} <= ${K.maximum}`;
      if ((0, l.IsNumber)(K.minimum))
        yield `${L} >= ${K.minimum}`;
      if ((0, l.IsNumber)(K.multipleOf))
        yield `(${L} % ${K.multipleOf}) === 0`;
    }
    function* S(K, E, L) {
      const p = K.allOf.map((T) => f(T, E, L)).join(" && ");
      if (K.unevaluatedProperties === false) {
        const T = h(`${new RegExp(F0.KeyResolver.ResolvePattern(K))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key))`;
        yield `(${p} && ${d})`;
      } else if (F0.TypeGuard.TSchema(K.unevaluatedProperties)) {
        const T = h(`${new RegExp(F0.KeyResolver.ResolvePattern(K))};`), d = `Object.getOwnPropertyNames(${L}).every(key => ${T}.test(key) || ${f(K.unevaluatedProperties, E, `${L}[key]`)})`;
        yield `(${p} && ${d})`;
      } else
        yield `(${p})`;
    }
    function* b(K, E, L) {
      yield `(typeof value === 'object' && Symbol.iterator in ${L})`;
    }
    function* j(K, E, L) {
      if (typeof K.const === "number" || typeof K.const === "boolean")
        yield `(${L} === ${K.const})`;
      else
        yield `(${L} === '${A8.Escape(K.const)}')`;
    }
    function* M(K, E, L) {
      yield "false";
    }
    function* P(K, E, L) {
      yield `(!${f(K.not, E, L)})`;
    }
    function* O(K, E, L) {
      yield `(${L} === null)`;
    }
    function* A(K, E, L) {
      if (yield E1.IsNumberLike(L), (0, l.IsNumber)(K.exclusiveMaximum))
        yield `${L} < ${K.exclusiveMaximum}`;
      if ((0, l.IsNumber)(K.exclusiveMinimum))
        yield `${L} > ${K.exclusiveMinimum}`;
      if ((0, l.IsNumber)(K.maximum))
        yield `${L} <= ${K.maximum}`;
      if ((0, l.IsNumber)(K.minimum))
        yield `${L} >= ${K.minimum}`;
      if ((0, l.IsNumber)(K.multipleOf))
        yield `(${L} % ${K.multipleOf}) === 0`;
    }
    function* w(K, E, L) {
      if (yield E1.IsObjectLike(L), (0, l.IsNumber)(K.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${K.minProperties}`;
      if ((0, l.IsNumber)(K.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${K.maxProperties}`;
      const p = Object.getOwnPropertyNames(K.properties);
      for (let T of p) {
        const d = c$.Encode(L, T), W0 = K.properties[T];
        if (K.required && K.required.includes(T)) {
          if (yield* y0(W0, E, d), F0.ExtendsUndefined.Check(W0) || Y(W0))
            yield `('${T}' in ${L})`;
        } else {
          const S0 = f(W0, E, d);
          yield E1.IsExactOptionalProperty(L, T, S0);
        }
      }
      if (K.additionalProperties === false)
        if (K.required && K.required.length === p.length)
          yield `Object.getOwnPropertyNames(${L}).length === ${p.length}`;
        else {
          const T = `[${p.map((d) => `'${d}'`).join(", ")}]`;
          yield `Object.getOwnPropertyNames(${L}).every(key => ${T}.includes(key))`;
        }
      if (typeof K.additionalProperties === "object") {
        const T = f(K.additionalProperties, E, `${L}[key]`), d = `[${p.map((W0) => `'${W0}'`).join(", ")}]`;
        yield `(Object.getOwnPropertyNames(${L}).every(key => ${d}.includes(key) || ${T}))`;
      }
    }
    function* I(K, E, L) {
      yield `(typeof value === 'object' && typeof ${L}.then === 'function')`;
    }
    function* G(K, E, L) {
      if (yield E1.IsRecordLike(L), (0, l.IsNumber)(K.minProperties))
        yield `Object.getOwnPropertyNames(${L}).length >= ${K.minProperties}`;
      if ((0, l.IsNumber)(K.maxProperties))
        yield `Object.getOwnPropertyNames(${L}).length <= ${K.maxProperties}`;
      const [p, T] = Object.entries(K.patternProperties)[0], d = h(`${new RegExp(p)}`), W0 = f(T, E, "value"), S0 = F0.TypeGuard.TSchema(K.additionalProperties) ? f(K.additionalProperties, E, L) : K.additionalProperties === false ? "false" : "true", X0 = `(${d}.test(key) ? ${W0} : ${S0})`;
      yield `(Object.entries(${L}).every(([key, value]) => ${X0}))`;
    }
    function* k(K, E, L) {
      const p = (0, Q7.Deref)(K, E);
      if (R.functions.has(K.$ref))
        return yield `${i(K.$ref)}(${L})`;
      yield* y0(p, E, L);
    }
    function* _(K, E, L) {
      if (yield `(typeof ${L} === 'string')`, (0, l.IsNumber)(K.maxLength))
        yield `${L}.length <= ${K.maxLength}`;
      if ((0, l.IsNumber)(K.minLength))
        yield `${L}.length >= ${K.minLength}`;
      if (K.pattern !== undefined)
        yield `${h(`${new RegExp(K.pattern)};`)}.test(${L})`;
      if (K.format !== undefined)
        yield `format('${K.format}', ${L})`;
    }
    function* J0(K, E, L) {
      yield `(typeof ${L} === 'symbol')`;
    }
    function* Y0(K, E, L) {
      yield `(typeof ${L} === 'string')`, yield `${h(`${new RegExp(K.pattern)};`)}.test(${L})`;
    }
    function* A0(K, E, L) {
      yield `${i(K.$ref)}(${L})`;
    }
    function* k1(K, E, L) {
      if (yield `Array.isArray(${L})`, K.items === undefined)
        return yield `${L}.length === 0`;
      yield `(${L}.length === ${K.maxItems})`;
      for (let p = 0;p < K.items.length; p++)
        yield `${f(K.items[p], E, `${L}[${p}]`)}`;
    }
    function* u0(K, E, L) {
      yield `${L} === undefined`;
    }
    function* h0(K, E, L) {
      yield `(${K.anyOf.map((T) => f(T, E, L)).join(" || ")})`;
    }
    function* N0(K, E, L) {
      if (yield `${L} instanceof Uint8Array`, (0, l.IsNumber)(K.maxByteLength))
        yield `(${L}.length <= ${K.maxByteLength})`;
      if ((0, l.IsNumber)(K.minByteLength))
        yield `(${L}.length >= ${K.minByteLength})`;
    }
    function* H0(K, E, L) {
      yield "true";
    }
    function* n0(K, E, L) {
      yield E1.IsVoidLike(L);
    }
    function* $1(K, E, L) {
      const p = R.instances.size;
      R.instances.set(p, K), yield `kind('${K[F0.Kind]}', ${p}, ${L})`;
    }
    function* y0(K, E, L, p = true) {
      const T = (0, l.IsString)(K.$id) ? [...E, K] : E, d = K;
      if (p && (0, l.IsString)(K.$id)) {
        const W0 = i(K.$id);
        if (R.functions.has(W0))
          return yield `${W0}(${L})`;
        else {
          const S0 = q0(W0, K, E, "value", false);
          return R.functions.set(W0, S0), yield `${W0}(${L})`;
        }
      }
      switch (d[F0.Kind]) {
        case "Any":
          return yield* W(d, T, L);
        case "Array":
          return yield* X(d, T, L);
        case "AsyncIterator":
          return yield* Z(d, T, L);
        case "BigInt":
          return yield* J(d, T, L);
        case "Boolean":
          return yield* Q(d, T, L);
        case "Constructor":
          return yield* z(d, T, L);
        case "Date":
          return yield* U(d, T, L);
        case "Function":
          return yield* F(d, T, L);
        case "Integer":
          return yield* D(d, T, L);
        case "Intersect":
          return yield* S(d, T, L);
        case "Iterator":
          return yield* b(d, T, L);
        case "Literal":
          return yield* j(d, T, L);
        case "Never":
          return yield* M(d, T, L);
        case "Not":
          return yield* P(d, T, L);
        case "Null":
          return yield* O(d, T, L);
        case "Number":
          return yield* A(d, T, L);
        case "Object":
          return yield* w(d, T, L);
        case "Promise":
          return yield* I(d, T, L);
        case "Record":
          return yield* G(d, T, L);
        case "Ref":
          return yield* k(d, T, L);
        case "String":
          return yield* _(d, T, L);
        case "Symbol":
          return yield* J0(d, T, L);
        case "TemplateLiteral":
          return yield* Y0(d, T, L);
        case "This":
          return yield* A0(d, T, L);
        case "Tuple":
          return yield* k1(d, T, L);
        case "Undefined":
          return yield* u0(d, T, L);
        case "Union":
          return yield* h0(d, T, L);
        case "Uint8Array":
          return yield* N0(d, T, L);
        case "Unknown":
          return yield* H0(d, T, L);
        case "Void":
          return yield* n0(d, T, L);
        default:
          if (!F0.TypeRegistry.Has(d[F0.Kind]))
            throw new B8(K);
          return yield* $1(d, T, L);
      }
    }
    const R = { language: "javascript", functions: new Map, variables: new Map, instances: new Map };
    function f(K, E, L, p = true) {
      return `(${[...y0(K, E, L, p)].join(" && ")})`;
    }
    function i(K) {
      return `check_${M8.Encode(K)}`;
    }
    function h(K) {
      const E = `local_${R.variables.size}`;
      return R.variables.set(E, `const ${E} = ${K}`), E;
    }
    function q0(K, E, L, p, T = true) {
      const [d, W0] = ["\n", (t) => "".padStart(t, " ")], S0 = j0("value", "any"), X0 = K0("boolean"), N = [...y0(E, L, p, T)].map((t) => `${W0(4)}${t}`).join(` &&${d}`);
      return `function ${K}(${S0})${X0} {${d}${W0(2)}return (${d}${N}${d}${W0(2)})\n}`;
    }
    function j0(K, E) {
      const L = R.language === "typescript" ? `: ${E}` : "";
      return `${K}${L}`;
    }
    function K0(K) {
      return R.language === "typescript" ? `: ${K}` : "";
    }
    function P0(K, E, L) {
      const p = q0("check", K, E, "value"), T = j0("value", "any"), d = K0("boolean"), W0 = [...R.functions.values()], S0 = [...R.variables.values()], X0 = (0, l.IsString)(K.$id) ? `return function check(${T})${d} {\n  return ${i(K.$id)}(value)\n}` : `return ${p}`;
      return [...S0, ...W0, X0].join("\n");
    }
    function M0(...K) {
      const E = { language: "javascript" }, [L, p, T] = K.length === 2 && (0, l.IsArray)(K[1]) ? [K[0], K[1], E] : K.length === 2 && !(0, l.IsArray)(K[1]) ? [K[0], [], K[1]] : K.length === 3 ? [K[0], K[1], K[2]] : K.length === 1 ? [K[0], [], E] : [null, [], E];
      if (R.language = T.language, R.variables.clear(), R.functions.clear(), R.instances.clear(), !F0.TypeGuard.TSchema(L))
        throw new l$(L);
      for (let d of p)
        if (!F0.TypeGuard.TSchema(d))
          throw new l$(d);
      return P0(L, p, T);
    }
    $.Code = M0;
    function w1(K, E = []) {
      const L = M0(K, E, { language: "javascript" }), p = globalThis.Function("kind", "format", "hash", L), T = new Map(R.instances);
      function d(N, t, L0) {
        if (!F0.TypeRegistry.Has(N) || !T.has(t))
          return false;
        const $6 = F0.TypeRegistry.Get(N), Y6 = T.get(t);
        return $6(Y6, L0);
      }
      function W0(N, t) {
        if (!F0.FormatRegistry.Has(N))
          return false;
        return F0.FormatRegistry.Get(N)(t);
      }
      function S0(N) {
        return (0, z7.Hash)(N);
      }
      const X0 = p(d, W0, S0);
      return new U8(K, E, X0, L);
    }
    $.Compile = w1;
  })(OW || (SW.TypeCompiler = OW = {}));
});
var F8 = z0((s0) => {
  var A7 = s0 && s0.__createBinding || (Object.create ? function($, Y, W, X) {
    if (X === undefined)
      X = W;
    var Z = Object.getOwnPropertyDescriptor(Y, W);
    if (!Z || ("get" in Z ? !Y.__esModule : Z.writable || Z.configurable))
      Z = { enumerable: true, get: function() {
        return Y[W];
      } };
    Object.defineProperty($, X, Z);
  } : function($, Y, W, X) {
    if (X === undefined)
      X = W;
    $[X] = Y[W];
  }), U7 = s0 && s0.__exportStar || function($, Y) {
    for (var W in $)
      if (W !== "default" && !Object.prototype.hasOwnProperty.call(Y, W))
        A7(Y, $, W);
  };
  Object.defineProperty(s0, "__esModule", { value: true });
  s0.ValueErrorIterator = s0.ValueErrorType = undefined;
  var IW = g$();
  Object.defineProperty(s0, "ValueErrorType", { enumerable: true, get: function() {
    return IW.ValueErrorType;
  } });
  Object.defineProperty(s0, "ValueErrorIterator", { enumerable: true, get: function() {
    return IW.ValueErrorIterator;
  } });
  U7(CW(), s0);
});
var fW = z0((Cz, gW) => {
  var D7 = function($) {
    var Y = $.indexOf("%");
    if (Y === -1)
      return $;
    var W = $.length, X = "", Z = 0, J = 0, Q = Y, z = xW;
    while (Y > -1 && Y < W) {
      var U = kW($[Y + 1], 4), F = kW($[Y + 2], 0), D = U | F, S = C8[D];
      if (z = C8[256 + z + S], J = J << 6 | D & C8[364 + S], z === xW)
        X += $.slice(Z, Q), X += J <= 65535 ? String.fromCharCode(J) : String.fromCharCode(55232 + (J >> 10), 56320 + (J & 1023)), J = 0, Z = Y + 3, Y = Q = $.indexOf("%", Z);
      else if (z === F7)
        return null;
      else {
        if (Y += 3, Y < W && $.charCodeAt(Y) === 37)
          continue;
        return null;
      }
    }
    return X + $.slice(Z);
  }, kW = function($, Y) {
    var W = w7[$];
    return W === undefined ? 255 : W << Y;
  }, xW = 12, F7 = 0, C8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], w7 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  gW.exports = D7;
});
var pW = z0((Iz, vW) => {
  var j7 = function($) {
    const Y = new yW;
    if (typeof $ !== "string")
      return Y;
    let W = $.length, X = "", Z = "", J = -1, Q = -1, z = false, U = false, F = false, D = false, S = false, b = 0;
    for (let j = 0;j < W + 1; j++)
      if (b = j !== W ? $.charCodeAt(j) : 38, b === 38) {
        if (S = Q > J, !S)
          Q = j;
        if (X = $.slice(J + 1, Q), S || X.length > 0) {
          if (F)
            X = X.replace(dW, " ");
          if (z)
            X = TW(X) || X;
          if (S) {
            if (Z = $.slice(Q + 1, j), D)
              Z = Z.replace(dW, " ");
            if (U)
              Z = TW(Z) || Z;
          }
          const M = Y[X];
          if (M === undefined)
            Y[X] = Z;
          else if (M.pop)
            M.push(Z);
          else
            Y[X] = [M, Z];
        }
        Z = "", J = j, Q = j, z = false, U = false, F = false, D = false;
      } else if (b === 61)
        if (Q <= J)
          Q = j;
        else
          U = true;
      else if (b === 43)
        if (Q > J)
          D = true;
        else
          F = true;
      else if (b === 37)
        if (Q > J)
          U = true;
        else
          z = true;
    return Y;
  }, TW = fW(), dW = /\+/g, yW = function() {
  };
  yW.prototype = Object.create(null);
  vW.exports = j7;
});
var mW = z0((bz, iW) => {
  var P7 = function($) {
    const Y = $.length;
    if (Y === 0)
      return "";
    let W = "", X = 0, Z = 0;
    $:
      for (;Z < Y; Z++) {
        let J = $.charCodeAt(Z);
        while (J < 128) {
          if (K7[J] !== 1) {
            if (X < Z)
              W += $.slice(X, Z);
            X = Z + 1, W += z1[J];
          }
          if (++Z === Y)
            break $;
          J = $.charCodeAt(Z);
        }
        if (X < Z)
          W += $.slice(X, Z);
        if (J < 2048) {
          X = Z + 1, W += z1[192 | J >> 6] + z1[128 | J & 63];
          continue;
        }
        if (J < 55296 || J >= 57344) {
          X = Z + 1, W += z1[224 | J >> 12] + z1[128 | J >> 6 & 63] + z1[128 | J & 63];
          continue;
        }
        if (++Z, Z >= Y)
          throw new Error("URI malformed");
        const Q = $.charCodeAt(Z) & 1023;
        X = Z + 1, J = 65536 + ((J & 1023) << 10 | Q), W += z1[240 | J >> 18] + z1[128 | J >> 12 & 63] + z1[128 | J >> 6 & 63] + z1[128 | J & 63];
      }
    if (X === 0)
      return $;
    if (X < Y)
      return W + $.slice(X);
    return W;
  }, z1 = Array.from({ length: 256 }, ($, Y) => "%" + ((Y < 16 ? "0" : "") + Y.toString(16)).toUpperCase()), K7 = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]);
  iW.exports = { encodeString: P7 };
});
var nW = z0((Rz, hW) => {
  var uW = function($) {
    const Y = typeof $;
    if (Y === "string")
      return I8($);
    else if (Y === "bigint")
      return $.toString();
    else if (Y === "boolean")
      return $ ? "true" : "false";
    else if (Y === "number" && Number.isFinite($))
      return $ < 1000000000000000000000 ? "" + $ : I8("" + $);
    return "";
  }, O7 = function($) {
    let Y = "";
    if ($ === null || typeof $ !== "object")
      return Y;
    const W = "&", X = Object.keys($), Z = X.length;
    let J = 0;
    for (let Q = 0;Q < Z; Q++) {
      const z = X[Q], U = $[z], F = I8(z) + "=";
      if (Q)
        Y += W;
      if (Array.isArray(U)) {
        J = U.length;
        for (let D = 0;D < J; D++) {
          if (D)
            Y += W;
          Y += F, Y += uW(U[D]);
        }
      } else
        Y += F, Y += uW(U);
    }
    return Y;
  }, { encodeString: I8 } = mW();
  hW.exports = O7;
});
var b8 = z0((Gz, S$) => {
  var oW = pW(), cW = nW(), lW = { parse: oW, stringify: cW };
  S$.exports = lW;
  S$.exports.default = lW;
  S$.exports.parse = oW;
  S$.exports.stringify = cW;
});
var g1 = ($, Y) => ({ part: $, store: null, inert: Y !== undefined ? new Map(Y.map((W) => [W.part.charCodeAt(0), W])) : null, params: null, wildcardStore: null });
var g8 = ($, Y) => ({ ...$, part: Y });
var f8 = ($) => ({ paramName: $, store: null, inert: null });

class I1 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
  add($, Y, W) {
    let X;
    if (typeof Y != "string")
      throw TypeError("Route path must be a string");
    Y === "" ? Y = "/" : Y[0] !== "/" && (Y = `/${Y}`), this.history.push([$, Y, W]);
    let Z = Y[Y.length - 1] === "*";
    Z && (Y = Y.slice(0, -1));
    let J = Y.split(I1.regex.static), Q = Y.match(I1.regex.params) || [];
    J[J.length - 1] === "" && J.pop(), X = this.root[$] ? this.root[$] : this.root[$] = g1("/");
    let z = 0;
    for (let U = 0;U < J.length; ++U) {
      let F = J[U];
      if (U > 0) {
        let D = Q[z++].slice(1);
        if (X.params === null)
          X.params = f8(D);
        else if (X.params.paramName !== D)
          throw Error(`Cannot create route "${Y}" with parameter "${D}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
        let S = X.params;
        if (S.inert === null) {
          X = S.inert = g1(F);
          continue;
        }
        X = S.inert;
      }
      for (let D = 0;; ) {
        if (D === F.length) {
          if (D < X.part.length) {
            let S = g8(X, X.part.slice(D));
            Object.assign(X, g1(F, [S]));
          }
          break;
        }
        if (D === X.part.length) {
          if (X.inert === null)
            X.inert = new Map;
          else if (X.inert.has(F.charCodeAt(D))) {
            X = X.inert.get(F.charCodeAt(D)), F = F.slice(D), D = 0;
            continue;
          }
          let S = g1(F.slice(D));
          X.inert.set(F.charCodeAt(D), S), X = S;
          break;
        }
        if (F[D] !== X.part[D]) {
          let S = g8(X, X.part.slice(D)), b = g1(F.slice(D));
          Object.assign(X, g1(X.part.slice(0, D), [S, b])), X = b;
          break;
        }
        ++D;
      }
    }
    if (z < Q.length) {
      let U = Q[z], F = U.slice(1);
      if (X.params === null)
        X.params = f8(F);
      else if (X.params.paramName !== F)
        throw Error(`Cannot create route "${Y}" with parameter "${F}" because a route already exists with a different parameter name ("${X.params.paramName}") in the same location`);
      return X.params.store === null && (X.params.store = W), X.params.store;
    }
    return Z ? (X.wildcardStore === null && (X.wildcardStore = W), X.wildcardStore) : (X.store === null && (X.store = W), X.store);
  }
  find($, Y) {
    let W = this.root[$];
    return W ? J6(Y, Y.length, W, 0) : null;
  }
}
var J6 = ($, Y, W, X) => {
  let Z = W?.part, J = X + Z.length;
  if (Z.length > 1) {
    if (J > Y)
      return null;
    if (Z.length < 15) {
      for (let Q = 1, z = X + 1;Q < Z.length; ++Q, ++z)
        if (Z.charCodeAt(Q) !== $.charCodeAt(z))
          return null;
    } else if ($.substring(X, J) !== Z)
      return null;
  }
  if (J === Y)
    return W.store !== null ? { store: W.store, params: {} } : W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": "" } } : null;
  if (W.inert !== null) {
    let Q = W.inert.get($.charCodeAt(J));
    if (Q !== undefined) {
      let z = J6($, Y, Q, J);
      if (z !== null)
        return z;
    }
  }
  if (W.params !== null) {
    let Q = W.params, z = $.indexOf("/", J);
    if (z !== J) {
      if (z === -1 || z >= Y) {
        if (Q.store !== null) {
          let U = {};
          return U[Q.paramName] = $.substring(J, Y), { store: Q.store, params: U };
        }
      } else if (Q.inert !== null) {
        let U = J6($, Y, Q.inert, z);
        if (U !== null)
          return U.params[Q.paramName] = $.substring(J, z), U;
      }
    }
  }
  return W.wildcardStore !== null ? { store: W.wildcardStore, params: { "*": $.substring(J, Y) } } : null;
};
var y8 = v0(d8(), 1);
var v8 = y8.default;
var R$ = () => {
  let $;
  return [new Promise((W) => {
    $ = W;
  }), $];
};
var j1 = () => {
  const [$, Y] = R$(), [W, X] = R$(), Z = [], J = [];
  return { signal: $, consume: (Q) => {
    switch (Q.type) {
      case "begin":
        if (Q.unit && Z.length === 0)
          for (let z = 0;z < Q.unit; z++) {
            const [U, F] = R$(), [D, S] = R$();
            Z.push(U), J.push([(b) => {
              F({ children: [], end: D, name: b.name ?? "", skip: false, time: b.time });
            }, (b) => {
              S(b);
            }]);
          }
        Y({ children: Z, end: W, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        X(Q.time);
        break;
    }
  }, consumeChild(Q) {
    switch (Q.type) {
      case "begin":
        if (!J[0])
          return;
        const [z] = J[0];
        z({ children: [], end: W, name: Q.name ?? "", skip: false, time: Q.time });
        break;
      case "end":
        const U = J.shift();
        if (!U)
          return;
        U[1](Q.time);
    }
  }, resolve() {
    Y({ children: [], end: new Promise((Q) => Q(0)), name: "", skip: true, time: 0 });
    for (let [Q, z] of J)
      Q({ children: [], end: new Promise((U) => U(0)), name: "", skip: true, time: 0 }), z(0);
    X(0);
  } };
};
var p8 = ($, Y, W) => {
  return async function X(X) {
    if (X.event !== "request" || X.type !== "begin")
      return;
    const Z = X.id, J = $(), Q = j1(), z = j1(), U = j1(), F = j1(), D = j1(), S = j1(), b = j1(), j = j1();
    Q.consume(X);
    const M = (P) => {
      if (P.id === Z)
        switch (P.event) {
          case "request":
            Q.consume(P);
            break;
          case "request.unit":
            Q.consumeChild(P);
            break;
          case "parse":
            z.consume(P);
            break;
          case "parse.unit":
            z.consumeChild(P);
            break;
          case "transform":
            U.consume(P);
            break;
          case "transform.unit":
            U.consumeChild(P);
            break;
          case "beforeHandle":
            F.consume(P);
            break;
          case "beforeHandle.unit":
            F.consumeChild(P);
            break;
          case "handle":
            D.consume(P);
            break;
          case "afterHandle":
            S.consume(P);
            break;
          case "afterHandle.unit":
            S.consumeChild(P);
            break;
          case "error":
            b.consume(P);
            break;
          case "error.unit":
            b.consumeChild(P);
            break;
          case "response":
            if (P.type === "begin")
              Q.resolve(), z.resolve(), U.resolve(), F.resolve(), D.resolve(), S.resolve(), b.resolve();
            else
              J.off("event", M);
            j.consume(P);
            break;
          case "response.unit":
            j.consumeChild(P);
            break;
          case "exit":
            Q.resolve(), z.resolve(), U.resolve(), F.resolve(), D.resolve(), S.resolve(), b.resolve();
            break;
        }
    };
    J.on("event", M), await W({ id: Z, context: X.ctx, set: X.ctx?.set, store: X.ctx?.store, time: X.time, request: Q.signal, parse: z.signal, transform: U.signal, beforeHandle: F.signal, handle: D.signal, afterHandle: S.signal, error: b.signal, response: j.signal }), J.emit(`res${Z}.${Y}`, undefined);
  };
};
var PW = {};
k8(PW, { isProduction: () => {
  {
    return s1;
  }
}, ValidationError: () => {
  {
    return U0;
  }
}, ParseError: () => {
  {
    return q8;
  }
}, NotFoundError: () => {
  {
    return O1;
  }
}, InvalidCookieSignature: () => {
  {
    return r1;
  }
}, InternalServerError: () => {
  {
    return w$;
  }
}, ERROR_CODE: () => {
  {
    return _1;
  }
} });
var H8 = v0(u$(), 1);
var KW = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var _1 = Symbol("ErrorCode");
var s1 = (KW?.NODE_ENV ?? KW?.ENV) === "production";

class w$ extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class O1 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}

class q8 extends Error {
  code = "PARSE";
  status = 400;
  constructor($) {
    super($ ?? "PARSE");
  }
}

class r1 extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, Y) {
    super(Y ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}

class U0 extends Error {
  $;
  Y;
  W;
  code = "VALIDATION";
  status = 400;
  constructor($, Y, W) {
    const X = s1 ? undefined : ("Errors" in Y) ? Y.Errors(W).First() : H8.Value.Errors(Y, W).First(), Z = X?.schema.error ? typeof X.schema.error === "function" ? X.schema.error($, Y, W) : X.schema.error : undefined, J = s1 ? Z ?? `Invalid ${$ ?? X?.schema.error ?? X?.message}` : Z ?? `Invalid ${$}, '${X?.path?.slice(1) || "type"}': ${X?.message}` + "\n\nExpected: " + JSON.stringify(U0.simplifyModel(Y), null, 2) + "\n\nFound: " + JSON.stringify(W, null, 2);
    super(J);
    this.type = $;
    this.validator = Y;
    this.value = W;
    Object.setPrototypeOf(this, U0.prototype);
  }
  get all() {
    return [...this.validator.Errors(this.value)];
  }
  static simplifyModel($) {
    const Y = "schema" in $ ? $.schema : $;
    try {
      return H8.Value.Create(Y);
    } catch {
      return Y;
    }
  }
  get model() {
    return U0.simplifyModel(this.validator);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: $ });
  }
}
var N8 = { open($) {
  $.data.open?.($);
}, message($, Y) {
  $.data.message?.($, Y);
}, drain($) {
  $.data.drain?.($);
}, close($, Y, W) {
  $.data.close?.($, Y, W);
} };

class a1 {
  $;
  Y;
  id;
  validator;
  constructor($, Y) {
    this.raw = $;
    this.data = Y;
    this.validator = $.data.validator, this.id = Date.now();
  }
  get publish() {
    return ($, Y = undefined, W) => {
      if (this.validator?.Check(Y) === false)
        throw new U0("message", this.validator, Y);
      if (typeof Y === "object")
        Y = JSON.stringify(Y);
      return this.raw.publish($, Y, W), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new U0("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var e9 = function($, Y) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var W = {}, X = Y || {}, Z = X.decode || Y7, J = 0;
  while (J < $.length) {
    var Q = $.indexOf("=", J);
    if (Q === -1)
      break;
    var z = $.indexOf(";", J);
    if (z === -1)
      z = $.length;
    else if (z < Q) {
      J = $.lastIndexOf(";", Q - 1) + 1;
      continue;
    }
    var U = $.slice(J, Q).trim();
    if (W[U] === undefined) {
      var F = $.slice(Q + 1, z).trim();
      if (F.charCodeAt(0) === 34)
        F = F.slice(1, -1);
      W[U] = Z7(F, Z);
    }
    J = z + 1;
  }
  return W;
};
var $7 = function($, Y, W) {
  var X = W || {}, Z = X.encode || W7;
  if (typeof Z !== "function")
    throw new TypeError("option encode is invalid");
  if (!h$.test($))
    throw new TypeError("argument name is invalid");
  var J = Z(Y);
  if (J && !h$.test(J))
    throw new TypeError("argument val is invalid");
  var Q = $ + "=" + J;
  if (X.maxAge != null) {
    var z = X.maxAge - 0;
    if (isNaN(z) || !isFinite(z))
      throw new TypeError("option maxAge is invalid");
    Q += "; Max-Age=" + Math.floor(z);
  }
  if (X.domain) {
    if (!h$.test(X.domain))
      throw new TypeError("option domain is invalid");
    Q += "; Domain=" + X.domain;
  }
  if (X.path) {
    if (!h$.test(X.path))
      throw new TypeError("option path is invalid");
    Q += "; Path=" + X.path;
  }
  if (X.expires) {
    var U = X.expires;
    if (!X7(U) || isNaN(U.valueOf()))
      throw new TypeError("option expires is invalid");
    Q += "; Expires=" + U.toUTCString();
  }
  if (X.httpOnly)
    Q += "; HttpOnly";
  if (X.secure)
    Q += "; Secure";
  if (X.priority) {
    var F = typeof X.priority === "string" ? X.priority.toLowerCase() : X.priority;
    switch (F) {
      case "low":
        Q += "; Priority=Low";
        break;
      case "medium":
        Q += "; Priority=Medium";
        break;
      case "high":
        Q += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (X.sameSite) {
    var D = typeof X.sameSite === "string" ? X.sameSite.toLowerCase() : X.sameSite;
    switch (D) {
      case true:
        Q += "; SameSite=Strict";
        break;
      case "lax":
        Q += "; SameSite=Lax";
        break;
      case "strict":
        Q += "; SameSite=Strict";
        break;
      case "none":
        Q += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return Q;
};
var Y7 = function($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
};
var W7 = function($) {
  return encodeURIComponent($);
};
var X7 = function($) {
  return a9.call($) === "[object Date]" || $ instanceof Date;
};
var Z7 = function($, Y) {
  try {
    return Y($);
  } catch (W) {
    return $;
  }
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var n$ = e9;
var o$ = $7;
var a9 = Object.prototype.toString;
var h$ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var t$ = v0(g0(), 1);
var P$ = v0(u$(), 1);
var w8 = v0(F8(), 1);
var D8 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var j8 = ($) => $.slice(0, $.indexOf("/", 11));
var B7 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") || r0(Object.getPrototypeOf($));
var F1 = ($, Y, { skipKeys: W } = {}) => {
  if (D8($) && D8(Y))
    for (let [X, Z] of Object.entries(Y)) {
      if (W?.includes(X))
        continue;
      if (!D8(Z)) {
        $[X] = Z;
        continue;
      }
      if (!(X in $)) {
        $[X] = Z;
        continue;
      }
      if (B7(Z)) {
        $[X] = Z;
        continue;
      }
      $[X] = F1($[X], Z);
    }
  return $;
};
var bW = ($, Y) => F1($, Y, { skipKeys: ["properties"] });
var R0 = ($, Y) => {
  const W = [...Array.isArray($) ? $ : [$]], X = [];
  for (let Z of W)
    if (Z.$elysiaChecksum)
      X.push(Z.$elysiaChecksum);
  for (let Z of Array.isArray(Y) ? Y : [Y])
    if (!X.includes(Z?.$elysiaChecksum))
      W.push(Z);
  return W;
};
var S1 = ($, Y) => {
  return { body: Y?.body ?? $?.body, headers: Y?.headers ?? $?.headers, params: Y?.params ?? $?.params, query: Y?.query ?? $?.query, response: Y?.response ?? $?.response, type: $?.type || Y?.type, detail: F1(Y?.detail ?? {}, $?.detail ?? {}), parse: R0($?.parse ?? [], Y?.parse ?? []), transform: R0($?.transform ?? [], Y?.transform ?? []), beforeHandle: R0($?.beforeHandle ?? [], Y?.beforeHandle ?? []), afterHandle: R0($?.afterHandle ?? [], Y?.afterHandle ?? []), onResponse: R0($?.onResponse ?? [], Y?.onResponse ?? []), trace: R0($?.trace ?? [], Y?.trace ?? []), error: R0($?.error ?? [], Y?.error ?? []) };
};
var Q1 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $;
  if (Z.type === "object" && ("additionalProperties" in Z) === false)
    Z.additionalProperties = W;
  if (X)
    return { schema: Z, references: "", checkFunc: () => {
    }, code: "", Check: (J) => P$.Value.Check(Z, J), Errors: (J) => P$.Value.Errors(Z, J), Code: () => "" };
  return w8.TypeCompiler.Compile(Z, Object.values(Y));
};
var K8 = ($, { models: Y = {}, additionalProperties: W = false, dynamic: X = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in Y))
    return;
  const Z = typeof $ === "string" ? Y[$] : $, J = (z, U) => {
    if (X)
      return { schema: z, references: "", checkFunc: () => {
      }, code: "", Check: (F) => P$.Value.Check(z, F), Errors: (F) => P$.Value.Errors(z, F), Code: () => "" };
    return w8.TypeCompiler.Compile(z, U);
  };
  if (t$.Kind in Z) {
    if (("additionalProperties" in Z) === false)
      Z.additionalProperties = W;
    return { 200: J(Z, Object.values(Y)) };
  }
  const Q = {};
  return Object.keys(Z).forEach((z) => {
    const U = Z[+z];
    if (typeof U === "string") {
      if (U in Y) {
        const F = Y[U];
        F.type === "object" && ("additionalProperties" in F), Q[+z] = (t$.Kind in F) ? J(F, Object.values(Y)) : F;
      }
      return;
    }
    if (U.type === "object" && ("additionalProperties" in U) === false)
      U.additionalProperties = W;
    Q[+z] = (t$.Kind in U) ? J(U, Object.values(Y)) : U;
  }), Q;
};
var P8 = ($) => {
  let Y = 9;
  for (let W = 0;W < $.length; )
    Y = Math.imul(Y ^ $.charCodeAt(W++), 387420489);
  return Y = Y ^ Y >>> 9;
};
var s$ = ($, Y, W) => {
  const X = (Z) => {
    if (W && !Z.$elysiaChecksum)
      Z.$elysiaChecksum = W;
    return Z;
  };
  return { start: R0($.start, ("start" in Y ? Y.start ?? [] : []).map(X)), request: R0($.request, ("request" in Y ? Y.request ?? [] : []).map(X)), parse: R0($.parse, "parse" in Y ? Y?.parse ?? [] : []).map(X), transform: R0($.transform, (Y?.transform ?? []).map(X)), beforeHandle: R0($.beforeHandle, (Y?.beforeHandle ?? []).map(X)), afterHandle: R0($.afterHandle, (Y?.afterHandle ?? []).map(X)), onResponse: R0($.onResponse, (Y?.onResponse ?? []).map(X)), trace: $.trace, error: R0($.error, (Y?.error ?? []).map(X)), stop: R0($.stop, ("stop" in Y ? Y.stop ?? [] : []).map(X)) };
};
var RW = ($, Y = true) => {
  if (!$)
    return $;
  if (typeof $ === "function") {
    if (Y)
      $.$elysiaHookType = "global";
    else
      $.$elysiaHookType = undefined;
    return $;
  }
  return $.map((W) => {
    if (Y)
      W.$elysiaHookType = "global";
    else
      W.$elysiaHookType = undefined;
    return W;
  });
};
var e1 = ($) => {
  if (!$)
    return $;
  if (typeof $ === "function")
    return $.$elysiaHookType === "global" ? $ : undefined;
  return $.filter((Y) => Y.$elysiaHookType === "global");
};
var O8 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: e1($?.parse), transform: e1($?.transform), beforeHandle: e1($?.beforeHandle), afterHandle: e1($?.afterHandle), onResponse: e1($?.onResponse), error: e1($?.error) };
};
var S8 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var $$ = async ($, Y) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (Y === null)
    throw new TypeError("Secret key must be provided.");
  const W = new TextEncoder, X = await crypto.subtle.importKey("raw", W.encode(Y), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), Z = await crypto.subtle.sign("HMAC", X, W.encode($)), J = Array.from(new Uint8Array(Z)), Q = btoa(String.fromCharCode(...J));
  return `${$}.${Q.replace(/=+$/, "")}`;
};
var L8 = async ($, Y) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (Y === null)
    throw new TypeError("Secret key must be provided.");
  const W = $.slice(0, $.lastIndexOf("."));
  return await $$(W, Y) === $ ? W : false;
};

class a0 {
  $;
  Y;
  name;
  setter;
  constructor($, Y = {}) {
    this._value = $;
    this.property = Y;
  }
  get() {
    return this._value;
  }
  get value() {
    return this._value;
  }
  set value($) {
    if (typeof $ === "object") {
      if (JSON.stringify(this.value) === JSON.stringify($))
        return;
    } else if (this.value === $)
      return;
    this._value = $, this.sync();
  }
  add($) {
    const Y = Object.assign(this.property, typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $);
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  set($) {
    const Y = typeof $ === "function" ? $(Object.assign(this.property, this.value)) : $;
    if ("value" in Y)
      this._value = Y.value, delete Y.value;
    return this.property = Y, this.sync();
  }
  remove($) {
    if (this.value === undefined)
      return;
    this.set({ domain: $?.domain, expires: new Date(0), maxAge: 0, path: $?.path, sameSite: $?.sameSite, secure: $?.secure, value: "" });
  }
  get domain() {
    return this.property.domain;
  }
  set domain($) {
    if (this.property.domain === $)
      return;
    this.property.domain = $, this.sync();
  }
  get expires() {
    return this.property.expires;
  }
  set expires($) {
    if (this.property.expires?.getTime() === $?.getTime())
      return;
    this.property.expires = $, this.sync();
  }
  get httpOnly() {
    return this.property.httpOnly;
  }
  set httpOnly($) {
    if (this.property.domain === $)
      return;
    this.property.httpOnly = $, this.sync();
  }
  get maxAge() {
    return this.property.maxAge;
  }
  set maxAge($) {
    if (this.property.maxAge === $)
      return;
    this.property.maxAge = $, this.sync();
  }
  get path() {
    return this.property.path;
  }
  set path($) {
    if (this.property.path === $)
      return;
    this.property.path = $, this.sync();
  }
  get priority() {
    return this.property.priority;
  }
  set priority($) {
    if (this.property.priority === $)
      return;
    this.property.priority = $, this.sync();
  }
  get sameSite() {
    return this.property.sameSite;
  }
  set sameSite($) {
    if (this.property.sameSite === $)
      return;
    this.property.sameSite = $, this.sync();
  }
  get secure() {
    return this.property.secure;
  }
  set secure($) {
    if (this.property.secure === $)
      return;
    this.property.secure = $, this.sync();
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
  sync() {
    if (!this.name || !this.setter)
      return this;
    if (!this.setter.cookie)
      this.setter.cookie = { [this.name]: Object.assign(this.property, { value: this.toString() }) };
    else
      this.setter.cookie[this.name] = Object.assign(this.property, { value: this.toString() });
    return this;
  }
}
var GW = ($, Y, W) => new Proxy($, { get(X, Z) {
  if (Z in X)
    return X[Z];
  const J = new a0(undefined, W ? { ...W } : undefined);
  return J.setter = Y, J.name = Z, J;
}, set(X, Z, J) {
  if (!(J instanceof a0))
    return false;
  if (!Y.cookie)
    Y.cookie = {};
  return J.setter = Y, J.name = Z, J.sync(), X[Z] = J, true;
} });
var r$ = async ($, Y, { secret: W, sign: X, ...Z } = {}) => {
  if (!Y)
    return GW({}, $, Z);
  const J = {}, Q = typeof W === "string";
  if (X && X !== true && !Array.isArray(X))
    X = [X];
  const z = Object.keys(n$(Y));
  for (let U = 0;U < z.length; U++) {
    const F = z[U];
    let D = n$(Y)[F];
    if (X === true || X?.includes(F)) {
      if (!W)
        throw new Error("No secret is provided to cookie plugin");
      if (Q) {
        if (D = await L8(D, W), D === false)
          throw new r1(F);
      } else {
        let j = true;
        for (let M = 0;M < W.length; M++) {
          const P = await L8(D, W[M]);
          if (P !== false) {
            D = P, j = false;
            break;
          }
        }
        if (j)
          throw new r1(F);
      }
    }
    if (D === undefined)
      continue;
    const S = D.charCodeAt(0);
    if (S === 123 || S === 91)
      try {
        const j = new a0(JSON.parse(D));
        j.setter = $, j.name = F, J[F] = j;
        continue;
      } catch {
      }
    if (!Number.isNaN(+D))
      D = +D;
    else if (D === "true")
      D = true;
    else if (D === "false")
      D = false;
    const b = new a0(D, Z);
    b.setter = $, b.name = F, J[F] = b;
  }
  return GW(J, $);
};
var _W = "toJSON" in new Headers;
var r0 = ($) => {
  for (let Y in $)
    return true;
  return false;
};
var EW = ($, Y) => {
  if (!$ || !Array.isArray(Y))
    return $;
  $.delete("Set-Cookie");
  for (let W = 0;W < Y.length; W++) {
    const X = Y[W].indexOf("=");
    $.append("Set-Cookie", `${Y[W].slice(0, X)}=${Y[W].slice(X + 1)}`);
  }
  return $;
};
var VW = ($) => {
  if (!$ || typeof $ !== "object" || !r0($))
    return;
  const Y = [];
  for (let [W, X] of Object.entries($)) {
    if (!W || !X)
      continue;
    if (Array.isArray(X.value))
      for (let Z = 0;Z < X.value.length; Z++) {
        let J = X.value[Z];
        if (J === undefined || J === null)
          continue;
        if (typeof J === "object")
          J = JSON.stringify(J);
        Y.push(o$(W, J, X));
      }
    else {
      let Z = X.value;
      if (Z === undefined || Z === null)
        continue;
      if (typeof Z === "object")
        Z = JSON.stringify(Z);
      Y.push(o$(W, X.value, X));
    }
  }
  if (Y.length === 0)
    return;
  if (Y.length === 1)
    return Y[0];
  return Y;
};
var D1 = ($, Y) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if (r0(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = S8[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && r0(Y.cookie))
      Y.headers["Set-Cookie"] = VW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = EW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, { status: Y.status, headers: Y.headers });
      case "Object":
      case "Array":
        return Response.json($, Y);
      case "ReadableStream":
        if (!Y.headers["content-type"]?.startsWith("text/event-stream"))
          Y.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, Y);
      case undefined:
        if (!$)
          return new Response("", Y);
        return Response.json($, Y);
      case "Response":
        const W = { ...Y.headers };
        if (_W)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, J] of $.headers.entries())
            if (Z in Y.headers)
              Y.headers[Z] = J;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        return $;
      case "Error":
        return O$($, Y);
      case "Promise":
        return $.then((Z) => D1(Z, Y));
      case "Function":
        return D1($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof a0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Error":
        return O$($, Y);
      case "Promise":
        return $.then((X) => {
          const Z = L1(X);
          if (Z !== undefined)
            return Z;
          return new Response("");
        });
      case "Function":
        return L1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof a0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var e0 = ($, Y) => {
  if ($ === undefined || $ === null)
    return;
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  if (r0(Y.headers) || Y.status !== 200 || Y.redirect || Y.cookie) {
    if (typeof Y.status === "string")
      Y.status = S8[Y.status];
    if (Y.redirect) {
      if (Y.headers.Location = Y.redirect, !Y.status || Y.status < 300 || Y.status >= 400)
        Y.status = 302;
    }
    if (Y.cookie && r0(Y.cookie))
      Y.headers["Set-Cookie"] = VW(Y.cookie);
    if (Y.headers["Set-Cookie"] && Array.isArray(Y.headers["Set-Cookie"]))
      Y.headers = EW(new Headers(Y.headers), Y.headers["Set-Cookie"]);
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($, Y);
      case "Object":
      case "Array":
        return Response.json($, Y);
      case "ReadableStream":
        if (!Y.headers["content-type"]?.startsWith("text/event-stream"))
          Y.headers["content-type"] = "text/event-stream; charset=utf-8";
        return new Response($, Y);
      case undefined:
        if (!$)
          return;
        return Response.json($, Y);
      case "Response":
        const W = Object.assign({}, Y.headers);
        if (_W)
          Y.headers = $.headers.toJSON();
        else
          for (let [Z, J] of $.headers.entries())
            if (!(Z in Y.headers))
              Y.headers[Z] = J;
        for (let Z in W)
          $.headers.append(Z, W[Z]);
        if ($.status !== Y.status)
          Y.status = $.status;
        return $;
      case "Promise":
        return $.then((Z) => {
          const J = e0(Z, Y);
          if (J !== undefined)
            return J;
          return;
        });
      case "Error":
        return O$($, Y);
      case "Function":
        return e0($(), Y);
      case "Number":
      case "Boolean":
        return new Response($.toString(), Y);
      case "Cookie":
        if ($ instanceof a0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const X = JSON.stringify($);
        if (X.charCodeAt(0) === 123) {
          if (!Y.headers["Content-Type"])
            Y.headers["Content-Type"] = "application/json";
          return new Response(JSON.stringify($), Y);
        }
        return new Response(X, Y);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
      case "Blob":
        return new Response($);
      case "Object":
      case "Array":
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "ReadableStream":
        return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        return $;
      case "Promise":
        return $.then((X) => {
          const Z = e0(X, Y);
          if (Z !== undefined)
            return Z;
          return;
        });
      case "Error":
        return O$($, Y);
      case "Function":
        return L1($());
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof a0)
          return new Response($.value, Y);
        return new Response($?.toString(), Y);
      default:
        const W = JSON.stringify($);
        if (W.charCodeAt(0) === 123)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
        return new Response(W);
    }
};
var L1 = ($) => {
  if ($?.$passthrough)
    $ = $[$.$passthrough];
  switch ($?.constructor?.name) {
    case "String":
    case "Blob":
      return new Response($);
    case "Object":
    case "Array":
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "ReadableStream":
      return new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      return $;
    case "Error":
      return O$($);
    case "Promise":
      return $.then((W) => {
        const X = L1(W);
        if (X !== undefined)
          return X;
        return new Response("");
      });
    case "Function":
      return L1($());
    case "Number":
    case "Boolean":
      return new Response($.toString());
    default:
      const Y = JSON.stringify($);
      if (Y.charCodeAt(0) === 123)
        return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      return new Response(Y);
  }
};
var O$ = ($, Y) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: Y?.status !== 200 ? Y?.status ?? 500 : 500, headers: Y?.headers });
var tW = v0(b8(), 1);
var S7 = new Headers().toJSON;
var sW = new RegExp(" (\\w+) = context", "g");
var rW = { value: 0 };
var aW = ({ hasTrace: $, hasTraceSet: Y = false, addFn: W, condition: X = {} }) => {
  if (W("\nconst reporter = getReporter()\n"), $)
    return (Z, { name: J, attribute: Q = "", unit: z = 0 } = {}) => {
      const U = Z.indexOf("."), F = U === -1;
      if (Z !== "request" && Z !== "response" && !X[F ? Z : Z.slice(0, U)])
        return () => {
          if (Y && Z === "afterHandle")
            W("reporter.emit('event',{id,event:'exit',type:'begin',time:0})"), W("\nawait traceDone\n");
        };
      if (F)
        J ||= Z;
      else
        J ||= "anonymous";
      W("\n" + `reporter.emit('event', { 
					id,
					event: '${Z}',
					type: 'begin',
					name: '${J}',
					time: performance.now(),
					${F ? `unit: ${z},` : ""}
					${Q}
				})`.replace(/(\t| |\n)/g, "") + "\n");
      let D = false;
      return () => {
        if (D)
          return;
        if (D = true, W("\n" + `reporter.emit('event', {
							id,
							event: '${Z}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n"), Y && Z === "afterHandle")
          W("\nreporter.emit('event',{id,event:'exit',type:'begin',time:0})\n"), W("\nawait traceDone\n");
      };
    };
  else
    return () => () => {
    };
};
var L$ = ($) => {
  const Y = $.indexOf(")");
  if ($.charCodeAt(Y + 2) === 61 && $.charCodeAt(Y + 5) !== 123)
    return true;
  return $.includes("return");
};
var L7 = ($, { injectResponse: Y = "" } = {}) => ({ composeValidation: (W, X = `c.${W}`) => $ ? `c.set.status = 400; throw new ValidationError(
'${W}',
${W},
${X}
)` : `c.set.status = 400; return new ValidationError(
	'${W}',
	${W},
	${X}
).toResponse(c.set.headers)`, composeResponseValidation: (W = "r") => {
  const X = $ ? `throw new ValidationError(
'response',
response[c.set.status],
${W}
)` : `return new ValidationError(
'response',
response[c.set.status],
${W}
).toResponse(c.set.headers)`;
  return `\n${Y}
		if(response[c.set.status]?.Check(${W}) === false) { 
	if(!(response instanceof Error))
		${X}
}\n`;
} });
var O0 = ($, Y) => {
  if (Y = Y.trimStart(), Y = Y.replaceAll(/^async /g, ""), /^(\w+)\(/g.test(Y))
    Y = Y.slice(Y.indexOf("("));
  const W = Y.charCodeAt(0) === 40 || Y.startsWith("function") ? Y.slice(Y.indexOf("(") + 1, Y.indexOf(")")) : Y.slice(0, Y.indexOf("=") - 1);
  if (W === "")
    return false;
  const X = W.charCodeAt(0) === 123 ? W.indexOf("...") : -1;
  if (W.charCodeAt(0) === 123) {
    if (W.includes($))
      return true;
    if (X === -1)
      return false;
  }
  if (Y.match(new RegExp(`${W}(.${$}|\\["${$}"\\])`)))
    return true;
  const Z = X !== -1 ? W.slice(X + 3, W.indexOf(" ", X + 3)) : undefined;
  if (Y.match(new RegExp(`${Z}(.${$}|\\["${$}"\\])`)))
    return true;
  const J = [W];
  if (Z)
    J.push(Z);
  for (let z of Y.matchAll(sW))
    J.push(z[1]);
  const Q = new RegExp(`{.*?} = (${J.join("|")})`, "g");
  for (let [z] of Y.matchAll(Q))
    if (z.includes(`{ ${$}`) || z.includes(`, ${$}`))
      return true;
  return false;
};
var C$ = ($) => {
  if ($ = $.trimStart(), $ = $.replaceAll(/^async /g, ""), /^(\w+)\(/g.test($))
    $ = $.slice($.indexOf("("));
  const Y = $.charCodeAt(0) === 40 || $.startsWith("function") ? $.slice($.indexOf("(") + 1, $.indexOf(")")) : $.slice(0, $.indexOf("=") - 1);
  if (Y === "")
    return false;
  const W = Y.charCodeAt(0) === 123 ? Y.indexOf("...") : -1, X = W !== -1 ? Y.slice(W + 3, Y.indexOf(" ", W + 3)) : undefined, Z = [Y];
  if (X)
    Z.push(X);
  for (let Q of $.matchAll(sW))
    Z.push(Q[1]);
  for (let Q of Z)
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  const J = new RegExp(`{.*?} = (${Z.join("|")})`, "g");
  for (let [Q] of $.matchAll(J))
    if (new RegExp(`\\b\\w+\\([^)]*\\b${Q}\\b[^)]*\\)`).test($))
      return true;
  return false;
};
var Y$ = Symbol.for("TypeBox.Kind");
var a$ = ($, Y) => {
  if (!Y)
    return;
  if ((Y$ in Y) && Y[Y$] === $)
    return true;
  if (Y.type === "object") {
    const W = Y.properties;
    for (let X of Object.keys(W)) {
      const Z = W[X];
      if (Z.type === "object") {
        if (a$($, Z))
          return true;
      } else if (Z.anyOf) {
        for (let J = 0;J < Z.anyOf.length; J++)
          if (a$($, Z.anyOf[J]))
            return true;
      }
      if ((Y$ in Z) && Z[Y$] === $)
        return true;
    }
    return false;
  }
  return Y.properties && (Y$ in Y.properties) && Y.properties[Y$] === $;
};
var R8 = Symbol.for("TypeBox.Transform");
var V1 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    const Y = $.properties;
    for (let W of Object.keys(Y)) {
      const X = Y[W];
      if (X.type === "object") {
        if (V1(X))
          return true;
      } else if (X.anyOf) {
        for (let J = 0;J < X.anyOf.length; J++)
          if (V1(X.anyOf[J]))
            return true;
      }
      if (R8 in X)
        return true;
    }
    return false;
  }
  return (R8 in $) || $.properties && (R8 in $.properties);
};
var C7 = ($) => {
  if (!$)
    return;
  const Y = $?.schema;
  if (Y && ("anyOf" in Y)) {
    let W = false;
    const X = Y.anyOf[0].type;
    for (let Z of Y.anyOf)
      if (Z.type !== X) {
        W = true;
        break;
      }
    if (!W)
      return X;
  }
  return $.schema?.type;
};
var I7 = /(?:return|=>) \S*\(/g;
var B0 = ($) => {
  if ($.constructor.name === "AsyncFunction")
    return true;
  return $.toString().match(I7);
};
var eW = ({ path: $, method: Y, hooks: W, validator: X, handler: Z, handleError: J, definitions: Q, schema: z, onRequest: U, config: F, getReporter: D }) => {
  const S = F.forceErrorEncapsulation || W.error.length > 0 || typeof Bun === "undefined" || W.onResponse.length > 0 || !!W.trace.length, b = W.onResponse.length ? `\n;(async () => {${W.onResponse.map((R, f) => `await res${f}(c)`).join(";")}})();\n` : "", j = W.trace.map((R) => R.toString());
  let M = false;
  if (C$(Z.toString()))
    M = true;
  if (!M)
    for (let [R, f] of Object.entries(W)) {
      if (!Array.isArray(f) || !f.length || !["parse", "transform", "beforeHandle", "afterHandle", "onResponse"].includes(R))
        continue;
      for (let i of f) {
        if (typeof i !== "function")
          continue;
        if (C$(i.toString())) {
          M = true;
          break;
        }
      }
      if (M)
        break;
    }
  const P = { parse: j.some((R) => O0("parse", R)), transform: j.some((R) => O0("transform", R)), handle: j.some((R) => O0("handle", R)), beforeHandle: j.some((R) => O0("beforeHandle", R)), afterHandle: j.some((R) => O0("afterHandle", R)), error: S || j.some((R) => O0("error", R)) }, O = W.trace.length > 0;
  let A = "";
  const w = X || Y !== "GET" && Y !== "HEAD" ? [Z, ...W.transform, ...W.beforeHandle, ...W.afterHandle].map((R) => R.toString()) : [], I = Y !== "GET" && Y !== "HEAD" && (M || W.type !== "none" && (!!X.body || !!W.type || w.some((R) => O0("body", R)))), G = M || X.headers || w.some((R) => O0("headers", R)), k = M || X.cookie || w.some((R) => O0("cookie", R)), _ = X?.cookie?.schema;
  let J0 = "";
  if (_?.sign) {
    if (!_.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${Y}) ${$}.`);
    const R = !_.secrets ? undefined : typeof _.secrets === "string" ? _.secrets : _.secrets[0];
    if (J0 += `const _setCookie = c.set.cookie
		if(_setCookie) {`, _.sign === true)
      J0 += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${R}')
			}`;
    else
      for (let f of _.sign)
        J0 += `if(_setCookie['${f}']?.value) { c.set.cookie['${f}'].value = await signCookie(_setCookie['${f}'].value, '${R}') }\n`;
    J0 += "}\n";
  }
  const { composeValidation: Y0, composeResponseValidation: A0 } = L7(S);
  if (G)
    A += S7 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (k) {
    const R = (i, h) => {
      const q0 = _?.[i] ?? h;
      if (!q0)
        return typeof h === "string" ? `${i}: "${h}",` : `${i}: ${h},`;
      if (typeof q0 === "string")
        return `${i}: '${q0}',`;
      if (q0 instanceof Date)
        return `${i}: new Date(${q0.getTime()}),`;
      return `${i}: ${q0},`;
    }, f = _ ? `{
			secret: ${_.secrets !== undefined ? typeof _.secrets === "string" ? `'${_.secrets}'` : "[" + _.secrets.reduce((i, h) => i + `'${h}',`, "") + "]" : "undefined"},
			sign: ${_.sign === true ? true : _.sign !== undefined ? "[" + _.sign.reduce((i, h) => i + `'${h}',`, "") + "]" : "undefined"},
			${R("domain")}
			${R("expires")}
			${R("httpOnly")}
			${R("maxAge")}
			${R("path", "/")}
			${R("priority")}
			${R("sameSite")}
			${R("secure")}
		}` : "undefined";
    if (G)
      A += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${f})\n`;
    else
      A += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${f})\n`;
  }
  if (M || X.query || w.some((R) => O0("query", R)))
    A += `const url = c.request.url

		if(c.qi !== -1) {
			c.query ??= parseQuery(url.substring(c.qi + 1))
		} else {
			c.query ??= {}
		}
		`;
  const h0 = W.trace.map((R) => R.toString()).some((R) => O0("set", R) || C$(R));
  M || W.trace.some((R) => O0("set", R.toString()));
  const N0 = h0 || k || w.some((R) => O0("set", R)) || U.some((R) => O0("set", R.toString()));
  if (O)
    A += "\nconst id = c.$$requestId\n";
  const H0 = aW({ hasTrace: O, hasTraceSet: h0, condition: P, addFn: (R) => {
    A += R;
  } });
  if (A += S ? "try {\n" : "", O) {
    A += "\nconst traceDone = Promise.all([";
    for (let R = 0;R < W.trace.length; R++)
      A += `new Promise(r => { reporter.once(\`res\${id}.${R}\`, r) }),`;
    A += "])\n";
  }
  const n0 = k || I || h0 || B0(Z) || W.parse.length > 0 || W.afterHandle.some(B0) || W.beforeHandle.some(B0) || W.transform.some(B0), $1 = H0("parse", { unit: W.parse.length });
  if (I) {
    const R = C7(X?.body);
    if (W.type && !Array.isArray(W.type)) {
      if (W.type)
        switch (W.type) {
          case "json":
          case "application/json":
            A += "c.body = await c.request.json()\n";
            break;
          case "text":
          case "text/plain":
            A += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            A += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            A += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            A += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}\n`;
            break;
        }
      if (W.parse.length)
        A += "}}";
    } else {
      const i = (() => {
        if (W.parse.length && R && !Array.isArray(W.type)) {
          const h = X?.body?.schema;
          switch (R) {
            case "object":
              if (a$("File", h) || a$("Files", h))
                return `c.body = {}
		
								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue
			
									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
              break;
            default:
              break;
          }
        }
      })();
      if (i)
        A += i;
      else {
        if (A += "\n", A += G ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", A += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n`, W.parse.length) {
          A += "let used = false\n";
          const h = H0("parse", { unit: W.parse.length });
          for (let q0 = 0;q0 < W.parse.length; q0++) {
            const j0 = H0("parse.unit", { name: W.parse[q0].name }), K0 = `bo${q0}`;
            if (q0 !== 0)
              A += "if(!used) {\n";
            if (A += `let ${K0} = parse[${q0}](c, contentType)\n`, A += `if(${K0} instanceof Promise) ${K0} = await ${K0}\n`, A += `if(${K0} !== undefined) { c.body = ${K0}; used = true }\n`, j0(), q0 !== 0)
              A += "}";
          }
          h();
        }
        if (W.parse.length)
          A += "if (!used)";
        A += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break
				
					case 'text/plain':
						c.body = await c.request.text()
						break
				
					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break
				
					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break
				
					case 'multipart/form-data':
						c.body = {}
				
						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue
				
							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
				
						break
					}\n`, A += "}\n";
      }
    }
    A += "\n";
  }
  if ($1(), W?.transform) {
    const R = H0("transform", { unit: W.transform.length });
    for (let f = 0;f < W.transform.length; f++) {
      const i = W.transform[f], h = H0("transform.unit", { name: i.name });
      if (i.$elysia === "derive")
        A += B0(W.transform[f]) ? `Object.assign(c, await transform[${f}](c));` : `Object.assign(c, transform[${f}](c));`;
      else
        A += B0(W.transform[f]) ? `await transform[${f}](c);` : `transform[${f}](c);`;
      h();
    }
    R();
  }
  if (X) {
    if (A += "\n", X.headers) {
      if (A += `if(headers.Check(c.headers) === false) {
				${Y0("headers")}
			}`, V1(X.headers.schema))
        A += "\nc.headers = headers.Decode(c.headers)\n";
    }
    if (X.params) {
      if (A += `if(params.Check(c.params) === false) {
				${Y0("params")}
			}`, V1(X.params.schema))
        A += "\nc.params = params.Decode(c.params)\n";
    }
    if (X.query) {
      if (A += `if(query.Check(c.query) === false) {
				${Y0("query")} 
			}`, V1(X.query.schema))
        A += "\nc.query = query.Decode(Object.assign({}, c.query))\n";
    }
    if (X.body) {
      if (A += `if(body.Check(c.body) === false) { 
				${Y0("body")}
			}`, V1(X.body.schema))
        A += "\nc.body = body.Decode(c.body)\n";
    }
    if (r0(X.cookie?.schema.properties ?? {})) {
      if (A += `const cookieValue = {}
			for(const [key, value] of Object.entries(c.cookie))
				cookieValue[key] = value.value

			if(cookie.Check(cookieValue) === false) {
				${Y0("cookie", "cookieValue")}
			}`, V1(X.cookie.schema))
        A += "\nc.cookie = params.Decode(c.cookie)\n";
    }
  }
  if (W?.beforeHandle) {
    const R = H0("beforeHandle", { unit: W.beforeHandle.length });
    for (let f = 0;f < W.beforeHandle.length; f++) {
      const i = H0("beforeHandle.unit", { name: W.beforeHandle[f].name }), h = `be${f}`;
      if (!L$(W.beforeHandle[f].toString()))
        A += B0(W.beforeHandle[f]) ? `await beforeHandle[${f}](c);\n` : `beforeHandle[${f}](c);\n`, i();
      else {
        A += B0(W.beforeHandle[f]) ? `let ${h} = await beforeHandle[${f}](c);\n` : `let ${h} = beforeHandle[${f}](c);\n`, i(), A += `if(${h} !== undefined) {\n`;
        const j0 = H0("afterHandle", { unit: W.transform.length });
        if (W.afterHandle) {
          const K0 = h;
          for (let P0 = 0;P0 < W.afterHandle.length; P0++) {
            const M0 = L$(W.afterHandle[P0].toString()), w1 = H0("afterHandle.unit", { name: W.afterHandle[P0].name });
            if (A += `c.response = ${K0}\n`, !M0)
              A += B0(W.afterHandle[P0]) ? `await afterHandle[${P0}](c, ${K0});\n` : `afterHandle[${P0}](c, ${K0});\n`;
            else {
              const K = `af${P0}`;
              A += B0(W.afterHandle[P0]) ? `const ${K} = await afterHandle[${P0}](c);\n` : `const ${K} = afterHandle[${P0}](c);\n`, A += `if(${K} !== undefined) { c.response = ${K0} = ${K} }\n`;
            }
            w1();
          }
        }
        if (j0(), X.response)
          A += A0(h);
        A += J0, A += `return mapEarlyResponse(${h}, c.set)}\n`;
      }
    }
    R();
  }
  if (W?.afterHandle.length) {
    const R = H0("handle", { name: Z.name });
    if (W.afterHandle.length)
      A += B0(Z) ? "let r = c.response = await handler(c);\n" : "let r = c.response = handler(c);\n";
    else
      A += B0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n";
    R();
    const f = H0("afterHandle", { unit: W.afterHandle.length });
    for (let i = 0;i < W.afterHandle.length; i++) {
      const h = `af${i}`, q0 = L$(W.afterHandle[i].toString()), j0 = H0("afterHandle.unit", { name: W.afterHandle[i].name });
      if (!q0)
        A += B0(W.afterHandle[i]) ? `await afterHandle[${i}](c)\n` : `afterHandle[${i}](c)\n`, j0();
      else {
        if (X.response)
          A += B0(W.afterHandle[i]) ? `let ${h} = await afterHandle[${i}](c)\n` : `let ${h} = afterHandle[${i}](c)\n`;
        else
          A += B0(W.afterHandle[i]) ? `let ${h} = mapEarlyResponse(await afterHandle[${i}](c), c.set)\n` : `let ${h} = mapEarlyResponse(afterHandle[${i}](c), c.set)\n`;
        if (j0(), X.response) {
          if (A += `if(${h} !== undefined) {`, A += A0(h), A += `${h} = mapEarlyResponse(${h}, c.set)\n`, A += `if(${h}) {`, f(), h0)
            A += `${h} = mapEarlyResponse(${h}, c.set)\n`;
          A += `return ${h} } }`;
        } else
          A += `if(${h}) {`, f(), A += `return ${h}}\n`;
      }
    }
    if (f(), A += "r = c.response\n", X.response)
      A += A0();
    if (A += J0, N0)
      A += "return mapResponse(r, c.set)\n";
    else
      A += "return mapCompactResponse(r)\n";
  } else {
    const R = H0("handle", { name: Z.name });
    if (X.response)
      if (A += B0(Z) ? "const r = await handler(c);\n" : "const r = handler(c);\n", R(), A += A0(), H0("afterHandle")(), A += J0, N0)
        A += "return mapResponse(r, c.set)\n";
      else
        A += "return mapCompactResponse(r)\n";
    else if (P.handle || k)
      if (A += B0(Z) ? "let r = await handler(c);\n" : "let r = handler(c);\n", R(), H0("afterHandle")(), A += J0, N0)
        A += "return mapResponse(r, c.set)\n";
      else
        A += "return mapCompactResponse(r)\n";
    else {
      R();
      const f = B0(Z) ? "await handler(c) " : "handler(c)";
      if (H0("afterHandle")(), N0)
        A += `return mapResponse(${f}, c.set)\n`;
      else
        A += `return mapCompactResponse(${f})\n`;
    }
  }
  if (S || b) {
    if (A += `
} catch(error) {`, !n0)
      A += "return (async () => {";
    A += `const set = c.set

		if (!set.status || set.status < 300) set.status = error?.status || 500
	`;
    const R = H0("error", { unit: W.error.length });
    if (W.error.length) {
      A += `
				c.error = error
				c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
			`;
      for (let f = 0;f < W.error.length; f++) {
        const i = `er${f}`, h = H0("error.unit", { name: W.error[f].name });
        if (A += `\nlet ${i} = handleErrors[${f}](c)\n`, B0(W.error[f]))
          A += `if (${i} instanceof Promise) ${i} = await ${i}\n`;
        h(), A += `${i} = mapEarlyResponse(${i}, set)\n`, A += `if (${i}) {`, A += `return ${i} }\n`;
      }
    }
    if (R(), A += "return handleError(c, error)\n\n", !n0)
      A += "})()";
    if (A += "}", b || O) {
      A += " finally { ";
      const f = H0("response", { unit: W.onResponse.length });
      A += b, f(), A += "}";
    }
  }
  return A = `const { 
		handler,
		handleError,
		hooks: {
			transform,
			beforeHandle,
			afterHandle,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie
	} = hooks

	${W.onResponse.length ? `const ${W.onResponse.map((R, f) => `res${f} = onResponse[${f}]`).join(",")}` : ""}

	return ${n0 ? "async" : ""} function(c) {
		${z && Q ? "c.schema = schema; c.defs = definitions;" : ""}
		${A}
	}`, Function("hooks", A)({ handler: Z, hooks: W, validator: X, handleError: J, utils: { mapResponse: D1, mapCompactResponse: L1, mapEarlyResponse: e0, parseQuery: tW.parse }, error: { NotFoundError: O1, ValidationError: U0, InternalServerError: w$ }, schema: z, definitions: Q, ERROR_CODE: _1, getReporter: D, requestId: rW, parseCookie: r$, signCookie: $$ });
};
var G8 = ($) => {
  let Y = "", W = "";
  for (let j of Object.keys($.decorators))
    Y += `,${j}: app.decorators.${j}`;
  const { router: X, staticRouter: Z } = $, J = $.event.trace.length > 0, Q = `
	const route = find(request.method, path) ${X.root.ALL ? '?? find("ALL", path)' : ""}
	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : `new Response(error404, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})`}

	ctx.params = route.params

	return route.store(ctx)`;
  let z = "";
  for (let [j, { code: M, all: P }] of Object.entries(Z.map))
    z += `case '${j}':\nswitch(request.method) {\n${M}\n${P ?? "default: break map"}}\n\n`;
  const U = $.event.request.some(B0);
  W += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter
	} = data

	const notFound = new NotFoundError()

	${$.event.request.length ? "const onRequest = app.event.request" : ""}

	${Z.variables}

	const find = router.find.bind(router)
	const findWs = wsRouter.find.bind(wsRouter)
	const handleError = app.handleError.bind(this)

	${$.event.error.length ? "" : "const error404 = notFound.message.toString()"}

	return ${U ? "async" : ""} function map(request) {
	`;
  const F = $.event.trace.map((j) => j.toString()), D = aW({ hasTrace: J, hasTraceSet: $.event.trace.some((j) => {
    const M = j.toString();
    return O0("set", M) || C$(M);
  }), condition: { request: F.some((j) => O0("request", j) || C$(j)) }, addFn: (j) => {
    W += j;
  } });
  if ($.event.request.length) {
    W += `
			${J ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					cookie: {},
					headers: {},
					status: 200
				}
				${J ? ",$$requestId: +id" : ""}
				${Y}
			}
		`;
    const j = D("request", { attribute: "ctx", unit: $.event.request.length });
    W += "try {\n";
    for (let M = 0;M < $.event.request.length; M++) {
      const P = $.event.request[M], O = L$(P.toString()), A = B0(P), w = D("request.unit", { name: $.event.request[M].name }), I = `re${M}`;
      if (O)
        W += `const ${I} = mapEarlyResponse(
					${A ? "await" : ""} onRequest[${M}](ctx),
					ctx.set
				)\n`, w(), W += `if(${I}) return ${I}\n`;
      else
        W += `${A ? "await" : ""} onRequest[${M}](ctx)\n`, w();
    }
    W += `} catch (error) {
			return app.handleError(ctx, error)
		}`, j(), W += `
		const url = request.url,
		s = url.indexOf('/', 11),
		i = ctx.qi = url.indexOf('?', s + 1),
		path = ctx.path = i === -1 ? url.substring(s) : url.substring(s, i);`;
  } else
    W += `
		const url = request.url,
			s = url.indexOf('/', 11),
			qi = url.indexOf('?', s + 1),
			path = qi === -1
				? url.substring(s)
				: url.substring(s, qi)

		${J ? "const id = +requestId.value++" : ""}

		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: {},
				status: 200
			}
			${J ? ",$$requestId: id" : ""}
			${Y}
		}`, D("request", { unit: $.event.request.length, attribute: F.some((j) => O0("context", j)) || F.some((j) => O0("store", j)) || F.some((j) => O0("set", j)) ? "ctx" : "" })();
  const { wsPaths: S, wsRouter: b } = $;
  if (Object.keys(S).length || b.history.length) {
    W += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [j, M] of Object.entries(S))
      W += `
					case '${j}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${M}(ctx)
							
						break`;
    W += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = findWs('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}\n`;
  }
  return W += `
		map: switch(path) {
			${z}

			default:
				break
		}

		${Q}
	}`, $.handleError = _8($), Function("data", W)({ app: $, mapEarlyResponse: e0, NotFoundError: O1, getReporter: () => $.reporter, requestId: rW });
};
var _8 = ($) => {
  let Y = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE
	} = inject

	return ${$.event.error.find(B0) ? "async" : ""} function(context, error) {
		const { set } = context

		context.code = error.code
		context.error = error
		`;
  for (let W = 0;W < $.event.error.length; W++) {
    const X = $.event.error[W], Z = `${B0(X) ? "await " : ""}onError[${W}](context)`;
    if (L$(X.toString()))
      Y += `const r${W} = ${Z}; if(r${W} !== undefined) {
				if(set.status === 200) set.status = error.status
				return mapResponse(r${W}, set)
			}\n`;
    else
      Y += Z + "\n";
  }
  return Y += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 400
		return new Response(
			error.message, 
			{ headers: set.headers, status: set.status }
		)
	} else {
		return new Response(error.message, { headers: set.headers, status: error.status ?? 500 })
	}
}`, Function("inject", Y)({ app: $, mapResponse: D1, ERROR_CODE: _1 });
};
var e$ = v0(b8(), 1);
var E8 = ($) => async (Y) => {
  const W = { cookie: {}, status: 200, headers: {} };
  let X;
  if ($.decorators)
    X = $.decorators, X.request = Y, X.set = W, X.store = $.store;
  else
    X = { set: W, store: $.store, request: Y };
  const Z = Y.url, J = Z.indexOf("/", 11), Q = Z.indexOf("?", J + 1), z = Q === -1 ? Z.substring(J) : Z.substring(J, Q);
  try {
    for (let O = 0;O < $.event.request.length; O++) {
      const A = $.event.request[O];
      let w = A(X);
      if (w instanceof Promise)
        w = await w;
      if (w = e0(w, W), w)
        return w;
    }
    const U = $.dynamicRouter.find(Y.method, z) ?? $.dynamicRouter.find("ALL", z);
    if (!U)
      throw new O1;
    const { handle: F, hooks: D, validator: S, content: b } = U.store;
    let j;
    if (Y.method !== "GET" && Y.method !== "HEAD")
      if (b)
        switch (b) {
          case "application/json":
            j = await Y.json();
            break;
          case "text/plain":
            j = await Y.text();
            break;
          case "application/x-www-form-urlencoded":
            j = e$.parse(await Y.text());
            break;
          case "application/octet-stream":
            j = await Y.arrayBuffer();
            break;
          case "multipart/form-data":
            j = {};
            const O = await Y.formData();
            for (let A of O.keys()) {
              if (j[A])
                continue;
              const w = O.getAll(A);
              if (w.length === 1)
                j[A] = w[0];
              else
                j[A] = w;
            }
            break;
        }
      else {
        let O = Y.headers.get("content-type");
        if (O) {
          const A = O.indexOf(";");
          if (A !== -1)
            O = O.slice(0, A);
          for (let w = 0;w < $.event.parse.length; w++) {
            let I = $.event.parse[w](X, O);
            if (I instanceof Promise)
              I = await I;
            if (I) {
              j = I;
              break;
            }
          }
          if (j === undefined)
            switch (O) {
              case "application/json":
                j = await Y.json();
                break;
              case "text/plain":
                j = await Y.text();
                break;
              case "application/x-www-form-urlencoded":
                j = e$.parse(await Y.text());
                break;
              case "application/octet-stream":
                j = await Y.arrayBuffer();
                break;
              case "multipart/form-data":
                j = {};
                const w = await Y.formData();
                for (let I of w.keys()) {
                  if (j[I])
                    continue;
                  const G = w.getAll(I);
                  if (G.length === 1)
                    j[I] = G[0];
                  else
                    j[I] = G;
                }
                break;
            }
        }
      }
    X.body = j, X.params = U?.params || undefined, X.query = Q === -1 ? {} : e$.parse(Z.substring(Q + 1)), X.headers = {};
    for (let [O, A] of Y.headers.entries())
      X.headers[O] = A;
    const M = S?.cookie?.schema;
    X.cookie = await r$(X.set, X.headers.cookie, M ? { secret: M.secrets !== undefined ? typeof M.secrets === "string" ? M.secrets : M.secrets.join(",") : undefined, sign: M.sign === true ? true : M.sign !== undefined ? typeof M.sign === "string" ? M.sign : M.sign.join(",") : undefined } : undefined);
    for (let O = 0;O < D.transform.length; O++) {
      const A = D.transform[O](X);
      if (D.transform[O].$elysia === "derive")
        if (A instanceof Promise)
          Object.assign(X, await A);
        else
          Object.assign(X, A);
      else if (A instanceof Promise)
        await A;
    }
    if (S) {
      if (S.headers) {
        const O = {};
        for (let A in Y.headers)
          O[A] = Y.headers.get(A);
        if (S.headers.Check(O) === false)
          throw new U0("header", S.headers, O);
      }
      if (S.params?.Check(X.params) === false)
        throw new U0("params", S.params, X.params);
      if (S.query?.Check(X.query) === false)
        throw new U0("query", S.query, X.query);
      if (S.cookie) {
        const O = {};
        for (let [A, w] of Object.entries(X.cookie))
          O[A] = w.value;
        if (S.cookie?.Check(O) === false)
          throw new U0("cookie", S.cookie, O);
      }
      if (S.body?.Check(j) === false)
        throw new U0("body", S.body, j);
    }
    for (let O = 0;O < D.beforeHandle.length; O++) {
      let A = D.beforeHandle[O](X);
      if (A instanceof Promise)
        A = await A;
      if (A !== undefined) {
        X.response = A;
        for (let I = 0;I < D.afterHandle.length; I++) {
          let G = D.afterHandle[I](X);
          if (G instanceof Promise)
            G = await G;
          if (G)
            A = G;
        }
        const w = e0(A, X.set);
        if (w)
          return w;
      }
    }
    let P = F(X);
    if (P instanceof Promise)
      P = await P;
    if (!D.afterHandle.length) {
      const O = S?.response?.[P.status];
      if (O?.Check(P) === false)
        throw new U0("response", O, P);
    } else {
      X.response = P;
      for (let O = 0;O < D.afterHandle.length; O++) {
        let A = D.afterHandle[O](X);
        if (A instanceof Promise)
          A = await A;
        const w = e0(A, X.set);
        if (w !== undefined) {
          const I = S?.response?.[P.status];
          if (I?.Check(w) === false)
            throw new U0("response", I, w);
          return w;
        }
      }
    }
    if (X.set.cookie && M?.sign) {
      const O = !M.secrets ? undefined : typeof M.secrets === "string" ? M.secrets : M.secrets[0];
      if (M.sign === true)
        for (let [A, w] of Object.entries(X.set.cookie))
          X.set.cookie[A].value = await $$(w.value, "${secret}");
      else
        for (let A of M.sign) {
          if (!(A in M.properties))
            continue;
          if (X.set.cookie[A]?.value)
            X.set.cookie[A].value = await $$(X.set.cookie[A].value, O);
        }
    }
    return D1(P, X.set);
  } catch (U) {
    if (U.status)
      W.status = U.status;
    return $.handleError(X, U);
  } finally {
    for (let U of $.event.onResponse)
      await U(X);
  }
};
var $X = ($) => async (Y, W) => {
  const X = Object.assign(Y, { error: W, code: W.code });
  X.set = Y.set;
  for (let Z = 0;Z < $.event.error.length; Z++) {
    let J = $.event.error[Z](X);
    if (J instanceof Promise)
      J = await J;
    if (J !== undefined && J !== null)
      return D1(J, Y.set);
  }
  return new Response(typeof W.cause === "string" ? W.cause : W.message, { headers: Y.set.headers, status: W.status ?? 500 });
};
var o = {};
k8(o, { t: () => {
  {
    return $0.Type;
  }
}, ElysiaType: () => {
  {
    return C1;
  }
} });
var x1 = v0(M$(), 1);
var $0 = v0(g0(), 1);
var WX = v0(u$(), 1);
c(o, v0(M$(), 1));
c(o, v0(F8(), 1));
try {
  x1.TypeSystem.Format("email", ($) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test($)), x1.TypeSystem.Format("uuid", ($) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test($)), x1.TypeSystem.Format("date", ($) => !Number.isNaN(new Date($).getTime())), x1.TypeSystem.Format("date-time", ($) => !Number.isNaN(new Date($).getTime()));
} catch ($) {
}
var YX = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var V8 = ($, Y) => {
  if (!(Y instanceof Blob))
    return false;
  if ($.minSize && Y.size < YX($.minSize))
    return false;
  if ($.maxSize && Y.size > YX($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!Y.type.startsWith($.extension))
        return false;
    } else {
      for (let W = 0;W < $.extension.length; W++)
        if (Y.type.startsWith($.extension[W]))
          return true;
      return false;
    }
  return true;
};
var b7 = x1.TypeSystem.Type("Files", ($, Y) => {
  if (!Array.isArray(Y))
    return V8($, Y);
  if ($.minItems && Y.length < $.minItems)
    return false;
  if ($.maxItems && Y.length > $.maxItems)
    return false;
  for (let W = 0;W < Y.length; W++)
    if (!V8($, Y[W]))
      return false;
  return true;
});
$0.FormatRegistry.Set("numeric", ($) => !!$ && !isNaN(+$));
$0.FormatRegistry.Set("ObjectString", ($) => {
  let Y = $.charCodeAt(0);
  if (Y === 9 || Y === 10 || Y === 32)
    Y = $.trimStart().charCodeAt(0);
  if (Y !== 123 && Y !== 91)
    return false;
  try {
    return JSON.parse($), true;
  } catch {
    return false;
  }
});
var C1 = { Numeric: ($) => {
  const Y = $0.Type.Number($);
  return $0.Type.Transform($0.Type.Union([$0.Type.String({ format: "numeric", default: 0 }), Y])).Decode((W) => {
    const X = +W;
    if (isNaN(X))
      return W;
    if ($ && !WX.Value.Check(Y, X))
      throw new U0("property", Y, X);
    return X;
  }).Encode((W) => W);
}, ObjectString: ($, Y) => $0.Type.Transform($0.Type.Union([$0.Type.String({ format: "ObjectString", default: "" }), $0.Type.Object($, Y)])).Decode((W) => {
  if (typeof W === "string")
    try {
      return JSON.parse(W);
    } catch {
      return W;
    }
  return W;
}).Encode((W) => JSON.stringify(W)), File: x1.TypeSystem.Type("File", V8), Files: ($ = {}) => $0.Type.Transform(b7($)).Decode((Y) => {
  if (Array.isArray(Y))
    return Y;
  return [Y];
}).Encode((Y) => Y), Nullable: ($) => $0.Type.Union([$0.Type.Null(), $]), MaybeEmpty: ($) => $0.Type.Union([$0.Type.Null(), $0.Type.Undefined(), $]), Cookie: ($, Y) => $0.Type.Object($, Y) };
$0.Type.ObjectString = C1.ObjectString;
$0.Type.Numeric = C1.Numeric;
$0.Type.File = ($ = {}) => C1.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
$0.Type.Files = ($ = {}) => C1.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
$0.Type.Nullable = ($) => C1.Nullable($);
$0.Type.MaybeEmpty = C1.MaybeEmpty;
$0.Type.Cookie = C1.Cookie;

class I$ {
  config;
  dependencies = {};
  store = {};
  decorators = {};
  definitions = { type: {}, error: {} };
  schema = {};
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], onResponse: [], trace: [], error: [], stop: [] };
  reporter = new v8;
  server = null;
  getServer() {
    return this.server;
  }
  validator = null;
  router = new I1;
  wsRouter = new I1;
  routes = [];
  staticRouter = { handlers: [], variables: "", map: {}, all: "" };
  wsPaths = {};
  dynamicRouter = new I1;
  lazyLoadModules = [];
  path = "";
  constructor($) {
    this.config = { forceErrorEncapsulation: true, prefix: "", aot: true, strictPath: false, scoped: false, cookie: {}, ...$, seed: $?.seed === undefined ? "" : $?.seed };
  }
  add($, Y, W, X, { allowMeta: Z = false, skipPrefix: J = false } = { allowMeta: false, skipPrefix: false }) {
    if (typeof Y === "string")
      Y = [Y];
    for (let Q of Y) {
      if (Q = Q === "" ? Q : Q.charCodeAt(0) === 47 ? Q : `/${Q}`, this.config.prefix && !J)
        Q = this.config.prefix + Q;
      if (X?.type)
        switch (X.type) {
          case "text":
            X.type = "text/plain";
            break;
          case "json":
            X.type = "application/json";
            break;
          case "formdata":
            X.type = "multipart/form-data";
            break;
          case "urlencoded":
            X.type = "application/x-www-form-urlencoded";
            break;
          case "arrayBuffer":
            X.type = "application/octet-stream";
            break;
          default:
            break;
        }
      const z = this.definitions.type;
      let U = Q1(X?.cookie ?? this.validator?.cookie, { dynamic: !this.config.aot, models: z, additionalProperties: true });
      if (r0(this.config.cookie ?? {}))
        if (U)
          U.schema = bW(U.schema, this.config.cookie ?? {});
        else
          U = Q1($0.Type.Cookie({}, this.config.cookie), { dynamic: !this.config.aot, models: z, additionalProperties: true });
      const F = { body: Q1(X?.body ?? this.validator?.body, { dynamic: !this.config.aot, models: z }), headers: Q1(X?.headers ?? this.validator?.headers, { dynamic: !this.config.aot, models: z, additionalProperties: true }), params: Q1(X?.params ?? this.validator?.params, { dynamic: !this.config.aot, models: z }), query: Q1(X?.query ?? this.validator?.query, { dynamic: !this.config.aot, models: z }), cookie: U, response: K8(X?.response ?? this.validator?.response, { dynamic: !this.config.aot, models: z }) }, D = S1(this.event, X), S = Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
      if (this.config.aot === false) {
        if (this.dynamicRouter.add($, Q, { validator: F, hooks: D, content: X?.type, handle: W }), this.config.strictPath === false)
          this.dynamicRouter.add($, S, { validator: F, hooks: D, content: X?.type, handle: W });
        this.routes.push({ method: $, path: Q, composed: null, handler: W, hooks: D });
        return;
      }
      const b = eW({ path: Q, method: $, hooks: D, validator: F, handler: W, handleError: this.handleError, onRequest: this.event.request, config: this.config, definitions: Z ? this.definitions.type : undefined, schema: Z ? this.schema : undefined, getReporter: () => this.reporter }), j = this.routes.findIndex((M) => M.path === Q && M.method === $);
      if (j !== -1)
        this.routes.splice(j, 1);
      if (this.routes.push({ method: $, path: Q, composed: b, handler: W, hooks: D }), $ === "$INTERNALWS") {
        const M = this.config.strictPath ? undefined : Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/";
        if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
          const P = this.staticRouter.handlers.length;
          if (this.staticRouter.handlers.push(b), this.staticRouter.variables += `const st${P} = staticRouter.handlers[${P}]\n`, this.wsPaths[Q] = P, M)
            this.wsPaths[M] = P;
        } else if (this.wsRouter.add("ws", Q, b), M)
          this.wsRouter.add("ws", M, b);
        return;
      }
      if (Q.indexOf(":") === -1 && Q.indexOf("*") === -1) {
        const M = this.staticRouter.handlers.length;
        if (this.staticRouter.handlers.push(b), this.staticRouter.variables += `const st${M} = staticRouter.handlers[${M}]\n`, !this.staticRouter.map[Q])
          this.staticRouter.map[Q] = { code: "" };
        if ($ === "ALL")
          this.staticRouter.map[Q].all = `default: return st${M}(ctx)\n`;
        else
          this.staticRouter.map[Q].code = `case '${$}': return st${M}(ctx)\n${this.staticRouter.map[Q].code}`;
        if (!this.config.strictPath) {
          if (!this.staticRouter.map[S])
            this.staticRouter.map[S] = { code: "" };
          if ($ === "ALL")
            this.staticRouter.map[S].all = `default: return st${M}(ctx)\n`;
          else
            this.staticRouter.map[S].code = `case '${$}': return st${M}(ctx)\n${this.staticRouter.map[S].code}`;
        }
      } else if (this.router.add($, Q, b), !this.config.strictPath)
        this.router.add($, Q.endsWith("/") ? Q.slice(0, Q.length - 1) : Q + "/", b);
    }
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($) {
    return this.on("parse", $), this;
  }
  onTransform($) {
    return this.on("transform", $), this;
  }
  onBeforeHandle($) {
    return this.on("beforeHandle", $), this;
  }
  onAfterHandle($) {
    return this.on("afterHandle", $), this;
  }
  onResponse($) {
    return this.on("response", $), this;
  }
  trace($) {
    return this.reporter.on("event", p8(() => this.reporter, this.event.trace.length, $)), this.on("trace", $), this;
  }
  addError($, Y) {
    return this.error($, Y);
  }
  error($, Y) {
    switch (typeof $) {
      case "string":
        return Y.prototype[_1] = $, this.definitions.error[$] = Y, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [W, X] of Object.entries($))
      X.prototype[_1] = W, this.definitions.error[W] = X;
    return this;
  }
  onError($) {
    return this.on("error", $), this;
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, Y) {
    for (let W of Array.isArray(Y) ? Y : [Y])
      switch (W = RW(W), $) {
        case "start":
          this.event.start.push(W);
          break;
        case "request":
          this.event.request.push(W);
          break;
        case "response":
          this.event.onResponse.push(W);
          break;
        case "parse":
          this.event.parse.splice(this.event.parse.length - 1, 0, W);
          break;
        case "transform":
          this.event.transform.push(W);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(W);
          break;
        case "afterHandle":
          this.event.afterHandle.push(W);
          break;
        case "trace":
          this.event.trace.push(W);
          break;
        case "error":
          this.event.error.push(W);
          break;
        case "stop":
          this.event.stop.push(W);
          break;
      }
    return this;
  }
  group($, Y, W) {
    const X = new I$({ ...this.config, prefix: "" });
    X.store = this.store, X.getServer = () => this.server;
    const Z = typeof Y === "object", J = (Z ? W : Y)(X);
    if (this.decorators = F1(this.decorators, X.decorators), J.event.request.length)
      this.event.request = [...this.event.request, ...J.event.request];
    if (J.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...J.event.onResponse];
    return this.model(J.definitions.type), Object.values(X.routes).forEach(({ method: Q, path: z, handler: U, hooks: F }) => {
      if (z = (Z ? "" : this.config.prefix) + $ + z, Z) {
        const D = Y, S = F;
        this.add(Q, z, U, S1(D, { ...S, error: !S.error ? J.event.error : Array.isArray(S.error) ? [...S.error, ...J.event.error] : [S.error, ...J.event.error] }));
      } else
        this.add(Q, z, U, S1(F, { error: J.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, Y) {
    if (!Y)
      return this.event = s$(this.event, $), this.validator = { body: $.body, headers: $.headers, params: $.params, query: $.query, response: $.response }, this;
    const W = new I$;
    W.store = this.store;
    const X = Y(W);
    if (this.decorators = F1(this.decorators, W.decorators), X.event.request.length)
      this.event.request = [...this.event.request, ...X.event.request];
    if (X.event.onResponse.length)
      this.event.onResponse = [...this.event.onResponse, ...X.event.onResponse];
    return this.model(X.definitions.type), Object.values(W.routes).forEach(({ method: Z, path: J, handler: Q, hooks: z }) => {
      this.add(Z, J, Q, S1($, { ...z, error: !z.error ? X.event.error : Array.isArray(z.error) ? [...z.error, ...X.event.error] : [z.error, ...X.event.error] }));
    }), this;
  }
  use($) {
    if ($ instanceof Promise)
      return this.lazyLoadModules.push($.then((Y) => {
        if (typeof Y === "function")
          return Y(this);
        if (typeof Y.default === "function")
          return Y.default(this);
        return this._use(Y);
      }).then((Y) => Y.compile())), this;
    else
      return this._use($);
    return this;
  }
  _use($) {
    if (typeof $ === "function") {
      const Z = $(this);
      if (Z instanceof Promise)
        return this.lazyLoadModules.push(Z.then((J) => {
          if (J instanceof I$) {
            this.compile();
            for (let { method: Q, path: z, handler: U, hooks: F } of Object.values(J.routes))
              this.add(Q, z, U, S1(F, { error: J.event.error }));
            return J;
          }
          if (typeof J === "function")
            return J(this);
          if (typeof J.default === "function")
            return J.default(this);
          return this._use(J);
        }).then((J) => J.compile())), this;
      return Z;
    }
    const { name: Y, seed: W } = $.config;
    $.getServer = () => this.getServer();
    const X = $.config.scoped;
    if (X) {
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const J = W !== undefined ? P8(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((Q) => J === Q))
          return this;
        this.dependencies[Y].push(J);
      }
      if ($.model(this.definitions.type), $.error(this.definitions.error), $.onRequest((J) => {
        Object.assign(J, this.decorators), Object.assign(J.store, this.store);
      }), $.event.trace = [...this.event.trace, ...$.event.trace], $.config.aot)
        $.compile();
      const Z = this.mount($.fetch);
      return this.routes = this.routes.concat(Z.routes), this;
    } else {
      $.reporter = this.reporter;
      for (let Z of $.event.trace)
        this.trace(Z);
    }
    this.decorate($.decorators), this.state($.store), this.model($.definitions.type), this.error($.definitions.error);
    for (let { method: Z, path: J, handler: Q, hooks: z } of Object.values($.routes))
      this.add(Z, J, Q, S1(z, { error: $.event.error }));
    if (!X)
      if (Y) {
        if (!(Y in this.dependencies))
          this.dependencies[Y] = [];
        const Z = W !== undefined ? P8(Y + JSON.stringify(W)) : 0;
        if (this.dependencies[Y].some((J) => Z === J))
          return this;
        this.dependencies[Y].push(Z), this.event = s$(this.event, O8($.event), Z);
      } else
        this.event = s$(this.event, O8($.event));
    return this;
  }
  mount($, Y) {
    if (typeof $ === "function" || $.length === 0 || $ === "/") {
      const Z = typeof $ === "function" ? $ : Y, J = async ({ request: Q, path: z }) => Z(new Request(j8(Q.url) + z || "/", Q));
      return this.all("/", J, { type: "none" }), this.all("/*", J, { type: "none" }), this;
    }
    const W = $.length, X = async ({ request: Z, path: J }) => Y(new Request(j8(Z.url) + J.slice(W) || "/", Z));
    return this.all($, X, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), X, { type: "none" }), this;
  }
  get($, Y, W) {
    return this.add("GET", $, Y, W), this;
  }
  post($, Y, W) {
    return this.add("POST", $, Y, W), this;
  }
  put($, Y, W) {
    return this.add("PUT", $, Y, W), this;
  }
  patch($, Y, W) {
    return this.add("PATCH", $, Y, W), this;
  }
  delete($, Y, W) {
    return this.add("DELETE", $, Y, W), this;
  }
  options($, Y, W) {
    return this.add("OPTIONS", $, Y, W), this;
  }
  all($, Y, W) {
    return this.add("ALL", $, Y, W), this;
  }
  head($, Y, W) {
    return this.add("HEAD", $, Y, W), this;
  }
  connect($, Y, W) {
    return this.add("CONNECT", $, Y, W), this;
  }
  ws($, Y) {
    const W = Y.transformMessage ? Array.isArray(Y.transformMessage) ? Y.transformMessage : [Y.transformMessage] : undefined;
    let X = null;
    const Z = Q1(Y?.body, { models: this.definitions.type }), J = Q1(Y?.response, { models: this.definitions.type }), Q = (z) => {
      if (typeof z === "string") {
        const U = z?.charCodeAt(0);
        if (U === 47 || U === 123)
          try {
            z = JSON.parse(z);
          } catch {
          }
        else if (!Number.isNaN(+z))
          z = +z;
      }
      if (W?.length)
        for (let U = 0;U < W.length; U++) {
          const F = W[U](z);
          if (F !== undefined)
            z = F;
        }
      return z;
    };
    return this.route("$INTERNALWS", $, (z) => {
      const { set: U, path: F, qi: D, headers: S, query: b, params: j } = z;
      if (X === null)
        X = this.getServer();
      if (X?.upgrade(z.request, { headers: typeof Y.upgrade === "function" ? Y.upgrade(z) : Y.upgrade, data: { validator: J, open(M) {
        Y.open?.(new a1(M, z));
      }, message: (M, P) => {
        const O = Q(P);
        if (Z?.Check(O) === false)
          return void M.send(new U0("message", Z, O).message);
        Y.message?.(new a1(M, z), O);
      }, drain(M) {
        Y.drain?.(new a1(M, z));
      }, close(M, P, O) {
        Y.close?.(new a1(M, z), P, O);
      } } }))
        return;
      return U.status = 400, "Expected a websocket connection";
    }, { beforeHandle: Y.beforeHandle, transform: Y.transform, headers: Y.headers, params: Y.params, query: Y.query }), this;
  }
  route($, Y, W, { config: X, ...Z } = { config: { allowMeta: false } }) {
    return this.add($, Y, W, Z, X), this;
  }
  state($, Y) {
    switch (typeof $) {
      case "object":
        return this.store = F1(this.store, $), this;
      case "function":
        return this.store = $(this.store), this;
    }
    if (!($ in this.store))
      this.store[$] = Y;
    return this;
  }
  decorate($, Y) {
    switch (typeof $) {
      case "object":
        return this.decorators = F1(this.decorators, $), this;
      case "function":
        return this.decorators = $(this.decorators), this;
    }
    if (!($ in this.decorators))
      this.decorators[$] = Y;
    return this;
  }
  derive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  model($, Y) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([W, X]) => {
          if (!(W in this.definitions.type))
            this.definitions.type[W] = X;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = Y, this;
  }
  mapDerive($) {
    return $.$elysia = "derive", this.onTransform($);
  }
  affix($, Y, W) {
    if (W === "")
      return this;
    const X = ["_", "-", " "], Z = (U) => U[0].toUpperCase() + U.slice(1), J = $ === "prefix" ? (U, F) => X.includes(U.at(-1) ?? "") ? U + F : U + Z(F) : X.includes(W.at(-1) ?? "") ? (U, F) => F + U : (U, F) => F + Z(U), Q = (U) => {
      const F = {};
      switch (U) {
        case "decorator":
          for (let D in this.decorators)
            F[J(W, D)] = this.decorators[D];
          this.decorators = F;
          break;
        case "state":
          for (let D in this.store)
            F[J(W, D)] = this.store[D];
          this.store = F;
          break;
        case "model":
          for (let D in this.definitions.type)
            F[J(W, D)] = this.definitions.type[D];
          this.definitions.type = F;
          break;
        case "error":
          for (let D in this.definitions.error)
            F[J(W, D)] = this.definitions.error[D];
          this.definitions.error = F;
          break;
      }
    }, z = Array.isArray(Y) ? Y : [Y];
    for (let U of z.some((F) => F === "all") ? ["decorator", "state", "model", "error"] : z)
      Q(U);
    return this;
  }
  prefix($, Y) {
    return this.affix("prefix", $, Y);
  }
  suffix($, Y) {
    return this.affix("suffix", $, Y);
  }
  compile() {
    if (this.fetch = this.config.aot ? G8(this) : E8(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => (this.fetch = this.config.aot ? G8(this) : E8(this))($);
  handleError = async ($, Y) => (this.handleError = this.config.aot ? _8(this) : $X(this))($, Y);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, Y) => {
    if (!Bun)
      throw new Error("Bun to run");
    if (this.compile(), typeof $ === "string") {
      if ($ = +$.trim(), Number.isNaN($))
        throw new Error("Port must be a numeric value");
    }
    const W = this.fetch, X = typeof $ === "object" ? { development: !s1, ...this.config.serve, ...$, websocket: { ...this.config.websocket, ...N8 }, fetch: W, error: this.outerErrorHandler } : { development: !s1, ...this.config.serve, websocket: { ...this.config.websocket, ...N8 }, port: $, fetch: W, error: this.outerErrorHandler };
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.server = Bun?.serve(X), this.event.start.length)
      (async () => {
        const Z = Object.assign(this.decorators, { store: this.store, app: this });
        for (let J = 0;J < this.event.transform.length; J++) {
          const Q = this.event.transform[J](Z);
          if (this.event.transform[J].$elysia === "derive")
            if (Q instanceof Promise)
              Object.assign(Z, await Q);
            else
              Object.assign(Z, Q);
        }
        for (let J = 0;J < this.event.start.length; J++)
          this.event.start[J](Z);
      })();
    if (Y)
      Y(this.server);
    return Promise.all(this.lazyLoadModules).then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async () => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server.stop(), this.event.stop.length)
      (async () => {
        const $ = Object.assign(this.decorators, { store: this.store, app: this });
        for (let Y = 0;Y < this.event.transform.length; Y++) {
          const W = this.event.transform[Y]($);
          if (this.event.transform[Y].$elysia === "derive")
            if (W instanceof Promise)
              Object.assign($, await W);
            else
              Object.assign($, W);
        }
        for (let Y = 0;Y < this.event.stop.length; Y++)
          this.event.stop[Y]($);
      })();
  };
  get modules() {
    return Promise.all(this.lazyLoadModules);
  }
}
var export_t = $0.Type;

// node_modules/cbor2/lib/constants.js
var MT = {
  POS_INT: 0,
  NEG_INT: 1,
  BYTE_STRING: 2,
  UTF8_STRING: 3,
  ARRAY: 4,
  MAP: 5,
  TAG: 6,
  SIMPLE_FLOAT: 7
};
var TAG = {
  DATE_STRING: 0,
  DATE_EPOCH: 1,
  POS_BIGINT: 2,
  NEG_BIGINT: 3,
  DECIMAL_FRAC: 4,
  BIGFLOAT: 5,
  BASE64URL_EXPECTED: 21,
  BASE64_EXPECTED: 22,
  BASE16_EXPECTED: 23,
  CBOR: 24,
  URI: 32,
  BASE64URL: 33,
  BASE64: 34,
  MIME: 36,
  SET: 258,
  JSON: 262,
  REGEXP: 21066,
  SELF_DESCRIBED: 55799,
  INVALID_16: 65535,
  INVALID_32: 4294967295,
  INVALID_64: 0xffffffffffffffffn
};
var NUMBYTES = {
  ZERO: 0,
  ONE: 24,
  TWO: 25,
  FOUR: 26,
  EIGHT: 27,
  INDEFINITE: 31
};
var SIMPLE = {
  FALSE: 20,
  TRUE: 21,
  NULL: 22,
  UNDEFINED: 23
};

class SYMS {
  static BREAK = Symbol.for("github.com/hildjj/cbor2/break");
  static ENCODED = Symbol.for("github.com/hildjj/cbor2/cbor-encoded");
}

// node_modules/cbor2/lib/tag.js
class Tag {
  static #tags = new Map;
  tag;
  contents;
  constructor(tag, contents = undefined) {
    this.tag = tag;
    this.contents = contents;
  }
  get noChildren() {
    const decoder = Tag.#tags.get(this.tag);
    return Boolean(decoder?.noChildren);
  }
  static registerDecoder(tag, decoder, description) {
    const old = this.#tags.get(tag);
    this.#tags.set(tag, decoder);
    if (old) {
      if (!("comment" in decoder)) {
        decoder.comment = old.comment;
      }
      if (!("noChildren" in decoder)) {
        decoder.noChildren = old.noChildren;
      }
    }
    if (description && !decoder.comment) {
      decoder.comment = () => `(${description})`;
    }
    return old;
  }
  static clearDecoder(tag) {
    const old = this.#tags.get(tag);
    this.#tags.delete(tag);
    return old;
  }
  *[Symbol.iterator]() {
    yield this.contents;
  }
  push(contents) {
    this.contents = contents;
    return 1;
  }
  decode(options) {
    const decoder = Tag.#tags.get(this.tag);
    if (decoder) {
      return decoder(this, options);
    }
    return this;
  }
  comment(options, depth) {
    const decoder = Tag.#tags.get(this.tag);
    if (decoder?.comment) {
      return decoder.comment(this, options, depth);
    }
    return;
  }
  toCBOR() {
    return [this.tag, this.contents];
  }
  [Symbol.for("nodejs.util.inspect.custom")](_depth, inspectOptions, inspect) {
    return `${this.tag}(${inspect(this.contents, inspectOptions)})`;
  }
}

// node_modules/cbor2/lib/box.js
var getEncoded = function(obj) {
  if (obj && typeof obj === "object") {
    return obj[SYMS.ENCODED];
  }
  return;
};
var saveEncoded = function(obj, orig) {
  Object.defineProperty(obj, SYMS.ENCODED, {
    configurable: true,
    enumerable: false,
    value: orig
  });
};
var box = function(value, orig) {
  const o2 = Object(value);
  saveEncoded(o2, orig);
  return o2;
};

// node_modules/cbor2/lib/utils.js
var hexToU8 = function(str) {
  const len = str.length / 2;
  const res = new Uint8Array(len);
  for (let i = 0;i < len; i++) {
    res[i] = parseInt(str.substr(i << 1, 2), 16);
  }
  return res;
};
var u8toHex = function(u8) {
  return u8.reduce((t, v) => t + v.toString(16).padStart(2, "0"), "");
};
var u8concat = function(u8s) {
  const sz = u8s.reduce((t, v) => t + v.length, 0);
  const ret = new Uint8Array(sz);
  let len = 0;
  for (const u8 of u8s) {
    ret.set(u8, len);
    len += u8.length;
  }
  return ret;
};
var base64ToBytes = function(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
};
var base64UrlToBytes = function(base64url) {
  const s = base64url.replace(/[_-]/g, (m) => urlToNotUrl[m]);
  return base64ToBytes(s.padEnd(Math.ceil(s.length / 4) * 4, "="));
};
var isBigEndian = function() {
  const array = new Uint8Array(4);
  const view = new Uint32Array(array.buffer);
  return !((view[0] = 1) & array[0]);
};
var urlToNotUrl = {
  "-": "+",
  _: "/"
};

// node_modules/cbor2/lib/writer.js
class Writer {
  static defaultOptions = {
    chunkSize: 4096
  };
  #opts;
  #chunks = [];
  #dv = null;
  #offset = 0;
  #length = 0;
  constructor(opts = {}) {
    this.#opts = {
      ...Writer.defaultOptions,
      ...opts
    };
    if (this.#opts.chunkSize < 8) {
      throw new RangeError(`Expected size >= 8, got ${this.#opts.chunkSize}`);
    }
    this.#alloc();
  }
  get length() {
    return this.#length;
  }
  read() {
    this.#trim();
    const ret = new Uint8Array(this.#length);
    let len = 0;
    for (const u8 of this.#chunks) {
      ret.set(u8, len);
      len += u8.length;
    }
    this.#alloc();
    return ret;
  }
  write(buf) {
    const len = buf.length;
    if (len > this.#left()) {
      this.#trim();
      if (len > this.#opts.chunkSize) {
        this.#chunks.push(buf);
        this.#alloc();
      } else {
        this.#alloc();
        this.#chunks[this.#chunks.length - 1].set(buf);
        this.#offset = len;
      }
    } else {
      this.#chunks[this.#chunks.length - 1].set(buf, this.#offset);
      this.#offset += len;
    }
    this.#length += len;
  }
  writeUint8(n) {
    this.#makeSpace(1);
    this.#dv.setUint8(this.#offset, n);
    this.#advance(1);
  }
  writeUint16(n, littleEndian = false) {
    this.#makeSpace(2);
    this.#dv.setUint16(this.#offset, n, littleEndian);
    this.#advance(2);
  }
  writeUint32(n, littleEndian = false) {
    this.#makeSpace(4);
    this.#dv.setUint32(this.#offset, n, littleEndian);
    this.#advance(4);
  }
  writeBigUint64(n, littleEndian = false) {
    this.#makeSpace(8);
    this.#dv.setBigUint64(this.#offset, n, littleEndian);
    this.#advance(8);
  }
  writeInt16(n, littleEndian = false) {
    this.#makeSpace(2);
    this.#dv.setInt16(this.#offset, n, littleEndian);
    this.#advance(2);
  }
  writeInt32(n, littleEndian = false) {
    this.#makeSpace(4);
    this.#dv.setInt32(this.#offset, n, littleEndian);
    this.#advance(4);
  }
  writeBigInt64(n, littleEndian = false) {
    this.#makeSpace(8);
    this.#dv.setBigInt64(this.#offset, n, littleEndian);
    this.#advance(8);
  }
  writeFloat32(n, littleEndian = false) {
    this.#makeSpace(4);
    this.#dv.setFloat32(this.#offset, n, littleEndian);
    this.#advance(4);
  }
  writeFloat64(n, littleEndian = false) {
    this.#makeSpace(8);
    this.#dv.setFloat64(this.#offset, n, littleEndian);
    this.#advance(8);
  }
  clear() {
    this.#length = 0;
    this.#chunks = [];
    this.#alloc();
  }
  #alloc() {
    const buf = new Uint8Array(this.#opts.chunkSize);
    this.#chunks.push(buf);
    this.#offset = 0;
    this.#dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  #trim() {
    if (this.#offset === 0) {
      this.#chunks.pop();
      return;
    }
    const last = this.#chunks.length - 1;
    this.#chunks[last] = this.#chunks[last].subarray(0, this.#offset);
    this.#offset = 0;
    this.#dv = null;
  }
  #left() {
    const last = this.#chunks.length - 1;
    return this.#chunks[last].length - this.#offset;
  }
  #makeSpace(sz) {
    if (this.#left() < sz) {
      this.#trim();
      this.#alloc();
    }
  }
  #advance(sz) {
    this.#offset += sz;
    this.#length += sz;
  }
}

// node_modules/cbor2/lib/float.js
var parseHalf = function(buf, offset = 0) {
  const sign = buf[offset] & 128 ? -1 : 1;
  const exp = (buf[offset] & 124) >> 2;
  const mant = (buf[offset] & 3) << 8 | buf[offset + 1];
  if (!exp) {
    return sign * 0.00000005960464477539063 * mant;
  } else if (exp === 31) {
    if (mant) {
      return NaN;
    }
    return sign * Infinity;
  }
  return sign * 2 ** (exp - 25) * (1024 + mant);
};
var halfToUint = function(half) {
  const dvu32 = new DataView(new ArrayBuffer(4));
  dvu32.setFloat32(0, half, false);
  const u = dvu32.getUint32(0, false);
  if ((u & 8191) !== 0) {
    return null;
  }
  let s16 = u >> 16 & 32768;
  const exp = u >> 23 & 255;
  const mant = u & 8388607;
  if (exp === 0 && mant === 0) {
  } else if (exp >= 113 && exp <= 142) {
    s16 += (exp - 112 << 10) + (mant >> 13);
  } else if (exp >= 103 && exp < 113) {
    if (mant & (1 << 126 - exp) - 1) {
      return null;
    }
    s16 += mant + 8388608 >> 126 - exp;
  } else if (exp === 255) {
    s16 |= 31744;
    s16 |= mant >> 13;
  } else {
    return null;
  }
  return s16;
};

// node_modules/cbor2/lib/encoder.js
var registerEncoder = function(typ, encoder) {
  const old = TYPES.get(typ);
  TYPES.set(typ, encoder);
  return old;
};
var writeFloat = function(val, w, opts) {
  if (opts.rejectFloats) {
    throw new Error(`Attempt to encode an unwanted floating point number: ${val}`);
  }
  if (isNaN(val)) {
    w.writeUint8(HALF);
    w.writeUint16(32256);
  } else if (!opts.float64 && Math.fround(val) === val) {
    const half = halfToUint(val);
    if (half === null) {
      w.writeUint8(FLOAT);
      w.writeFloat32(val);
    } else {
      w.writeUint8(HALF);
      w.writeUint16(half);
    }
  } else {
    w.writeUint8(DOUBLE);
    w.writeFloat64(val);
  }
};
var writeInt = function(val, w, mt) {
  const neg = val < 0;
  const pos = neg ? -val - 1 : val;
  if (neg && mt) {
    throw new TypeError(`Negative size: ${val}`);
  }
  mt ??= neg ? MT.NEG_INT : MT.POS_INT;
  mt <<= 5;
  if (pos < 24) {
    w.writeUint8(mt | pos);
  } else if (pos <= 255) {
    w.writeUint8(mt | NUMBYTES.ONE);
    w.writeUint8(pos);
  } else if (pos <= 65535) {
    w.writeUint8(mt | NUMBYTES.TWO);
    w.writeUint16(pos);
  } else if (pos <= 4294967295) {
    w.writeUint8(mt | NUMBYTES.FOUR);
    w.writeUint32(pos);
  } else {
    w.writeUint8(mt | NUMBYTES.EIGHT);
    w.writeBigUint64(BigInt(pos));
  }
};
var writeBigInt = function(val, w, opts) {
  const neg = val < 0n;
  const pos = neg ? -val - 1n : val;
  if (opts.collapseBigInts && (!opts.largeNegativeAsBigInt || val >= -0x8000000000000000n)) {
    if (pos <= 0xffffffffn) {
      writeInt(Number(val), w);
      return;
    }
    if (pos <= 0xffffffffffffffffn) {
      const mt = (neg ? MT.NEG_INT : MT.POS_INT) << 5;
      w.writeUint8(mt | NUMBYTES.EIGHT);
      w.writeBigUint64(pos);
      return;
    }
  }
  if (opts.rejectBigInts) {
    throw new Error(`Attempt to encode unwanted bigint: ${val}`);
  }
  const tag2 = neg ? TAG.NEG_BIGINT : TAG.POS_BIGINT;
  const s = pos.toString(16);
  const z = s.length % 2 ? "0" : "";
  writeTag(tag2, w);
  const buf = hexToU8(z + s);
  writeInt(buf.length, w, MT.BYTE_STRING);
  w.write(buf);
};
var writeNumber = function(val, w, opts) {
  if (Object.is(val, -0)) {
    if (opts.simplifyNegativeZero) {
      if (opts.avoidInts) {
        writeFloat(0, w, opts);
      } else {
        writeInt(0, w);
      }
    } else {
      writeFloat(val, w, opts);
    }
  } else if (!opts.avoidInts && Number.isSafeInteger(val)) {
    writeInt(val, w);
  } else {
    writeFloat(val, w, opts);
  }
};
var writeTag = function(tag2, w) {
  if (typeof tag2 === "number") {
    writeInt(tag2, w, MT.TAG);
  } else if (tag2 <= Number.MAX_SAFE_INTEGER) {
    writeInt(Number(tag2), w, MT.TAG);
  } else {
    w.writeUint8(MT.TAG << 5 | NUMBYTES.EIGHT);
    w.writeBigUint64(tag2);
  }
};
var writeString = function(val, w) {
  const utf8 = TE.encode(val);
  writeInt(utf8.length, w, MT.UTF8_STRING);
  w.write(utf8);
};
var writeArray = function(obj, w, opts) {
  const a = obj;
  writeInt(a.length, w, MT.ARRAY);
  for (const i of a) {
    writeUnknown(i, w, opts);
  }
};
var writeUint8Array = function(obj, w) {
  const u = obj;
  writeInt(u.length, w, MT.BYTE_STRING);
  w.write(u);
};
var writeObject = function(obj, w, opts) {
  if (obj === null) {
    w.writeUint8(NULL);
    return;
  }
  if (!opts.ignoreOriginalEncoding && (SYMS.ENCODED in obj)) {
    w.write(obj[SYMS.ENCODED]);
    return;
  }
  const encoder = TYPES.get(obj.constructor);
  if (encoder) {
    const res = encoder(obj, w, opts);
    if (res) {
      if (typeof res[0] === "bigint" || isFinite(res[0])) {
        writeTag(res[0], w);
      }
      writeUnknown(res[1], w, opts);
    }
    return;
  }
  if (typeof obj.toCBOR === "function") {
    const res = obj.toCBOR(w, opts);
    if (res) {
      if (typeof res[0] === "bigint" || isFinite(res[0])) {
        writeTag(res[0], w);
      }
      writeUnknown(res[1], w, opts);
    }
    return;
  }
  if (typeof obj.toJSON === "function") {
    writeUnknown(obj.toJSON(), w, opts);
    return;
  }
  const entries = Object.entries(obj).map((e) => [e[0], e[1], encode(e[0], opts)]);
  if (opts.sortKeys) {
    entries.sort(opts.sortKeys);
  }
  writeInt(entries.length, w, MT.MAP);
  for (const [_k, v, e] of entries) {
    w.write(e);
    writeUnknown(v, w, opts);
  }
};
var writeUnknown = function(val, w, opts) {
  switch (typeof val) {
    case "number":
      writeNumber(val, w, opts);
      break;
    case "bigint":
      writeBigInt(val, w, opts);
      break;
    case "string":
      writeString(val, w);
      break;
    case "boolean":
      w.writeUint8(val ? TRUE : FALSE);
      break;
    case "undefined":
      if (opts.rejectUndefined) {
        throw new Error("Attempt to encode unwanted undefined.");
      }
      w.writeUint8(UNDEFINED);
      break;
    case "object":
      writeObject(val, w, opts);
      break;
    case "symbol":
      throw new TypeError(`Unknown symbol: ${val.toString()}`);
    default:
      throw new TypeError(`Unknown type: ${typeof val}, ${String(val)}`);
  }
};
var encode = function(val, options) {
  const opts = {
    ...EncodeOptionsDefault,
    ...options
  };
  const w = new Writer(opts);
  writeUnknown(val, w, opts);
  return w.read();
};
var HALF = MT.SIMPLE_FLOAT << 5 | NUMBYTES.TWO;
var FLOAT = MT.SIMPLE_FLOAT << 5 | NUMBYTES.FOUR;
var DOUBLE = MT.SIMPLE_FLOAT << 5 | NUMBYTES.EIGHT;
var TRUE = MT.SIMPLE_FLOAT << 5 | SIMPLE.TRUE;
var FALSE = MT.SIMPLE_FLOAT << 5 | SIMPLE.FALSE;
var UNDEFINED = MT.SIMPLE_FLOAT << 5 | SIMPLE.UNDEFINED;
var NULL = MT.SIMPLE_FLOAT << 5 | SIMPLE.NULL;
var TE = new TextEncoder;
var EncodeOptionsDefault = {
  ...Writer.defaultOptions,
  avoidInts: false,
  collapseBigInts: true,
  float64: false,
  forceEndian: null,
  ignoreOriginalEncoding: false,
  largeNegativeAsBigInt: false,
  rejectBigInts: false,
  rejectCustomSimples: false,
  rejectDuplicateKeys: false,
  rejectFloats: false,
  rejectUndefined: false,
  simplifyNegativeZero: false,
  sortKeys: null
};
var TYPES = new Map([
  [Array, writeArray],
  [Uint8Array, writeUint8Array]
]);

// node_modules/cbor2/lib/simple.js
class Simple {
  value;
  constructor(value) {
    this.value = value;
  }
  toCBOR(w, opts) {
    if (opts.rejectCustomSimples) {
      throw new Error(`Cannot encode non-standard Simple value: ${this.value}`);
    }
    writeInt(this.value, w, MT.SIMPLE_FLOAT);
  }
  toString() {
    return `simple(${this.value})`;
  }
  [Symbol.for("nodejs.util.inspect.custom")](_depth, inspectOptions, inspect) {
    return `simple(${inspect(this.value, inspectOptions)})`;
  }
}

// node_modules/cbor2/lib/decodeStream.js
var TD = new TextDecoder("utf8", { fatal: true, ignoreBOM: true });

class DecodeStream {
  static defaultOptions = {
    maxDepth: 1024,
    encoding: "hex"
  };
  #src;
  #view;
  #offset = 0;
  #opts;
  constructor(src, opts) {
    this.#opts = {
      ...DecodeStream.defaultOptions,
      ...opts
    };
    if (typeof src === "string") {
      switch (this.#opts.encoding) {
        case "hex":
          this.#src = hexToU8(src);
          break;
        case "base64":
          this.#src = base64ToBytes(src);
          break;
        default:
          throw new TypeError(`Encoding not implemented: "${this.#opts.encoding}"`);
      }
    } else {
      this.#src = src;
    }
    this.#view = new DataView(this.#src.buffer, this.#src.byteOffset, this.#src.byteLength);
  }
  toHere(begin) {
    return this.#src.subarray(begin, this.#offset);
  }
  *[Symbol.iterator]() {
    yield* this.#nextVal(0);
    if (this.#offset !== this.#src.length) {
      throw new Error("Extra data in input");
    }
  }
  *#nextVal(depth) {
    if (depth++ > this.#opts.maxDepth) {
      throw new Error(`Maximum depth ${this.#opts.maxDepth} exceeded`);
    }
    const prevOffset = this.#offset;
    const octet = this.#view.getUint8(this.#offset++);
    const mt = octet >> 5;
    const ai = octet & 31;
    let val = ai;
    let simple2 = false;
    let len = 0;
    switch (ai) {
      case NUMBYTES.ONE:
        len = 1;
        val = this.#view.getUint8(this.#offset);
        if (mt === MT.SIMPLE_FLOAT) {
          if (val < 32) {
            throw new Error(`Invalid simple encoding in extra byte: ${val}`);
          }
          simple2 = true;
        }
        break;
      case NUMBYTES.TWO:
        len = 2;
        if (mt === MT.SIMPLE_FLOAT) {
          val = parseHalf(this.#src, this.#offset);
        } else {
          val = this.#view.getUint16(this.#offset, false);
        }
        break;
      case NUMBYTES.FOUR:
        len = 4;
        if (mt === MT.SIMPLE_FLOAT) {
          val = this.#view.getFloat32(this.#offset, false);
        } else {
          val = this.#view.getUint32(this.#offset, false);
        }
        break;
      case NUMBYTES.EIGHT: {
        len = 8;
        if (mt === MT.SIMPLE_FLOAT) {
          val = this.#view.getFloat64(this.#offset, false);
        } else {
          val = this.#view.getBigUint64(this.#offset, false);
          if (val <= Number.MAX_SAFE_INTEGER) {
            val = Number(val);
          }
        }
        break;
      }
      case 28:
      case 29:
      case 30:
        throw new Error(`Additional info not implemented: ${ai}`);
      case NUMBYTES.INDEFINITE:
        switch (mt) {
          case MT.POS_INT:
          case MT.NEG_INT:
          case MT.TAG:
            throw new Error(`Invalid indefinite encoding for MT ${mt}`);
          case MT.SIMPLE_FLOAT:
            yield [mt, ai, SYMS.BREAK, prevOffset, 0];
            return;
        }
        val = Infinity;
        break;
      default:
        simple2 = true;
    }
    this.#offset += len;
    switch (mt) {
      case MT.POS_INT:
        yield [mt, ai, val, prevOffset, len];
        break;
      case MT.NEG_INT:
        yield [mt, ai, typeof val === "bigint" ? -1n - val : -1 - Number(val), prevOffset, len];
        break;
      case MT.BYTE_STRING:
        if (val === Infinity) {
          yield* this.#stream(mt, depth, prevOffset);
        } else {
          yield [mt, ai, this.#read(val), prevOffset, val];
        }
        break;
      case MT.UTF8_STRING:
        if (val === Infinity) {
          yield* this.#stream(mt, depth, prevOffset);
        } else {
          yield [mt, ai, TD.decode(this.#read(val)), prevOffset, val];
        }
        break;
      case MT.ARRAY:
        if (val === Infinity) {
          yield* this.#stream(mt, depth, prevOffset, false);
        } else {
          const nval = Number(val);
          yield [mt, ai, nval, prevOffset, len];
          for (let i = 0;i < nval; i++) {
            yield* this.#nextVal(depth + 1);
          }
        }
        break;
      case MT.MAP:
        if (val === Infinity) {
          yield* this.#stream(mt, depth, prevOffset, false);
        } else {
          const nval = Number(val);
          yield [mt, ai, nval, prevOffset, len];
          for (let i = 0;i < nval; i++) {
            yield* this.#nextVal(depth);
            yield* this.#nextVal(depth);
          }
        }
        break;
      case MT.TAG:
        yield [mt, ai, val, prevOffset, len];
        yield* this.#nextVal(depth);
        break;
      case MT.SIMPLE_FLOAT: {
        const oval = val;
        if (simple2) {
          switch (val) {
            case SIMPLE.FALSE:
              val = false;
              break;
            case SIMPLE.TRUE:
              val = true;
              break;
            case SIMPLE.NULL:
              val = null;
              break;
            case SIMPLE.UNDEFINED:
              val = undefined;
              break;
            default:
              val = new Simple(Number(val));
          }
        }
        yield [mt, ai, val, prevOffset, oval];
        break;
      }
    }
  }
  #read(size) {
    const a = this.#src.subarray(this.#offset, this.#offset += size);
    if (a.length !== size) {
      throw new Error(`Unexpected end of stream reading ${size} bytes, got ${a.length}`);
    }
    return a;
  }
  *#stream(mt, depth, prevOffset, check = true) {
    yield [mt, NUMBYTES.INDEFINITE, Infinity, prevOffset, Infinity];
    while (true) {
      const child = this.#nextVal(depth);
      const first = child.next();
      const [nmt, ai, val] = first.value;
      if (val === SYMS.BREAK) {
        yield first.value;
        child.next();
        return;
      }
      if (check) {
        if (nmt !== mt) {
          throw new Error(`Unmatched major type.  Expected ${mt}, got ${nmt}.`);
        }
        if (ai === NUMBYTES.INDEFINITE) {
          throw new Error("New stream started in typed stream");
        }
      }
      yield first.value;
      yield* child;
    }
  }
}

// node_modules/cbor2/lib/container.js
var LENGTH_FOR_AI = new Map([
  [NUMBYTES.ZERO, 1],
  [NUMBYTES.ONE, 2],
  [NUMBYTES.TWO, 3],
  [NUMBYTES.FOUR, 5],
  [NUMBYTES.EIGHT, 9]
]);
var EMPTY_BUF = new Uint8Array(0);

class CBORcontainer {
  static defaultOptions = {
    ...DecodeStream.defaultOptions,
    ParentType: CBORcontainer,
    boxed: false,
    rejectLargeNegatives: false,
    rejectBigInts: false,
    rejectDuplicateKeys: false,
    rejectFloats: false,
    rejectInts: false,
    rejectLongLoundNaN: false,
    rejectLongNumbers: false,
    rejectNegativeZero: false,
    rejectSimple: false,
    rejectStreaming: false,
    rejectUndefined: false,
    saveOriginal: false,
    sortKeys: null
  };
  parent;
  mt;
  ai;
  left;
  offset;
  count = 0;
  children = [];
  #opts;
  #encodedChildren = null;
  constructor(mav, left, parent, opts) {
    [this.mt, this.ai, , this.offset] = mav;
    this.left = left;
    this.parent = parent;
    this.#opts = opts;
    if (this.mt === MT.MAP) {
      if (this.#opts.sortKeys || this.#opts.rejectDuplicateKeys) {
        this.#encodedChildren = [];
      }
    }
    if (this.#opts.rejectStreaming && this.ai === NUMBYTES.INDEFINITE) {
      throw new Error("Streaming not supported");
    }
  }
  get isStreaming() {
    return this.left === Infinity;
  }
  get done() {
    return this.left === 0;
  }
  static create(mav, parent, opts, stream) {
    const [mt, ai, value, offset] = mav;
    switch (mt) {
      case MT.POS_INT:
      case MT.NEG_INT:
        if (opts.rejectInts) {
          throw new Error(`Unexpected integer: ${value}`);
        }
        if (opts.rejectLongNumbers && ai > NUMBYTES.ZERO) {
          const buf = encode(value, { chunkSize: 9 });
          if (buf.length < LENGTH_FOR_AI.get(ai)) {
            throw new Error(`Int should have been encoded shorter: ${value}`);
          }
        }
        if (opts.rejectLargeNegatives && value < -0x8000000000000000n) {
          throw new Error(`Invalid 65bit negative number: ${value}`);
        }
        if (opts.boxed) {
          return box(value, stream.toHere(offset));
        }
        return value;
      case MT.SIMPLE_FLOAT:
        if (ai > NUMBYTES.ONE) {
          if (opts.rejectFloats) {
            throw new Error(`Decoding unwanted floating point number: ${value}`);
          }
          if (opts.rejectNegativeZero && Object.is(value, -0)) {
            throw new Error("Decoding negative zero");
          }
          if (opts.rejectLongLoundNaN && isNaN(value)) {
            const buf = stream.toHere(offset);
            if (buf.length !== 3 || buf[1] !== 126 || buf[2] !== 0) {
              throw new Error(`Invalid NaN encoding: "${u8toHex(buf)}"`);
            }
          }
          if (opts.rejectLongNumbers) {
            const buf = encode(value, { chunkSize: 9 });
            if (buf[0] >> 5 !== mt) {
              throw new Error(`Should have been encoded as int, not float: ${value}`);
            }
            if (buf.length < LENGTH_FOR_AI.get(ai)) {
              throw new Error(`Int should have been encoded shorter: ${value}`);
            }
          }
          if (opts.boxed) {
            return box(value, stream.toHere(offset));
          }
        } else {
          if (opts.rejectSimple) {
            if (value instanceof Simple) {
              throw new Error(`Invalid simple value: ${value}`);
            }
          }
          if (opts.rejectUndefined) {
            if (value === undefined) {
              throw new Error("Unexpected undefined");
            }
          }
        }
        return value;
      case MT.BYTE_STRING:
      case MT.UTF8_STRING:
        if (value === Infinity) {
          return new opts.ParentType(mav, Infinity, parent, opts);
        }
        if (opts.boxed) {
          return box(value, stream.toHere(offset));
        }
        return value;
      case MT.ARRAY:
        return new opts.ParentType(mav, value, parent, opts);
      case MT.MAP:
        return new opts.ParentType(mav, value * 2, parent, opts);
      case MT.TAG: {
        const ret = new opts.ParentType(mav, 1, parent, opts);
        ret.children = new Tag(value);
        return ret;
      }
    }
    throw new TypeError(`Invalid major type: ${mt}`);
  }
  push(child, stream, offset) {
    this.children.push(child);
    if (this.#encodedChildren) {
      const buf = getEncoded(child) || stream.toHere(offset);
      this.#encodedChildren.push(buf);
    }
    return --this.left;
  }
  replaceLast(child, item, stream) {
    let ret = undefined;
    let last = (-Infinity);
    if (this.children instanceof Tag) {
      last = 0;
      ret = this.children.contents;
      this.children.contents = child;
    } else {
      last = this.children.length - 1;
      ret = this.children[last];
      this.children[last] = child;
    }
    if (this.#encodedChildren) {
      const buf = getEncoded(child) || stream.toHere(item.offset);
      this.#encodedChildren[last] = buf;
    }
    return ret;
  }
  convert(stream) {
    let ret = undefined;
    switch (this.mt) {
      case MT.ARRAY:
        ret = this.children;
        break;
      case MT.MAP: {
        const pu = this.#pairs();
        if (this.#opts.sortKeys) {
          let lastKey = undefined;
          for (const kve of pu) {
            if (lastKey) {
              if (this.#opts.sortKeys(lastKey, kve) >= 0) {
                throw new Error(`Duplicate or out of order key: "0x${kve[2]}"`);
              }
            }
            lastKey = kve;
          }
        } else if (this.#opts.rejectDuplicateKeys) {
          const ks = new Set;
          for (const [_k, _v, e] of pu) {
            const hex = u8toHex(e);
            if (ks.has(hex)) {
              throw new Error(`Duplicate key: "0x${hex}"`);
            }
            ks.add(hex);
          }
        }
        ret = !this.#opts.boxed && pu.every(([k]) => typeof k === "string") ? Object.fromEntries(pu) : new Map(pu);
        break;
      }
      case MT.BYTE_STRING: {
        return u8concat(this.children);
      }
      case MT.UTF8_STRING: {
        const str = this.children.join("");
        ret = this.#opts.boxed ? box(str, stream.toHere(this.offset)) : str;
        break;
      }
      case MT.TAG:
        ret = this.children.decode(this.#opts);
        break;
      default:
        throw new TypeError(`Invalid mt on convert: ${this.mt}`);
    }
    if (this.#opts.saveOriginal && ret && typeof ret === "object") {
      saveEncoded(ret, stream.toHere(this.offset));
    }
    return ret;
  }
  #pairs() {
    const ary = this.children;
    const len = ary.length;
    if (len % 2) {
      throw new Error("Missing map value");
    }
    const ret = new Array(len / 2);
    if (this.#encodedChildren) {
      for (let i = 0;i < len; i += 2) {
        ret[i >> 1] = [ary[i], ary[i + 1], this.#encodedChildren[i]];
      }
    } else {
      for (let i = 0;i < len; i += 2) {
        ret[i >> 1] = [ary[i], ary[i + 1], EMPTY_BUF];
      }
    }
    return ret;
  }
}

// node_modules/cbor2/lib/comment.js
var isCommentContainer = function(o2) {
  return o2 instanceof CommentContainer;
};
var pl = function(num, unit) {
  if (num === Infinity) {
    return "Indefinite";
  }
  if (unit) {
    return `${num} ${unit}${num !== 1 && num !== 1n ? "s" : ""}`;
  }
  return String(num);
};
var spaces = function(num) {
  return "".padStart(num, " ");
};
var output = function(container2, options, index) {
  let ret = "";
  ret += spaces(container2.depth * 2);
  const enc = getEncoded(container2);
  ret += u8toHex(enc.subarray(0, 1));
  const numLen = container2.numBytes();
  if (numLen) {
    ret += " ";
    ret += u8toHex(enc.subarray(1, numLen + 1));
  }
  ret = ret.padEnd(options.minCol + 1, " ");
  ret += "-- ";
  if (index !== undefined) {
    ret += spaces(container2.depth * 2);
    if (index !== "") {
      ret += `[${index}] `;
    }
  }
  let noChildren = false;
  const [firstChild] = container2.children;
  switch (container2.mt) {
    case MT.POS_INT:
      ret += `Unsigned: ${firstChild}`;
      if (typeof firstChild === "bigint") {
        ret += "n";
      }
      break;
    case MT.NEG_INT:
      ret += `Negative: ${firstChild}`;
      if (typeof firstChild === "bigint") {
        ret += "n";
      }
      break;
    case MT.BYTE_STRING:
      ret += `Bytes (Length: ${pl(container2.length)})`;
      break;
    case MT.UTF8_STRING:
      ret += `UTF8 (Length: ${pl(container2.length)})`;
      if (container2.length !== Infinity) {
        ret += `: ${JSON.stringify(firstChild)}`;
      }
      break;
    case MT.ARRAY:
      ret += `Array (Length: ${pl(container2.value, "item")})`;
      break;
    case MT.MAP:
      ret += `Map (Length: ${pl(container2.value, "pair")})`;
      break;
    case MT.TAG: {
      ret += `Tag #${container2.value}`;
      const ct = container2.children;
      const [tagChild] = ct.contents.children;
      const t = new Tag(ct.tag, tagChild);
      saveEncoded(t, enc);
      const c2 = t.comment(options, container2.depth);
      if (c2) {
        ret += ": ";
        ret += c2;
      }
      noChildren ||= t.noChildren;
      break;
    }
    case MT.SIMPLE_FLOAT:
      if (firstChild === SYMS.BREAK) {
        ret += "BREAK";
      } else if (container2.ai > NUMBYTES.ONE) {
        if (Object.is(firstChild, -0)) {
          ret += "Float: -0";
        } else {
          ret += `Float: ${firstChild}`;
        }
      } else {
        ret += "Simple: ";
        if (firstChild instanceof Simple) {
          ret += firstChild.value;
        } else {
          ret += firstChild;
        }
      }
      break;
  }
  if (noChildren) {
  } else if (container2.leaf) {
    ret += "\n";
    if (enc.length > numLen + 1) {
      const ind = spaces((container2.depth + 1) * 2);
      for (let i = numLen + 1;i < enc.length; i += 8) {
        ret += ind;
        ret += u8toHex(enc.subarray(i, i + 8));
        ret += "\n";
      }
    }
  } else {
    ret += "\n";
    let i = 0;
    for (const c2 of container2.children) {
      if (isCommentContainer(c2)) {
        let kv = String(i);
        if (container2.mt === MT.MAP) {
          kv = i % 2 ? `val ${(i - 1) / 2}` : `key ${i / 2}`;
        } else if (container2.mt === MT.TAG) {
          kv = "";
        }
        ret += output(c2, options, kv);
      }
      i++;
    }
  }
  return ret;
};
var comment = function(src, options) {
  const opts = {
    ...CommentOptionsDefault,
    ...options,
    ParentType: CommentContainer,
    saveOriginal: true
  };
  const stream = new DecodeStream(src, opts);
  let parent = undefined;
  let root = undefined;
  for (const mav of stream) {
    root = CBORcontainer.create(mav, parent, opts, stream);
    if (mav[2] === SYMS.BREAK) {
      if (parent?.isStreaming) {
        parent.left = 1;
      } else {
        throw new Error("Unexpected BREAK");
      }
    }
    if (!isCommentContainer(root)) {
      const c2 = new CommentContainer(mav, 0, parent, opts);
      c2.leaf = true;
      c2.children.push(root);
      saveEncoded(c2, stream.toHere(mav[3]));
      root = c2;
    }
    let d = (root.depth + 1) * 2;
    const nb = root.numBytes();
    if (nb) {
      d += 1;
      d += nb * 2;
    }
    opts.minCol = Math.max(opts.minCol, d);
    if (parent) {
      parent.push(root, stream, mav[3]);
    }
    parent = root;
    while (parent?.done) {
      root = parent;
      if (!root.leaf) {
        saveEncoded(root, stream.toHere(root.offset));
      }
      ({ parent } = parent);
    }
  }
  if (options) {
    options.minCol = opts.minCol;
  }
  let ret = opts.noPrefixHex ? "" : `0x${u8toHex(stream.toHere(0))}
`;
  ret += output(root, opts);
  return ret;
};

class CommentContainer extends CBORcontainer {
  depth = 0;
  leaf = false;
  value;
  length;
  [SYMS.ENCODED];
  constructor(mav, left, parent, opts) {
    super(mav, left, parent, opts);
    if (this.parent) {
      this.depth = this.parent.depth + 1;
    } else {
      this.depth = opts.initialDepth;
    }
    [, , this.value, , this.length] = mav;
  }
  numBytes() {
    switch (this.ai) {
      case NUMBYTES.ONE:
        return 1;
      case NUMBYTES.TWO:
        return 2;
      case NUMBYTES.FOUR:
        return 4;
      case NUMBYTES.EIGHT:
        return 8;
    }
    return 0;
  }
}
var CommentOptionsDefault = {
  ...CBORcontainer.defaultOptions,
  initialDepth: 0,
  noPrefixHex: false,
  minCol: 0
};

// node_modules/cbor2/lib/types.js
var assertNumber = function(contents) {
  if (typeof contents === "object" && contents) {
    if (contents.constructor !== Number) {
      throw new Error(`Expected number: ${contents}`);
    }
  } else if (typeof contents !== "number") {
    throw new Error(`Expected number: ${contents}`);
  }
};
var assertString = function(contents) {
  if (typeof contents === "object" && contents) {
    if (contents.constructor !== String) {
      throw new Error(`Expected string: ${contents}`);
    }
  } else if (typeof contents !== "string") {
    throw new Error(`Expected string: ${contents}`);
  }
};
var assertU8 = function(contents) {
  if (!(contents instanceof Uint8Array)) {
    throw new Error(`Expected Uint8Array: ${contents}`);
  }
};
var assertArray = function(contents) {
  if (!Array.isArray(contents)) {
    throw new Error(`Expected Array: ${contents}`);
  }
};
var dateString = function(tag5) {
  assertString(tag5.contents);
  return new Date(tag5.contents);
};
var dateEpoch = function(tag5) {
  assertNumber(tag5.contents);
  return new Date(tag5.contents * 1000);
};
var u8toBigInt = function(neg, tag5, opts) {
  assertU8(tag5.contents);
  if (opts.rejectBigInts) {
    throw new Error(`Decoding unwanted big integer: ${tag5}(h'${u8toHex(tag5.contents)}')`);
  }
  if (opts.rejectLongNumbers && tag5.contents[0] === 0) {
    throw new Error(`Decoding overly-large bigint: ${tag5}(h'${u8toHex(tag5.contents)}`);
  }
  let bi = tag5.contents.reduce((t, v) => t << 8n | BigInt(v), 0n);
  if (neg) {
    bi = -1n - bi;
  }
  if (opts.rejectLongNumbers && bi >= Number.MIN_SAFE_INTEGER && bi <= Number.MAX_SAFE_INTEGER) {
    throw new Error(`Decoding bigint that could have been int: ${bi}n`);
  }
  if (opts.boxed) {
    return box(bi, tag5.contents);
  }
  return bi;
};
var embeddedCBOR = function(tag5, opts) {
  assertU8(tag5.contents);
  return tag5;
};
var convertToTyped = function(tag5, Typ, littleEndian) {
  assertU8(tag5.contents);
  let len = tag5.contents.length;
  if (len % Typ.BYTES_PER_ELEMENT !== 0) {
    throw new Error(`Number of bytes must be divisible by ${Typ.BYTES_PER_ELEMENT}, got: ${len}`);
  }
  len /= Typ.BYTES_PER_ELEMENT;
  const ret = new Typ(len);
  const dv = new DataView(tag5.contents.buffer, tag5.contents.byteOffset, tag5.contents.byteLength);
  const getter = dv[`get${Typ.name.replace(/Array/, "")}`].bind(dv);
  for (let i = 0;i < len; i++) {
    ret[i] = getter(i * Typ.BYTES_PER_ELEMENT, littleEndian);
  }
  return ret;
};
var writeTyped = function(w, littleTag, bigTag, array, opts) {
  const endian = opts.forceEndian ?? LE;
  const tag5 = endian ? littleTag : bigTag;
  writeTag(tag5, w);
  writeInt(array.byteLength, w, MT.BYTE_STRING);
  if (LE === endian) {
    w.write(new Uint8Array(array.buffer, array.byteOffset, array.byteLength));
  } else {
    const nm = `write${array.constructor.name.replace(/Array/, "")}`;
    const setter = w[nm].bind(w);
    for (const i of array) {
      setter(i, endian);
    }
  }
};
var intentionallyUnimplemented = function(obj) {
  throw new Error(`Encoding ${obj.constructor.name} intentionally unimplmented.  It is not concrete enough to interoperate.  Convert to Uint8Array first.`);
};
var writeBoxed = function(obj) {
  return [NaN, obj.valueOf()];
};
var LE = !isBigEndian();
registerEncoder(Map, (obj, w, opts) => {
  const kve = [...obj.entries()].map((e) => [e[0], e[1], encode(e[0], opts)]);
  if (opts.rejectDuplicateKeys) {
    const dups = new Set;
    for (const [_k, _v, e] of kve) {
      const hex = u8toHex(e);
      if (dups.has(hex)) {
        throw new Error(`Duplicate map key: 0x${hex}`);
      }
      dups.add(hex);
    }
  }
  if (opts.sortKeys) {
    kve.sort(opts.sortKeys);
  }
  writeInt(obj.size, w, MT.MAP);
  for (const [_k, v, e] of kve) {
    w.write(e);
    writeUnknown(v, w, opts);
  }
});
dateString.comment = (tag5) => {
  assertString(tag5.contents);
  const decoded = new Date(tag5.contents);
  return `(String Date) ${decoded.toISOString()}`;
};
Tag.registerDecoder(TAG.DATE_STRING, dateString);
dateEpoch.comment = (tag5) => {
  assertNumber(tag5.contents);
  const decoded = new Date(tag5.contents * 1000);
  return `(Epoch Date) ${decoded.toISOString()}`;
};
Tag.registerDecoder(TAG.DATE_EPOCH, dateEpoch);
registerEncoder(Date, (obj) => [TAG.DATE_EPOCH, obj.valueOf() / 1000]);
var u8toBigIntPos = u8toBigInt.bind(null, false);
var u8toBigIntNeg = u8toBigInt.bind(null, true);
u8toBigIntPos.comment = (tag5, opts) => {
  const bi = u8toBigInt(false, tag5, opts);
  return `(Positive BigInt) ${bi}n`;
};
u8toBigIntNeg.comment = (tag5, opts) => {
  const bi = u8toBigInt(true, tag5, opts);
  return `(Negative BigInt) ${bi}n`;
};
Tag.registerDecoder(TAG.POS_BIGINT, u8toBigIntPos);
Tag.registerDecoder(TAG.NEG_BIGINT, u8toBigIntNeg);
embeddedCBOR.comment = (tag5, opts, depth) => {
  assertU8(tag5.contents);
  const embeddedOpts = {
    ...opts,
    initialDepth: depth + 2,
    noPrefixHex: true
  };
  const orig = getEncoded(tag5);
  const tagAI = orig[0] & 31;
  let offset = 2 ** (tagAI - 24) + 1;
  const contentsAI = orig[offset] & 31;
  let malStr = u8toHex(orig.subarray(offset, ++offset));
  if (contentsAI >= 24) {
    malStr += " ";
    malStr += u8toHex(orig.subarray(offset, offset + 2 ** (contentsAI - 24)));
  }
  embeddedOpts.minCol = Math.max(embeddedOpts.minCol, (depth + 1) * 2 + malStr.length);
  const c2 = comment(tag5.contents, embeddedOpts);
  let ret = "Embedded CBOR\n";
  ret += `${"".padStart((depth + 1) * 2, " ")}${malStr}`.padEnd(embeddedOpts.minCol + 1, " ");
  ret += `-- Bytes (Length: ${tag5.contents.length})
`;
  ret += c2;
  return ret;
};
embeddedCBOR.noChildren = true;
Tag.registerDecoder(TAG.CBOR, embeddedCBOR);
Tag.registerDecoder(TAG.URI, (tag5) => {
  assertString(tag5.contents);
  return new URL(tag5.contents);
}, "URI");
registerEncoder(URL, (obj) => [TAG.URI, obj.toString()]);
Tag.registerDecoder(TAG.BASE64URL, (tag5) => {
  assertString(tag5.contents);
  return base64UrlToBytes(tag5.contents);
}, "Base64url-encoded");
Tag.registerDecoder(TAG.BASE64, (tag5) => {
  assertString(tag5.contents);
  return base64ToBytes(tag5.contents);
}, "Base64-encoded");
Tag.registerDecoder(35, (tag5) => {
  assertString(tag5.contents);
  return new RegExp(tag5.contents);
}, "RegExp");
Tag.registerDecoder(21065, (tag5) => {
  assertString(tag5.contents);
  let str = tag5.contents.replace(/(?<!\\)(?<!\[(?:[^\]]|\\\])*)\./g, "[^\n\r]");
  str = `^(?:${str})\$`;
  return new RegExp(str, "u");
}, "I-RegExp");
Tag.registerDecoder(TAG.REGEXP, (tag5) => {
  assertArray(tag5.contents);
  if (tag5.contents.length < 1 || tag5.contents.length > 2) {
    throw new Error(`Invalid RegExp Array: ${tag5.contents}`);
  }
  return new RegExp(tag5.contents[0], tag5.contents[1]);
}, "RegExp");
registerEncoder(RegExp, (obj) => [TAG.REGEXP, [obj.source, obj.flags]]);
Tag.registerDecoder(64, (tag5) => {
  assertU8(tag5.contents);
  return tag5.contents;
}, "uint8 Typed Array");
Tag.registerDecoder(65, (tag5) => convertToTyped(tag5, Uint16Array, false), "uint16, big endian, Typed Array");
Tag.registerDecoder(66, (tag5) => convertToTyped(tag5, Uint32Array, false), "uint32, big endian, Typed Array");
Tag.registerDecoder(67, (tag5) => convertToTyped(tag5, BigUint64Array, false), "uint64, big endian, Typed Array");
Tag.registerDecoder(68, (tag5) => {
  assertU8(tag5.contents);
  return new Uint8ClampedArray(tag5.contents);
}, "uint8 Typed Array, clamped arithmetic");
registerEncoder(Uint8ClampedArray, (u) => [
  68,
  new Uint8Array(u.buffer, u.byteOffset, u.byteLength)
]);
Tag.registerDecoder(69, (tag5) => convertToTyped(tag5, Uint16Array, true), "uint16, little endian, Typed Array");
registerEncoder(Uint16Array, (obj, w, opts) => writeTyped(w, 69, 65, obj, opts));
Tag.registerDecoder(70, (tag5) => convertToTyped(tag5, Uint32Array, true), "uint32, little endian, Typed Array");
registerEncoder(Uint32Array, (obj, w, opts) => writeTyped(w, 70, 66, obj, opts));
Tag.registerDecoder(71, (tag5) => convertToTyped(tag5, BigUint64Array, true), "uint64, little endian, Typed Array");
registerEncoder(BigUint64Array, (obj, w, opts) => writeTyped(w, 71, 67, obj, opts));
Tag.registerDecoder(72, (tag5) => {
  assertU8(tag5.contents);
  return new Int8Array(tag5.contents);
}, "sint8 Typed Array");
registerEncoder(Int8Array, (u) => [
  72,
  new Uint8Array(u.buffer, u.byteOffset, u.byteLength)
]);
Tag.registerDecoder(73, (tag5) => convertToTyped(tag5, Int16Array, false), "sint16, big endian, Typed Array");
Tag.registerDecoder(74, (tag5) => convertToTyped(tag5, Int32Array, false), "sint32, big endian, Typed Array");
Tag.registerDecoder(75, (tag5) => convertToTyped(tag5, BigInt64Array, false), "sint64, big endian, Typed Array");
Tag.registerDecoder(77, (tag5) => convertToTyped(tag5, Int16Array, true), "sint16, little endian, Typed Array");
registerEncoder(Int16Array, (obj, w, opts) => writeTyped(w, 77, 73, obj, opts));
Tag.registerDecoder(78, (tag5) => convertToTyped(tag5, Int32Array, true), "sint32, little endian, Typed Array");
registerEncoder(Int32Array, (obj, w, opts) => writeTyped(w, 78, 74, obj, opts));
Tag.registerDecoder(79, (tag5) => convertToTyped(tag5, BigInt64Array, true), "sint64, little endian, Typed Array");
registerEncoder(BigInt64Array, (obj, w, opts) => writeTyped(w, 79, 75, obj, opts));
Tag.registerDecoder(81, (tag5) => convertToTyped(tag5, Float32Array, false), "IEEE 754 binary32, big endian, Typed Array");
Tag.registerDecoder(82, (tag5) => convertToTyped(tag5, Float64Array, false), "IEEE 754 binary64, big endian, Typed Array");
Tag.registerDecoder(85, (tag5) => convertToTyped(tag5, Float32Array, true), "IEEE 754 binary32, little endian, Typed Array");
registerEncoder(Float32Array, (obj, w, opts) => writeTyped(w, 85, 81, obj, opts));
Tag.registerDecoder(86, (tag5) => convertToTyped(tag5, Float64Array, true), "IEEE 754 binary64, big endian, Typed Array");
registerEncoder(Float64Array, (obj, w, opts) => writeTyped(w, 86, 82, obj, opts));
Tag.registerDecoder(TAG.SET, (tag5) => {
  assertArray(tag5.contents);
  return new Set(tag5.contents);
}, "Set");
registerEncoder(Set, (obj) => [TAG.SET, [...obj]]);
Tag.registerDecoder(TAG.JSON, (tag5) => {
  assertString(tag5.contents);
  return JSON.parse(tag5.contents);
}, "JSON-encoded");
Tag.registerDecoder(TAG.SELF_DESCRIBED, (tag5) => tag5.contents, "Self-Described");
Tag.registerDecoder(TAG.INVALID_16, () => {
  throw new Error(`Tag always invalid: ${TAG.INVALID_16}`);
}, "Invalid");
Tag.registerDecoder(TAG.INVALID_32, () => {
  throw new Error(`Tag always invalid: ${TAG.INVALID_32}`);
}, "Invalid");
Tag.registerDecoder(TAG.INVALID_64, () => {
  throw new Error(`Tag always invalid: ${TAG.INVALID_64}`);
}, "Invalid");
registerEncoder(ArrayBuffer, intentionallyUnimplemented);
registerEncoder(DataView, intentionallyUnimplemented);
if (typeof SharedArrayBuffer !== "undefined") {
  registerEncoder(SharedArrayBuffer, intentionallyUnimplemented);
}
registerEncoder(Boolean, writeBoxed);
registerEncoder(Number, writeBoxed);
registerEncoder(String, writeBoxed);
registerEncoder(BigInt, writeBoxed);

// node_modules/cbor2/lib/decoder.js
var decode = function(src, options) {
  const opts = {
    ...CBORcontainer.defaultOptions,
    ...options
  };
  if (opts.boxed) {
    opts.saveOriginal = true;
  }
  const stream = new DecodeStream(src, opts);
  let parent = undefined;
  let ret = undefined;
  for (const mav of stream) {
    ret = CBORcontainer.create(mav, parent, opts, stream);
    if (mav[2] === SYMS.BREAK) {
      if (parent?.isStreaming) {
        parent.left = 0;
      } else {
        throw new Error("Unexpected BREAK");
      }
    } else if (parent) {
      parent.push(ret, stream, mav[3]);
    }
    if (ret instanceof CBORcontainer) {
      parent = ret;
    }
    while (parent?.done) {
      ret = parent.convert(stream);
      const p = parent.parent;
      p?.replaceLast(ret, parent, stream);
      parent = p;
    }
  }
  return ret;
};

// node_modules/btc-ordinal-dids/src/utils.ts
var getAPI = (network) => {
  if (network === "mainnet" && Bun.env.ORD_API) {
    return Bun.env.ORD_API;
  } else if (network === "regtest" && Bun.env.ORD_REGTEST_API) {
    return Bun.env.ORD_REGTEST_API;
  } else if (network === "signet" && Bun.env.ORD_SIGNET_API) {
    return Bun.env.ORD_SIGNET_API;
  } else if (network === "testnet" && Bun.env.ORD_TESTNET_API) {
    return Bun.env.ORD_TESTNET_API;
  }
  console.log("test!");
  throw new Error(`API environment variable not found for ${network}`);
};
var getNetworkFromDID = (did) => {
  if (did.startsWith("did:btco:sig:")) {
    return "signet";
  } else if (did.startsWith("did:btco:reg:")) {
    return "regtest";
  } else if (did.startsWith("did:btco:test:")) {
    return "testnet";
  } else {
    return "mainnet";
  }
};
var getPrefix = (options = { network: "mainnet" }) => {
  if (options.network === "regtest") {
    return "did:btco:reg:";
  } else if (options.network === "signet") {
    return "did:btco:sig:";
  } else if (options.network === "testnet") {
    return "did:btco:test:";
  }
  return "did:btco:";
};
var decodeCborHex = async (hexString) => {
  const buffer = Buffer.from(hexString, "hex");
  return await decode(buffer);
};

// node_modules/btc-ordinal-dids/src/api.ts
async function fetchSatDetails(sat, options = { network: "mainnet" }) {
  try {
    const response = await fetch(`${getAPI(options.network)}/sat/${sat}`, { headers: { Accept: "application/json" } });
    const { number, name, decimal, inscriptions, satpoint } = await response.json();
    return { num: number, name, decimal, inscriptions, satpoint };
  } catch (e) {
    console.error(e.message);
    return {};
  }
}
async function fetchSatAtInscriptionIndexDetails(sat, index, options = { network: "mainnet" }) {
  try {
    const response = await fetch(`${getAPI(options.network)}/r/sat/${sat}/at/${index}`, { headers: { Accept: "application/json" } });
    const { id } = await response.json();
    return { id };
  } catch (e) {
    console.error(e.message);
    return { id: null };
  }
}
async function fetchMetadata(id, options = { network: "mainnet" }) {
  try {
    const response = await fetch(`${getAPI(options.network)}/r/metadata/${id}`, { headers: { Accept: "application/json" } });
    const data = await response.json();
    return decodeCborHex(data);
  } catch (e) {
    return null;
  }
}
async function fetchContent(id, options = { network: "mainnet" }) {
  const response = await fetch(`${getAPI(options.network)}/content/${id}`);
  if (response.headers.get("Content-Type")?.includes("text/plain")) {
    return await response.text();
  }
  return null;
}

// node_modules/btc-ordinal-dids/src/resolution.ts
var resolve = async (did) => {
  const network = getNetworkFromDID(did);
  const options = { network };
  const prefix = getPrefix(options);
  const sat = did.split(prefix)[1];
  const details = await fetchSatDetails(sat, options);
  const { id } = await fetchSatAtInscriptionIndexDetails(sat, -1, options);
  const content = await fetchContent(id, options);
  if (content === "\uD83D\uDD25") {
    return {
      "@context": "https://w3id.org/did-resolution/v1",
      didDocument: null,
      didResolutionMetadata: {
        did,
        deactivated: true,
        inscriptionId: id
      },
      didDocumentMetadata: {
        writes: details.inscriptions.length
      }
    };
  }
  const didDocument = await fetchMetadata(id, options);
  let error = false;
  if (!didDocument) {
    error = "DID Document not found in metadata";
  } else if (didDocument.id !== content) {
    error = `Metadata ${didDocument.id} does not match inscription content ${content}`;
  } else if (didDocument.id !== did) {
    error = `DID Document id ${didDocument.id} does not match ${did}`;
  } else if (did.split(prefix)[1] !== details.num.toString() && did.split(prefix)[1] !== details.name && did.split(prefix)[1] !== details.decimal) {
    error = `DID ${did} has been written on sat (${details.num}, ${details.name}, ${details.decimal})`;
  }
  if (error) {
    console.error(error);
    return {
      "@context": "https://w3id.org/did-resolution/v1",
      didDocument: null,
      didResolutionMetadata: {
        error,
        did
      },
      didDocumentMetadata: {
        writes: 0
      }
    };
  }
  return {
    "@context": "https://w3id.org/did-resolution/v1",
    didDocument,
    didResolutionMetadata: {
      inscriptionId: id,
      did
    },
    didDocumentMetadata: {
      writes: details.inscriptions.length
    }
  };
};

// index.ts
var app = new I$().get("/1.0/identifiers/:identifier", async ({ params: { identifier } }) => {
  try {
    const did = await resolve(identifier, { network: "signet" });
    if (did.didDocument) {
      console.log(`Resolved ${did.didDocument.id}`);
      return new Response(JSON.stringify(did, null, 2), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response("Not Found", { status: 404 });
  } catch (e) {
    console.error(e.message);
    return new Response("Internal Server Error", { status: 500 });
  }
}).listen(Bun.env.PORT || 8080);
console.log(`\u233E \u233E \u233E did:btco resolver is running on port ${app.server?.port} \u233E \u233E \u233E`);
