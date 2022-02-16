import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
// import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ticketActions } from "../../_redux-store/actions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets, isLoading } = useSelector((state) => state.ticket);
  const token = useSelector((state) => state.root.token);
  useEffect(() => {
    dispatch(ticketActions.getTickets(token));
  }, [dispatch, token]);
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="danger"
              style={{ fontSize: "2rem", padding: "10px 30 px" }}
            >
              Geben Sie das neues Tickets ein
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div> Gesamttickets: </div>
          <div> Austehende Tickets: </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2"> Bereits vorhandene Tickets </Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          {!isLoading && (
            <TicketTable
              tickets={tickets && tickets.length > 0 ? tickets : []}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
