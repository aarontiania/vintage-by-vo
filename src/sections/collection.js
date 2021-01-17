import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col, Spinner } from 'react-bootstrap';

export default class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: []
        }
    }

    async componentDidMount() {
        // var ashdepop = "https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000";
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var depopurl = "https://webapi.depop.com/api/v1/shop/21506652/products/?limit=1000"

        fetch(proxyurl + depopurl)
            // .then(blob => blob.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    products: data.products
                });
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    render() {
        console.log(this.state.products);
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
            var columncounter = 0;
            return (
                <div id="collection">
                    <h1 className="sectionheader">collection</h1>
                    <Container>
                        {/* {
                            this.state.products.forEach(product => {
                                // console.log(product.preview[480])
                                <Image src={product.preview[480]} className="productimg" rounded />
                                
                            })
                        } */}
                    </Container>
                </div>
            );
        }
    }
}