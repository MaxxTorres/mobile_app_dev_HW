import React from 'react'
import './styles.css'

export default function wrapper(props) {
  return <div className="wrapper">{props.children}</div>
}