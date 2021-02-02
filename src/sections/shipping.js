import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Shipping extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            header: "stress free, for me and you"
        }
    }

    render() {
        const { description, header} = this.state;
        return (
            <>
                <div id="shipping" className="generalpage">
                    <Container fluid>
                        <h1 className="sectionheader">shipping</h1>
                        <div className="sectionspacer-half" />
                        <Row className="align-items-center">
                            <Col>
                                <h2>{header}</h2>
                                <div className="sectionspacer-half" />
                                <p>{description}</p>
                            </Col>
                            <Col xs lg="4">
                                <Image src="https://i.pinimg.com/originals/19/d2/6d/19d26db81873bbcc57fe1d65f563f5b1.jpg"
                                    className="generalimg"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>

            </>
        );
    }
}