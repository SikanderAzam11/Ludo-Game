import { createSlice } from "@reduxjs/toolkit";
let i = 0;
const switchPlayers = createSlice({
    name: 'switchPlayers',
    initialState: {
        players: ['yellow','blue'],
        activePlayer: 'yellow',
    },
    reducers: {
        switchIt: (state) => {
            ++i;
            if(i > 1) i = 0 
            console.log(i);
            state.activePlayer = state.players[i]
        }
    }
});
export const {switchIt} = switchPlayers.actions;
export default switchPlayers.reducer;

