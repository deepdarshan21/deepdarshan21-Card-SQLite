import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Button = ({ icon, onClick }) => {
    let navigate = useNavigate();

    const click = () => {
        navigate(onClick);
    };

    return (
        <span className="button" onClick={click}>
            {icon}
        </span>
    );
};

export default Button;
