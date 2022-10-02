
import React from "react";
import { Route, Routes } from "react-router-dom";
import Editclient from "../Components/managesubpage/Editclient";
import Newclient from "../Components/managesubpage/Newclient";
import NewContact from "../Components/managesubpage/NewContact";
import { Estimates } from "./Estimates";
import { Expenses } from "./Expenses";
import { Homepage } from "./Homepage";
import { Invoices } from "./Invoices";
import { Login } from "./Login";
import { Manage } from "./Manage";
import  Projects from "./Projects";
import { Report } from "./Report";
import Signup from "./Signup";
import { Team } from "./Team";
import { Time } from "./Time";
import NewProject from "./New_project";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/Signup" element={<Signup />} />
      <Route path="/time" element={<Time />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/new_project" element={<NewProject/>} />

      <Route path="/team" element={<Team />} />
      <Route path="/report" element={<Report />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/estimates" element={<Estimates />} />
      <Route path="/manages" element={<Manage />} />
      <Route path="/manages/newclient" element={<Newclient />} />
      <Route path="/manages/newcontact" element={<NewContact />} />
      <Route path="/manages/edit" element={<Editclient/>} />
    </Routes>
  );
};

