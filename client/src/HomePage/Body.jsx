import React from 'react';
import { Button, Grid, Header, Icon, Image } from 'semantic-ui-react';

const Body = () => {
    return (
        <div style={{ margin: '2rem', padding: '2rem', border: '1px solid black' }}>
            <Grid>
                <Grid.Row style={{ border: '1px solid black', margin: '2rem 0' }}>
                    <Grid.Column width={2}>
                        <Image src='/Images/logo-placeholder.png' size='small' />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign='left'>
                        <Header as='h2'>Heading</Header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti at tempora praesentium, beatae neque ab vel perferendis maiores alias earum optio sequi saepe dolore illo, eum nemo! Commodi, fuga!</p>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right' verticalAlign='middle'>
                        <Button icon labelPosition='left' style={{ height: '100px' }}>
                            <Icon name='arrow alternate circle up' />
                            1710</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{ border: '1px solid black', margin: '2rem 0' }}>
                    <Grid.Column width={2}>
                        <Image src='/Images/logo-placeholder.png' size='small' />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign='left'>
                        <Header as='h2'>Heading</Header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti at tempora praesentium, beatae neque ab vel perferendis maiores alias earum optio sequi saepe dolore illo, eum nemo! Commodi, fuga!</p>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right' verticalAlign='middle'>
                        <Button icon labelPosition='left' style={{ height: '100px' }}>
                            <Icon name='arrow alternate circle up' />
                            1710</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{ border: '1px solid black', margin: '2rem 0' }}>
                    <Grid.Column width={2}>
                        <Image src='/Images/logo-placeholder.png' size='small' />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign='left'>
                        <Header as='h2'>Heading</Header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti at tempora praesentium, beatae neque ab vel perferendis maiores alias earum optio sequi saepe dolore illo, eum nemo! Commodi, fuga!</p>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right' verticalAlign='middle'>
                        <Button icon labelPosition='left' style={{ height: '100px' }}>
                            <Icon name='arrow alternate circle up' />
                            1710</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}


export default Body;