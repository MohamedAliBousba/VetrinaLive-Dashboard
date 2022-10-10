import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
