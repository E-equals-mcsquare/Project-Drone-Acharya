import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Chart from "react-apexcharts";
const FlightByHours = () => {
  const [chartdata, setChartData] = useState({
    series: [
      {
        name: 'Total Drone Flights',
        data: [400, 430, 448, 470, 540, 580, 400, 430, 448, 470],
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      colors: ["#7f8dff"],
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          // columnWidth: '10%'
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "DSA Steel",
          "AK Manufacturers",
          "Dosch",
          "Mittal Telecom",
          "Coal Deharia",
          "French Steel",
          "Mitahushi",
          "Damsung",
          "AT&C Powers",
          "Sukhai Mines",
        ],
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: true,
      },
    },
  });

  useEffect(() => {
    /** Fetch Call */
    setChartData({
      series: [
        {
          name: 'Total Drone Flights',
          data: [400, 430, 448, 470, 540, 580, 400, 430, 448, 470],
        },
      ],
      options: {
        chart: {
          type: "bar",
        },
        colors: ["#7f8dff"],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            // columnWidth: '10%'
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          categories: [
            "DSA Steel",
            "AK Manufacturers",
            "Dosch",
            "Mittal Telecom",
            "Coal Deharia",
            "French Steel",
            "Mitahushi",
            "Damsung",
            "AT&C Powers",
            "Sukhai Mines",
          ],
        },
        yaxis: {
          show: true,
        },
        grid: {
          show: true,
        },
      },
    });
  }, []);

  return (
    <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Flight By Hours
      </div>
      <Chart
        className={styles.chartdiv}
        options={chartdata.options}
        series={chartdata.series}
        type="bar"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default FlightByHours;
