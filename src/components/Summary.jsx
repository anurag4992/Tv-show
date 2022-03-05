import React from "react";
import Header from "./Header";
import Card from "./Card";
import "../styles.css";
import {useLocation, Link} from "react-router-dom";



export default function Summary(props) {
const location=useLocation();
const state=location.state;
  console.log(state);

    return <div>
        <Header />
        
        <Link className="btn btn-primary text" to="/">Home</Link>
    </div>;

}