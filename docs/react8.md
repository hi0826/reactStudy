# 8장

- 상태의 데이터가 primitive type 일 경우
  - string, number, boolean
- 상태의 데이터가 bom 객체라면
  - 처리 방법이 달라짐
  - 데이터를 복제 `{...value}`
  - newValue 를 변경
  - setValue(newValue)
  - 의 과정에서 리렌더링이 발생
