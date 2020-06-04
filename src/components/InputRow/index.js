import React from "react";
import InputCol from "./../InputCol";

function InputRow({ day, chartInfo, setChartInfo, dataCount, setDataCount, priceKeys }) {
    return (
        <div className="row">
            <div className="col-md-2">
                <h6 className="mt-2">{day.slice(0, 3)}</h6>
            </div>

            <InputCol
                day={day}
                time={"Am"}
                count={priceKeys[`${day.toLowerCase()}Am`]}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
                dataCount={dataCount}
                setDataCount={setDataCount}
            />

            <InputCol
                day={day}
                time={"Pm"}
                count={priceKeys[`${day.toLowerCase()}Pm`]}
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
                dataCount={dataCount}
                setDataCount={setDataCount}
            />
        </div>
    )
}

export default InputRow;