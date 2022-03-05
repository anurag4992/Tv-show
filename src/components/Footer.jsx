import React from "react";
import "../styles.css";

function Footer(){

    const dat=new Date().getFullYear();
    return <div className="footer">
        <h4 className="h4Footer">Made by Anurag</h4>
        <p className="pFooter">Copyright @{dat}</p>
    </div>;
}

export default Footer;