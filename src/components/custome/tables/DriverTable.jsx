import React from 'react'

function DriverTable({data}) {
  return (
        <table className='table '>
            <thead>
                <tr><th>Sr. No</th> <th>Driver Name</th><th className='text-center'>Contact No</th></tr>
            </thead>
            <tbody>
            
                {data && data.map((driver,key)=>
                <tr key={driver.driverName+key}>
                    <td>{key+1}</td>
                    <td>{driver.driverName}</td>
                     <td className='text-center'>{driver.driverContact?driver.driverContact:"-"}</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default DriverTable;