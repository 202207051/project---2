// @ts-nocheck
/* eslint-disable */
// 이 파일은 Framer 프로젝트(자동 생성)에서 사용되는 핵심 라이브러리 및 타입을 정의합니다.
// 주로 컴포넌트의 속성, 폰트, 스타일, 데이터 로딩 등 다양한 UI 기능 구현을 위한 구조입니다.

"use client";

// Locale 타입 정의: 다국어 지원을 위해 필요한 언어 코드 문자열을 지정합니다.
 /**
  * @typedef Locale
  * string
  */

/**
 * @typedef {{         // Props 타입 정의
 * children?: React.ReactNode     // 컴포넌트 내부 자식 노드 (JSX 요소)
 * locale?: Locale                // 로케일(언어) 설정(옵션)
 * style?: React.CSSProperties    // 인라인 스타일 지정(옵션)
 * className?: string             // CSS 클래스명(옵션)
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
}} Props
 */

// 스타일, 폰트 관련 라이브러리와 css 유틸 함수들을 한꺼번에 가져옵니다.
import {
    className,
    className2,
    className3,
    css,
    css2,
    css3,
    fonts,
    fonts2,
    fonts3,
    stdin_default,
} from "./chunks/chunk-CBCRBXT4.js";   // UI/스타일 관련 공통 코드 집합

import { routes } from "./chunks/chunk-RX5K52XN.js";   // 각 화면/페이지 경로 사전

// Fragment, 컨텍스트 공급자 등 UI 구성에 필요한 React 객체를 불러옵니다.
import { Fragment as Fragment5 } from "react";
import { ContextProviders } from "unframer";

// 각종 UI 기능(폰트 추가, 이미지, 리치텍스트, SVG 등) 및 내부 State 관리 훅 등을 가져옵니다.
// Unframer 프레임워크의 주요 모듈들로, 슬라이드·트랜지션·효과·컨테이너 등 다양한 인터렉션 처리를 지원합니다.
import {
    jsx as _jsx4,
    jsxs as _jsxs4,
    Fragment as _Fragment2,
    addFonts as addFonts4,
    ChildrenCanSuspend,
    ComponentViewportProvider as ComponentViewportProvider2,
    cx as cx4,
    getFonts as getFonts2,
    getFontsFromSharedStyle as getFontsFromSharedStyle4,
    getLoadingLazyAtYPosition as getLoadingLazyAtYPosition2,
    Image as Image2,
    PathVariablesContext,
    ResolveLinks,
    RichText as RichText4,
    SmartComponentScopedContainer as SmartComponentScopedContainer2,
    SVG as SVG4,
    useComponentViewport as useComponentViewport4,
    useLoadMorePaginatedQuery,
    useLocaleInfo as useLocaleInfo4,
    useQueryData,
    useRouter,
    useVariantState as useVariantState4,
    withCSS as withCSS4,
    withFX as withFX3,
    withOptimizedAppearEffect,
} from "unframer";
import {
    LayoutGroup as LayoutGroup4,
    motion as motion4,
    MotionConfigContext as MotionConfigContext4,
} from "unframer";
import * as React4 from "react";
import { useRef as useRef5 } from "react";

// Unframer 속성 컨트롤과 타입, 쿼리 엔진 등 필요한 객체를 임포트합니다.
import {
    addPropertyControls as e4,
    ControlType as t4,
    QueryEngine as l3,
} from "unframer";
import { ControlType as y } from "unframer";
import { ControlType as P } from "unframer";

// 아래는 JS ES5 스타일의 객체 및 프로퍼티 조작 관련 유틸 함수들입니다.
// 주로 자동 생성코드에서 공유하거나, 높은 범용성을 위한 내부 구현체입니다.

var t;
// Object 생성, 프로퍼티 정의, 프로토타입 상속, 내부 유틸 함수들 선언
var e = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;

// 지정한 객체(t32)에 새 프로퍼티(e42)를 값(n22)으로 할당하는 함수
var o = (t32, e42, n22) =>
    e42 in t32
        ? r(t32, e42, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: n22,
            })
        : (t32[e42] = n22);

// 모듈 패턴을 위한 패키지 로더 (ESM/Node 호환성 처리)
var u = (t32, e42) =>
    function () {
        return (
            e42 ||
                (0, t32[i(t32)[0]])(
                    (e42 = {
                        exports: {},
                    }).exports,
                    e42,
                ),
            e42.exports
        );
    };

// 객체간 프로퍼티 상속 및 병합을 수행하는 유틸 함수
var l = (t32, e42, s22, o22) => {
    if ((e42 && "object" == typeof e42) || "function" == typeof e42)
        for (let u22 of i(e42))
            a.call(t32, u22) ||
                u22 === s22 ||
                r(t32, u22, {
                    get: () => e42[u22],
                    enumerable: !(o22 = n(e42, u22)) || o22.enumerable,
                });
    return t32;
};

// 객체 복사 및 디폴트 설정을 위한 유틸 함수
var h = (t32, n22, i22) => (
    (i22 = null != t32 ? e(s(t32)) : {}),
    l(
        // ESM 파일이거나 Babel 변환된 CommonJS 파일의 호환 처리
        !n22 && t32 && t32.__esModule
            ? i22
            : r(i22, "default", {
                    value: t32,
                    enumerable: true,
                }),
        t32,
    )
);

// 객체의 심볼 프로퍼티를 문자열 형태로 할당
var c = (t32, e42, r22) => o(t32, "symbol" != typeof e42 ? e42 + "" : e42, r22);

// 아래는 DataLoader라는 외부 라이브러리를 바벨 등 변환기 방식에 맞게 등록 하는 모듈 패턴입니다.
var f = u({
    "../../../node_modules/dataloader/index.js"(t32, e42) {
        var r22,
            // DataLoader는 비동기 데이터 배치 로딩을 위한 유틸리티 라이브러리입니다.
            n22 = /* @__PURE__ */ (function () {
                function t42(t5, e6) {
                    // DataLoader는 여러 키를 한 번에 비동기적으로 불러올 때 배치 최적화와 캐싱을 지원합니다.
                    if ("function" != typeof t5)
                        throw TypeError(
                            "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                                t5 +
                                ".",
                        );
                    (this._batchLoadFn = t5),
                        (this._maxBatchSize = (function (t6) {
                            if (!(!t6 || false !== t6.batch)) return 1;
                            var e7 = t6 && t6.maxBatchSize;
                            if (void 0 === e7) return 1 / 0;
                            if ("number" != typeof e7 || e7 < 1)
                                throw TypeError(
                                    "maxBatchSize must be a positive number: " + e7,
                                );
                            return e7;
                        })(e6)),
                        (this._batchScheduleFn = (function (t6) {
                            var e7 = t6 && t6.batchScheduleFn;
                            if (void 0 === e7) return i22;
                            if ("function" != typeof e7)
                                throw TypeError("batchScheduleFn must be a function: " + e7);
                            return e7;
                        })(e6)),
                        (this._cacheKeyFn = (function (t6) {
                            var e7 = t6 && t6.cacheKeyFn;
                            if (void 0 === e7)
                                return function (t7) {
                                    return t7;
                                };
                            if ("function" != typeof e7)
                                throw TypeError("cacheKeyFn must be a function: " + e7);
                            return e7;
                        })(e6)),
                        (this._cacheMap = (function (t6) {
                            if (!(!t6 || false !== t6.cache)) return null;
                            var e7 = t6 && t6.cacheMap;
                            if (void 0 === e7) return /* @__PURE__ */ new Map();
                            if (null !== e7) {
                                var r32 = ["get", "set", "delete", "clear"].filter(
                                    function (t7) {
                                        return e7 && "function" != typeof e7[t7];
                                    },
                                );
                                if (0 !== r32.length)
                                    throw TypeError(
                                        "Custom cacheMap missing methods: " + r32.join(", "),
                                    );
                            }
                            return e7;
                        })(e6)),
                        (this._batch = null),
                        (this.name = e6 && e6.name ? e6.name : null);
                }
                var e5 = t42.prototype;
                // DataLoader 인스턴스에서 키 값을 로드하는 주요 메서드
                return (
                    (e5.load = function (t5) {
                        if (null == t5)
                            throw TypeError(
                                "The loader.load() function must be called with a value, but got: " +
                                    String(t5) +
                                    ".",
                            );
                        var e6 = (function (t6) {
                                var e7 = t6._batch;
                                if (
                                    null !== e7 &&
                                    !e7.hasDispatched &&
                                    e7.keys.length < t6._maxBatchSize
                                )
                                    return e7;
                                var r4 = {
                                    hasDispatched: false,
                                    keys: [],
                                    callbacks: [],
                                };
                                return (
                                    (t6._batch = r4),
                                    t6._batchScheduleFn(function () {
                                        (function (t7, e8) {
                                            var r5;
                                            if (((e8.hasDispatched = true), 0 === e8.keys.length)) {
                                                a22(e8);
                                                return;
                                            }
                                            try {
                                                r5 = t7._batchLoadFn(e8.keys);
                                            } catch (r6) {
                                                return s22(
                                                    t7,
                                                    e8,
                                                    TypeError(
                                                        "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                                            String(r6) +
                                                            ".",
                                                    ),
                                                );
                                            }
                                            if (!r5 || "function" != typeof r5.then)
                                                return s22(
                                                    t7,
                                                    e8,
                                                    TypeError(
                                                        "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                                            String(r5) +
                                                            ".",
                                                    ),
                                                );
                                            r5.then(function (t8) {
                                                if (!o22(t8))
                                                    throw TypeError(
                                                        "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                                            String(t8) +
                                                            ".",
                                                    );
                                                if (t8.length !== e8.keys.length)
                                                    throw TypeError(
                                                        "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                                            String(e8.keys) +
                                                            "\n\nValues:\n" +
                                                            String(t8),
                                                    );
                                                a22(e8);
                                                for (var r6 = 0; r6 < e8.callbacks.length; r6++) {
                                                    var n4 = t8[r6];
                                                    n4 instanceof Error
                                                        ? e8.callbacks[r6].reject(n4)
                                                        : e8.callbacks[r6].resolve(n4);
                                                }
                                            }).catch(function (r6) {
                                                s22(t7, e8, r6);
                                            });
                                        })(t6, r4);
                                    }),
                                    r4
                                );
                            })(this),
                            r32 = this._cacheMap,
                            n32 = this._cacheKeyFn(t5);
                        if (r32) {
                            var i3 = r32.get(n32);
                            if (i3) {
                                var u22 = e6.cacheHits || (e6.cacheHits = []);
                                return new Promise(function (t6) {
                                    u22.push(function () {
                                        t6(i3);
                                    });
                                });
                            }
                        }
                        e6.keys.push(t5);
                        var l22 = new Promise(function (t6, r4) {
                            e6.callbacks.push({
                                resolve: t6,
                                reject: r4,
                            });
                        });
                        return r32 && r32.set(n32, l22), l22;
                    }),
                    // 여러 개의 키를 한꺼번에 로드하는 메서드 (배열 입력, 에러는 배열 단위 처리)
                    (e5.loadMany = function (t5) {
                        if (!o22(t5))
                            throw TypeError(
                                "The loader.loadMany() function must be called with Array<key> but got: " +
                                    t5 +
                                    ".",
                            );
                        for (var e6 = [], r32 = 0; r32 < t5.length; r32++)
                            e6.push(
                                this.load(t5[r32]).catch(function (t6) {
                                    return t6;
                                }),
                            );
                        return Promise.all(e6);
                    }),
                    // 특정 키의 캐시를 삭제
                    (e5.clear = function (t5) {
                        var e6 = this._cacheMap;
                        if (e6) {
                            var r32 = this._cacheKeyFn(t5);
                            e6.delete(r32);
                        }
                        return this;
                    }),
                    // 모든 캐시된 값을 삭제
                    (e5.clearAll = function () {
                        var t5 = this._cacheMap;
                        return t5 && t5.clear(), this;
                    }),
                    // 지정된 키에 대해 강제 캐시(미리 값 채우기)
                    (e5.prime = function (t5, e6) {
                        var r32 = this._cacheMap;
                        if (r32) {
                            var n32,
                                i3 = this._cacheKeyFn(t5);
                            void 0 === r32.get(i3) &&
                                (e6 instanceof Error
                                    ? (n32 = Promise.reject(e6)).catch(function () {})
                                    : (n32 = Promise.resolve(e6)),
                                r32.set(i3, n32));
                        }
                        return this;
                    }),
                    t42
                );
            })(),
            // Node.js 환경에서 nextTick, 그 외에는 setTimeout, setImmediate 등 처리
            i22 =
                "object" == typeof process && "function" == typeof process.nextTick
                    ? function (t42) {
                            r22 || (r22 = Promise.resolve()),
                                r22.then(function () {
                                    process.nextTick(t42);
                                });
                        }
                    : "function" == typeof setImmediate
                        ? function (t42) {
                                setImmediate(t42);
                            }
                        : function (t42) {
                                setTimeout(t42);
                            };
        // 비동기 실패 처리 및 에러 반환 함수
        function s22(t42, e5, r32) {
            a22(e5);
            for (var n32 = 0; n32 < e5.keys.length; n32++)
                t42.clear(e5.keys[n32]), e5.callbacks[n32].reject(r32);
        }
        // 캐시 적중 시 처리 함수
        function a22(t42) {
            if (t42.cacheHits)
                for (var e5 = 0; e5 < t42.cacheHits.length; e5++) t42.cacheHits[e5]();
        }
        // 입력 값이 배열인지 체크하는 도우미 함수
        function o22(t42) {
            return (
                "object" == typeof t42 &&
                null !== t42 &&
                "number" == typeof t42.length &&
                (0 === t42.length ||
                    (t42.length > 0 &&
                        Object.prototype.hasOwnProperty.call(t42, t42.length - 1)))
            );
        }
        e42.exports = n22;
    },
});
var d = h(f());
// h와 f는 외부의 버퍼/뷰를 감쌈. 내부 데이터 핸들링 위한 객체 생성.

// 기본 숫자 타입별 바이트 크기를 저장하는 상수 객체입니다.
var g = {
    Uint8: 1,      // 8비트 부호없는 정수
    Uint16: 2,     // 16비트 부호없는 정수
    Uint32: 4,     // 32비트 부호없는 정수
    BigUint64: 8,  // 64비트 부호없는 bigint (ES2020+)
    Int8: 1,       // 8비트 부호있는 정수
    Int16: 2,      // 16비트 부호있는 정수
    Int32: 4,      // 32비트 부호있는 정수
    BigInt64: 8,   // 64비트 부호있는 bigint
    Float32: 4,    // 32비트 부동소수점
    Float64: 8,    // 64비트 부동소수점
};

// p 클래스는 다양한 타입의 바이너리 데이터를 한 바이트씩 읽을 수 있는 파서 역할을 합니다.
var p = class {
    getOffset() {
        // 현재 읽고 있는 byte offset을 반환
        return this.offset;
    }
    ensureLength(t32) {
        // 데이터 읽기 전, 남은 버퍼 길이를 체크해서 초과시 에러를 발생
        let e42 = this.bytes.length;
        if (!(this.offset + t32 <= e42)) throw Error("Reading out of bounds");
    }
    readUint8() {
        // 8비트 부호없는 정수 1개를 읽음
        let t32 = g.Uint8;
        this.ensureLength(t32);
        let e42 = this.view.getUint8(this.offset);
        return (this.offset += t32), e42;
    }
    readUint16() {
        // 16비트 부호없는 정수 1개를 읽음
        let t32 = g.Uint16;
        this.ensureLength(t32);
        let e42 = this.view.getUint16(this.offset);
        return (this.offset += t32), e42;
    }
    readUint32() {
        // 32비트 부호없는 정수 1개를 읽음
        let t32 = g.Uint32;
        this.ensureLength(t32);
        let e42 = this.view.getUint32(this.offset);
        return (this.offset += t32), e42;
    }
    readUint64() {
        // 64비트 부호없는 정수를 읽어 JS Number로 반환 (정밀도 손실 가능성 있음)
        let t32 = this.readBigUint64();
        return Number(t32);
    }
    readBigUint64() {
        // 64비트 부호없는 bigint 값을 읽음 (ES2020+)
        let t32 = g.BigUint64;
        this.ensureLength(t32);
        let e42 = this.view.getBigUint64(this.offset);
        return (this.offset += t32), e42;
    }
    readInt8() {
        // 8비트 부호있는 정수 1개를 읽음
        let t32 = g.Int8;
        this.ensureLength(t32);
        let e42 = this.view.getInt8(this.offset);
        return (this.offset += t32), e42;
    }
    readInt16() {
        // 16비트 부호있는 정수 1개를 읽음
        let t32 = g.Int16;
        this.ensureLength(t32);
        let e42 = this.view.getInt16(this.offset);
        return (this.offset += t32), e42;
    }
    readInt32() {
        // 32비트 부호있는 정수 1개를 읽음
        let t32 = g.Int32;
        this.ensureLength(t32);
        let e42 = this.view.getInt32(this.offset);
        return (this.offset += t32), e42;
    }
    readInt64() {
        // 64비트 부호있는 정수를 읽어 JS Number로 반환 (정밀도 손실 가능성 있음)
        let t32 = this.readBigInt64();
        return Number(t32);
    }
    readBigInt64() {
        // 64비트 부호있는 bigint 값을 읽음 (ES2020+)
        let t32 = g.BigInt64;
        this.ensureLength(t32);
        let e42 = this.view.getBigInt64(this.offset);
        return (this.offset += t32), e42;
    }
    readFloat32() {
        // 32비트 float형(부동소수점) 1개를 읽음
        let t32 = g.Float32;
        this.ensureLength(t32);
        let e42 = this.view.getFloat32(this.offset);
        return (this.offset += t32), e42;
    }
    readFloat64() {
        // 64비트 float형(부동소수점) 1개를 읽음
        let t32 = g.Float64;
        this.ensureLength(t32);
        let e42 = this.view.getFloat64(this.offset);
        return (this.offset += t32), e42;
    }
    readBytes(t32) {
        // 지정한 길이만큼 바이트 배열(Uint8Array의 서브셋)로 읽음
        let e42 = this.offset,
            r22 = e42 + t32,
            n22 = this.bytes.subarray(e42, r22);
        return (this.offset = r22), n22;
    }
    readString() {
        // 먼저 4바이트 길이값을 읽고, 그만큼 바이트를 추출한 뒤 UTF-8 문자열로 디코딩
        let t32 = this.readUint32(),
            e42 = this.readBytes(t32);
        return this.decoder.decode(e42);
    }
    readJson() {
        // 문자열 데이터를 읽은 후, JSON으로 파싱해 객체로 반환
        let t32 = this.readString();
        return JSON.parse(t32);
    }
    constructor(t32) {
        // t32 = Uint8Array버퍼. DataView로 Raw 접근, TextDecoder로 문자열 해석 준비
        (this.bytes = t32),
            c(this, "offset", 0),
            c(this, "view"),
            c(this, "decoder", new TextDecoder()),
            (this.view = v(this.bytes));
    }
};

// Uint8Array(바이트 배열) 기반으로 DataView를 생성해서 바이트 단위 데이터 접근을 쉽게 해주는 함수
function v(t32) {
    return new DataView(t32.buffer, t32.byteOffset, t32.byteLength);
}

// 환경 정보: 브라우저 window 객체 유무 체크
var m = "undefined" != typeof window;
// 브라우저에서 requestIdleCallback 지원여부 확인
var w = m && "function" == typeof window.requestIdleCallback;

// 조건이 거짓이면 AssertionError를 발생시키는 도우미 함수
function I(t32, ...e42) {
    if (!t32)
        throw Error(
            "Assertion Error" + (e42.length > 0 ? ": " + e42.join(" ") : ""),
        );
}

