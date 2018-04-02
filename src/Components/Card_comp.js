import React from 'react'
import Card_header from './Card_header'
import Card_content from './Card_content'

const Card_comp = (props) => (
    
    <div className="col-md-3 card-design">
        <Card_header/>
        <Card_content number={props.value}/>
    </div>
)

export default Card_comp