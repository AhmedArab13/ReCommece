
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : 0,
  length : 3
};


export const sliderSlice = createSlice({
    name : "slider",
    initialState,
    reducers : {
        nextSlide : (state)=>{
          if(state.value < state.length  )
          {
            state.value ++;
          }else{
            state.value = 0;
          }
        } ,
        prevSlide : (state)=>{
          if(state.value > 0 )
          {
            state.value --;
          }else{
            state.value = state.length;
          }
        } ,
        dotSlide: (state, action)=>{
          state.value = action.payload ;          
        }
    }
}) ;



export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions ;

export default sliderSlice.reducer ;