// 예상하지 못한 값이 들어올 때 오류를 발생시키는 함수. 디버깅용.
function b(t32) {
    throw Error(`Unexpected value: ${t32}`);
}

// 비트 수에 맞춰 최대(올림)값 계산 함수(예: 8 -> 255)
var k = (t32) => 2 ** t32 - 1;
// 비트 수에 맞춰 최소(내림)값 계산 함수(예: 8 -> -128)
var L = (t32) => -(2 ** (t32 - 1));
// 비트 수에 맞춰 최대값(부호 있음) 계산 함수(예: 8 -> 127)
var B = (t32) => 2 ** (t32 - 1) - 1;

// 각 타입별 표현 가능한 최소값, 최대값 객체 정의 (숫자 범위 체크 등 활용)
var E = {
    Uint8: 0,
    Uint16: 0,
    Uint32: 0,
    Uint64: 0,
    BigUint64: 0,
    Int8: L(8),
    Int16: L(16),
    Int32: L(32),
    Int64: Number.MIN_SAFE_INTEGER,
    BigInt64: -(BigInt(2) ** BigInt(63)),
};
var M = {
    Uint8: k(8),
    Uint16: k(16),
    Uint32: k(32),
    Uint64: Number.MAX_SAFE_INTEGER,
    BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
    Int8: B(8),
    Int16: B(16),
    Int32: B(32),
    Int64: Number.MAX_SAFE_INTEGER,
    BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
};

// 아래부터는 데이터 타입 확인용 유틸리티 함수
function x(t32) {
    return "string" == typeof t32;
}
function N(t32) {
    return Number.isFinite(t32);
}
function A(t32) {
    return null === t32;
}

// O 클래스는 chunkId, offset, length 세 숫자를 관리하는 구조로, 바이너리 데이터 내 특정 블록을 표준화해서 읽고 쓸 때 사용
var O = class t2 {
    static fromString(e42) {
        // "12/10/30" 같은 문자열을 chunkId/offset/length 숫자로 분리해서 객체 생성
        let [r22, n22, i22] = e42.split("/").map(Number);
        return (
            I(N(r22), "Invalid chunkId"),
            I(N(n22), "Invalid offset"),
            I(N(i22), "Invalid length"),
            new t2(r22, n22, i22)
        );
    }
    toString() {
        // 자신의 정보를 "chunkId/offset/length" 형태로 문자열화
        return `${this.chunkId}/${this.offset}/${this.length}`;
    }
    static read(e42) {
        // 주어진 p클래스 인스턴스에서 chunkId(16비트), offset·length(32비트) 순으로 읽어 객체 리턴
        let r22 = e42.readUint16(),
            n22 = e42.readUint32(),
            i22 = e42.readUint32();
        return new t2(r22, n22, i22);
    }
    write(t32) {
        // 자신의 정보를 지정 버퍼(p 인스턴스)에 순서대로 기록
        t32.writeUint16(this.chunkId),
            t32.writeUint32(this.offset),
            t32.writeUint32(this.length);
    }
    compare(t32) {
        // 자신과 다른 객체의 chunkId, offset, length를 순서대로 비교 (정렬시 사용)
        return this.chunkId < t32.chunkId
            ? -1
            : this.chunkId > t32.chunkId
                ? 1
                : this.offset < t32.offset
                    ? -1
                    : this.offset > t32.offset
                        ? 1
                        : (I(this.length === t32.length), 0);
    }
    constructor(t32, e42, r22) {
        // chunkId, offset, length를 멤버 변수로 저장
        (this.chunkId = t32), (this.offset = e42), (this.length = r22);
    }
};
// R 함수는 타입별로 고유 숫자값을 반환합니다. (타입 식별 용도로 사용)
// 인자 t32가 null이면 0을, 아니면 타입 매칭에 따라 구분 숫자를 리턴
function R(t32) {
    if (A(t32)) return 0; // 값이 null이면 0 반환
    switch (t32.type) {
        case P.Array:
            return 1;   // 배열형
        case P.Boolean:
            return 2;   // 불리언형
        case P.Color:
            return 3;   // 색상 문자열
        case P.Date:
            return 4;   // 날짜형
        case P.Enum:
            return 5;   // 열거형
        case P.File:
            return 6;   // 파일형
        case P.ResponsiveImage:
            return 10;  // 반응형 이미지
        case P.Link:
            return 7;   // 링크형
        case P.Number:
            return 8;   // 숫자형
        case P.Object:
            return 9;   // 객체형
        case P.RichText:
            return 11;  // 리치텍스트(서식 포함)
        case P.String:
            return 12;  // 문자열
        case P.VectorSetItem:
            return 13;  // 벡터셋 아이템
        default:
            b(t32);     // 미지정 타입이면 에러 처리
    }
}

// q 함수: binary stream에서 Uint16 길이만큼 배열 값을 읽어 deserialize
function q(e42) {
    let r22 = e42.readUint16(),    // 배열 길이
        n22 = [];
    for (let i22 = 0; i22 < r22; i22++) {
        let r32 = t.read(e42);     // 각 원소를 내부 t 타입 판독기로 읽음
        n22.push(r32);
    }
    return {
        type: P.Array,
        value: n22,
    };
}

// _: 배열 데이터를 binary stream에 serialize(길이+각 원소)
// e42: stream, r22: 직렬화할 값
function _(e42, r22) {
    for (let n22 of (e42.writeUint16(r22.value.length), r22.value))
        t.write(e42, n22);
}

// D: 두 배열값을 비교함(길이→각 원소 순차 비교, 차이 발생시 바로 반환)
function D(e42, r22, n22) {
    let i22 = e42.value.length,
        s22 = r22.value.length;
    if (i22 < s22) return -1;
    if (i22 > s22) return 1;
    for (let s3 = 0; s3 < i22; s3++) {
        let i3 = e42.value[s3],
            a22 = r22.value[s3],
            o22 = t.compare(i3, a22, n22); // 각 원소 비교(타입에 따라)
        if (0 !== o22) return o22;
    }
    return 0;
}

// j: boolean 값을 역직렬화(readUint8로 0/1 판독)
function j(t32) {
    return {
        type: P.Boolean,
        value: 0 !== t32.readUint8(),
    };
}

// C: boolean 값을 1(참), 0(거짓)으로 쓰기
function C(t32, e42) {
    t32.writeUint8(e42.value ? 1 : 0);
}

// J: 두 boolean 값을 비교(단순 대소)
function J(t32, e42) {
    return t32.value < e42.value ? -1 : t32.value > e42.value ? 1 : 0;
}

// V: color(문자열) 값 read
function V(t32) {
    return {
        type: P.Color,
        value: t32.readString(),
    };
}

// W: color(문자열) 값 write
function W(t32, e42) {
    t32.writeString(e42.value);
}

// $: color 값 비교
function $(t32, e42) {
    return t32.value < e42.value ? -1 : t32.value > e42.value ? 1 : 0;
}

// z: date 값을 int64로 읽고 ISO 문자열로 변환해서 반환
function z(t32) {
    let e42 = t32.readInt64(),
        r22 = new Date(e42);
    return {
        type: P.Date,
        value: r22.toISOString(),
    };
}

// G: date 값을 int64로 변환하여 기록
function G(t32, e42) {
    let r22 = new Date(e42.value),
        n22 = r22.getTime();
    t32.writeInt64(n22);
}

// K: 두 date형 값 비교(Date 객체 비교)
function K(t32, e42) {
    let r22 = new Date(t32.value),
        n22 = new Date(e42.value);
    return r22 < n22 ? -1 : r22 > n22 ? 1 : 0;
}

// H: enum 타입 값 문자열 읽기
function H(t32) {
    return {
        type: P.Enum,
        value: t32.readString(),
    };
}

// X: enum 타입 값 문자열 쓰기
function X(t32, e42) {
    t32.writeString(e42.value);
}

// Q: enum 값 비교
function Q(t32, e42) {
    return t32.value < e42.value ? -1 : t32.value > e42.value ? 1 : 0;
}

// Y: file 값(문자열) 읽기
function Y(t32) {
    return {
        type: P.File,
        value: t32.readString(),
    };
}

// Z: file 값(문자열) 쓰기
function Z(t32, e42) {
    t32.writeString(e42.value);
}

// tt: file 값 비교
function tt(t32, e42) {
    return t32.value < e42.value ? -1 : t32.value > e42.value ? 1 : 0;
}

// te: link 타입 값(json) 읽기
function te(t32) {
    return {
        type: P.Link,
        value: t32.readJson(),
    };
}

// tr: link 타입 값(json) 쓰기
function tr(t32, e42) {
    t32.writeJson(e42.value);
}

// tn: link 등 깊은 객체 값 비교(문자열화 후 비교)
function tn(t32, e42) {
    let r22 = JSON.stringify(t32.value),
        n22 = JSON.stringify(e42.value);
    return r22 < n22 ? -1 : r22 > n22 ? 1 : 0;
}

// ti: number(float64) 읽기
function ti(t32) {
    return {
        type: P.Number,
        value: t32.readFloat64(),
    };
}

// ts: number(float64) 쓰기
function ts(t32, e42) {
    t32.writeFloat64(e42.value);
}

// ta: number 값 비교
function ta(t32, e42) {
    return t32.value < e42.value ? -1 : t32.value > e42.value ? 1 : 0;
}

// to: 오브젝트(맵) 값 읽기(키=문자열, 값=타입 판독으로 재귀)
// 리턴값은 모든 키와 값이 포함된 Object
function to(e42) {
    let r22 = e42.readUint16(),
        n22 = {};
    for (let i22 = 0; i22 < r22; i22++) {
        let r32 = e42.readString();
        n22[r32] = t.read(e42);
    }
    return {
        type: P.Object,
        value: n22,
    };
}

// tu: object 값을 직렬화(키/값 모두 입력)
function tu(e42, r22) {
    let n22 = Object.entries(r22.value);
    for (let [r32, i22] of (e42.writeUint16(n22.length), n22))
        e42.writeString(r32), t.write(e42, i22);
}

// tl: 두 오브젝트값 비교(키 순 정렬 후, 키/값 차이 먼저, 없으면 값 비교)
function tl(e42, r22, n22) {
    let i22 = Object.keys(e42.value).sort(),
        s22 = Object.keys(r22.value).sort();
    if (i22.length < s22.length) return -1;
    if (i22.length > s22.length) return 1;
    for (let a22 = 0; a22 < i22.length; a22++) {
        let o22 = i22[a22],
            u22 = s22[a22];
        if (o22 < u22) return -1;
        if (o22 > u22) return 1;
        let l22 = e42.value[o22] ?? null,
            h2 = r22.value[u22] ?? null,
            c22 = t.compare(l22, h2, n22);
        if (0 !== c22) return c22;
    }
    return 0;
}

// th: 반응형 이미지 값(json형) 읽기
function th(t32) {
    return {
        type: P.ResponsiveImage,
        value: t32.readJson(),
    };
}

// tc: 반응형 이미지 값 쓰기
function tc(t32, e42) {
    t32.writeJson(e42.value);
}

// tf: 이미지 값 비교(json문자열화 후 비교)
function tf(t32, e42) {
    let r22 = JSON.stringify(t32.value),
        n22 = JSON.stringify(e42.value);
    return r22 < n22 ? -1 : r22 > n22 ? 1 : 0;
}

// td: 리치텍스트 값 읽기. 0이면 uint32(포인터), 1이면 문자열 ID 읽음
function td(t32) {
    let e42 = t32.readInt8();
    if (0 === e42)
        return {
            type: P.RichText,
            value: t32.readUint32(),
        };
    if (1 === e42)
        return {
            type: P.RichText,
            value: t32.readString(),
        };
    throw Error("Invalid rich text pointer");
}

// tg: 리치텍스트 포인터 정보를 포맷에 맞게 기록
function tg(t32, e42) {
    if (N(e42.value)) {
        t32.writeInt8(0), t32.writeUint32(e42.value);
        return;
    }
    if (x(e42.value)) {
        t32.writeInt8(1), t32.writeString(e42.value);
        return;
    }
    throw Error("Invalid rich text pointer");
}

// tp: 리치텍스트 값 비교(같은 타입이면 직접 비교)
function tp(t32, e42) {
    let r22 = t32.value,
        n22 = e42.value;
    if ((N(r22) && N(n22)) || (x(r22) && x(n22)))
        return r22 < n22 ? -1 : r22 > n22 ? 1 : 0;
    throw Error("Invalid rich text pointer");
}

// tv: string 타입 값 읽기
function tv(t32) {
    return {
        type: P.String,
        value: t32.readString(),
    };
}

// ty: string 타입 값 쓰기
function ty(t32, e42) {
    t32.writeString(e42.value);
}

// tm: string 값 비교(타입 0이면 소문자로 변환해 비교)
function tm(t32, e42, r22) {
    let n22 = t32.value,
        i22 = e42.value;
    return (0 === r22.type &&
        ((n22 = t32.value.toLowerCase()), (i22 = e42.value.toLowerCase())),
    n22 < i22)
        ? -1
        : n22 > i22
            ? 1
            : 0;
}

// tw: VectorSetItem값 읽기 (uint32)
function tw(t32) {
    return {
        type: P.VectorSetItem,
        value: t32.readUint32(),
    };
}

// tI: VectorSetItem 값 쓰기
function tI(t32, e42) {
    t32.writeUint32(e42.value);
}

// tb: VectorSetItem 값 비교
function tb(t32, e42) {
    let r22 = t32.value,
        n22 = e42.value;
    return r22 < n22 ? -1 : r22 > n22 ? 1 : 0;
}
((t32) => {
    // t32.read: 스트림(t42)에서 타입 태그(1바이트)를 읽고, 그에 맞는 디코더(q, j, V...)로 값을 복원
    (t32.read = function (t42) {
        let e42 = t42.readUint8();  // 타입 식별용 코드(0~13)
        switch (e42) {
            case 0:
                return null;        // null 값
            case 1:
                return q(t42);      // Array
            case 2:
                return j(t42);      // Boolean
            case 3:
                return V(t42);      // Color
            case 4:
                return z(t42);      // Date
            case 5:
                return H(t42);      // Enum
            case 6:
                return Y(t42);      // File
            case 7:
                return te(t42);     // Link
            case 8:
                return ti(t42);     // Number
            case 9:
                return to(t42);     // Object
            case 10:
                return th(t42);     // ResponsiveImage
            case 11:
                return td(t42);     // RichText
            case 12:
                return tv(t42);     // String
            case 13:
                return tw(t42);     // VectorSetItem
            default:
                b(e42);             // 알 수 없는 타입 코드 → 에러
        }
    }),
        // t32.write: 값 e42의 타입을 코드로 써 넣고, 타입별 write 함수로 실제 데이터 직렬화
        (t32.write = function (t42, e42) {
            let r22 = R(e42);       // 값의 타입에 대응하는 숫자 코드 계산
            if ((t42.writeUint8(r22), !A(e42)))
                switch (e42.type) {
                    case P.Array:
                        return _(t42, e42);
                    case P.Boolean:
                        return C(t42, e42);
                    case P.Color:
                        return W(t42, e42);
                    case P.Date:
                        return G(t42, e42);
                    case P.Enum:
                        return X(t42, e42);
                    case P.File:
                        return Z(t42, e42);
                    case P.Link:
                        return tr(t42, e42);
                    case P.Number:
                        return ts(t42, e42);
                    case P.Object:
                        return tu(t42, e42);
                    case P.ResponsiveImage:
                        return tc(t42, e42);
                    case P.RichText:
                        return tg(t42, e42);
                    case P.VectorSetItem:
                        return tI(t42, e42);
                    case P.String:
                        return ty(t42, e42);
                    default:
                        b(e42);    // 미지원 타입 → 에러
                }
        }),
        // t32.compare: 두 값(t42, e42)을 타입 우선, 값은 타입별 비교 함수로 정렬/비교
        (t32.compare = function (t42, e42, r22) {
            let n22 = R(t42),       // 왼쪽 값 타입 코드
                i22 = R(e42);       // 오른쪽 값 타입 코드
            if (n22 < i22) return -1;
            if (n22 > i22) return 1;
            if (A(t42) || A(e42)) return 0;   // 둘 중 하나라도 null이면 같다고 취급

            // 타입이 같다면, 각 타입에 맞는 비교 함수로 실제 값 비교
            switch (t42.type) {
                case P.Array:
                    return I(e42.type === P.Array), D(t42, e42, r22);
                case P.Boolean:
                    return I(e42.type === P.Boolean), J(t42, e42);
                case P.Color:
                    return I(e42.type === P.Color), $(t42, e42);
                case P.Date:
                    return I(e42.type === P.Date), K(t42, e42);
                case P.Enum:
                    return I(e42.type === P.Enum), Q(t42, e42);
                case P.File:
                    return I(e42.type === P.File), tt(t42, e42);
                case P.Link:
                    return I(e42.type === P.Link), tn(t42, e42);
                case P.Number:
                    return I(e42.type === P.Number), ta(t42, e42);
                case P.Object:
                    return I(e42.type === P.Object), tl(t42, e42, r22);
                case P.ResponsiveImage:
                    return I(e42.type === P.ResponsiveImage), tf(t42, e42);
                case P.RichText:
                    return I(e42.type === P.RichText), tp(t42, e42);
                case P.VectorSetItem:
                    return I(e42.type === P.VectorSetItem), tb(t42, e42);
                case P.String:
                    return I(e42.type === P.String), tm(t42, e42, r22);
                default:
                    b(t42);
            }
        });
})(t || (t = {})); // t가 없으면 새 객체 생성 후, read/write/compare 메서드를 부여

// tS: 아마도 최대 재시도 횟수 또는 상태 카운트 등으로 쓰일 상수
var tS = 3;
// tk: 네트워크/요청 관련 타임아웃 또는 지연(ms 단위로 추정, 250ms)
var tk = 250;
// tL: 재시도 대상 HTTP 상태 코드 목록 (주석에 상태 의미 기재)
var tL = [
    408,
    // Request Timeout
    429,
    // Too Many Requests
    500,
    // Internal Server Error
    502,
    // Bad Gateway
    503,
    // Service Unavailable
    504,
]; // 네트워크 재시도 로직에서 참조하는 에러 코드들
var tB = async (t32, e42) => {
    let r22 = 0;             // 재시도 횟수 카운터
    for (;;) {               // 명시적 무한 루프, 내부에서 성공/한계 도달시 return/throw
        try {
            let n22 = await fetch(t32, e42);  // 실제 fetch 호출
            if (!tL.includes(n22.status) || ++r22 > tS) return n22;
            // 상태코드가 재시도 대상이 아니거나, 재시도 한도를 넘기면 결과 반환
        } catch (t42) {
            // 네트워크 에러 등으로 fetch 자체가 reject된 경우
            if (e42?.signal?.aborted || ++r22 > tS) throw t42;
            // 호출자가 AbortSignal로 취소했거나, 재시도 한도 초과면 에러 그대로 throw
        }
        await tE(r22);       // 재시도 전 지수적 backoff 대기
    }
};

// tE: 재시도 사이의 지연 시간 계산 및 setTimeout으로 대기
// - t32: 현재 재시도 횟수(1부터 시작), 클수록 대기시간 증가
async function tE(t32) {
    let e42 = Math.floor(tk * (Math.random() + 1) * 2 ** (t32 - 1));
    // tk(기본 단위 지연)에 (1~2 사이 랜덤) * 2^(시도-1)를 곱해 지수적 backoff + jitter 구현
    await new Promise((t42) => {
        setTimeout(t42, e42);  // 계산된 시간만큼 비동기 대기
    });
}

