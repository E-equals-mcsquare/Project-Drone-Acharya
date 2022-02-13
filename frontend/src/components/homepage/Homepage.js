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
const Homepage = (props) => {
  const [marqueeText, setMarqueeText] = useState("");

  const [dataoverview, setDataOverview] = useState([{}]);
  const [actions, setActions] = useState([{}]);
  const [quality, setQuality] = useState([{}]);
  const [datacomparison, setDataComparison] = useState([{}]);

  useEffect(() => {
    let notifications = [
      "1 Drone Flight Request created",
      "Boiler Plant needs immediate attention",
      "Drone data ready for processing",
    ];
    setMarqueeText(notifications.join(" | "));

    const fetchDataOverview = async (api) => {
      
      let fetchCall = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/homepage/kpis/getDataOverview"
      );
      let response = await fetchCall.json();

      setDataOverview(response.data)
      
    }
    fetchDataOverview()

    const fetchActions = async (api) => {
      
      let fetchCall = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/homepage/kpis/getActions"
      );
      let response = await fetchCall.json();

      setActions(response.data)
      
    }
    fetchActions()

    const fetchDataComparison = async (api) => {
      
      let fetchCall = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/homepage/kpis/getDataComparison"
      );
      let response = await fetchCall.json();

      setDataComparison(response.data)
      
    }
    fetchDataComparison()
    
    const fetchDataQuality = async (api) => {
      
      let fetchCall = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/homepage/kpis/getQuality"
      );
      let response = await fetchCall.json();

      setQuality(response.data)
      
    }
    fetchDataQuality()

  }, [props]);

  const KPIs = kpiTiles(
    KPISection,
    dataoverview,
    actions,
    quality,
    datacomparison
  );

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
