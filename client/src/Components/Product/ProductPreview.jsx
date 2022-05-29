import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Icon, Image, Header } from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

const ProductPreview = ({ id, heading, description, image, likes }) => {
  let linkStyle = {
    border: "1px solid orange",
    padding: "0.3em",
    borderRadius: "5px",
  };

  const style = {
    margin: "1rem",
    maxWidth: "400px",
    backgroundColor: "white",
    boxShadow: "2px 4px 4px 2px grey",
  };

  const hoverStyle = {
    margin: "1rem",
    maxWidth: "400px",
    background: "#7AD7F0",
    boxShadow: "2px 4px 4px 2px grey",
  };
  const [currentLikes, setCurrentLikes] = React.useState(likes);
  const [hover, setHover] = React.useState(false);
  let history = useNavigate();

  async function changeLikes(e) {
    const JWTtoken = localStorage.getItem('token');
    if(JWTtoken) {
      const response = await fetch('http://localhost:5000/changeLikes',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({id:id,likes:currentLikes,JWTtoken:JWTtoken})
      })
      const res = await response.json();
      if(res!=false){
        setCurrentLikes(res.likes);
      }
    }else{
      history('/login');
    }
  }

  return (
    <Grid.Row
      style={hover ? hoverStyle : style}
      className="clickme"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid.Row style={{ margin: "20px" }}>
        <Link to={`/product_details/${id}`}>
          <Image src={image} size="medium" centered  />
        </Link>
      </Grid.Row>
      <Grid.Row
        width={1}
        textAlign="left"
        style={{ margin: "30px", marginTop: "0px", marginBottom: "0px" }}
      >
        <Link to={`/product_details/${id}`}>
          <Header as="h1">{heading}</Header>
          <p style={{ fontSize: "16px", color: "black" }}>{description}</p>
        </Link>
      </Grid.Row>
      <Grid.Row
        width={3}
        textAlign="right"
        verticalAlign="middle"
        style={{ margin: "30px" }}
      >
        <Button
          icon
          labelPosition="left"
          style={{ height: "40px" }}
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
