import React from "react";
import "./styles.css";

const Coin = ({coins}) => {
    return (
        <div className="coin">
            <i className="fas fa-coins coin-image"></i>
            <span className="coin-value"> {coins}</span>
        </div>
    );
};

export default Coin;
