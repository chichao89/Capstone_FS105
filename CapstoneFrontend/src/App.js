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

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
// React Notification
import { NotificationManager } from 'react-notifications';



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
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username,
                          email : json.email,
                          contact: json.contact,
                          id: json.id
                         
          }           
            ); 
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status != 200) {
          return Promise.reject(new Error('Login Failed'));
        }

        return res.json()
      })
      .then(json => {
        NotificationManager.success('Login Successful!','Welcome!',5000)
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.user.username
        });
      })
      .catch(err => {
        NotificationManager.error('Error Message',err.message,5000)
      });
  };

    handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json() 
        // if (res.status !== 200) {
        //   return Promise.reject(new Error('Login Fail, Please check your data!'));
        // }
      )
      .then(json => {
        NotificationManager.success('Sign Up Successful!','Welcome',5000)
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.username
        });
      })
      // .catch(err => {
      //   NotificationManager.error('Error Message',err.message,5000)
      // });
  };

  handle_logout = () => {
    NotificationManager.success('Logout Successful!','See You!',5000)
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
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
            <Route path="/Booking" exact render={() => <StepForm name={this.state.username} email={this.state.email} contact={this.state.contact} id={this.state.id}/>}/>
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
