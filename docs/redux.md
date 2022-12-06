# 리덕스의 탄생 배경

- 예시 코드
- 끝없이 반복되는 컴포넌트로 props를 통해 전달하는 경우 코드가 매우 복잡해진다.
- `npm i redux react-redux`
- Provider
  - store 를 연동하기 위한 컴포넌트
- useSelector
  - 어떤 상태 값을 사용할지 선택
  - 함수를 인자로 받는다.
- useDispatch
  - 상태 값을 변경할때 사용
- connect
  - HOC(Higher Order Component)패턴
  - 클래스형 컴포넌트에서 컴포넌트를 재사용할 때 유용한 패턴
  - 컴포넌트를 특정 함수로 감싸서 특정 값 또는 함수를 props로 받아와서 사용 할 수 있게 해주는 패턴
  - Hook을 사용하는 지금은 필요 없음
