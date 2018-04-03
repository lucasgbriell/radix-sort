import React from 'react'
import Card_header from './Card_header'
import Card_content from './Card_content'

const Card_comp = (props) => (

    <div className="col-md-2 col-sm-3 col-3 card-design">
        <Card_header/>
        <Card_content number={props.value} index={props.index}/>
    </div>
)

export default Card_comp