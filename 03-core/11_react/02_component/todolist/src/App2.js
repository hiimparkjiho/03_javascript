import {useState} from 'react';

const Item = ({todo, todoList})=>{
    // check 되었을 경우 취소선 처리
    const [check, setCheck] = useState(false);

    const style = {
        textDecoration : check ? 'line-through' : 'none'
    }

    const changeBox = ()=>{
        setCheck(!check);
    }

    const removeTodo = () => {
        setTodoList(r => con)
    }

    return(
        <div>
            <input type='checkbox' onChange={changeBox}/>
            <label style={style}>{todo}</label>
            <button onClick={()=>{console.log("클릭")}}>삭제하기</button>
        </div>
    )
}

const Container = ({todoList, setTodoList})=>{
    return(
       todoList.map((current, index) => {
        return <Item todo={current} key={index} setTodoList={setTodoList}/>
       })
    );
}

const InputContainer = () => {
    const [input, setInput] = useState("");

    const changeInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <input type='text' value={input} onChange={changeInput} />
            <button onClick={console.log("d")}>추가</button>
        </>
    )
}

function App(){
    const [todoList, setTodoList] = useState("안녕");
}