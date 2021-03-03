import React, { Component } from 'react';
import Booking from './Booking';
import CheckOut from './CheckOut';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class StepForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        step: 1,
        // step 1
        selectedDate: new Date(),
        selectedTimeslot: null,
        selectedService: null,
        //used to display
        timeslot: [],
        services: [],
        discountedPrice: [],
        // step 2
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }
    //step next
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //step back
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
//handledatechange
    handleDateChange(e) {
         this.setState({selectedDate: e});
         let dateString = new Date(e.getTime() - (e.getTimezoneOffset() * 60000 ))
         .toISOString()
         .split("T")[0];
    // API call to get available times for selected date
      axios.get('api/SlotsAPI/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        params: {
          date: dateString
        }
      }).then(res => {
        this.setState({ timeslot: res.data })
      })
    }

    //timeslot
    handleSelectTimeslot = (timeslot) => {
        this.setState({selectedTimeslot: timeslot
     })
   }

   //service
   handleSelectService = (service) => {
      this.setState({selectedService: service
    })
  }

  async  componentDidMount() {
    // API call to get all services
     axios.get('api/ServiceNailAPI/').then((res) => {
      const services = res.data;
      this.setState({ services });
    });

    axios.get('api/PromotionAPI/').then((res) => {
      const discountedPrice = res.data;
      this.setState({ discountedPrice });
      console.log(discountedPrice)
    });

    // API call to get available times for selected date
    let dateString = new Date(this.state.selectedDate.getTime() - (this.state.selectedDate.getTimezoneOffset() * 60000 ))
    .toISOString()
    .split("T")[0];
    axios.get('api/SlotsAPI/', {
      // headers: {
      //   Authorization: `JWT ${localStorage.getItem('token')}`,
      // },
      params: {
        date: dateString
      }
    }).then(res => {
      this.setState({ timeslot: res.data })
      console.log(res);
    })
  }

    showStep = () => {
        const { step, selectedDate, selectedTimeslot,selectedService, timeslot,services,discountedPrice} = this.state;

        if(step === 1)
            return (<Booking 
                nextStep = {this.nextStep} 
                handleDateChange = {this.handleDateChange}
                handleSelectTimeslot = {this.handleSelectTimeslot}
                handleSelectService = {this.handleSelectService}
                selectedDate={selectedDate} 
                selectedTimeslot={selectedTimeslot}
                selectedService={selectedService}
                timeslot = {timeslot}
                services = {services}
                logged_in = {this.props.logged_in}
                discountedPrice = {discountedPrice}
            />);
        if(step === 2)
            return (<CheckOut 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                selectedDate={selectedDate} 
                selectedTimeslot={selectedTimeslot}
                selectedService={selectedService}
                timeslot =  {timeslot}
                services = {services}
                email = {this.props.email}
                id = {this.props.id}
                contact={this.props.contact}
                name = {this.props.name}
                logged_in = {this.props.logged_in}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                
                {this.props.logged_in === false ? (null) 
                :(<h2>Step {step} of 2.</h2>
                  )
                }
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;