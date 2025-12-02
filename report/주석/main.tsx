// 프로젝트의 전역 스타일(Tailwind CSS 구성 포함)을 가져옵니다.
import './index.css'

// React 라이브러리 자체를 가져옵니다. (주로 JSX 사용을 위해 필요합니다.)
import React from 'react'

// DOM을 렌더링하는 데 필요한 ReactDOM 클라이언트 API를 가져옵니다.
import ReactDOM from 'react-dom/client'

// 애플리케이션의 최상위 컴포넌트인 App을 가져옵니다. (이전 분석에서 확인한 컴포넌트입니다.)
import App from './App'

// --- 애플리케이션 렌더링 로직 시작 ---

// ReactDOM.createRoot()를 사용하여 React 앱을 DOM에 마운트할 루트 요소를 만듭니다.
// - document.getElementById('root')! : HTML 문서 내에서 'id'가 'root'인 요소를 찾습니다.
//   - TypeScript 환경에서 ! 연산자(Non-null assertion operator)는 해당 요소가 항상 존재함을 보장함을 개발자가 명시하는 것입니다.
ReactDOM.createRoot(document.getElementById('root')!).render(
    // <App /> 컴포넌트를 렌더링합니다.
    // React.StrictMode가 기본적으로 적용되어 있지 않으나, 실제 React 개발에서는 보통 <React.StrictMode>로 <App />을 감싸서 
    // 잠재적인 문제를 조기에 감지하도록 권장됩니다.
    <App />
)