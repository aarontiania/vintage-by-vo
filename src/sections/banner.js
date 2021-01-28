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
                <Image src="./images/banner.jpg" fluid />
            );
        }
    }
}

// products: [
//     {
//         "id": 214613027,
//         "slug": "vintagebyvo-louis-vuitton-keypouch-damier-ebene",
//         "preview": {
//             "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P2.jpg",
//             "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P4.jpg",
//             "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P5.jpg",
//             "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P6.jpg",
//             "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P1.jpg",
//             "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P7.jpg",
//             "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P8.jpg"
//         },
//         "has_video": false,
//         "price": {
//             "price_amount": "350.00",
//             "currency_symbol": "$",
//             "currency_name": "USD",
//             "international_shipping_cost": null,
//             "national_shipping_cost": "0.00",
//             "discounted_price_amount": null,
//             "discount_percentage": null
//         },
//         "sold": false, "status": "ONSALE"
//     },
//     {
//         "id": 214611620,
//         "slug": "vintagebyvo-louis-vuitton-pochette-accessoires",
//         "preview": {
//             "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P2.jpg",
//             "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P4.jpg",
//             "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P5.jpg",
//             "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P6.jpg",
//             "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P1.jpg",
//             "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P7.jpg",
//             "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P8.jpg"
//         },
//         "has_video": false,
//         "price": {
//             "price_amount": "750.00",
//             "currency_symbol": "$",
//             "currency_name": "USD",
//             "international_shipping_cost": null,
//             "national_shipping_cost": "0.00",
//             "discounted_price_amount": null,
//             "discount_percentage": null
//         }, "sold": false, "status": "ONSALE"
//     }, {
//         "id": 215397628,
//         "slug": "vintagebyvo-dior-saddle-bag-test-test",
//         "preview": {
//             "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P2.jpg",
//             "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P4.jpg",
//             "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P5.jpg",
//             "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P6.jpg",
//             "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P1.jpg",
//             "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P7.jpg",
//             "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P8.jpg"
//         },
//         "has_video": false,
//         "price": {
//             "price_amount": "999.00",
//             "currency_symbol": "$",
//             "currency_name": "USD",
//             "international_shipping_cost": null,
//             "national_shipping_cost": "0.00",
//             "discounted_price_amount": null,
//             "discount_percentage": null
//         }, "sold": false, "status": "DELETED_ONSALE"
//     }
// ]