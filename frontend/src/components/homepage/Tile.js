import styles from "./Homepage.module.scss";
const Tile = (props) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tiletitle}>{props.title}</div>
      <div className={styles.tilebody}>
        {props.kpiArray.map((obj, i) => {
          return (
            <div key={i}>
              <div className={styles.tilekpivalue}>{obj.kpivalue}</div>
              <div className={styles.tilekpi}>{obj.kpi}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tile;
