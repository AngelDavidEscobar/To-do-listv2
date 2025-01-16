import './CreateTodoButton.css'

function CreateTodoButton(){
    return (
        <button className='CreateTodoButton'
        onClick={
            () => console.log('hola')
        }
        >+</button>
    )
}

export { CreateTodoButton }