import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormField,
  RadioButtonGroup,
  Text,
  TextInput,
} from "grommet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EventAction } from "../actions/event-action";

const EventDetailComponent = ({ data, index }) => {
  const [date, setDate] = useState(data.proposedDate[0]);
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  function handleApprove() {
    dispatch(
      EventAction.editEvent(data.id, { status: 1, confirmedDate: date, notes })
    );
  }

  function handleReject() {
    dispatch(EventAction.editEvent(data.id, { status: 3, notes }));
  }

  return (
    <Card>
      <CardHeader pad="medium">{data.eventName}</CardHeader>
      <CardBody pad="medium">
        <Text>Company : {data.companyName}</Text>
        <Text>Proposed Date :</Text>
        {data.proposedDate.map((item) => {
          return <Text>{item}</Text>;
        })}
        <Text>Notes : {data.notes}</Text>
        {data.status === "Pending" && (
          <>
            <RadioButtonGroup
              name="date"
              options={data.proposedDate}
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <FormField label="Notes">
              <TextInput
                placeholder="type here"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </FormField>
          </>
        )}
      </CardBody>
      {data.status === "Pending" && (
        <CardFooter pad={{ horizontal: "small" }}>
          <Button
            label="Approve"
            name="approve"
            onClick={() => handleApprove()}
          />
          <Button label="Reject" name="reject" onClick={() => handleReject()} />
        </CardFooter>
      )}
    </Card>
  );
};

export default EventDetailComponent;
