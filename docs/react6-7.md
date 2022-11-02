## 리액트 6장

- props 를 통해서 function도 전달 가능, 이벤트로 사용할 수 있다.
- event.target을 통해서 event 를 발생시키는 태그에 접근할 수 있음

## 리액트 6장

- component
  - 입력은 prop
  - prop을 처리해서 return 하여 UI를 변경한다.
  - state 도 또하나의 입력 값
  - prop과 state의 차이
    - prop 사용하는 외부자의 데이터
    - state 만드는 내부자의 데이터
- mode 변수를 사용해서 update되더라도 app component에는 변화가 없어 다시 렌더링되지 않는다.
- 일반 변수를 상태로 업그레이드 시킨다.
- useState의 인자는 그 state의 초기 값
  - state의 값은 0 index 의 값으로 읽음
  - state의 변경은 1 index의 값으로 바꾼다.
- state 가 변경되면 app component를 다시 실행시켜준다.
- 태그의 속성은 문자열로 지정됨
- prop과 state를 통해 Component를 다시 실행시킨다!
