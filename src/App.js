//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
import "./App.scss";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter} from "react-router-dom";
import Footer from "./Components/Footer"
import Services from "./Components/Services"
import Booking from  "./Components/Booking"
import Main from "./Components/Main"
import StepForm from "./Components/StepForm"
import Promo from "./Components/Promo"
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
// React Notification
import { NotificationManager } from 'react-notifications';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      email: '',
      contact:'', 
      id:'',
    };
  }

  
  componentDidMount() {
    if (this.state.logged_in) {
      axios.get('core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.data)
        .then(data => {
          this.setState({ username: data.username,
                          email : data.email,
                          contact: data.contact,
                          id: data.id
                         
          }           
            ); 
        });
    }
  }


  handle_login = (e, data) => {

    const options = {
      headers: {
          'Content-Type': 'application/json',
      }
    };
    
    // const data_string = JSON.stringify(data)
    e.preventDefault();
    axios.post('token-auth/', data,options)
      .then(res => {
        return res.data
      })
      .then(data => {
        NotificationManager.success('Login Successful!','Welcome!',5000)
        console.log(data,"test")
        localStorage.setItem('token', data.token);
        this.setState({
          logged_in: true,
          username: data.user.username,
          email : data.user.email,
          contact: data.user.contact,
          id: data.user.id
        });
      })
      .catch(err => {
        const error = err.response.data.non_field_errors[0]
        NotificationManager.error('Error Message',error,5000)
      });
  };

    handle_signup = (e, data) => {
      const options = {
        headers: {
            'Content-Type': 'application/json',
        }
      };
    e.preventDefault();
    axios.post('core/users/', data, options)
      .then(res => res.data
      )
      .then(data => {
        NotificationManager.success('Sign Up Successful!','Welcome',5000)
        localStorage.setItem('token', data.token);
        this.setState({
          logged_in: true,
          username: data.username,
          email : data.email,
          contact: data.contact,
          id: data.id
        });
      })
      .catch(err => {
        const error = err.response.data.password[0]
        console.log(error)
        NotificationManager.error('Error Message',error,5000)
      });
  };

  handle_logout = () => {
    NotificationManager.success('Logout Successful!','See You!',5000)
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', email : '',
    contact: '', id: '' });
  };
render(){
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar 
          logged_in={this.state.logged_in}
          handle_login={this.handle_login}
          handle_logout={this.handle_logout}
          handle_signup={this.handle_signup}
          username={this.state.username}
        />
            <Route exact path="/" component={Main} />
        <Layout>  
            <Route path="/Services" component={Services}/>
            <Route path="/Booking" exact render={() => <StepForm name={this.state.username} email={this.state.email} contact={this.state.contact} id={this.state.id} logged_in={this.state.logged_in}/>}/>
            <Route path="/Promo" component={Promo}/>
            <NotificationContainer />
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}
}
export default App;
