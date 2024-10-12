export function Todocard(props){
    const{ todo, handleDeletetodo, todoIndex, handleEdittodo } = props;

    return(
        <div className = "card todo-item">
            <p>{todo.input}</p>
            <div className = "todo-button">
                <button onClick={() =>{
                    handleEdittodo(todoIndex);
                }} disabled ={todo.complete} >
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeletetodo(todoIndex);
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}