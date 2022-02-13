import { useState } from "react";
import Chart from "react-apexcharts";
import styles from "./Dashboard.module.css";
const StockAlerts = () => {
  const [state, setstate] = useState({
    series: [400, 430, 448],
    options: {
      labels: ["Self Combustion", "Improper Stocking", "Material Spreading"],
      chart: {
        type: "donut",
      },
      legend: {
        position: "right",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
          donut: {
            // size: "65%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: false,
                label: "Total",
                fontSize: "22px",
                fontFamily: "Copperplate",
                fontWeight: 600,
                color: "#373d3f",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return Math.round(val, 1) + "%";
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
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
        Stock Alerts
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="100%"
        height="250px"
      />
    </div>
  );
};

export default StockAlerts;
