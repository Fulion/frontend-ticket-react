import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

// const isAuth = true; //ovo dozvoljava da imamo prsitpu svim stranicama u browseru/kad ukucamo localhost:3000/dashboard ili tickets da budemo u mogucnosti da sve vidimo

export const PrivateRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
