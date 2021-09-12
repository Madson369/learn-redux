const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADICIONAR":
      return state = [...state, action.payload] ;

    default:
      return state;
  }
};

export default cartReducer;
