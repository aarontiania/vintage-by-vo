import '../css/App.css';
import { Component } from 'react';
import { Image, Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannertexts: [
                {
                    //carousel text
                    title1: "Vintage by Vo",
                    description1: "Fashion from DEN <-> LAX, and beyond",
                    title2: "Loved Goods",
                    description2: "Looking for a new home",
                    title3: "Quality and care",
                    description3: "That's just how we do",
                }, {
                    //subbanner1
                    title: "",
                    description: ""
                }, {
                    //subbanner2
                    title: "",
                    description: ""
                }, {
                    //subbanner3
                    title: "",
                    description: ""
                }
            ],
            carousel: this.props.carousel,
            footerbanner: 3,
            subbanner: this.props.subbanner,
        }
    }
    render() {
        const { bannertexts, subbanner, carousel, footerbanner } = this.state;

        if (carousel) {
            return (
                <Container fluid>
                    <Carousel
                        className="carousel"
                        indicators={false}
                        prevIcon=""
                        nextIcon=""
                    >
                        <Carousel.Item>
                            <img
                                className="d-block tinted carousel-img"
                                src='./images/banner.jpg'
                                alt="First slide"
                                style={{ alignSelf: 'center' }}
                            />
                            <Carousel.Caption class="carousel-caption">
                                <h1>{bannertexts[0].title1}</h1>
                                <p>{bannertexts[0].description1}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block tinted carousel-img"
                                src="./images/banner1.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1>{bannertexts[0].title2}</h1>
                                <p>{bannertexts[0].description2}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block tinted carousel-img"
                                src="./images/banner2.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1>{bannertexts[0].title3}</h1>
                                <p>{bannertexts[0].description3}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            );
        } else if (subbanner === footerbanner) {
            return (
                <Container fluid>
                    <Row>
                        <Col />
                        <Col>
                            <div className="sectionspacer-half" />
                            <Carousel
                                className="footerbanner"
                                indicators={false}
                                prevIcon=""
                                nextIcon=""
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block tinted footerbanner-img"
                                        src={"./images/subbanner" + footerbanner + ".jpg"}
                                        alt="First slide"
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Carousel.Caption class="carousel-caption">
                                        <h1>{bannertexts[subbanner].title}</h1>
                                        <p>{bannertexts[subbanner].description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col />
                    </Row>
                </Container>
            );
        } else if (subbanner >= 0) {
            return (
                <Container fluid>
                    <Row>
                        <Col />
                        <Col>
                            <div className="sectionspacer-half" />
                            <Carousel
                                className="subbanner"
                                indicators={false}
                                prevIcon=""
                                nextIcon=""
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block tinted subbanner-img"
                                        src={"./images/subbanner" + subbanner + ".jpg"}
                                        alt="First slide"
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Carousel.Caption class="carousel-caption">
                                        <h1>{bannertexts[subbanner].title}</h1>
                                        <p>{bannertexts[subbanner].description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col />
                    </Row>
                </Container>
            );
        } else {
            return (
                <Image src="./images/banner.jpg" fluid />
            );
        }
    }
}