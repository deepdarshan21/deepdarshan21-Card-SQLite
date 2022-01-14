import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Coin from "./Coin";
import Logo from "./Logo";
import Image from "./Image";
import Text from "./Text";
import Button from "./Buttons";
import GetCardNo from "./GetCardNo";
import "./styles.css";

const Card = () => {
    const { cardNo } = useParams();

    const [card, setCard] = useState([]);
    useEffect(() => {
        // fetch card
        const fetchCards = async () => {
            // send POST request to /cards/getSpecific endpoint
            axios
                .put("https://cards-server-deepdarshan.herokuapp.com/card/getSpecific", {
                    no: cardNo,
                })
                .then((res) => {
                    setCard(res.data);
                    console.log("running");
                })
                .catch((error) => {
                    console.error(`There is error in retrieving card list: ${error}`);
                });
        };
        fetchCards();
    }, [cardNo]);

    const { coins, name, dob, logo1, logo2, image } = card;

    const shareData = {
        title: "Card",
        text: "Card Share made by Deepdarshan",
        url: `http://localhost:3000/card/${cardNo}`,
    };

    const share = async () => {
        if (navigator.share) {
            try {
                await navigator
                    .share(shareData)
                    .then(() =>
                        console.log("Hooray! Your content was shared to tha world")
                    );
            } catch (error) {
                console.log(`Oops! I couldn't share to the world because: ${error}`);
            }
        }
    };

    return (
        <div>
            {/* {console.log(this.props)} */}
            {/* {console.log(cardNo)} */}
            {/* {console.log(card.length)} */}
            {/* <GetCardNo /> */}
            {card.length === 0 && <p className="not-card">Card Not Available</p>}
            <div className="card">
                <div className="top">
                    <Logo number="1" logoLink={logo1} />
                    <Coin coins={coins} />
                </div>
                <Image imageLink={image} />
                <div className="identity">
                    <Text type="Name" value={name} />
                    <Text type="Birthday" value={dob} />
                </div>
                <Logo number="2" logoLink={logo2} />
            </div>
            <span onClick={share}>
                <Button
                    className="share"
                    icon={<i className="fas fa-share-alt icon"></i>}
                />
            </span>
            <Button onClick="/card/all" icon={<i className="fas fa-stream icon"></i>} />
            <Button onClick="/card/new" icon={<i className="fas fa-plus icon"></i>} />
        </div>
    );
};

export default Card;
