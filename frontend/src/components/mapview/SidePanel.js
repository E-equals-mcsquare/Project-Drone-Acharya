import Annotations from "../panel/Annotations";
import styles from "./Mapview.module.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Settings from "../panel/Settings";
import Stockyards from "../panel/Stockyards";
import DroneRequests from "../panel/DroneRequests";
import { useEffect, useState } from "react";
const SidePanel = (props) => {
  const [panel, setPanel] = useState(<></>);

  useEffect(() => {
    if (props.currentpanel === "Annotations") {
      setPanel(<Annotations olmap={props.olmap} />);
    } else if (props.currentpanel === "Drone Requests") {
      setPanel(<DroneRequests />);
    } else if (props.currentpanel === "Stockyards") {
      setPanel(<Stockyards />);
    } else if (props.currentpanel === "Settings") {
      setPanel(<Settings />);
    }
  }, [props]);

  return (
    <div className={styles.sidepanel}>
      <div className={styles.sidepaneltitle}>{props.currentpanel}</div>
      {panel}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap, ...state.currentpanel };
};

export default withRouter(connect(mapStateToProps)(SidePanel));
