import icon from '../assets/reactjs-icon.png';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <img src={icon} alt="React logo" className="nav__logo" />
        <h1 className="nav__logo-label">ReactFacts</h1>
      </div>
      <div className="nav__title-wrapper">
        <span className="nav__title">React Course - Project 1</span>
      </div>
    </nav>
  );
}

export default Navbar;
