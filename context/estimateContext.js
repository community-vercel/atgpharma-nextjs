import React, { useReducer, createContext } from "react";

export const EstimateContext = createContext();
const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ESTIMATE_SELECTION":
      return action.payload;
    default:
      return { ...state };
  }
};

const EstimateContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EstimateContext.Provider value={[state, dispatch]}>
      {props.children}
    </EstimateContext.Provider>
  );
};

export default EstimateContextProvider;
