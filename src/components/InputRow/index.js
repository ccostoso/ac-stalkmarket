import React from "react";
import InputCol from "./../InputCol";

function InputRow({ day, chartInfo, setChartInfo, dataCount, setDataCount }) {
    return (
        <div className="row">
            <div className="col-md-2">
                <h6 className="mt-2">{day.slice(0, 3)}</h6>
            </div>

            <InputCol
                day={day}
                time={"am"}
                count={chartInfo.prices[`${day.toLowerCase()}`].am.key}
                dataCount={dataCount}
                setDataCount={setDataCount}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
            />

            <InputCol
                day={day}
                time={"pm"}
                count={chartInfo.prices[`${day.toLowerCase()}`].pm.key}
                dataCount={dataCount}
                setDataCount={setDataCount}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
            />
        </div>
    )
}

export default InputRow;