function Header() {

    return (
        <header className="header">
            <h1>My website</h1>
            <nav className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header