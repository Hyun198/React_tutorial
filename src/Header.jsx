import Proptypes from 'prop-types'


function Header(props) {

    if (props.isLoggedIn) { 
        return (
            <header className="header">
                <div className="headerLine">
                    <h1>My website</h1>
                    <h1 className="welcome-message">Welcome { props.username} </h1>
                </div>
                
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
        )
    } else {
        return (
            <header className="header">
                <div className="headerLine">
                    <h1>My website</h1>
                    <h1 className="log-prompt">Please Log in to continue </h1>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <hr></hr>
            </header>)
    }
}
Header.proptypes = {
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}

Header.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}


export default Header