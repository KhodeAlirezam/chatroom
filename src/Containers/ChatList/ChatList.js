import "./ChatList.css";
import useUserData from "../../Hooks/useUserData";
import Header from "../../Components/Header/Header";
import ChatItem from "../../Components/ChatItem/ChatItem";

const ChatList = () => {
  const initData = useUserData("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="Chat-list">
      <Header name="Chatroom" />
      {initData.isError && "Error"}
      {initData.isLoading && "...loading"}
      {initData.userList.map((user) => {
        return <ChatItem data={user} key={user.id} />;
      })}
    </div>
  );
};

export default ChatList;
