import "./ChatItem.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateContext/stateContext";
import { ACTIONS } from "../../Constants/Actions";

const ChatListItem = (props) => {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const userData = props.data;

  const handleClick = () => {
    history.push(`/${userData.id}`);
    dispatch({
      type: ACTIONS.SET_USER,
      value: userData,
    });
  };

  return (
    <div className="Chat-Item" onClick={handleClick}>
      {(userData.profilePic && (
        <img src={userData.profilePic.url} alt={userData.profilePic.alt} />
      )) || (
        <div className="Profile-Pic">
          <span>{userData.name[0]}</span>
        </div>
      )}
      <div className="Info">
        <h3>{userData.name}</h3>
        {state[userData.id] && state[userData.id].messages && (
          <p>
            {
              state[userData.id].messages[
                state[userData.id].messages.length - 1
              ]
            }
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;
