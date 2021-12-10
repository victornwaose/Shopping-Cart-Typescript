import React from "react";
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent,Typography, Button } from "@mui/material";
import { FaDollarSign,FaShoppingCart } from "react-icons/fa";

interface Props {
    data: any;
}

const useStyle = makeStyles((theme) =>({
    cardContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "80%",
      height: "100%",
    },
  }));

const Cards: React.FC<Props> = ({ data }) => {

 const classes = useStyle();

    return (
            <Card  className={classes.cardContainer}>
                <CardMedia image={data.image} alt={data.title} component="img" style={{width: "100%", height:"250px"}} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{data.title}</Typography>
                </CardContent>
                <CardContent style={{display:"flex"}}>
                    <FaDollarSign/>
                    <Typography variant="body2" color="text.secondary">{data.price}</Typography>
                </CardContent>
                <CardContent >
                    <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                </CardContent>
                <Button style={{background:"#1976D2", color: "#fff", }}>Add To Cart</Button>
            </Card>
    )
};

export default Cards;
