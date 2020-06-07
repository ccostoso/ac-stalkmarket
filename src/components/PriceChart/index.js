import React from "react";
import { Line } from "react-chartjs-2";
import calculate from "./../../utils/calculate";

function PriceChart({chartInfo}) {
    const { quantity, prices } = chartInfo;

    const pricesObj = {
        0: parseInt(prices.sunday),
        1: parseInt(prices.monday.am),
        2: parseInt(prices.monday.pm),
        3: parseInt(prices.tuesday.am),
        4: parseInt(prices.tuesday.pm),
        5: parseInt(prices.wednesday.am),
        6: parseInt(prices.wednesday.pm),
        7: parseInt(prices.thursday.am),
        8: parseInt(prices.thursday.pm),
        9: parseInt(prices.friday.am),
        10: parseInt(prices.friday.pm),
        11: parseInt(prices.saturday.am),
        12: parseInt(prices.saturday.pm),
    }

    const pricesArr = Object.values(pricesObj);
    let initialPurchase = quantity * prices.sunday;
    let lastPriceIdx = pricesArr.indexOf(pricesArr.find(ele => ele === 0)) >= 0 ? pricesArr.indexOf(pricesArr.find(ele => ele === 0)) - 1 : pricesArr.length - 1;

    const dataState = {
        labels: ["Sunday", "Monday AM", "Monday PM", "Tuesday AM", "Tuesday PM", "Wednesday AM", "Wednesday PM", "Thursday AM", "Thursday PM", "Friday AM", "Friday PM", "Saturday AM", "Saturday PM",],
        datasets: [
            {
                label: 'Price',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: pricesArr,
            }
        ]
    }

    const answerArr = calculate.analyze(pricesArr);
    console.log("answerArr", answerArr);

    const determineTrend = () => {
        if (prices.monday.am > 99) {
            return "Random";
        }

        if (prices.monday.am > 50 && chartInfo <= 99) {
            if (
                (prices.monday.am > prices.monday.pm)
                &&
                (prices.monday.pm > prices.tuesday.am)
                &&
                (prices.tuesday.am > prices.tuesday.pm)
                &&
                (prices.tuesday.pm < prices.wedensday.am)
                ) {
                    return "Big Spike";
            } else if (
                (prices.monday.am > prices.monday.pm)
                &&
                (prices.monday.pm > prices.tuesday.am)
                &&
                (prices.tuesday.am > prices.tuesday.pm)
                &&
                (prices.tuesday.pm > prices.wedensday.am)
                &&
                (prices.wedensday.am < prices.wednesday.pm)
             ) {
                    return "Small Spike";
            } else {
                return "Declining";
            }
        }

        return "Still unclear...";
    }

    const findProfit = () => {
        return (pricesArr[lastPriceIdx] * quantity) - initialPurchase;
    }

    return (
        <section className="col-md-7">
            <div className="container">
                <article className="card border-rounded">
                    <div className="card-body">
                        <Line
                            data={dataState}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Turnip Prices',
                                    fontSize: 20
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                },
                                scales: {
                                    yAxes: [{
                                        tikcs: {
                                            suggestedMin: 0,
                                        }
                                    }]
                                }
                            }}
                        />
                        <br />
                        <br />
                        <h3 className="text-center">Trend is: {determineTrend()}</h3>
                        <h4 className="text-center">If you sell now, you {findProfit() >= 0 ? "will gain" : "will lose"} {findProfit()} Bells.</h4>
                        {JSON.stringify(chartInfo)}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PriceChart;