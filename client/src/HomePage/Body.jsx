import { use } from "express/lib/application";
import React from "react";
import { Grid } from "semantic-ui-react";
import ProductPreview from "../Components/Product/ProductPreview";
import {useEffect, useState} from "react";

const Body = () => {
  const [visible, setVisible] = React.useState(3);
  const [products,setProducts] = React.useState([]);
  

  useEffect(() => {
    fetch('/projects',{
      method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
    }).then(response => response.json())
    .then(response => setProducts(response));
  })
  

  function viewMore() {
    setVisible(visible + 3);
  }
  products.sort((a, b) =>
    a.likes > b.likes ? -1 : b.likes > a.likes ? 1 : 0
  );

  return (
    <div
      style={{
        margin: "0rem",
        paddingBottom: "2rem",
        height: "80%",
        minHeight: "750px",
      }}
    >
      <Grid style={{ justifyContent: "center" }}>
        {products.slice(0, visible).map((product) => (
          <ProductPreview
            id={product._id}
            heading={product.title}
            description={product.description}
            likes={product.likes}
            image={product.imageUrl}
            whoLiked={product.peopleLiked}
          />
        ))}
      </Grid>
      {visible < products.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <button onClick={viewMore} className="btn btn-danger">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
