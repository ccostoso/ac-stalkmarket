import React, { useState } from "react";

function InputCol({ day, time, chartInfo, setChartInfo, count, dataCount, setDataCount }) {
    const [price, setPrice] = useState("");

    function inputCheck(input) {
        const revInput = input.trim() === "" ? 0 : input;

        if (isNaN(revInput)) {
            return false;
        }

        if (revInput < 0) {
            return false;
        }

        return true;
    }

    return (
        <div className="input-group mb-3 col-5">
            <input
                type="text"
                className="form-control"
                placeholder={time && `${time.toUpperCase()} Price`}
                onChange={e => setPrice(e.target.value)}
            />
            <div className="input-group-append">
                <button
                    className={`btn btn-outline-success`}
                    type="button"
                    name={time && `${day.toLowerCase()}${time}`}
                    onClick={e => inputCheck(price) ? setChartInfo({ ...chartInfo, prices: {...chartInfo.prices, [day.toLowerCase()]: {...chartInfo.prices[[day.toLowerCase()]], [time.toLowerCase()]: price} }}) : alert("Please insert a positive number.")}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default InputCol;