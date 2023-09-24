import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import Loader from './Loader';
import BookItem from './../../components/BookItem';
import { shades } from './../../theme';
import { getBooksListByOptions } from './../../state/thunks/index';
import { getStartIndex } from '../../state/index';



const BooksList = ({ value }) => {
    const dispatch = useDispatch()

    let { isLoading, items, totalItems, startIndex } = useSelector((state) => state.search);
    const increaseStartIndex = () => {
        dispatch(getStartIndex(startIndex))
    }

    const loadMore = () => {
        if (startIndex > 0) {
            increaseStartIndex()
            dispatch(getBooksListByOptions({ ...value, startIndex: startIndex }))
        }
    }

    return (
        <Box
            padding="15px 0 45px"
            width="100%"
        >
            {isLoading && <Loader />}
            <Typography
                textAlign="center"
                paddingBottom="10px"
            >
                {items.length ? `Found ${totalItems} results` : "No results were found. Try another queries!"}
            </Typography>
            <Box>
                <Box
                    margin='1 auto'
                    display='grid'
                    gridTemplateColumns='repeat(auto-fill, 250px)'
                    justifyContent='space-around'
                    rowGap='20px'
                    columnGap='1.53%'
                >
                    {items && items?.map((item) => (
                        <BookItem key={`${item?.id}-${item?.etag}`} item={item} />
                    ))}
                </Box>
            </Box>

            {
                items?.length > 0 &&
                (startIndex < totalItems) &&
                <Button
                    fullWidth
                    variant='contained'
                    sx={{
                        backgroundColor: shades.secondary[800],
                        marginTop: '20px',
                        padding: '15px 40px',
                        color: shades.neutral[100],
                        '&:hover': {
                            backgroundColor: shades.secondary[600]
                        }
                    }}
                    onClick={loadMore}
                >
                    Load more
                </Button>}
        </Box>

    )
}

export default BooksList