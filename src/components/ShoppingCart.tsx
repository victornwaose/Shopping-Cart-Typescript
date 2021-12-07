import React from "react";
import { CircularProgress, Box } from "@mui/material";

interface Props {
    data: any;
    setData: React.Dispatch<any>;
    loading: boolean;
}

const ShoppingCart: React.FC<Props> = ({ data, setData, loading }) => {
    return (
        <div>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "50%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <h1>datas</h1>
            )}
        </div>
    );
};

export default ShoppingCart;
