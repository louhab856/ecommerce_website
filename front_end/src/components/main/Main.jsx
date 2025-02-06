import { Container, Stack, Box, Typography, ToggleButtonGroup, ToggleButton, useTheme, Card, CardMedia, CardContent, CardActions, Button, Rating, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton } from '@mui/material'
import { useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from "@mui/icons-material";
import ProducDetails from './ProducDetails';

export default function Main() {
    const theme = useTheme();
    const [alignment, setAlignment] = useState('left');
    const [value, setValue] = useState(2.5);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Container
            sx={{ py: 9 }}
        >
            <Stack
                flexWrap={"wrap"}
                gap={3}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Box>
                    <Typography variant="h6">Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>
                <Box>
                    <ToggleButtonGroup
                        color="error"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton' value="left" aria-label="left aligned">
                            All products
                        </ToggleButton>
                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className='myButton' value="center" aria-label="left aligned">
                            Men Category
                        </ToggleButton>
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton' value="ritght" aria-label="left aligned">
                            Women Category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Stack>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                {
                    ["1", "2", "3"].map((item) => {
                        return (<Card
                            key={item}
                            sx={{
                                maxWidth: 333, mt: 6,
                                ":hover .MuiCardMedia-root": {
                                    scale: "1.1",
                                    transition: "0.35s",
                                    rotate: "1deg"
                                }
                            }}>
                            <CardMedia
                                sx={{
                                    height: 277,
                                }}
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        T-shirt
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                        $12
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with
                                    over 6,000 species, ranging across all continents except
                                    Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between' }}>
                                <Button size="large" onClick={handleClickOpen}>
                                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='small' />
                                    Add to Cart
                                </Button>
                                <Rating name="read-only" value={value} readOnly precision={0.5} />
                            </CardActions>
                        </Card>)
                    })
                }
            </Stack>
            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton sx={{
                    ":hover": { color: "red", rotate: "360deg", transition: "0.4s" },
                    position: "absolute", top: 1, right: 5
                }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>
                <ProducDetails></ProducDetails>
            </Dialog>
        </Container>
    )
}
