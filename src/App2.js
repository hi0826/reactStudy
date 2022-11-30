import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux';
// createStore 대신 configureStore 사용
import {
  Provide,
  useSelector,
  useDispatch,
  connect,
  Provider,
} from 'react-redux';
// 컴포넌트, 어떤 상태값을 쓸지 선택, 상태값 변경시에 사용, 재사용성을 위할때 필요
// 리덕스를 사용하면 부모 컴포넌트는 리렌더링되지않고 state가 변경된 컴포넌트만 리렌더링된다.
// 현재 state, 어떻게 바꿀 것인지 action
function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

export default function App2() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  console.log('3');
  // useSelector는 함수를 인자로 방므
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        values="plus"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      />
    </div>
  );
}
