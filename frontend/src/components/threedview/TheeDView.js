import Footer from "../footer/Footer";
import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import ThreeDModel from "./ThreeDModel";

const ThreeDView = () => {
  return (
    <div>
      <Header />
      <SubHeader activeview="Mapview" />
      <ThreeDModel />
      <Footer/>
    </div>
  );
};

export default ThreeDView;
