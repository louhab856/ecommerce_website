import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

export default function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger()}>
            <Fab 
            onClick={()=>{ window.scrollTo(0,0)}}
            size="small"
            sx={{position:"fixed" , bottom:33 , right:33}}
         color="secondary" aria-label="add">
                <KeyboardArrowUp />
            </Fab>
        </Zoom>
    )
}
