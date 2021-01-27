import './css/App.css';
import { Component } from 'react';
import Home from './sections/home';
import { Spinner } from 'react-bootstrap';
import Banner from './sections/banner'
import Designers from './sections/designers';
import Collection from './sections/collection';
import { Switch, Route } from 'react-router-dom';
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
                <main>
                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                timeout={300}
                                classNames='fade'
                                key={location.key}
                                exit={false}
                            >
                                <Switch>
                                    <Route exact path='/vintage-by-vo' render={() => {
                                        return (<Home products={products} isLoaded={isLoaded} />)
                                    }} />
                                    <Route exact path='/vintage-by-vo/collection' render={() => {
                                        return (<Collection products={products} isLoaded={isLoaded} />)
                                    }} />
                                    <Route exact path='/vintage-by-vo/designers' render={() => {
                                        return (<Designers products={products} isLoaded={isLoaded} />)
                                    }} />
                                    <Route render={() =>
                                        <div>
                                            <br />
                                            <h1 className="sectionheader">page not found</h1>
                                        </div>
                                    } />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </main >
            );
        }
    }
}