import NavLink from "./NavLink";
import "./Navbar.css"
import NavBtn from "./NavBtn";

function NavBar(){
    return(
        <header className="NavBar">
            <div className="NavElement">
                <NavBtn  item="Resume" />

                <NavLink item="Contact"/>                
                <NavLink item="Work"/>
                <NavLink item="Stack" url="#skills"/>                
                <NavLink item="About" url="#home"/>
            </div>
        </header>
    );
}

export default NavBar;