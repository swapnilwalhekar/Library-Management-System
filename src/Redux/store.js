import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { bookReducer } from "./Reducer/reducer";

const reducers = combineReducers({
  stateData: bookReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
