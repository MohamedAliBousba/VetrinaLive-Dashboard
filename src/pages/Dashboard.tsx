import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import CardsCollection from "../components/dashboard-cards/CardsCollection";
import DashboardWelcomeSection from "../components/DashboardWelcomeSection";
import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex">
      <Header open={open} />
      <Sidebar open={open} setOpen={setOpen} />
      <Box style={{ width: "100%" }}>
        <Toolbar />
        <DashboardWelcomeSection />
        <CardsCollection />
      </Box>
    </Box>
  );
};

export default Dashboard;