// tM: 여러 byte 범위(range)를 하나의 HTTP 요청으로 묶어 가져와 다시 분할해 돌려주는 함수
// - t32: base URL
// - e42: { from, to } 범위 배열 (반열린구간 [from, to))
// 1) 중복·인접 범위를 tx로 병합
// 2) "range" 쿼리 파라미터로 서버에 요청
// 3) 응답 바이트를 tT에 채워넣고, 원래 요청 범위별로 분할하여 반환
async function tM(t32, e42) {
    let r22 = tx(e42),   // 범위 병합
        n22 = [],
        i22 = 0;
    for (let t42 of r22)
        n22.push(`${t42.from}-${t42.to - 1}`), (i22 += t42.to - t42.from);
    // 서버에 보낼 range 문자열(예: "0-99,200-299")과 총 길이 계산

    let s22 = new URL(t32),
        a22 = n22.join(",");
    s22.searchParams.set("range", a22);  // range 쿼리 추가

    let o22 = await tB(s22);             // 위의 재시도 fetch 사용
    if (200 !== o22.status)
        throw Error(`Request failed: ${o22.status} ${o22.statusText}`);

    let u22 = await o22.arrayBuffer(),
        l22 = new Uint8Array(u22);      // 전체 응답 바이트
    if (l22.length !== i22)
        throw Error("Request failed: Unexpected response length");

    let h2 = new tT(),                  // 범위별로 데이터를 저장할 chunk 매니저
        c22 = 0;
    for (let t42 of r22) {
        let e5 = t42.to - t42.from,
            r32 = c22 + e5,
            n32 = l22.subarray(c22, r32);
        h2.write(t42.from, n32), (c22 = r32);
        // 병합된 각 범위의 바이트를 tT에 위치(from)에 맞게 기록
    }
    // 원래 요청한 e42 배열 순서대로, 각 범위에 해당하는 데이터 다시 읽어 반환
    return e42.map((t42) => h2.read(t42.from, t42.to - t42.from));
}

// tT: 여러 바이트 구간(chunk)을 관리하면서 읽고/쓰는 구조
// - chunks: { start, end, data(Uint8Array) } 목록
//   서로 겹치지 않는 정렬된 구간을 유지하며, 읽기 시 원하는 범위가 어느 chunk에 있는지 탐색
var tT = class {
    read(t32, e42) {
        // t32: 시작 위치, e42: 길이
        for (let r22 of this.chunks) {
            if (t32 < r22.start) break;           // 아직 시작보다 앞이면 실패
            if (t32 > r22.end) continue;          // 해당 chunk 범위 밖(뒤)이면 다음으로
            if (t32 + e42 > r22.end) break;       // chunk를 초과하는 요청이면 실패
            let n22 = t32 - r22.start,
                i22 = n22 + e42;
            return r22.data.slice(n22, i22);      // chunk 내부에서 필요한 부분 잘라서 반환
        }
        throw Error("Missing data");              // 해당 범위를 만족하는 chunk가 없음
    }
    write(t32, e42) {
        // t32: 쓰기 시작 위치, e42: Uint8Array 데이터
        let r22 = t32,
            n22 = r22 + e42.length,
            i22 = 0,
            s22 = this.chunks.length;

        // 앞부분에서 겹치는 chunk와 병합 처리 (좌측 경계)
        for (; i22 < s22; i22++) {
            let t42 = this.chunks[i22];
            if ((I(t42, "Missing chunk"), !(r22 > t42.end))) {
                if (r22 > t42.start) {
                    let n32 = r22 - t42.start,
                        i3 = t42.data.subarray(0, n32);
                    (e42 = tF(i3, e42)), (r22 = t42.start);
                    // 기존 chunk 앞부분과 새 데이터를 이어붙이고, 시작 위치를 기존 chunk로 맞춤
                }
                break;
            }
        }

        // 뒷부분에서 겹치는 chunk와 병합 처리 (우측 경계)
        for (; s22 > i22; s22--) {
            let t42 = this.chunks[s22 - 1];
            if ((I(t42, "Missing chunk"), !(n22 < t42.start))) {
                if (n22 < t42.end) {
                    let r32 = n22 - t42.start,
                        i3 = t42.data.subarray(r32);
                    (e42 = tF(e42, i3)), (n22 = t42.end);
                    // 새 데이터 뒤에 기존 chunk 뒷부분을 이어붙이고, 끝 위치를 기존 chunk로 맞춤
                }
                break;
            }
        }

        // 새로 병합된 chunk를 기존 배열의 [i22, s22) 구간을 대체하여 삽입
        let a22 = {
                start: r22,
                end: n22,
                data: e42,
            },
            o22 = s22 - i22;
        this.chunks.splice(i22, o22, a22);   // 중간에 끼워넣으면서 겹치는 것 제거
    }
    constructor() {
        c(this, "chunks", []);  // 초기에는 빈 chunk 리스트
    }
};

// tF: 두 Uint8Array를 앞뒤로 이어 붙인 새 Uint8Array 리턴
function tF(t32, e42) {
    let r22 = t32.length + e42.length,
        n22 = new Uint8Array(r22);
    return n22.set(t32, 0), n22.set(e42, t32.length), n22;
}

// tx: 여러 범위를 정렬하고, 겹치거나 인접한 구간을 하나로 병합하는 함수
//   예) [0,10), [5,20) => [0,20)
function tx(t32) {
    I(t32.length > 0, "Must have at least one range");
    let e42 = [...t32].sort((t42, e5) => t42.from - e5.from),
        r22 = [];
    for (let t42 of e42) {
        let e5 = r22.length - 1,
            n22 = r22[e5];
        n22 && t42.from <= n22.to
            ? (r22[e5] = {
                    from: n22.from,
                    to: Math.max(n22.to, t42.to),
                })
            : r22.push(t42);
    }
    return r22;
}

// tA: key-value 필드를 가지는 레코드(아이템)의 직렬화/역직렬화 담당 클래스
//   내부 Map으로 필드를 관리하며, t.read/t.write를 사용해 각 필드 값 직렬화
var tA = class e3 {
    static read(r22) {
        let n22 = new e3(),
            i22 = r22.readUint16();        // 필드 개수
        for (let e42 = 0; e42 < i22; e42++) {
            let e5 = r22.readString(),     // 필드 이름
                i3 = t.read(r22);          // 필드 값 (공통 타입 시스템)
            n22.setField(e5, i3);
        }
        return n22;
    }
    write(e42) {
        // 필드 개수 + (이름, 값) 쌍들을 순서대로 직렬화
        for (let [r22, n22] of (e42.writeUint16(this.fields.size), this.fields))
            e42.writeString(r22), t.write(e42, n22);
    }
    getData() {
        // Map을 일반 객체 형태로 변환 (사용하기 편한 구조)
        let t32 = {};
        for (let [e42, r22] of this.fields) t32[e42] = r22;
        return t32;
    }
    setField(t32, e42) {
        this.fields.set(t32, e42);
    }
    getField(t32) {
        return this.fields.get(t32);
    }
    constructor() {
        c(this, "fields", /* @__PURE__ */ new Map());
    }
};

// tO: 원격 바이너리 인덱스 파일에서 아이템들을 스캔하고, 필요 시 chunk 단위로 부분 로딩하는 고수준 API
//  - scanItems(): 전체 아이템 메타데이터를 한 번에 읽어와 캐시
//  - resolveItem(pointer): 필요한 아이템을 지연 로딩(DataLoader d.default 이용)
var tO = class {
    scanItems() {
        return (
            (this.itemsPromise ??= tB(this.url).then(async (t32) => {
                if (!t32.ok)
                    throw Error(`Request failed: ${t32.status} ${t32.statusText}`);
                let e42 = await t32.arrayBuffer(),
                    r22 = new Uint8Array(e42),
                    n22 = new p(r22),   // 앞에서 정의한 바이너리 리더(p)
                    i22 = [],
                    s22 = n22.readUint32();  // 아이템 개수
                for (let t42 = 0; t42 < s22; t42++) {
                    let t5 = n22.getOffset(),   // 아이템 시작 위치
                        e5 = tA.read(n22),      // tA로 레코드 읽기
                        r32 = n22.getOffset() - t5, // 아이템 바이트 길이
                        s3 = new O(this.id, t5, r32), // O: (chunkId, offset, length)
                        a22 = s3.toString(),
                        o22 = {
                            pointer: a22,
                            data: e5.getData(),
                        };
                    this.itemLoader.prime(a22, o22), i22.push(o22);
                    // DataLoader에 캐시 프라임 및 결과 배열 구성
                }
                return i22;
            })),
            this.itemsPromise
        );
    }
    resolveItem(t32) {
        // pointer 문자열로 특정 아이템을 로딩(DataLoader에 위임)
        return this.itemLoader.load(t32);
    }
    constructor(t32, e42) {
        (this.id = t32),
            (this.url = e42),
            c(this, "itemsPromise"),
            c(
                this,
                "itemLoader",
                new d.default(async (t42) => {
                    // t42: pointer 문자열 배열
                    let e5 = t42.map((t5) => {
                            let e6 = O.fromString(t5);
                            return {
                                from: e6.offset,
                                to: e6.offset + e6.length,
                            };
                        }),
                        r22 = await tM(this.url, e5); // 필요한 바이트 범위들만 요청
                    return r22.map((e6, r32) => {
                        let n22 = new p(e6),    // 받은 바이트를 p로 감싸 파싱
                            i22 = tA.read(n22), // 레코드 단위로 복원
                            s22 = t42[r32];
                        return (
                            I(s22, "Missing pointer"),
                            {
                                pointer: s22,
                                data: i22.getData(),
                            }
                        );
                    });
                }),
            );
    }
};
var tP = class {
    async scanItems() {
        // 각 chunk의 scanItems()를 모두 호출 후 flat()으로 하나의 목록으로 합침
        let t32 = await Promise.all(
            this.chunks.map(async (t42) => t42.scanItems()),
        );
        return t32.flat();
    }
    resolveItems(t32) {
        // pointer 배열(t32)을 받아 각 pointer가 속한 chunk를 찾아 resolveItem 호출
        return Promise.all(
            t32.map((t42) => {
                let e42 = O.fromString(t42),
                    r22 = this.chunks[e42.chunkId];
                return I(r22, "Missing chunk"), r22.resolveItem(t42);
            }),
        );
    }
    compareItems(t32, e42) {
        // 두 아이템의 pointer 문자열을 O로 복원해, 위치 기반 비교 (chunkId/offset/length)
        let r22 = O.fromString(t32.pointer),
            n22 = O.fromString(e42.pointer);
        return r22.compare(n22);
    }
    compareValues(e42, r22, n22) {
        // 앞에서 정의된 t.compare를 그대로 위임 호출(타입 시스템 기반 값 비교)
        return t.compare(e42, r22, n22);
    }
    constructor(t32) {
        // options로부터 chunks, schema, indexes, resolver 함수들을 설정
        (this.options = t32),
            c(this, "id"),
            c(this, "schema"),
            c(this, "indexes"),
            c(this, "resolveRichText"),
            c(this, "resolveVectorSetItem"),
            c(this, "chunks"),
            (this.chunks = this.options.chunks.map((t42, e42) => new tO(e42, t42))),
            (this.schema = t32.schema),
            (this.indexes = t32.indexes),
            (this.resolveRichText = t32.resolveRichText),
            (this.resolveVectorSetItem = t32.resolveVectorSetItem),
            (this.id = t32.id);
    }
};

// /:https://framerusercontent.com/modules/tdynh7FZn4RXnbyLHmfj/2Bsac4aaOa13HyGcrqSh/sdy3CqLmE.js
// r3: Coaching Plans 컬렉션 내 각 필드(=컬럼)별 스키마 정의 객체
// - isNullable: null 허용 여부
// - type: 데이터 타입 (t4.String 등, 내부 상수 사용)
// 이 구조는 Zod/Valibot 등 스키마 라이브러리의 객체형 정의 패턴과 유사합니다.
var r3 = {
    a8jnMl1F_: {
        isNullable: true,
        type: t4.String,       // Feature 4
    },
    createdAt: {
        isNullable: true,
        type: t4.Date,
    },
    EEjy4bKGm: {
        isNullable: true,
        type: t4.ResponsiveImage, // 이미지
    },
    FWwQPpQjr: {
        isNullable: true,
        type: t4.String,       // Price
    },
    GZ1a2VEWn: {
        isNullable: true,
        type: t4.String,       // Feature 2
    },
    id: {
        isNullable: false,
        type: t4.String,       // 항상 값 필요
    },
    jt23dPTSl: {
        isNullable: true,
        type: t4.String,       // Feature 3
    },
    nextItemId: {
        isNullable: true,
        type: t4.String,       // 다음 컬렉션 참조
    },
    NuerFtLZx: {
        isNullable: true,
        type: t4.String,       // Title
    },
    pB508fMtX: {
        isNullable: true,
        type: t4.String,       // Slug
    },
    previousItemId: {
        isNullable: true,
        type: t4.String,       // 이전 컬렉션 참조
    },
    PZe_hGn0o: {
        isNullable: true,
        type: t4.String,       // Feature 6
    },
    updatedAt: {
        isNullable: true,
        type: t4.Date,
    },
    VBJC74o8w: {
        isNullable: true,
        type: t4.String,       // Feature 1
    },
    wChxBbjfR: {
        isNullable: true,
        type: t4.String,       // Feature 5
    },
};
// u3: 동적으로 사용하는 VectorSetItem resolve 함수 누적용 배열(미사용시 빈 배열)
var u3 = [];
// n3: VectorSetItem 리졸브를 비동기로 실행하는 헬퍼(사용 여부에 따라 u3를 참조)
var n3 = (e22) => {
    let t22 = u3[e22];
    if (t22) return t22().then((e32) => e32.default);
};
// p3: RichText 리졸브를 위한 모듈 등록용 객체(초기값 빈 오브젝트)
var p3 = {};
// d3: RichText용 리졸버(d2: RichText 복원 함수, p3와 결합)
var d3 = d2(p3);
// y2: QueryEngine 인스턴스(데이터 질의용)
var y2 = new l3();

// o3: Coaching Plans 데이터셋 전체를 래핑하는 오브젝트
// - 주요 필드: displayName, schema, chunk, id 등
var o3 = {
    collectionByLocaleId: {
        default: new tP({
            chunks: [
                // 단일 chunk URL: CMS용으로 변환하여 사용
                new URL(
                    "./sdy3CqLmE-chunk-default-0.framercms",
                    "https://framerusercontent.com/modules/tdynh7FZn4RXnbyLHmfj/2Bsac4aaOa13HyGcrqSh/sdy3CqLmE.js",
                ).href.replace("/modules/", "/cms/"),
            ],
            id: "3fcdf9d6-9111-4fd7-ac60-09768c5e740edefault",
            indexes: [],
            resolveRichText: d3,
            resolveVectorSetItem: n3,
            schema: r3,
        }),
    },
    displayName: "Coaching Plans",
    id: "3fcdf9d6-9111-4fd7-ac60-09768c5e740e",
};
// stdin_default2: 외부 모듈에서 임포트용 기본값으로 컬렉션 설정 객체를 노출
var stdin_default2 = o3;

// e4: Unframer 속성 패널에 표시될 필드별 입력 옵션(제목, 기본값, 타입 등) 등록
e4(o3, {
    NuerFtLZx: {
        defaultValue: "",
        title: "Title",
        type: t4.String,
    },
    pB508fMtX: {
        title: "Slug",
        type: t4.String,
    },
    FWwQPpQjr: {
        defaultValue: "",
        placeholder: "$29/m",
        title: "Price",
        type: t4.String,
    },
    VBJC74o8w: {
        defaultValue: "",
        title: "Feature 1",
        type: t4.String,
    },
    GZ1a2VEWn: {
        defaultValue: "",
        title: "Feature 2",
        type: t4.String,
    },
    jt23dPTSl: {
        defaultValue: "",
        title: "Feature 3",
        type: t4.String,
    },
    a8jnMl1F_: {
        defaultValue: "",
        title: "Feature 4",
        type: t4.String,
    },
    wChxBbjfR: {
        defaultValue: "",
        title: "Feature 5",
        type: t4.String,
    },
    PZe_hGn0o: {
        defaultValue: "",
        title: "Feature 6",
        type: t4.String,
    },
    EEjy4bKGm: {
        title: "Image",
        type: t4.ResponsiveImage,
    },
    createdAt: {
        title: "Created",
        type: t4.Date,
    },
    updatedAt: {
        title: "Updated",
        type: t4.Date,
    },
    previousItemId: {
        dataIdentifier: "local-module:collection/sdy3CqLmE:default",
        title: "Previous",
        type: t4.CollectionReference,
    },
    nextItemId: {
        dataIdentifier: "local-module:collection/sdy3CqLmE:default",
        title: "Next",
        type: t4.CollectionReference,
    },
});

// /:https://framerusercontent.com/modules/kY7tkLWzLO1KkVmBYwoN/oDRz7OnFLyeIu9xnUALu/HLBx5FEd4.js
import { fontStore } from "unframer";
// Framer/Unframer에서 사용하는 폰트 로더. 런타임에 필요한 웹폰트를 미리 불러온다.
fontStore.loadFonts(["FS;Manrope-medium", "FS;Manrope-bold"]);
// 위 배열 값은 Framer 내부에서 정의한 폰트 키(id)들이다. 실제 폰트 메타데이터는 아래 fonts4로도 명시됨.

var fonts4 = [
    {
        explicitInter: true, // Inter 기본 폰트를 명시적으로 처리할지 여부(Framer 내부 최적화용 플래그)
        fonts: [
            {
                family: "Manrope",
                source: "fontshare", // 폰트 공급처(여기선 Fontshare)
                style: "normal",
                url: "https://framerusercontent.com/third-party-assets/fontshare/wf/BNWG6MUI4RTC6WEND2VPDH4MHMIVU3XZ/R5YXY5FMVG6PXU36GNEEA24MIPMEPGSM/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2",
                weight: "500",       // medium
            },
            {
                family: "Manrope",
                source: "fontshare",
                style: "normal",
                url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2",
                weight: "700",       // bold
            },
        ],
    },
];

// css4: 위 Manrope 폰트를 사용하는 텍스트 스타일(클래스)에 대한 CSS 변수 설정
// - --framer-font-family, size, weight, line-height 등 텍스트 관련 토큰이 정의되어 있다.
var css4 = [
    '.framer-7hkKy .framer-styles-preset-e9oeue:not(.rich-text-wrapper), .framer-7hkKy .framer-styles-preset-e9oeue.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
];

// className4: 이 텍스트 스타일이 적용되는 루트 컴포넌트의 클래스 이름(Framer가 자동 부여)
var className4 = "framer-7hkKy";

// /:https://framerusercontent.com/modules/eUS0ErA8E7fPnjMug8id/2rAxw9HdSZNDV5njnvWq/zI6_xt5sT.js
import {
    jsx as _jsx,
    jsxs as _jsxs,
    Fragment as _Fragment,
} from "react/jsx-runtime";
// React 17+ 환경에서 JSX를 런타임으로 변환할 때 쓰이는 헬퍼들

