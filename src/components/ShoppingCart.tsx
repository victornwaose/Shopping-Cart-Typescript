import React from "react";
import { CircularProgress, Box } from "@mui/material";
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
    },
    card: {
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
                        marginTop: "40%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                datas.map((data: any) => (
                    <div className={classes.card}>
                        <Cards key={data.id} data={data} />
                    </div>
                ))
            )}
        </div>
    );
};

export default ShoppingCart;
