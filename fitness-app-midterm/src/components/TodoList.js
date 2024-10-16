import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'
import { FaDumbbell } from "react-icons/fa6";

const TodoList = (props) => {
    const {todos} = useTodoContext()
    const {category} = props
    var renderedContent = todos.map((todo)=>{
        return(<TodoItem key={todo.id} todo={todo} />)
    })

    if (category != 'All') {
        const filteredList = todos.filter((todo) => todo.category == category)
        renderedContent = filteredList.map((todo)=>{
            return(<TodoItem key={todo.id} todo={todo} />)
        })
    }

    return( <div className='m-5 p-5 bg-zinc-700 rounded-lg'>
        {renderedContent}
        </div>
    )
}

export default TodoList