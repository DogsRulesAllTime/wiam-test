import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "../components/Personal";
import Address from "../components/Address";
import Loan from "../components/Loan";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Personal />} />
      <Route path="/address-work" element={<Address />} />
      <Route path="/loan-parameters" element={<Loan />} />
    </Routes>
  </Router>
);

export default AppRouter;
