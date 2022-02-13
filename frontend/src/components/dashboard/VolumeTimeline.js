import styles from "./Dashboard.module.css";
import Chart from "react-apexcharts";
import { useState } from "react";
const VolumeTimeline = () => {
    const [state] = useState({
        series: [
          {
            name: "ERP Data",  
            type: "column",
            data: [400, 430, 448, 470, 540, 580],
          },
          {
            name: "Drone Data",
            type: "column",
            data: [400, 430, 448, 470, 540, 580],
          },
          {
            name: "Deviation",
            type: "line",
            data: [100, 230, 248, 370, 240, 180],
          },
        ],
        
        options: {
            chart: {
                type: "line",
              },
              stroke: {
                  width: 4
              },
          colors: ["#418107", "#011026", "#0055ff"],
          dataLabels: {
            enabled: true,
            enabledOnSeries: [2],
          },
          labels: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb"
          ],
          xaxis: {
            // type: "datetime",
          },
          grid: {
            show: false,
          },
        },
      });
    
    return (
        <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Volume Timeline
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
    )
}

export default VolumeTimeline