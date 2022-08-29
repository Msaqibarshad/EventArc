import React from "react";
import { Navbar } from "./Components/Landing-Page/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Birthday from "./Components/Orders/Birthday";
import Hybrid from "./Components/Orders/Hybrid";
import Meeting from "./Components/Orders/Meeting";
import Party from "./Components/Orders/Party";
import Photo from "./Components/Orders/Photo";
import Pool from "./Components/Orders/Pool";
import Wedding from "./Components/Orders/Wedding";
import MainOrder from "./Components/Orders/MainOrder";
import Customized from "./Components/Orders/Customized";
import Dashboard from "./Components/Dashboard/Dashboard";
import One_Two from "./Components/Orders/ForHybrid/One_Two";
import One_Three from "./Components/Orders/ForHybrid/One_Three";
import Two_Three from "./Components/Orders/ForHybrid/Two_Three";
import All from "./Components/Orders/ForHybrid/All";
import SignIn from "./Components/User/SignIn/SignIn";
import SignUp from "./Components/User/SignUp/SignUp";
import BirthdayCustom from "./Components/Orders/Customsetups/BirthdayCustom";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
// import Parent from "./Components/LearnProps/Parent";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/allsetups">
            <MainOrder />
          </Route>
          <Route exact path="/customize">
            <Customized />
          </Route>
          <Route exact path="/birthdaycustomize">
            <BirthdayCustom />
          </Route>
          <Route exact path="/customize">
            <Customized />
          </Route>
          <Route exact path="/customize">
            <Customized />
          </Route>
          <Route exact path="/birthday">
            <Birthday />
          </Route>
          <Route exact path="/hybrid">
            <Hybrid />
          </Route>
          <Route exact path="/meeting">
            <Meeting />
          </Route>
          <Route exact path="/party">
            <Party />
          </Route>
          <Route exact path="/photo">
            <Photo />
          </Route>
          <Route exact path="/pool">
            <Pool />
          </Route>
          <Route exact path="/wedding">
            <Wedding />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/first">
            <One_Two />
          </Route>
          <Route exact path="/second">
            <One_Three />
          </Route>
          <Route exact path="/three">
            <Two_Three />
          </Route>
          <Route exact path="/four">
            <All />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/Admin">
            <AdminDashboard/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
