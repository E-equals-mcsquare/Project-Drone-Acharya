import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "../mapview/Mapview.module.css";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
const Stockyards = (props) => {

    const stockyardSelected = useRef('Yudhisthir')
    const [currentstockyard, setCurrentStockyard] = useState('Yudhisthir')
    

  const [state, setstate] = useState({
    options: {
      series: [
        {
          name: "Material Volume",
          type: "column",
          data: [440, 505, 414, 671, 227, 413],
        },
        {
          name: "Deviation",
          type: "line",
          // data: [23, 42, 35, 27, 43, 22],
          data: [440, 505, 414, 671, 227, 413],
        },
      ],
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
    //   title: {
    //     text: "Stockyard " + stockyardSelected.current.value,
    //   },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      }
    },
  });

  useEffect(() => {
    setCurrentStockyard(stockyardSelected.current.value)
    var chart = new ApexCharts(
      document.querySelector("#stockyardschart"),
      state.options
    );
    chart.render();
  }, []);

  const onSelectStockyard = () => {
    setCurrentStockyard(stockyardSelected.current.value)
    
    document.querySelector("#stockyardschart").innerHTML = ''
    var chart = new ApexCharts(
        document.querySelector("#stockyardschart"),
        state.options
      );
      chart.render();
  }
  return (
    <>
      Stockyard:{" "}
      <select onChange={onSelectStockyard} ref={stockyardSelected} className={styles.customdropdown}>
        <option>Yudhisthir</option>
        <option>Bheem</option>
        <option>Arjun</option>
        <option>Nakul</option>
        <option>Sahadev</option>
        <option>Abhimanyu</option>
      </select>
      <div id="stockyardschart" />
    </>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap, ...state.currentpanel };
};

export default withRouter(connect(mapStateToProps)(Stockyards));
