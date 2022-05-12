import { Container, Row, Col, Breadcrumb, Form, Card, Figure } from "react-bootstrap";
import { MapFill, Phone, PhoneFill, PinFill, TelephoneFill, PinMap } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import "./GetToKnowTheCounty.css";



function GetToKnowTheCounty() {
    const [countries, fetchCountries] = useState([]);

    const getData = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((res) => {
                fetchCountries(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div className="page-wrapper">

            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/get-to-know-county-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Find adventure unlike any other</h2>
                                <p>Discover the many adventures Hamburg has to offer.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/get-to-know-the-county" className="active">Get to know the county</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <div className="content my-100 countries">
                <Container>
                    <div className="text-center mb-5">
                        <span className="icon large">
                            <PinMap />
                        </span>
                        <h1 className="main-title">Get to know the county</h1>
                    </div>
                    <Row className="justify-content-center">
                        {countries.map((item, i) => {
                            return (
                                <Col xl={2} key={item.name.common}>
                                    <Card className="mb-5">
                                        <Link to={`/get-to-know-the-county/${item.name.common}`} className="card-link">
                                            <Figure className="card-img">
                                                <Card.Img variant="top" src={item.flags.png} alt="Beaches" />
                                                <Card.Body>
                                                    <Card.Text>
                                                        {item.name.common}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Figure>
                                        </Link>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>


                </Container>
            </div>
        </div>
    );

}
export default GetToKnowTheCounty;