import {
    addFonts,
    addPropertyControls,
    ControlType,
    cx,
    Floating,
    getFontsFromSharedStyle,
    RichText,
    SVG,
    useActiveVariantCallback,
    useComponentViewport,
    useLocaleInfo,
    useOverlayState,
    useVariantState,
    withCSS,
    withFX,
} from "unframer";
// Unframer가 제공하는 다양한 유틸/컴포넌트:
// - addFonts: 이 컴포넌트에서 쓸 웹폰트 등록
// - addPropertyControls: Framer 우측 패널에 보여줄 프로퍼티 정의
// - ControlType: String/Number 등 컨트롤 타입 상수
// - cx: 클래스 이름 merge 헬퍼
// - Floating: 오버레이/툴팁 등 떠 있는 UI용 래퍼
// - getFontsFromSharedStyle: 프레이머의 공유 텍스트 스타일에서 폰트 추출
// - RichText: 리치 텍스트 렌더링 컴포넌트
// - SVG: SVG 아이콘/벡터를 위한 컴포넌트
// - useActiveVariantCallback/useVariantState: 프레이머 ‘variant’ 상태 관리
// - useComponentViewport: 뷰포트 기반 레이아웃/애니메이션용 정보
// - useLocaleInfo: 현재 언어/로케일 정보
// - useOverlayState: 모달/팝오버 등 오버레이의 열림/닫힘 상태 관리
// - withCSS/withFX: 스타일과 프레이머 효과(FX)를 감싸주는 HOC

import {
    AnimatePresence,
    LayoutGroup,
    motion,
    MotionConfigContext,
} from "unframer";
// 프레이머 모션 기반 애니메이션:
// - motion: 애니메이션 가능한 div, span 등의 래퍼
// - AnimatePresence: 컴포넌트 들어옴/나감 애니메이션 관리
// - LayoutGroup: 레이아웃 전환 그룹화
// - MotionConfigContext: 모션 설정(transition 등)을 컨텍스트로 제공

import * as React from "react";
import { useRef as useRef2 } from "react";
// React 기본 API 및 useRef 훅(이 파일에서 내부적으로 DOM 참조 등에 사용)

// /:https://framerusercontent.com/modules/a0fitz1xaAWZJUa7dvHu/CBDTL5tkQKwREoJqpT85/Nn1gYl8oI.js
import { fontStore as fontStore2 } from "unframer";
// Framer의 fontStore를 fontStore2로 임포트(이름 변경)

// 프로젝트에서 사용할 웹폰트들을 미리 등록하여 로드
fontStore2.loadFonts([
    "FS;Manrope-regular",   // Manrope Regular(400)
    "Inter-Bold",           // Inter Bold(700)
    "Inter-BoldItalic",     // Inter Bold Italic
    "Inter-Italic",         // Inter Italic
]);

// fonts5는 사용될 폰트들의 상세한 메타데이터(패밀리, 공급자, 스타일, url, weight 등) 목록
var fonts5 = [
    {
        explicitInter: true, // Inter 폰트를 명시적으로 포함할지 설정
        fonts: [
            {
                family: "Manrope",
                source: "fontshare",
                style: "normal",
                url: "https://framerusercontent.com/third-party-assets/fontshare/wf/2TYFCBHUANEXS6QGR5EQDUNAFH6LSWM3/AYNOU3VEA4LRTDNKJQUFNVNUTYSGOUOP/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2",
                weight: "400", // Regular
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange:
                    "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
                weight: "700", // Bold
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange: "U+1F00-1FFF",
                url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange: "U+0370-03FF",
                url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange:
                    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange:
                    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "normal",
                unicodeRange:
                    "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+1F00-1FFF",
                url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+0370-03FF",
                url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
                weight: "700",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+1F00-1FFF",
                url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange: "U+0370-03FF",
                url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                url: "https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2",
                weight: "400",
            },
            {
                family: "Inter",
                source: "framer",
                style: "italic",
                unicodeRange:
                    "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2",
                weight: "400",
            },
        ],
    },
];
var css5 = [
    // 이 스타일 preset은 특정 클래스(.framer-wrOTe .framer-styles-preset-cuy41x)에 대해
    // 텍스트용 CSS 커스텀 프로퍼티(폰트 패밀리, 굵기, 색상 등)를 설정한다.
    '.framer-wrOTe .framer-styles-preset-cuy41x:not(.rich-text-wrapper), .framer-wrOTe .framer-styles-preset-cuy41x.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
];
var className5 = "framer-wrOTe"; // 이 텍스트 스타일 preset이 속한 루트 컴포넌트 클래스


// /:https://framerusercontent.com/modules/eUS0ErA8E7fPnjMug8id/2rAxw9HdSZNDV5njnvWq/zI6_xt5sT.js
// 모션 효과(withFX)를 적용한 motion.div 컴포넌트 래퍼
var MotionDivWithFX = withFX(motion.div);
// cycleOrder: variant 전환 순서(메인/Small)를 정의한 배열
var cycleOrder = ["gN0UmEFOr", "XqulHkD8S"];
// serializationHash: 이 컴포넌트 설정을 식별하는 해시(Framer 내부 직렬화용)
var serializationHash = "framer-QRYsH";
// variant 이름(내부 ID)와 실제 CSS 클래스명을 매핑한 객체
var variantClassNames = {
    gN0UmEFOr: "framer-v-yi5ro7",
    XqulHkD8S: "framer-v-100un9b",
};

// 여러 variant들의 override를 합쳐 하나의 props로 만드는 헬퍼
function addPropertyOverrides(overrides, ...variants) {
    const nextOverrides = {};
    variants?.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant]),
    );
    return nextOverrides;
}

// transition1: 공통으로 쓰이는 spring 애니메이션 설정
var transition1 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring",
};

// animation: 기본(숨겨진) 상태
var animation = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition1,
    x: 0,
    y: 0,
};
// animation1: 보여지는 상태
var animation1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition1,
    x: 0,
    y: 0,
};
// animation2: 아웃 상태(transition만 없는 숨김)
var animation2 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
};

// Transition: MotionConfigContext를 감싸 transition 설정을 override하는 컴포넌트
var Transition = ({ value, children }) => {
    const config = React.useContext(MotionConfigContext);
    const transition = value ?? config.transition;
    const contextValue = React.useMemo(
        () => ({
            ...config,
            transition,
        }),
        [JSON.stringify(transition)],
    );
    return (
        <MotionConfigContext.Provider value={contextValue}>
            {children}
        </MotionConfigContext.Provider>
    );
};

// Overlay: 오버레이(예: 툴팁, 모달)의 show/hide 상태를 제어하는 render-props 패턴 컴포넌트
var Overlay = ({
    children,
    blockDocumentScrolling,
    dismissWithEsc,
    enabled = true,
}) => {
    const [visible, setVisible] = useOverlayState({
        blockDocumentScrolling,
        dismissWithEsc: enabled && dismissWithEsc,
    });
    return children({
        hide: () => setVisible(false),
        show: () => setVisible(true),
        toggle: () => setVisible(!visible),
        visible: enabled && visible,
    });
};

// Variants: motion.create로 Fragment를 래핑한 variant 전환용 컨테이너
var Variants = motion.create(React.Fragment);
// 사람 친화적인 variant 이름과 내부 variant ID 매핑
var humanReadableVariantMap = {
    Main: "gN0UmEFOr",
    Small: "XqulHkD8S",
};

// getProps: 외부 props를 정리하고 기본값/variant 매핑을 처리하는 헬퍼
var getProps = ({ height, id, text, width, ...props }) => {
    return {
        ...props,
        nm2JPQQVq: text ?? props.nm2JPQQVq ?? "Free initial consultation",
        variant:
            humanReadableVariantMap[props.variant] ?? props.variant ?? "gN0UmEFOr",
    };
};

// 레이아웃 의존성 키 생성: variant 조합 + layoutDependency로 고유 ID 생성
var createLayoutDependency = (props, variants) => {
    if (props.layoutDependency)
        return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};

// Component: 이 모듈의 실제 Framer React 컴포넌트 정의
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref) {
    const fallbackRef = useRef2(null);
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React.useId();
    const { activeLocale, setLocale } = useLocaleInfo();
    const componentViewport = useComponentViewport();
    const {
        style,
        className: className6,
        layoutId,
        variant,
        nm2JPQQVq: nm2JPQQVq2,
        ...restProps
    } = getProps(props);
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants,
    } = useVariantState({
        cycleOrder,
        defaultVariant: "gN0UmEFOr",
        ref: refBinding,
        variant,
        variantClassNames,
    });
    const layoutDependency = createLayoutDependency(props, variants);
    const { activeVariantCallback, delay } =
        useActiveVariantCallback(baseVariant);
    const onMouseEnterupml6a = ({ overlay, loadMore }) =>
        activeVariantCallback(async (...args) => {
            setGestureState({
                isHovered: true,
            });
            overlay.show();
        });
	const sharedStyleClassNames = [className, className5]; // 스타일 클래스명 배열
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames); // 고유 클래스 생성
    const ref1 = React.useRef(null); // Floating 오버레이용 ref1
    const ref2 = React.useRef(null); // Floating 오버레이용 ref2
    return (
        <LayoutGroup id={layoutId ?? defaultLayoutId}> {/* 레이아웃 전환 그룹 */}
            <Variants animate={variants} initial={false}> {/* variant 상태별 애니메이션 */}
                <Overlay blockDocumentScrolling={false} dismissWithEsc={false}> {/* 오버레이(툴팁/레이어) */}
                    {(overlay1) => (
                        <Overlay blockDocumentScrolling={false} dismissWithEsc={false}> {/* 중첩 오버레이 */}
                            {(overlay) => (
                                <_Fragment> {/* 여러 자식 병합용 Fragment */}
                                    <Transition value={transition1}> {/* motion 트랜지션 설정 */}
                                        <motion.div
                                            {...restProps}
                                            {...gestureHandlers}
                                            className={cx(
                                                scopingClassNames,
                                                "framer-yi5ro7",
                                                className6,
                                                classNames,
                                            )} // 카드, 상태별 클래스
                                            data-framer-name={"Main"}
                                            data-highlight={true}
                                            id={`${layoutId}-yi5ro7`}
                                            layoutDependency={layoutDependency}
                                            layoutId={"gN0UmEFOr"}
                                            onMouseEnter={onMouseEnterupml6a({
                                                overlay,
                                            })} // hover 시 overlay 표시
                                            ref={refBinding}
                                            style={{
                                                ...style,
                                            }}
                                            {...addPropertyOverrides(
                                                {
                                                    XqulHkD8S: {
                                                        "data-framer-name": "Small",
                                                    },
                                                },
                                                baseVariant,
                                                gestureVariant,
                                            )}
                                        >
                                            <motion.div // 아이콘(체크) 영역
                                                className={"framer-1ghq7zu"}
                                                data-framer-name={"Icon"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"CGlyLSw8f"}
                                            >
                                                <SVG // 체크 SVG 렌더링
                                                    className={"framer-1h8oaor"}
                                                    data-framer-name={"Tick"}
                                                    fill={
                                                        'var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0)) /* {"name":"Black"} */'
                                                    }
                                                    intrinsicHeight={17}
                                                    intrinsicWidth={16}
                                                    layoutDependency={layoutDependency}
                                                    layoutId={"ekyXtUBci"}
                                                    svg={
                                                        '<svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 8.5 2.825 3.107a.5.5 0 0 0 .728.012L13 5" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>'
                                                    }
                                                    withExternalLayout={true}
                                                />
                                            </motion.div>
                                            <RichText // 텍스트(variant 별 오버라이드 지원)
                                                __fromCanvasComponent={true}
                                                className={"framer-igb7cs"}
                                                data-framer-name={"Text"}
                                                fonts={["Inter"]}
                                                layoutDependency={layoutDependency}
                                                layoutId={"xj_bQuT2d"}
                                                style={{
                                                    "--extracted-r6o4lv":
                                                        "var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0))",
                                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                                    "--framer-link-text-decoration": "underline",
                                                }}
                                                text={nm2JPQQVq2}
                                                verticalAlignment={"top"}
                                                withExternalLayout={true}
                                                {...addPropertyOverrides(
                                                    {
                                                        XqulHkD8S: {
                                                            children: (
                                                                <React.Fragment>
                                                                    <motion.p
                                                                        className={"framer-styles-preset-cuy41x"}
                                                                        data-styles-preset={"Nn1gYl8oI"}
                                                                        style={{
                                                                            "--framer-text-color":
                                                                                "var(--extracted-r6o4lv, var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0)))",
                                                                        }}
                                                                    >
                                                                        {"Free initial consultation"}
                                                                    </motion.p>
                                                                </React.Fragment>
                                                            ),
                                                        },
                                                    },
                                                    baseVariant,
                                                    gestureVariant,
                                                )}
                                            >
                                                <React.Fragment>
                                                    <motion.p
                                                        className={"framer-styles-preset-1yhjbal"}
                                                        data-styles-preset={"Iz6fkU9FB"}
                                                        style={{
                                                            "--framer-text-color":
                                                                "var(--extracted-r6o4lv, var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0)))",
                                                        }}
                                                    >
                                                        {"Free initial consultation"}
                                                    </motion.p>
                                                </React.Fragment>
                                            </RichText>
                                            <AnimatePresence> {/* overlay 보일 때 팝업 */}
                                                {overlay.visible && (
                                                    <Floating
                                                        alignment={"center"}
                                                        anchorRef={refBinding}
                                                        className={cx(scopingClassNames, classNames)}
                                                        collisionDetection={true}
                                                        collisionDetectionPadding={20}
                                                        data-framer-portal-id={`${layoutId}-yi5ro7`}
                                                        offsetX={0}
                                                        offsetY={10}
                                                        onDismiss={overlay.hide}
                                                        placement={"bottom"}
                                                        safeArea={true}
                                                        zIndex={11}
                                                    >
                                                        <MotionDivWithFX
                                                            __perspectiveFX={false}
                                                            __smartComponentFX={true}
                                                            __targetOpacity={1}
                                                            animate={animation1}
                                                            className={"framer-1bos71c"}
                                                            exit={animation}
                                                            initial={animation2}
                                                            layoutDependency={layoutDependency}
                                                            layoutId={"jwv2Udjo4"}
                                                            ref={ref1}
                                                            role={"dialog"}
                                                            style={{
                                                                backgroundColor: "rgb(255, 255, 255)",
                                                                borderBottomLeftRadius: 10,
                                                                borderBottomRightRadius: 10,
                                                                borderTopLeftRadius: 10,
                                                                borderTopRightRadius: 10,
                                                                boxShadow:
                                                                    "0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
                                                            }}
                                                        />
                                                    </Floating>
                                                )}
                                            </AnimatePresence>
                                            <AnimatePresence> {/* overlay1.visible 때 팝업 */}
                                                {overlay1.visible && (
                                                    <Floating
                                                        alignment={"center"}
                                                        anchorRef={refBinding}
                                                        className={cx(scopingClassNames, classNames)}
                                                        collisionDetection={true}
                                                        collisionDetectionPadding={20}
                                                        data-framer-portal-id={`${layoutId}-yi5ro7`}
                                                        offsetX={0}
                                                        offsetY={10}
                                                        onDismiss={overlay1.hide}
                                                        placement={"bottom"}
                                                        safeArea={true}
                                                        zIndex={11}
                                                    >
                                                        <MotionDivWithFX
                                                            __perspectiveFX={false}
                                                            __smartComponentFX={true}
                                                            __targetOpacity={1}
                                                            animate={animation1}
                                                            className={"framer-lyjbgl"}
                                                            exit={animation}
                                                            initial={animation2}
                                                            layoutDependency={layoutDependency}
                                                            layoutId={"sHRLxGEGf"}
                                                            ref={ref2}
                                                            role={"dialog"}
                                                            style={{
                                                                backgroundColor: "rgb(255, 255, 255)",
                                                                borderBottomLeftRadius: 10,
                                                                borderBottomRightRadius: 10,
                                                                borderTopLeftRadius: 10,
                                                                borderTopRightRadius: 10,
                                                                boxShadow:
                                                                    "0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
                                                            }}
                                                        />
                                                    </Floating>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </Transition>
                                </_Fragment>
                            )}
                        </Overlay>
                    )}
                </Overlay>
            </Variants>
        </LayoutGroup>
    );
});
var css6 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", // 브라우저 CSS aspect-ratio 지원 체크 및 커스텀 변수 선언
    ".framer-QRYsH.framer-194iq33, .framer-QRYsH .framer-194iq33 { display: block; }", // 컴포넌트/자식 블록 표시
    ".framer-QRYsH.framer-yi5ro7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 512px; }", // 메인 카드 바깥 래퍼 스타일
    ".framer-QRYsH .framer-1ghq7zu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 20px; }", // 아이콘 곁 래퍼
    ".framer-QRYsH .framer-1h8oaor { aspect-ratio: 0.9411764705882353 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); position: relative; width: 16px; }", // Tick SVG: 가로세로 비율 유지, 높이/너비
    ".framer-QRYsH .framer-igb7cs { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", // RichText(텍스트) 내부
    ".framer-QRYsH .framer-1bos71c, .framer-QRYsH .framer-lyjbgl { height: 150px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }", // Floating overlay 스타일
    ".framer-QRYsH.framer-v-100un9b .framer-1h8oaor { height: var(--framer-aspect-ratio-supported, 13px); width: 13px; }", // variant가 Small일 때 Tick 아이콘 크기 조정
    ...css, // 추가로 연결될 스타일 정의 배열 (상위에서 임포트된)
    ...css5, // 추가 스타일 preset (폰트/텍스트용)
];

// CSS와 컴포넌트 결합, 고유 클래스명으로 HOC 생성
var FramerzI6_xt5sT = withCSS(Component, css6, "framer-QRYsH");
var stdin_default3 = FramerzI6_xt5sT;

FramerzI6_xt5sT.displayName = "Cards / Coaching Feature"; // 디버깅/에디터 표시용 이름
FramerzI6_xt5sT.defaultProps = {
    height: 24,
    width: 512,
};

// Framer 속성 패널 옵션 등록 (variant/text)
addPropertyControls(FramerzI6_xt5sT, {
    variant: {
        options: ["gN0UmEFOr", "XqulHkD8S"],
        optionTitles: ["Main", "Small"],
        title: "Variant",
        type: ControlType.Enum,
    },
    nm2JPQQVq: {
        defaultValue: "Free initial consultation",
        title: "Text",
        type: ControlType.String,
    },
});

// 이 컴포넌트에서 실제 사용할 웹폰트 상세 등록
addFonts(
    FramerzI6_xt5sT,
    [
        {
            explicitInter: true, // Inter 명시적 사용
            fonts: [
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
                    weight: "400",
                },
            ],
        },
        ...getFontsFromSharedStyle(fonts),
        ...getFontsFromSharedStyle(fonts5),
    ],
    {
        supportsExplicitInterCodegen: true, // 폰트 최적화 지원
    },
);

// /:https://framerusercontent.com/modules/m5w34NwjvTZ7BfH1RZGW/rOXjN63sa2pkT7IdM4i4/KRhhcESHv.js
var CardsCoachingFeatureFonts = getFonts(stdin_default3); // 하위 카드 컴포넌트에서 쓰는 폰트 정보 추출
var MotionDivWithFX2 = withFX2(motion2.div); // FX(효과) 기능이 추가된 motion.div
var serializationHash2 = "framer-K4Az7"; // 이 컴포넌트를 위한 고유 해시(스타일 스코프용)
var variantClassNames2 = {
    uqHP4nUMj: "framer-v-1btdyup",
};
var transition12 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring",
};

