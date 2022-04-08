import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Icon, Image, Header } from "semantic-ui-react";
import {dummyProducts} from "../../utils/constants"

const ProductPreview = ({ id, heading, description, image, likes }) => {
  let linkStyle = {
    border: "1px solid orange",
    padding: "0.3em",
    borderRadius: "5px",
  };

  const [currentLikes, setCurrentLikes] = React.useState(likes);
  const [str,setStr] = React.useState(JSON.stringify(dummyProducts));

  function changeLikes(e) {
    setCurrentLikes(1+currentLikes);
    const parsedObj = JSON.parse(str);
    parsedObj[id - 1].likes = currentLikes+2;
    console.log(parsedObj[id-1].likes)
    const jsonObj = JSON.stringify(parsedObj);
    setStr(jsonObj);
    localStorage.setItem("dummyProducts",str);
  }

  return (
    <Grid.Row style={{ border: "1px solid black", margin: "2rem 0" }}>
      <Grid.Column width={2}>
        <Image src={image} size="small" />
      </Grid.Column>
      <Grid.Column width={10} textAlign="left">
        <Header as="h2">{heading}</Header>
        <p>{description}</p>
        <Link to={`/product_details/${id}`} class="link-1" style={linkStyle}>
          Details
        </Link>
      </Grid.Column>
      <Grid.Column width={3} textAlign="right" verticalAlign="middle">
        <Button
          icon
          labelPosition="left"
          style={{ height: "100px" }}
          onClick={changeLikes}
        >
          <Icon name="arrow alternate circle up" />
          {currentLikes}
        </Button>
      </Grid.Column>
    </Grid.Row>
  );
};

export default ProductPreview;
