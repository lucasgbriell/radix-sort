import React from 'react'


const Card_content = (props) => (
    
    <div className="middle">
        <h4>Index of array: {props.index}</h4>
        <h1 >{props.number}</h1>
    </div>
)

export default Card_content