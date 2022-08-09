import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import StopIcon from "@mui/icons-material/Stop";
import TimeAgo from "timeago-react";
import { useDispatch } from "react-redux";
import { selectImage } from "../features/appSlice";
import { getDocs } from "firebase/firestore";
import { colRef } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Chat({ id, username, timestamp, imageUrl, read, profilePic }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      getDocs(colRef).snapshot.doc.id.set({
        read: true,
      }, {merge: true});

      history(/chats/view)
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          tap to view -{" "}
          <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopIcon className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
