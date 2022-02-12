import styles from "./Header.module.css";
import dronelogo from "../../images/drone (1).png";
import bookmarklogo from "../../images/bookmark.png";
import notificationlogo from "../../images/bell.png"
import usericon from "../../images/user.png"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headertitle}>
        <span>
          <img alt="Drone" src={dronelogo} className={styles.dronelogo} />
        </span>
        Project Drone-Acharya
      </div>
      <div className={styles.rightsection}>
        <span>
            <img alt="Bookmark" src={bookmarklogo} className={styles.logo2}/>
            <img alt="Notifications" src={notificationlogo} className={styles.logo2}/>
        </span>
        <span className={styles.username}>Krishna
            
        </span>
        <img alt="User" src={usericon} className={styles.userlogo} />
      </div>
    </div>
  );
};

export default Header;
