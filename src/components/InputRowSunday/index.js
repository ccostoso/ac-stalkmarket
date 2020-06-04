import React, { useState } from "react";
// import InputCol from "./../InputCol";

function InputRowSunday({ day, chartInfo, setChartInfo }) {
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    return (
        <div className="row">
            <div className="col-md-2">
                <h6 className="mt-2">Sun</h6>
            </div>

            {/* Sunday Price */}
            <div className="input-group mb-3 col-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Start Price"
                    onChange={e => setPrice(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        name="sunday"
                        onClick={e => isNaN(parseInt(price)) ? alert("Must input a number") : setChartInfo({ ...chartInfo, prices: {...chartInfo.prices, [e.target.name]: price} })}
                    >
                        Add
                </button>
                </div>
            </div>

            {/* Sunday Quantity */}
            <div className="input-group mb-3 col-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Quantity"
                    onChange={e => setQuantity(e.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-success"
                        type="button"
                        name="quantity"
                        onClick={e => isNaN(parseInt(quantity)) ? alert("Must input a number") : setChartInfo({ ...chartInfo, [e.target.name]: quantity })}
                    >
                        Add
                </button>
                </div>
            </div>
        </div>
    )
}

export default InputRowSunday;