var toResponsiveImage = (value) => {
    if (
        typeof value === "object" &&
        value !== null &&
        typeof value.src === "string"
    ) {
        return value; // 이미 { src } 형태면 그대로 사용
    }
    return typeof value === "string"
        ? {
                src: value, // 문자열이면 src로 감싸서 이미지 객체로 변환
            }
        : void 0;
};
var isSet = (value) => {
    if (Array.isArray(value)) return value.length > 0; // 배열이면 길이>0 여부
    return value !== void 0 && value !== null && value !== ""; // 그 외는 값이 비어있지 않은지
};
var Transition2 = ({ value, children }) => {
    const config = React2.useContext(MotionConfigContext2); // 상위 모션 설정 가져오기
    const transition = value ?? config.transition; // 전달된 값 우선, 없으면 기존 transition
    const contextValue = React2.useMemo(
        () => ({
            ...config,
            transition,
        }),
        [JSON.stringify(transition)],
    );
    return (
        <MotionConfigContext2.Provider value={contextValue}>
            {children}
        </MotionConfigContext2.Provider>
    );
};
var Variants2 = motion2.create(React2.Fragment); // variant 애니메이션을 위한 Fragment 래퍼
var getProps2 = ({
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    height,
    id,
    image,
    price,
    title,
    width,
    ...props
}) => {
    return {
        ...props,
        AA4HpRL_N: feature6 ?? props.AA4HpRL_N ?? "add feature 6",
        ClJ5ojmjC: title ?? props.ClJ5ojmjC ?? "\u3147\u3147\u3147", // 제목 기본값(ㅇㅇㅇ)
        Cq40uxSGB: image ?? props.Cq40uxSGB,
        khI3HJ1Rw: price ?? props.khI3HJ1Rw ?? "$59/month",
        mWjIvJQ84:
            feature2 ?? props.mWjIvJQ84 ?? "1x per 2 weeks training plan update",
        OVF9SH5wq: feature4 ?? props.OVF9SH5wq ?? "Weekly checking",
        tGeZ8I3qn: feature5 ?? props.tGeZ8I3qn ?? "add feature 5",
        znQYkuyTe:
            feature3 ?? props.znQYkuyTe ?? "Coaching via the TrainingPeaks App",
        zp9KNgMWe: feature1 ?? props.zp9KNgMWe ?? "Free initial consultation",
    }; // 외부 props → 내부 난수키로 매핑 + 기본 문구 채우기
};
var createLayoutDependency2 = (props, variants) => {
    if (props.layoutDependency)
        return variants.join("-") + props.layoutDependency;
    return variants.join("-"); // variant 조합으로 레이아웃 식별 키 생성
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref) {
    const fallbackRef = useRef3(null);
    const refBinding = ref ?? fallbackRef; // ref 없으면 내부 ref 사용
    const defaultLayoutId = React2.useId();
    const { activeLocale, setLocale } = useLocaleInfo2(); // 현재 로케일 정보
    const componentViewport = useComponentViewport2(); // 뷰포트 위치/크기 정보
    const {
        style,
        className: className6,
        layoutId,
        variant,
        Cq40uxSGB: Cq40uxSGB2,
        khI3HJ1Rw: khI3HJ1Rw2,
        ClJ5ojmjC: ClJ5ojmjC2,
        zp9KNgMWe: zp9KNgMWe2,
        mWjIvJQ84: mWjIvJQ842,
        znQYkuyTe: znQYkuyTe2,
        OVF9SH5wq: OVF9SH5wq2,
        tGeZ8I3qn: tGeZ8I3qn2,
        AA4HpRL_N: AA4HpRL_N2,
        ...restProps
    } = getProps2(props); // prop 이름 난수화 + 기본값 적용
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants,
    } = useVariantState2({
        defaultVariant: "uqHP4nUMj",
        ref: refBinding,
        variant,
        variantClassNames: variantClassNames2,
    }); // variant 상태 및 제스처(hover 등) 관리
    const layoutDependency = createLayoutDependency2(props, variants);
    const { activeVariantCallback, delay } =
        useActiveVariantCallback2(baseVariant);
    const onTapao0mc2 = activeVariantCallback(async (...args) => {
        setVariant("uqHP4nUMj"); // 탭 시 이 variant로 전환
    });
    const sharedStyleClassNames = [className3, className4]; // 미리 정의된 공통 클래스 두 개
    const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames); // 해시+스타일 조합으로 스코프 클래스 생성
    const visible = isSet(zp9KNgMWe2); // feature1 값이 있으면 true
    const visible1 = isSet(mWjIvJQ842); // feature2
    const visible2 = isSet(znQYkuyTe2); // feature3
    const visible3 = isSet(OVF9SH5wq2); // feature4~6에 재사용
    return (
        <LayoutGroup2 id={layoutId ?? defaultLayoutId}>
            <Variants2 animate={variants} initial={false}>
                <Transition2 value={transition12}>
                    <MotionDivWithFX2
                        {...restProps}
                        {...gestureHandlers}
                        __framer__styleTransformEffectEnabled={true}
                        __framer__transformTargets={[
                            {
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0.9,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                },
                            },
                            {
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                },
                            },
                        ]} // in-view 시 scale 0.9 → 1로 변경하는 트랜스폼 타깃들
                        __framer__transformTrigger={"onInView"} // 요소가 뷰포트에 들어올 때 트리거
                        __perspectiveFX={false}
                        __smartComponentFX={true}
                        __targetOpacity={1}
                        className={cx2(
                            scopingClassNames,
                            "framer-1btdyup",
                            className6,
                            classNames,
                        )} // 카드 전체 래퍼 클래스 모음
                        data-framer-name={"Desktop"}
                        layoutDependency={layoutDependency}
                        layoutId={"uqHP4nUMj"}
                        ref={refBinding}
                        style={{
                            backgroundColor:
                                "var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))",
                            borderBottomLeftRadius: 32,
                            borderBottomRightRadius: 32,
                            borderTopLeftRadius: 32,
                            borderTopRightRadius: 32,
                            boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.05)",
                            ...style,
                        }} // 카드 배경·둥근 모서리·그림자 스타일
                    >
                        <Image
                            background={{
                                alt: "",
                                fit: "fill",
                                loading: getLoadingLazyAtYPosition(
                                    (componentViewport?.y || 0) +
                                        (16 +
                                            ((componentViewport?.height ||
                                                582) -
                                                32 -
                                                550) /
                                                2),
                                ), // 현재 뷰포트 위치 기준 lazy-loading 임계점 계산
                                sizes: "512px",
                                ...toResponsiveImage(Cq40uxSGB2),
                            }}
                            className={"framer-fhhjem"}
                            data-highlight={true}
                            layoutDependency={layoutDependency}
                            layoutId={"GWo5jbt7S"}
                            onTap={onTapao0mc2}
                            style={{
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                            }} // 카드 상단 이미지에 16px 라운드 적용
                        />
                        <motion2.div
                            className={"framer-1oepc7t"}
                            data-framer-name={"Right Side"}
                            layoutDependency={layoutDependency}
                            layoutId={"qAWn85L1b"}
                        >
                            <motion2.div
                                className={"framer-m7ot42"}
                                data-framer-name={"Content"}
                                layoutDependency={layoutDependency}
                                layoutId={"OMYN6VWeX"}
                            >
                                <motion2.div
                                    className={"framer-wbfo0o"}
                                    data-framer-name={"Heading"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"pPxbe2vJd"}
                                >
                                    <RichText2
                                        __fromCanvasComponent={true}
                                        className={"framer-un5yk5"}
                                        data-framer-name={"Price"}
                                        fonts={["FS;Manrope-medium"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"I7hyDNSdu"}
                                        style={{
                                            "--extracted-a0htzi":
                                                "var(--token-bfbbf012-d3b7-4f22-a08b-2c9f0c1c5b80, rgb(153, 153, 153))",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        text={khI3HJ1Rw2}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React2.Fragment>
                                            <motion2.h3
                                                style={{
                                                    "--font-selector":
                                                        "RlM7TWFucm9wZS1tZWRpdW0=",
                                                    "--framer-font-family":
                                                        '"Manrope", "Manrope Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-a0htzi, var(--token-bfbbf012-d3b7-4f22-a08b-2c9f0c1c5b80, rgb(153, 153, 153)))",
                                                }}
                                            >
                                                {"$59/month"}
                                            </motion2.h3>
                                        </React2.Fragment>
                                    </RichText2>
                                    <RichText2
                                        __fromCanvasComponent={true}
                                        className={"framer-11cs0wh"}
                                        data-framer-name={"Title"}
                                        fonts={["Inter"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"sTlUa7XqX"}
                                        style={{
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        text={ClJ5ojmjC2}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React2.Fragment>
                                            <motion2.h3
                                                className={"framer-styles-preset-pbqkq1"}
                                                data-styles-preset={"WJJyCc90q"}
                                            >
                                                {"Basic"}
                                            </motion2.h3>
                                        </React2.Fragment>
                                    </RichText2>
                                </motion2.div>
                                <motion2.div
                                    className={"framer-1u4zatd"}
                                    data-framer-name={"Features"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"tlTHi7UDp"}
                                >
                                    {visible && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            } // 이 feature가 화면상 어디쯤 보일지 기준 y 계산
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-1xduv2a-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"LwM98818H-container"}
                                                nodeId={"LwM98818H"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "LwM98818H",
                                                    layoutId: "LwM98818H",
                                                    nm2JPQQVq: zp9KNgMWe2, // feature1 텍스트 전달
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                    {visible1 && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            }
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-11huo7i-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"FklDEkJHz-container"}
                                                nodeId={"FklDEkJHz"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "FklDEkJHz",
                                                    layoutId: "FklDEkJHz",
                                                    nm2JPQQVq: mWjIvJQ842, // feature2 텍스트
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                    {visible2 && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            }
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-njzygt-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"ZLiyYQr9t-container"}
                                                nodeId={"ZLiyYQr9t"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "ZLiyYQr9t",
                                                    layoutId: "ZLiyYQr9t",
                                                    nm2JPQQVq: znQYkuyTe2, // feature3 텍스트
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                    {visible3 && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            }
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-17lbzxt-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"DZyMvN6qM-container"}
                                                nodeId={"DZyMvN6qM"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "DZyMvN6qM",
                                                    layoutId: "DZyMvN6qM",
                                                    nm2JPQQVq: OVF9SH5wq2, // feature4 텍스트
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                    {visible3 && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            }
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-19izztu-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"uyGYhxiI8-container"}
                                                nodeId={"uyGYhxiI8"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "uyGYhxiI8",
                                                    layoutId: "uyGYhxiI8",
                                                    nm2JPQQVq: tGeZ8I3qn2, // feature5 텍스트
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                    {visible3 && (
                                        <ComponentViewportProvider
                                            height={24}
                                            width={"512px"}
                                            y={
                                                (componentViewport?.y || 0) +
                                                (16 +
                                                    ((componentViewport?.height ||
                                                        582) -
                                                        32 -
                                                        550.4) /
                                                        2) +
                                                64 +
                                                0 +
                                                0 +
                                                110.4 +
                                                0 +
                                                120
                                            }
                                        >
                                            <SmartComponentScopedContainer
                                                className={"framer-1bo2xj1-container"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"EkLpvtePy-container"}
                                                nodeId={"EkLpvtePy"}
                                                rendersWithMotion={true}
                                                scopeId={"KRhhcESHv"}
                                            >
                                                {_jsx2(stdin_default3, {
                                                    height: "100%",
                                                    id: "EkLpvtePy",
                                                    layoutId: "EkLpvtePy",
                                                    nm2JPQQVq: AA4HpRL_N2, // feature6 텍스트
                                                    style: {
                                                        width: "100%",
                                                    },
                                                    variant: "gN0UmEFOr",
                                                    width: "100%",
                                                })}
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    )}
                                </motion2.div>
                            </motion2.div>
                            <Link
                                href={{
                                    webPageId: "FEcGDpBiL",
                                }}
                                motionChild={true}
                                nodeId={"OgqMPidGl"}
                                openInNewTab={false}
                                scopeId={"KRhhcESHv"}
                                smoothScroll={true}
                            >
                                <motion2.a
                                    className={"framer-75ymlo framer-1cgez0"}
                                    data-border={true}
                                    data-framer-name={"get in touch"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"OgqMPidGl"}
                                    style={{
                                        "--border-bottom-width": "1px",
                                        "--border-color":
                                            "var(--token-96b2b273-006d-4dd2-8d16-427f13d19d4a, rgb(225, 225, 225))",
                                        "--border-left-width": "1px",
                                        "--border-right-width": "1px",
                                        "--border-style": "solid",
                                        "--border-top-width": "1px",
                                        backgroundColor:
                                            "var(--token-c773fe8d-8aed-4719-9dcd-b57e1bc84fdb, rgb(242, 242, 242))",
                                        borderBottomLeftRadius: 24,
                                        borderBottomRightRadius: 24,
                                        borderTopLeftRadius: 24,
                                        borderTopRightRadius: 24,
                                    }} // CTA 버튼(테두리 + 연한 회색 배경)
                                >
                                    <RichText2
                                        __fromCanvasComponent={true}
                                        className={"framer-1jrkibs"}
                                        data-framer-name={"Button Text"}
                                        fonts={["Inter"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"akQHAKelC"}
                                        style={{
                                            "--framer-paragraph-spacing": "0px",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React2.Fragment>
                                            <motion2.p
                                                className={"framer-styles-preset-e9oeue"}
                                                data-styles-preset={"HLBx5FEd4"}
                                            >
                                                {"Get in touch"}
                                            </motion2.p>
                                        </React2.Fragment>
                                    </RichText2>
                                    <motion2.div
                                        className={"framer-a7oqqr"}
                                        data-framer-name={"Icon Container"}
                                        layoutDependency={layoutDependency}
                                        layoutId={"WuonoIB6j"}
                                        style={{
                                            backgroundColor:
                                                "var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0))",
                                            borderBottomLeftRadius: "50%",
                                            borderBottomRightRadius: "50%",
                                            borderTopLeftRadius: "50%",
                                            borderTopRightRadius: "50%",
                                        }}
                                    >
                                        <motion2.div
                                            className={"framer-u85fe0"}
                                            data-framer-name={"Arrow Icon"}
                                            layoutDependency={layoutDependency}
                                            layoutId={"z6ckMTrA1"}
                                            style={{
                                                rotate: -45,
                                            }}
                                        >
                                            <SVG2
                                                className={"framer-1ti3eyc"}
                                                data-framer-name={"Arrow"}
                                                layout={"position"}
                                                layoutDependency={layoutDependency}
                                                layoutId={"jAj7u3U97"}
                                                opacity={1}
                                                svg={
                                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 15.066 8.566 C 15.216 8.416 15.301 8.212 15.301 8 C 15.301 7.788 15.216 7.584 15.066 7.434 L 9.975 2.344 C 9.775 2.133 9.476 2.047 9.195 2.12 C 8.913 2.192 8.693 2.412 8.62 2.693 C 8.547 2.975 8.632 3.274 8.843 3.474 L 13.37 8 L 8.844 12.525 C 8.531 12.838 8.531 13.344 8.844 13.657 C 9.157 13.97 9.663 13.97 9.976 13.657 Z M 0.5 8.8 L 14.5 8.8 L 14.5 7.2 L 0.5 7.2 Z" fill="var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))"></path></svg>'
                                                }
                                                svgContentId={10927283782}
                                                withExternalLayout={true}
                                            />
                                        </motion2.div>
                                    </motion2.div>
                                </motion2.a>
                            </Link>
                        </motion2.div>
                    </MotionDivWithFX2>
                </Transition2>
            </Variants2>
        </LayoutGroup2>
    );
});
var css7 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", // 브라우저가 aspect-ratio 지원하면 CSS 변수로 표시
    ".framer-K4Az7.framer-1cgez0, .framer-K4Az7 .framer-1cgez0 { display: block; }", // 특정 클래스에 block강제 부여
    ".framer-K4Az7.framer-1btdyup { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", // 카드 전체 플렉스 렌더, gap/padding 포함
    ".framer-K4Az7 .framer-fhhjem { cursor: pointer; flex: none; height: 550px; overflow: hidden; position: relative; width: 512px; will-change: var(--framer-will-change-override, transform); }", // 상단 카드 이미지(썸네일)
    ".framer-K4Az7 .framer-1oepc7t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 0px 64px 0px; position: relative; width: 512px; }", // 우측 “내용” 칼럼, 세로 gap/padding
    ".framer-K4Az7 .framer-m7ot42 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", // 콘텐츠 그룹(전체 가로 100%)
    ".framer-K4Az7 .framer-wbfo0o, .framer-K4Az7 .framer-1u4zatd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", // heading, features 각각
    ".framer-K4Az7 .framer-un5yk5, .framer-K4Az7 .framer-11cs0wh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", // RichText 텍스트 스타일
    ".framer-K4Az7 .framer-1xduv2a-container, .framer-K4Az7 .framer-11huo7i-container, .framer-K4Az7 .framer-njzygt-container, .framer-K4Az7 .framer-17lbzxt-container, .framer-K4Az7 .framer-19izztu-container, .framer-K4Az7 .framer-1bo2xj1-container { flex: none; height: auto; position: relative; width: 100%; }", // feature별 카드 wrapper들
    ".framer-K4Az7 .framer-75ymlo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 4px 0px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", // CTA 버튼 스타일
    ".framer-K4Az7 .framer-1jrkibs { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", // 버튼 내 RichText 스타일
    ".framer-K4Az7 .framer-a7oqqr { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }", // 원형 화살표 아이콘 wrapper
    ".framer-K4Az7 .framer-u85fe0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }", // 실제 svg 아이콘 컨테이너
    ".framer-K4Az7 .framer-1ti3eyc { flex: none; height: 16px; position: relative; width: 16px; }", // 화살표 svg 크기
    ...css3, // 추가 커스텀 스타일(외부 임포트)
    ...css4,
    '.framer-K4Az7[data-border="true"]::after, .framer-K4Az7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', // border 속성 있을 때 ::after로 네 방향 테두리
];
var FramerKRhhcESHv = withCSS2(Component2, css7, "framer-K4Az7"); // css7을 실제 컴포넌트에 적용
var stdin_default4 = FramerKRhhcESHv;
FramerKRhhcESHv.displayName = "Cards / Coaching Plan"; // 디버깅/프레이머 라이브러리 내 표시 이름
FramerKRhhcESHv.defaultProps = {
    height: 582,
    width: 1120,
}; // 기본 사이즈
addPropertyControls2(FramerKRhhcESHv, {
    Cq40uxSGB: {
        title: "Image",
        type: ControlType2.ResponsiveImage, // 속성 패널에서 이미지 업로드 지원
    },
    khI3HJ1Rw: {
        defaultValue: "$59/month",
        title: "Price",
        type: ControlType2.String,
    },
    ClJ5ojmjC: {
        defaultValue: "\u3147\u3147\u3147",
        displayTextArea: true,
        title: "Title",
        type: ControlType2.String,
    },
    zp9KNgMWe: {
        defaultValue: "Free initial consultation",
        title: "Feature 1",
        type: ControlType2.String,
    },
    mWjIvJQ84: {
        defaultValue: "1x per 2 weeks training plan update",
        title: "Feature 2",
        type: ControlType2.String,
    },
    znQYkuyTe: {
        defaultValue: "Coaching via the TrainingPeaks App",
        displayTextArea: true,
        title: "Feature 3",
        type: ControlType2.String,
    },
    OVF9SH5wq: {
        defaultValue: "Weekly checking",
        title: "Feature 4",
        type: ControlType2.String,
    },
    tGeZ8I3qn: {
        defaultValue: "add feature 5",
        title: "Feature 5",
        type: ControlType2.String,
    },
    AA4HpRL_N: {
        defaultValue: "add feature 6",
        title: "Feature 6",
        type: ControlType2.String,
    },
}); // 속성 컨트롤(프레이머 속성과 UI 옵션 패널용)
addFonts2(
    FramerKRhhcESHv,
    [
        {
            explicitInter: true,
            fonts: [
                {
                    cssFamilyName: "Manrope",
                    source: "fontshare",
                    style: "normal",
                    uiFamilyName: "Manrope",
                    url: "https://framerusercontent.com/third-party-assets/fontshare/wf/BNWG6MUI4RTC6WEND2VPDH4MHMIVU3XZ/R5YXY5FMVG6PXU36GNEEA24MIPMEPGSM/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2",
                    weight: "500",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
                    weight: "400",
                },
            ],
        },
        ...CardsCoachingFeatureFonts, // 하위 카드에서 쓰는 폰트들(중복 X)
        ...getFontsFromSharedStyle2(fonts3), // 추가 스타일 공유 폰트
        ...getFontsFromSharedStyle2(fonts4),
    ],
    {
        supportsExplicitInterCodegen: true, // Inter 코드제너 지원 플래그
    },
);

// /:https://framerusercontent.com/modules/pX7Wh3LqvXejL9yFOnyD/lk0jsigfFkklgd6rUwk7/Zk3hfQiuj.js
import { jsx as _jsx3, jsxs as _jsxs3 } from "react/jsx-runtime";
import {
    addFonts as addFonts3,
    addPropertyControls as addPropertyControls3,
    ControlType as ControlType3,
    cx as cx3,
    getFontsFromSharedStyle as getFontsFromSharedStyle3,
    Link as Link2,
    RichText as RichText3,
    SVG as SVG3,
    useComponentViewport as useComponentViewport3,
    useLocaleInfo as useLocaleInfo3,
    useVariantState as useVariantState3,
    withCSS as withCSS3,
} from "unframer"; // unframer 패키지에서 주요 헬퍼/컴포넌트 임포트
import {
    LayoutGroup as LayoutGroup3,
    motion as motion3,
    MotionConfigContext as MotionConfigContext3,
} from "unframer";
import * as React3 from "react";
import { useRef as useRef4 } from "react";
var enabledGestures = {
    LyFZOrU9R: {
        hover: true,
    },
    Or_LZef1K: {
        hover: true,
        pressed: true,
    },
}; // 여러 variant별로 허용된 제스처(hover, pressed) 설정
var cycleOrder2 = ["Or_LZef1K", "LyFZOrU9R"]; // variant 전환 순서: Main → White Background 순환
var serializationHash3 = "framer-JxKxo"; // 이 컴포넌트 인스턴스의 고유 식별 해시(스타일 충돌 방지)
var variantClassNames3 = {
    LyFZOrU9R: "framer-v-1ryjbf", // White Background variant의 CSS 클래스
    Or_LZef1K: "framer-v-1qpqz07", // Main variant의 CSS 클래스
};

function addPropertyOverrides2(overrides, ...variants) {
    // 여러 variant들의 props 오버라이드를 합쳐서 반환하는 헬퍼
    // 현재 variant에 맞는 override만 적용해 동적 스타일/콘텐츠 변경
    const nextOverrides = {};
    variants?.forEach(
        (variant) => variant && Object.assign(nextOverrides, overrides[variant]),
    );
    return nextOverrides;
}

var transition13 = {
    delay: 0, // 애니메이션 지연 없음
    duration: 0.3, // 0.3초 동안 실행
    ease: [0.12, 0.23, 0.5, 1], // 부드러운 ease-in-out 커브 (자연스러운 속도 변화)
    type: "tween", // tween 타입 애니메이션 (선형 보간)
}; // 부드러운 tween 트랜지션 설정

var Transition3 = ({ value, children }) => {
    // 하위 motion 컴포넌트들에 트랜지션 설정을 전달하는 컨텍스트 프로바이더
    // 상위에서 내려온 설정을 우선하고, 없으면 기본값 사용
    const config = React3.useContext(MotionConfigContext3);
    const transition = value ?? config.transition;
    const contextValue = React3.useMemo(
        () => ({
            ...config,
            transition, // 하위 컴포넌트들이 이 transition을 상속받음
        }),
        [JSON.stringify(transition)], // 의존성 배열로 JSON 문자열 비교(깊은 비교)
    );
    return (
        <MotionConfigContext3.Provider value={contextValue}>
            {children}
        </MotionConfigContext3.Provider>
    );
};

var Variants3 = motion3.create(React3.Fragment); // variant 상태 전파를 위한 motion Fragment 래퍼

var humanReadableVariantMap2 = {
    "White Background": "LyFZOrU9R", // 사람이 읽기 쉬운 이름 → 내부 variant 키 매핑
    Main: "Or_LZef1K",
}; // 프레이머 UI에서 보여줄 친화적 variant 이름들

var getProps3 = ({ buttonText, height, id, link, width, ...props }) => {
    return {
        ...props,
        qQ3voyXpF: link ?? props.qQ3voyXpF, // 링크 prop을 내부 난수키로 저장
        uucThgTIi: buttonText ?? props.uucThgTIi ?? "Get in touch", // 버튼 텍스트 기본값
        variant:
            humanReadableVariantMap2[props.variant] ?? props.variant ?? "Or_LZef1K", // variant 이름 정규화(Main 기본)
    };
}; // 외부 props를 내부 구조에 맞게 변환 + 기본값 보장

var createLayoutDependency3 = (props, variants) => {
    // layout 애니메이션 동기화를 위한 고유 식별 키 생성
    // variant 조합 + 추가 의존성으로 레이아웃 변화시 부드러운 전환 보장
    if (props.layoutDependency)
        return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};

var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref) {
    // React.forwardRef로 외부 ref 지원 (부모 컴포넌트가 이 컴포넌트 참조 가능)
    const fallbackRef = useRef4(null); // 내부용 ref (fallback)
    const refBinding = ref ?? fallbackRef; // 외부 ref 우선, 없으면 내부 ref
    const defaultLayoutId = React3.useId(); // 고유한 layoutId 생성 (레이아웃 애니메이션용)
    const { activeLocale, setLocale } = useLocaleInfo3(); // 다국어 지원을 위한 로케일 정보
    const componentViewport = useComponentViewport3(); // 이 컴포넌트의 뷰포트 위치/크기 정보
    const {
        style,
        className: className6,
        layoutId,
        variant,
        uucThgTIi: uucThgTIi2, // 버튼 텍스트 (내부 변수명)
        qQ3voyXpF: qQ3voyXpF2, // 링크 (내부 변수명)
        ...restProps
    } = getProps3(props); // props를 정리하고 내부 변수로 재정의
    const {
        baseVariant, // 기본 variant 상태
        classNames, // 현재 variant에 따른 CSS 클래스
        clearLoadingGesture, // 로딩 제스처 클리어
        gestureHandlers, // hover/pressed 등의 제스처 핸들러들
        gestureVariant, // 제스처 상태에 따른 variant
        isLoading, // 컴포넌트 로딩 상태
        setGestureState, // 제스처 상태 설정
        setVariant, // variant 변경 함수
        variants, // 현재 활성 variant 배열
    } = useVariantState3({
        cycleOrder: cycleOrder2, // variant 순환 순서
        defaultVariant: "Or_LZef1K", // 기본 Main variant
        enabledGestures, // 허용된 제스처 설정 (hover/pressed)
        ref: refBinding, // 이 컴포넌트의 DOM ref
        variant, // 외부에서 받은 variant
        variantClassNames: variantClassNames3, // variant별 클래스 매핑
    }); // variant 및 제스처 상태 관리 훅
    const layoutDependency = createLayoutDependency3(props, variants); // 레이아웃 의존성 키 생성
    const sharedStyleClassNames = [className4]; // 공유 스타일 클래스 (텍스트/폰트용)
    const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames); // 해시 + 공유 스타일로 고유 클래스 생성
	return (
        <LayoutGroup3 id={layoutId ?? defaultLayoutId}>
            {/* layoutId 기준으로 이 버튼과 자식들의 레이아웃 애니메이션을 묶음 */}
            <Variants3 animate={variants} initial={false}>
                {/* useVariantState3에서 나온 variants 값에 따라 variant 전환 */}
                <Transition3 value={transition13}>
                    {/* 전체 버튼을 감싸는 링크. 클릭 시 qQ3voyXpF2로 이동 */}
                    <Link2
                        href={qQ3voyXpF2}
                        motionChild={true} // 내부 motion 요소들과 함께 애니메이션 처리
                        nodeId={"Or_LZef1K"} // Framer 내부 노드 ID
                        openInNewTab={false}
                        scopeId={"Zk3hfQiuj"}
                        smoothScroll={true} // 동일 페이지 내 앵커라면 부드러운 스크롤
                    >
                        <motion3.a
                            {...restProps} // 상위에서 넘긴 기타 props 모두 전달
                            {...gestureHandlers} // hover/pressed 제스처 핸들러들(onHoverStart 등)
                            className={`${cx3(scopingClassNames, "framer-1qpqz07", className6, classNames)} framer-1phqhrz`}
                            // scopingClassNames + variant 클래스 + 외부 className + 추가 클래스
                            data-framer-name={"Main"} // 에디터에서 보이는 이름
                            layoutDependency={layoutDependency} // 레이아웃 변경 감지 키
                            layoutId={"Or_LZef1K"} // 이 버튼 variant의 레이아웃 ID
                            ref={refBinding} // 외부/내부 ref 연결
                            style={{
                                "--border-bottom-width": "0px",
                                "--border-color": "rgba(0, 0, 0, 0)",
                                "--border-left-width": "0px",
                                "--border-right-width": "0px",
                                "--border-style": "solid",
                                "--border-top-width": "0px",
                                backgroundColor:
                                    "var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))",
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                ...style, // 외부에서 전달된 추가 스타일 덮어쓰기
                            }}
                            variants={{
                                // variant + 제스처 조합별 스타일(Framer Motion variants)
                                "LyFZOrU9R-hover": {
                                    backgroundColor:
                                        "var(--token-c81c879b-6a21-479a-8d09-1e52fc2e81ef, rgb(204, 204, 204))",
                                },
                                "Or_LZef1K-hover": {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px",
                                    backgroundColor:
                                        "var(--token-c81c879b-6a21-479a-8d09-1e52fc2e81ef, rgb(204, 204, 204))",
                                },
                                "Or_LZef1K-pressed": {
                                    "--border-bottom-width": "0px",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-top-width": "0px",
                                    backgroundColor:
                                        "var(--token-c81c879b-6a21-479a-8d09-1e52fc2e81ef, rgb(204, 204, 204))",
                                },
                                LyFZOrU9R: {
                                    "--border-bottom-width": "1px",
                                    "--border-color":
                                        "var(--token-96b2b273-006d-4dd2-8d16-427f13d19d4a, rgb(225, 225, 225))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    backgroundColor:
                                        "var(--token-c773fe8d-8aed-4719-9dcd-b57e1bc84fdb, rgb(242, 242, 242))",
                                },
                            }}
                            {...addPropertyOverrides2(
                                {
                                    // variant별로 특정 prop만 추가/변경 (data-framer-name, data-border 등)
                                    "LyFZOrU9R-hover": {
                                        "data-framer-name": void 0, // hover 상태에서는 이름 표시 안 함
                                    },
                                    "Or_LZef1K-hover": {
                                        "data-framer-name": void 0,
                                    },
                                    "Or_LZef1K-pressed": {
                                        "data-framer-name": void 0,
                                    },
                                    LyFZOrU9R: {
                                        "data-border": true, // ::after border 스타일 적용용 플래그
                                        "data-framer-name": "White Background", // 에디터에서 표시될 Variant 이름
                                    },
                                },
                                baseVariant, // 현재 base variant
                                gestureVariant, // hover/pressed 등 제스처 variant
                            )}
                        >
                            <RichText3
                                __fromCanvasComponent={true}
                                className={"framer-lcrz8y"}
                                data-framer-name={"Button Text"}
                                fonts={["Inter"]}
                                layoutDependency={layoutDependency}
                                layoutId={"hOGVEpiGm"}
                                style={{
                                    "--framer-paragraph-spacing": "0px", // 버튼 텍스트 줄 간격 제거
                                }}
                                text={uucThgTIi2} // 외부에서 넘어온 버튼 텍스트(기본 "Get in touch")
                                verticalAlignment={"top"}
                                withExternalLayout={true}
                            >
                                <React3.Fragment>
                                    <motion3.p
                                        className={"framer-styles-preset-e9oeue"}
                                        data-styles-preset={"HLBx5FEd4"}
                                    >
                                        {"Get a free quote" /* 캔버스 내 기본 표시 텍스트 */}
                                    </motion3.p>
                                </React3.Fragment>
                            </RichText3>
                            <motion3.div
                                className={"framer-rsvt93"}
                                data-framer-name={"Icon Container"}
                                layoutDependency={layoutDependency}
                                layoutId={"WShNXP46k"}
                                style={{
                                    backgroundColor:
                                        "var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0))",
                                    borderBottomLeftRadius: "50%",
                                    borderBottomRightRadius: "50%",
                                    borderTopLeftRadius: "50%",
                                    borderTopRightRadius: "50%", // 완전한 원형 배경
                                }}
                            >
                                <motion3.div
                                    className={"framer-1qw1xy7"}
                                    data-framer-name={"Arrow Icon"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"NojIUNRDX"}
                                    style={{
                                        rotate: -45, // 기본은 -45도 회전(↗ 방향 느낌)
                                    }}
                                    variants={{
                                        // hover/pressed 시 화살표를 0도로 회전시켜 정방향으로 표현
                                        "LyFZOrU9R-hover": {
                                            rotate: 0,
                                        },
                                        "Or_LZef1K-hover": {
                                            rotate: 0,
                                        },
                                        "Or_LZef1K-pressed": {
                                            rotate: 0,
                                        },
                                    }}
                                >
                                    <SVG3
                                        className={"framer-mozi2p"}
                                        data-framer-name={"Arrow"}
                                        layout={"position"}
                                        layoutDependency={layoutDependency}
                                        layoutId={"AbDVViCEE"}
                                        opacity={1}
                                        svg={
                                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 15.066 8.566 C 15.216 8.416 15.301 8.212 15.301 8 C 15.301 7.788 15.216 7.584 15.066 7.434 L 9.975 2.344 C 9.775 2.133 9.476 2.047 9.195 2.12 C 8.913 2.192 8.693 2.412 8.62 2.693 C 8.547 2.975 8.632 3.274 8.843 3.474 L 13.37 8 L 8.844 12.525 C 8.531 12.838 8.531 13.344 8.844 13.657 C 9.157 13.97 9.663 13.97 9.976 13.657 Z M 0.5 8.8 L 14.5 8.8 L 14.5 7.2 L 0.5 7.2 Z" fill="var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))"></path></svg>'
                                        } // 흰색 화살표 SVG(오른쪽 방향)
                                        svgContentId={10927283782}
                                        withExternalLayout={true}
                                    />
                                </motion3.div>
                            </motion3.div>
                        </motion3.a>
                    </Link2>
                </Transition3>
            </Variants3>
        </LayoutGroup3>
    );
});
var css8 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", // 브라우저가 aspect-ratio 지원 시 커스텀 변수 설정
    ".framer-JxKxo.framer-1phqhrz, .framer-JxKxo .framer-1phqhrz { display: block; }", // 기본 버튼 래퍼를 block 요소로 강제
    ".framer-JxKxo.framer-1qpqz07 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 4px 0px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", // 메인 버튼 스타일(가로 플렉스, 아이콘+텍스트)
    ".framer-JxKxo .framer-lcrz8y { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", // 버튼 텍스트(RichText) 영역
    ".framer-JxKxo .framer-rsvt93 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }", // 둥근 아이콘 컨테이너(정사각형)
    ".framer-JxKxo .framer-1qw1xy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }", // 실제 화살표 아이콘 래퍼
    ".framer-JxKxo .framer-mozi2p { flex: none; height: 16px; position: relative; width: 16px; }", // SVG 화살표 크기
    ...css4, // 상위/공유 스타일 추가
    '.framer-JxKxo[data-border="true"]::after, .framer-JxKxo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', // data-border=true일 때 ::after로 버튼 전체 테두리 그림
];

