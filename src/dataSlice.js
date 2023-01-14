import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
      geti1: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 211
      },
      geti2: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 212
      },
      geti3: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 213
      },
      geti4: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id:214
      }
      },
      reducers: {
        getLocation: (state,payload) => {
        console.log(state,payload);
        },
        setLocation: (state,payload) => {
        for(let data in state) {
          state[data].motion = false
          if(state[data].id === payload.payload.id){
           state[data].location += payload.payload.location
           state[data].moved = true
          }
        }
        return state
      },
      setMotion: (state) => {
        console.log('dis');
        
        for(let data in state) {
          state[data].motion = true
        }
        return state
      }
      }
});
export const {getLocation,setLocation,setMotion} =  dataSlice.actions;
export default dataSlice.reducer;
