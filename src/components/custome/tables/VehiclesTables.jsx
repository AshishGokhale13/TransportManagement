import React from 'react'

function VehiclesTables({data}) {
  return (
        <table className='table '>
            <thead>
                <tr><th>Sr. No</th> <th>vehicle No.</th><th className='text-center'>Owner Name</th><th className='text-center'>Owner Contact</th></tr>
            </thead>
            <tbody>
            
                {data && data.map((vehicle,key)=>
                <tr key={vehicle.vechileNo+key}>
                    <td>{key+1}</td>
                    <td>{vehicle.vechileNo}</td>
                    <td>{vehicle.owenername}</td>
                     <td className='text-center'>{vehicle.owenerMobile?vehicle.owenerMobile:"-"}</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default VehiclesTables;