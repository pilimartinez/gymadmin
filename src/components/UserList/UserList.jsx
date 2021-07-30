import React, { useState, useEffect } from 'react';
import './UserList.css';
import UserDetail from '../UserDetail/UserDetail';
import Modal from '../Modal/Modal';
import { getUsers } from '../../api';

function UserList() {
  const [UserList, setUserList] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const selectUser = (user) => {
    setCurrentUser(user)
  }

  const morePages = (isNext) => {
    const actualPage = isNext ? currentPage + 1 : currentPage - 1
    getUsers(actualPage).then((moreUsers) => setUserList(moreUsers.results))
    setCurrentPage(actualPage)
  }

  useEffect(() => {
    getUsers(currentPage).then((users) => (setUserList(users.results)))
  }, []);

  return (
    <div className="container">
      <section>
        <h3 className="category">MEMBERS</h3>
        <ul className="user-list"> {UserList.map((user, index) =>
          <UserDetail id={user.id} name={user.name.first + " " + user.name.last} icon={user.picture.thumbnail} key={index} city={user.location.city} country={user.location.country} click={() => selectUser(user)} />
        )}
        </ul>
      </section>
      {currentUser ? <Modal user={currentUser} closeModal={() => setCurrentUser(null)}/> : ""}
      <div className="page-navigation">
        {currentPage != 1 ? <button className="page-button" onClick={() => morePages(false)}>{"< Previous"}</button> : ""}
        <p>{currentPage} of {totalPages}</p>
        <button className="page-button" onClick={() => morePages(true)}>{"Next >"}</button>
      </div>
    </div>
  );
}

export default UserList;