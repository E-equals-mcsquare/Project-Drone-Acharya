import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

const DroneData = () => {
    const [dronedata, setdronedata] = useState([{}]);

    useEffect(() => {
      /** Fetch Call */
      setdronedata([
        {
          requestId: "10092773",
          requestName: "Antenna Installation",
          plant: "Indrapasth",
          lastupdated: "10-02-2022",
        },
        {
          requestId: "10092773",
          requestName: "Stock Replenishment",
          plant: "Hastinapur",
          lastupdated: "10-02-2022",
        },
        {
          requestId: "10092773",
          requestName: "Audit Inventory",
          plant: "Indrapasth",
          lastupdated: "10-02-2022",
        },
        {
          requestId: "10092773",
          requestName: "Antenna Installation",
          plant: "Indrapasth",
          lastupdated: "10-02-2022",
        },
        {
          requestId: "10092773",
          requestName: "Antenna Installation",
          plant: "Indrapasth",
          lastupdated: "10-02-2022",
        },
      ]);
    }, []);
  
    return (
      <div className={styles.tablecard}>
        <div className={styles.tabletitle}>
          <div className={styles.greenlinestarter}></div>
          Drone Data
        </div>
        <table>
          <th>Request Id</th>
          <th>Request Name</th>
          <th>Plant</th>
          <th>Last Updated</th>
          {dronedata.map((obj) => {
            return (
              <tr>
                <td>{obj.requestId}</td>
                <td>{obj.requestName}</td>
                <td>{obj.plant}</td>
                <td>{obj.lastupdated}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  };
  
export default DroneData