
import {useState} from 'react'
import {GoChevronDown} from 'react-icons/go'

const TodoDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {categories, category, onChange} = props

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleCategoryClick = (category) => {
        setIsOpen(false)
        onChange(category)
    }
    const renderedOptions = categories.map((category) => {
        return (
          <div
            onClick={() => handleCategoryClick(category)}
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            key={category}>
            {category}
          </div>
        )
    })

    return (
    <div className="w-24 m-7 mt-1 p-1 bg-zinc-600 rounded-md relative">
        <div
        onClick={handleClick}
        className="flex justify-between items-center text-lime-300 cursor-pointer">
        {category}
        <GoChevronDown className="text-xl" />
        </div>
        {isOpen && (
        <div className="absolute top-full p-1 m-1 rounded bg-zinc-600 border border-zinc-800 text-white">{renderedOptions}</div>
        )}
    </div>
  )
}


// export {Panel}
export default TodoDropdown