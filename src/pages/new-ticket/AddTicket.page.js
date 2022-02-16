import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
//import { shortText } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { ticketActions } from "../../_redux-store/actions";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  const { token, user, creating } = useSelector((state) => ({
    token: state.root.token,
    user: state.root.user,
    creating: state.ticket.creating,
  }));

  useEffect(() => {
    if (creating === "fulfilled") {
      history.push("/dashboard");
    }
    return () => {
      dispatch(ticketActions.updatePropertyHandler({ creating: null }));
    };
  }, [creating, dispatch, history]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData, //nicht initialfrmdata sondern frmdata
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("create");
    // setFrmDataError(initialFrmError); //validation with comando/
    // const isSubjectValid = shortText(frmData.subject);
    // //!isSubjectValid &&
    // setFrmDataError({
    //   ...initialFrmError,
    //   subject: !isSubjectValid,
    // });
    const newTicket = {
      subject: frmData.subject,
      message: frmData.detail,
      userId: user._id,
    };
    dispatch(ticketActions.createTicket(newTicket, token));
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
