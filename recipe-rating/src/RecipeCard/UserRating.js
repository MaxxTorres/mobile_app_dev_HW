import {useState} from 'react'
// import React from 'react'
// React.useState()

//library installed, importing 'favorite.svg' as react component
//renamed to 'heart'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

export default function UserRating(){
    const [count, setCount] = useState(0)   //starting with count as 0
    const handleMinusClick = () => {
        if(count > 0) {
            setCount(count-1)
        }
        return
    }
    const handlePlusClick = () => {
        if(count < 5) {
            setCount(count+1)
        }
        return
    }

    return (
        <div>
            <button onClick={handleMinusClick}>[-]</button>
            <span>
                {/* {count} */}
                {[...Array(count)].map((heart, i)=>{
                    return(
                        <span key="i"><Heart/></span>
                    )
                })
                }
            </span>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}