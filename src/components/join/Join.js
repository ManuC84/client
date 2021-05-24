import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import "./Join.css";
const ENDPOINT = process.env.REACT_APP_DEPLOYMENT_URL;

let socket;

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userError, setUserError] = useState("");

  socket = io(ENDPOINT, {
    transports: ["websocket", "polling", "flashsocket"],
  });

  useEffect(() => {
    const userCheck = () => {
      socket.emit("userCheck", { name, room });
      socket.on("userCheckResponse", ({ error }) => {
        if (error) {
          setUserError(error);
        }
      });
    };
    userCheck();
  }, [name, room]);

  const errorHandling = (event) => {
    if (!name || !room) {
      event.preventDefault();
      window.alert("Please enter your name and the room you want to join");
    }

    if (userError) {
      event.preventDefault();
      window.alert(userError);
      setUserError("");
      setName("");
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            className="joinInput"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Join using room name"
            type="text"
            className="joinInput mt-20"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => errorHandling(event)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
