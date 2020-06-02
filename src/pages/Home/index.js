import React from "react";
import PriceChart from "../../components/PriceChart";
import InputForm from "./../../components/InputForm";
import "./style.css";

function Home(props) {
    return (
        <main className="row">
            <PriceChart 
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