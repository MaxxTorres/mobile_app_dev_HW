import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = (props) => {
    const {createTodo} = useTodoContext()
    const {category} = props
    const [activity, setActivity] = useState('')

    const handleChange = (event) => {
        setActivity(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createTodo(category, activity, '', '')
    }

    return (
        <form className='m-5 text-white' onSubmit={handleSubmit}>
            <label>Activity: </label>
            <input className='p-1 m-1 rounded-lg bg-zinc-600' type="text" onChange={handleChange} value={activity} />
            <button className='p-1 m-1 bg-red-400 rounded-lg text-sm'>Add</button>
        </form>
    )
}

export default TodoCreate