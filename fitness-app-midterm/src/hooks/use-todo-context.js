import {useContext} from 'react'
import TodosContext from '../context/Todos'

export default function useTodoContext(){
    return useContext(TodosContext)
}