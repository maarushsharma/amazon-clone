import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51K03G5SG08j4bTQQDTqzZ2WIaeSkZPXt2ZZj7OtmTGRCiyG3whpVj2MDbLCvUKMxsSV1IKG8nYc7oiNieR8BX22J00ImtBo3h3');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {

    //will only runs once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the authUser >>>', authUser);

      if (authUser) {
        //iss ka mtlb vo abhi hai

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //vo chala gaya or ye sab hoga reducer se

        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  })
  return (
    //BEM
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} element={<Header />}>

          </Route>
          <Route path="/Login" element={<Login />} element={<Header />}>

          </Route>
          <Route path="/Home" element={<Home />} element={<Header />}>

          </Route>
          <Route path="/Checkout" element={<Checkout />} element={<Header />}>

          </Route>
          <Route path="/Payment" element={<Header />} element={<Header />}>
            {/* <Elements stripe={promise}> element={<Payment />} </Elements> */}
            
          </Route>
          {/* <Route path={["/Home","/checkout"]} element={<Header/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
