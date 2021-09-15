import React, { useState , useEffect } from 'react'
import {Step, StepLabel, Stepper } from '@material-ui/core'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Success from './Success'
import {commerce} from '.././lib/Commerce'
import { useHistory } from 'react-router-dom'



const Checkout = ({cart}) => {
    const steps = ['Shipping address','Payment details']
    const [activeStep,SetactiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData , setShippingData] = useState({})
    const history = useHistory();


    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={SubmitAddressForm}  /> : <PaymentForm checkoutToken={checkoutToken} Back={Back} />

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);
const Back = () => SetactiveStep(activeStep - 1)
const SubmitAddressForm = (data) => {
    setShippingData(data);
    SetactiveStep(activeStep + 1)
    
}

    return (
        <div className="checkout-page" >
            <h1>Checkout</h1>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <div className="stepper">
                            <Stepper activeStep={activeStep} >
                                {steps.map(step =>  (
                                    <Step key={step} >
                                        <StepLabel>
                                            {step}
                                        </StepLabel>
                                        
                                    </Step>
                                ) )}
                            </Stepper>
                        </div>
                        <div className="form" style={{color:'var(--secondary)'}}>
                            { activeStep === steps.length ? <Success /> : 
                            checkoutToken &&
                            <>
                            <Form />
                            </> 
                             
                             }
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
