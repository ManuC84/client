import React from "react";
import "./UsersContainer.css";
import onlineIcon from "../../icons/onlineIcon.png";

const UsersContainer = ({ users, name }) => {
  return (
    <div className="usersBoxContainer">
      <div className="userHeader">
        <h3 style={{ marginLeft: 20 }}>Users</h3>
      </div>
      <div className="userList">
        {users.map((user, i) => {
          return (
            <div className="users" key={i}>
              <img className="onlineIcon" src={onlineIcon} alt="online" />

              {user.name === name ? (
                <h4 style={{ color: "blue" }}>{user.name} (you)</h4>
              ) : (
                <h4>{user.name}</h4>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersContainer;
