import strings from "../../localization";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();

    return (
        <div className="Intro">
            <div className='desktop'>
                <div className="row">
                    <section>
                        {/* <img className="personal-img" src='/images/personal_photo_intro.webp'/> */}
                        <img className="personal-img" src='/images/mai.jpg' />
                    </section>
                    <section className="text">
                        <div className="content">
                            <h1>{t("intro_main_text")}</h1>
                            {/* <h1>مرحبا انا مي دكتوره مختصه في صحه المرأه</h1> */}
                            <h3>{"MY MISSION IS TO HELP YOU BALANCE YOUR HORMONES AFTER COMING OFF BIRTH CONTROL"}</h3>
                        </div>

                    </section>
                </div>
            </div>
            <div className='mobile'>
                <div className="column">
                    <section className="img">
                        <img className="personal-img" src='/images/mai.jpg' />
                    </section>
                    <section className="text">
                        <div className="content">
                            <h1>{t("intro_main_text")}</h1>
                            <h3>{"MY MISSION IS TO HELP YOU BALANCE YOUR HORMONES AFTER COMING OFF BIRTH CONTROL"}</h3>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
}

export default Intro;