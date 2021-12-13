import React from 'react';

const Description = function(){
    const style = {
        minHeight: '450px',
        margin: '1em 1em',
        padding: '1.5em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '4px',
        overflow: 'hidden'
    };

    return (
        <div style = {style}>
            {/* <div style = {{marginRight : '75em'}}> */}
                <img src="https://picsum.photos/200/300" text="just random image"/>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat metus, fermentum id sagittis in, aliquet vel erat. In aliquet condimentum sapien at tempus. Pellentesque vel ante sed felis dictum lobortis non eget nunc. Morbi tincidunt non massa a ultricies. In pretium sapien sed leo varius rhoncus. Ut maximus ut sapien in dictum. Praesent pretium odio at dolor scelerisque, at iaculis odio posuere. Suspendisse faucibus, erat eget feugiat tincidunt, justo libero condimentum quam, vel rhoncus mauris ipsum non quam. Nam semper metus ac elit volutpat porta. Nunc finibus nec mauris sed rutrum. Sed commodo urna quis feugiat volutpat. Donec aliquet vitae arcu vitae bibendum. Quisque suscipit orci libero, vel sagittis lorem placerat in. Etiam laoreet quis lorem non bibendum. Nulla vitae lacus neque. Aliquam at nibh nibh. Donec vitae tristique diam. Praesent mollis auctor congue. Donec vulputate purus nec fringilla porttitor. Duis eleifend tristique neque</p>
        </div>
    )
}

export default Description;