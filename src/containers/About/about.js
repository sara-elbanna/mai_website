import { useTranslation } from "react-i18next";
import Header from "../Header/header";
import './about.scss';
import Footer from "../Footer/footer";

function About() {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            <Header />
            <div className="About">
                <div className="container underHeader">
                    <div className="content">
                        <h2 className="title"> Professional Designations & Certificates</h2>
                        <div className="description-box">
                        <p className="description">
                            I received my diploma at Ryerson University for Food and Nutrition then continued my education at The Institute of Holistic Nutrition where I received my designation as a Certified Nutrition Practitioner with First Class Honours.
                            Since then, I deepened my knowledge for health and wellness by attaining my certification as a Certified Holistic Cancer Practitioner (CHCP) from The Edison Institute of Nutrition, my certification for Live Blood Cell Analysis (LBCA) from The Edison Institute of Nutrition and finally, my certification for Quantum Reflex Analysis (QRA) through Premier Research Labs.
                            Most recently, I have become a Certified Women's Health Practitioner
                        </p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    );
}

export default About;