var FramerZk3hfQiuj = withCSS3(Component3, css8, "framer-JxKxo"); // Component3에 css8과 스코프 클래스(frmaer-JxKxo) 적용
var stdin_default5 = FramerZk3hfQiuj;
FramerZk3hfQiuj.displayName = "Primary"; // 프레이머 캔버스/패널에 표시될 컴포넌트 이름
FramerZk3hfQiuj.defaultProps = {
    height: 48,
    width: 176,
}; // 기본 버튼 크기

addPropertyControls3(FramerZk3hfQiuj, {
    variant: {
        options: ["Or_LZef1K", "LyFZOrU9R"], // 내부 variant 키
        optionTitles: ["Main", "White Background"], // 에디터에서 보이는 이름
        title: "Variant",
        type: ControlType3.Enum, // 드롭다운/enum 선택
    },
    uucThgTIi: {
        defaultValue: "Get in touch",
        description: "",
        displayTextArea: false,
        title: "Button Text",
        type: ControlType3.String, // 버튼 텍스트 입력
    },
    qQ3voyXpF: {
        description: "",
        title: "Link",
        type: ControlType3.Link, // 링크 선택/입력 컨트롤
    },
}); // 프레이머 속성 패널 정의(variant/텍스트/링크 설정 가능)

addFonts3(
    FramerZk3hfQiuj,
    [
        {
            explicitInter: true, // Inter 폰트를 명시적으로 사용
            fonts: [
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
                    weight: "400",
                },
            ],
        },
        ...getFontsFromSharedStyle3(fonts4), // 공유 텍스트 스타일에서 필요한 폰트들
    ],
    {
        supportsExplicitInterCodegen: true, // 코드 생성 시 Inter 최적화 허용
    },
);

// /:https://framerusercontent.com/modules/WDLoYzpU4s2DdopoOq1M/DyEtB6pHNiJAg5uceBQq/hXAdPDuWr.js
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(
    withFX3(motion4.div),
);
// motion.div에 FX(시각 효과)를 입힌 뒤, 최초 등장 애니메이션까지 최적화한 래퍼 컴포넌트

var RichTextWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(
    withFX3(RichText4),
);
// RichText에도 동일하게 FX + 등장 애니메이션 래핑

var PrimaryFonts = getFonts2(stdin_default5); // Primary 버튼 컴포넌트에서 사용하는 폰트 정보 추출

var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect =
    withOptimizedAppearEffect(withFX3(SmartComponentScopedContainer2));
// SmartComponentScopedContainer2에 FX + 등장효과를 적용한 버전

var MotionDivWithFX3 = withFX3(motion4.div); // FX만 포함된 motion.div (appear 최적화는 없음)

var ImageWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(
    withFX3(Image2),
);
// Image2에 FX + onMount appear 애니메이션 적용

var SectionsTestimonialsFonts = getFonts2(stdin_default); // Testimonials 섹션에서 쓰는 폰트들
var CardsCoachingPlanFonts = getFonts2(stdin_default4); // Coaching Plan 카드 섹션 폰트들

var serializationHash4 = "framer-f7ytB"; // 이 섹션/컴포넌트 전용 스타일 스코프 해시
var variantClassNames4 = {
    mFJkvjBKy: "framer-v-jfdemc", // 단일 variant 키 → CSS 클래스 매핑
};

var transition14 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring",
}; // spring 애니메이션 (살짝 튀어오르는 느낌)

var transition2 = {
    delay: 0.8,
    duration: 0.5,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
}; // 0.8초 후 시작하는 부드러운 tween

var animation3 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition2,
    x: 0,
    y: 0,
}; // 페이드 인 + 제자리로 이동하는 최종 상태(요소가 자연스럽게 등장)

var animation12 = {
    opacity: 1e-3,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 20,
}; // 거의 보이지 않고 아래로 20px 내려가 있는 초기 상태

var animation22 = {
    filter: "blur(6px)",
    opacity: 1e-3,
    rotate: 0,
    scale: 1.4,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
}; // 흐릿하고 확대된 상태(텍스트가 멀리서 다가오는 느낌)

var transition3 = {
    bounce: 0.25,
    delay: 0.035,
    duration: 0.45,
    type: "spring",
}; // 짧은 spring(살짝 튕기는 텍스트 등장용)

