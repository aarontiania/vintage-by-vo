import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col } from 'react-bootstrap';

export default class Sale extends Component {
    render() {
        return (
            <div id="sale">
                <h1 className="sectionheader">sale</h1>
                <Container>
                    <Row>
                        <Col>
                            <Image src="https://i.pinimg.com/originals/cf/77/b0/cf77b0df3bba417129b5cbadbb85b2b4.jpg" className="productimg" rounded />
                            <Container>
                                <text className="productname">Medium Ring Agenda Cover Monogram{"\n"}</text>
                                <br />
                                <text className="productprice">$500</text>
                            </Container>
                        </Col>
                        <Col>
                            <Image src="https://assets.vogue.com/photos/5b508427ef94310c45583177/master/pass/00-promo-dior-bag.jpg" className="productimg" rounded />
                            <Container>
                                <text className="productname">Dior Bag idk{"\n"}</text>
                                <br />
                                <text className="productprice">$500</text>
                            </Container>

                        </Col>
                        <Col>
                            <Image src="https://s3.amazonaws.com/nikeinc/assets/92384/DiorJordan3_native_1600.jpg?1575473871" className="productimg" rounded />
                            <Container>
                                <text className="productname">Dior x Jordan AF1s{"\n"}</text>
                                <br />
                                <text className="productprice">$500</text>
                            </Container>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    }
}