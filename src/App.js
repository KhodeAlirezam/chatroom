import "./App.css";
import ChatList from "./Containers/ChatList/ChatList";
import Contacts from "./Containers/Contacts/Contacts";
import ChatPage from "./Containers/ChatPage/ChatPage";
import { StateProvider } from "./StateContext/stateContext";
import reducer from "./StateContext/Reducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const initialState = {};

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route exact path="/" component={ChatList} />
          <Route exact path="/contacts" component={Contacts} />
          <Route path="/*" component={ChatPage} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
