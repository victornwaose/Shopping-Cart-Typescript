import React from "react";
import { CircularProgress, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Cards from "./card/Cards";

interface Props {
    datas: any;
    setDatas: React.Dispatch<any>;
    loading: boolean;
}

const useStyle = makeStyles((theme) => ({
    shopContainer: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "60px", 
        display: "flex",
        justifyContent: "space-between",
    },
 
}));

const ShoppingCart: React.FC<Props> = ({ datas, setDatas, loading }) => {
    const classes = useStyle();

    return (
        <div className={classes.shopContainer}>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={{ xs: 2, md: 3 }} style={{marginTop: "40px", marginBottom: "20px"}} >
                    {datas.map((data: any) => (
                        <Grid  xs={12} sm={4} style={{marginTop: "20px", marginBottom: "20px"}}>
                            <Cards  data={data} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default ShoppingCart;
