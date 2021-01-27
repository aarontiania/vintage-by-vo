import '../css/App.css';
import { Component } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Banner extends Component {

    render() {
        return (
            <div className="bannerpadding">
                <Image src="./images/banner.png" fluid />
            </div>
        );
    }
}