import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <div className="About">
            <h1>{t("hi")}</h1>

        </div>
    );
}

export default About;