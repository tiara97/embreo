import { Box, Grommet } from "grommet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { EventAction } from "../actions/event-action";
import CompanyTableComponent from "../components/Company-Table";

const Company = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { eventData, type, id } = useSelector((state) => {
    return {
      eventData: state.eventReducer.eventData,
      type: state.userReducer.type,
      id: state.userReducer.id,
    };
  });

  useEffect(() => {
    dispatch(EventAction.getEvents(id, { type }));
  }, [state]);

  return (
    <Grommet full>
      <Box fill direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          <CompanyTableComponent eventData={eventData} />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Company;
