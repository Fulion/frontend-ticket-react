import React, { useState, useMemo } from "react";
import { Card } from "react-bootstrap";
// import { ResetKennwort } from "../../components/kennwort reset/kennwort reset/KennwortReset.comp.js";
import { LoginForm } from "../../components/login/Login.comp";
// import { useAppContext } from "../../context/AppContext";
import { useDispatch } from "react-redux";
import "./entry.style.css";
import { authActions } from "../../_redux-store/actions";

export const Entry = () => {
  const dispatch = useDispatch();
  const [frmLoad, setFrmLoad] = useState("login");
/*   const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      login: appCtx.loginHandler,
    }),
    [appCtx]
  ); */
  const submitLoginHandler = (values, actions) => {
    // console.log({ values, actions });
    // ctxProps.login(values.email, values.password);
    const { email, password } = values;
    dispatch(authActions.loginRequest(email, password));
  };

  const formSwittcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-outline-success  ">
      <Card className="form-box">
        {frmLoad === "login" && (
          <LoginForm
            formSwittcher={formSwittcher}
            saveValues={submitLoginHandler}
          />
        )}

        {/*         {frmLoad === "reset" && (
          <ResetKennwort
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwittcher={formSwittcher}
            email={email}
          />
        )} */}
      </Card>
    </div>
  );
};
