//import PropTypes from 'prop-types'
import cx from 'classnames'
import {twMerge}  from 'tailwind-merge'

export default function Button(props){
    const {children, 
        primary, secondary, 
        success, warning, danger, 
        outline, rounded,
        ...otherProps} = props

    const classes = twMerge(cx(otherProps.className, 'flex items-center px-8 py-3 border', 
        {
        'bg-blue-500 border-blue-500 text-white': primary,
        'bg-gray-900 border-gray-900 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-orange-400 border-orange-500 text-white': warning,
        'bg-red-600 border-red-700 text-white': danger,

        'rounded-full': rounded, //rounded
        'bg-white': outline,     //outline
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-orange-400': outline && warning,
        'text-red-600': outline && danger,
    }))

    return <button {...otherProps} className={classes}>
            {children}
            </button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = 
            Number(!!primary) + 
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)
        
        if (count > 1) {
            return new Error("Only one of these: primary, secondary, success, warning, danger can be true")
        }
    }
}

//Usually for work
// Button.propTypes = {
//     children: PropTypes.node,
//     primary: PropTypes.bool,
//     secondary: PropTypes.bool,
//     success: PropTypes.bool,
//     warning: PropTypes.bool,
//     danger: PropTypes.bool,
//     outline: PropTypes.bool,
//     rounded: PropTypes.bool,}