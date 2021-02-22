import '../css/App.css';
import Banner from './banner';
import { Component } from 'react';
import Designers from './designers';
import Collection from './collection';
import TestingIndicator from './testingindicator';

export default class Home extends Component {
    render() {
        return (
            <>
                <TestingIndicator testingenv={this.props.testingenv} />
                <Banner carousel />
                <Banner subbanner={1} />
                <Collection homepage products={this.props.products} brands={this.props.brands} isLoaded={this.props.isLoaded} />
                <Banner subbanner={2} />
                <Designers homepage products={this.props.products} brands={this.props.brands} isLoaded={this.props.isLoaded} />
                <Banner subbanner={3} />
            </>
        );
    }
}