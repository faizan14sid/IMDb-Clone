const initState = {
    user: null,
    isAuth: false
  };
  
  export default function reducer(state = initState, action) {
    switch (action.type) {
      case "SIGNIN":
        return {
          ...state,
          isAuth: true,
          user: action.payload.email
        };
      case "SIGNOUT":
        return {
          ...state,
          isAuth: false,
          user: null
        };
      default:
        return state;
    }
  }