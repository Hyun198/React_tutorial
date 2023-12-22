import Button from './Button/Button.jsx'
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.profilePic } alt="profile picture"></img>
            <h2 className="card-title">{props.name }</h2>
            <h3 className="card-age">{ props.age}</h3>
            <p className="card-text">{props.desc}</p>
            <Button/>
        </div>
    );
}
Card.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    desc: PropTypes.string,
    profilePic: PropTypes.string,
}

Card.defaultProps = {
    name: "Guest",
    age: 0,
    desc: "None",
    profilePic: "/src/assets/guest.jpg",
}

export default Card