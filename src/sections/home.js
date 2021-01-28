import Banner from './banner';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner carousel />

                <div className="sectionspacer-half" />
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                <Link to="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg">
                                    <Image src="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg"
                                        className="productimg"
                                        rounded
                                    />
                                </Link>
                                <Nav.Link to="" className="productname">Product thing</Nav.Link>
                            </Col>
                            <Col xs lg="2">
                                <Link to="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg">
                                    <Image src="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg"
                                        className="productimg"
                                        rounded
                                    />
                                </Link>
                                <Nav.Link to="" className="productname">Product thing</Nav.Link>
                            </Col>
                            <Col xs lg="2">
                                <Link to="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg">
                                    <Image src="https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg"
                                        className="productimg"
                                        rounded
                                    />
                                </Link>
                                <Nav.Link to="" className="productname">Product thing</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="sectionspacer" />
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                <Link to={"/collection?b=d"}>
                                    <Image src={"./images/d-icon.jpg"}
                                        className="productimg"
                                        rounded
                                    />
                                </Link>
                                <Nav.Link as={Link} to={"/collection?b=d"} className="productname">Dior</Nav.Link>
                            </Col>
                            <Col xs lg="2">
                                <Link to={"/collection?b=lv"}>
                                    <Image src={"./images/lv-icon.jpg"}
                                        className="productimg"
                                        rounded
                                    />
                                </Link>
                                <Nav.Link as={Link} to={"/collection?lv=d"} className="productname">Louis Vuitton</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        );
    }
}