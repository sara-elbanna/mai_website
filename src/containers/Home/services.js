import { t } from 'i18next';
import './home.scss';

function Services() {
    return (
      <div className="Services">
        <img className='icon' src='images/flower-white.webp'/>
        <section>
            <h2>{t('we_can_help_with')}</h2>
            <p>{t('Planning for pregnancy')}</p>
            <p>{t('Pre and post natal nutrition')}</p>
            <p>{t('Nutrition through the lifecycle')}</p>
            <p>{t('Nutrition for active lifecycle')}</p>
            <p>{t('PCOS')}</p>
        </section>
      </div>
    );
  }
  
  export default Services;