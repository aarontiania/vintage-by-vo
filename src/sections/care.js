import { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class Care extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            header: "we care as much as you do"
        }
    }

    render() {
        const { description, header } = this.state;
        return (
            <>
                <div id="care" className="generalpage">
                    <Container fluid>
                        <h1 className="sectionheader">care</h1>
                        <div className="sectionspacer-half" />
                        <Row className="align-items-center">
                            <Col>
                                <h2>{header}</h2>
                                <div className="sectionspacer-half" />
                                <p>{description}</p>
                            </Col>
                            <Col xs lg="4">
                                <Image src="https://i.pinimg.com/736x/e4/83/89/e4838913d91f39d77b2e4987ca0c1c04.jpg"
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