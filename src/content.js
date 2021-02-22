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
            brands: [],
            testingenv: true // USE THIS TO SWITCH BETWEEN TESTING AND LIVE INFORMATION
        }
    }

    async componentDidMount() {
        // var ashdepop = "https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000";
        // var proxyurl = "https://cors-anywhere.herokuapp.com/";
        // var depopurl = ashdepop;

        if (!this.state.testingenv) {
            // Retrieve list of brands 
                //ex: { d: "Dior", lv: "Louis Vuitton"}
            // Load products for Collection page
            // Load brands to popiulate for Designers page
        } else {
            this.setState({
                isLoaded: true,
                products: [
                    {
                        "id": "e2qn4uijh",
                        "name": "Pochette Accessories",
                        "brand": "Louis Vuitton",
                        "brandTag": "lv",
                        "images": [
                            "./images/placeholderproducts/a1.jpg",
                            "./images/placeholderproducts/a2.jpg",
                            "./images/placeholderproducts/a3.jpg"
                        ],
                        "price": {
                            "price_amount": "350.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "4.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        },
                        "onsale": true,
                    },
                    {
                        "id": "spepmna4o",
                        "name": "Saddle Bag",
                        "brand": "Dior",
                        "brandTag": "d",
                        "images": [
                            "./images/placeholderproducts/c1.jpg",
                            "./images/placeholderproducts/c2.jpg",
                            "./images/placeholderproducts/c3.jpg"
                        ],
                        "price": {
                            "price_amount": "350.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "4.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        },
                        "onsale": true,
                    },
                    {
                        "id": "wtl8ptfqp",
                        "name": "Damier Ebene Canvas",
                        "brand": "Louis Vuitton",
                        "brandTag": "lv",
                        "images": [
                            "./images/placeholderproducts/b1.jpg",
                            "./images/placeholderproducts/b2.jpg",
                            "./images/placeholderproducts/b3.jpg"
                        ],
                        "price": {
                            "price_amount": "235.00",
                            "currency_symbol": "$",
                            "currency_name": "USD",
                            "international_shipping_cost": null,
                            "national_shipping_cost": "4.00",
                            "discounted_price_amount": null,
                            "discount_percentage": null
                        },
                        "onsale": true,
                    }
                ],
                brands: {
                    d: "Dior",
                    lv: "Louis Vuitton"
                }
            });
        }
    }

    render() {
        const { brands, products, isLoaded, testingenv } = this.state;
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
                                            return (<Home products={products} isLoaded={isLoaded} brands={brands} testingenv={testingenv} />)
                                        }} />
                                        <Route exact path='/#/' render={() => {
                                            return (<Home products={products} isLoaded={isLoaded} brands={brands} testingenv={testingenv} />)
                                        }} />
                                        <Route exact path='/collection' render={() => {
                                            return (<Collection products={products} brands={brands} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/designers' render={() => {
                                            return (<Designers products={products} brands={brands} isLoaded={isLoaded} />)
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