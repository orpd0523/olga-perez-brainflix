import "./Navigation.scss";
import logoImage from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar";
import weekend from "../../assets/images/Mohan-muruge.jpg";
import TextField from "../TextField/TextField";

function Navigation() {
  return (
    <header className="container">
      <nav className="navigation">
        <div className="navigation__logo-container">
          <img className="navigation__logo"alt="brain flix logo" src={logoImage} />
        </div>
        <TextField alt="search icon" src={search} placeholder="Search"/>
        <Button alt="upload" src={upload}>UPLOAD</Button>
        <Avatar alt="avatar" src={weekend}/>
      </nav>
    </header>
  );
}

export default Navigation;
