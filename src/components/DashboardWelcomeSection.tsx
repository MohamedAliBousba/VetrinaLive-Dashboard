import { Box, Container, Stack } from "@mui/material";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";

const sectionStyle = {
  height: 182,
  width: "100%",
  background:
    "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
  color: "#FFFFFF",
  paddingTop: 40
};

const welcomeTextStyle = {
  fontSize: 34,
  fontWeight: 600
};

const linkStyle = {
  fontSize: 17,
  fontWeight: 500
};

const DashboardWelcomeSection = () => {
  return (
    <div style={sectionStyle}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <h2 style={welcomeTextStyle}>Welcome Mario!</h2>

        <a
          href="app.vetrinalive.it/fenoh-store"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Stack direction="row" spacing={1}>
            <p style={{ textDecoration: "underline" }}>
              app.vetrinalive.it/fenoh-store
            </p>
            <ExternalLinkIcon />
          </Stack>
        </a>
      </Container>
    </div>
  );
};

export default DashboardWelcomeSection;
