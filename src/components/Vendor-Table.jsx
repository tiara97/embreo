import {
  Button,
  Layer,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "grommet";
import { useState } from "react";
import EventDetailComponent from "./Event-Detail";

function BodyTableComponent({ item, index }) {
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
}

const VendorTableComponent = ({ eventData }) => {
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
          console.log("render ulang");
          return <BodyTableComponent item={item} index={i} />;
        })}
      </TableBody>
    </Table>
  );
};

export default VendorTableComponent;
