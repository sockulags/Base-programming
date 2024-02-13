import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkoutPlan from "./pages/WorkoutPlan";

const tempApp = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/workoutplan" element={<WorkoutPlan />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default tempApp;