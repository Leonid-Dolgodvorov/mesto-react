import headerLogoPath from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header section page__header">
      <img className="header__logo" src={headerLogoPath} alt="логотип Mesto" />
    </header>
  )
}

export default Header