import Intro from "./intro";
import './home.scss';
import Services from "./services";
import Offerings from "./offerings";

function Home() {
    return (
      <div className="Home">
        <Intro/>
        <Services/>
        <Offerings/>
      </div>
    );
  }
  
  export default Home;