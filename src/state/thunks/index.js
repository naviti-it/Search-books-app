import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStartIndex, getTotalItems, setIsLoading } from "..";

export const getBooksListByOptions = createAsyncThunk("search/getBooksListByOptions", async (option, thunksAPI)=>{
    thunksAPI.dispatch(setIsLoading(true));
    
    const items = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${option.searchValue}${option.categories !== "all" ? `+subject:${option.categories}` : ""}&orderBy=${option.orderBy}&startIndex=${option.startIndex}&maxResults=30&key=AIzaSyDsyPet3p9mCR3h6KFDOWJRLIdYAO7_fcM`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    );
    const itemsJson = await items.json();
    thunksAPI.dispatch(setIsLoading(false));
    thunksAPI.dispatch(getTotalItems(itemsJson.totalItems))
    thunksAPI.dispatch(getStartIndex(option.startIndex))
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