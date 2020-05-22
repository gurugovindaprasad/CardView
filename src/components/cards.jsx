import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
const useStyles = makeStyles({
  root: {
    width: "250px",
  },
  price: {
    display: "flex",
    justifyContent: "left",
  },
  strike: {
    textDecoration: "line-through",
  },
});

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        src={props.productData.faceImage}
        component="img"
        height="240"
      />
      <Typography noWrap>{props.productData.productName}</Typography>
      <CardContent className={classes.price}>
        <Typography noWrap>₹{props.productData.discountedPrice}</Typography>
        <Typography color="textSecondary" className={classes.strike} noWrap>
          {props.productData.retailPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Favorite">
          <Button size="small" variant="contained" color="secondary">
            <Favorite />
          </Button>
        </Tooltip>
        <Tooltip title="Add to Cart">
          <Button size="small" variant="contained" color="primary">
            <AddShoppingCart />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Cards;
