import { Button, Col, Input, Row } from "antd"
import { useTranslation } from "react-i18next";
import './footer.scss'

function Footer() {
    const { t } = useTranslation();
    return <div className="Footer">
        <div className="top">
            <div className="container" >
                <Row gutter={24} justify={'space-between'} >
                    <Col md={24} xs={24} lg={6}>
                        <div className='logo'>
                            <img src='images/logo-2.png' />
                        </div>
                        <p>{t("footer_description")}</p>
                    </Col>
                    <Col md={24} xs={24} lg={8}>
                        <h3>{t('Subscribe to our newsletter')}</h3>
                        <Row gutter={8}>
                            <Col lg={14}>
                                <Input name="email" type="email" className="email-input" />
                            </Col>
                            <Col lg={6}>
                                <Button className="email-btn">{t('subscribe')}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={24} xs={24} lg={4}>
                        <h3>{t('call us')}</h3>
                        <p>{'(+20) 100 649 4175'}</p>
                    </Col>
                    <Col xs={24} md={24} lg={4}>
                        <h3>{t('follow us')}</h3>
                        <Row gutter={14}>
                            <Col>
                                <a
                                    href="https://www.instagram.com/nutrimehealthy/"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook social-icon"></i>
                                </a>
                            </Col>
                            <Col>
                                <a
                                    href="https://www.instagram.com/nutrimehealthy/"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram social-icon"></i>
                                </a>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </div>
        </div>
        <div className="bottom">
            <p>{t('footer_rights')}</p>
        </div>
    </div>
}
export default Footer