import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import KpiCard from '../../custome/kpicard/KpiCard'
import { useEffect } from 'react'
import { getKapi, getMonthlyTargets, getPercentage } from '../../../services/dashboardService'
import { useMemo } from 'react'
import CardTable from '../../custome/kpicard/CardTable'
import ConsigneeTable from '../../custome/tables/ConsigneeTable'
import ConsignorTable from '../../custome/tables/ConsignorTable'
import DriverTable from '../../custome/tables/DriverTable'
import VehiclesTables from '../../custome/tables/VehiclesTables'
import Piecharts from '../../custome/pie/Piechart'
import LineChart, { mapdata } from '../../custome/charts/linechart/LineChart'



function Dashboard() {
   
    const [reskpiList, setKpiList] = useState(null);
    const [tableToggle, setTableToggle] = useState(null);
    const [percentage, setPercentage] = useState({})
    const [MonthlyTargets,setMonthlyTargets]=useState([]);
   
   
    const piechardData=useMemo(()=>{
        
        let a=[
            { item: 'Paid Amount', count:percentage.paidAmount+" Rs.", percent: (percentage.advancePercentage) },
            { item: 'Remaining Amount', count:percentage.remainingAmount+" Rs.", percent: (percentage.remainingPercentage) },
        ]
        return a;

    },[percentage])


  
    useEffect(() => {
        getKapi().then((data) =>
            setKpiList(data.statusCode == 200 ? data.data : null));
     getPercentage().then(data => setPercentage(data.data))
     getMonthlyTargets().then( data=>{
        setMonthlyTargets(mapdata([...data]))
    });
    }, [])

    const kpiList = useMemo(() => reskpiList, [reskpiList]);

    useEffect(()=>{
    
    },[reskpiList])
    const toggleTable = (e) => {
        setTableToggle(!tableToggle)
    }


    return (
        <Container className='my-3'>
            <Row>
                <Col md={3} >
                    <KpiCard data={{ category: "consignors", count: kpiList?.consignorCount }} />
                </Col>
                <Col md={3} >
                    <KpiCard data={{ category: "Consignees", count: kpiList?.consigneeCount }} />
                </Col>
                <Col md={3} >
                    <KpiCard data={{ category: "Drivers", count: kpiList?.driverCount }} />
                </Col>
                <Col md={3} >
                    <KpiCard data={{ category: "Vehicles", count: kpiList?.vehicleCount }} />
                </Col>

            </Row>
            <Row>
                <Col md={6} lg={6}>
                    <Card className='mt-3 shadow'>
                        <Card.Body>
                           <h3 className='d-flex justify-content-between align-items-center'><span>Revenue</span> <span className="h5 ">Total :<span className='text-primary'> {percentage.totalAmount} Rs</span></span></h3>
                           <hr></hr>
                            <Piecharts data={piechardData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={6}>
                    <Card className='mt-3 shadow'>
                        <Card.Body>
                           <h3 className='d-flex justify-content-between align-items-center'><span>Monthly Target</span></h3>
                           <hr></hr>
                            <LineChart data={MonthlyTargets}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-wrap'>
                {kpiList && Object.keys(kpiList).map(data =>
                    <Col md={6} className='mt-3 '>
                        {!data.toLowerCase().includes("count") ?
                            <CardTable data={data} kpiList={kpiList} className>

                                {data === "consignee" ?
                                    <ConsigneeTable data={kpiList[data]} />
                                    : data === "consignor" ?
                                        <ConsignorTable data={kpiList[data]} />
                                        : data === "driver" ?
                                            <DriverTable data={kpiList[data]} />
                                            : data === "vehicles" ?
                                                <VehiclesTables data={kpiList[data]} /> : ""}
                            </CardTable> : ""}
                    </Col>
                )}
            </Row>
        </Container>

    )
}

export default Dashboard