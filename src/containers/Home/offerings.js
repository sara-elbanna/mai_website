import { Col, Row } from 'antd';
import OfferingsItem from '../../components/offeringsItem';
import './home.scss';

function Offerings() {
    return (
        <div className="Offerings">
            <div className='container'>
                <h2>My Offerings</h2>
                <Row gutter={24} justify={'center'} align={'middle'}>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/offers1.webp"
                            title='Freebies &Wellness Resources'
                            content="The power of food is amazing when it comes to hormone balancing. As a women's health nutritionist, I see this power at work every single day.  My online wellness resources are designed to provide guidance for everything from immune boosting guidance to meal plans created for specific concerns such as PCOS and prenatal nutrition."
                        />
                    </Col>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/image-3.webp"
                            title='Functional Hormone Testing(DUTCH Test)'
                            content="Have you tried everything to balance your hormones, get rid of PMS, clear your skin and boost your energy but nothing seems to be working?
                            Get to the root cause of your hormone imbalances once and for all with the DUTCH Test. This session includes a follow up to discuss a plan including nutrition, supplements and lifestyle changes."
                        />
                    </Col>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/image-2.webp"
                            title='12 Week Post Birth Control Hormone Balancing Program'
                            content="In my 12-week post-birth control program we'll work together to help balance your hormones post-pill. If you suffer from PCOS, endometriosis or imbalanced hormones post-pill, this program is for you. This program is 100% customized to you. I provide 1:1 support as a women's health expert to help you balance your hormones naturally."
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Offerings;