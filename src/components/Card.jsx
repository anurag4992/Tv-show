import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Card(props) {

    let rating=props.data.rating.average;
    let comma=",";
    return <div className="card">
        
        <img src={props.data.image.medium} className="card-img-top img" alt="Img" />
        <div className="card-body">
            <h5 className="card-title text"><strong>{props.data.name}</strong></h5>
            <p className="card-text text">{props.data.genres[0]}{props.data.genres[1] && comma}{props.data.genres[1]}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item text">Premiered : {props.data.premiered}</li>
            <li className="list-group-item text">Rating : {rating==null ? "N/A" : rating}</li>
        </ul>
        
        <Link className="btn btn-primary text" to="/Summary" state={props.id}>See Summary</Link>
    
    </div>;

}