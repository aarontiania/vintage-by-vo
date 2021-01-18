import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';

export default class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            depop: "Szphia",
            depopLink: "https://www.depop.com/products/",
            isLoaded: false,
            products: []
        }
    }

    async componentDidMount() {
        // var ashdepop = "https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000";
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var depopurl = "https://webapi.depop.com/api/v1/shop/21506652/products/?limit=1000"

        fetch(proxyurl + depopurl)
            .then(blob => blob.json())
            .then(data => {
                function chunker(arr, size) {
                    var myArray = [];
                    for (var i = 0; i < arr.length; i += size) {
                        myArray.push(arr.slice(i, i + size));
                    }
                    return myArray;
                }
                var chunkedproducts = chunker(data.products, 3);
                this.setState({
                    isLoaded: true,
                    products: chunkedproducts
                });
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    formatProductTitle(str) {
        return str.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(this.state.depop + " ", "");
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            return (
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Container fluid>
                        {
                            this.state.products.map((productChunk) => {
                                const productsCols = productChunk.map((product) => {
                                    if (product.price.status = "ONSALE") {
                                        return (
                                            <Col xs lg="2">
                                                <Image src={Object.values(product.preview)[5]}
                                                    className="productimg"
                                                    rounded />
                                                <br />
                                                <a href={this.state.depopLink + product.slug} target="_blank" className="productname">{this.formatProductTitle(product.slug)}</a>
                                                <br />
                                                <text className="productprice">{"$ " + product.price.price_amount}</text>
                                            </Col>
                                        );
                                    } else return;
                                });
                                return <Row className="justify-content-md-center">{productsCols}</Row>
                            })
                        }
                    </Container>
                </div>
            );
        }
    }
}
// "products":[
//     {"id":212493390,
//     "slug":"jazzyboo1-lululemon-black-lululemon-leggings-great",
//     "preview":
//         {
//             "150":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P2.jpg",
//             "210":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P4.jpg",
//             "320":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P5.jpg",
//             "480":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P6.jpg",
//             "640":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P1.jpg",
//             "960":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P7.jpg",
//             "1280":"https://d2h1pu99sxkfvn.cloudfront.net/b0/8275080/918669186_b2f630c3225d405fa64ccc2a6a30b4b0/P8.jpg"},
//     "has_video":false,
//     "price":
//         {
//             "price_amount":"80.00",
//             "currency_symbol":"$",
//             "currency_name":"USD",
//             "international_shipping_cost":"2.00",
//             "national_shipping_cost":"6.00",
//             "discounted_price_amount":null,
//             "discount_percentage":null},
//             "sold":false,
//             "status":"ONSALE"
//         },