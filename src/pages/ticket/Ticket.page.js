import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { MessageHistory } from "./message-history/MessageHistory.comp";
import { AktualisierenTicket } from "../../components/aktualisieren-ticket/AktualisierenTicket.comp";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ticketActions } from "../../_redux-store/actions";
import { useHistory } from "react-router-dom";

//const ticket = tickets[0]

export const Ticket = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { tid } = useParams();

  const { ticket, isLoading, token, deleting } = useSelector((state) => ({
    ticket: state.ticket.ticket,
    isLoading: state.ticket.isLoading,
    token: state.root.token,
    deleting: state.ticket.deleting,
  }));

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (deleting === "ticket_is_deleted") {
      history.push("/dashboard");
    }
    return () => {
      dispatch(ticketActions.updatePropertyHandler({ deleting: null }));
    };
  }, [deleting, dispatch, history]);

  useEffect(() => {
    dispatch(ticketActions.getTicketById(tid, token));
  }, [dispatch, tid, token]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const replied = { sender: "Salevali Team", message };
    dispatch(ticketActions.updateTicket(replied, tid, token));

    //const closed = {sender: "SaleVali Team", message}; //Was habe ich hier falsch gemacht????
    //dispatch(ticketActions.updateClosedTicket(closed,tid,message))
  };

  //const repliedTicketHandler = () =>
  //dispatch(ticketActions.updateTicket({}, tid,token))

  const closedTicketHandler = () =>
    dispatch(ticketActions.closedTicket(tid, token));

  const deleteTicketHandler = () =>
    dispatch(ticketActions.deleteTicket(tid, token));

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket" />
          </Col>
        </Row>
        <Row>
          <Col className="text-weight-bolder text-secondary">
            <div className="subject">Subject :{ticket.subject}</div>
            <div className="date">
              Das Ticket würde geöffnet :{ticket.createdAt}
            </div>
            <div className="status">Status :{ticket.status}</div>
          </Col>
          <Col className="text-right">
            {ticket.status !== "Closed" && (
              <Button onClick={closedTicketHandler} variant="dark">
                Schließen Sie die Tickets ein
              </Button>
            )}
            <Button onClick={deleteTicketHandler} variant="danger">
              Delete
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            {ticket &&
              ticket.conversations &&
              ticket.conversations.map((conv, i) => (
                <MessageHistory
                  key={i}
                  sender={conv.sender}
                  message={conv.message}
                  createdAt={conv.createdAt}
                />
              ))}
          </Col>
        </Row>
        <hr />

        <Row className="mt-4">
          <Col>
            <AktualisierenTicket
              msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
