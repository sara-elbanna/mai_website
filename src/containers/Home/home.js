import Intro from "./intro";
import './home.scss';
import Services from "./services";
import Offerings from "./offerings";
import Header from "../Header/header";

function Home() {
    return (
      <div className="Home">
        <Header/>
        <Intro/>
        <Services/>
        <Offerings/>
      </div>
    );
  }
  
  export default Home;