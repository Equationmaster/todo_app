import { useState } from "react";
export function TodoInput(props){
    const{ handleAddtodo } = props;
    const[inputValue,setInputValue] = useState('');
    return(
        <div className="input-container">
            <input value = {inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            placeholder="ADD TASK"/>
            <button onClick={() => {
                if(!inputValue){return};
                handleAddtodo(inputValue);
                setInputValue('');
            }}>
            <i class="fa-solid fa-square-plus"></i>  
            </button>
        </div>
    )
} 