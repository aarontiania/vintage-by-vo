import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

export default class Banner extends Component {
    render() {
        return (
            <div className="bannerpadding">
                <Image src="./images/banner.png" fluid />
            </div>
        );
    }
}