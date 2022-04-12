import React from "react";
import { Button, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="Images/icon.jpg"
              style={{ width: "120px", margin: "0 2rem" }}
            />
          </Grid.Column>

          <Grid.Column
            style={{ marginRight: "2rem" }}
            width={13}
            verticalAlign="middle"
            textAlign="right"
          >
            <Link to="/new-product">
              <span style={{ color: "black", margin: "0 10px" }}>
                New product
              </span>
            </Link>
            <Link to="/contact">
              <Button class="ui yellow button">Contact</Button>
            </Link>
            <Link to="/login">
              <Button class="ui yellow button">Login</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Headers;
