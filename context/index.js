import React, { useReducer, createContext } from 'react';

export const RoboCAPContext = createContext();
const initialState = {
  productType: null,
  vesselSize: null,
  heating: null,
  nozzle: null,
  index: 0,
  isModalState: true,
  submitted: false,
  isBuildFinalized: false,
  imageRoot: '/build/Base.jpg',
  machines: [],
  output: "-",
  savings: "-"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        productType: action.payload.type,
        imageRoot: action.payload.root,
        vesselSize: action.payload.vessel,
        heating: action.payload.heating,
        nozzle: action.payload.nozzle,
        output: action.payload.output,
        savings: action.payload.savings,
      };
    case 'SET_VESSEL_SIZE':
      return {
        ...state,
        vesselSize: action.payload.size,
        imageRoot: action.payload.root,
      };
    case 'SET_HEATING':
      return {
        ...state,
        heating: action.payload.heating,
        imageRoot: action.payload.root,
      };
    case 'SET_NOZZLE':
      return {
        ...state,
        nozzle: action.payload.nozzle,
        imageRoot: action.payload.root,
        output: action.payload.output,
        savings: action.payload.savings,
      };
    case 'SET_MODAL_STATE':
      return {
        ...state,
        isModalState: action.payload,
      };
    case 'SET_BUILD_STATE':
      return {
        ...state,
        isBuildFinalized: action.payload.buildState,
        machines: action.payload.sessionMachines,
      };
    case 'SET_IMAGE_ROOT':
      return {
        ...state,
        imageRoot: action.payload,
      };
    case 'ADD_BUILD_STATE':
      return {
        ...state,
        productType: null,
        vesselSize: null,
        heating: null,
        nozzle: null,
        imageRoot: '/build/Base.jpg',
        index: state.machines.length,
        isBuildFinalized: false,
      };
    case 'SUBMIT':
      return {
        ...state,
        submitted: true,
      };
    case 'DELETE_BUILD':
      return {
        ...state,
        machines: action.payload.build,
        isBuildFinalized: action.payload.finalized,
      };
    case 'BACK_TO_REVIEW':
      return {
        ...state,
        isBuildFinalized: action.payload,
      };
    case 'EDIT_BUILD_STATE':
      return {
        ...state,
        productType: action.payload.productType,
        vesselSize: action.payload.vesselSize,
        heating: action.payload.heating,
        nozzle: action.payload.nozzle,
        imageRoot: action.payload.imageRoot,
        index: action.payload.index,
        isBuildFinalized: false,
      };
    case 'JUMP_REVIEW':
      return {
        ...state,
        isBuildFinalized: true,
        machines: action.payload.machines,
        isModalState: false,
        imageRoot: action.payload.root,
      };
    default:
      return { ...state };
  }
};

const RoboCAPContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RoboCAPContext.Provider value={[state, dispatch]}>{props.children}</RoboCAPContext.Provider>
  );
};

export default RoboCAPContextProvider;