var textEffect = {
    effect: animation22,
    tokenization: "character", // 텍스트를 글자 단위로 쪼개서 효과 적용
    transition: transition3,
    trigger: "onMount", // 컴포넌트 마운트 시 한 번 실행
    type: "appear", // 등장 효과(appear) 타입
}; // 각 글자가 blur+scale에서 spring으로 들어오는 텍스트 애니메이션 정의

var transition4 = {
    delay: 1,
    duration: 0.5,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
}; // 1초 후 시작하는 tween(두 번째 요소용)

var animation32 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition4,
    x: 0,
    y: 0,
}; // 두 번째 요소의 최종 등장 상태

var transition5 = {
    delay: 1.2,
    duration: 0.5,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
}; // 1.2초 후 시작(세 번째 요소용, 약간 더 늦게)

var animation4 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition5,
    x: 0,
    y: 0,
}; // 세 번째 요소 최종 등장 상태

var transition6 = {
    delay: 1.4,
    duration: 0.5,
    ease: [0.44, 0, 0.56, 1],
    type: "tween",
}; // 1.4초 후 시작(네 번째 요소용)

var animation5 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition6,
    x: 0,
    y: 0,
}; // 네 번째 요소 최종 등장 (순차 등장 애니메이션 구성)

var transition7 = {
    delay: 0,
    duration: 2,
    ease: [0.12, 0.23, 0.5, 1],
    type: "tween",
}; // 2초 동안 천천히 변화하는 배경/장식 애니메이션에 적합

var animation6 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: transition7,
    x: 0,
    y: 0,
}; // 긴 duration으로 서서히 나타나는 상태

var animation7 = {
    opacity: 1e-3,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
}; // 약간 확대되어 있지만 거의 보이지 않는 초기 상태

var transformTemplate1 = (_2, t5) => `translateX(-50%) ${t5}`;
// transformTemplate: Framer Motion의 transform 문자열을 커스터마이즈
// 항상 X축 -50% 이동(중앙 정렬) + 나머지 transform(t5)을 이어붙임

var toResponsiveImage2 = (value) => {
    if (
        typeof value === "object" &&
        value !== null &&
        typeof value.src === "string"
    ) {
        return value; // {src} 구조면 그대로 반환
    }
    return typeof value === "string"
        ? {
                src: value, // 문자열이면 src로 감싼 이미지 객체로
            }
        : void 0;
};

var toString = (value) => {
    return typeof value === "string" ? value : String(value);
}; // 어떤 값이든 문자열로 변환

var QueryData = ({ query: query2, pageSize, children }) => {
    // Framer Data(또는 GraphQL 비슷한 구조)를 loadMore 방식으로 페이지네이션
    const { paginatedQuery, paginationInfo, loadMore } =
        useLoadMorePaginatedQuery(query2, pageSize, "Ly9pynKLd");
    const data = useQueryData(paginatedQuery); // 실제 데이터 fetch
    return children(data, paginationInfo, loadMore); // render-props 패턴으로 데이터 전달
};

var Transition4 = ({ value, children }) => {
    // MotionConfigContext4를 사용해 하위 모든 motion4 요소의 transition 설정
    const config = React4.useContext(MotionConfigContext4);
    const transition = value ?? config.transition;
    const contextValue = React4.useMemo(
        () => ({
            ...config,
            transition,
        }),
        [JSON.stringify(transition)],
    );
    return (
        <MotionConfigContext4.Provider value={contextValue}>
            {children}
        </MotionConfigContext4.Provider>
    );
};

var Variants4 = motion4.create(React4.Fragment); // variant를 전달하기 위한 motion Fragment

var getProps4 = ({ height, id, width, ...props }) => {
    return {
        ...props, // 현재는 height/id/width 제거 후 나머지 props만 그대로 전달
    };
};

var createLayoutDependency4 = (props, variants) => {
    // 이 섹션의 레이아웃 변경을 추적하기 위한 고유 키
    if (props.layoutDependency)
        return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};

