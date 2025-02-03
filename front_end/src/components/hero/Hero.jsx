/* eslint-disable react/jsx-key */
import { Container, Box, Link, Typography, Stack, Button, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const mySlider = [
    {
        text: 'Men',
        link: 'src/images/banner-15.jpg'
    },
    {
        text: 'Women',
        link: 'src/images/banner-25.jpg'
    }
]
export default function Hero() {
    const theme = useTheme()
    return (
        <Container sx={{ mt: 3, display: "flex", alignItems: "center", gap: 1 }}>
            <Swiper 
            pagination={true}
             modules={[Pagination]}
              className="mySwiper"
              loop={true}
              >
                {mySlider.map((item) => {
                    return (
                        <SwiperSlide style={{ position: "relative" }} className='parent-slider'>
                            <img src={item.link} alt="Banner" style={{ width: "100%" }} />
                            <Box
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        position: "absolute",
                                        left: 0,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        padding: "10px"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        pt: 4,
                                        pb: 4
                                    },
                                }}
                            >
                                <Typography sx={{ color: "#222" }} variant="h5">
                                    LIFESTYLE COLLECTION
                                </Typography>
                                <Typography sx={{ color: "#222", fontWeight: 500, my: 1 }} variant="h3">
                                    {item.text}
                                </Typography>
                                <Stack
                                    sx={{
                                        justifyContent: { xs: "center", sm: "left" },
                                    }}
                                    direction={"row"}
                                    alignItems={"center"}
                                >
                                    <Typography color={"#333"} mr={1} variant="h4">
                                        SALE UP TO
                                    </Typography>
                                    <Typography color={"#D23F57"} variant="h4">
                                        30% OFF
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{
                                        color: "#000",
                                        fontWeight: 300,
                                        my: 1,
                                    }}
                                    variant="body1"
                                >
                                    Get Free Shipping on orders over $99.00
                                </Typography>
                                <Button
                                    sx={{
                                        px: 5,
                                        py: 1,
                                        mt: 2,
                                        backgroundColor: "#222",
                                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                        color: "#fff",
                                        borderRadius: "1px",
                                        "&:hover": {
                                            bgcolor: "#151515",
                                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                        },
                                    }}
                                    variant="contained"
                                >
                                    shop now
                                </Button>
                            </Box>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <Box
                sx={{ display: { xs: "none", md: "block", minWidth: "25%" } }}
            >
                <Box sx={{ position: "relative" }}>
                    <img src="src\images\banner-17.jpg" width={"100%"} />
                    <Stack
                        className=""
                        sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 31 }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#2B3445",
                                fontSize: "18px",
                            }}
                        >
                            NEW ARRIVALS
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#2B3445",
                                lineHeight: "16px",
                                mt: 1,
                            }}
                        >
                            SUMMER
                        </Typography>
                        <Link
                            sx={{
                                color: "#2B3445",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "#D23F57"
                                },

                            }}
                            href="#"
                            underline="none"
                        >
                            shop now
                            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                        </Link>
                    </Stack>
                </Box>
                <Box sx={{ position: "relative" }} >
                    <img src="src\images\banner-16.jpg" width={"100%"} />
                    <Stack
                        className=""
                        sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 31 }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#2B3445",
                                fontSize: "18px",
                            }}
                        >
                            GAMING 4K
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#2B3445",
                                lineHeight: "16px",
                                mt: 1,
                            }}
                        >
                            DESKTOPS &
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#2B3445",
                            }}
                        >
                            LAPTOPS
                        </Typography>
                        <Link
                            sx={{
                                color: "#2B3445",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "#D23F57"
                                },

                            }}
                            href="#"
                            underline="none"
                        >
                            shop now
                            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}
