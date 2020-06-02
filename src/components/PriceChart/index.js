import React from "react";
import { Line } from "react-chartjs-2";

function PriceChart({chartInfo}) {
    const dataState = {
        labels: ["Monday AM", "Monday PM", "Tuesday AM", "Tuesday PM", "Wednesday AM", "Wednesday PM", "Thursday AM", "Thursday PM", "Friday AM", "Friday PM", "Saturday AM", "Saturday PM",],
        datasets: [
            {
                label: 'Price',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [chartInfo.mondayAm, chartInfo.mondayPm, chartInfo.tuesdayAm, chartInfo.tuesdayPm, chartInfo.wednesdayAm, chartInfo.wednesdayPm, chartInfo.thursdayAm, chartInfo.thursdayPm, chartInfo.fridayAm, chartInfo.fridayPm, chartInfo.saturdayAm, chartInfo.saturdayPm]
            }
        ]
    }

    const determineTrend = () => {
        if (chartInfo.mondayAm > 99) {
            return "Random";
        }

        if (chartInfo.mondayAm > 50 && chartInfo <= 99) {
            if (
                (chartInfo.mondayAm > chartInfo.mondayPM)
                &&
                (chartInfo.mondayPM > chartInfo.tuesdayAm)
                &&
                (chartInfo.tuesdayAm > chartInfo.tuesdayPm)
                &&
                (chartInfo.tuesdayPm < chartInfo.wedensdayAm)
                ) {
                    return "Big Spike";
            } else if (
                (chartInfo.mondayAm > chartInfo.mondayPM)
                &&
                (chartInfo.mondayPM > chartInfo.tuesdayAm)
                &&
                (chartInfo.tuesdayAm > chartInfo.tuesdayPm)
                &&
                (chartInfo.tuesdayPm > chartInfo.wedensdayAm)
                &&
                (chartInfo.wedensdayAm < chartInfo.wednesdayPm)
             ) {
                    return "Small Spike";
            } else {
                return "Declining";
            }
        }

        return "Still unclear...";
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
                                }
                            }}
                        />
                        <br />
                        <br />
                        <h3 className="text-center">Trend is: {determineTrend()}</h3>
                        {JSON.stringify(chartInfo)}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PriceChart;