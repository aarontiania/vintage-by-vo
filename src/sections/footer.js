import '../css/App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
    render() {
        return (
            <hr
                style={{
                    color: '#C7B49F',
                    backgroundColor: 'inherit',
                    height: 20
                }}
            />
        );
    }
}
