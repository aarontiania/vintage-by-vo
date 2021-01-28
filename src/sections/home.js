import '../css/App.css';
import Banner from './banner';
import { Component } from 'react';
import Designers from './designers';
import Collection from './collection';

export default class Home extends Component {
    render() {
        return (
            <>
                <Banner carousel />
                <Collection homepage products={this.props.products} isLoaded={this.props.isLoaded} />
                <Designers homepage products={this.props.products} isLoaded={this.props.isLoaded} />
            </>
        );
    }
}