import { useTranslation } from "react-i18next";
import Header from "../Header/header";

function About() {
    const { t } = useTranslation();

    return (
        <div className="About">
            <Header />
            <h1>{t("hi")}</h1>

        </div>
    );
}

export default About;