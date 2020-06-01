import React, { useState } from "react";
import InputCol from "./../InputCol";

function InputRow(props) {
    const [dayInfo, setDayInfo] = useState({});

    return (
        <div>
            <div className="row fluid">
                <div className="col text-center">
                    <h6>{props.day}</h6>
                </div>
            </div>

            <div className="row">
                <InputCol 
                    day={props.day}
                    time={"Am"}
                    setChartInfo={props.setChartInfo}
                    chartInfo={props.chartInfo}
                />
                <InputCol 
                    day={props.day}
                    time={"Pm"}
                    setChartInfo={props.setChartInfo}
                    chartInfo={props.chartInfo}
                />
            </div>
        </div>
    )
}

export default InputRow;