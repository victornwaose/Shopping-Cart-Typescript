import React from "react";
import { Toolbar, Typography, AppBar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles"

  const useStyle = makeStyles(()=> ({
        header: {
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
        }
    }));

const Header: React.FC = () => {

    const classes = useStyle();

    return (
        <div>
            <AppBar >
                <Toolbar className={classes.header} >
                    <Typography variant="h4">shopCart</Typography>
                    <TextField  label="search for products"
                    variant="outlined" />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
