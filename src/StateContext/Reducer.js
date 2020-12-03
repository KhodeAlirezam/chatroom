import { ACTIONS } from "../Constants/Actions";

const reducer = (state, action) => {
  let newUser = {};
  let newState = {};
  switch (action.type) {
    case ACTIONS.SET_USER:
      if (state[action.value.id] === undefined) {
        newUser = {
          name: action.value.name,
          username: action.value.username,
          phone: action.value.phone,
          messages: [],
        };
        newState = { ...state, [action.value.id]: newUser };
        return newState;
      } else {
        return state;
      }

    case ACTIONS.SET_MESSAGE: {
      const messages =
        state[action.value.userId].messages === []
          ? [action.value.message]
          : [...state[action.value.userId].messages, action.value.message];
      newUser = {
        ...state[action.value.userId],
        messages: messages,
      };
      newState = { ...state, [action.value.userId]: newUser };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
