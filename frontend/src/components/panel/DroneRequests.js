import styles from "../mapview/Mapview.module.css";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import completeicon from "../../images/complete.png";
import cancelicon from "../../images/cancel.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const DroneRequests = (props) => {
  const [dronerequests, setDroneRequests] = useState([{}]);

  const [state, setstate] = useState({
    series: [400, 430, 448, 470],
    options: {
      labels: ["Created", "Completed", "Analysis In Progress", "Cancelled"],
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
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
            size: "65%",
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

  useEffect(() => {
    setDroneRequests([
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
      {
        requestid: "112901",
        initiator: "Bheeshma",
        requestdate: "10-02-2022",
      },
    ]);
  }, [props]);

  const onCompleteRequest = () => {

  }

  const onCancelRequest = () => {

  }

  const onSelectRequest = () => {
    let sampleCoordinates = [[731791.168714415,5869229.8341831],[731760.666331109,5869234.84202956],[731747.236175322,5869229.37892196],[731733.806019535,5869208.43698781],[731726.294249847,5869187.03979251],[731769.999145346,5869140.14806905],[731832.369704051,5869150.16377933],[731825.085525857,5869192.95816993],[731821.443471493,5869197.51076393],[731808.92383798,5869215.72113995],[731800.046258831,5869227.5578861],[731791.168714415,5869229.8341831], [731717.825947731,5869245.96164497],[731706.912860945,5869244.37015243],[731693.726215856,5869246.41635403],[731656.439873584,5869232.09293413],[731664.169957933,5869202.76403724],[731673.718913208,5869195.7160013],[731709.413771607,5869209.81206451],[731723.055121418,5869221.86192177],[731739.652103959,5869224.13548007],[731732.149354625,5869244.37015243],[731723.055121418,5869248.23520327],[731717.825947731,5869245.96164497]]
    let coordinate = sampleCoordinates[Math.floor(Math.random() * sampleCoordinates.length-1)]
    props.olmap.getView().setCenter(coordinate)
  }

  return (
    <div className={styles.requestspanel}>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="100%"
        // height="100%"
      />
      {dronerequests.map((obj, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
            onClick={onSelectRequest}
          >
            <div className={styles.listitem}>
              <div className={styles.listitemtitle}>
                Request ID: {obj.requestid}
              </div>
              <div className={styles.listitemcomment}>
                Initator: {obj.initiator}
              </div>
              <div className={styles.listitemdate}>Date: {obj.requestdate}</div>
            </div>
            <div>
              <img
                alt="Complete"
                src={completeicon}
                className={styles.iconstyle}
                onClick={onCompleteRequest}
              />
              <img alt="Cancel" src={cancelicon} className={styles.iconstyle} onClick={onCancelRequest} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
    return { ...state.olmap, ...state.currentpanel };
  };
  
  export default withRouter(connect(mapStateToProps)(DroneRequests));
