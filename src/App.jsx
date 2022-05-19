import { Box, Grommet } from "grommet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { UserAction } from "./actions/user-action";
import NavBar from "./components/Navbar";
import Company from "./pages/Company";
import CompanyForm from "./pages/Company-Form";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Vendor from "./pages/Vendor";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserAction.userKeepLogin());
  }, []);
  const { type } = useSelector((state) => {
    return {
      type: state.userReducer.type,
    };
  });

  if (type === "Vendor")
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/vendor" element={<Vendor type={type} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Grommet>
    );
  else if (type === "Client")
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/company" element={<Company />} />
            <Route path="/company/form" element={<CompanyForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Grommet>
    );
  else
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* <Route path="/vendor" element={<Vendor type={type} id={id} />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/form" element={<CompanyForm />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Grommet>
    );
};

export default App;
