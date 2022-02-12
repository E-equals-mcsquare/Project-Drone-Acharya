import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footeroption}>Annotations</div>
            <div className={styles.footeroption}>Drone Requests</div>
            <div className={styles.footeroption}>Stockyards</div>
            <div className={styles.footeroption}>Settings</div>
        </div>
    )
}

export default Footer