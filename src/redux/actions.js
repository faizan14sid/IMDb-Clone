const actions = {
    SIGNIN: "SIGNIN",
    SIGNOUT: "SIGNOUT",
  
    // action creators -> function -> action objects
    signin: (email, password) => ({
      type: actions.SIGNIN,
      payload: { email, password }
    }),
  
    signout: () => ({
      type: actions.SIGNOUT
    })
  };
  
  export default actions;