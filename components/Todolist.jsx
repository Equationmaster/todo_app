import { Todocard} from "./Todocard"
export function Todolist(props){
    const { todos, selectedTab } = props
    //const tab = 'All'
    const filteredList = selectedTab == 'All'?
    todos:
    selectedTab === 'Closed'?
    todos.filter(val => val.complete):
    todos.filter(val => !val.complete)
    return(
        <>
            {filteredList.map((todo,todoIndex) =>{
                return(
                    <Todocard 
                    key = {todoIndex}
                    todoIndex = {todos.findIndex(val => val.input == todo.input)}
                    {... props}
                    todo = {todo}/>
                )
            })}
        </>
    )
}