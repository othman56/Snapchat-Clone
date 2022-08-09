import React, { useEffect } from "react";
import { selectSelectedImage } from "../features/appSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import "./ChatView.css";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    history("/chats");
  };
  return (
    <div className="chatView">
      <img src={selectedImage} onClick={exit} alt="" />
    </div>
  );
}

export default ChatView;
