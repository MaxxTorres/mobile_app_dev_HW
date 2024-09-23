import cx from 'classnames'

export default function Card(props) {
    const {primary, secondary, 
        success, danger, content} = props

    const classes = cx( 
        {
        'bg-blue-500 border-gray-900 border-2 rounded-md p-5 m-5 text-white': primary,
        'bg-gray-900 border-gray-900 border-2 rounded-md p-5 m-5 text-white': secondary,
        'bg-green-500 border-gray-900 border-2 rounded-md p-5 m-5 text-white': success,
        'bg-red-600 border-gray-900 border-2 rounded-md p-5 m-5 text-white': danger,
        }
    )

    return <div className={classes}>
            <div className='border-b-2'>{content.header}</div>
            <div>{content.body}</div>
            </div>
}