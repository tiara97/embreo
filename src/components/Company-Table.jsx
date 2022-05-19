import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Layer,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from "grommet";
import { useState } from "react";
import { Link } from "react-router-dom";

const EventDetailComponent = ({ data }) => {
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
      </CardBody>
    </Card>
  );
};

const BodyTableComponent = ({ item, index }) => {
  const [show, setShow] = useState(false);

  return (
    <TableRow key={index}>
      <TableCell scope="row">{item.eventName}</TableCell>
      <TableCell>{item.vendorName}</TableCell>
      <TableCell>{item.confirmedDate}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>{item.created}</TableCell>
      <TableCell>
        <Button label="view" name="view" onClick={() => setShow(true)} />
        {show && (
          <Layer
            key={index}
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <EventDetailComponent data={item} index={index} />
          </Layer>
        )}
      </TableCell>
    </TableRow>
  );
};

const CompanyTableComponent = ({ eventData }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Event Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Vendor Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Confirmed Date
          </TableCell>
          <TableCell scope="col" border="bottom">
            Status
          </TableCell>
          <TableCell scope="col" border="bottom">
            Created Date
          </TableCell>
          <TableCell scope="col" border="bottom">
            Action
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {eventData.map((item, i) => {
          return <BodyTableComponent item={item} index={i} />;
        })}
        <TableRow colspan={5}>
          <TableCell>
            <Link to="/company/form">
              <Button label="Create new event" name="create" />
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompanyTableComponent;
