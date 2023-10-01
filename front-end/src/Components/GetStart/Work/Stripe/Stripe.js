// Stripes.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import "./Stripe.css"

const Stripes = ({ handlePayment }) => {
  const publishableKey = "pk_test_51Nf7KvLNc8y93iWIVFsfV3MFrITbzydo4E7qSY6A1MREVVg8PssfUVGPqUxkMhcV3D7dCnaPR2DWDtYGQolX499f00W20xvDlq";

  const onToken = (token) => {
    handlePayment(token); // Pass the token to the parent component for processing
  }

  return (
    <div className='stripePay'>
      <StripeCheckout
        stripeKey={publishableKey}
        token={onToken}
        className="pau"
      />
    </div>
  );
};

export default Stripes;
