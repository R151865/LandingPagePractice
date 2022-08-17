import "./index.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="header__body">
        <a href="#sectionHome" className="logo">
          Omega
        </a>
        <div className="header__menu">
          <a href="#sectionHome">Home</a>
          <a href="#sectionContactUs">Contact us</a>
        </div>
      </div>
    </nav>
  );
}
