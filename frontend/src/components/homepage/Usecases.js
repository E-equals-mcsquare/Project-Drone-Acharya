import styles from "./Homepage.module.scss"
import stockverification from "../../images/stockverification.jpeg"
import assetmanagement from "../../images/assetmanagement.jpeg"
import securitysurveillance from "../../images/securitysurveillance.jpeg"
import {useHistory} from "react-router-dom"
const Usecases = (props) => {

    const history = useHistory()

    const onGoToStockVerification = () => {
        history.replace('/dashboard/stockverification')
    }

    const onGoToAssetManagement = () => {
        history.replace('/dashboard/assetmanagement')
    }

    const onGoToSecuritySurveillance = () => {
        history.replace('/dashboard/securitysurveillance')
    }

    return (
        <div className={styles.usecasesection}>
            <div className={styles.usecasecard} onClick={onGoToStockVerification}>
                <div className={styles.usecasecardbody}>
                    <div className={styles.usecasetitle}>
                        <div className={styles.greenlinestarter}></div>
                        <div className={styles.usecasenames}>Stock Verification</div>
                    </div>
                    <img alt="Stock Verification" src={stockverification} className={styles.usecaseimage} />
                </div>
                <div className={styles.cardfooter}>
                    <div className={styles.usecaserequestno}>36 Requests</div>
                    <div className={styles.lastupdated}>Last Updated: 10-02-2022</div>
                </div>
            </div>
            <div className={styles.usecasecard} onClick={onGoToAssetManagement}>
                <div className={styles.usecasecardbody}>
                    <div className={styles.usecasetitle}>
                        <div className={styles.greenlinestarter}></div>
                        <div className={styles.usecasenames}>Asset Management</div>
                    </div>
                    <img alt="Asset Management" src={assetmanagement} className={styles.usecaseimage} />
                </div>
                <div className={styles.cardfooter}>
                    <div className={styles.usecaserequestno}>36 Requests</div>
                    <div className={styles.lastupdated}>Last Updated: 10-02-2022</div>
                </div>
            </div>
            <div className={styles.usecasecard} onClick={onGoToSecuritySurveillance}>
                <div className={styles.usecasecardbody}>
                    <div className={styles.usecasetitle}>
                        <div className={styles.greenlinestarter}></div>
                        <div className={styles.usecasenames}>Security Surveillance</div>
                    </div>
                    <img alt="Security Surveillance" src={securitysurveillance} className={styles.usecaseimage} />
                </div>
                <div className={styles.cardfooter}>
                    <div className={styles.usecaserequestno}>36 Requests</div>
                    <div className={styles.lastupdated}>Last Updated: 10-02-2022</div>
                </div>
            </div>
        </div>
    )
}

export default Usecases