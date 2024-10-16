import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoEdit = (props) => {
    const {todo, onSubmit} = props
    const [activity, setActivity] = useState(todo.activity)
    const [weight, setWeight] = useState(todo.weight)
    const [sets, setSets] = useState(todo.sets)
    const {editTodoById} = useTodoContext()

    const handleChange = (event) => {
        const attribute = event.target.name
        const value = event.target.value
        if(attribute == 'activity') {
            setActivity(value)
        }
        else if(attribute == 'weight') {
            setWeight(value)
        }
        else if(attribute == 'sets') {
            setSets(value)
        }
        
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        editTodoById(todo.id, todo.category, activity, weight, sets)
        onSubmit()
    }

    return (
    <form className='flex flex-col m-3 text-white text-sm' onSubmit={handleSubmit}>
        <div>
            <label>Activity: </label>
            <input className='p-1 m-1 w-24 rounded-lg bg-zinc-700' name='activity' onChange={handleChange} value={activity} />
        </div>
        <div>
            <label>Weight: </label>
            <input className='p-1 m-1 w-12 rounded-lg bg-zinc-700' name='weight' onChange={handleChange} value={weight}/>
        </div>
        <div>
            <label>Sets: </label>
            <input className='p-1 m-1 w-12 rounded-lg bg-zinc-700' name='sets' onChange={handleChange} value={sets}/>
        </div>
        <button className='p-1 m-1 bg-red-400 rounded-lg text-sm'>Update</button>
    </form>
    )
}

export default TodoEdit