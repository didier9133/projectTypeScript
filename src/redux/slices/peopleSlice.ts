import { createSlice } from "@reduxjs/toolkit";
import { PersonSelect } from "@/models";
import { People } from "@/data/people";

interface initialstateTypes {
  personsLiked: PersonSelect[];
  personTable: PersonSelect[];
}

interface ActionType {
  payload: PersonSelect[];
  type: string;
}

const setLocalstorage = (key: string, value: PersonSelect[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const setInitialState = (): initialstateTypes => {
  const initialState = localStorage.getItem("likes")
    ? {
        personsLiked: JSON.parse(localStorage.getItem("likes") as string),
        personTable: [...People],
      }
    : { personsLiked: [], personTable: [...People] };

  return initialState;
};

const dataSlice = createSlice({
  name: "data",
  initialState: setInitialState(),
  reducers: {
    SET_PEOPLE_LIKE: (state, acttions: ActionType) => {
      state.personsLiked = acttions.payload;
      setLocalstorage("likes", acttions.payload);
    },
  },
});

export const { SET_PEOPLE_LIKE } = dataSlice.actions;
export default dataSlice.reducer;
