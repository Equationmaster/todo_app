import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Header } from "../components/Header"
import { Todolist }from "../components/Todolist"
import {Tabs} from "../components/Tabs"
import { TodoInput } from "../components/Todoinput"

function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState(
    []
  )
  const [selectedTab,setSelectedTab] = useState('All')
  function handleAddtodo(newTodo){
    const newTodoList = [...todos,{input :newTodo,complete:false}]
    setTodos(newTodoList);
    handleData(newTodoList)
  }
  function handleEdittodo(index){
    // /update /edit /modify
    let newTodoList = [... todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleData(newTodoList)
  }
  function handleDeletetodo(index){
    let newTodoList = todos.filter((val,valIndex) =>{
      return valIndex !== index;
    })
    setTodos(newTodoList);
    handleData(newTodoList)
  }
  function handleData(currTodos) {
    localStorage.selectItem('todo-app', JSON.stringify({todos: currTodos}))
  }
  useEffect(()=>{
    if(!localStorage){return}
    let db = []
    if(localStorage.getItem['todo-app']){
      db = JSON.parse(localStorage.getItem['todo-app'])
      setTodos(db,todos)
    }
  },[])


  return (
    <>
      <Header todos = {todos}/>
      <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos = {todos}/>
      <Todolist handleEdittodo = {handleEdittodo} handleDeletetodo = {handleDeletetodo} selectedTab = {selectedTab} todos = {todos}/>
      <TodoInput handleAddtodo = {handleAddtodo} />
    </>
  )
}

export default App
