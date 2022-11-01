import "./Navigation.scss"

function Navigation(){
    return(
        <nav>I'm a Nav Bar!
            <Logo/>
            <SearchBar/>
            <Button/>
            <ProfileIcon/>
        </nav>        
    );
}

function Logo() {
    return(
        <div>{/*Logo Image Here*/}</div>
    );
};

function SearchBar() {
    return(
        <div>
            <img alt="#"/><input type="text" placeholder="Search"/>
        </div>
    );
};

function Button(){
    return(
        <button><img alt="#"/>UPLOAD</button>
    )
}

function ProfileIcon(){
    return(
        <div>{/*Logo Image Here*/}</div>
    )
}

export default Navigation;