import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
const RecentlyVisited = () => {
  const [recentlyVisited, setRecentlyVisited] = useState([{}]);

  useEffect(() => {
    /** Fetch Call */
    setRecentlyVisited([
      {
        usecase: "Stock Verification",
        requestId: "10092773",
        dateandtime: "10-02-2022",
      },
      {
        usecase: "Asset Management",
        requestId: "10092773",
        dateandtime: "10-02-2022",
      },
      {
        usecase: "Stock Verification",
        requestId: "10092773",
        dateandtime: "10-02-2022",
      },
      {
        usecase: "Security Surveillance",
        requestId: "10092773",
        dateandtime: "10-02-2022",
      },
      {
        usecase: "Asset Management",
        requestId: "10092773",
        dateandtime: "10-02-2022",
      },
    ]);
  }, []);

  return (
    <div className={styles.tablecard}>
      <div className={styles.tabletitle}>
        <div className={styles.greenlinestarter}></div>
        Recently Visited
      </div>
      <table>
        <th>Use case</th>
        <th>Request Id</th>
        <th>Date and Time</th>
        {recentlyVisited.map((obj) => {
          return (
            <tr>
              <td>{obj.usecase}</td>
              <td>{obj.requestId}</td>
              <td>{obj.dateandtime}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default RecentlyVisited;
