import React from "react";
import Cards from "./cards";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardScroll: {
    display: "flex",
    overflowX: "auto",
    flexDirection: "row",
    justifyContent: "left",
    margin: "auto",
    flexWrap: "nowrap",
  },
});

const productSectionProps = {
  sectionName: "Hot Deals",
  products: [
    {
      discountedPrice: "343",
      faceImage: "https://i.picsum.photos/id/116/200/300.jpg",
      productName: "Tasty Granite Computer Very very Tasty ",
      retailPrice: "663.00",
      id: "01fc49f5-c1f5-4e24-b295-93d9e57d9a2f",
    },
    {
      discountedPrice: "646",
      faceImage: "https://i.picsum.photos/id/602/200/300.jpg",
      productName: "Practical Plastic Chair",
      retailPrice: "764.00",
      id: "0c25cdc1-f421-471b-9ae5-6cb7e5d980ce",
    },
    {
      discountedPrice: "209",
      faceImage: "https://i.picsum.photos/id/280/200/300.jpg",
      productName: "Licensed Wooden Chair",
      retailPrice: "257.00",
      id: "0ec23e0b-c871-4589-a33b-bcc00d82c5a7",
    },
    {
      faceImage: "https://i.picsum.photos/id/832/200/300.jpg",
      productName: "Handmade Metal Cheese",
      retailPrice: "432.00",
      discountedPrice: "348",
      id: "0f9a1e58-7305-430a-b731-1fd2201ad21f",
    },
    {
      faceImage: "https://i.picsum.photos/id/894/200/300.jpg",
      productName: "Fantastic Concrete Soap",
      retailPrice: "217.00",
      discountedPrice: "51",
      id: "12178bc3-e47a-40f0-8618-6a15097c4035",
    },
  ],
};

const Section = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <header>
        <h2>{productSectionProps.sectionName}</h2>
      </header>
      <Grid container spacing={2} className={classes.cardScroll}>
        {productSectionProps.products.map((product) => (
          <Grid key={product.id} item>
            <Cards productData={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section;
