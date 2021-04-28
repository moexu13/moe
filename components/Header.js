const Header = () => {
  return (
    <div>
      <div className="header">
        <img src="/images/logo.png" />
        <span className="header__text">Melissa Albarella</span>
      </div>
      <div className="hero">
        <img 
          src="/images/code_hero.jpg" 
          className="hero__image" 
          alt="html code background" 
        />
      </div>
    </div>
  )
}

export default Header;