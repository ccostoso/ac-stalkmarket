import React from "react";
import Chart from "./../../components/Chart";
import InputForm from "./../../components/InputForm";
import "./style.css";

function Home(props) {
    return (
        <main className="row">
            <Chart 
                chartInfo={props.chartInfo}
            />
            <InputForm
                setChartInfo={props.setChartInfo}
                chartInfo={props.chartInfo}
            />
        </main>
    )
}

export default Home;