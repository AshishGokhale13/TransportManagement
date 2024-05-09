import React from 'react'
import { Col, Container, Row, Form, Button, Table, Card } from 'react-bootstrap'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { getNextId, saveInvoice } from '../../../services/invoiceService';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Invoice() {

        const navigate=useNavigate();
    const [formData, setFormData] = useState({
        invoice_id: "",
        date: "",
        lorryNo: "",
        lorryOwnerName: "",
        lorryOwnerMobile: "",
        driverName: "",
        driverMobile: "",
        dln: "",
        locationForm: "",
        locationTo: "",
        party: "",
        consignor: "",
        consignorGST: "",
        consignee: "",
        consigneeGst: "",
        weight: "",
        advance: "",
        rate: "",
        rs: "",
        remark: "",
        noBalse: "",
        quality: "",
        privateMark: "",
        invoNo: "",
        valueOfGoods: "",
        prn: "",
        pmarks: "",
        lotNo: ""
      });


    useEffect(()=>{
        getNextId().then(data=>{
           setFormData({...formData,invoice_id:data.data})
        });
        
    },[])


    const handleChange = (e) => {
        const { id, value } = e.target;
        
        if(id=="rate")
        {
            setFormData({ ...formData, [id]: value,rs:value });
        }
        else{
        setFormData({ ...formData, [id]: value });
        }



    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const invoice_id = formData.invoice_id;
        // if (!invoice_id.match(/^\d+$/)) {

        //     toast.error("Receipt No. must contain numbers.", {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //         transition: Bounce,
        //     });
        //     return;
        // }

        const lorryNo = formData.lorryNo;
        if (!lorryNo.match(/^[a-zA-Z0-9]+$/)) {

            toast.error("Lorry No. must contain characters and numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const lorryOwnerName = formData.lorryOwnerName;
        if (!lorryOwnerName.match(/[a-zA-Z]/)) {

            toast.error("Lorry Owner Name must contain characters.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const lorryOwnerMobile = formData.lorryOwnerMobile;
        if (!lorryOwnerMobile.match(/^\d+$/)) {

            toast.error("Lorry Owner Mobile No. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const driverName = formData.driverName;
        if (!driverName.match(/[a-zA-Z]/)) {

            toast.error("Driver Name . must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const driverMobile = formData.driverMobile;
        if (!driverMobile.match(/^\d+$/)) {

            toast.error("Driver Mobile. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const dln = formData.dln;
        if (!dln.match(/^\d+$/)) {

            toast.error("DL No . must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const from = formData.locationForm;
        if (!from.match(/[a-zA-Z]/)) {

            toast.error("From . must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const to = formData.locationTo;
        if (!to.match(/[a-zA-Z]/)) {

            toast.error("To . must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const party = formData.party;
        if (!party.match(/[a-zA-Z]/)) {

            toast.error("Party . must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const consignor = formData.consignor;
        if (!consignor.match(/[a-zA-Z]/)) {

            toast.error(" Consignor. must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        const consignorGST = formData.consignorGST;
        if (!consignorGST.match(/^[a-zA-Z0-9]+$/)) {

            toast.error(" consignorGST  must contain characters and numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const consignee = formData.consignee;
        if (!consignee.match(/[a-zA-Z]/)) {

            toast.error(" Consignee. must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const consigneeGst = formData.consigneeGst;
        if (!consigneeGst.match(/^[a-zA-Z0-9]+$/)) {

            toast.error("consigneeGst. must contain characters only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const weight = formData.weight;
        if (!weight.match(/^\d+$/)) {

            toast.error(" Weight. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            return;
        }
        const advance = formData.advance;
        if (!advance.match(/^\d+$/)) {
            toast.error(" Advance. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;

        }
        const rate = formData.rate;
        if (!rate.match(/^\d+$/)) {
            toast.error(" Rate. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }
        const rs = formData.rs;
        if (!rs.match(/^\d+$/)) {
            toast();
            toast.error(" Rs. must contain numbers only.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }



        toast.success("Form submitted successfully!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

        saveInvoice(formData).then(data=>
            {
            
                 navigate(`/invoice/print/${data.data.invoice_id}`);
            });

    };
    return (
        <Container >
            <Row>
                <Col>
                    <Card className='mt-3 px-2'>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3 pb-3 p-3 h3 text-primary">Invoice</Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="invoice_id">
                                        <Form.Label>
                                            <strong>Receipt No.</strong>{" "}
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Receipt No."
                                            value={formData.invoice_id}
                                            onChange={handleChange}
                                            message="Enter Receipt No"
                                            readOnly
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="date">
                                        <Form.Label>
                                            <strong>Date.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Select Date"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="lorryNo">
                                        <Form.Label>
                                            <strong>Lorry No.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Lorry No."
                                            value={formData.lorryNo}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="lorryOwnerName">
                                        <Form.Label>
                                            <strong>Lorry Owner Name.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Lorry Owner Name"
                                            value={formData.lorryOwnerName}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="lorryOwnerMobile">
                                        <Form.Label>
                                            <strong>Lorry Owner Mo.No.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="tel"

                                            placeholder="Enter Lorry Owner Mobile No."
                                            value={formData.lorryOwnerMobile}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="driverName">
                                        <Form.Label>
                                            <strong>Driver Name.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Driver's Name"
                                            value={formData.driverName}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="driverMobile">
                                        <Form.Label>
                                            <strong>Driver Mobile.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="tel"

                                            placeholder="Enter Driver Mobile"
                                            value={formData.driverMobile}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="dln">
                                        <Form.Label>
                                            <strong>D.L.No.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter D.L.No"
                                            value={formData.dln}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="locationForm">
                                        <Form.Label>
                                            <strong>From</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter From"
                                            value={formData.locationForm}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="locationTo">
                                        <Form.Label>
                                            <strong>To</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter To"
                                            value={formData.locationTo}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="party">
                                        <Form.Label>
                                            <strong>Party</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Party"
                                            value={formData.party}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="consignor">
                                        <Form.Label>
                                            <strong>Consignor</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Consignor"
                                            value={formData.consignor}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="consignorGST">
                                        <Form.Label>
                                            <strong>Consignor GST.No</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control className="text-uppercase"
                                            type="text"
                                            placeholder="Enter Consignor GST.No"
                                            value={formData.consignorGST}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="consignee">
                                        <Form.Label>
                                            <strong>Consignee.</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Consignee"
                                            value={formData.consignee}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="consigneeGst">
                                        <Form.Label>
                                            <strong>Consignee GST.No</strong>
                                            <strong className="text-danger">*</strong>
                                        </Form.Label>
                                        <Form.Control className="text-uppercase"
                                            type="text"
                                            placeholder="Enter Consignee GST.No"
                                            value={formData.consigneeGst}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <row>
                <Col>

                    <Card className='mt-3 px-2'>
                        <Card.Body>
                            <Row className="border mb-3 pb-3 p-3">Goods Description</Row>

                            <Row className=" mb-3 pb-3">
                                <Col md={6}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th className="text-center" colSpan={3}>
                                                    Description of Goods
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    No Of Bales<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                    <Form.Group as={Col} controlId="noBalse">
                                                        <Form.Control placeholder="No Of Bales"
                                                            value={formData.noBalse}
                                                            onChange={handleChange} required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    Quality<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                    <Form.Group as={Col} controlId="quality">
                                                        <Form.Control placeholder="Quality"
                                                            value={formData.quality}
                                                            onChange={handleChange} required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    P.R.No<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                    <Form.Group as={Col} controlId="prn">
                                                        <Form.Control placeholder="P.R.No"
                                                            value={formData.prn}
                                                            onChange={handleChange}
                                                            required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    P.Marks<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                    <Form.Group as={Col} controlId="pmarks">
                                                        <Form.Control placeholder="P.Marks"
                                                            value={formData.pmarks}
                                                            onChange={handleChange}
                                                            required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>
                                                    Lot.No<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                    <Form.Group as={Col} controlId="lotNo">
                                                        <Form.Control placeholder="Lot.No" 
                                                         value={formData.lotNo}
                                                         onChange={handleChange}
                                                        required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>
                                                    Private Mark<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                <Form.Group as={Col} controlId="privateMark">
                                                    <Form.Control placeholder="Private Mark"
                                                     value={formData.privateMark}
                                                     onChange={handleChange}
                                                    required />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>
                                                    Invo.No<strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                <Form.Group as={Col} controlId="invoNo">
                                                    <Form.Control placeholder="Invo.No" 
                                                    value={formData.invoNo}
                                                    onChange={handleChange}
                                                    required />
                                                </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>
                                                    Value of The Goods
                                                    <strong className="text-danger">*</strong>
                                                </td>
                                                <td>
                                                <Form.Group as={Col} controlId="valueOfGoods">
                                                    <Form.Control placeholder="Value of The Goods"
                                                     value={formData.valueOfGoods}
                                                     onChange={handleChange}
                                                    required />
                                                </Form.Group>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col className="mt-5" md={6}>
                                    <Row className="mb-3 ">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group as={Row} controlId="weight">
                                                <Form.Label className="font-weight-bold">
                                                    <strong> Weight</strong>
                                                    <strong className="text-danger">*</strong>
                                                </Form.Label>
                                                <Col md={6}>
                                                    <Form.Control
                                                        placeholder="Weight"
                                                        value={formData.weight}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid weight.
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="advance">
                                                <Form.Label Row md={3}>
                                                    <strong> Advance</strong>
                                                    <strong className="text-danger">*</strong>
                                                </Form.Label>
                                                <Col md={6}>
                                                    <Form.Control
                                                        placeholder="Advance"
                                                        value={formData.advance}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid advance.
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="rate">
                                                <Form.Label Row md={3}>
                                                    <strong> Rate </strong>
                                                    <strong className="text-danger">*</strong>
                                                </Form.Label>
                                                <Col md={6}>
                                                    <Form.Control
                                                        placeholder="Rate"
                                                        value={formData.rate}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid rate.
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="rs">
                                                <Form.Label Row md={3}>
                                                    <strong> Rs</strong>
                                                    <strong className="text-danger">*</strong>
                                                </Form.Label>
                                                <Col md={6}>
                                                    <Form.Control
                                                        placeholder="Rs"
                                                        value={formData.rs}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid Rs.
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="remark">
                                                <Form.Label Row md={3}>
                                                    <strong> Remark</strong>
                                                    <strong className="text-danger">*</strong>
                                                </Form.Label>
                                                <Col md={9}>
                                                    <Form.Control
                                                        className="bg-body-secondary"
                                                        placeholder="PAYMENT ONLY IN TRANSPORT ACCOUNT"
                                                        disabled
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid remark.
                                                    </Form.Control.Feedback>
                                                </Col>
                                                <Col className="text-center mt-5" md={9}>
                                                    <Button
                                                        variant="primary"
                                                        type="submit"
                                                        onClick={handleSubmit}
                                                    >
                                                        Save & Print
                                                    </Button>
                                                    <div>
                                                        <ToastContainer />

                                                    </div>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </row>
        </Container>
    )
}
export default Invoice