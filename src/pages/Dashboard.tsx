import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex">
      <Header open={open} />
      <Sidebar open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Dashboard;
