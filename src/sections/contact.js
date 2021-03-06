import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            header: "lets talk"
        }
    }

    render() {
        const { description, header } = this.state;
        return (
            <>
                <div id="contact" className="generalpage">
                    <Container fluid>
                        <h1 className="sectionheader">contact</h1>
                        <div className="sectionspacer-half" />
                        <Row className="align-items-center">
                            <Col>
                                <h2>{header}</h2>
                                <div className="sectionspacer-half" />
                                <p>{description}</p>
                            </Col>
                            <Col xs lg="4">
                                <Image src="https://i.pinimg.com/originals/ff/f8/e5/fff8e5739d6deae8b834a920f35c7d4b.jpg"
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