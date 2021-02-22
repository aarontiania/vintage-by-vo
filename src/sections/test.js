import React from 'react';
import CheckoutForm from './checkoutform';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../css/swipe.css';

import { Container, Row, Col, Image } from 'react-bootstrap';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

const Test = () => {
    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col sm={6}>
                    <Image src="https://i.pinimg.com/originals/19/d2/6d/19d26db81873bbcc57fe1d65f563f5b1.jpg"
                        className="generalimg"
                    />
                </Col>
                <Col sm={6}>
                    <div className="AppWrapper">
                        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Test;