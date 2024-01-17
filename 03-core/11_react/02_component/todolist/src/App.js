// todo list
// <input> 태그에 입력한 값을 추가 버튼을 누르면 출력
// 체크 박스를 누르면 출력하고 있는 문구에 줄 긋기
// 삭제 버튼을 누르면 출력하고 있는 값 삭제
import React from 'react';

const { useState } = React;

function App() {
  const [todo, setTodo] = useState([
    { id: 1, con: "리액트 공부", checked: false },
    { id: 2, con: "todo 리스트 작성", checked: false }
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeHandler = e => setInputText(e.target.value);

  const onClickHandler = () => {
    const changeTodo = todo.concat({
      id: nextId,
      con: inputText,
      checked: false
    });
    setNextId(nextId + 1);
    setTodo(changeTodo);
    setInputText("");
  }

  const Check = id => {
    const updatedTodo = todo.map(con =>
      con.id === id ? { ...con, checked: !con.checked } : con
    );
    setTodo(updatedTodo);
  }

  const onRemove = id => {
    const changeTodo = todo.filter(con => con.id !== id);
    setTodo(changeTodo);
  }

  const todoList = todo.map(con => {
    return (
      <div class="listClass">
      <li key={con.id} style={{ textDecoration: con.checked ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={con.checked}
          onChange={() => Check(con.id)}
        />
        {con.con}
        <button onClick={() => onRemove(con.id)}>삭제</button>
      </li>
      </div>
    );
  });

  return (
    <>
    </>
  );
}

export default App;