var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref) {
    const fallbackRef = useRef5(null);
    const refBinding = ref ?? fallbackRef; // 외부 ref 없으면 내부 ref 사용
    const defaultLayoutId = React4.useId(); // 이 컴포넌트 인스턴스별 고유 layoutId
    const { activeLocale, setLocale } = useLocaleInfo4(); // 다국어/지역화 정보
    const componentViewport = useComponentViewport4(); // 뷰포트 내 위치/크기
    const {
        style,
        className: className6,
        layoutId,
        variant,
        ...restProps
    } = getProps4(props); // 스타일/클래스/variant만 별도 추출
    const {
        baseVariant,
        classNames,
        clearLoadingGesture,
        gestureHandlers,
        gestureVariant,
        isLoading,
        setGestureState,
        setVariant,
        variants,
    } = useVariantState4({
        defaultVariant: "mFJkvjBKy", // 기본 variant 하나
        ref: refBinding,
        variant,
        variantClassNames: variantClassNames4,
    }); // 이 섹션의 variant 상태와 제스처 관리

    const layoutDependency = createLayoutDependency4(props, variants);
    const sharedStyleClassNames = [className2, className]; // 미리 정의된 섹션 공통 스타일
    const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames); // 해시 + 공통 클래스 조합
    const router = useRouter(); // Next.js Router(페이지 이동 등에 사용 가능)
	return (
        <LayoutGroup4 id={layoutId ?? defaultLayoutId}>
            {/* layoutId를 공유하는 자식 요소들끼리 레이아웃 변화(위치, 크기 등)를 자연스럽게 애니메이션 */}
            <Variants4 animate={variants} initial={false}>
                {/* variant 상태 및 트리 전체에 variant 전이(애니메이션) 전파 */}
                <Transition4 value={transition14}>
                    {/* 메인 섹션 wrapper, AnimatePresence가 없는 경우에도 자연스럽게 애니메이션 처리 */}
                    <motion4.div
                        {...restProps} // 상위에서 전달받은 기타 props 모두 전달
                        {...gestureHandlers} // hover 등 제스처 이벤트 핸들러 추가
                        className={cx4(
                            scopingClassNames,
                            "framer-jfdemc",
                            className6,
                            classNames,
                        )} // 스타일 해시+공통/variant 클래스를 모두 적용
                        data-framer-name={"Variant 1"} // 프레이머 에디터에서 섹션명
                        layoutDependency={layoutDependency} // 레이아웃 동기화 키
                        layoutId={"mFJkvjBKy"}
                        ref={refBinding} // 외부 ref 있으면 연결, 아니면 내부 생성
                        style={{
                            ...style, // 외부 스타일 병합
                        }}
                    >
                        <motion4.div
                            className={"framer-yzepy1"}
                            data-framer-name={"HOME"} // 상위 노드: HOME 전체영역
                            layoutDependency={layoutDependency}
                            layoutId={"MiMi5sM5X"}
                        >
                            <motion4.div
                                className={"framer-ko0w0"}
                                data-framer-name={"메인페이지"} // HOME 내 “메인페이지” 영역
                                layoutDependency={layoutDependency}
                                layoutId={"JbsCnIUQp"}
                            >
                                <motion4.header
                                    className={"framer-91zcyx"}
                                    data-framer-name={"Sections / Hero"} // Hero(히어로) 헤더
                                    layoutDependency={layoutDependency}
                                    layoutId={"MSsUkLs7T"}
                                >
                                    <MotionDivWithFX3
                                        __framer__adjustPosition={false} // 위치 조정 무효화(커스텀 배치)
                                        __framer__offset={0}
                                        __framer__parallaxTransformEnabled={true} // 패럴럭스 효과 ON
                                        __framer__speed={50}
                                        __perspectiveFX={false}
                                        __smartComponentFX={true}
                                        __targetOpacity={1}
                                        className={"framer-ejgfl"}
                                        data-framer-name={"Container"}
                                        layoutDependency={layoutDependency}
                                        layoutId={"yaEnFoM5S"}
                                    >
                                        <motion4.div
                                            className={"framer-1sxmkw0"}
                                            data-framer-name={"Hero Content"} // 실제 Hero 콘텐츠 래퍼
                                            layoutDependency={layoutDependency}
                                            layoutId={"kDO_sNfwl"}
                                        >
                                            <motion4.div
                                                className={"framer-nlcsqn"}
                                                data-framer-name={"Top Part"} // Hero의 상단 영역
                                                layoutDependency={layoutDependency}
                                                layoutId={"h4eF4445J"}
                                            >
                                                <motion4.div
                                                    className={"framer-1nmjqcn"}
                                                    data-framer-name={"Content"} // 타이틀, 장식 등 포함한 영역
                                                    layoutDependency={layoutDependency}
                                                    layoutId={"x3din1HK0"}
                                                >
                                                    <MotionDivWithFXWithOptimizedAppearEffect
                                                        __perspectiveFX={false}
                                                        __smartComponentFX={true}
                                                        __targetOpacity={1}
                                                        animate={animation3} // 등장(최종) 상태
                                                        className={"framer-1ageat8"}
                                                        data-framer-appear-id={"1ageat8"}
                                                        data-framer-name={"Preheading"} // 소제목, 장식 줄
                                                        initial={animation12} // 시작 상태(아래쪽+투명도 낮음)
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"fBWuucX7H"}
                                                        optimized={true} // appear 최적화
                                                    >
                                                        <motion4.div
                                                            aria-label={"Line decoration"}
                                                            className={"framer-e7lee1"}
                                                            data-framer-name={"Line"} // 줄(디자인 장식) 요소
                                                            layoutDependency={layoutDependency}
                                                            layoutId={"boRE7MmLy"}
                                                            style={{
                                                                backgroundColor:
                                                                    "var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))", // 흰색
                                                            }}
                                                        />
                                                    </MotionDivWithFXWithOptimizedAppearEffect>
													<RichText4
                                                        __fromCanvasComponent={true} // RichText 컴포넌트를 Framer 캔버스에서 생성
                                                        className={"framer-1he1pi6"} // H1 텍스트 레이어 CSS 클래스명
                                                        data-framer-name={"H1"} // 프레이머 에디터에서 보이는 레이어 이름
                                                        effect={textEffect} // 글자 단위 등장 에니메이션 효과
                                                        fonts={["Inter"]} // 사용할 폰트 패밀리 배열
                                                        layoutDependency={layoutDependency} // 레이아웃 애니메이션 동기화용 의존성
                                                        layoutId={"BtrUpe02s"} // 이 RichText 인스턴스의 고유 레이아웃 ID
                                                        style={{
                                                            "--framer-link-text-color": "rgb(0, 153, 255)", // 링크 파란색
                                                            "--framer-link-text-decoration": "underline", // 링크 밑줄
                                                        }}
                                                        verticalAlignment={"top"} // 상단 정렬
                                                        withExternalLayout={true} // 외부 레이아웃 시스템 연동
                                                    >
                                                        <React4.Fragment>
                                                            <motion4.h1
                                                                className={"framer-styles-preset-bo0tsp"} // H1 폰트 스타일 프리셋
                                                                data-styles-preset={"jV6i3vVkv"} // 스타일 프리셋 식별자
                                                            >
                                                                {"\uD2B8\uB9BD\uCE90\uCC98"} {/* 실제 타이틀: "트립캐처" */}
                                                            </motion4.h1>
                                                        </React4.Fragment>
                                                    </RichText4>
                                                    <RichTextWithFXWithOptimizedAppearEffect
                                                        __fromCanvasComponent={true} // 마찬가지로 Framer 캔버스 생성 문단
                                                        __perspectiveFX={false}
                                                        __smartComponentFX={true}
                                                        __targetOpacity={1} // 최종 opacity
                                                        animate={animation32} // 등장 후 상태 애니메이션
                                                        className={"framer-pa243r"}
                                                        data-framer-appear-id={"pa243r"}
                                                        data-framer-name={"Paragraph"} // 문단 이름
                                                        fonts={["Inter"]}
                                                        initial={animation12} // 시작 상태: opacity 0, y=20
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"dKSgZFNmh"}
                                                        optimized={true}
                                                        style={{
                                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                                            "--framer-link-text-decoration": "underline",
                                                        }}
                                                        verticalAlignment={"top"}
                                                        withExternalLayout={true}
                                                    >
                                                        <React4.Fragment>
                                                            <motion4.p
                                                                className={"framer-styles-preset-1yhjbal"}
                                                                data-styles-preset={"Iz6fkU9FB"}
                                                            >
                                                                {
                                                                    "\uD3C9\uBC94\uD55C \uD558\uB8E8\uAC00 \uD2B9\uBCC4\uD55C \uC5EC\uD589\uC73C\uB85C. \uC6D0\uD558\uB294 \uACF3, \uC6D0\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC27D\uACE0 \uBE60\uB974\uAC8C \uC5EC\uD589\uC744 \uC2DC\uC791\uD558\uC138\uC694."
                                                                }
                                                            </motion4.p>
                                                        </React4.Fragment>
                                                    </RichTextWithFXWithOptimizedAppearEffect>
                                                </motion4.div>
                                                <ResolveLinks
                                                    links={[
                                                        {
                                                            href: {
                                                                webPageId: "oC_OWsE43",
                                                            },
                                                            implicitPathVariables: void 0,
                                                        },
                                                    ]}
                                                >
                                                    {(resolvedLinks) => (
                                                        <ComponentViewportProvider2
                                                            height={48}
                                                            y={
                                                                (componentViewport?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                119.3 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                279.4
                                                            }
                                                        >
                                                            <SmartComponentScopedContainerWithFXWithOptimizedAppearEffect
                                                                __perspectiveFX={false}
                                                                __smartComponentFX={true}
                                                                __targetOpacity={1}
                                                                animate={animation4}
                                                                className={"framer-1di4muk-container"}
                                                                data-framer-appear-id={"1di4muk"}
                                                                data-framer-name={"Buttons / Primary"}
                                                                initial={animation12}
                                                                layoutDependency={layoutDependency}
                                                                layoutId={"H8BU1khv_-container"}
                                                                name={"Buttons / Primary"}
                                                                nodeId={"H8BU1khv_"}
                                                                optimized={true}
                                                                rendersWithMotion={true}
                                                                scopeId={"hXAdPDuWr"}
                                                            >
                                                                {_jsx4(stdin_default5, {
                                                                    height: "100%",
                                                                    id: "H8BU1khv_",
                                                                    layoutId: "H8BU1khv_",
                                                                    name: "Buttons / Primary",
                                                                    qQ3voyXpF: resolvedLinks[0],
                                                                    uucThgTIi: "\uB85C\uADF8\uC778\uD558\uAE30",
                                                                    variant: "Or_LZef1K",
                                                                    width: "100%",
                                                                })}
                                                            </SmartComponentScopedContainerWithFXWithOptimizedAppearEffect>
                                                        </ComponentViewportProvider2>
                                                    )}
                                                </ResolveLinks>
                                            </motion4.div>
											<MotionDivWithFXWithOptimizedAppearEffect
												__perspectiveFX={false} // 3D 시점 관련 효과 비활성화
												__smartComponentFX={true} // Smart Component FX를 적용
												__targetOpacity={1} // 최종 opacity 값
												animate={animation5} // Framer Motion animate prop, 종료 상태를 지정
												className={"framer-1gzygwj"} // 컴포넌트에 적용할 CSS 클래스명
												data-border={true} // 커스텀 data attribute, border 스타일 제어용
												data-framer-appear-id={"1gzygwj"} // appear 애니메이션 인스턴스 식별용 ID
												data-framer-name={"Reviews"} // 에디터/도구에서 보이는 레이어 이름(Reviews)
												initial={animation12} // Framer Motion initial prop, 시작 상태 정의
												layoutDependency={layoutDependency} // 레이아웃 동기화/감지를 위한 의존성 키
												layoutId={"oAxzQtMRK"} // Motion에서 레이아웃 애니메이션 식별자
												optimized={true} // 등장 애니메이션 최적화 플래그
												style={{
													"--border-bottom-width": "0px",// 하단 border 두께 값
													"--border-color":
														"var(--token-03d2718c-248b-43d7-860c-d67347de1e95, rgba(255, 255, 255, 0.5))",// border 색상 변수
													"--border-left-width": "2px", // 왼쪽 border 두께
													"--border-right-width": "0px", // 오른쪽 border 두께
													"--border-style": "solid", // border 스타일
													"--border-top-width": "0px", // 상단 border 두께
												}}
											>
												<SVG4
													className={"framer-1msm81d"} // 별점 SVG에 적용하는 CSS 클래스
													data-framer-name={"Stars"}// 레이어 이름(Stars)
													fill={
														'var(--token-1b7bb1c4-3a89-4ec2-aee2-16abaf604d08, rgb(0, 0, 0)) /* {"name":"Black"} */'
													}// fill 속성(검정색 토큰 적용)
													intrinsicHeight={24}// SVG 기본 높이
													intrinsicWidth={118} // SVG 기본 너비
													layoutDependency={layoutDependency}// 레이아웃 의존성 연결
													layoutId={"ikbSx9hzW"} // SVG 컨테이너 레이아웃 ID
													svg={
														'<svg width="118" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M106.551 2.927c-.299-.921-1.603-.921-1.902 0l-1.519 4.674a1 1 0 0 1-.951.69h-4.914c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.197 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.381-1.81-.588-1.81h-4.914a1 1 0 0 1-.951-.69l-1.519-4.674Zm-24 0c-.3-.921-1.603-.921-1.902 0L79.13 7.601a1 1 0 0 1-.95.691h-4.915c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.673c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.975 2.888c.784.57 1.839-.196 1.54-1.118l-1.52-4.673a1 1 0 0 1 .364-1.118l3.976-2.889c.784-.57.38-1.809-.588-1.809h-4.914a1 1 0 0 1-.951-.69l-1.52-4.676Zm-24 0c-.3-.921-1.603-.921-1.902 0L55.13 7.601a1 1 0 0 1-.95.691h-4.915c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.673c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.975 2.888c.784.57 1.839-.196 1.54-1.118l-1.52-4.673a1 1 0 0 1 .364-1.118l3.976-2.889c.784-.57.38-1.809-.588-1.809h-4.914a1 1 0 0 1-.951-.69l-1.52-4.676Zm-24 0c-.3-.921-1.603-.921-1.902 0L31.13 7.601a1 1 0 0 1-.95.691h-4.915c-.969 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.673c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.975 2.888c.784.57 1.839-.196 1.54-1.118l-1.52-4.673a1 1 0 0 1 .364-1.118l3.976-2.889c.783-.57.38-1.809-.588-1.809h-4.914a1 1 0 0 1-.951-.69l-1.52-4.676Zm-24 0c-.3-.921-1.603-.921-1.902 0L7.13 7.601a1 1 0 0 1-.95.691H1.264c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118L3.498 18.78c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.196 1.538-1.118l-1.518-4.673a1 1 0 0 1 .363-1.118l3.976-2.889c.784-.57.38-1.809-.588-1.809h-4.914a1 1 0 0 1-.951-.69l-1.52-4.675Z" fill="#fff"/></svg>' // SVG 원본 문자열(별 아이콘)
													}
													withExternalLayout={true} // 외부 레이아웃 시스템 연동
												/>
												<RichText4
													__fromCanvasComponent={true}// 캔버스에서 생성된 RichText 컴포넌트
													className={"framer-1bvbsbg"} // RichText용 CSS 클래스
													data-framer-name={"Paragraph"} // Paragraph 레이어 이름
													fonts={["Inter", "Inter-Bold"]} // 폰트 패밀리 배열
													layoutDependency={layoutDependency} // 레이아웃 의존성 키
													layoutId={"jVdzKhlSE"} // RichText 인스턴스의 레이아웃Id
													style={{
														"--framer-link-text-color": "rgb(0, 153, 255)", // 링크 색상
														"--framer-link-text-decoration": "underline",// 링크 밑줄
													}}
													verticalAlignment={"top"} // 텍스트 상단 정렬
													withExternalLayout={true} // 외부 레이아웃 연동
												>
													<React4.Fragment>
														<motion4.p
															className={"framer-styles-preset-1yhjbal"} // 문단(리뷰) 영역 스타일
															data-styles-preset={"Iz6fkU9FB"} // 스타일 프리셋 ID
														>
															{
																"Deciding 'What should we do?' every weekend used to be a chore, but "// UI에 그대로 표시되는 리뷰 텍스트, 문자열 리터럴
															}
															<motion4.strong>{"DatePick"}</motion4.strong>
															{
																" has set us free! My partner and I prefer quiet, healing dates, and this app's "
															}
															<motion4.strong>
																{"personalized recommendation feature"}
															</motion4.strong>
															{
																" is absolutely amazing. It perfectly finds caf\xE9s and walking trails that match the exact atmosphere and budget I want, almost like magic" // 문자열 리터럴로, UI에 그대로 노출됨
															}
														</motion4.p>
													</React4.Fragment>
												</RichText4>
											</MotionDivWithFXWithOptimizedAppearEffect>
										</motion4.div>
									</MotionDivWithFX3>
									<MotionDivWithFX3
                                        __framer__adjustPosition={false} // Framer 내부용 위치 자동조정 플래그
                                        __framer__offset={0} // 패럴럭스 계산 등에 쓰이는 오프셋 값
                                        __framer__parallaxTransformEnabled={true} // 패럴럭스 트랜스폼 사용 여부
                                        __framer__speed={50} // 패럴럭스 스크롤 속도
                                        __perspectiveFX={false} // 3D 시점 관련 효과 비활성화
                                        __smartComponentFX={true} // SmartComponent용 FX 처리 사용
                                        __targetOpacity={1} // 애니메이션 종료 시 opacity 값
                                        className={"framer-12pm0yl"} // Background 래퍼 클래스
                                        data-framer-name={"Background"} // Framer 에디터 레이어 이름
                                        layoutDependency={layoutDependency} // 레이아웃 동기화용 키
                                        layoutId={"A6dYrBTVl"} // 레이아웃 ID
                                    >
                                        <ImageWithFXWithOptimizedAppearEffect
                                            __perspectiveFX={false}
                                            __smartComponentFX={true}
                                            __targetOpacity={1}
                                            animate={animation6} // 배경 이미지 등장 애니메이션 상태
                                            background={{
                                                alt: "Dynamic picture of a cyclist riding downhill", // 이미지 대체 텍스트
                                                fit: "fill", // 컨테이너 채우도록 크기 조정
                                                loading: getLoadingLazyAtYPosition2(
                                                    (componentViewport?.y || 0) + 0 + 0 + 0 + 0 + 0,
                                                ), // 뷰포트 Y 위치 기반 lazy-load 전략
                                                pixelHeight: 1024, // 원본 이미지 높이(px)
                                                pixelWidth: 1024, // 원본 이미지 너비(px)
                                                positionX: "center", // X축 기준 중앙 정렬
                                                positionY: "center", // Y축 기준 중앙 정렬
                                                sizes: "1200px", // responsive sizes 속성
                                                src: "https://framerusercontent.com/images/iw8uRP1F9b4qhDYYeWCT6McxhY.png?width=1024&height=1024", // 실제 이미지 URL
                                                srcSet:
                                                    "https://framerusercontent.com/images/iw8uRP1F9b4qhDYYeWCT6McxhY.png?scale-down-to=512&width=1024&height=1024 512w,[https://framerusercontent.com/images/iw8uRP1F9b4qhDYYeWCT6McxhY.png?width=1024&height=1024](https://framerusercontent.com/images/iw8uRP1F9b4qhDYYeWCT6McxhY.png?width=1024&height=1024) 1024w", // 반응형 이미지 세트
                                            }}
                                            className={"framer-no36mp"}
                                             data-framer-appear-id={"no36mp"} // appear 애니메이션 ID
                                             data-framer-name={"\uBA54\uC778 \uC0AC\uC9C4"} // "메인 사진" 레이어 이름
                                             initial={animation7} // 이미지 시작 상태(Framer Motion용)
                                             layoutDependency={layoutDependency}
                                             layoutId={"yQwrZyyy2"} // 이미지 레이아웃 ID
                                             optimized={true} // 등장 애니메이션 최적화
                                        />
                                        <motion4.div
                                             aria-label={"Dark background overlay"} // 스크린리더용 설명
                                             className={"framer-vq3pn9"}
                                             data-framer-name={"Dark Overlay"} // 어두운 오버레이 레이어
                                             layoutDependency={layoutDependency}
                                             layoutId={"Z_Dg1zQti"}
                                             style={{
                                                 background:
                                                     "radial-gradient(33% 42% at 69% 59.4%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%)", // 라디얼 그라디언트 배경
                                             }}
                                        />
                                    </MotionDivWithFX3>
                                </motion4.header>
                                <ComponentViewportProvider2
                                    height={634} // 이 영역의 예상 높이
                                    width={"1200px"} // 고정 width 값
                                    y={(componentViewport?.y || 0) + 0 + 0 + 800} // 뷰포트 Y 위치 기준 offset
                                >
                                    <SmartComponentScopedContainer2
                                        className={"framer-cu0tq9-container"}
                                        layoutDependency={layoutDependency}
                                        layoutId={"upVR295sr-container"}
                                        nodeId={"upVR295sr"} // SmartComponent 노드 ID
                                        rendersWithMotion={true} // 내부에 motion 요소 포함
                                        scopeId={"hXAdPDuWr"} // SmartComponent scope ID
                                        transformTemplate={transformTemplate1} // transform 템플릿 함수
                                    >
                                        {_jsx4(stdin_default, {
                                            height: "100%",
                                            id: "upVR295sr",
                                            layoutId: "upVR295sr",
                                            oYurli1eg: "160px 40px 160px 40px", // padding 지정 (top right bottom left)
                                            style: {
                                                width: "100%", // 자식 컴포넌트 가로 100%
                                            },
                                            variant: "hhsGUVYNW", // SmartComponent variant 키
                                            width: "100%",
                                        })}
                                    </SmartComponentScopedContainer2>
                                </ComponentViewportProvider2>
                                <motion4.section
                                    className={"framer-10h2vy6"}
                                    data-framer-name={"Sections / Coaching"} // 섹션 이름
                                    layoutDependency={layoutDependency}
                                    layoutId={"TKHhafvVp"}
                                    style={{
                                        backgroundColor:
                                            "var(--token-28d21c18-0fa7-4a39-8727-636fc79ae338, rgb(255, 255, 255))", // 배경색 토큰
                                    }}
                                    transformTemplate={transformTemplate1} // 섹션 전체 transform 템플릿
                                >
                                    <motion4.div
                                        className={"framer-15lduhf"}
                                        data-framer-name={"Container"} // 섹션 컨테이너
                                        layoutDependency={layoutDependency}
                                        layoutId={"Y9IStw88E"}
                                    >
                                        <motion4.div
                                            className={"framer-toww00"}
                                            layoutDependency={layoutDependency}
                                            layoutId={"Ly9pynKLd"}
                                            style={{
                                                backgroundColor: "rgb(255, 255, 255)", // 흰색 배경
                                            }}
                                        >
                                            <ChildrenCanSuspend>
                                                <QueryData
                                                    pageSize={6} // 한 번에 가져올 아이템 개수
                                                    query={{
                                                        from: {
                                                            alias: "Ly9pynKLd", // 컬렉션 별칭
                                                            data: stdin_default2, // 실제 데이터 소스
                                                            type: "Collection", // 데이터 타입
                                                        },
                                                        select: [
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "EEjy4bKGm",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "FWwQPpQjr",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "NuerFtLZx",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "VBJC74o8w",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "GZ1a2VEWn",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "jt23dPTSl",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "a8jnMl1F_",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "wChxBbjfR",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "pB508fMtX",
                                                                type: "Identifier",
                                                            },
                                                            {
                                                                collection: "Ly9pynKLd",
                                                                name: "id",
                                                                type: "Identifier",
                                                            },
                                                        ],
                                                    }}
                                                >
                                                    {(collection, paginationInfo, loadMore) => ( // QueryData의 render prop
                                                        <_Fragment2>
                                                            {collection?.map(
                                                                (
                                                                    {
                                                                        a8jnMl1F_: a8jnMl1F_Ly9pynKLd2,
                                                                        EEjy4bKGm: EEjy4bKGmLy9pynKLd2,
                                                                        FWwQPpQjr: FWwQPpQjrLy9pynKLd2,
                                                                        GZ1a2VEWn: GZ1a2VEWnLy9pynKLd2,
                                                                        id: idLy9pynKLd2,
                                                                        jt23dPTSl: jt23dPTSlLy9pynKLd2,
                                                                        NuerFtLZx: NuerFtLZxLy9pynKLd2,
                                                                        pB508fMtX: pB508fMtXLy9pynKLd2,
                                                                        VBJC74o8w: VBJC74o8wLy9pynKLd2,
                                                                        wChxBbjfR: wChxBbjfRLy9pynKLd2,
                                                                    },
                                                                    index,
                                                                ) => {
                                                                    FWwQPpQjrLy9pynKLd2 ??= ""; // null/undefined 방지: 기본값 빈 문자열
                                                                    NuerFtLZxLy9pynKLd2 ??= "";
                                                                    VBJC74o8wLy9pynKLd2 ??= "";
                                                                    GZ1a2VEWnLy9pynKLd2 ??= "";
                                                                    jt23dPTSlLy9pynKLd2 ??= "";
                                                                    a8jnMl1F_Ly9pynKLd2 ??= "";
                                                                    wChxBbjfRLy9pynKLd2 ??= "";
                                                                    pB508fMtXLy9pynKLd2 ??= "";
                                                                    return (
                                                                        <LayoutGroup4
                                                                            id={`Ly9pynKLd-${idLy9pynKLd2}`} // 각 아이템별 고유 group ID
                                                                        >
                                                                            <PathVariablesContext.Provider
                                                                                value={{
                                                                                    pB508fMtX: pB508fMtXLy9pynKLd2, // path variable context 주입
                                                                                }}
                                                                            >
                                                                                <ComponentViewportProvider2
                                                                                    height={582}
                                                                                    width={"1120px"}
                                                                                    y={
                                                                                        (componentViewport?.y || 0) +
                                                                                        0 +
                                                                                        0 +
                                                                                        ((componentViewport?.height ||
                                                                                            3421) -
                                                                                            0 -
                                                                                            0) -
                                                                                        622 +
                                                                                        0 +
                                                                                        0 +
                                                                                        0 +
                                                                                        0 +
                                                                                        0 +
                                                                                        0
                                                                                    } // 이 카드의 뷰포트 내 y 위치 계산
                                                                                >
                                                                                    <SmartComponentScopedContainer2
                                                                                        className={
                                                                                            "framer-1kmgo31-container"
                                                                                        }
                                                                                        layoutDependency={layoutDependency}
                                                                                        layoutId={"pa6InlaJO-container"}
                                                                                        nodeId={"pa6InlaJO"}
                                                                                        rendersWithMotion={true}
                                                                                        scopeId={"hXAdPDuWr"}
                                                                                    >
                                                                                        {_jsx4(stdin_default4, {
                                                                                            AA4HpRL_N:
                                                                                                toString("CAFE - TERAROSA"), // 특정 텍스트 prop
                                                                                            ClJ5ojmjC: NuerFtLZxLy9pynKLd2,
                                                                                            Cq40uxSGB:
                                                                                                toResponsiveImage2(
                                                                                                    EEjy4bKGmLy9pynKLd2,
                                                                                                ), // 이미지 필드 -> responsive 이미지로 변환
                                                                                            height: "100%",
                                                                                            id: "pa6InlaJO",
                                                                                            khI3HJ1Rw: FWwQPpQjrLy9pynKLd2,
                                                                                            layoutId: "pa6InlaJO",
                                                                                            mWjIvJQ84: GZ1a2VEWnLy9pynKLd2,
                                                                                            OVF9SH5wq: a8jnMl1F_Ly9pynKLd2,
                                                                                            style: {
                                                                                                width: "100%",
                                                                                            },
                                                                                            tGeZ8I3qn: wChxBbjfRLy9pynKLd2,
                                                                                            width: "100%",
                                                                                            znQYkuyTe: jt23dPTSlLy9pynKLd2,
                                                                                            zp9KNgMWe: VBJC74o8wLy9pynKLd2,
                                                                                        })}
                                                                                    </SmartComponentScopedContainer2>
                                                                                </ComponentViewportProvider2>
                                                                            </PathVariablesContext.Provider>
                                                                        </LayoutGroup4>
                                                                    );
                                                                },
                                                            )}
                                                        </_Fragment2>
                                                    )}
                                                </QueryData>
                                            </ChildrenCanSuspend>
                                        </motion4.div>
                                    </motion4.div>
                                </motion4.section>
                            </motion4.div>
                        </motion4.div>
                    </motion4.div>
                </Transition4>
            </Variants4>
        </LayoutGroup4>
    );
});
var css9 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", // aspect-ratio 지원 여부에 따라 CSS 변수 설정
    ".framer-f7ytB.framer-19o2cjo, .framer-f7ytB .framer-19o2cjo { display: block; }", // 특정 클래스 display 설정
    ".framer-f7ytB.framer-jfdemc { height: 3421px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }", // 루트 프레임 사이즈/오버플로우
    ".framer-f7ytB .framer-yzepy1, .framer-f7ytB .framer-ko0w0 { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; }", // 전체 영역 absolute fill
    ".framer-f7ytB .framer-91zcyx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; left: calc(50.00000000000002% - 1200px / 2); min-height: 800px; overflow: hidden; padding: 0px 40px 0px 40px; position: absolute; top: 0px; width: 1200px; }", // Hero 영역 레이아웃
    ".framer-f7ytB .framer-ejgfl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1120px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-f7ytB .framer-1sxmkw0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 544px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-f7ytB .framer-nlcsqn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-f7ytB .framer-1nmjqcn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-f7ytB .framer-1ageat8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-f7ytB .framer-e7lee1 { flex: none; height: 1px; overflow: hidden; position: relative; width: 48px; }",
    ".framer-f7ytB .framer-1he1pi6, .framer-f7ytB .framer-pa243r, .framer-f7ytB .framer-1bvbsbg { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", // H1/문단 텍스트 공통 스타일
    ".framer-f7ytB .framer-1di4muk-container { flex: none; height: auto; position: relative; width: auto; }", // 버튼 컨테이너
    ".framer-f7ytB .framer-1gzygwj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 0px 8px 24px; position: relative; width: 100%; }", // 리뷰 카드 레이아웃
    ".framer-f7ytB .framer-1msm81d { aspect-ratio: 4.916666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 118px; }", // 별점 SVG 비율 유지
    ".framer-f7ytB .framer-12pm0yl { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }", // 배경 레이어 전체 채움
    ".framer-f7ytB .framer-no36mp { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); }", // 배경 이미지 위치/성능 힌트
    ".framer-f7ytB .framer-vq3pn9 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }", // 어두운 오버레이 fill
    ".framer-f7ytB .framer-cu0tq9-container { flex: none; height: auto; left: 50%; position: absolute; top: 800px; width: 1200px; }", // 아래 섹션 컨테이너 위치
    ".framer-f7ytB .framer-10h2vy6 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 40px 40px 40px; position: absolute; width: 1200px; }",
    ".framer-f7ytB .framer-15lduhf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-f7ytB .framer-toww00 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }",
    ".framer-f7ytB .framer-1kmgo31-container { flex: none; height: auto; position: sticky; top: 32px; width: 1120px; z-index: 1; }",
    ...css2, // 다른 CSS 배열 확장
    ...css,
    '.framer-f7ytB[data-border="true"]::after, .framer-f7ytB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', // data-border=true 요소 보더 렌더
];
var FramerhXAdPDuWr = withCSS4(Component4, css9, "framer-f7ytB"); // 컴포넌트에 css9와 className 바인딩
var stdin_default6 = FramerhXAdPDuWr;
FramerhXAdPDuWr.displayName = "mainpage"; // React devtools에 표시될 이름
FramerhXAdPDuWr.defaultProps = {
    height: 3421, // 기본 높이
    width: 1200,  // 기본 너비
};
addFonts4(
    FramerhXAdPDuWr, // 폰트를 적용할 대상 컴포넌트
    [
        { // Inter 폰트 그룹 정의
            explicitInter: true, // Inter 폰트를 명시적으로 사용할지 여부
            fonts: [
                {
                    cssFamilyName: "Inter", // CSS에서 사용되는 폰트 패밀리명
                    source: "framer", // 폰트 소스(프레이머에서 관리)
                    style: "normal", // 기본 스타일(normal)
                    uiFamilyName: "Inter", // 에디터상 표시 이름
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", // 지원하는 유니코드 영역
                    url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", // 폰트 파일 URL
                    weight: "400", // 두께(보통)
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                    url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2",
                    weight: "700",
                },
                {
                    cssFamilyName: "Inter",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
                    weight: "700",
                },
            ],
        },
        ...PrimaryFonts, // 주요 세컨더리 폰트 목록을 확장
        ...SectionsTestimonialsFonts, // 섹션별 특화 폰트 확장
        ...CardsCoachingPlanFonts, // 카드/코칭 등 특화 폰트
        ...getFontsFromSharedStyle4(fonts2), // shared 스타일 기반 폰트 연결
        ...getFontsFromSharedStyle4(fonts), // shared 스타일 기반 폰트 연결
    ],
    {
        supportsExplicitInterCodegen: true, // Inter 폰트 최적화 코드 자동 생성 기능 지원
    },
);

// virtual:mainpage
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = []; // 사용 가능한 locale 목록(현재 비어 있음)
var defaultResponsiveVariants = {}; // 반응형 variant 매핑 기본값
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
    return (
        <ContextProviders
            routes={routes} // 라우트 설정 주입
            framerSiteId={
                "3759d569955c51a9b80f5c98b643a1993e0a03ee7b7b017caee5d6624b0e79fe"
            } // 이 Framer 사이트 ID
            locale={locale}
            locales={locales}
        >
            {jsx(stdin_default6, {
                ...rest, // 나머지 props를 mainpage 컴포넌트로 전달
            })}
        </ContextProviders>
    );
}
/**
 * @type {import("unframer").UnframerBreakpoint}
 * 반응형 브레이크포인트에 대한 타입(프레이머 전용)
 */

/**
 * @typedef VariantsMap
 * 반응형 브레이크포인트 별로 variant를 매핑하는 타입. 반드시 'base' 키 포함.
 * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }
 */

/**
 * 모든 브레이크포인트에서 MainpageFramerComponent를 variant 맵과 함께 렌더링.
 * breakpoint에 따라 variant prop이 결정됨.
 * @function
 * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props
 * @returns {any}
 */
ComponentWithRoot.Responsive = ({ locale = "", ...rest }) => {
    return (
        <ContextProviders
            routes={routes}
            framerSiteId={
                "3759d569955c51a9b80f5c98b643a1993e0a03ee7b7b017caee5d6624b0e79fe"
            }
            locale={locale}
            locales={locales}
        >
            <WithFramerBreakpoints
                Component={stdin_default6} // mainpage 컴포넌트
                variants={defaultResponsiveVariants} // breakpoint별 variant 매핑
                {...rest}
            />
        </ContextProviders>
    );
};
Object.assign(ComponentWithRoot, stdin_default6); // static 속성 복사
var mainpage_default = ComponentWithRoot;
export { mainpage_default as default }; // default export