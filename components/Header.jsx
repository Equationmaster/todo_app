export function Header(props){
    const { todos } = props
    const len = todos.length
    const isplural = len != 1
    const isitornot = isplural? 'tasks':'task'

    return(
        <header>
            <h1 className = "text-gradient">
            You have {len} {isitornot} open.</h1>
        </header>
    )
}