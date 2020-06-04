import React, { useState, useEffect } from "react";
import InputRowSunday from "./../InputRowSunday";
import InputRow from "./../InputRow";

function InputForm({chartInfo, setChartInfo}) {
    const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const { prices } = chartInfo;
    const priceKeys = {
        sunday: 0,
        mondayAm: 1,
        mondayPm: 2,
        tuesdayAm: 3,
        tuesdayPm: 4,
        wednesdayAm: 5,
        wednesdayPm: 6,
        thursdayAm: 7,
        thursdayPm: 8,
        fridayAm: 9,
        fridayPm: 10,
        saturdayAm: 11,
        saturdayPm: 12,
    }

    // useEffect(() => {
    //     setDataCount(dataCount + 1);
    // }, []);

    const [dataCount, setDataCount] = useState(0);

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
                            dataCount={dataCount}
                            setDataCount={setDataCount}
                            priceKeys={priceKeys}
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
                                    priceKeys={priceKeys}
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