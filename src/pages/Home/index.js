import React from "react";
import PriceChart from "../../components/PriceChart";
import InputForm from "./../../components/InputForm";
import Header from "../../components/Header";
import "./style.css";

function Home(props) {
    return (
        <div>
            <Header />
            <div className="container-fluid">

                <main className="row mb-4">
                    <InputForm
                        setChartInfo={props.setChartInfo}
                        chartInfo={props.chartInfo}
                    />
                    <PriceChart
                        chartInfo={props.chartInfo}
                    />
                </main>
                <footer className="row">
                    <section className="col">

                    </section>
                </footer>
            </div>
        </div>
    )
}

export default Home;