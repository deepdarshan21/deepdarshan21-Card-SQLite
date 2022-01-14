import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const AddNew = () => {
    let navigate = useNavigate();

    let axiosConfig = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
    };

    const [logo1, setLogo1] = useState("");
    const [coin, setCoin] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [logo2, setLogo2] = useState("");
    const [data, setData] = useState({});
    const [submit, setSubmit] = useState(false);

    const addNewDB = () => {
        axios
            .post(
                "https://cards-server-deepdarshan.herokuapp.com/card/create",
                {
                    logo1: logo1,
                    coins: coin,
                    image: image,
                    name: name,
                    dob: dob,
                    logo2: logo2,
                },
                axiosConfig
            )
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
                setSubmit(true);
            })
            .catch((error) => {
                console.error(`Error in adding: ${error}`);
            });
    };

    const add = () => {
        addNewDB();
        // navigate("/card/all");
        handleInputsReset();
    };

    const view = () => {
        navigate("/card/all");
    };

    const handleInputsReset = () => {
        setLogo1("");
        setCoin("");
        setImage("");
        setName("");
        setDob("");
        setLogo2("");
    };

    return (
        <div className="add-new">
            {/* {console.log(data)} */}
            <div className="form">
                <label htmlFor="logo1">Logo1: </label>
                <input
                    type="text"
                    name="logo1"
                    value={logo1}
                    onChange={(e) => {
                        setLogo1(e.target.value);
                    }}
                    placeholder="Logo1 for Link"
                    className="inputs"
                />
                <br />
                <label htmlFor="coins">Coin: </label>
                <input
                    type="text"
                    name="coins"
                    value={coin}
                    onChange={(e) => {
                        setCoin(e.target.value);
                    }}
                    placeholder="Number of Coins"
                    className="inputs"
                />
                <br />
                <label htmlFor="image">Image: </label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                    placeholder="Image Link"
                    className="inputs"
                />
                <br />
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Your Name"
                    className="inputs"
                />
                <br />
                <label htmlFor="dob">DOB: </label>
                <input
                    type="text"
                    name="dob"
                    value={dob}
                    onChange={(e) => {
                        setDob(e.target.value);
                    }}
                    placeholder="Your Date of Birth"
                    className="inputs"
                />
                <br />
                <label htmlFor="logo2">Logo2: </label>
                <input
                    type="text"
                    name="logo2"
                    value={logo2}
                    onChange={(e) => {
                        setLogo2(e.target.value);
                    }}
                    placeholder="Link for Logo2"
                    className="inputs"
                />
                <br />
                {/* <input type="submit" value="Submit" /> */}
                <button className="form-submit" onClick={add}>
                    Submit
                </button>
            </div>
            {!submit && <p className="information">Please Add New Card</p>}
            {submit && (
                <p className="information">Card Submitted with cardNo:{data.cardNo}</p>
            )}
            <button className="all-cards" onClick={view}>
                View All Cards
            </button>
        </div>
    );
};

export default AddNew;
