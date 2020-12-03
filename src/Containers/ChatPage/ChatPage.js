import "./ChatPage.css";
import Header from "../../Components/Header/Header";
import MessageInput from "../../Components/MessageInput/MessageInput";
import { useStateValue } from "../../StateContext/stateContext";

const ChatPage = (props) => {
  const [state] = useStateValue();

  const userId = props.location.pathname.slice(
    1,
    props.location.pathname.length
  );

  const messages = state[userId].messages.map((message, index) => {
    const isRecieved = message === "this is a fake reply" ? "Received" : "";
    return (
      <div className={isRecieved} key={index}>
        <p className={isRecieved}>{message}</p>
      </div>
    );
  });

  return (
    <div className="Chat-Page">
      <Header name={state[userId].name} />
      <div className="Messages-Page">
        {(messages.length <= 0 && "no messages yet") || messages}
      </div>
      <MessageInput userId={userId} />
    </div>
  );
};

export default ChatPage;
