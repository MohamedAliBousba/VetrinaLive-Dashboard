import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import DashboardWelcomeSection from "../components/DashboardWelcomeSection";
import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex">
      <Header open={open} />
      <Sidebar open={open} setOpen={setOpen} />
      <div style={{width: "100%"}}>
        <Toolbar />
        <DashboardWelcomeSection />
      </div>
    </Box>
  );
};

export default Dashboard;
