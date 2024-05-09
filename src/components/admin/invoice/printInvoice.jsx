import React from 'react'
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import "./Recipt.css";
function PrintInvoice() {
  return (
    <div className='reciept-container'>
    <div class="watermark">
      <div className="container mt-3">
        <div className="row">
          <div className="col-2 text-center ">
            <p className="text-danger  fs-6 mt-5">CONSIGNEE COPY</p>
            <p className="badge  text-center fs-4 ">CBTC</p>
          </div>
          <div className="col-8 lh">
            {" "}
            <p className=" text-decoration-underline text-center fs-SM- fs-6 ">
              SUBJECT TO HYDERABAD JURISDICTION
            </p>
            <p className=" text-center fs-1 text-danger fw-boldepr ">
              COIMBATORE BALAJI TRANSPORT CO.
            </p>
            <p className="col-10 text-center fs-4 fw-boldepr ">
              TRANSPORT CONTRACTOR &COMMISSON AGENT.
            </p>
            <p className="text-decoration-underline text-center fs-SM-  ">
              Service to : All Tamilnadu,kerla,Karnatka,Maharashtra & Gujrat.
            </p>
            <p className=" text-center fs-5  ">
              NH-7,Near Bharat Petrol Pump ,Palamakole Village,Mdl Shamshabad
              ,R.R Dist.,Hyderabad - 509325. T.S.
            </p>
            <p className=" text-center fs-4 text-danger ">
              Email:cbtc7725@gmail.com
            </p>
            <p className=" text-center fs-5">
              Branch office : Warangal-yderabad High Way,Chagal Village Mandal
              Station Ganapur janagama Dist ., - 506 144, T.s.
            </p>
            <p className=" text-center fs-4 text-danger ">
              GSTIN:36CVGPB8170F1ZN
            </p>
          </div>
          <div className="mob col-2 ">
            <p className="text-end">
              cell: 8121777725 9848977725 8142377725 8143777725 9603777725{" "}
              <br></br>
              A/c: 9603777750
            </p>
          </div>
        </div>
        <div className=" data  row mb-2">
          <div className="col-6 ">No:</div>
          <div className="col-6  d-flex justify-content-around">Date:</div>
        </div>
        <div className="data row">
          <div className="col-3  fs-sm">
            <span class="dotted-underline fs-sm">Lorry No:</span>
          </div>
          <div className="col-6 ">
            <span class="dotted-underline fs-sm">Lorry Owner Name:</span>
          </div>
          <div className="col-3 ">
            <span class="dotted-underline fs-sm">Lorry Owner Mo:</span>
          </div>
        </div>
        <div className=" data row">
          <div className="col-6  fs-sm">
            <span class="dotted-underline fs-sm">Driver's Name:</span>
          </div>
          <div className="col-3 ">
            <span class="dotted-underline fs-sm">Driver Mobile:</span>
          </div>
          <div className="col-3 ">
            <span class="dotted-underline fs-sm">D.l.No:</span>
          </div>
        </div>
        <div className="data row">
          <div className="col-4 fs-sm">
            <span class="dotted-underline fs-sm">Party:</span>
          </div>
          <div className="col-4">
            <span class="dotted-underline fs-sm">From:</span>
          </div>
          <div className="col-4 ">
            <span class="dotted-underline fs-sm">To:</span>
          </div>
        </div>
        <div className="data row">
          <div className="col-8 fs-sm">
            <span class="dotted-underline fs-sm">Consignor:</span>
          </div>
          <div className="col-4">
            <span class="dotted-underline fs-sm">GSTIN:</span>
          </div>
        </div>
        <div className="data row mb-3">
          <div className="col-8 fs-sm">
            <span class="dotted-underline fs-sm">Consignee:</span>
          </div>
          <div className="col-4">
            <span class="dotted-underline fs-sm">GSTIN:</span>
          </div>
        </div>

        <Row className="mb-0 pb-0 p-0">
          <Col md={6} className="p-0">
            <Table className="table-bordered content">
              <thead>
                <tr>
                  <th className="col-1">Sr.No</th>
                  <th className=" col-11 text-center" colSpan={3}>
                    Description of Goods
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td></td>
                  <td>No Of Bales:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Quality:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>P.R.No:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>P.Marks:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Lot.No:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Private Mark:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Invo.No:</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Value of The Goods:</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="line text-center">
                    <span className="line text-center">
                      GST PAYABLE BY CONSIGNOR (OR) CONSIGNEE{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="line1">
                    <span>
                      CAUTION:The consignment Will not be detained diverted or
                      rerouted or re-
                      <p contentEditable>
                        booked with conginee Banks Written permission will be
                        deliverd at the destination{" "}
                      </p>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6} className="p-0">
            <Table className=" table-bordered ms-0 content1  ">
              <thead>
                <tr>
                  <th className="col-3">Weight</th>
                  <th className=" col-2">Advance</th>
                  <th className="col-2">Rate</th>
                  <th className="col-2">Rs</th>
                  <th className="col-3">Remark</th>
                </tr>
              </thead>
              <tbody className="Tbody">
                <tr className="">
                  <td>AS PER BILL</td>
                  <td>.....</td>
                  <td></td>
                  <td>.....</td>
                  <td>PAY AMOUNT ONLY in TRANSFER ACCOUNT</td>
                </tr>
                <tr>
                  <td className="line1 " colSpan={5}>
                    <span>
                      NOTE : DO NOT CASH PAY TO THE LORRY DRIVER OR OWNER CASH
                      PAY TO THE FAVOUR<p>OF TRANSPORT ACCOUNT ONLY</p>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="span p-4" colSpan={3}>
                    Our Bank Details Are Given Below:<br></br>
                    Name: COIMBATORE BALAJI TRANSPORT CO.<br></br>
                    Bank Name: AXIS BANK <br></br>
                    Branch: Shamshabad<br></br>
                    <span>
                      A/c.No: 915020042167829
                      <p>IFSC Code: UTIB0000867</p>
                    </span>
                  </td>
                  <td className="span  p-4" colSpan={4}>
                    Our Bank Details Are Given Below: Name: COIMBATORE BALAJI
                    TRANSPORT CO.<br></br>
                    Bank Name:SOUTH INDIAN Bank Branch: PALMAKUL HYDERABAD
                    <br></br>
                    <span>
                      A/c.No: 915020042167829
                      <p>IFSC Code: UTIB0000867</p>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <div className="Base row ">
          <div className="col-4 "></div>
          <div className="col-4 text-center">Consignor should be insure their goods</div>
          <div className="Base1 col-4  text-center">
            For Coimbatore Balaji Transport Co.
          </div>
        </div>
        <div className="Base row pb-4">
          <div className="col-4 ">Sign.of Lorry Owner or Driver</div>
          <div className="col-4 text-center">This is Computer generator invoice</div>
          <div className=" col-4 text-center">Authorized signature.</div>
        </div>
        <div className="BORDER row"></div>
      </div>
      </div>
    </div>

  )
}

export default PrintInvoice