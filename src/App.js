import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import Booking from "./Pages/Booking/Booking";
import AddService from "./Pages/AddService/AddService";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
