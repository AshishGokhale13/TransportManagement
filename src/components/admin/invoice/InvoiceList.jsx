import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'react-bootstrap'
import { deleteInvoiceData, getInvoiceList } from '../../../services/invoiceService';
import Swal from 'sweetalert2'


import { TiEdit } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function InvoiceList() {

    const navigate=useNavigate();
    const [invoiceList, setInvoiceList] = useState([]);
  
    useEffect(() => {
        getInvoiceList().then(data=>{
            setInvoiceList(data.data);
        })
       
       
    }, [])


    const edit=(e)=>
    {
        // alert(e.currentTarget.getAttribute("id"));
        navigate(`../invoice/update/${e.currentTarget.getAttribute("id")}`);
    }
    const delInvoice = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to perform an action to remove invoice from System',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, proceed!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteInvoiceData(id).then(data => {
                    let list = invoiceList.filter(invoice => invoice.invoice_id !== id);
                    setInvoiceList(list);
                    Swal.fire('Success!', 'The action was successfully performed.', 'success');
                  });
              // Call your function or perform your action here
            }
          });
      }
    
    return (
        <>
            <Container className='my-2'>
                <Row>
                    <Col>
                        <Card className='shadow'>
                            <Card.Body className='table-responsive '>
                                <table className='table '>
                                    <thead>
                                        <tr>
                                           
                                            <th>Inv Id.</th>
                                            <th>Consinee Name</th>
                                            <th>Consinor Name</th>
                                            <th>Driver Name</th>
                                            <th>Advance</th>
                                            <th>Totak Amount</th>
                                            <th>Lorry Num</th>
                                            <th>Date</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            invoiceList && invoiceList.map((data, key) => (

                                                
                                                    <tr key={key+data.invoice_id}>
                                                        <td>{data.invoice_id}</td>
                                                        <td>{data.consignee}</td>
                                                        <td>{data.consignor}</td>
                                                        <td>{data.driverName}</td>
                                                        <td>{data.advance}</td>
                                                        <td>{data.rs}</td>
                                                        <td>{data.lorryNo}</td>
                                                        <td>
                                                        {data?.date?.split("T")[0]}
                                                        </td>
                                                        <td>
                                                            <i className='btn btn-primary btn-sm mx-2' onClick={edit} id={data.invoice_id}><TiEdit /></i>
                                                            <i className='btn btn-danger btn-sm' onClick={()=>delInvoice(data.invoice_id)} ><FaTrashAlt /></i>
                                                            </td>
                                                    </tr>
                                                
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InvoiceList