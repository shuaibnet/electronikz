import React from 'react';



import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*1000;
    const publishableKey = 'pk_test_51HsY0ILVvigtMnMJgjx7emVkI52coJ1GkVzAoBsMzauOFpNRPVo82TwCNoWJTjjqQZIFFsKYwfj1DggkNkpJPpbn00EZuCKsRm';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (

        <StripeCheckout
        label= 'Pay Now'
        name= 'Electronikz GMBH'
        billingAddress
        shippingAddress
        image = 'https://freesvg.org/img/ernes_Euro.png'
        description={`Your total is €${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />

    );
};

export default StripeCheckoutButton;