import '../css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Spinner, Nav, Button } from 'react-bootstrap';

export default class Designers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chunkSize: 3,
            depop: "Vintagebyvo",
            isLoaded: false,
            homepage: this.props.homepage,
            products: this.props.products,
            brands: {
                d: "Dior",
                lv: "Louis Vuitton"
            },
            brandsToPopulate: []
        }
    }

    async componentDidMount() {

        const { brands, products } = this.state;

        let brandArr = []
        products.forEach((item) => {
            brandArr.push(this.formatProductTitle(item.slug))
        });

        let arr = []
        Object.values(brands).forEach((brandName) => {
            if (brandArr.find(a => a.includes(brandName))) {
                arr.push(brandName);
            }
        });

        arr.sort();

        this.setState({
            isLoaded: true,
            brandsToPopulate: arr
        });
    }

    chunker(arr, size) {
        var myArray = [];
        for (var i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i + size));
        }
        return myArray;
    }

    formatProductTitle(str) {
        const { depop } = this.state;
        return str.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(depop + " ", "");
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    render() {

        const { isLoaded, brands, brandsToPopulate, chunkSize, products, homepage } = this.state;
        const { chunker, getKeyByValue } = this;

        if (!isLoaded) {
            return (
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else if (brandsToPopulate == null && products.length !== 0) {
            return (
                <div id="designers">
                    <h1 className="sectionheader">please check "collection" to see all products</h1>
                </div>
            );
        } else if (products.length === 0) {
            return (
                <div id="designers">
                    <div className="sectionspacer" />
                    <h1 className="sectionheader">no items for now, check back soon!</h1>
                </div>
            );
        } else if (homepage) {

            var chunkedproducts = chunker(brandsToPopulate, chunkSize);
            var countdown = chunkSize;

            return (
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Container fluid>
                        {
                            chunkedproducts.map((productChunk) => {
                                const productsCols = productChunk.map((product) => {

                                    if (product !== null && countdown !== 0) {
                                        let brandTag = getKeyByValue(brands, product);
                                        return (
                                            <Col xs lg="2">
                                                <Link to={"/collection?b=" + brandTag}>
                                                    <Image src={"./images/" + brandTag + "-icon.jpg"}
                                                        className="productimg"
                                                        rounded
                                                    />
                                                </Link>
                                                <Nav.Link as={Link} to={"/collection?b=" + brandTag} className="productname">{product}</Nav.Link>
                                            </Col>
                                        );
                                    }
                                    else return null;
                                });
                                return <Row className="justify-content-md-center">{productsCols}</Row>
                            })
                        }

                        <Link to="/collection">
                            <Button bsPrefix="custom-btn" variant="viewmore">View more</Button>
                        </Link>
                    </Container>
                    <br />
                </div>
            );
        } else {

            chunkedproducts = chunker(brandsToPopulate, chunkSize);

            return (
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Container fluid>
                        {
                            chunkedproducts.map((productChunk) => {
                                const productsCols = productChunk.map((product) => {
                                    if (product !== null) {

                                        let brandTag = getKeyByValue(brands, product);

                                        return (
                                            <Col xs lg="2">
                                                <Link to={"/collection?b=" + brandTag}>
                                                    <Image src={"./images/" + brandTag + "-icon.jpg"}
                                                        className="productimg"
                                                        rounded
                                                    />
                                                </Link>
                                                <Nav.Link as={Link} to={"/collection?b=" + brandTag} className="productname">{product}</Nav.Link>
                                            </Col>
                                        );
                                    }
                                    else return null;
                                });
                                return <Row className="justify-content-md-center">{productsCols}</Row>
                            })
                        }
                    </Container>
                    <br />
                </div>
            );
        }
    }
}