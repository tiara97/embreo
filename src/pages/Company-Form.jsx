import { Box, Button, Form, FormField, TextInput, Select } from "grommet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EventAction } from "../actions/event-action";

const CompanyForm = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState("Event 1");

  const { id, company } = useSelector((state) => {
    return {
      id: state.userReducer.id,
      company: state.userReducer.company,
    };
  });
  console.log("copmany form", id, company);

  function handleSubmit(value) {
    dispatch(
      EventAction.postEvent({
        companyName: value.companyName,
        vendorName:
          value.eventName === "Event 1"
            ? "PT Vendor"
            : value.eventName === "Event 2"
            ? "PT Acara"
            : "PT Oke",
        eventName: value.eventName,
        location: value.location,
        status: 1,
        proposedDate: [value.date1, value.date2, value.date3],
      })
    );
  }

  return (
    <Box fill direction="row" flex overflow={{ horizontal: "hidden" }}>
      <Box flex align="center" justify="center">
        <Form onSubmit={({ value }) => handleSubmit(value)}>
          <FormField name="companyName" htmlFor="text-input-id" label="Company">
            <TextInput
              id="text-input-id"
              name="companyName"
              value={company}
              disabled
            />
          </FormField>
          <FormField name="location" htmlFor="text-input-id" label="Location">
            <TextInput id="text-input-id" name="location" />
          </FormField>
          <FormField name="eventName" htmlFor="text-input-id" label="Event">
            <Select
              name="eventName"
              options={["Event 1", "Event 2", "Event 3"]}
              value={event}
              onChange={({ option }) => setEvent(option)}
            />
          </FormField>
          <FormField
            required
            name="date1"
            htmlFor="text-input-id"
            label="Date 1"
          >
            <TextInput type="date" id="text-input-id" name="date1" />
          </FormField>
          <FormField
            required
            name="date2"
            htmlFor="text-input-id"
            label="Date 2"
          >
            <TextInput type="date" id="text-input-id" name="date2" />
          </FormField>
          <FormField
            required
            name="date3"
            htmlFor="text-input-id"
            label="Date 3"
          >
            <TextInput type="date" id="text-input-id" name="date3" />
          </FormField>
          <Link to="/company">
            <Button primary type="submit" label="Submit" />
          </Link>
        </Form>
      </Box>
    </Box>
  );
};

export default CompanyForm;
