import React from "react";
import "./styles.css";

const Logo = ({ number, logoLink }) => {
    return (
        <div className={`logo-${number}`}>
            {number === "2" && <span className="powered-by">Powered By: </span>}
            <img src={logoLink} alt="Logo" className="logo" />
        </div>
    );
};

export default Logo;
