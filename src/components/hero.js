import React from 'react';
import styled from 'styled-components'

const Title = styled.div`
font-family: 'Noto Sans';
font-weight: 700;

font-size: 100px;
color: #222222;

text-align: center;

position: relative;
top: 40vh;
margin-top: -100vh;

overflow: hidden;

`

export default function Hero(){
    return(
        <>
            <Title>
                <div>WEBSITE COMING SOON.</div>
            </Title>
        </>
    )
}