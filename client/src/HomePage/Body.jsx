import React from "react";
import { Grid } from "semantic-ui-react";
import ProductPreview from "../Components/Product/ProductPreview";
import { dummyProducts } from "../utils/constants";

const Body = () => {
  return (
    <div
      style={{
        margin: "2rem",
        padding: "2rem",
        height: "80%",
        minHeight: "750px",
      }}
    >
      <Grid style={{ justifyContent: "center" }}>
        {dummyProducts.map((product) => (
          <ProductPreview
            id={product.id}
            heading={product.heading}
            description={product.description}
            likes={product.likes}
            image={product.imagePath}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Body;
