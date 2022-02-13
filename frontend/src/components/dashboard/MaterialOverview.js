import styles from "./Dashboard.module.css";
import Chart from "react-apexcharts";
import { useState } from "react";
const MaterialOverview = () => {
  const [state] = useState({
    series: [
      {
        name: "ERP Data",  
        data: [400, 430, 448, 470, 540, 580],
      },
      {
        name: "Drone Data",
        data: [400, 430, 448, 470, 540, 580],
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      colors: ["#418107", "#011026"],
      plotOptions: {
        bar: {
        //   borderRadius: 4,
          horizontal: true,
        //   barHeight: "60%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Cement",
          "Iron-ore",
          "Coal"
        ],
      },
      grid: {
        show: false,
      },
    },
  });

  const data = [
    {
      name: "Starter Package",
      pv: 58,
    },
    {
      name: "Honeymoon Package",
      pv: 43,
    },
    {
      name: "Vacation Package",
      pv: 33,
    },
    {
      name: "Continental Package",
      pv: 29,
    },
    {
      name: "Spring Package",
      pv: 18.49,
    },
    {
      name: "All suite Package",
      pv: 16,
    },
  ];
  return (
    <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Material Overview
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default MaterialOverview;
