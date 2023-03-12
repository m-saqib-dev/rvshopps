import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
    id:number;
    productImg: string;
    productName: string;
    productDescription: string;
    productPrice: number;
  }
  interface ProductState{
    products:Product[];
    loading:boolean;
    error:string|null;
  }
  const initialState:ProductState = {
    products:[],
    loading:false,
    error:null,
  }

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProduct(state, action:PayloadAction<any>){
            state.products = action.payload;
            state.loading = false;
            state.error = '';
        }
    }
})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer