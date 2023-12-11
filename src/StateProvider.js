import { createContext, useReducer, useContext } from "react";

// This is the dataLayer
export const StateContext = createContext();

// Build A Provider
// State management is like creating a global variable that can be accessed by any component in your React application instead of passing props from grandparent to parent to child.
// `initialState` represents how the data layer looks at the beginning.
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// This is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);
