import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';

export default class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chunkSize: 3,
            depop: "Vintagebyvo",
            depopLink: "https://www.depop.com/products/",
            isLoaded: this.props.isLoaded,
            products: this.props.products,
            brandSpecified: this.getQueryStringValue('b'),
            brands: {
                lv: "Louis Vuitton"
            }
        }
    }

    chunker(arr, size) {
        var myArray = [];
        for (var i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i + size));
        }
        return myArray;
    }

    formatProductTitle(str, user) {
        return str.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(user + " ", "");
    }

    // eslint-disable-next-line
    formatProductTitle(str, user, brand) {
        return str.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(user + " ", "").replace(brand, "");
    }

    getQueryStringValue(key) {
        // eslint-disable-next-line
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    imageClick(link) {
        window.open(link);
    }

    searchBrandName(str, brand) {
        if (str.includes(brand)) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { chunkSize, isLoaded, products, depopLink, depop, brands, brandSpecified } = this.state;
        const { chunker, imageClick, formatProductTitle, searchBrandName } = this;

        if (!isLoaded) {// IF NOT LOADED

            return (
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );

        } else if (isLoaded && brandSpecified !== "") {//IF LOADED WITH SPECIFIED BRAND

            let specificItems = []

            products.forEach((product) => {
                if (product != null) {
                    let title = formatProductTitle(product.slug, depop);
                    if (searchBrandName(title, brands[brandSpecified])) {
                        specificItems.push(product);
                        console.log("pushed")
                    }
                }
            });

            var chunkedproducts = chunker(specificItems, chunkSize);

            return (
                <div id="collection">
                    <h2 className="sectionheader">{brands[brandSpecified]}</h2>
                    <h1 className="subheader">collection</h1>
                    <Container fluid>
                        {
                            chunkedproducts.map((productChunk) => {
                                const productsCols = productChunk.map((product) => {
                                    if (product.sold === false) {
                                        return (
                                            <Col xs lg="2">
                                                <Image src={Object.values(product.preview)[5]}
                                                    className="productimg"
                                                    rounded
                                                    onClick={() => imageClick(depopLink + product.slug)}
                                                />
                                                <br />
                                                <a href={depopLink + product.slug} target="_blank" rel="noreferrer" className="productname">{formatProductTitle(product.slug, depop, brands[brandSpecified])}</a>
                                                <br />
                                                <text className="productprice">{"$ " + product.price.price_amount}</text>
                                            </Col>
                                        );
                                    }
                                    else return null;
                                });
                                return <Row className="justify-content-md-center">{productsCols}</Row>
                            })
                        }
                    </Container>
                </div>
            );

        } else {//IF LOADED WITH NO SPECIFIED BRAND

            chunkedproducts = chunker(products, chunkSize);

            return (
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Container fluid>
                        {
                            chunkedproducts.map((productChunk) => {
                                const productsCols = productChunk.map((product) => {
                                    if (product.sold === false) {
                                        return (
                                            <Col xs lg="2">
                                                <Image src={Object.values(product.preview)[5]}
                                                    className="productimg"
                                                    rounded
                                                    onClick={() => imageClick(depopLink + product.slug)}
                                                />
                                                <br />
                                                <a href={depopLink + product.slug} target="_blank" rel="noreferrer" className="productname">{formatProductTitle(product.slug, depop)}</a>
                                                <br />
                                                <text className="productprice">{"$ " + product.price.price_amount}</text>
                                            </Col>
                                        );
                                    }
                                    else return null;
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
// {"id":212157839,
// "slug":"szphia-brandy-melville-john-galt-e9cd",
// "preview":{
//     "150":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P2.jpg",
//     "210":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P4.jpg",
//     "320":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P5.jpg",
//     "480":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P6.jpg",
//     "640":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P1.jpg",
//     "960":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P7.jpg",
//     "1280":"https://d2h1pu99sxkfvn.cloudfront.net/b0/21506652/917448197_5f68e1755f7e4c0386c23bfcf0b0b269/P8.jpg"
// },
// "has_video":
// false,
// "price":{
//     "price_amount":"20.00",
//     "currency_symbol":"$",
//     "currency_name":"USD",
//     "international_shipping_cost":null,
//     "national_shipping_cost":"4.00",
//     "discounted_price_amount":null,
//     "discount_percentage":null
// },
// "sold":true,
// "status":"PURCHASED"},