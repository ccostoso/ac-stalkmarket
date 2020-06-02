import React from "react";
import InputCol from "./../InputCol";

function InputRow({ day, chartInfo, setChartInfo }) {
    return (
        <div className="row">
            <div className="col-md-2">
                <h6 className="mt-2">{day.slice(0, 3)}</h6>
            </div>

            <InputCol
                day={day}
                time={"Am"}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
            />

            <InputCol
                day={day}
                time={"Pm"}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
            />
        </div>
    )
}

export default InputRow;