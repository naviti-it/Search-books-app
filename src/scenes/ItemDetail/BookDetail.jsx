import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookItemById } from '../../state/thunks';
import defaultCover from "../../assets/defaultCover.jpg"
import Loader from '../home/Loader';
import { shades } from './../../theme';

const BookDetails = () => {
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { item, isLoading } = useSelector((state) => state.search);

    const isNonNotePad = useMediaQuery('(min-width: 1024px)');
    const isNonMobile = useMediaQuery('(min-width: 800px)');

    const getItem = () => {
        dispatch(getBookItemById(itemId))
    }

    useEffect(() => {
        getItem()
    }, [itemId])

    return (
        <Box
            position="absolute"
            width="100%"
        >
            {isLoading && <Loader />}
            <Box
                height="50px"
                borderBottom="1px solid #e1e1e1"
                display="flex"
                alignItems="center"
            ><Box
                textDecoration="none"
                color={shades.neutral[900]}
                height="50px"
                fontSize="23px"
                fontWeight="300"
                display="flex"
                alignItems="center"
                padding="0 10px 0 60px"
                borderRight="1px solid #e1e1e1"
                position="relative"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/`)}
            >Back
                </Box>
            </Box>
            <Box display={isNonMobile ? "flex" : "block"}>
                <Box
                    flexBasis={isNonMobile ? "45%" : "100%"}
                    sx={{ backgroundColor: shades.neutral[500] }}
                    display={isNonMobile ? "flex" : "block"}
                    justifyContent="center"
                    padding="50px 0">
                    <Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <img
                                src={item?.volumeInfo?.imageLinks?.smallThumbnail ? item?.volumeInfo?.imageLinks?.smallThumbnail : defaultCover} alt=""
                                sx={{ boxShadow: "14px 15px 15px -7px rgba(0, 0, 0, 0.4)" }}
                                width="300px"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    flexBasis={isNonMobile ? "55%" : "100%"}
                    padding="50px">
                    <Box
                        fontWeight="300"
                        marginBottom="35px">
                        {item?.volumeInfo?.categories &&
                            item?.volumeInfo?.categories.map((category) =>
                                <Typography key={category} variant="h4">
                                    {category}
                                </Typography>
                            )
                        }
                    </Box>
                    <Typography
                        variant="h4"
                        fontWeight="700"
                        marginBottom="15px">
                        {item?.volumeInfo?.title && item?.volumeInfo?.title}
                    </Typography>
                    <Box
                        color={shades.neutral[600]}
                        fontWeight="300"
                        marginBottom="30px">
                        {item?.volumeInfo?.authors &&
                            item?.volumeInfo?.authors.map((author) =>
                                <Typography key={author} variant="h4">
                                    {author}
                                </Typography>
                            )}
                    </Box>
                    <Box
                        color={shades.neutral[900]}
                        marginTop="20px"
                    >
                        <Typography variant="h4" dangerouslySetInnerHTML={{ __html: item?.volumeInfo?.description }}>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>




    );
}
export default BookDetails;