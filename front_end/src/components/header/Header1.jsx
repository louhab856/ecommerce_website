import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, Typography, Stack, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const options = ["Ar", "En"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
      bgcolor: "#2B3445",
      py:"4px",
      borderBottomRightRadius:"14px"
      }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free express shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem("mode", "dark");
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlinedIcon sx={{ color: "#fff", fontSize: "11px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem("mode", "light");
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlinedIcon sx={{ color: "#fff", fontSize: "11px" }} />
              </IconButton>
            )}
          </div>

          {/* Language Selection */}
          <List component="nav" aria-label="Language settings" sx={{ p: 0, m: 0 }}>
            <ListItemButton
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer", color: "#fff" } }}
            >
              <ListItemText
                primaryTypographyProps={{ sx: { color: "#fff", fontSize: "11px" } }}
                secondaryTypographyProps={{ sx: { color: "#fff", fontSize: "11px" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMoreIcon sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItemButton>
          </List>

          {/* Language Menu */}
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "language-button",
              role: "listbox",
            }}
            sx={{
              "& .MuiPaper-root": { backgroundColor: "#2B3445" },
              "& .MuiMenuItem-root": { color: "#fff" },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "10px",
                  p: "3px 10px",
                  minHeight: "10px",
                  color: "#fff",
                  "&.Mui-selected": {
                    backgroundColor: "#444",
                    color: "#fff",
                  },
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          {/* Social Media Icons */}
          <TwitterIcon sx={{ fontSize: "16px", color: "#fff" }} />
          <FacebookIcon sx={{ fontSize: "16px", mx: 1, color: "#fff" }} />
          <InstagramIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
}
