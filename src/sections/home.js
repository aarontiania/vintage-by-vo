import Banner from './banner';
import { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <h1>THIS IS THE HOME PAGE</h1>
            </div>
        );
    }
}