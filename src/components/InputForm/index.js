import React from "react";
import InputRow from "./../InputRow";

function InputForm(props) {
    const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <section className="col-md-5">
            <div className="container">
                <article className="card border-rounded">
                    <div className="card-body">
                        <h4 className="text-center">Add Data</h4>
                        <form>
                        {daysArr.map(day => {
                            return (
                                <InputRow
                                    day={day}
                                    key={day}
                                    setChartInfo={props.setChartInfo}
                                    chartInfo={props.chartInfo}
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