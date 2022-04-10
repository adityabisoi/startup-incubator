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
    <Grid.Row style={{margin: "1rem", maxWidth: "400px", backgroundColor: "white", boxShadow: "2px 4px 4px 2px grey"}}>
      <Grid.Row style={{ margin: "20px"}}>
        <Image src={image} size="large" />
      </Grid.Row>
      <Grid.Row width={1} textAlign="left" style={{margin: "30px", marginTop:"0px",marginBottom:"0px"}}>
        <Header as="h1">{heading}</Header>
        <p style={{fontSize: "16px"}}>{description}</p>
      </Grid.Row>
      <Grid.Row width={3} textAlign="right" verticalAlign="middle" style={{margin: "30px"}}>
      <Link to={`/product_details/${id}`} class="link-1" style={{marginLeft:"10px", marginRight:"11rem"}}>
          Details
        </Link>
        <Button
          icon
          labelPosition="left"
          style={{ height: "40px"}}
          onClick={changeLikes}
        >
          <Icon name="arrow alternate circle up" />
          {currentLikes}
        </Button>
      </Grid.Row>
    </Grid.Row>
  );
};

export default ProductPreview;
