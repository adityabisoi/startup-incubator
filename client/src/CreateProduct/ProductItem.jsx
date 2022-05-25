import React from "react"
import { Grid, Button, Icon, Image, Header } from "semantic-ui-react";

const ProductItem = (props) => {
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
    const [hover, setHover] = React.useState(false);
    return (
        <Grid.Row
        style={hover ? hoverStyle : style}
        className="clickme"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <Grid.Row style={{ margin: "auto" }}>
                <Image src={props.note.imageUrl} size="large" />
            </Grid.Row>

            <Grid.Row
                width={1}
                textAlign="left"
                style={{ margin: "30px", marginTop: "20px", marginBottom: "0px" }}
            >
                <Header as="h1">{props.note.title}</Header>
                <p style={{ fontSize: "16px", color: "black" }}>{props.note.description}</p>
            </Grid.Row>

            <Grid.Row
                width={1}
                textAlign="right"
                verticalAlign="middle"
                style={{ margin: "30px" }}
            >
                <Button
                    style={{ height: "40px" }}
                    color='red'
                    onClick={()=>{props.deleteProject(props.note._id)}}
                >
                Delete
                </Button>
            </Grid.Row>



        </Grid.Row>
        

    )
}

export default ProductItem

