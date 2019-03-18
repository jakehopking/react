import { EDIT_STREAM } from "./src/actions/types";

// Editing records based on id, array vs object

// Array based approach
const arrStreamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

// Object based approach
const objStreamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // ES5:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload
      // return newState;
      // ES6: (in this instance [] is NOT an array. It's referred to as key interpolation)
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}