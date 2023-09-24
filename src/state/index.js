import { createSlice } from "@reduxjs/toolkit";
import { getBookItemById, getBooksListByOptions } from './thunks/index';

const initialState = {
    item: null,
    items: [],
    isLoading: false,
    totalItems: 0,
    startIndex: 0
}


export const searchSlice = createSlice({
    name: "search",
    initialState, 
    reducers: {
        setIsLoading: (state)=>{
            state.isLoading = !state.isLoading
        },
        getTotalItems:(state, action)=>{
            state.totalItems = +action.payload
        },
        getStartIndex: (state, action)=>{
            state.startIndex = action.payload 
        },
        setItems:(state, action)=>{
            state.items = action.payload
        }
    },
    extraReducers: builder =>{
        builder.addCase(getBooksListByOptions.fulfilled, (state, action)=>{
            state.items = !action.meta.arg.searchValue ? [] : state.items.length? [...state.items, ...action.payload]: [...action.payload]
        })
        
        builder.addCase(getBookItemById.fulfilled, (state, action)=>{
            state.item = action.payload;
        })
    }
});

export const { setItems, setIsLoading, getTotalItems, getStartIndex} = searchSlice.actions;

export default searchSlice.reducer;