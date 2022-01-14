import React from "react";
import "./styles.css";

const Image = ({imageLink}) => {
    return (
        <div className="image">
            <img
                src={imageLink}
                alt="Main"
                className="main-image"
            />
        </div>
    );
};

export default Image;
