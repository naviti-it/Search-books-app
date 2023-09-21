import { useState } from 'react';
import { Box, TextField, MenuItem, InputAdornment, IconButton, Select, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search'
import { getBooksListByOptions } from '../../state/thunks';
import { shades } from './../../theme';


function useSearchBooksForm() {
    const options = ["all", "art", "biography", "computers", "history", "medical", "poetry"];

    const dispatch = useDispatch();

    const isNonNotePad = useMediaQuery('(min-width: 1024px)');
    const isNonMobile = useMediaQuery('(min-width: 500px)');


    const [value, setValue] = useState({
        searchValue: 'js',
        categories: 'all',
        orderBy: 'relevance',
        startIndex: 0
    });

    const handleClickGetBooks = () => {
        dispatch(getBooksListByOptions(value))
    }

    const handlePressEnterKey = (e) => {
        if (e.key === "Enter") {
            dispatch(getBooksListByOptions(value))
        }
    }

    return {
        value,
        render: (
            <Box
                textAlign="center"

            >
                <TextField
                    sx={{
                        backgroundColor: shades.neutral[500],
                        border: `3px solid ${shades.primary[500]}`,
                        margin: "0 0 20px",
                        width: isNonNotePad ? "35vw" : "100%",
                        cursor: 'pointer',
                    }}
                    placeholder="Search..."
                    type="text"
                    variant="outlined"
                    onKeyDown={(e) => handlePressEnterKey(e)}
                    onChange={(e) => setValue({ ...value, searchValue: e.target.value })}
                    value={value.searchValue}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="search-icon"
                                    onClick={handleClickGetBooks}
                                ><SearchIcon /></IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Box
                >
                    <Select
                        sx={{
                            backgroundColor: shades.neutral[500],
                            border: `3px solid ${shades.primary[500]}`,
                            marginRight: isNonMobile ? "20px" : "0px",
                            width: isNonNotePad ? "150px" : isNonMobile ? "30vw" : "30vw",
                            marginBottom: isNonNotePad ? "0" : "20px"
                        }}
                        name="categories"
                        value={value.categories}
                        onChange={(e) => setValue({ ...value, categories: e.target.value })}>
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                    <Select
                        sx={{
                            backgroundColor: shades.neutral[500],
                            border: `3px solid ${shades.primary[500]}`,
                            width: isNonNotePad ? "150px" : isNonMobile ? "30vw" : "30vw"
                        }}
                        name="orderBy"
                        value={value.orderBy}
                        onChange={(e) => setValue({ ...value, orderBy: e.target.value })}>
                        <MenuItem value="relevance">relevance</MenuItem>
                        <MenuItem value="newest">newest</MenuItem>
                    </Select>
                </Box>
            </Box>
        )
    }
}

export default useSearchBooksForm;