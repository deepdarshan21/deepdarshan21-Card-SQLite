import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Coin from "./Coin";
import Logo from "./Logo";
import Image from "./Image";
import Text from "./Text";
import "./styles.css";

const SmallCard = ({ coins, name, dob, logoLink, imageLink, cardNo }) => {
    // let navigate = useNavigate();

    const deleteRow = () => {
        // console.log(cardNo);
        axios
            .put("https://cards-server-deepdarshan.herokuapp.com/card/delete", {
                no: cardNo,
            })
            .then(() => {
                console.log(`Book Removed cardNo=${cardNo}`);
                // navigate("/card/all");
                window.location.reload();
            })
            .catch((error) => {
                console.error(`Error in Removing: ${error}`);
            });
    };
    return (
        <div className="small-card">
            <div className="top">
                <Logo number="1" logoLink={logoLink} />
                <Coin coins={coins} />
            </div>
            <span>{cardNo}</span>
            <Image imageLink={imageLink} />
            <div className="identity">
                <Text type="Name" value={name} />
                <Text type="Birthday" value={dob} />
            </div>
            <span onClick={deleteRow}>
                <i class="fas fa-trash remove"></i>
            </span>
        </div>
    );
};

export default SmallCard;
