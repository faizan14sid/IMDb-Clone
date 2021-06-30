import React,{Component} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
import Trending from "./Components/Trending";
import WatchList from "./Components/WatchList";
import {connect} from 'react-redux';

function PrivateRouter ({isAuth, component: Component, ...rest}) {
  return (
   <Route {...rest} 
  render={(props)=>{
     if(isAuth) return <Component {...props}/> ;
      
      return <Redirect to="/signin"/>
      
  }}
  />
  );
};

class App extends Component{
  render(){
    const { isAuth } = this.props;
  return (
    <BrowserRouter>
      <div className="App">
        <Header isAuth={isAuth}/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <PrivateRouter
            path="/watchlist"
            component={WatchList}
            isAuth={isAuth}
          />
          <Route
            path="/signin"
            render={(props) => {
              if (!isAuth) return <SignIn {...props} />;
              return <Redirect to="/" />;
            }}
          />
          
          <Route path="/signup" component={SignUp} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}};

function mapStateToProps(state) {
  const { isAuth } = state;
  return { isAuth };
}
export default connect(mapStateToProps)(App);

