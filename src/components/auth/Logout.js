import React, { useEffect, /* useMemo */ } from "react";
import { useDispatch } from "react-redux";
// import { useAppContext } from "../../context/AppContext";
import { authActions } from "../../_redux-store/actions";

export function Logout() {
  const dispatch = useDispatch();
  /*   const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      logout: appCtx.logoutHandler,
    }),
    [appCtx]
  ); */
  useEffect(() => {
    // ctxProps.logout();
    dispatch(authActions.logoutRequest());
  }, [dispatch]);

  return <></>;
}
