import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react'


const Headers = () => {
    return (
        <div style={{ border: '1px solid black', backgroundColor: 'lightblue' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image src='Images/icon.jpg' style={{ width: '120px', margin: '0 2rem' }} />
                    </Grid.Column>
                    <Grid.Column style={{ marginRight: '2rem' }} width={13} verticalAlign='middle' textAlign='right'>
                        <Button style={{ width: '140px', height: '40px' }} href="/aboutus" basic>AboutUs</Button>
                        <Button style={{ width: '140px', height: '40px' }} color='yellow' basic>Login</Button>
                        <Button style={{ width: '140px', height: '40px' }} color='blue' basic>SignUp</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Headers;