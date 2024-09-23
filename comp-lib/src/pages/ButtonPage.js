import Button from '../components/Button'
import {FaAngry} from 'react-icons/fa'

export default function ButtonPage(props){

    const valueforCondition = true

    return(
    <div>
            {valueforCondition && <Button danger />}
            {/* if stuff on left is true, render right
            if stuff on left is false, dont render */}

            {valueforCondition || <Button primary />}
            {/* if stuff on left is false, render right*/}

        <div>
        <Button 
            primary 
            rounded 
            onClick={() => console.log('click')} 
            className='mb-8'
        >
            Click Me!
        </Button>
        </div>

        <div>
        <Button secondary><FaAngry />Click Me!</Button>
        </div>

        <div>
        <Button success rounded>Click Me!</Button>
        </div>

        <div>
        <Button warning outline>Click Me!</Button>
        </div>

        <div>
        <Button danger outline rounded>Click Me!</Button>
        </div>
    </div>
    )
}