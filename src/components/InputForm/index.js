import React, { useState, useEffect } from "react";
import InputRowSunday from "./../InputRowSunday";
import InputRow from "./../InputRow";

function InputForm({ chartInfo, setChartInfo }) {
    const { prices } = chartInfo;
    const pricesObj = {
        0: parseInt(prices.sunday.price),
        1: parseInt(prices.monday.am.price),
        2: parseInt(prices.monday.pm.price),
        3: parseInt(prices.tuesday.am.price),
        4: parseInt(prices.tuesday.pm.price),
        5: parseInt(prices.wednesday.am.price),
        6: parseInt(prices.wednesday.pm.price),
        7: parseInt(prices.thursday.am.price),
        8: parseInt(prices.thursday.pm.price),
        9: parseInt(prices.friday.am.price),
        10: parseInt(prices.friday.pm.price),
        11: parseInt(prices.saturday.am.price),
        12: parseInt(prices.saturday.pm.price),
    }
    const pricesArr = Object.values(pricesObj);

    const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let lastPriceIdx = pricesArr.indexOf(pricesArr.find(ele => ele === 0)) >= 0 ? pricesArr.indexOf(pricesArr.find(ele => ele === 0)) : pricesArr.length - 1;
    const [dataCount, setDataCount] = useState(lastPriceIdx);
    useEffect(() => {
        setDataCount(lastPriceIdx);
    }, [lastPriceIdx])

    return (
        <section className="col-md-5">
            <div className="container">
                <article className="card border-rounded">
                    <div className="card-body">
                        <h4 className="text-center">Add Data</h4>
                        <form>
                            <InputRowSunday
                                chartInfo={chartInfo}
                                setChartInfo={setChartInfo}
                            />
                            <hr />
                            {daysArr.map(day => {
                                return (
                                    <InputRow
                                        day={day}
                                        key={day}
                                        chartInfo={chartInfo}
                                        setChartInfo={setChartInfo}
                                        dataCount={dataCount}
                                        setDataCount={setDataCount}
                                    />
                                )
                            })}
                        </form>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default InputForm;