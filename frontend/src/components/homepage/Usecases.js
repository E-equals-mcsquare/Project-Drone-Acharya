import styles from "./Homepage.module.scss"
import stockverification from "../../images/stockverification.jpeg"
import assetmanagement from "../../images/assetmanagement.jpeg"
import securitysurveillance from "../../images/securitysurveillance.jpeg"
import {useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
const Usecases = (props) => {

    const [lastupdatedSV, setlastupdatedSV] = useState('')
    const [lastupdatedAM, setlastupdatedAM] = useState('')
    const [lastupdatedSS, setlastupdatedSS] = useState('')
    const [totalrequestsSV, settotalrequestsSV] = useState('')
    const [totalrequestsAM, settotalrequestsAM] = useState('')
    const [totalrequestsSS, settotalrequestsSS] = useState('')

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

    useEffect(() => {
        const fetchDataSV = async (api) => {
      
            let fetchCall = await fetch(
              process.env.REACT_APP_SERVER_URL + "/api/homepage/usecases/getTotalRequestsSV"
            );
            let response = await fetchCall.json();
      
            setlastupdatedSV(response.data.lastupdated)
            settotalrequestsSV(response.data.totalrequests)
            
          }
          fetchDataSV()
      
          const fetchDataAM = async (api) => {
            
            let fetchCall = await fetch(
              process.env.REACT_APP_SERVER_URL + "/api/homepage/usecases/getTotalRequestsAM"
            );
            let response = await fetchCall.json();
      
            setlastupdatedAM(response.data.lastupdated)
            settotalrequestsAM(response.data.totalrequests)
            
          }
          fetchDataAM()
      
          const fetchDataSS = async (api) => {
            
            let fetchCall = await fetch(
              process.env.REACT_APP_SERVER_URL + "/api/homepage/usecases/getTotalRequestsSS"
            );
            let response = await fetchCall.json();
      
            setlastupdatedSS(response.data.lastupdated)
            settotalrequestsSS(response.data.totalrequests)(response.data)
            
          }
          fetchDataSS()
    }, [props])

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
                    <div className={styles.usecaserequestno}>{totalrequestsSV} Requests</div>
                    <div className={styles.lastupdated}>Last Updated: {lastupdatedSV}</div>
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
                    <div className={styles.usecaserequestno}>{totalrequestsAM} Requests</div>
                    <div className={styles.lastupdated}>Last Updated: {lastupdatedAM}</div>
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
                    <div className={styles.usecaserequestno}>{totalrequestsSS} Requests</div>
                    <div className={styles.lastupdated}>Last Updated: {lastupdatedSS}</div>
                </div>
            </div>
        </div>
    )
}

export default Usecases