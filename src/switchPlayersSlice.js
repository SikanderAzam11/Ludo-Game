import { createSlice } from "@reduxjs/toolkit";
let i = 0;
const switchPlayers = createSlice({
    name: 'switchPlayers',
    initialState: {
        players: ['Yellow','Blue'],
        activePlayer: 'Yellow',
    },
    reducers: {
        switchIt: (state) => {
            ++i;
            if(i > 1) i = 0
            state.activePlayer = state.players[i]
        }
    }
});
export const {switchIt} = switchPlayers.actions;
export default switchPlayers.reducer;

