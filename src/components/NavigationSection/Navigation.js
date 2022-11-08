import "./Navigation.scss";
import logoImage from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import weekend from "../../assets/images/Mohan-muruge.jpg";
import TextField from "../TextField/TextField";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="container">
      <nav className="navigation">
        <span className="navigation__logo-container">
          <Link to="/">
          <img
            className="navigation__logo"
            alt="brain flix logo"
            src={logoImage}
          />
          </Link>
        </span>
        <span className="navigation__main">
          <span className="navigation__search">
            <TextField alt="search icon" src={search} placeholder="Search" />
          </span>
          <span className="navigation__avatar">
            <Avatar alt="avatar" src={weekend} />
          </span>
          <span className="navigation__upload">
            <Link to="upload">
            <Button alt="upload" src={upload}>
              UPLOAD
            </Button>
            </Link>
          </span>
        </span>
      </nav>
    </header>
  );
}

export default Navigation;
