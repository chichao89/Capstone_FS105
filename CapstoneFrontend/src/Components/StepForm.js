import React, { Component } from 'react';
import Booking from './Booking';
import CheckOut from './CheckOut';


class StepForm extends Component {
    state = {
        step: 1
        // step 1
        
        // step 2
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step } = this.state;

        if(step === 1)
            return (<Booking 
                nextStep = {this.nextStep} 
                // handleChange = {this.handleChange} 
                // firstName={firstName} 
                // lastName={lastName}
            />);
        if(step === 2)
            return (<CheckOut 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                // handleChange = {this.handleChange} 
                // jobTitle={jobTitle} 
                // jobCompany={jobCompany}
                // jobLocation={jobLocation}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;