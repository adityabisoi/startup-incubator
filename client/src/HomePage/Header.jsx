import React from "react";
//import { Button, Grid, Image } from "semantic-ui-react";
//import Fancy from "./Navbar/Fancy";
import Navbar from "./Navbar/Navbar";
import logo from '../assets/icon.png';
const Headers = () =>{
  return (
    <>
       <Navbar logo = {logo}/>
    </>
  )
};
export default Headers;

/*const Headers = () => {
  return (
    <div style={{ border: "1px solid black", backgroundColor: "lightblue" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="Images/icon.jpg"
              style={{ width: "120px", margin: "0 2rem" }}
            />
          </Grid.Column>


    )
}



            <Link to="/signup">
              <Button color="blue" basic>
                SignUp
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};*/

