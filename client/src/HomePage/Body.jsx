import React from "react";
import { Grid } from "semantic-ui-react";
import ProductPreview from "../Components/Product/ProductPreview";
import { dummyProducts } from "../utils/constants";

const Body = () => {
<<<<<<< HEAD
  const [visible, setVisible] = React.useState(3);

  function viewMore() {
    setVisible(visible + 3);
  }

=======
  dummyProducts.sort((a,b) => (a.likes > b.likes) ? -1 : ((b.likes > a.likes) ? 1 : 0));
>>>>>>> main
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
        {dummyProducts.slice(0, visible).map((product) => (
          <ProductPreview
            id={product.id}
            heading={product.heading}
            description={product.description}
            likes={product.likes}
            image={product.imagePath}
          />
        ))}
      </Grid>
      {visible < dummyProducts.length && (
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
