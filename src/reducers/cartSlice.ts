import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartProduct {
    id:number;
    productImg: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity:number;
  }
  interface ProductState{
    products:CartProduct[];
    loading:boolean;
    error:string|null;
    total:number;
  }
  const initialState:ProductState = {
    products:[],
    loading:false,
    error:null,
    total:0
  }

const cartSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
      setCart(state, action: PayloadAction<CartProduct>) {
        const productToAdd = action.payload;
        const existingProductIndex = state.products.findIndex(product => product.id === productToAdd.id);
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex].productQuantity += productToAdd.productQuantity;
        state.products[existingProductIndex].productPrice += productToAdd.productPrice * productToAdd.productQuantity;
        } else {
          state.products.push(productToAdd);
        }
        state.total = 0;
        state.loading = false;
        state.error = '';
      },
      emptyCart(state){
        state.products = [];
        state.loading =false;
        state.error = '';
      },
      setTotal(state,action:PayloadAction<number>){
        state.total = action.payload;
      }
    }
    
})

export const {setCart,emptyCart,setTotal} = cartSlice.actions;
export default cartSlice.reducer