import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import kpiTiles from "../kpitiles/kpiTiles";
import KPISection from "../dashboard/KPISection";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
const Dashboard = () => {
  const [summary, setSummary] = useState([{}]);
  const [erpInventory, setERPInventory] = useState([{}]);
  const [droneInventory, setDroneInventory] = useState([{}]);
  const [deviation, setDeviation] = useState([{}]);

  useEffect(() => {
    /** 1 Fetch Calls */
    setSummary([{ kpi: "Drone Inventory Days Available", kpivalue: 83.8 }]);
    /** 2 Fetch Call */
    setERPInventory([
      { kpi: "Materials", kpivalue: 2 },
      { kpi: "Tonnes", kpivalue: 885 },
    ]);
    /** 1 Fetch Call */
    setDroneInventory([
      { kpi: "Materials", kpivalue: 2 },
      { kpi: "Tonnes", kpivalue: 990 },
    ]);
    /** 1 Fetch Call */
    setDeviation([
      { kpi: "Tonnes", kpivalue: 25 },
      { kpi: "US Dollars", kpivalue: '$2.0M' },
    ]);
  }, []);

  const KPIs = kpiTiles(
    KPISection,
    summary,
    erpInventory,
    droneInventory,
    deviation
  );

  return (
    <div>
      <Header />
      <SubHeader activeview="Dashboard" />
      <div className={styles.dashboard}>{KPIs}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap }
}

export default withRouter(connect(mapStateToProps)(Dashboard));
