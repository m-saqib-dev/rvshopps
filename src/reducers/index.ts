// import * as actions from '../actions/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignInState{
  userData:any|null;
  loading:boolean;
  error:string|null;
  isAuthanticated:boolean
}
const initialState:SignInState={
  userData:{username:'',password:''},
  loading:false,
  error:null,
  isAuthanticated:false
}

const userSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    setUser(state,action:PayloadAction<any>){
      state.userData = action.payload,
      state.loading = false,
      state.error = action.payload
      state.isAuthanticated = true;
    }
  }
})


export const { setUser } = userSlice.actions;
export default userSlice.reducer;

