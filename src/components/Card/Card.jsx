import React from 'react'


import './card.css';

function Cards(props) {
    
    let studentNames=[10,30,50,60];
 
    return (

     
    <div className='cards' style={{backgroundColor:(props.name<40)?"red":"green" }}>
        <h1>{props.name }</h1>
    </div>
  )
}

export default Cards