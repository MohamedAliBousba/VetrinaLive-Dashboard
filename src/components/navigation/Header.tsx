import Toolbar from "@mui/material/Toolbar";
import AppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Badge, BadgeProps, Stack, styled } from "@mui/material";
import FlashIcon from "../../assets/FlashIcon";

const drawerWidth = 240;

const toolbarStyle = {
  paddingRight: 24
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "none",
  color: "#103B66",
  zIndex: theme.zIndex.drawer - 1,
  transition: !open
    ? theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    : theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),

  width: `calc(100% - ${theme.spacing(6.5)})`,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`
  })
}));

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: -3,
    backgroundColor: "#F33451",
    color: "#ffffff"
  }
}));

const titleStyle = {
  fontSize: 17,
  fontWeight: 500,
  flexGrow: 1
};

const whatsNewStyle = {
  fontSize: 15,
  fontWeight: 400
};

interface IHeader {
  open?: boolean;
}

const Header: React.FC<IHeader> = ({ open }) => {
  return (
    <StyledAppBar position="absolute" open={open}>
      <Toolbar style={toolbarStyle}>
        <h2 style={titleStyle}>Dashboard</h2>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ marginRight: 2 }}
        >
          <FlashIcon />
          <StyledBadge badgeContent={4}>
            <h2 style={whatsNewStyle}>What's new</h2>
          </StyledBadge>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
