import { createSlice } from "@reduxjs/toolkit";
let i = 0;
const switchPlayers = createSlice({
  name: "switchPlayers",
  initialState: {
    players: ["yellowPlayer", "bluePlayer", "greenPlayer", "redPlayer"],
    activePlayer: 'yellowPlayer',
  },
  reducers: {
    switchIt: (state) => {
      ++i;
      if (i > 3) i = 0;
      state.activePlayer = state.players[i];
    },
    winner: (state, payload) => {
       const play = state.players.filter(
        (player) => player !== payload.payload
      );
      state.players = play
    },
  },
});
export const { switchIt, winner } = switchPlayers.actions;
export default switchPlayers.reducer;
