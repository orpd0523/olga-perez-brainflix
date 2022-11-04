import "./Navigation.scss";
import logoImage from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";

function Navigation() {
  return (
    <header className="container">
      <nav>
        <div className="navigation__logo">
          <img alt="brain flix logo" src={logoImage} />
        </div>
        <div className="navigation__search-bar">
          <img alt="search icon" src={search} />
          <input className="navigation__box" type="text" placeholder="Search" />
        </div>
        <Button />
        <ProfileIcon />
      </nav>
    </header>
  );
}

function Button() {
  return (
    <button className="button">
      <img alt="upload icon" src={upload} />
      UPLOAD
    </button>
  );
}

function ProfileIcon() {
  return <div className="profile-icon">{/*Logo Image Here*/}</div>;
}

export default Navigation;
