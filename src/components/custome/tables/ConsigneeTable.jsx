import React from 'react'

function ConsigneeTable({data}) {
    console.log(data,"huhuhu")
  return (
        <table className='table'>
            <thead>
                <tr><th>Sr. No</th> <th>Consignee Name</th><th> GST No</th></tr>
            </thead>
            <tbody>
            
                {data && data.map((consignee,key)=>
                <tr key={consignee.consigneeName+key}>
                    <td>{key+1}</td>
                    <td>{consignee.consigneeName}</td>
                     <td>{consignee.consigneeGST}</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default ConsigneeTable