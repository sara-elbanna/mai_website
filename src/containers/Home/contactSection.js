
import { useTranslation } from 'react-i18next';
import './home.scss';
import { Button, Input } from 'antd';

function ContactSection() {
    const { t } = useTranslation();
    return (
        <div className="ContactSection">
            <div className='layout'>
                <div className='container'>
                    <div className='content'>
                        <img src='/images/flower-black.webp' width={43} height={62} className='img' />
                        <h2>{t('Claim Your FREE Post Pill Guide')}</h2>
                        <p>Get my guide to supporting your body before & post birth control pill!</p>
                        <p>Sign up to get valuable information delivered right to your inbox on women’s health, hormones, and birth control, plus get access to your free guide! </p>
                    </div>
                    <div className='form'>
                        <Input placeholder='Full Name' />
                        <Input placeholder='Email' />
                        <Button>{t('subscribe')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;