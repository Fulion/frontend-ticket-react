import React from "react";
import { Card, Form, Button, Row, Col, FormText } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";
import { Link } from "react-router-dom";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDt,
  frmDataError,
}) => {
  return (
    <Card className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Geben sie neues Ticket ein</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              //minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <FormText className="text-danger">
              {frmDataError.subject && "Subject is required!"}
            </FormText>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmDt.detail}
            onChange={handleOnChange}
            //value={kenn}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block="true">
          {" "}
          Create Ticket{" "}
        </Button>
      </Form>
    </Card>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};
