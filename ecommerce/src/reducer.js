export const initialState = {
  basket: [],
};
//the first file sets up the data layer so that it could work
//reducer is used to listen for action and to update the state of the store

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic of adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic of removing from basket
      return { state };
    default:
      return state;
  }
}
export default reducer;
