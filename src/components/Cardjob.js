import React from 'react'
import './Card.css'

const Cardjob = props => (
    <div className="Cardjob">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button>{props.link}</button>
       
    </div>
)


export default Cardjob