import "./Header.scss"
const Header = () => {
    return(
        <header>
            <div className="Header-Inner">                
            <a href="index.html" className="Header-LogoLink">
            //tu ide logo
            </a>

                <nav className="Header-Nav">
                    <a href="index,html" className="Header-Link">Početna</a>
                    <a href="Registracija" className="Header-Link">Registracija</a>
                    <a href="Prijava" className="Header-Link">Prijava</a>
                </nav>
            </div>
        </header>
    )

}

export default Header;