import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const AktualisierenTicket = ({
  msg,
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text></Form.Text>
      <Form.Control
        name=""
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        row="5"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        name="detail"
      />
      <div className="text-right mt-3 mb-3">
        <Button variant="danger" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

AktualisierenTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
