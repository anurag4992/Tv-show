import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "../styles.css";
import { useLocation, Link, } from "react-router-dom";


export default function Summary() {


  const location = useLocation();
  const state = location.state;

  return <div>
    <Header />
    <div className="container-fluid  summary-body">
      <div className="topic">
        <h1 className="summaryText">{state.name}</h1>
        <p className="summary">Imdb : {state.imdb}</p>
      </div>
        <Link className="btn btn-primary home-btn" to="/">Home</Link>
      
      <a className="btn btn-primary right" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Book movie ticket<a href="#fname" style={{display: "none"}}></a>
      </a>
      <p className="summary">{state.summary}</p>
      <div className="imgForm">
        <img src={state.img} className="card-img-top img" alt="Img" />
        
        <div className="forms">
      
      <div className="collapse" id="collapseExample">
        <div className="card card-body">

          <form>

            <h2 className="mb-3">Enter details</h2>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="fname" placeholder="Enter first name .." autoComplete="off" required/>
              <label htmlFor="floatingInput">Your first name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control"  id="lname" placeholder="Enter last name .." autoComplete="off" required/>
              <label htmlFor="floatingInput">Your last name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control"  id="email" placeholder="eg. name@example.com" autoComplete="off" required/>
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <label htmlFor="list" className="form-label">Choose movie</label>
            <input className="form-control" list="datalistOptions"  id="list" placeholder="Type to search..." required/>
            <datalist id="datalistOptions">
              <option value="Doomsday" />
              <option value="2012" />
              <option value="Captain America" />
              <option value="3 Idiots" />
              <option value="San andreas" />
            </datalist>
            <button style={{width: "100%"}} className="btn btn-primary mt-4">Submit</button>

          </form>

        </div>
      </div>
      </div>
    </div>
    
    </div>
    <Footer />
  </div>;

}
