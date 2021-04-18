import { createSlice } from "@reduxjs/toolkit";
import { Types } from "../actions/global.actions";

interface IGlobalReducerState {
    loggedIn : boolean;
}

const initialState: IGlobalReducerState = {
    loggedIn : false
}

const globalReducer = createSlice({
    name: "global",
    initialState,
    reducers: {
        setLoggedIn: (state: IGlobalReducerState, action : any) => {
            state.loggedIn = action.payload
        },

    },
    extraReducers: {
        // If you call them by actions you can set you can set them automatically based by type actions like so...
        // Or if you had middleware

        // [Types.GLOBAL_HOSPITAL_INFO_UPDATE]: (state: IGlobalReducerState, action) => {
        //     state.hospitalName = action.payload.hospitalName;
        //     state.operationRoom = action.payload.operationRoom;
        //     state.description = action.payload.description;
        // },
    }
});

//Getter
export const getLoggedIn = (state: any): boolean  => state.globalReducer.loggedIn;
//Setter
export const { setLoggedIn } = globalReducer.actions;


// There are no setter for actions as you handle it by calling the ACTIONS

// Getter with actions is the same
/*export const getHospitalData = (state: any) => ({
    hospitalName: state.globalReducer.hospitalName,
    operationRoom: state.globalReducer.operationRoom,
    description: state.globalReducer.description
});*/

export default globalReducer.reducer;