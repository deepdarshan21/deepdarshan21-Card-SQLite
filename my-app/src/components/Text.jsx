import React from "react";
import "./styles.css";

const Text = ({ type, value }) => {
    return (
        <div className="text">
            <spam className="type">{type}: </spam>
            <span className="value">{value}</span>
        </div>
    );
};

export default Text;
