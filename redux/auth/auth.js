import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


// sign up action
export const signup = createAsyncThunk(
    'auth/signup',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.post(`/auth/signup`, data)
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// sign in action
export const signin= createAsyncThunk(
    'auth/signin',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.post(`/auth/signin`, data);
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// logout in action
export const logout= createAsyncThunk(
    'auth/logout',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`/auth/logout`)
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)


// reset password request
export const resetPasswordRequest= createAsyncThunk(
    'auth/resetPasswordRequest',
    async(data, {rejectWithValue})=>{
        
        try{
            const res = await axios.post(`/auth/reset-pass-request`, data);
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// reset password
export const resetPassword= createAsyncThunk(
    'auth/resetPassword',
    async(options, {rejectWithValue})=>{
        try{
            const res = await axios.post(`/auth/reset-pass?token=${options.token}`, options.data);
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// verify account
export const verifyAccount= createAsyncThunk(
    'auth/verifyAccount',
    async(token, {rejectWithValue})=>{
        try{
            const res = await axios.get(`/auth/verify-account?token=${token}`);
            return res.data
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

// get user
export const getUser= createAsyncThunk(
    'auth/getUser',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){

                const res = await axios.get(`/auth/get-profile`, {
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

// resend verification link
export const sendVerificationLink= createAsyncThunk(
    'auth/verifyLink',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.get('/auth/resend-verification-link', {
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
    signup: { isLoading: false, status: false, msg: ''},
    signin: { isLoading: false, status: false, msg: ''},
    resetPassReq: { isLoading: false, status: false, msg: '', token: '' },
    resetPass: { isLoading: false, status: false, msg: '' },
    verify: { isLoading: false, status: false, msg: '' },
    user: { isLoading: false, status: false, msg: '', data: ''},
    sendVerifyLink: { isLoading: false, status: false, msg: ''},
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {

        // handleSign up

        [signup.pending]: (state)=>{
            state.signup.isLoading = true;
        },
        [signup.fulfilled]: (state, {payload})=>{
            state.signup.isLoading = false;
            state.signup.status = payload.status;
            state.signup.msg = payload.msg;
        },
        [signup.rejected]: (state, {payload})=>{
            state.signup.isLoading = false;
            if(payload){
                state.signup.status = payload.status;
                state.signup.msg = payload.msg;
                
            }else{
                // to get rid of next js server error
                state.signup.status = false;
                state.signup.msg = 'Error occured';
            }
        },


        // handleSign in
        [signin.pending]: (state)=>{
            state.signin.isLoading = true;
        },
        [signin.fulfilled]: (state, {payload})=>{
            state.signin.isLoading = false;
            state.signin.status = payload.status;
            state.signin.msg = payload.msg;
        },
        [signin.rejected]: (state, {payload})=>{
            state.signin.isLoading = false;
            if(payload){
                state.signin.status = payload.status;
                state.signin.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.signin.status = false;
                state.signin.msg = 'Error occured';
            }
        },

        // reset password request
        [resetPasswordRequest.pending]: (state)=>{
            state.resetPassReq.isLoading = true;
        },
        [resetPasswordRequest.fulfilled]: (state, {payload})=>{
            state.resetPassReq.isLoading = false;
            state.resetPassReq.status = payload.status;
            state.resetPassReq.msg = payload.msg;
            state.resetPassReq.token = payload.token;
        },
        [resetPasswordRequest.rejected]: (state, {payload})=>{
            state.resetPassReq.isLoading = false;
            if(payload){
                state.resetPassReq.status = payload.status;
                state.resetPassReq.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.resetPassReq.status = false;
                state.resetPassReq.msg = 'Error occured';
            }
        },

        // reset password
        [resetPassword.pending]: (state)=>{
            state.resetPass.isLoading = true;
        },
        [resetPassword.fulfilled]: (state, {payload})=>{
            state.resetPass.isLoading = false;
            state.resetPass.status = payload.status;
            state.resetPass.msg = payload.msg;
        },
        [resetPassword.rejected]: (state, {payload})=>{
            state.resetPass.isLoading = false;
            if(payload){
                state.resetPass.status = payload.status;
                state.resetPass.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.resetPass.status = false;
                state.resetPass.msg = 'Error occured';
            }
        },

        // verify account
        [verifyAccount.pending]: (state)=>{
            state.verify.isLoading = true;
        },
        [verifyAccount.fulfilled]: (state, {payload})=>{
            state.verify.isLoading = false;
            state.verify.status = payload.status;
            state.verify.msg = payload.msg;
        },
        [verifyAccount.rejected]: (state, {payload})=>{
            state.verify.isLoading = false;
            if(payload){
                state.verify.status = payload.status;
                state.verify.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.verify.status = false;
                state.verify.msg = 'Error occured';
            }
        },

        // get user
        [getUser.pending]: (state)=>{
            state.user.isLoading = true;
        },
        [getUser.fulfilled]: (state, {payload})=>{
            state.user.isLoading = false;
            state.user.status = payload.status;
            state.user.msg = payload.msg;
            state.user.data = payload.data;
        },
        [getUser.rejected]: (state, {payload})=>{
            state.user.isLoading = false;
            if(payload){
                state.user.status = payload.status;
                state.user.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.user.status = false;
                state.user.msg = 'Error occured';
            }
        },

        // resend verification link
        [sendVerificationLink.pending]: (state)=>{
            state.sendVerifyLink.isLoading = true;
        },
        [sendVerificationLink.fulfilled]: (state, {payload})=>{
            state.sendVerifyLink.isLoading = false;
            state.sendVerifyLink.status = payload.status;
            state.sendVerifyLink.msg = payload.msg;
        },
        [sendVerificationLink.rejected]: (state, {payload})=>{
            state.sendVerifyLink.isLoading = false;
            if(payload){
                state.sendVerifyLink.status = payload.status;
                state.sendVerifyLink.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.sendVerifyLink.status = false;
                state.sendVerifyLink.msg = 'Error occured';
            }
        },
    }
    
})

export default authReducer.reducer