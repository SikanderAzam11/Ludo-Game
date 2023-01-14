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
    bluePlayer: {
      geti1: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 204
      },
      geti2: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 205
      },
      geti3: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 206
      },
      geti4: {
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id:207
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
          console.log(state[payload.payload][data]);
          state[payload.payload][data].motion = true
        }
        return state
      }
      }
});
export const {getLocation,setLocation,setMotion} =  dataSlice.actions;
export default dataSlice.reducer;
