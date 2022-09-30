

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Estimates } from "./Estimates";
import { Expenses } from "./Expenses";
import { Homepage } from "./Homepage";
import { Invoices } from "./Invoices";
import { Login } from "./Login";
import { Manage } from "./Manage";
import  Projects  from "./Projects";
import { Report } from "./Report";
import Signup from "./Signup";
import { Team } from "./Team";
import { Time } from "./Time";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/time" element={<Time />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/report" element={<Report />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/estimates" element={<Estimates />} />
      <Route path="/manages" element={<Manage />} />
    </Routes>
  );
};

