export const initialState = {
  basket: [],
  user: null,
};
//the first file sets up the data layer so that it could work
//reducer is used to listen for action and to update the state of the store

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0) || 0;
};

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

      //clone the basket
      let newBasket = [...state.basket];

      //check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      //
      if (index >= 0) {
        //if the product exist remove it
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
export default reducer;
