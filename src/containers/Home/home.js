import Intro from "./intro";
import './home.scss';
import Services from "./services";
import Offerings from "./offerings";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ContactSection from "./contactSection";

function Home() {
    return (
      <div className="Home">
        <Header/>
        <Intro/>
        <Services/>
        <Offerings/>
        <ContactSection/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;