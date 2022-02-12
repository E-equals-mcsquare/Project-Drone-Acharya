import Annotations from '../panel/Annotations'
import styles from './Mapview.module.css'

import { connect } from "react-redux"
import { withRouter } from "react-router"
const SidePanel = (props) => {
    return (
        <div className={styles.sidepanel}>
            <Annotations olmap={props.olmap}/>

        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.olmap }
  }

export default withRouter(connect(mapStateToProps)(SidePanel))