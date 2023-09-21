import { Box, Typography } from '@mui/material';
import image from "../../assets/backgroung.jpg"

const Header = ({ render }) => {
    return (
        <Box
            p="50px 100px"
            sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover"
            }}>
            <Typography
                variant='h2'
                textAlign="center"
                color="white"
                margin="0 0 20px"
            >Search for books
            </Typography>
            {render}
        </Box >
    )
}

export default Header;