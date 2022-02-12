import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
const Annotations = () => {
  const [annotations, setAnnotations] = useState([{}]);

  useEffect(() => {
    /** Fetch Call */
    setAnnotations([
      {
        requestId: "10092773",
        annotationName: "Antenna Installation",
        annotationType: "Action Item",
        lastupdated: "10-02-2022",
      },
      {
        requestId: "10092773",
        annotationName: "Stock Replenishment",
        annotationType: "Issue",
        lastupdated: "10-02-2022",
      },
      {
        requestId: "10092773",
        annotationName: "Audit Inventory",
        annotationType: "Action Item",
        lastupdated: "10-02-2022",
      },
      {
        requestId: "10092773",
        annotationName: "Antenna Installation",
        annotationType: "Action Item",
        lastupdated: "10-02-2022",
      },
      {
        requestId: "10092773",
        annotationName: "Antenna Installation",
        annotationType: "Action Item",
        lastupdated: "10-02-2022",
      },
    ]);
  }, []);

  return (
    <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Annotations
      </div>
      <table>
        <th>Request Id</th>
        <th>Annotation Name</th>
        <th>Annotation Type</th>
        <th>Last Updated</th>
        {annotations.map((obj) => {
          return (
            <tr>
              <td>{obj.requestId}</td>
              <td>{obj.annotationName}</td>
              <td>{obj.annotationType}</td>
              <td>{obj.lastupdated}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Annotations;
