import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
      yellowPlayer: {
      geti1: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 314
      },
      geti2: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 315
      },
      geti3: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 316
      },
      geti4: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id:317
      }
    },
    bluePlayer: {
      geti1: {
        active: true,
        motion: false,
        location: 10,
        moved: false,
        id: 303
      },
      geti2: {
        active: true,
        motion: false,
        location: 10,
        moved: false,
        id: 304
      },
      geti3: {
        active: true,
        motion: false,
        location: 10,
        moved: false,
        id: 305
      },
      geti4: {
        active: true,
        motion: false,
        location: 10,
        moved: false,
        id:306
      }
      },
    },
      reducers: {
        getLocation: (state,payload) => {
        console.log(state,payload);
        },
        setLocation: (state,payload) => {
        for(let data in state[payload.payload.playerName]) {
          state[payload.payload.playerName][data].motion = false
          if(state[payload.payload.playerName][data].id === payload.payload.id){
           state[payload.payload.playerName][data].location += payload.payload.location
           state[payload.payload.playerName][data].moved = true
          }
        }
        return state
      },
      setMotion: (state,payload) => {
        console.log(payload);
        for(let data in state[payload.payload]) {
          state[payload.payload][data].motion = true
          console.log(state[payload.payload][data]);
        }
      }
      }
});
export const {getLocation,setLocation,setMotion} =  dataSlice.actions;
export default dataSlice.reducer;
