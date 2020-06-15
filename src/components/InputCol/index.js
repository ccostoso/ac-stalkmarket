import React, { useState } from "react";
import { prices } from "../../utils/chartInfoDefault";

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

        if (count > dataCount) return;
        revInput === 0 && handleZero();
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

    const handleZero = () => {
        const keyArr = [
            [0, "sunday"],
            [1, "monday", "am"],
            [2, "monday", "pm"],
            [3, "tuesday", "am"],
            [4, "tuesday", "pm"],
            [5, "wednesday", "am"],
            [6, "wednesday", "pm"],
            [7, "thursday", "am"],
            [8, "thursday", "pm"],
            [9, "friday", "am"],
            [10, "friday", "pm"],
            [11, "saturday", "am"],
            [12, "saturday", "pm"]
        ]

        if (count < dataCount) {
            for (let i = count; i <= 12; i++) {
                const newChartInfo = chartInfo;
                newChartInfo.prices[keyArr[i][1]][keyArr[i][2]].price = 0;
                setChartInfo(newChartInfo)
                console.log("i price after setChartInfo:", chartInfo.prices[keyArr[i][1]][keyArr[i][2]].price)
            }
            console.log(chartInfo);

            setDataCount(count - 1);
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