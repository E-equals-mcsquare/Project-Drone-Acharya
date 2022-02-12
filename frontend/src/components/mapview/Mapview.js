import Header from "../header/Header";
import SubHeader from "../header/SubHeader";
import Main from "./Main";

const Mapview = () => {
  return (
    <div>
      <Header />
      <SubHeader activeview="Mapview" />
      <Main />
    </div>
  );
};

export default Mapview