import { Box, Button, Grommet } from "grommet";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Grommet full>
            <Box fill direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                    <h1>404</h1>
                    <h1>Oops, page not found.</h1>
                    <Link to='/'>
                        <Button variant='outlined'>Back to home</Button>
                    </Link>
                </Box >
            </Box>
        </Grommet>
    );
}

export default NotFound;