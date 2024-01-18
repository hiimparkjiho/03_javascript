// todo list
// <input> 태그에 입력한 값을 추가 버튼을 누르면 출력
// 체크 박스를 누르면 출력하고 있는 문구에 줄 긋기
// 삭제 버튼을 누르면 출력하고 있는 값 삭제
import React, { useState } from "react";
import "./todo.css";

// list를 출력하기 위한 컴포넌트
const Item = (props) => {

  // { todo, setTodoList, todoList }
  // check 되었을 경우 취소선 처리
  const [check, setCheck] = useState(false);

  const style = {
    textDecoration: check ? 'line-through' : "none",
  }

  const changeBox = () => {
    setCheck(!check);
  }

  const removeTodo = () => {
    const result = props.todoList.filter(item => item !== props.todo);
    props.setTodoList(result);
  }

  return (
    <div>
      <input type="checkBox" onChange={changeBox} />
      <label style={style}>{props.todo}</label>
      <button onClick={removeTodo}>삭제하기</button>
    </div>
  );
}

// tolist를 화면에 출력하기 위한 컨테이너
const Container = (props) => {
//{ todoList, setTodoList }

  console.log(props)
 
  return (
    props.todoList.map((current, index) => {
      return <Item todo={current} key={index} setTodoList={props.setTodoList} todoList={props.todoList}/>
    })
  );
}

const InputContainer = (props) => {
  const [input, setInput] = useState("");
  

  const addList = () => {
    props.setTodo([...props.todos, input])
  }

  const changInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={changInput} />
      <button onClick={addList}> 추가 </button>
    </>
  );
}
const ChangeMode = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const change = () => {
    props.setDarkMode(!props.darkMode);
  }

  return(
    <>
      <button onClick={change}>
        {darkMode ? "라이트 모드" : "다크 모드"}
      </button>
    </>
  )
}


// 애플리케이션의 전체 화면
function App() {
  const [todoList, setTodoList] = useState(["안녕", "안녕2"]);
  const [darkMode, setDarkMode] = useState(false);

  const color = darkMode ? "white" : "black";
  const backgroundColor = darkMode ? "black" : "white";

  return (
    <div className="container" style={{ backgroundColor, color }}>
      <h1>todo list</h1>
      <Container todoList={todoList} />
      <InputContainer setTodo={setTodoList} />
      <ChangeMode setDarkMode={setDarkMode} darkMode={darkMode}></ChangeMode>
    </div>
  );
}

export default App;