import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    yellowPlayer: {
      geti1: {
        name: "YellowGeti001",
        active: true,
        motion: false,
        location: 0,
        safe: true,
        moved: false,
        startPoint: { x: 7.26, y: 2.53, z: -6.21 },
      },
      geti2: {
        name: "YellowGeti2001",
        active: true,
        motion: false,
        location: 0,
        moved: false,
        startPoint: { x: 8.65, y: 2.53, z: -6.21 },
      },
      geti3: {
        name: "YellowGeti3001",
        active: true,
        motion: false,
        location: 0,
        safe: true,
        moved: false,
        startPoint: { x: 10.03, y: 2.53, z: -6.21 },
      },
      geti4: {
        name: "YellowGeti4001",
        active: true,
        motion: false,
        location: 0,
        safe: true,
        moved: false,
        startPoint: { x: 11.41, y: 2.53, z: -6.21 },
      },
    },
    bluePlayer: {
      geti1: {
        name: "BlueGeti001",
        active: true,
        motion: false,
        location: 10,
        safe: true,
        moved: false,
        startPoint: { x: 7.26, y: 2.53, z: 6.09 },
      },
      geti2: {
        name: "BlueGeti2001",
        active: true,
        motion: false,
        location: 10,
        safe: true,
        moved: false,
        startPoint: { x: 8.65, y: 2.53, z: 6.09 },
      },
      geti3: {
        name: "BlueGeti3001",
        active: true,
        motion: false,
        location: 10,
        safe: true,
        moved: false,
        startPoint: { x: 10.03, y: 2.53, z: 6.09 },
      },
      geti4: {
        name: "BlueGeti4001",
        active: true,
        motion: false,
        location: 10,
        safe: true,
        moved: false,
        startPoint: { x: 11.41, y: 2.53, z: 6.09 },
      },
    },
    greenPlayer: {
      geti1: {
        name: "GreenGeti001",
        active: true,
        motion: false,
        location: 20,
        safe: true,
        moved: false,
        startPoint: { x: -12.07, y: 2.53, z: 6.45 },
      },
      geti2: {
        name: "GreenGeti2001",
        active: true,
        motion: false,
        location: 20,
        safe: true,
        moved: false,
        startPoint: { x: -10.69, y: 2.53, z: 6.45 },
      },
      geti3: {
        name: "GreenGeti3001",
        active: true,
        motion: false,
        location: 20,
        safe: true,
        moved: false,
        startPoint: { x: -9.31, y: 2.53, z: 6.45 },
      },
      geti4: {
        name: "GreenGeti4001",
        active: true,
        motion: false,
        location: 20,
        safe: true,
        moved: false,
        startPoint: { x: -7.9, y: 2.53, z: 6.45 },
      },
    },
    redPlayer: {
      geti1: {
        name: "RedGeti001",
        active: true,
        motion: false,
        location: 30,
        safe: true,
        moved: false,
        startPoint: { x: -12.43, y: 2.53, z: -6.01 },
      },
      geti2: {
        name: "RedGeti2001",
        active: true,
        motion: false,
        location: 30,
        safe: true,
        moved: false,
        startPoint: { x: -11.05, y: 2.53, z: -6.01 },
      },
      geti3: {
        name: "RedGeti3001",
        active: true,
        motion: false,
        location: 30,
        safe: true,
        moved: false,
        startPoint: { x: -9.67, y: 2.53, z: -6.01 },
      },
      geti4: {
        name: "RedGeti4001",
        active: true,
        motion: false,
        location: 30,
        safe: true,
        moved: false,
        startPoint: { x: -8.2, y: 2.53, z: -6.01 },
      },
    },
  },
  reducers: {
    reset: (state, payload) => {
      console.log(payload);
      for (let data in state[payload.payload.team]) {
        if (state[payload.payload.team][data].name === payload.payload.name) {
          console.log(state[payload.payload.team][data]);
          if(payload.payload.team === 'yellowPlayer') {
            state[payload.payload.team][data].location = 0;
          }
          if(payload.payload.team === 'bluePlayer') {
            state[payload.payload.team][data].location = 10;
          }
          if(payload.payload.team === 'greenPlayer') {
            state[payload.payload.team][data].location = 20;
          } 
          if(payload.payload.team === 'redPlayer') {
            state[payload.payload.team][data].location = 30;
          }
          state[payload.payload.team][data].moved = false;
          state[payload.payload.team][data].motion = false;
        }
      }
    },
    setLocation: (state, payload) => {
      for (let data in state[payload.payload.playerName]) {
        state[payload.payload.playerName][data].motion = false;
        if (
          state[payload.payload.playerName][data].name === payload.payload.name
        ) {
          if(state[payload.payload.playerName][data].location + payload.payload.location <= 40) {
            state[payload.payload.playerName][data].location +=
              payload.payload.location;
            state[payload.payload.playerName][data].moved = true;
          } else {
            let temp = state[payload.payload.playerName][data].location + payload.payload.location;
            state[payload.payload.playerName][data].location = temp - 40
          }
          if(state[payload.payload.playerName][data].location === 1 || state[payload.payload.playerName][data].location === 7 || state[payload.payload.playerName][data].location === 11 || state[payload.payload.playerName][data].location === 17 || state[payload.payload.playerName][data].location === 21 || state[payload.payload.playerName][data].location === 27 || state[payload.payload.playerName][data].location === 31 || state[payload.payload.playerName][data].location === 37) {
            state[payload.payload.playerName][data].safe = true
          } else {
           state[payload.payload.playerName][data].safe = false
          }
        }
      }
    },
    setWin: (state,payload) => {
      for(let data in state[payload.payload.playerName]) {
        if(payload.payload.playerName === 'yellowPlayer' && payload.payload.location >= 39 && state[payload.payload.playerName][data].name === payload.payload.player.name) {
          state[payload.payload.playerName][data].active = false
          state[payload.payload.playerName][data].moved = false
          state[payload.payload.playerName][data].location= 0
         } 
         if(payload.payload.playerName === 'bluePlayer' && payload.payload.location >= 9 && payload.payload.location < 10 && state[payload.payload.playerName][data].name === payload.payload.player.name) {
          state[payload.payload.playerName][data].active = false
          state[payload.payload.playerName][data].moved = false
          state[payload.payload.playerName][data].location= 0
         }
         if(payload.payload.playerName === 'greenPlayer' && payload.payload.location >= 19 && payload.payload.location < 20 && state[payload.payload.playerName][data].name === payload.payload.player.name) {
          state[payload.payload.playerName][data].active = false
          state[payload.payload.playerName][data].moved = false
          state[payload.payload.playerName][data].location= 0
         }
         if(payload.payload.playerName === 'redPlayer' && payload.payload.location >= 29 && payload.payload.location < 30 && state[payload.payload.playerName][data].name === payload.payload.player.name) {
          state[payload.payload.playerName][data].active = false
          state[payload.payload.playerName][data].moved = false
          state[payload.payload.playerName][data].location= 0
         }
      }
    },
    setMotion: (state, payload) => {
      for (let data in state[payload.payload]) {
        state[payload.payload][data].motion = true;
      }
    },
  },
});
export const { setLocation, setMotion, checkCollision, reset, setWin } =
  dataSlice.actions;
export default dataSlice.reducer;
