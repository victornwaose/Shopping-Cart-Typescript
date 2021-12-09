import React from "react";
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";
import { Card, CardMedia, CardContent,Typography } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";

interface Props {
    data: any;
}

const useStyle = makeStyles((theme) =>({
    root: {
      display: "flex",
      justifyContent: "spaceBetween",
      flexDirection: "column",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "10px",
      marginTop: "10px",
     
    },
  }));

const Cards: React.FC<Props> = ({ data }) => {

 const classes = useStyle();

    return (
            <Card  className={classes.root}>
                <CardMedia image={data.image} alt={data.title} component="img" style={{width: "100%", height:"300px"}} />
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
            </Card>
    )
};

export default Cards;
