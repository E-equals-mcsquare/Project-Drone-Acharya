import Footer from "../footer/Footer";
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import Main from "./Main";

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

export default Mapview