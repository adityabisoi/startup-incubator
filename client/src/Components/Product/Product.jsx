import React from 'react';
import { Grid, Button ,Icon ,Image, Header } from 'semantic-ui-react';

const Product = ({heading ,description ,image ,likes }) => (
    <Grid.Row style={{ border: '1px solid black', margin: '2rem 0' }}>
        <Grid.Column width={2}>
          <Image src={image} size='small' />
        </Grid.Column>
        <Grid.Column width={10} textAlign='left'>
            <Header as='h2'>{heading}</Header>
            <p>{description}</p>
        </Grid.Column>
        <Grid.Column width={3} textAlign='right' verticalAlign='middle'>
          <Button icon labelPosition='left' style={{ height: '100px' }}>
            <Icon name='arrow alternate circle up' />
            {likes}
          </Button>
        </Grid.Column>
  </Grid.Row>
);

export default Product;