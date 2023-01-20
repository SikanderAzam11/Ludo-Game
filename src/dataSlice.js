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
        moved: false,
        id: 296,
        startPoint: { x: 7.26, y: 2.53, z: -6.21 },
      },
      geti2: {
        name: "YellowGeti2001",
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 304,
        startPoint: { x: 8.65, y: 2.53, z: -6.21 },
      },
      geti3: {
        name: "YellowGeti3001",
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 302,
        startPoint: { x: 10.03, y: 2.53, z: -6.21 },
      },
      geti4: {
        name: "YellowGeti4001",
        active: true,
        motion: false,
        location: 0,
        moved: false,
        id: 310,
        startPoint: { x: 11.41, y: 2.53, z: -6.21 },
      },
    },
    bluePlayer: {
      geti1: {
        name: "BlueGeti001",
        active: true,
        motion: false,
        location: 1,
        moved: false,
        id: 308,
        startPoint: { x: 7.26, y: 2.53, z: 6.09 },
      },
      geti2: {
        name: "BlueGeti2001",
        active: true,
        motion: false,
        location: 1,
        moved: false,
        id: 302,
        startPoint: { x: 8.65, y: 2.53, z: 6.09 },
      },
      geti3: {
        name: "BlueGeti3001",
        active: true,
        motion: false,
        location: 1,
        moved: false,
        id: 309,
        startPoint: { x: 10.03, y: 2.53, z: 6.09 },
      },
      geti4: {
        name: "BlueGeti4001",
        active: true,
        motion: false,
        location: 1,
        moved: false,
        id: 299,
        startPoint: { x: 11.41, y: 2.53, z: 6.09 },
      },
    },
  },
  reducers: {
    reset: (state, payload) => {
      console.log(payload);
      for (let data in state[payload.payload.team]) {
        if (state[payload.payload.team][data].name === payload.payload.name) {
          console.log(state[payload.payload.team][data]);
          state[payload.payload.team][data].location = 0;
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
          state[payload.payload.playerName][data].location +=
            payload.payload.location;
          state[payload.payload.playerName][data].moved = true;
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
export const { setLocation, setMotion, checkCollision, reset } =
  dataSlice.actions;
export default dataSlice.reducer;
