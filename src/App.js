import React ,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from  "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./Firebase";



function App() {

const [{user},dispatch] = useStateValue();

useEffect(() => {
const unsubscribe = auth.onAuthStateChanged((authUser) => {
  if(authUser){
    //USER IS LOGGED IN 
    dispatch({
      type:"SET_USER",
      user:authUser,
    })
  }else{
    //user is logged out
    dispatch({
      type:"SET_USER",
      user:null,
    })
  }

})

return () => {
  //Any cleanup operations go here.
  unsubscribe();
};


},[]);

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/checkout">
    <Header />
    <Checkout />

    </Route>

    <Route path="/login">
    <Login />

    </Route>

    <Route path="/">
    <Header />
    <Home />
    </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
