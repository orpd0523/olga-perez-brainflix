import "./Navigation.scss";
import logoImage from "../../assets/images/BrainFlix-logo.svg"
import search from "../../assets/icons/search.svg"
import upload from "../../assets/icons/upload.svg"

function Navigation() {
  return (
    <header>
      <nav>
      <Logo />
      <SearchBar />
      <Button />
      <ProfileIcon />
      </nav>
    </header>
  );
}

function Logo() {
  return <div><img alt="brain flix logo" src={logoImage}/></div>;
}

function SearchBar() {
  return (
    <div>
      <img alt="search icon" src={search}/>
      <input type="text" placeholder="Search" />
    </div>
  );
}

function Button() {
  return (
    <button>
      <img alt="upload icon" src={upload} />
      UPLOAD
    </button>
  );
}

function ProfileIcon() {
  return <div>{/*Logo Image Here*/}</div>;
}

export default Navigation;
