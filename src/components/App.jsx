import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import "../styles.css";

export default function App() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then(response => {
                setShows(response.data);
            })
    }, [])

    return <div>
        <Header />
        <div className="all">
            {shows.map((item, i) => {
                console.log(i);
                return <div>
                    <Card key={i} id={i} data={item.show} />
                </div>;
            })}
        </div>
        <Footer />
    </div>;






}