// @ts-nocheck
/* eslint-disable */
/* 이 파일은 Unframer가 Framer 프로젝트 3759d569955c51a9 "Perform (copy)"용으로 자동 생성한 코드입니다. 수동 수정은 권장되지 않습니다. */
"use client";


/**
 * Locale 타입 정의 (예: "ko", "en-US" 등의 문자열 로케일)
 * @typedef Locale
 * string
 */


/**
 * 이 컴포넌트가 받을 수 있는 Props 형태 정의
 * - children: 하위에 렌더링할 React 노드
 * - locale: 현재 로케일
 * - style, className, id, ref: 일반적인 React DOM 속성
 * - width, height, layoutId: Framer/Unframer 레이아웃용 속성
 * @typedef {{
 * children?: React.ReactNode
 * locale?: Locale
 * style?: React.CSSProperties
 * className?: string
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
}} Props


 */
import { Calcom } from "./chunks/chunk-N54VTD32.js";      // Cal.com 예약 위젯 코드 컴포넌트
import { GoogleMaps } from "./chunks/chunk-WJ4M4KHJ.js";  // Google Maps 위치 표시 컴포넌트
import { Slideshow } from "./chunks/chunk-FET5STFD.js";   // 이미지 슬라이드쇼 컴포넌트
import { stdin_default } from "./chunks/chunk-U6ARRNOW.js";// 상단 네비게이션/헤더 컴포넌트
import { routes } from "./chunks/chunk-RX5K52XN.js";      // 라우트/페이지 메타 정보


// virtual:mu-jung – Unframer가 내부에서 사용하는 가상 모듈 이름
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";


// /:https://framerusercontent.com/modules/bc7p9l0ltE4nALxMWO3Z/ZwqnlEN7vO8QRZXQK1rx/nd5OqacND.js
// 위 URL의 번들 모듈이 이 로컬 파일로 변환된 것
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
    addFonts,                      // 하위 컴포넌트들의 폰트 정보를 수집/등록
    ComponentViewportProvider,     // 이 컴포넌트 기준 뷰포트 정보 컨텍스트 제공
    cx,                            // className을 조건부로 합치는 유틸 함수
    getFonts,                      // 특정 컴포넌트에서 사용하는 폰트 메타데이터 추출
    Image,                         // Framer용 이미지 컴포넌트
    RichText,                      // 캔버스 리치 텍스트 렌더러
    SmartComponentScopedContainer, // 특정 캔버스 노드를 스코프 단위로 감싸는 컨테이너
    useComponentViewport,          // 현재 컴포넌트 뷰포트 정보 조회 훅
    useLocaleInfo,                 // 로케일(언어) 상태/세터 훅
    useVariantState,               // Framer variant + 제스처 상태 관리 훅
    withCSS,                       // 이 컴포넌트 전용 CSS를 스코프에 주입하는 HOC
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer"; // 레이아웃/애니메이션 그룹 도구
import * as React from "react";
import { useRef } from "react";

// 각 서브 컴포넌트가 사용하는 폰트 정보 추출
var Navigation3Fonts = getFonts(stdin_default);
var SlideshowFonts = getFonts(Slideshow);
var GoogleMapsFonts = getFonts(GoogleMaps);
var CalComFonts = getFonts(Calcom);

// 이 컴포넌트 전용 CSS 스코프 해시
var serializationHash = "framer-HEYre";

// Framer variant 키 → 실제 CSS 클래스 이름 매핑
var variantClassNames = {
    ovDc8hgZE: "framer-v-157hl8m",
};

// 공통 애니메이션 트랜지션 설정
var transition1 = {
    bounce: 0.2,
    delay: 0,
    duration: 0.4,
    type: "spring",
};

// transformTemplate: 항상 X축 중앙 정렬 + 나머지 transform 결합
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;

// Transition: MotionConfigContext를 감싸서 하위 motion 요소들이 동일한 transition 사용
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

// Variants: children 묶음 전체에 variants 애니메이션을 적용하기 위한 래퍼
var Variants = motion.create(React.Fragment);

// getProps: height/id/width는 떼어내고 나머지 props만 반환(레이아웃용 값 분리)
var getProps = ({ height, id, width, ...props }) => {
    return {
        ...props,
    };
};

