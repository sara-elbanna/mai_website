import { Col, Row } from 'antd';
import OfferingsItem from '../../components/offeringsItem';
import './home.scss';

function Offerings() {
    return (
        <div className="Offerings">
            <div className='container'>
                <h2>My Offerings</h2>
                <Row gutter={24} justify={'space-around'} align={'middle'}>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/offers1.webp"
                            title='Free subscription'
                            content="The power of food is amazing when it comes to hormone balancing. As a women's health nutritionist, I see this power at work every single day.  My online wellness resources are designed to provide guidance for everything from immune boosting guidance to meal plans created for specific concerns such as PCOS and prenatal nutrition."
                        />
                    </Col>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/offers1.webp"
                            title='Free subscription'
                            content="The power of food is amazing when it comes to hormone balancing. As a women's health nutritionist, I see this power at work every single day.  My online wellness resources are designed to provide guidance for everything from immune boosting guidance to meal plans created for specific concerns such as PCOS and prenatal nutrition."
                        />
                    </Col>
                    <Col lg={6} xs={24} md={24}>
                        <OfferingsItem
                            imagePath="images/offers1.webp"
                            title='Free subscription'
                            content="The power of food is amazing when it comes to hormone balancing. As a women's health nutritionist, I see this power at work every single day.  My online wellness resources are designed to provide guidance for everything from immune boosting guidance to meal plans created for specific concerns such as PCOS and prenatal nutrition."
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Offerings;