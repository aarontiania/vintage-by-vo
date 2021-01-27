import '../css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col, Spinner, Nav } from 'react-bootstrap';

export default class Designers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            depop: "Vintagebyvo",
            depopLink: "https://www.depop.com/products/",
            isLoaded: this.props.isLoaded,
            products: this.props.products
        }
    }

    formatProductTitle(str) {
        const { depop } = this.state;
        return str.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(depop + " ", "");
    }

    render() {
        const { isLoaded, products, depopLink } = this.state;
        if (!isLoaded) {
            return (
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            return (
                <div id="designers">
                    <h1 className="sectionheader">designers</h1>
                    <Container fluid>
                        <Link to="/vintage-by-vo/collection?b=lv">
                            <Image src="./images/lv-icon.jpg"
                                className="productimg"
                                rounded
                            />
                        </Link>
                    </Container>
                    <br />
                    <Nav.Link as={Link} to="/vintage-by-vo/collection?b=lv" className="productname">Louis Vuitton</Nav.Link>
                </div>
            );
        }
    }
}