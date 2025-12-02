// CSS 파일에서 스타일을 가져옵니다. (아마도 framer motion 관련 스타일이 포함되어 있을 수 있습니다.)
import './framer/styles.css'

// './framer/mainpage' 경로에서 MainpageFramerComponent라는 이름의 컴포넌트를 가져옵니다.
// 이 이름으로 보아 Framer Motion 또는 Framer X로 생성된 컴포넌트일 가능성이 높습니다.
import MainpageFramerComponent from './framer/mainpage'

// React 함수형 컴포넌트인 App을 정의하고 기본 내보내기(export default) 합니다.
export default function App() {
  // 컴포넌트는 JSX를 반환합니다.
  return (
    // 최상위 div 요소입니다.
    // Tailwind CSS 클래스를 사용하여 스타일을 적용합니다:
    // - 'flex flex-col': 내용을 수직으로 배열하는 flex 컨테이너
    // - 'items-center': 교차축(여기서는 수평) 중앙 정렬
    // - 'gap-3': 자식 요소들 사이에 3 단위의 간격 추가
    // - 'bg-[rgb(255,_255,_255)]': 배경색을 흰색(rgb(255, 255, 255))으로 설정
    <div className='flex flex-col items-center gap-3 bg-[rgb(255,_255,_255)]'>
      {/* 가져온 MainpageFramerComponent의 'Responsive' 속성/서브 컴포넌트를 렌더링합니다.
          이것은 MainpageFramerComponent가 여러 버전(예: 데스크톱, 모바일)을 가지고 있으며,
          현재 반응형 버전을 사용하고 있음을 나타냅니다. */}
      <MainpageFramerComponent.Responsive/>
    </div>
  );
};