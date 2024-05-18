import React from 'react'
import { Card } from 'react-bootstrap'

function KpiCard({data}) {
  return (
        <Card className='shadow'>
            <Card.Body>
                <div className='Text-center  text-center gap-2 flex-wrap  align-items-center justify-content-around'>
                    <h3>{`${data.category.charAt(0).toUpperCase()}${data.category.slice(1)}`}</h3>
                    <h5 className='kpi-box text-light fw-bold shadow text-center btn-primary'>{data.count}</h5>
                </div>
            </Card.Body>
        </Card>
  )
}

export default KpiCard
