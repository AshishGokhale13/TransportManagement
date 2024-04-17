import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Menu from '../custome/Menu/Menu'
import './admin.css'
function Admin() {
  return (
        <>
        <Container fluid>
            <Row className='vh-100 overflow-none'>
                <Col md={2} className='p-0 left-side '>
                    <div className='w-100 px-3 py-2 h4 text-primary'>CB Roadlines</div>
                    <div className='sidebar w-100 '>
                        <div className='sidebar text-white'>
                            <Menu/>
                            <Menu/>
                            <Menu/>
                            <Menu/>
                        </div>
                    </div>
                </Col>
                <Col md={10} className='area-pannel'>
                    
                </Col>
            </Row>
        </Container>
        </>
  )
}

export default Admin