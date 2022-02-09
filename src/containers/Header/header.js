import { useState } from 'react';
import { useSelector } from 'react-redux';
// import strings from '../../localization';
import './header.scss'
import { setLocale } from 'react-redux-i18n';
import { store } from '../../index'
import { useTranslation } from "react-i18next";
import i18next from "../../localization/index";
import { useNavigate } from "react-router-dom";

// var I18n = require('react-redux-i18n').I18n;

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const xx = useSelector(x=> x.globalInfo)
  // console.log('ffff', xx)
  // const [language, set_language] = useState('')
  const [showMenu, set_showMenu] = useState(false)

  const onChangeLanguage = (lang) => {
    // strings.setLanguage(lang)
    // set_language(lang)
    // store.dispatch(setLocale(lang));
    i18next.changeLanguage(lang)
  }
  const setShowMenu = (value) => {
    set_showMenu(value)
  }
  const routeTo = (route) => {
    navigate(route);

  }
  return (
    <div className="Header">
      <a
        href="https://wa.me/201023515645"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
      <div className='desktop'>
        <div className='logo'>
          <img src='images/logo.jpg' />
        </div>
        <div className='links'>
          <div className='language-switch'>
            <span className='lng' onClick={() => onChangeLanguage('en')}>En</span>
            <span style={{ margin: '0 5px' }}>|</span>
            <span className='lng' onClick={() => onChangeLanguage('ar')}>Ar</span>
          </div>
          <div className='social'>
            <a target={'_blank'} href='https://www.instagram.com/nutrimehealthy/'>
              <img src='images/instagram.webp' width={24} />
            </a>

          </div>
        </div>
        <div className="menu">
          <div className="left">
            <div className='menu-item' onClick={() => routeTo('/')}> <span>HOME</span> </div>
            <div className='menu-item' onClick={() => routeTo('/about')}> <span>ABOUT</span> </div>

          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className='mobile'>
        <div className='burger-icon' onClick={() => setShowMenu(true)}>
          <span ><i className="fas fa-bars"></i></span>
        </div>
        <div className='logo'>
          <img src='images/logo.jpg' />
        </div>
        {showMenu && <div className='overlay'>
          <span className='close' onClick={() => setShowMenu(false)}><i class="fas fa-times"></i></span>
          <div className='links'>
            <div className='language-switch'>
              <span className='lng' onClick={() => onChangeLanguage('en')}>En</span>
              <span style={{ margin: '0 5px' }}>|</span>
              <span className='lng' onClick={() => onChangeLanguage('ar')}>Ar</span>
            </div>
          </div>
          <div className="menu">
            <div className='menu-item' onClick={() => routeTo('/')}> <span>HOME</span> </div>
            <div className='menu-item' onClick={() => routeTo('/about')}> <span>ABOUT</span> </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Header;

