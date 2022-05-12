import { Container, Row, Col, Breadcrumb, Form, Card, Figure, NavItem } from "react-bootstrap";
import { MapFill, Phone, PhoneFill, PinFill, TelephoneFill, PinMap } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import "./GetToKnowTheCounty.css";
import CountryData from "./CountryData";

function GetToKnowTheCountyDetail() {
    const [countries, fetchCountries] = useState([]);

    const getData = () => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then((res) => res.json())
            .then((res) => {
                fetchCountries(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);
    const { countryName } = useParams();
    const thisCountry = countries.find(item => item.name.common === countryName)
    const thisProduct = CountryData.find(prod => prod.id === countryName)
    console.log(thisProduct)


    return (
        <div className="page-wrapper">
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/places-to-stay-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Stay in wonderland for a while</h2>
                                <p>You can always find the perfect place to lay your head for the night in {thisProduct.name}.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-stay" className="active">Places to Stay</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <Container>

            </Container>
        </div>
    )
}
export default GetToKnowTheCountyDetail;