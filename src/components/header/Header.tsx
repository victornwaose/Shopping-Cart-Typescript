import React, { useState } from "react";
import { Toolbar, Typography, AppBar, TextField, Drawer, Badge } from "@mui/material";
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
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    return (
        <div>
            <AppBar>
                <Toolbar className={classes.header}>
                    <Typography variant="h6">shopCart</Typography>
                    <TextField label="search for products" variant="outlined" />

                    <Drawer
                        anchor="right"
                        open={cartOpen}
                        onClose={() => setCartOpen(false)}
                    >
                       
                        Cart
                    </Drawer> 
                    <Badge badgeContent={5} color="error" >
                            <FaShoppingCart
                                style={{ width: "50px", height: "30px"}}
                                onClick={() => setCartOpen(true)}
                            />
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
