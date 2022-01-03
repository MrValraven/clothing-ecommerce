import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KDgVeLubVsyQOVUyaDPSFutrQal0er0hPPJ1zmF6HWTppoakCTursPk6rRMY2zfgTuK4V6duDQi1xWoiQvCFwDp00o1ONI2cY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment sucessfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
