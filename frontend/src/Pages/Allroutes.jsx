
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Estimates } from "./Estimates";
import { Expenses } from "./Expenses";
import { Invoices } from "./Invoices";
import { Login } from "./Login";
import { Manage } from "./Manage";
import  Projects from "./Projects";
import { Report } from "./Report";
import Signup from "./Signup";
import { Team } from "./Team";
import { Time } from "./Time";
import NewProject from "./New_project";
import { AddClient } from "./Addclient";
import { EditClient } from "./Editclient";

import { Reportname } from "./Reportname";
import Home from "./HomepageComponents/pages/home/Home";
import WithNavFoot from "./WithNavFoot";


export const Allroutes = () => {
  return (
    <Routes>
       <Route element={<WithNavFoot />}>
      <Route path="/" element={<Home/>} />
      </Route>
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
      <Route path="/addclient" element={<AddClient />} />
      <Route path="/edit/:edit_id" element={<EditClient />} />
      <Route path='/reports/:name' element={<Reportname />} />

    </Routes>
  );
};

