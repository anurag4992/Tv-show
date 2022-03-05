import React, {useState} from "react";
import Header from "./Header";
import Card from "./Card";
import "../styles.css";
import { useLocation, Link, } from "react-router-dom";


export default function Summary() {

  const {obj, setObj}=useState({
    fname : "",
    lname: "",
    email: "",
    list: ""
  });
 

 function handleChange(event){
   const {name, value}=event.target;
   setObj((prevValue) => {
    return {...prevValue,
    [name]: value
    }
   })
  }


  function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem(fname, obj);
  }

  const location = useLocation();
  const state = location.state;

  return <div>
    <Header />
    <div className="container-fluid">
      <div className="container">
        <h1 className="summaryText">{state.name}</h1>
        <Link className="btn btn-primary text" to="/">Home</Link>
        <p className="summary">{state.summary}</p>
      </div>
      <div>
        <img src={state.img} className="card-img-top img" alt="Img" />
        <p className="summary">{state.imdb}</p>
      </div>
    </div>
    <div className="container">
      <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Book movie ticket
      </a>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">

          <form onSubmit={handleSubmit}>

            <h2 className="mb-3">Enter details</h2>
            <div className="form-floating mb-3">
              <input type="text" onChange={handleChange} value={obj.fname} name="fname" className="form-control" id="fname" placeholder="Enter first name .." autoComplete="off" required/>
              <label htmlFor="floatingInput">Your first name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" onChange={handleChange} value={obj.lname} name="lname" className="form-control"  id="lname" placeholder="Enter last name .." autoComplete="off" required/>
              <label htmlFor="floatingInput">Your last name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" onChange={handleChange} value={obj.email} name="email" className="form-control"  id="email" placeholder="eg. name@example.com" autoComplete="off" required/>
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <label htmlFor="list" className="form-label">Choose movie</label>
            <input className="form-control" onChange={handleChange} value={obj.list} name="list" list="datalistOptions"  id="list" placeholder="Type to search..." required/>
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

  </div>;

}
