import '../css/App.css';
import Banner from './banner';
import { Component } from 'react';
import Designers from './designers';
import Collection from './collection';
import TestingIndicator from './testingindicator';

export default class Home extends Component {
    render() {
        console.log(this.props.testingenv);
        return (
            <>
                <TestingIndicator testingenv={this.props.testingenv} />
                <h1>Heroku test</h1>
                <Banner carousel />
                <Banner subbanner={1} />
                <Collection homepage products={this.props.products} isLoaded={this.props.isLoaded} />
                <Banner subbanner={2} />
                <Designers homepage products={this.props.products} isLoaded={this.props.isLoaded} />
                <Banner subbanner={3} />
            </>
        );
    }
}