import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";
import "./styles.css";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        // fetch cards
        const fetchCards = async () => {
            // send GET request to /cards/all endpoint
            axios
                .get("https://cards-server-deepdarshan.herokuapp.com/card/all")
                .then((res) => {
                    setCards(res.data);
                    // console.log('running');
                })
                .catch((error) => {
                    console.error(`There is error in retrieving card list: ${error}`);
                });
        };
        fetchCards();
    }, []);

    return (
        <div>
            <h1>All Cards arranged by DOB</h1>
            <div className="cards">
                {/* {console.log(cards)} */}
                {cards.map(({ coins, name, dob, logo1, image, cardNo }) => (
                    <SmallCard
                        coins={coins}
                        name={name}
                        dob={dob}
                        logoLink={logo1}
                        imageLink={image}
                        cardNo={cardNo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
