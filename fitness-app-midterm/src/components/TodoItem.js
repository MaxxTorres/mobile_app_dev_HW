import {useState} from 'react'
import cx from 'classnames'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
    const {todo} = props
    const [showEdit, setShowEdit] = useState(false)
    const [showDone, setShowDone] = useState(false)
    const {deleteTodoById} = useTodoContext()

    const handleDelete = () => {
        deleteTodoById(todo.id)
    }
    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }
    const handleDone = () => {
        setShowDone(!showDone)
    }
    const handleSubmit = () => {
        // no need onEdit, 
        setShowEdit(false)
    }

    let content = <div> 
        <h3 className='text-lg'>{todo.activity}</h3>
        <div className='m-2'>
            Weight: <span className="inline-block bg-zinc-800 p-1 pt-0.5 pb-0.5 min-w-4 rounded-md">{todo.weight}</span> Sets: <span className="inline-block bg-zinc-800 p-1 pt-0.5 pb-0.5 min-w-4 rounded-md">{todo.sets}</span>
        </div>
    </div>
    if (showEdit) {
        content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
    }
    let itemStyle = 'border-red-400 m-2 p-2 border-4 bg-zinc-600 rounded-lg text-white'
    if (showDone) {
        itemStyle = 'border-lime-300 m-2 p-2 border-4 bg-zinc-600 rounded-lg text-white'
    }

    return (
    <div className={itemStyle}>
        <div>{content}</div>
        <button className='m-3 p-1 bg-lime-300 text-zinc-800 text-xs rounded-md' onClick={handleDone}>Done</button>
        <button className='m-3 p-1 bg-white text-zinc-800 text-xs rounded-md' onClick={handleShowEdit}>Edit</button>
        <button className='m-3 p-1 bg-white text-xs rounded-md text-black' onClick={handleDelete}>Delete</button>
    </div>
    )
}


export default TodoItem