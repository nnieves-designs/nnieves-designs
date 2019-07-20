import React from 'react';
import styled from 'styled-components'

const Background = styled.div`
top: -650px;
width: 4000px;
height: 4000px;
font-size: 150px;
transform: rotate(-15deg);
position: relative;
color: #f9f9f9;
z-index: -1;
`

const Wrap = styled.div`
font-family: 'Noto Sans';
font-weight: 700;
width: 100vw;
height: 100vh;
overflow: hidden;
`


export default function ComingSoon(){
    return(
        <Wrap>
            <Background>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
                <div> COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</div>
            </Background>
        </Wrap>
    )
}