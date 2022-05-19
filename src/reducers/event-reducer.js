import moment from "moment-timezone";

const INIT_STATE = {
  eventData: [],
};

export const eventReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_EVENT":
      console.log(action.payload, "action");
      let eventData = [];
      action.payload.forEach((item) => {
        eventData.push({
          id: item.id,
          created: moment(item.created).format("YYYY-MM-DD HH:mm:ss"),
          companyName: item.company,
          vendorName: item.vendor,
          eventName: item.event_name,
          confirmedDate: item.confirmed_date
            ? moment(item.confirmed_date).format("YYYY-MM-DD")
            : "",
          proposedDate: JSON.parse(item.proposed_date),
          status:
            item.status === 1
              ? "Approved"
              : item.status === 2
              ? "Pending"
              : "Rejected",
          notes: item.notes,
        });
      });
      return {
        ...state,
        eventData,
      };
    case "POST_EVENT":
      console.log(action.payload);
      return { ...state, eventData: action.payload };
    case "EDIT_EVENT":
      console.log(action.payload);
      return { ...state, eventData: action.payload };
    default:
      return state;
  }
};
