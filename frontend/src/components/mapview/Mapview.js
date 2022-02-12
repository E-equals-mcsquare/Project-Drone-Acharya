import Footer from "../footer/Footer";
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import Main from "./Main";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const Mapview = () => {
  return (
    <div>
      <Header />
      <SubHeader activeview="Mapview" />
      <Main />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.olmap }
}

export default withRouter(connect(mapStateToProps)(Mapview))