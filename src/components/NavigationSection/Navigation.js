import "./Navigation.scss";
import logoImage from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar";
import weekend from "../../assets/images/Mohan-muruge.jpg";

function Navigation() {
  return (
    <header className="container">
      <nav className="navigation">
        <div className="navigation__logo-container">
          <img className="navigation__logo"alt="brain flix logo" src={logoImage} />
        </div>
        <div className="navigation__search-bar">
          <img alt="search icon" src={search} />
          <input className="navigation__box" type="text" placeholder="Search" />
        </div>
        <Button alt="upload" src={upload}>UPLOAD</Button>
        <Avatar alt="avatar" src={weekend}/>
      </nav>
    </header>
  );
}

export default Navigation;
