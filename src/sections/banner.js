import '../css/App.css';
import { Component } from 'react';
import { Image, Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carousel: this.props.carousel
        }
    }
    render() {
        const { carousel } = this.state;

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
                                src="./images/banner.jpg"
                                alt="First slide"
                                style={{ alignSelf: 'center' }}
                            />
                            <Carousel.Caption class="carousel-caption">
                                <h1>Vintage by Vo</h1>
                                <p>{"Fashion from DEN <-> LAX, and beyond"}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block tinted carousel-img"
                                src="./images/banner1.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1>Loved Goods</h1>
                                <p>Looking for a new home</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block tinted carousel-img"
                                src="./images/banner2.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1>Quality and care</h1>
                                <p>That's just how we do</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            );
        }
        else {
            return (
                <Image src="./images/banner.png" fluid />
            );
        }
    }
}