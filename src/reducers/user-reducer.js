const INIT_STATE = {
  id: null,
  username: "",
  company: "",
  type: "",
  token: "",
  isError: false,
  errorLogin: "",
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        company: action.payload.company,
        type: action.payload.type,
        token: action.payload.token,
      };
    case "LOGIN_ERROR":
      return { ...state, errorLogin: action.payload };
    case "LOGOUT":
      return INIT_STATE;
    default:
      return state;
  }
};
