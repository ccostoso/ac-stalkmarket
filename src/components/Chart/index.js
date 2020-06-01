import React from "react";

function Chart(props) {
    return (
        <section className="col-md-7">
            <div className="container">
                <article className="card border-rounded">
                    <div className="card-body">
                        Chart goes here.
                        <br />
                        <br />
                        {JSON.stringify(props.chartInfo)}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Chart;