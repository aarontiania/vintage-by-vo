import '../css/App.css';
import { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default class TestingIndicator extends Component {
    render() {

        console.log(this.props.testingenv);

        if (this.props.testingenv) {
            return (
                <Breadcrumb>
                    <Breadcrumb.Item active>Currently using testing data</Breadcrumb.Item>
                </Breadcrumb>
            );
        } else {
            return null;
        }
    }
}