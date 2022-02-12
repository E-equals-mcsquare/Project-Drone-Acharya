import Header from "../header/Header";
import styles from "./Homepage.module.css";
import { useEffect, useState } from "react";
import KPISection from "./KPISection";
import Usecases from "./Usecases";
import RecentlyVisited from "./RecentlyVisited";
import FlightByHours from "./FlightByHours";
import Annotations from "./Annotations";
import OverviewByLocation from "./OverviewByLocation";
import kpiTiles from "../kpitiles/kpiTiles";

let index = 0;
const Homepage = () => {
  const [marqueeText, setMarqueeText] = useState("")

  const [dataoverview, setDataOverview] = useState([{}])
  const [actions, setActions] = useState([{}])
  const [quality, setQuality] = useState([{}])
  const [datacomparison, setDataComparison] = useState([{}])

  useEffect(() => {
    let notifications = [
      "1 Drone Flight Request created",
      "Boiler Plant needs immediate attention",
      "Drone data ready for processing",
    ];
    setMarqueeText(notifications.join(" | "))

    /** 2 Fetch Calls */
    setDataOverview([{kpi:'Upcoming Flights', kpivalue: 3}, {kpi:'Completed Flights', kpivalue: 21}])
    /** 2 Fetch Call */
    setActions([{kpi:'Reviews', kpivalue: 30}, {kpi:'Approvals', kpivalue: 163}])
    /** 1 Fetch Call */
    setQuality([{kpi:'Data Quality Alerts', kpivalue: 20}])
    /** 1 Fetch Call */
    setDataComparison([{kpi:'Mismatch Alerts', kpivalue: 10}])


  }, []);

  const KPIs = kpiTiles(KPISection, dataoverview, actions, quality, datacomparison)
  
  return (
    <>
      <Header />
      {KPIs}
      <marquee className={styles.marquee}>{marqueeText}</marquee>
      <Usecases />
      <div>
      <div className={styles.tablecardsection}>
        <RecentlyVisited />
        <FlightByHours />
        <Annotations />
        <OverviewByLocation />
      </div>
      </div>
    </>
  );
};

export default Homepage;
