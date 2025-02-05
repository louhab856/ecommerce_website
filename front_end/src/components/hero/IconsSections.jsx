/* eslint-disable react/prop-types */
import React from "react";
import { Container, Stack, Box, Typography, Divider, useTheme } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function IconsSections() {
    const theme = useTheme();

    return (
        <Container
        
        sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}

        >
            <Stack
                flexWrap={"wrap"}
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                max
                divider=
                {
                    useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null

                }
                >
                <MyBox
                    title={"Fast Delivry"}
                    subTitle={"Start from 10$"}
                    icon={<ElectricBoltIcon />} />
                <MyBox
                    title={"Money Guarantee"}
                    subTitle={"7 Days Back"}
                    icon={<CreditScoreOutlinedIcon />}
                />
                <MyBox
                    title={"365 Days"}
                    subTitle={"For free return"}
                    icon={<WorkspacePremiumOutlinedIcon />} />
                <MyBox
                    title={"Payment"}
                    subTitle={"Secure system"}
                    icon={<AccessAlarmOutlinedIcon />} />
            </Stack>
        </Container>
    );
}

const MyBox = ({ icon, title, subTitle }) => {
    return (
        <Box 
            sx={{ 
                width: 100,
                display: "flex",
                flexGrow: 1,
                alignItems: 'center',
                gap: 3,
                justifyContent: "center" ,
                padding: 1.6 
            }}
        >
            {icon}
            <Box>
                <Typography variant="body1">
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 300 }}>
                    {subTitle}
                </Typography>
            </Box>
        </Box>
    );
};

