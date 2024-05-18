import React from 'react'

function ConsignorTable({data}) {
    console.log(data,"huhuhu")
  return (
        <table className='table '>
            <thead>
                <tr><th>Sr. No</th> <th>consignor Name</th><th className='text-center'> GST No</th></tr>
            </thead>
            <tbody>
            
                {data && data.map((consignor,key)=>
                <tr key={consignor.consignorName+key}>
                    <td>{key+1}</td>
                    <td>{consignor.consignorName}</td>
                     <td className='text-center'>{consignor.consignorGST?consignor.consignorGST:"-"}</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default ConsignorTable;