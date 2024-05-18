import React, { useState } from 'react'
import { Card } from 'react-bootstrap'


import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


function CardTable({data,children}) {

    const [tableToggle, setTableToggle] = useState(false);
    const toggleTable=()=>
    {
        console.log("sjsjs");
        setTableToggle(!tableToggle)
    }

  return (
    <Card className='px-2 py-3'>
    <Card.Title className=''>
        <div className=''>
        <h4 className='d-flex text-shadow'><span className='flex-grow-1'>{`${data.charAt(0).toUpperCase()}${data.slice(1)}`}
        </span>
       { tableToggle==true?<FaAngleUp onClick={toggleTable}/>:<FaAngleDown onClick={toggleTable} />}
        </h4>
        </div>
        <div className=''>   
        </div>
    </Card.Title>
    {tableToggle && 
    <Card.Body>
      {children}
    </Card.Body>}
</Card>
  )
}

export default CardTable