import './css/App.css';
import Faq from './sections/faq';
import { Component } from 'react';
import Care from './sections/care';
import Home from './sections/home';
import About from './sections/about';
import Banner from './sections/banner';
import Contact from './sections/contact';
import { Spinner } from 'react-bootstrap';
import Shipping from './sections/shipping';
import Designers from './sections/designers';
import Collection from './sections/collection';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Test from './sections/test';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
            testingenv: false // USE THIS TO SWITCH BETWEEN TESTING AND LIVE INFORMATION
        }
    }

    async componentDidMount() {
        var ashdepop = "https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000";
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var depopurl = ashdepop;

        if (!this.state.testingenv) {
            fetch(proxyurl + depopurl)
                .then(blob => blob.json())
                .then(data => {

                    let availableProducts = []
                    data.products.forEach((item) => {
                        if (item.sold === false && item.status === "ONSALE") {
                            console.log(item)
                            availableProducts.push(item);
                        }
                    })

                    this.setState({
                        isLoaded: true,
                        products: availableProducts
                    });
                })
                .catch(e => {
                    console.log(e);
                    return e;
                });
        } else {
            this.setState({
                isLoaded: true,
                products: [
                    {
                        "id": 214613027,
                        "slug": "vintagebyvo-louis-vuitton-keypouch-damier-ebene",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "350.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        },
                        "sold": false, "status": "ONSALE"
                    },
                    {
                        "id": 214611620,
                        "slug": "vintagebyvo-louis-vuitton-pochette-accessoires",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "750.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        }, "sold": false, "status": "ONSALE"
                    }, {
                        "id": 215397628,
                        "slug": "vintagebyvo-dior-saddle-bag-test-test",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "999.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        }, "sold": false, "status": "ONSALE"
                    }, {
                        "id": 214613027,
                        "slug": "vintagebyvo-louis-vuitton-keypouch-damier-ebene",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927060766_e9dffe0f167545aa966c84903b53fe9b/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "350.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        },
                        "sold": false, "status": "ONSALE"
                    },
                    {
                        "id": 214611620,
                        "slug": "vintagebyvo-louis-vuitton-pochette-accessoires",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/927036956_8034a60203b44442a0795109176fab92/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "750.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        }, "sold": false, "status": "ONSALE"
                    }, {
                        "id": 215397628,
                        "slug": "vintagebyvo-dior-saddle-bag-test-test",
                        "preview": {
                            "150": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P2.jpg",
                            "210": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P4.jpg",
                            "320": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P5.jpg",
                            "480": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P6.jpg",
                            "640": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P1.jpg",
                            "960": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P7.jpg",
                            "1280": "https://d2h1pu99sxkfvn.cloudfront.net/b0/27178787/929212816_7a64d384ff5e458285d3c157bc3b2591/P8.jpg"
                        },
                        "has_video": false,
                        "price": {
                            "price_amount": "999.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "0.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        }, "sold": false, "status": "ONSALE"
                    }
                ]
            });
        }
    }

    render() {
        const { products, isLoaded, testingenv } = this.state;
        if (!isLoaded) {
            return (
                <div id="collection">
                    <Banner />
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <h1>Loading..</h1>
                </div>
            );
        } else {
            return (
                <div id="collection">

                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                timeout={300}
                                classNames='fade'
                                key={location.key}
                                exit={false}
                            >
                                <HashRouter>
                                    <Switch>
                                        <Route exact path='/' render={() => {
                                            return (<Home products={products} isLoaded={isLoaded} testingenv={testingenv} />)
                                        }} />
                                        <Route exact path='/#/' render={() => {
                                            return (<Home products={products} isLoaded={isLoaded} testingenv={testingenv} />)
                                        }} />
                                        <Route exact path='/collection' render={() => {
                                            return (<Collection products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/designers' render={() => {
                                            return (<Designers products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/about' render={() => {
                                            return (<About products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/care' render={() => {
                                            return (<Care products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/shipping' render={() => {
                                            return (<Shipping products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/faq' render={() => {
                                            return (<Faq products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/contact' render={() => {
                                            return (<Contact products={products} isLoaded={isLoaded} />)
                                        }} />

                                        <Route exact path='/testing' render={() => {
                                            return (<Test />)
                                        }} />

                                        <Route render={() => {
                                            return (
                                                <div>
                                                    <br />
                                                    <h1 className="sectionheader">page not found</h1>
                                                </div>
                                            )
                                        }} />
                                    </Switch>
                                </HashRouter>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </div >
            );
        }
    }
}