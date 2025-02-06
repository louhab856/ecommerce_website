/* eslint-disable react/jsx-key */
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function ProducDetails() {
    return (
        <Box
            sx={{ display: "flex", alignItems: "center", gap: 2.5 , flexDirection:{xs:"column", sm:"row"} }}
        >
            <Box
            sx={{display:"flex"}}
            >
                <img src="src/images/1.jpg" width={300} alt="" />
            </Box>
            <Box
            sx={{
                textAlign: { xs: "center", sm: "left" } 
              }}
            >
                <Typography variant="h5">
                    Women&lsquo;s fashion
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    $12
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium
                    voluptatum animi omnis doloribus. Id quibusdam ex,
                    esse cumque sunt totam deserunt, iure temporibus ipsam qui quo debitis excepturi harum!
                </Typography>
                <Stack 
                sx={{justifyContent: {xs:"center" , sm:"left"}}}
                direction={"row"} gap={1}>
                    {
                        ["src/images/1.jpg", "src/images/2.jpg"].map((item) => {
                            return (
                                <img
                                    style={{ borderRadius: 3 }}
                                    key={item} src={item} alt="" height={100}
                                    width={90} />
                            )
                        })
                    }
                </Stack>
                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, mt:1 , textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}
