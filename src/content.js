import './css/App.css';
import { Component } from 'react';
import Home from './sections/home';
import { Spinner } from 'react-bootstrap';
import Banner from './sections/banner'
import Designers from './sections/designers';
import Collection from './sections/collection';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: []
        }
    }

    async componentDidMount() {
        var ashdepop = "https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000";
        //var testdepop = "https://webapi.depop.com/api/v1/shop/21506652/products/?limit=1000";
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var depopurl = ashdepop;

        fetch(proxyurl + depopurl)
            .then(blob => blob.json())
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
        const { products, isLoaded } = this.state;
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
                                            return (<Home products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/#/' render={() => {
                                            return (<Home products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/collection' render={() => {
                                            return (<Collection products={products} isLoaded={isLoaded} />)
                                        }} />
                                        <Route exact path='/designers' render={() => {
                                            return (<Designers products={products} isLoaded={isLoaded} />)
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
                    {/* {/* {console.log(window.location.hash)} */}
                    {/* {console.log("/vintage-by-vo/#" + window.location.href.split('/#')[1])} */}
                    {/* {console.log("/vintage-by-vo/" + window.location.hash)} */}
                    {/* <Redirect to={"/vintage-by-vo/" + window.location.hash} /> */}
                    {/* <Redirect to={"/vintage-by-vo/#"} /> */}

                </div >
            );
        }
    }
}