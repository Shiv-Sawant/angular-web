import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

//create user
export const createDeal = createAsyncThunk('createDeal', async ({ rejectWithValue }) => {
    try {
        let userId = localStorage.getItem('userid')
        console.log(userId, "user id ")
        const res = await axios.get(`http://localhost:3000/api/deal?${userId}`)
        console.log(res, "slice response ")
        return res
    } catch (error) {
        alert("deals is not created")
        return rejectWithValue(error)
    }
})

 const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        deals: [],
        loading: false,
        error: null,
        searchData: ""
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
            console.log(action.payload, "search action")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createDeal.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.deals = action.payload;
        })
    }

})

export default userDetail.reducer;
export const { searchUser } = userDetail.actions
