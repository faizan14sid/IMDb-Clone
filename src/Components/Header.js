import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link} from "react-router-dom";
import './component.css';
import userActions from '../redux/actions';
import {connect} from 'react-redux';

const { signout } = userActions;


class Header extends Component {

  handleSignOut = () => {
    this.props.signout();
  };
  render(){
    const {isAuth} = this.props;
  return (
        <header className="header">
            <Link
              to="/"
              style={{ color: "black", textDecoration: "inherit"}}
            >
              {" "}
              <IconButton
               style={{ edge:"start", borderRadius: "10px",
               color:"inherit",backgroundColor: "#f5c500"}}
               
              >
                IMDb
              </IconButton>
            </Link>
           
            <navbar className="navbar">
           <Link
              to="/trending"
              style={{ color: "#f5c518", textDecoration: "inherit" }}>
              <Button style={{ color: "inherit" }}>
                {" "}
                Trending{" "}
              </Button>
            </Link>
            <Link
              to="/watchlist"
              style={{ color: "#f5c518", textDecoration: "inherit" }}>
              <Button style={{ color: "inherit" }}>
                {" "}
                WatchList{" "}
              </Button>
            </Link>
            {isAuth ? (
            <Button style={{ color: "#f5c518" }} onClick={this.handleSignOut}>{" "}Signout{" "}</Button>
            ) : (
            <Link
              to="/signin"
              style={{ color: "#f5c518", textDecoration: "inherit" }}>
              <Button style={{ color: "inherit" }}>
                {" "}
                Signin{" "}
              </Button>
            </Link>
            )}
            <Link
              to="/signup"
              style={{ color: "#f5c518", textDecoration: "inherit" }}>
              <Button style={{ color: "inherit" }}>
                {" "}
                Signup{" "}
              </Button>
            </Link></navbar>
            </header>
  );
}};

export default connect(null, { signout })(Header);