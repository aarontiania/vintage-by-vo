import Content from './content';
import { Component } from 'react';
import Footer from './sections/footer';
import Header from './sections/header-nav';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}