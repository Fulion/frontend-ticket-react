import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email.").required("*required"),
  password: Yup.string()
    .min(5, "Password length must be min 5.")
    .max(12, "Password length must be max: 12.")
    .required("*required"),
});

export const LoginForm = ({ formSwittcher, saveValues }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Kunden login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              saveValues(values, actions);
            }}
          >
            {({ handleSubmit, handleChange, values, handleBlur, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1">
                  <Form.Label>E-Mail Adresse</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Email"
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </Form.Group>

                <Button variant="success" className="my-2" type="submit">
                  {" "}
                  Einloggen{" "}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwittcher("reset")}>
            {" "}
            Kennwort vergessen?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  saveValues: PropTypes.func.isRequired,
  formSwittcher: PropTypes.func.isRequired,
};
