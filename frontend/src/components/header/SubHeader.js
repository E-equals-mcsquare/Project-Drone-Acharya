import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {useHistory} from "react-router-dom";
const SubHeader = (props) => {
    const [dashboardState, setDashboardState] = useState(false)
    const [mapState, setMapState] = useState(false)

    const history = useHistory()

    useEffect(()=>{
        if (props.activeview === "Dashboard") {
            setDashboardState(true)
            setMapState(false)
        } else {
            setDashboardState(false)
            setMapState(true)
        }
    }, [])

    const onGoToHome = () => {
        history.replace('/')
    }

    const onGoToDashboardView = () => {
      history.replace('/dashboard/stockverfication')
    }

    const onGoToMapView = () => {
      history.replace('/mapview/stockverfication')
    }

  return (
    <div className={styles.subheader}>
      <div className={styles.subheadertitle}>
        <div className={styles.pagenavlinks} onClick={onGoToHome}>Home</div>
        <div>/</div>
        <div className={styles.pagenavlinks}>Stock Verification</div>
      </div>
      {dashboardState && <div className={styles.rightsection}>
          <div className={styles.subheaderbuttonsactive}>Dashboard View</div>
          <div className={styles.subheaderbuttonsinactive} onClick={onGoToMapView}>Map Analysis View</div>
      </div>}
      {mapState && <div className={styles.rightsection}>
          <div className={styles.subheaderbuttonsinactive} onClick={onGoToDashboardView}>Dashboard View</div>
          <div className={styles.subheaderbuttonsactive}>Map Analysis View</div>
      </div>}
    </div>
  );
};

export default SubHeader;
