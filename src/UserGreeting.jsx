import Proptypes from 'prop-types'

function UserGreeting(props) {
   
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const LogPrompt = <h2 className="log-prompt">Please Log in to continue</h2>

    return (props.isLoggedIn ? welcomeMessage : LogPrompt)
    
}
UserGreeting.proptypes = {
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}

export default UserGreeting