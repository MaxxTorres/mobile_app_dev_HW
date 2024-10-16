import axios from "axios"
import {createContext, useState, useCallback} from 'react'
const TodosContext = createContext()

function Provider({children}) {
    const [todos, setTodos] = useState([])
    
    //todos[
    // {   
    //     id:
    //     title:
    //     status: 'on-time' | 'late' | 'blocked'
    // }
    //]

    // useCallnback memoizes fetchTodos one copy in memory
    const fetchTodos = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/todos')
        setTodos(response.data)
    }, [])
    const createTodo = async (category, activity, weight, sets) => {
        const response = await axios.post('http://localhost:3001/todos', {category, activity, weight, sets})
        const updatedTodos = [...todos, response.data]
        setTodos(updatedTodos)
    }
    const deleteTodoById = async(id) => {
        await axios.delete(`http://localhost:3001/todos/${id}`)
        const updatedTodos = todos.filter((todo)=>{
            return todo.id !== id
        })
        setTodos(updatedTodos)
    }
    const editTodoById = async (id, category, newTitle, newWeight, newSets) => {
        const response = await axios.put(`http://localhost:3001/todos/${id}`, {category, activity: newTitle,
            weight: newWeight, sets: newSets})
        const updatedTodos = todos.map((todo)=>{
            if (todo.id === id){
                return {...response.data}
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const contextValues = {
        todos,
        fetchTodos,
        createTodo,
        editTodoById,
        deleteTodoById
    }


    return(
        <TodosContext.Provider value={contextValues}>{children}</TodosContext.Provider>
    )
}

export {Provider}
export default TodosContext