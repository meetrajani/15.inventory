import { createSlice } from "@reduxjs/toolkit"
import { deletecart, emptycart, getcart, getproduct, postproduct, updatecart } from "../api/api"

const initialstate={
    isLoding:false,
    data:[],
    cart:[],
    isError:false
}

const userSlice=createSlice({
    name:"data",
    initialState:initialstate,
    extraReducers:(builder)=>{

        // get product

        builder.addCase(getproduct.pending,(state)=>{
            state.isLoding=true
        })

        builder.addCase(getproduct.fulfilled,(state,action)=>{
            state.isLoding=false
            state.data=action.payload.data
            console.log(action);
        })

        builder.addCase(getproduct.rejected,(state)=>{
            state.isError=true
        })

// post data

        builder.addCase(postproduct.pending,(state)=>{
            state.isLoding=true
        })

        builder.addCase(postproduct.fulfilled,(state,action)=>{
            state.isLoding=false
            state.cart = state.cart.concat(action.payload);
        })

        builder.addCase(postproduct.rejected,(state)=>{
            state.isError=true
        })

        // get cart 

        builder.addCase(getcart.pending,(state)=>{
            state.isLoding=true
        })

        builder.addCase(getcart.fulfilled,(state,action)=>{
            state.isLoding=false
            state.cart = action.payload.data
        })

        builder.addCase(getcart.rejected,(state)=>{
            state.isError=true
        })

        // update cart 

        
        builder.addCase(updatecart.pending,(state)=>{
            state.isLoding=true
        })

        builder.addCase(updatecart.fulfilled, (state, action) => {
            state.isLoding = false; 
            state.cart = state.cart.map((val) => {
                if (val.id === action.payload.id) {
                    return {
                        ...val,
                        ...action.payload,
                    };
                } else {
                    return val;
                }
            });
        });

        builder.addCase(updatecart.rejected,(state)=>{
            state.isError=true
        })


        // delete data

        builder.addCase(deletecart.pending,(state)=>{
            state.isLoding=true
        })

        builder.addCase(deletecart.fulfilled,(state,action)=>{
            state.isLoding=false
            state.cart = state.cart.filter((e)=>e.id!==action.payload)
        })

        builder.addCase(deletecart.rejected,(state)=>{
            state.isError=true
        })
    }
})

export default userSlice.reducer