import './Modal.css';

function Modal({ display, user, click }) {
  const modalClass = display ? "visible" : "invisible"

  return (
    <div className={modalClass} >
      {/* <div className="modal-content">
        <section className="header-modal">
          <div className="main-info">
            <img alt="user-icon" className="user-icon" src={user.picture.large}></img>
            <div className="user-data">
              <p className="relevant-title">{user.name.first + " " + user.name.last}</p>
              <p>{"Username:" + " " + user.login.username}</p>
              <p>{"Age:" + " " + user.dob.age}</p>
              <p>{"Gender:" + " " + user.gender}</p>
            </div>
          </div>
          <button onClick={click} className="modal-close" arial-label="close">X</button>
        </section>
        <section className="modal-body">
          <div className="contact">
            <p className="relevant-title">Contact</p>
            <p className="overview">{"City:" + " " + user.location.city}</p>
            <p className="overview">{"Country:" + " " + user.location.country}</p>
            <p className="overview">{"State:" + " " + user.location.state}</p>
          </div>
          <div className="contact">
            <p className="overview">{"Phone:" + " " + user.phone}</p>
            <p className="overview">{"Cellphone:" + " " + user.cell}</p>
            <p className="overview">{"Email:" + " " + user.email}</p>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default Modal;