import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react'
const Headers = () => {
    return (
        <div style={{ border: '1px solid black', backgroundColor: 'lightblue' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src='Images/icon.jpg' style={{ width: '120px', margin: '0 2rem' }} />
                    </Grid.Column>
                    <Grid.Column style={{ marginRight: '2rem' }} width={13} verticalAlign='middle' textAlign='right'>
                        <Button color='yellow' basic>Login</Button>
                        <Button color='blue' basic>SignUp</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Headers;