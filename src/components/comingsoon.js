import React from 'react';
import styled from 'styled-components'

const Background = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
font-family: 'Noto Sans';
font-weight: 700;
font-size: 150px;
transform: rotate(-15deg);

& .div{
    width: 300vw;
    height: 300vh; 
}
`


export default function ComingSoon(){
    return(
        <>
            <Background>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
            </Background>
        </>
    )
}