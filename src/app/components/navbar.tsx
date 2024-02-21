const NavbarComponent = () => {
    return (
        // Add Header/ Navbar for gocapje
        <nav className="gocapje-header" id="gocapje-header-container">
            <div className="gocapje-logo" id="gocapje-icon">
                <a href="/ " id="gocapje-brand-container">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt=""/>gocapje
                </a>
            </div>

            <div className="gocapje-navbar-list-menu" id="gocapje-list-menu">
                <ul>
                <li> <a href="/ ">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#portofolio">Portofolio</a> </li>
                
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;