// createLayoutDependency: variants와 props.layoutDependency를 합쳐 레이아웃 key 생성
var createLayoutDependency = (props, variants) => {
    if (props.layoutDependency)
        return variants.join("-") + props.layoutDependency;
    return variants.join("-");
};

// 메인 컴포넌트 정의 (Framer가 이 페이지를 렌더링할 때 사용하는 엔트리)
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref) {
    const fallbackRef = useRef(null);          // 외부에서 ref를 안 넘겨줬을 때 사용할 내부 ref
    const refBinding = ref ?? fallbackRef;
    const defaultLayoutId = React.useId();     // layoutId 미지정 시 사용할 기본 ID
    const { activeLocale, setLocale } = useLocaleInfo(); // 현재 로케일 정보/변경 함수
    const componentViewport = useComponentViewport();    // 이 컴포넌트 기준 뷰포트 정보
    const { style, className, layoutId, variant, ...restProps } = getProps(props);

    // useVariantState: variant 상태 + hover/pressed/loading 등 제스처 상태 관리
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
        defaultVariant: "ovDc8hgZE",
        ref: refBinding,
        variant,
        variantClassNames,
    });

    const layoutDependency = createLayoutDependency(props, variants); // 레이아웃 애니메이션 key
    const sharedStyleClassNames = [];                                 // 공통 스타일 클래스(현재 없음)
    const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames); // 이 컴포넌트 스코프 클래스

    return (
        <LayoutGroup id={layoutId ?? defaultLayoutId}>
            <Variants animate={variants} initial={false}>
                <Transition value={transition1}>
                    <motion.div
                        {...restProps}
                        {...gestureHandlers}
                        className={cx(
                            scopingClassNames,
                            "framer-157hl8m",
                            className,
                            classNames,
                        )}
                        data-framer-name={"Variant 1"}
                        layoutDependency={layoutDependency}
                        layoutId={"ovDc8hgZE"}
                        ref={refBinding}
                        style={{
                            ...style,
                        }}
                    >
                        {/* 상단 네비게이션/헤더 영역 */}
                        <ComponentViewportProvider
                            height={64}
                            width={componentViewport?.width || "100vw"}
                            y={(componentViewport?.y || 0) + 0}
                        >
                            <SmartComponentScopedContainer
                                className={"framer-ljbu5w-container"}
                                layoutDependency={layoutDependency}
                                layoutId={"BLdsO1r3j-container"}
                                nodeId={"BLdsO1r3j"}              // 헤더 컴포넌트 노드 ID
                                rendersWithMotion={true}
                                scopeId={"nd5OqacND"}
                                transformTemplate={transformTemplate1}
                            >
                                {_jsx(stdin_default, {
                                    height: "100%",
                                    id: "BLdsO1r3j",
                                    layoutId: "BLdsO1r3j",
                                    style: {
                                        width: "100%",
                                    },
                                    width: "100%",
                                })}
                            </SmartComponentScopedContainer>
                        </ComponentViewportProvider>

                        {/* 메인 Features 섹션 래퍼 */}
                        <motion.div
                            className={"framer-zxel0z"}
                            data-framer-name={"Features"}
                            layoutDependency={layoutDependency}
                            layoutId={"QhnKiFscH"}
                            style={{
                                backgroundColor: "rgb(255, 255, 255)",
                            }}
                            transformTemplate={transformTemplate1}
                        >
                            <motion.div
                                className={"framer-1yv0sao"}
                                layoutDependency={layoutDependency}
                                layoutId={"rCaSLUkx9"}
                            >
                                {/* 왼쪽 텍스트 영역: 제목 + 설명 */}
                                <motion.div
                                    className={"framer-ov16g1"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"IZdTFYgec"}
                                >
                                    {/* 섹션 제목: "정원산책" */}
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-1ii2pp0"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"RGPZpzyM3"}
                                        style={{
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 700',
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOekF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv01' on, 'cv09' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "32px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 700)',
                                                    "--framer-letter-spacing": "-0.03em",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "left",
                                                }}
                                            >
                                                {"정원산책"}
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>

                                    {/* 정원산책 소개 본문 텍스트 */}
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-1wlfyiz"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"DwSJkLbGi"}
                                        style={{
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 500',
                                            "--extracted-r6o4lv": "rgb(153, 153, 153)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "29px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 500)',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-r6o4lv, rgb(153, 153, 153))",
                                                }}
                                            >
                                                {
                                                    "『정원산책』은 찾아주시는 분들이 정원을 산책하듯 즐겨주셨으면 하는 마음에서 짓게 되었습니다. 이름에 걸맞게 5000평 부지의 넓은 정원을 거닐며 계절을 담은 음료와 디저트 그리고 자연이 주는 고요함을 한 공간에서 즐길 수 있는 명소입니다."
                                                }
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>
                                </motion.div>
                                <motion.div
                                    className={"framer-dhgsob"} // 슬라이드쇼 카드 전체 컨테이너
                                    data-framer-name={"Placeholder"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"oSh93stTD"}
                                    style={{
                                        backgroundColor: "rgb(255, 255, 255)", // 흰색 배경
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                    }}
                                >
                                    <ComponentViewportProvider> // 이 카드 영역용 뷰포트 컨텍스트
                                        <SmartComponentScopedContainer
                                            className={"framer-13lpumn-container"}
                                            isAuthoredByUser={true} // 사용자가 작성한 외부 모듈
                                            isModuleExternal={true}
                                            layoutDependency={layoutDependency}
                                            layoutId={"kNZcJIOp3-container"}
                                            nodeId={"kNZcJIOp3"} // 캔버스 내 Slideshow 노드 ID
                                            rendersWithMotion={true}
                                            scopeId={"nd5OqacND"}
                                        >
                                            <Slideshow
                                                alignment={"center"} // 중앙 정렬
                                                arrowOptions={{
                                                    arrowFill: "rgba(0, 0, 0, 0.2)", // 화살표 배경색
                                                    arrowGap: 10,
                                                    arrowPadding: 20,
                                                    arrowPaddingBottom: 0,
                                                    arrowPaddingLeft: 0,
                                                    arrowPaddingRight: 0,
                                                    arrowPaddingTop: 0,
                                                    arrowPosition: "auto",
                                                    arrowRadius: 40,
                                                    arrowShouldFadeIn: false,
                                                    arrowShouldSpace: true,
                                                    arrowSize: 40,
                                                    showMouseControls: true, // 마우스로 슬라이드 제어
                                                }}
                                                autoPlayControl={true} // 자동 슬라이드 재생
                                                borderRadius={0}
                                                direction={"left"} // 왼쪽 방향 이동
                                                dragControl={false} // 드래그 이동 비활성화
                                                effectsOptions={{
                                                    effectsHover: true,
                                                    effectsOpacity: 1,
                                                    effectsPerspective: 1200,
                                                    effectsRotate: 0,
                                                    effectsScale: 1,
                                                    playOffscreen: false,
                                                }}
                                                fadeOptions={{
                                                    fadeAlpha: 0,
                                                    fadeContent: false,
                                                    fadeInset: 0,
                                                    fadeWidth: 25,
                                                    overflow: false,
                                                }}
                                                gap={10} // 슬라이드 간 간격
                                                height={"100%"}
                                                id={"kNZcJIOp3"}
                                                intervalControl={2.5} // 자동 전환 간격(초)
                                                itemAmount={1} // 한 번에 한 장씩 표시
                                                layoutId={"kNZcJIOp3"}
                                                padding={0}
                                                paddingBottom={0}
                                                paddingLeft={0}
                                                paddingPerSide={false}
                                                paddingRight={0}
                                                paddingTop={0}
                                                progressOptions={{
                                                    dotsActiveOpacity: 1,
                                                    dotsBackground: "rgba(0, 0, 0, 0.2)",
                                                    dotsBlur: 0,
                                                    dotsFill: "rgb(255, 255, 255)",
                                                    dotsGap: 10,
                                                    dotsInset: 10,
                                                    dotSize: 10,
                                                    dotsOpacity: 0.5,
                                                    dotsPadding: 10,
                                                    dotsRadius: 50,
                                                    showProgressDots: true, // 하단 점 인디케이터 표시
                                                }}
                                                slots={[
                                                    <Image
                                                        background={{
                                                            alt: "",
                                                            fit: "fill",
                                                            pixelHeight: 653,
                                                            pixelWidth: 884,
                                                            sizes: "400px",
                                                            src: "https://framerusercontent.com/images/Cd52L54g3meACbJN5owGIbpLvy8.jpg?width=884&height=653",
                                                            srcSet:
                                                                "https://framerusercontent.com/images/Cd52L54g3meACbJN5owGIbpLvy8.jpg?scale-down-to=512&width=884&height=653 512w,[https://framerusercontent.com/images/Cd52L54g3meACbJN5owGIbpLvy8.jpg?width=884&height=653](https://framerusercontent.com/images/Cd52L54g3meACbJN5owGIbpLvy8.jpg?width=884&height=653) 884w",
                                                        }}
                                                        className={"framer-1dqioxv"}
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"P4zJRzx78"}
                                                    />,
                                                    <Image
                                                        background={{
                                                            alt: "",
                                                            fit: "fill",
                                                            pixelHeight: 584,
                                                            pixelWidth: 881,
                                                            sizes: "400px",
                                                            src: "https://framerusercontent.com/images/aQA3nnWI4irSR9ETtDUbQD11ySc.jpg?width=881&height=584",
                                                            srcSet:
                                                                "https://framerusercontent.com/images/aQA3nnWI4irSR9ETtDUbQD11ySc.jpg?scale-down-to=512&width=881&height=584 512w,[https://framerusercontent.com/images/aQA3nnWI4irSR9ETtDUbQD11ySc.jpg?width=881&height=584](https://framerusercontent.com/images/aQA3nnWI4irSR9ETtDUbQD11ySc.jpg?width=881&height=584) 881w",
                                                        }}
                                                        className={"framer-1u2uv6h"}
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"UrtNcPg9F"}
                                                    />,
                                                    <Image
                                                        background={{
                                                            alt: "",
                                                            fit: "fill",
                                                            pixelHeight: 656,
                                                            pixelWidth: 878,
                                                            sizes: "400px",
                                                            src: "https://framerusercontent.com/images/5QHAuvQLaTsqk7Zn9UmFe2T9McI.jpg?width=878&height=656",
                                                            srcSet:
                                                                "https://framerusercontent.com/images/5QHAuvQLaTsqk7Zn9UmFe2T9McI.jpg?scale-down-to=512&width=878&height=656 512w,[https://framerusercontent.com/images/5QHAuvQLaTsqk7Zn9UmFe2T9McI.jpg?width=878&height=656](https://framerusercontent.com/images/5QHAuvQLaTsqk7Zn9UmFe2T9McI.jpg?width=878&height=656) 878w",
                                                        }}
                                                        className={"framer-7bcda5"}
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"wxnnhDhML"}
                                                    />,
                                                    <Image
                                                        background={{
                                                            alt: "",
                                                            fit: "fill",
                                                            pixelHeight: 582,
                                                            pixelWidth: 874,
                                                            sizes: "400px",
                                                            src: "https://framerusercontent.com/images/8JaSthfvRatpkMPLyeJB9ET8kJY.jpg?width=874&height=582",
                                                            srcSet:
                                                                "https://framerusercontent.com/images/8JaSthfvRatpkMPLyeJB9ET8kJY.jpg?scale-down-to=512&width=874&height=582 512w,[https://framerusercontent.com/images/8JaSthfvRatpkMPLyeJB9ET8kJY.jpg?width=874&height=582](https://framerusercontent.com/images/8JaSthfvRatpkMPLyeJB9ET8kJY.jpg?width=874&height=582) 874w",
                                                        }}
                                                        className={"framer-vwpztk"}
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"P40_2TBZ6"}
                                                    />,
                                                    <Image
                                                        background={{
                                                            alt: "",
                                                            fit: "fill",
                                                            pixelHeight: 503,
                                                            pixelWidth: 376,
                                                            sizes: "400px",
                                                            src: "https://framerusercontent.com/images/Vr9UHkQwAEeXk6EcUktrNDekIiU.jpg?width=376&height=503",
                                                        }}
                                                        className={"framer-137r0tg"}
                                                        layoutDependency={layoutDependency}
                                                        layoutId={"CPYesguYA"}
                                                    />,
                                                ]}
                                                startFrom={0}
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                                transitionControl={{
                                                    damping: 40,
                                                    delay: 0,
                                                    mass: 1,
                                                    stiffness: 200,
                                                    type: "spring",
                                                }}
                                                width={"100%"}
                                            />
                                        </SmartComponentScopedContainer>
                                    </ComponentViewportProvider>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className={"framer-eenhae"} // 지도/기본정보/예약 전체 래퍼
                                layoutDependency={layoutDependency}
                                layoutId={"W1ZJpUSd7"}
                            >
                                <motion.div
                                    className={"framer-zqwjf2"} // 지도 카드 컨테이너
                                    data-framer-name={"Placeholder"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"bJfkUY0S4"}
                                    style={{
                                        backgroundColor: "rgb(245, 245, 245)",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                    }}
                                >
                                    <ComponentViewportProvider>
                                        <SmartComponentScopedContainer
                                            className={"framer-179ozbz-container"}
                                            isAuthoredByUser={true}
                                            isModuleExternal={true}
                                            layoutDependency={layoutDependency}
                                            layoutId={"rD_B8TVE7-container"}
                                            nodeId={"rD_B8TVE7"} // GoogleMaps 노드 ID
                                            rendersWithMotion={true}
                                            scopeId={"nd5OqacND"}
                                        >
                                            <GoogleMaps
                                                borderRadius={0}
                                                bottomLeftRadius={0}
                                                bottomRightRadius={0}
                                                coordinates={"\uC815\uC6D0\uC0B0\uCC45"}
                                                height={"100%"}
                                                id={"rD_B8TVE7"}
                                                isMixedBorderRadius={false}
                                                layoutId={"rD_B8TVE7"}
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                                topLeftRadius={0}
                                                topRightRadius={0}
                                                width={"100%"}
                                                zoom={15}
                                            />
                                        </SmartComponentScopedContainer>
                                    </ComponentViewportProvider>
                                </motion.div>
                                <motion.div
                                    className={"framer-1ie87x4"} // 기본정보 텍스트 영역
                                    layoutDependency={layoutDependency}
                                    layoutId={"AXSkhgf8l"}
                                >
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-1svxb1b"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"EAYgYJV25"}
                                        style={{
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 700',
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOekF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv01' on, 'cv09' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "32px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 700)',
                                                    "--framer-letter-spacing": "-0.03em",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "left",
                                                }}
                                            >
                                                {"\uAE30\uBCF8\uC815\uBCF4"}
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-1vtuhgk"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"iMRRUyCbd"}
                                        style={{
                                            "--extracted-1iakedh": "rgb(153, 153, 153)",
                                            "--extracted-1qhja7k": '"opsz" 32, "wght" 500',
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 500',
                                            "--extracted-2gxw0f": "rgb(153, 153, 153)",
                                            "--extracted-l7dsdt": '"opsz" 32, "wght" 500',
                                            "--extracted-r6o4lv": "rgb(153, 153, 153)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "22px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 500)',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-r6o4lv, rgb(153, 153, 153))",
                                                }}
                                            >
                                                {
                                                    "\uC8FC\uC18C : \uC804\uBD81 \uBB34\uC8FC\uAD70 \uC548\uC131\uBA74 \uB355\uC720\uC0B0\uB85C 468-37 1\uCE35 "
                                                }
                                            </motion.p>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "22px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-1qhja7k, "opsz" 32, "wght" 500)',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-2gxw0f, rgb(153, 153, 153))",
                                                }}
                                            >
                                                {"\uC601\uC5C5 \uC2DC\uAC04 : 11:00 ~ 19:00 "}
                                            </motion.p>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "22px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-l7dsdt, "opsz" 32, "wght" 500)',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-1iakedh, rgb(153, 153, 153))",
                                                }}
                                            >
                                                {"\uC804\uD654\uBC88\uD638 : 0507-1312-2707"}
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className={"framer-1gfqett"}
                                layoutDependency={layoutDependency}
                                layoutId={"uBFi_4n_H"}
                            >
                                <motion.div
                                    className={"framer-1g4vzwi"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"BKXR2gP_C"}
                                >
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-rbxtwe"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"XVcSzvr04"}
                                        style={{
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 700',
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOekF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv01' on, 'cv09' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "32px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 700)',
                                                    "--framer-letter-spacing": "-0.03em",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "left",
                                                }}
                                            >
                                                {"\uC608\uC57D \uD558\uAE30"}
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>
                                    <RichText
                                        __fromCanvasComponent={true}
                                        className={"framer-rw5iis"}
                                        fonts={["Inter-Variable"]}
                                        layoutDependency={layoutDependency}
                                        layoutId={"WaKqCVyf0"}
                                        style={{
                                            "--extracted-2gg91v": '"opsz" 32, "wght" 500',
                                            "--extracted-r6o4lv": "rgb(153, 153, 153)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                        }}
                                        verticalAlignment={"top"}
                                        withExternalLayout={true}
                                    >
                                        <React.Fragment>
                                            <motion.p
                                                style={{
                                                    "--font-selector":
                                                        "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family":
                                                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                                    "--framer-font-open-type-features":
                                                        "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                    "--framer-font-size": "22px",
                                                    "--framer-font-variation-axes":
                                                        'var(--extracted-2gg91v, "opsz" 32, "wght" 500)',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color":
                                                        "var(--extracted-r6o4lv, rgb(153, 153, 153))",
                                                }}
                                            >
                                                {
                                                    "\uCE98\uB9B0\uB354\uB97C \uD074\uB9AD\uD558\uC138\uC694."
                                                }
                                            </motion.p>
                                        </React.Fragment>
                                    </RichText>
                                </motion.div>
                                <motion.div
                                    className={"framer-ip3rxu"}
                                    data-framer-name={"Placeholder"}
                                    layoutDependency={layoutDependency}
                                    layoutId={"f1ewq4Afw"}
                                    style={{
                                        backgroundColor: "rgb(245, 245, 245)",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                    }}
                                >
                                    <motion.div
                                        className={"framer-16n2iq3"}
                                        data-framer-name={"Placeholder"}
                                        layoutDependency={layoutDependency}
                                        layoutId={"b4c6L86Pc"}
                                        style={{
                                            backgroundColor: "rgb(245, 245, 245)",
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                        }}
                                    >
                                        <ComponentViewportProvider>
                                            <SmartComponentScopedContainer
                                                className={"framer-ck184c-container"}
                                                isAuthoredByUser={true}
                                                isModuleExternal={true}
                                                layoutDependency={layoutDependency}
                                                layoutId={"QC12zi4jy-container"}
                                                nodeId={"QC12zi4jy"}
                                                rendersWithMotion={true}
                                                scopeId={"nd5OqacND"}
                                            >
                                                <Calcom
                                                    darkTheme={"rgb(250, 250, 250)"}
                                                    eventLink={
                                                        "https://cal.com/framer-placeholder/default"
                                                    }
                                                    height={"100%"}
                                                    id={"QC12zi4jy"}
                                                    layout={"month_view"}
                                                    layoutId={"QC12zi4jy"}
                                                    lightTheme={"rgb(41, 41, 41)"}
                                                    showEventTypeDetails={true}
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                    }}
                                                    theme={"auto"}
                                                    width={"100%"}
                                                />
                                            </SmartComponentScopedContainer>
                                        </ComponentViewportProvider>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </Transition>
            </Variants>
        </LayoutGroup>
    );
});
var css = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-HEYre.framer-qrplyv, .framer-HEYre .framer-qrplyv { display: block; }",
	".framer-HEYre.framer-157hl8m { height: 1659px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }",
	".framer-HEYre .framer-ljbu5w-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: 100%; }",
	".framer-HEYre .framer-zxel0z { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 80px 20px 80px 20px; position: absolute; width: 100%; }",
	".framer-HEYre .framer-1yv0sao, .framer-HEYre .framer-1gfqett { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 100%; overflow: hidden; padding: 0px; position: relative; width: 960px; }",
	".framer-HEYre .framer-ov16g1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
	".framer-HEYre .framer-1ii2pp0, .framer-HEYre .framer-1svxb1b, .framer-HEYre .framer-rbxtwe { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 320px; word-break: break-word; word-wrap: break-word; }",
	".framer-HEYre .framer-1wlfyiz, .framer-HEYre .framer-1vtuhgk, .framer-HEYre .framer-rw5iis { --framer-text-wrap: balance; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: 320px; word-break: break-word; word-wrap: break-word; }",
	".framer-HEYre .framer-dhgsob, .framer-HEYre .framer-ip3rxu, .framer-HEYre .framer-16n2iq3 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 480px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
	".framer-HEYre .framer-13lpumn-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
	".framer-HEYre .framer-1dqioxv, .framer-HEYre .framer-1u2uv6h, .framer-HEYre .framer-7bcda5, .framer-HEYre .framer-vwpztk, .framer-HEYre .framer-137r0tg { height: 300px; position: relative; width: 400px; }",
	".framer-HEYre .framer-eenhae { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 100%; overflow: hidden; padding: 0px; position: relative; width: 960px; }",
	".framer-HEYre .framer-zqwjf2 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 475px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
	".framer-HEYre .framer-179ozbz-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: -10px; top: 0px; z-index: 1; }",
	".framer-HEYre .framer-1ie87x4, .framer-HEYre .framer-1g4vzwi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
	".framer-HEYre .framer-ck184c-container { flex: none; height: 480px; position: relative; width: 480px; }",
];
var Framernd5OqacND = withCSS(Component, css, "framer-HEYre"); // 컴포넌트에 CSS와 고유 클래스 적용
var stdin_default2 = Framernd5OqacND; // 내부적으로 사용할 별칭
Framernd5OqacND.displayName = "mu_jung"; // React DevTools 등에서 보이는 이름
Framernd5OqacND.defaultProps = {
    height: 1659, // 기본 높이
    width: 1200,  // 기본 너비
};
var variationAxes = [ // Inter Variable 폰트의 변형 축 정보
    {
        defaultValue: 14,
        maxValue: 32,
        minValue: 14,
        name: "Optical size",
        tag: "opsz",
    },
    {
        defaultValue: 400,
        maxValue: 900,
        minValue: 100,
        name: "Weight",
        tag: "wght",
    },
];
addFonts(
    Framernd5OqacND,
    [
        {
            explicitInter: true,
            fonts: [
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
                    url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
                    url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+1F00-1FFF",
                    url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange: "U+0370-03FF",
                    url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
                    url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
                    url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2",
                    variationAxes,
                    weight: "400",
                },
                {
                    cssFamilyName: "Inter Variable",
                    source: "framer",
                    style: "normal",
                    uiFamilyName: "Inter",
                    unicodeRange:
                        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
                    url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2",
                    variationAxes,
                    weight: "400",
                },
            ],
        },
        ...Navigation3Fonts, // 내비게이션에서 쓰는 폰트
        ...SlideshowFonts,   // 슬라이드쇼에서 쓰는 폰트
        ...GoogleMapsFonts,  // 지도에서 쓰는 폰트
        ...CalComFonts,      // 캘린더 예약에서 쓰는 폰트
    ],
    {
        supportsExplicitInterCodegen: true,
    },
);


// virtual:mu-jung
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = []; // 지원되는 로케일 목록(현재 없음)
var defaultResponsiveVariants = {};
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
    return (
        <ContextProviders
            routes={routes}
            framerSiteId={
                "3759d569955c51a9b80f5c98b643a1993e0a03ee7b7b017caee5d6624b0e79fe"
            } // 프레이머 프로젝트 ID
            locale={locale}
            locales={locales}
        >
            {jsx(stdin_default2, {
                ...rest,
            })}
        </ContextProviders>
    );
}
/**
 * @type {import("unframer").UnframerBreakpoint}
 * 반응형 브레이크포인트 타입
 */


/**
 * @typedef VariantsMap
 * 반응형 variant 매핑 타입(base 포함)
 * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }
 */


/**
 * 모든 브레이크포인트에 대해 MuJungFramerComponent를 렌더링하는 반응형 래퍼
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
                Component={stdin_default2}
                variants={defaultResponsiveVariants}
                {...rest}
            />
        </ContextProviders>
    );
};
Object.assign(ComponentWithRoot, stdin_default2); // 정적 속성 할당
var mu_jung_default = ComponentWithRoot;           // export default용 변수
export { mu_jung_default as default }; // 기본 익스포트
