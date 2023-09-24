import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStartIndex, getTotalItems, setIsLoading } from "..";

export const getBooksListByOptions = createAsyncThunk("search/getBooksListByOptions", async (options, thunksAPI)=>{
    thunksAPI.dispatch(setIsLoading(true));
    
    const items = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${options.searchValue}${options.categories !== "all" ? `+subject:${options.categories}` : ""}&orderBy=${options.orderBy}&startIndex=${options.startIndex}&maxResults=30&key=AIzaSyDsyPet3p9mCR3h6KFDOWJRLIdYAO7_fcM`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    );
    const itemsJson = await items.json();
    const {totalItems} = thunksAPI.getState()
    thunksAPI.dispatch(setIsLoading(false));
    !totalItems && thunksAPI.dispatch(getTotalItems(itemsJson.totalItems))
    thunksAPI.dispatch(getStartIndex(options.startIndex+30))
    return itemsJson.items;
})

export const getBookItemById = createAsyncThunk("search/getBookItemById", async (id, thunksAPI)=>{
    thunksAPI.dispatch(setIsLoading(true));
    const item = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const itemJson = await item.json();
    thunksAPI.dispatch(setIsLoading(false));
    return itemJson;
})