//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
import "./App.scss";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter} from "react-router-dom";
//import Story from "./Components/Story";
import Coffee from "./Components/Coffee";
//import Locate from "./Components/Locate";
import Footer from "./Components/Footer"
//import Cart from "./Components/Cart"
import Services from "./Components/Services"
import Booking from  "./Components/Booking"



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
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
          this.setState({ username: json.username });
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
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.user.username 
        });
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
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.username
        });
      });
  };

  handle_logout = () => {
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
        {/* <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3> */}
            <Route exact path="/" component={Coffee} />
        <Layout>  
            <Route path="/Services" component={Services}/>
            <Route path="/Booking" component={Booking}/>
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}
}
export default App;
