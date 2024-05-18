import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import Menu from '../custome/Menu/Menu'
import './admin.css'
import { menuList } from '../custome/Menu/menuList.jsx'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

function Admin() {
    const menu=menuList;

  return (
        <>
      
        <Container fluid>
            <Row className='vh-100 overflow-none'>
                <Col md={2} className='p-0 left-side '>
                    <div className='w-100 px-3 py-2 h4 text-white'>CB Roadlines</div>
                    <div className='sidebar w-100 '>
                        <div className='sidebar text-white'>
                        {menu&&menu.map(data=><Menu key={data.name} content={data}/>)}
                        </div>
                    </div>
                </Col>
                <Col md={10} className='area-pannel'>
                <Header/>
                <div className='area-content'> 
               
                  <Outlet/>
                </div>
                
                </Col>
            </Row>
        </Container>
        </>
  )
}

export default Admin