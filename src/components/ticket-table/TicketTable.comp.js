import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map(
            (
              row //
            ) => (
              <tr key={row._id}>
                <td>
                  <Link to={`/ticket/${row._id}`}>{row._id}</Link>
                </td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.createdAt}</td>
              </tr>
            )
          )
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show {""}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

/*{tickets.length &&         
    tickets.map((row) => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.subject}</td>
            <td>{row.status}</td>
            <td>{row.addedAt}</td>
        </tr>
    ))}

<tr>
    <td>1</td>
    <td>ssl issue</td>
    <td>client response pending</td>
    <td>2021-12-09</td>
</tr>*/

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
