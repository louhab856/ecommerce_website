
import { Accordion, AccordionSummary, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Close } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";



export default function Header3() {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: 0,
              textTransform: "capitalize",
              mx: 1
            }}
          >
            categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            ".MuiList-root": {
              width: 220,
              bgcolor: theme.palette.myColor.main
            }
          }}
        >
          <MenuItem
            onClick={handleClose}
          >
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Bikes
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={handleClose}
          >
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Electronics
            </Typography>
          </MenuItem>


          <MenuItem
            onClick={handleClose}
          >
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Boks
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={handleClose}
          >
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Games
            </Typography>
          </MenuItem>
        </Menu>
        {useMediaQuery('(max-width:1000px)') ? ( <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>): (
         <Stack gap={4} direction={"row"} alignItems={"center"}>
           <Links title={"Home"}/>
          <Links title={"Mega Menu"}/>
          <Links title={"Full screen Menu"}/>
          <Links title={"Pages"}/>
          <Links title={"User account"}/>
          <Links title={"Vendor account"}/>
         </Stack>
        )}
       
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            "& .MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
          }}
        >
          <Box  sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }} >
            <IconButton sx={{ 
              ":hover":{ color : "red", rotate:"360deg",transition:"0.4s"},
              position: "absolute", top: 0, right: 5 }} onClick={toggleDrawer("top", false)}>
              <Close />
            </IconButton>
            {[
              { mainLink: "Home", subLink: ["link1", "link2", "link3"] },
              { mainLink: "Mega menu", subLink: ["link1", "link2", "link3"] },
              { mainLink: "Full screen menu", subLink: ["link1", "link2", "link3"] },
              { mainLink: "Pages", subLink: ["link1", "link2", "link3"] },
              { mainLink: "User account", subLink: ["link1", "link2", "link3"] },
              { mainLink: "Vendor account", subLink: ["link1", "link2", "link3"] },

            ].map((item, index) => (
              <Accordion key={index} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${index}-content`} id={`panel-${index}-header`}>
                  <Typography component="span">{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ my: 0, py: 0 }}>
                  {
                    item.subLink.map(item => {
                      return (
                        <ListItem key={item}>
                          <ListItemButton>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        </ListItem>)
                    })
                  }
                </List>
              </Accordion>
            ))}
          </Box>
        </Drawer>

      </Box>
    </Container>
  )
}
