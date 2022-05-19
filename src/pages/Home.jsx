import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  TextInput,
} from "grommet";
import { Login, View } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../actions/user-action";
import { Navigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { id, type, errorLogin, token } = useSelector((state) => {
    return {
      id: state.userReducer.id,
      type: state.userReducer.type,
      token: state.userReducer.token,
      errorLogin: state.userReducer.errorLogin,
    };
  });

  function handleLogin(value) {
    const body = { username: value.username, password: value.password };
    dispatch(UserAction.userLogin(body));
  }

  if (id && type === "Vendor" && errorLogin === "")
    return <Navigate to="/vendor" />;
  else if (id && type === "Client" && errorLogin === "")
    return <Navigate to="/company" />;
  else
    return (
      <Grommet full>
        <Box fill direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            <Form 
              onSubmit={({ value }) => handleLogin(value)}
              errors={
                errorLogin !== "" ? { name: "string", pass: "s" } : undefined
              }
            >
              <FormField
                required
                name="username"
                htmlFor="text-input-id"
                label="Username"
              >
                <TextInput id="text-input-id" name="username" />
              </FormField>
              <FormField
                required
                name="password"
                htmlFor="text-input-id"
                label="Password"
              >
                <TextInput
                  icon={<View />}
                  type="password"
                  id="text-input-id"
                  name="password"
                />
              </FormField>
              <Button primary type="submit" label="Login" icon={<Login />} />
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
};

export default Home;
