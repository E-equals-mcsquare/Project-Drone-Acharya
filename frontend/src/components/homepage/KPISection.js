import Tile from "./Tile";
import styles from "./Homepage.module.css"
import { useEffect, useState } from "react";

const KPISectionHome = (props) => {
  return (
    <div className={styles.kpisectionhome}>
      <div className={styles.sectionheader}>
        <span className={styles.greenlinestarter}></span>Overview
      </div>
      <div className={styles.tilesection}>
        <Tile title="Data Overview" kpiArray={props.tile1} />
        <Tile title="Actions" kpiArray={props.tile2} />
        <Tile title="Quality" kpiArray={props.tile3} />
        <Tile title="Data Comparison" kpiArray={props.tile4} />
      </div>
    </div>
  );
};

export default KPISectionHome
