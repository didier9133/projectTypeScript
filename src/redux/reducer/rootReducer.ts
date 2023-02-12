import { combineReducers } from "@reduxjs/toolkit";
import { peopleSlice, uiSlice }from '../slices/'

const rootReducer = combineReducers({
    data: peopleSlice,
    ui:uiSlice
});
  
export default rootReducer;