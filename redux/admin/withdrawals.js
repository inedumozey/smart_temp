import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


// resend verification link
export const withdawalRequest= createAsyncThunk(
    'withdraw/withdawalRequest',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.post('/withdrawal/request', data, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                });
                return res.data;
            }            
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)


const initialState = {
    withdraws: { isLoading: false, status: false, msg: ''}
}

export const withdrawalsReducer = createSlice({
    name: 'withdraws',
    initialState,
    extraReducers: {

        // make withdrawal request
        [withdawalRequest.pending]: (state)=>{
            state.withdraws.isLoading = true;
        },
        [withdawalRequest.fulfilled]: (state, {payload})=>{
            state.withdraws.isLoading = false;
            state.withdraws.status = payload.status;
            state.withdraws.msg = payload.msg;
        },
        [withdawalRequest.rejected]: (state, {payload})=>{
            state.withdraws.isLoading = false;
            if(payload){
                state.withdraws.status = payload.status;
                state.withdraws.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.withdraws.status = false;
                state.withdraws.msg = 'Error occured';
            }
        },
    }
    
})

export default withdrawalsReducer.reducer