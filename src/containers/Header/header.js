import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import strings from '../../localization';
import './header.scss'
import { setLocale } from 'react-redux-i18n';
import { store } from '../../index'
import { useTranslation } from "react-i18next";
import i18next from "../../localization/index";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from '../../store/reducers/authReducer';
import { Dropdown, Menu, Space } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showMenu, set_showMenu] = useState(false)
  const isLoggedIn = useSelector(redux => redux.authInfo.loggedInUserPhoneNumber)
  const firstName = useSelector(redux => redux.authInfo.firstName)
  const lastName = useSelector(redux => redux.authInfo.lastName)

  const onChangeLanguage = (lang) => {
    i18next.changeLanguage(lang)
  }
  const setShowMenu = (value) => {
    set_showMenu(value)
  }
  const routeTo = (route) => {
    navigate(route);
  }
  const onLogout = () => {
    dispatch({ type: LOGOUT })
  }

  const onClickOnMobileMenu = (e) => {
    console.log('click', e);
    switch (e.key) {
      case 'home':
        routeTo('/')
        break;
      case 'about':
        routeTo('/about')
        break;
      case 'login':
        routeTo('/login')
        break;
      case 'profile':
        routeTo('/profile')
        break;
      case 'logout':
        onLogout()
        break;
      default:
        break;
    }
  };
  const profileMenu = (
    <Menu
      items={[
        {
          label: <a href="/profile">{t('My profile')}</a>,
          key: '0',
        },
        {
          label: <span onClick={onLogout}>{t("logout")}</span>,
          key: '1',
        }
      ]}
    />
  )
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const mobileMenu = [
    isLoggedIn && getItem((firstName + ' ' + lastName), 'userName', <MailOutlined />, [
      getItem(t('My profile'), 'profile', null),
      getItem(t('logout'), 'logout', null),
    ]),
    !isLoggedIn && getItem(t("login"), 'login', <AppstoreOutlined />),
    getItem(t("home"), 'home', <SettingOutlined />,),
    getItem(t("about"), 'about', <SettingOutlined />,)
  ];
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
            <div className='menu-item' onClick={() => routeTo('/')}> <span>{t("home")}</span> </div>
            <div className='menu-item' onClick={() => routeTo('/about')}> <span>{t("about")}</span> </div>
          </div>
          <div className="right">
            {!isLoggedIn && <div className='menu-item' onClick={() => routeTo('/login')}> <span>{t("login")}</span> </div>}
            {isLoggedIn && <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomRight">
              <a onClick={e => e.preventDefault()} style={{ color: '#000' }}>
                <Space style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                  {firstName + ' ' + lastName}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>}
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
          <span className='close' onClick={() => setShowMenu(false)}><i className="fas fa-times"></i></span>
          <div className='links'>
            <div className='language-switch'>
              <span className='lng' onClick={() => onChangeLanguage('en')}>En</span>
              <span style={{ margin: '0 5px' }}>|</span>
              <span className='lng' onClick={() => onChangeLanguage('ar')}>Ar</span>
            </div>
          </div>
          {/* <div className="menu">
            {!isLoggedIn && <div className='menu-item' onClick={() => routeTo('/login')}> <span>{t("login")}</span> </div>}
            {isLoggedIn && <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomRight">
              <a onClick={e => e.preventDefault()} className='menu-item'>
                <Space>
                  {firstName + ' ' + lastName}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>}
            <div className='menu-item' onClick={() => routeTo('/')}> <span>{t("home")}</span> </div>
            <div className='menu-item' onClick={() => routeTo('/about')}> <span>{t("about")}</span> </div>

          </div> */}
          <Menu
            onClick={onClickOnMobileMenu}
            style={{ backgroundColor: 'transparent', border: "none", color: '#fff', fontSize: 18, fontWeight: 'bold' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={mobileMenu}
          />
        </div>}
      </div>
    </div>
  );
}

export default Header;

