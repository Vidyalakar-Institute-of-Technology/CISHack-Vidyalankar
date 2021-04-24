import React from "react";
import { Route, Switch } from "react-router";
import DoctorAppointment from "./components/appointment/DoctorAppointment";
import PatientAppointment from "./components/appointment/PatientAppointment";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/doctor">
        <PatientAppointment />
      </Route>
      <Route path="/patient">
        <DoctorAppointment />
      </Route>
    </Switch>
  );
}
