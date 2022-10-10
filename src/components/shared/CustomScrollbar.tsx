import { Box } from "@mui/material";

interface ICustomScrollbar {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<ICustomScrollbar> = ({ children }) => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.4em"
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1"
        },

        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: "#888"
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 8,
          border: "3px solid #888"
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CustomScrollbar;
