import { Col, Container, Row, Card } from "react-bootstrap";
import { Calendar, CalendarDate, Newspaper, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./News.css";

function News() {
    return (
        <div className="content my-100">
            <Container>
                <div className="text-center mb-5">
                    <span className="icon large">
                        <Newspaper />
                    </span>
                    <h1 className="main-title">Latest News</h1>
                </div>
                <Row>
                    <Col xl={4} className="item">
                        <Card>
                            <div className="item-img-wrapper">
                                <Card.Img variant="top" src="/assets/images/general/travel-essentials.jpeg" className="item-img" />
                            </div>
                            <Card.Body>
                                <div className="d-flex justify-content-between post-info mb-3">
                                    <span><Calendar /> 10.05.2022</span>
                                    <span className="author"><Person />leandrraemini</span>
                                </div>
                                <Card.Title>
                                    <Link to="/news-detail" className="item-link">Travel Essentials</Link>
                                </Card.Title>
                                <Card.Text>
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                </Card.Text>
                                <Link to="/news-detail" className="main-btn">Read More</Link>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col xl={4} className="item">
                        <Card>
                            <div className="item-img-wrapper">
                                <Card.Img variant="top" src="/assets/images/general/slide_home_1.jpg" className="item-img" />
                            </div>
                            <Card.Body>
                                <div className="d-flex justify-content-between post-info mb-3">
                                    <span><Calendar /> 30.04.2022</span>
                                    <span className="author"><Person />shkurtahoxha</span>
                                </div>
                                <Card.Title>
                                    <Link to="/news-detail" className="item-link">Best places to visit</Link>
                                </Card.Title>
                                <Card.Text>
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                </Card.Text>
                                <Link to="/news-detail" className="main-btn">Read More</Link>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col xl={4} className="item">
                        <Card>
                            <div className="item-img-wrapper">
                                <Card.Img variant="top" src="/assets/images/general/things-to-do.jpeg" className="item-img" />
                            </div>
                            <Card.Body>
                                <div className="d-flex justify-content-between post-info mb-3">
                                    <span><Calendar /> 06.05.2022</span>
                                    <span className="author"><Person />shkurtahoxha</span>
                                </div>
                                <Card.Title>
                                    <Link to="/news-detail" className="item-link">Things to do</Link>
                                </Card.Title>
                                <Card.Text>
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                    Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse
                                </Card.Text>
                                <Link to="/news-detail" className="main-btn">Read More</Link>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <Link to="/news" className="main-btn">More News</Link>
                </div>
            </Container>
        </div>
    );
}
export default News;