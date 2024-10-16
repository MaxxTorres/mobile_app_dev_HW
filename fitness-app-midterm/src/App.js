import {useEffect, useContext} from 'react'
import {useState} from 'react'
import TodosContext from './context/Todos'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoDropdown from './components/TodoDropdown'
import { FaDumbbell } from "react-icons/fa6";


// Unfinished: const CATEGORIES = ['All', 'Push Day', 'Pull Day', 'Leg Day']
const CATEGORIES = ['Push Day', 'Pull Day', 'Leg Day']

const App = () => {
    document.body.style.backgroundColor = '#333333';

    const {fetchTodos} = useContext(TodosContext)
    useEffect(()=>{fetchTodos()}, [fetchTodos])

    const [category, setCategory] = useState(CATEGORIES[0])
    const handleChange = (category) => {
        setCategory(category)
    }

    return (
    <div>
        <div className='flex flex-row gap-3 m-5 mb-0'>
            <h1 className='w-50 text-3xl font-semibold text-white'>Exercise List</h1>
            <div className='w-10 text-white text-4xl'><FaDumbbell/></div>
        </div>
        <TodoDropdown categories={CATEGORIES} category={category} onChange={handleChange} />
        <TodoCreate category={category}/>
        <TodoList category={category}/>
    </div>
    )

}

export default App