import { Box, Grid, Grommet } from "grommet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { EventAction } from "../actions/event-action";
import VendorTableComponent from "../components/Vendor-Table";

const Vendor = ({ props }) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { eventData, type, id } = useSelector((state) => {
    return {
      eventData: state.eventReducer.eventData,
      type: state.userReducer.type,
      id: state.userReducer.id,
    };
  });
  console.log("ini vendor", type, id);

  useEffect(() => {
    dispatch(EventAction.getEvents(id, { type }));
  }, [state]);

  return (
    <Grommet full>
      <Grid fill>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center" direction="column">
            <VendorTableComponent eventData={eventData} />
          </Box>
        </Box>
      </Grid>
    </Grommet>
  );
};

export default Vendor;
