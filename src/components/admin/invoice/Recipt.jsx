import React, { useState } from 'react'
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import {  useLoaderData, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import { getinvoiceData } from '../../../services/invoiceService';
import { FaPrint } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
const ReciptFormat = ({ data, info }) => {

  return (

    <>
      {(data && info) && data.map((d, key) =>
        <div className='watermark mt-3' key={key}>
          <Container fluid className='py-2'>
            <Row>
              <Col md={2} sm={2} xs={2} lg={2} xxl={2} xl={2} className='d-flex   flex-column justify-content-center align-items-center'>
                <p className="text-danger  fs-6 ">{d}</p>
                <p className="badge  text-center fs-5 ">CBTC </p>
              </Col>
              <Col md={8} sm={8} xs={8} lg={8} xxl={8} xl={8} className='d-flex middle justify-content-center align-items-center flex-column'>
                <p className=" text-decoration-underline  text-center fs-05">
                  SUBJECT TO HYDERABAD JURISDICTION
                </p>
                <p className=" text-center fs-01 text-danger fw-boldepr ">
                  COIMBATORE BALAJI TRANSPORT CO.
                </p>
                <p className="col-10 text-center fs-02 ">
                  TRANSPORT CONTRACTOR &COMMISSON AGENT.
                </p>
                <p className="text-decoration-underline text-center fs-02  ">
                  Service to : All Tamilnadu,kerla,Karnatka,Maharashtra & Gujrat.
                </p>
                <p className=" text-center fs-02  ">
                  NH-7,Near Bharat Petrol Pump ,Palamakole Village,Mdl Shamshabad
                  ,R.R Dist.,Hyderabad - 509325. T.S.
                </p>
                <p className=" text-center fs-6 text-danger ">
                  Email:cbtc7725@gmail.com
                </p>
                <p className=" text-center fs-02">
                  <label> Branch office : </label> Warangal-Hyderabad High Way,Chagal Village Mandal
                  Station Ganapur janagama Dist ., - 506 144, T.s.
                </p>
                <p className=" text-center fs-6 text-danger ">
                  GSTIN:36CVGPB8170F1ZN
                </p>
              </Col>
              <Col md={2} sm={2} xs={2} lg={2} xxl={2} xl={2} className='d-flex  justify-content-center align-items-center'>
                <p className="text-end d-flex justify-content-center fs-02 align-item-center flex-column">
                  <span><label>cell: </label> 8121777725 </span>
                  <span>9848977725 </span><span>8142377725 </span><span>8143777725 </span><span>9603777725</span>
                  <span><label>A/c: </label>9603777750</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='px-4 borders'>
                <Row className='justify-content-between'>
                  <Col><p><label>No : {info.invoice_id}</label> </p></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col><p><label>Date : </label></p></Col>
                </Row>
                <Row className='justify-content-start middle'>
                  <Col className='m-0' xl={2} sm={2}><p><label>Lorry No :</label> {info.lorryNo}</p></Col>
                  <Col className='m-0' xl={7} sm={7}><p><label>Lorry Owner Name :</label> {info.lorryOwnerName} </p></Col>
                  <Col className='m-0' xl={3} sm={3}><p><label>Lorry Owner Mo:</label> {info.lorryOwnerMobile}</p></Col>
                </Row>
                <Row className='justify-content-start middle'>
                  <Col className='m-0' xl={6} sm={6}><p><label>Driver's Name :</label> {info.driverName} </p></Col>
                  <Col className='m-0' xl={3} sm={3}><p><label>Driver's Mobile No : </label>{info.driverMobile}</p></Col>
                  <Col className='m-0' xl={3} sm={3}><p><label>D.I.NO: </label>{info.dln}</p></Col>
                </Row>
                <Row className='justify-content-start middle'>
                  <Col className='m-0' xl={6} sm={6}><p><label>Party :</label> {info.party}</p></Col>
                  <Col className='m-0' xl={3} sm={3}><p><label>FROM :</label> {info.locationForm}</p></Col>
                  <Col className='m-0' xl={3} sm={3}><p><label>TO :</label> {info.locationTo}</p></Col>
                </Row>
                <Row className='justify-content-start middle'>
                  <Col className='m-0' xl={8} sm={8}><p><label>Consignor : </label>{info.consignor} </p></Col>
                  <Col className='m-0' xl={4} sm={4}><p><label>GSTIN : </label>{info.consignorGst}</p></Col>
                </Row>
                <Row className='justify-content-start middle'>
                  <Col className='m-0' xl={8} sm={8}><p><label>Consignee : </label>{info.consignee}</p></Col>
                  <Col className='m-0' xl={4} sm={4}><p><label>GSTIN : </label>{info.consigneeGst}</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="px-4">
              <Col md={6} className="px-0">
                <Table className="table-bordered content">
                  <thead>
                    <tr>
                      <th className="col-1">Sr.No</th>
                      <th className=" col-11 text-center" colSpan={2}>
                        Description of Goods
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'> No Of Bales:</div><div className='col'>{info.noBalse}
                        </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>Quality:</div><div className='col'> {info.quality}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>P.R.No:</div><div className='col'> {info.prn}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>P.Marks:</div><div className='col'> {info.pmarks}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>Lot.No:</div><div className='col'> {info.lotNo}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>Private Mark:</div><div className='col'> {info.privateMark}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>Invo.No:</div><div className='col'> {info.invoice_id}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className='row'><div className='col-3 text-end'>Value of The Goods:</div><div className='col'> {info.valueOfGoods}</div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className=" text-center">

                        <span className="line text-center fs-05">
                          GST PAYABLE BY CONSIGNOR (OR) CONSIGNEE{" "}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="middle  ">
                        <p className='fs-06 '>
                          CAUTION:The consignment Will not be detained diverted or
                          rerouted </p>
                        <p className='fs-06 lh-2'>
                          or re-
                          booked with conginee Banks Written permission will be deliverd
                          {" "}
                        </p>
                        <p className='fs-06'> at the destination</p>

                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={6} xs={6} className="p-0 ">
                <Table className=" table-bordered    ">
                  <thead>
                    <tr className='fs-03'>
                      <th className="col-3">Weight</th>
                      <th className=" col-2">Advance</th>
                      <th className="col-2">Rate</th>
                      <th className="col-2">Rs</th>
                      <th className="col-3">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="Tbody">
                    <tr className="">
                      <td>{info.weight}</td>
                      <td>{info.advance}</td>
                      <td>{info.rate}</td>
                      <td>{info.rate}</td>
                      <td><p className='fs-05 p-0'> PAY AMOUNT ONLY in TRANSFER ACCOUNT</p></td>
                    </tr>
                    <tr>
                      <td className="fs-03 middle p-0 px-3 pb-0 pt-3 m-0" colSpan={5}>

                        <p>NOTE : DO NOT CASH PAY TO THE LORRY DRIVER OR OWNER CASH
                        </p><p className=''>  PAY TO THE FAVOUR OF TRANSPORT ACCOUNT ONLY</p>

                      </td>
                    </tr>
                    <tr>
                      <td className="span fs-07 px-0 py-0 middle" colSpan={5}>
                        <div className="row py-0 m-0">
                          <div className='col-6 border-right py-3 m-0'>
                            <p> Our Bank Details Are Given Below:</p>
                            <p>Name: COIMBATORE BALAJI TRANSPORT CO.</p>
                            <p className='pt-1'>Bank Name: AXIS BANK </p>
                            <p>Branch: Shamshabad</p>
                            <p className='lh-5'><span>
                              A/c.No: 915020042167829</span>
                            </p>
                            <p><span>IFSC Code: UTIB0000867</span></p>
                          </div>
                          <div className='col-6 py-3'>
                            <p>Our Bank Details Are Given Below: </p>
                            <p className='fs-07'>Name: COIMBATORE BALAJI
                              TRANSPORT CO.</p>
                            <p>Bank Name:SOUTH INDIAN </p>
                            <p>Bank Branch: PALMAKUL HYDERABAD
                            </p>
                            <p><span>
                              A/c.No: 915020042167829
                            </span>
                            </p>
                            <p><span>IFSC Code: UTIB0000867</span></p>

                          </div>
                        </div>
                      </td>

                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className='justify-content-between middle fs-05 bold'>
              <Col className='text-center mt-4'>Sign.of Lorry Owner or Driver</Col>
              <Col className='text-center mt-25'>
                <p className='pt-3'>Consignor should be insure their goods</p>
                <p>This is Computer generator invoice</p>
              </Col>
              <Col className='text-center mt-25  '>

                <p className='pt-3'>For Coimbatore Balaji Transport Co.</p>
                <p>Authorized signature.</p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>)
}

function Recipt() {

  const { id } = useParams();
  const [invoiceData, setInvoiceData] = useState({});
  const [print,setPrint]=useState(false);
  const navigate=useNavigate();

  useEffect(() => {

    getinvoiceData(id).then(data => {
      setInvoiceData(data.data)
    });



  }, [id]);


  useEffect(()=>{
    const handleKeyPress = (event) => {
      event.preventDefault(); 
      // Check if Ctrl key and 'p' key are pressed simultaneously
      if (event.ctrlKey && event.key === 'p') {
        // Perform your desired action here
        setPrint(true);
        setTimeout(()=>{window.print(); setPrint(false)},1);
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  },[])

  const printInvoice=()=>
  {
    setPrint(true);
    setTimeout(()=>{window.print(); setPrint(false)},1);
    
  }
  const back=()=>
  {
    navigate(-1,{replace:true})
  }
  const [printUser, setPrintUser] = useState(["DRIVER COPY", "CONSIGNOR COPY", "CONSIGNEE COPY"]);
  return (
    <>
      <ReciptFormat data={printUser} id={id} info={invoiceData} />
      {!print && (<>
                  <div className='print-opt'>
                  <button className=' btn btn-primary mx-3 rounded-pill shadow' onClick={printInvoice}>Print <FaPrint /> </button>
                  <button className=' btn btn-outline-warning text-dark fw-bold rounded-pill shadow' onClick={back}><IoReturnDownBackOutline/> Back </button>
     </div></> )}
    </>
  )
}

export default Recipt