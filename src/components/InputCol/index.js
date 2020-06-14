import React, { useState } from "react";

function InputCol({ day, time, chartInfo, setChartInfo, count, dataCount, setDataCount }) {
    const [price, setPrice] = useState("");

    const inputCheck = input => {
        if (typeof input !== "number") return false;
        if (isNaN(input)) return false;
        if (input < 0) return false;

        return true;
    }

    const handleClick = event => {
        const revInput = price.trim() === "" ? 0 : Math.floor(parseFloat(price));
        console.log(revInput);
        if (count > dataCount) return;
        if (inputCheck(revInput)) {
            setChartInfo(
                {
                    ...chartInfo,
                    prices: {
                        ...chartInfo.prices,
                        [day.toLowerCase()]: {
                            ...chartInfo.prices[day.toLowerCase()],
                            [time]: {
                                ...chartInfo.prices[day.toLowerCase()][time],
                                price: revInput
                            }
                        }
                    }
                }
            );
        } else {
            alert("Please insert a positive number.");
        }
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
                    className={`btn btn-outline-success ${(dataCount < count) && "disabled"}`}
                    type="button"
                    name={time && `${day.toLowerCase()}${time}`}
                    onClick={e => handleClick(e)}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default InputCol;