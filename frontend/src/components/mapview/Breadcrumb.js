import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import styles from './Mapview.module.css'
const Breadcrumb = () => {
    return (
        <div className={styles.breadcrumb}>
            <div>Plant - Indraprasth</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.olmap }
  }
  
  export default withRouter(connect(mapStateToProps)(Breadcrumb))