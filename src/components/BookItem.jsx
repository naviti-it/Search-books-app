import { Box, Typography } from '@mui/material';
import defaultCover from "../../src/assets/defaultCover.jpg"
import { shades } from './../theme';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ item }) => {
    const navigate = useNavigate()
    const { title, authors, categories, imageLinks } = item?.volumeInfo;

    return (
        <Box
            sx={{ backgroundColor: shades.neutral[100] }}
            textAlign="center"
            width="250px"
            padding="25px 15px 20px"
            borderRadius='5px'
        >
            <Box
                minHeight="200px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginBottom="10px"
            >
                <img
                    src={imageLinks?.thumbnail ? imageLinks?.thumbnail : defaultCover} alt="image"
                    style={{ cursor: 'pointer', width: '150px', height: '200px', objectFit: 'cover' }}
                    onClick={() => {
                        navigate(`/${item.id}`)
                    }}
                />
            </Box>

            {categories &&
                <Box
                    color={shades.neutral[600]}
                    fontWeight="300"
                    fontSize="14px"
                    marginBottom="14px"
                    textDecoration="underline"
                >
                    {/* <CommaSeparatedList list={categories} /> */}
                    <Box component="span">{categories[0]}</Box>
                </Box>}
            <Typography
                display="block"
                fontWeight="bold"
                marginBottom="5px"
                fontSize="15px"
                textDecoration="none"
                color={shades.neutral[900]}
            >
                {title}
            </Typography>
            {
                authors &&
                <Box
                    color={shades.neutral[600]}
                    fontWeight="300"
                    fontSize="14px">
                    {
                        authors.map((author, index) =>
                            <Box
                                key={index}>{author}
                            </Box>
                        )
                    }
                </Box>
            }
        </Box >
    );
}
export default BookItem;