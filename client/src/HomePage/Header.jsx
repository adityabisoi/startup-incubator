import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react'
const Headers = () => {
    return (
        <div style={{ padding: '1rem', border: '1px solid black' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src='images/icon.jpg' style={{ width: '120px', margin: '0 2rem' }} />
                    </Grid.Column>
                    <Grid.Column style={{ marginRight: '2rem' }} width={13} verticalAlign='middle' textAlign='right'>
                        <Button basic>Login</Button>
                        <Button basic>SignUp</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Headers;