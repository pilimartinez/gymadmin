import './UserDetail.css';

function UserDetail(props) {
        return (
                <li className="user-container" key={props.id}>
                        <button className="icon-container" onClick={props.click}>
                                <img alt="user photo" className="icon" src={props.icon}></img></button>
                        <button className="fullname" onClick={props.click}>{props.name}</button>
                        <button className="location" onClick={props.click}>{props.city + "," + " " + props.country}</button>
                </li>
        )
}

export default UserDetail;