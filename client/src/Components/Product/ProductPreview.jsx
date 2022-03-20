import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Button ,Icon ,Image, Header } from 'semantic-ui-react';

const ProductPreview = ({id, heading ,description ,image ,likes }) => {
    let linkStyle = {border:'1px solid orange', padding: '0.3em', borderRadius:'5px'};
    const [Likes,setLikes] = React.useState(likes);
    function handleChange(){
      setLikes(Likes+1);
    }
    return <Grid.Row style={{ border: '1px solid black', margin: '2rem 0' }}>
        <Grid.Column width={2}>
          <Image src={image} size='small' />
        </Grid.Column>
        <Grid.Column width={10} textAlign='left'>
            <Header as='h2'>{heading}</Header>
            <p>{description}</p>
            <Link to={`/product_details/${id}`} class="link-1" style={linkStyle}>Details</Link>
        </Grid.Column>
        <Grid.Column width={3} textAlign='right' verticalAlign='middle'>
          <Button icon labelPosition='left' style={{ height: '100px' }} onClick={handleChange}>
            <Icon name='arrow alternate circle up' />
            {Likes}
          </Button>
        </Grid.Column>
  </Grid.Row>
};

export default ProductPreview;