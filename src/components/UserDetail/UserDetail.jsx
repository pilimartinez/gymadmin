import './UserDetail.css';

function UserDetail(props) {
        return (
                <li className="user-container" key={props.id}>
                        <a className="icon-container" onClick={props.click}>
                                <img alt="user photo" className="icon" src={props.icon}></img>
                        <p className="fullname" onClick={props.click}>{props.name}</p>
                        <p className="location" onClick={props.click}>{props.city + "," + " " + props.country}</p>
                        </a>
                </li>
        )
}

export default UserDetail;