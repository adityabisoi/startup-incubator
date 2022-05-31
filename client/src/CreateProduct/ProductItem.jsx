import React from "react"
import {useNavigate} from "react-router-dom"
import { Grid, Button, Icon, Image, Header } from "semantic-ui-react";

const ProductItem = (props) => {
    let history=useNavigate()
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
                    style={{ height: "40px" ,marginBottom:"8px"}}
                    color='red'
                    onClick={()=>{props.deleteProject(props.note._id)}}
                >
                Delete
                </Button>
                <Button
                    style={{ height: "40px" }}
                    color='grey'
                    onClick={()=>{history('/EditProject?id='+props.note._id+'&title='+props.note.title+'&description='+props.note.description+'&imageUrl='+props.note.imageUrl)}}
                >
                Edit
                </Button>
            </Grid.Row>



        </Grid.Row>
        

    )
}

export default ProductItem

