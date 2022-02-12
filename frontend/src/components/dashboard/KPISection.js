import Tile from "../homepage/Tile";
import styles from "../homepage/Homepage.module.css"
import { useEffect, useState } from "react";

const KPISectionDashboard = (props) => {
  return (
    <div className={styles.kpisectiondashboard}>
      <div className={styles.tilesection}>
        <Tile title="Summary" kpiArray={props.tile1} />
        <Tile title="ERP Inventory Record" kpiArray={props.tile2} />
        <Tile title="Drone Est. Inventory" kpiArray={props.tile3} />
        <Tile title="Deviation" kpiArray={props.tile4} />
      </div>
    </div>
  );
};

export default KPISectionDashboard
