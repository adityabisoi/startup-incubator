import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div style={{ border: '1px solid black', backgroundColor: 'lightblue' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src='Images/icon.jpg' style={{ width: '120px', margin: '0 2rem' }} />
                    </Grid.Column>
                    <Grid.Column style={{ marginRight: '2rem' }} width={13} verticalAlign='middle' textAlign='right'>

                        <Link to='/login'>
                            <Button color='yellow' basic >Login</Button>
                        </Link>
                        
                        <Link to='/signup'>
                            <Button color='blue' basic>SignUp</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Headers;