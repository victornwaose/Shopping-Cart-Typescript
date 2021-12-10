import React from "react";
import { Toolbar, Typography, AppBar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaShoppingCart } from "react-icons/fa";



const useStyle = makeStyles(() => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
    },

}));

interface Props {
    search: (e: React.FormEvent<HTMLInputElement>) => void;
    setSearchItem: React.Dispatch<React.SetStateAction<String>>;
}

const Header: React.FC<Props> = ({ search, setSearchItem }) => {
    const classes = useStyle();

    return (
        <div>
            <AppBar>
                <Toolbar className={classes.header}>
                    <Typography variant="h6">shopCart</Typography>
                    <TextField
                        label="search for products"
                        variant="outlined"
                        // onChange={(e) => search(newValue)}
                    />
                    <FaShoppingCart style={{width:"80px", height: "30px"}} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
