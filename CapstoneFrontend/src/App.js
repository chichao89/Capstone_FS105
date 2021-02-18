//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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



function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar />
            <Route exact path="/" component={Coffee} />
        <Layout>  
            {/* <Route path="/Story" component={Story} />
            <Route path="/Shop" component={Coffee} />
            <Route path="/Locate" component={Locate} />
            <Route path="/Cart"  component={Cart}/> */}
            <Route path="/Services" component={Services}/>
            <Route path="/Booking" component={Booking}/>
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}

export default App;
