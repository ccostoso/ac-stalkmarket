import React, { useState } from "react";

function InputCol({ day, time, chartInfo, setChartInfo }) {
    const [price, setPrice] = useState("");

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
                    className="btn btn-outline-success"
                    type="button"
                    name={time && `${day.toLowerCase()}${time}`}
                    onClick={e => isNaN(parseInt(price)) ? alert("Must input a number") : setChartInfo({ ...chartInfo, [e.target.name]: price })}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default InputCol;