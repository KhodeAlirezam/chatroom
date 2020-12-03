import "./MessageInput.css";
import { useState } from "react";
import { useStateValue } from "../../StateContext/stateContext";
import { ACTIONS } from "../../Constants/Actions";

const MessageInput = (props) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [, dispatch] = useStateValue();
  const buttonStyle =
    currentMessage !== "" && currentMessage !== " " ? "send active" : "send";

  const handleMessage = (id) => {
    return () => {
      dispatch({
        type: ACTIONS.SET_MESSAGE,
        value: {
          userId: id,
          message: "this is a fake reply",
        },
      });
    };
  };

  const handleChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handlePress = (e) => {
    if (e.key === "Enter") handleClick();
  };

  const handleClick = () => {
    dispatch({
      type: ACTIONS.SET_MESSAGE,
      value: {
        userId: props.userId,
        message: currentMessage,
      },
    });
    setTimeout(handleMessage(props.userId), 5000);
    setCurrentMessage("");
  };

  return (
    <div className="Input" onKeyDown={handlePress}>
      <input
        onChange={handleChange}
        value={currentMessage}
        placeholder="write your message..."
      />
      <div className={buttonStyle} onClick={handleClick}>
        send
      </div>
    </div>
  );
};

export default MessageInput;
