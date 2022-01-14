import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetCardNo = () => {
    let navigate = useNavigate();
    const [cardNo, setCardNo] = useState("");
    // const [value, setValue]=useState("");
    const search = () => {
        navigate(`card/${cardNo}`);
    };

    return (
        <div>
            <input
                type="text"
                value={cardNo}
                onChange={(e) => {
                    setCardNo(e.target.value);
                }}
            />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default GetCardNo;
