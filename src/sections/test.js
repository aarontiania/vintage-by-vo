import React from 'react';
import CheckoutForm from './checkoutform';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import '../css/swipe.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IHE4ZG5UVkR5WFtwbNrpZInZ4UtAsKIqSEEPDx72hlFd5cvsMT3HaDVlUDz0iQoAHrBp23kwe7KqByK5V0BiKAJ00RkwA0Tyw');

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

const Test = () => {
    return (
        <div className="AppWrapper">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Test;