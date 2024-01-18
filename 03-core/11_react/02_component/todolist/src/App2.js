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
      checked: false // 기본적으로 체크되지 않은 상태로 추가
    });
    setNextId(nextId + 1);
    setTodo(changeTodo);
    setInputText("");
  }

  const onToggleCheck = id => {
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
      <li key={con.id} style={{ textDecoration: con.checked ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={con.checked}
          onChange={() => onToggleCheck(con.id)}
        />
        {con.con}
        <button onClick={() => onRemove(con.id)}>삭제</button>
      </li>
    );
  });

  return (
    <>
      <input value={inputText} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>추가</button>
      <ul>
        {todoList}
      </ul>
    </>
  );
}

export default App;