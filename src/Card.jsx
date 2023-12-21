import profilePic from './assets/profile.jpg'
import Button from './Button/Button.jsx'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic } alt="profile picture"></img>
            <h2 className="card-title">Web site</h2>
            <p className="card-text">i make figure custom and play video games</p>
            <Button/>
        </div>
    );
}


export default Card