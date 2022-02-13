import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Footer.module.css";
import threed from "../../images/threed.png";
import mapicon from "../../images/mapicon.png";
const Footer = (props) => {
  const history = useHistory();

  const onClickAnnotations = () => {
    props.dispatch({
      type: "currentpanel",
      currentpanel: "Annotations",
    });
  };

  const onClickDroneRequests = () => {
    props.dispatch({
      type: "currentpanel",
      currentpanel: "Drone Requests",
    });
  };

  const onClickStockyards = () => {
    props.dispatch({
      type: "currentpanel",
      currentpanel: "Stockyards",
    });
  };

  const onClickSettings = () => {
    props.dispatch({
      type: "currentpanel",
      currentpanel: "Settings",
    });
  };

  const onNavigateTo3DView = () => {
    history.replace("/threedview/stockverification");
  };

  const onNavigateToMapView = () => {
    history.replace("/mapview/stockverification");
  }

  return (
    <div className={styles.footer}>
      <div className={styles.panelbuttons}>
        <div
          className={styles.footeroption}
          tabIndex="1"
          onClick={onClickAnnotations}
        >
          Annotations
        </div>
        <div
          className={styles.footeroption}
          tabIndex="2"
          onClick={onClickDroneRequests}
        >
          Drone Requests
        </div>
        <div
          className={styles.footeroption}
          tabIndex="3"
          onClick={onClickStockyards}
        >
          Stockyards
        </div>
        <div
          className={styles.footeroption}
          tabIndex="4"
          onClick={onClickSettings}
        >
          Settings
        </div>
      </div>
      <div
        className={styles.threedbutton}
        onClick={onNavigateToMapView}
      >
          <img alt="3d" height="32px" src={mapicon} className={styles.iconstyle}/>
        Map View
      </div>
      <div
        className={styles.threedbutton}
        onClick={onNavigateTo3DView}
      >
          <img alt="3d" height="32px" src={threed} className={styles.iconstyle}/>
        3D View
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap, ...state.currentpanel };
};

export default withRouter(connect(mapStateToProps)(Footer));
