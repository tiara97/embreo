import { Box, Button, Heading } from "grommet";
import { Logout } from "grommet-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UserAction } from "../actions/user-action";

const NavBar = (props) => {
  const dispatch = useDispatch();

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <Heading level="3" margin="none">
        My app
      </Heading>
      <Link to="/">
        <Button
          icon={<Logout />}
          onClick={() => dispatch(UserAction.userLogout())}
        />
      </Link>
    </Box>
  );
};

export default NavBar;
