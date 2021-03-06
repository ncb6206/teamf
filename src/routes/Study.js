import React, { useState } from "react";
import Header from "../components/Header"
import { Button } from 'reactstrap';
import styled from "styled-components";
import { Link, Route, BrowserRouter} from "react-router-dom";
import Box from '@mui/material/Box';

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  text-align: center;
  padding-bottom: 20px;
`;

const Left = styled.span`
    position : absolute;
    bottom: 40px;
    left: 200px;
`;

const Right = styled.span`
    position : absolute;
    bottom: 40px;
    right : 200px;
`;

const Date = styled.span`
    font-size: 48px;
    font-weight: 800;
    text-align:center;
`;

const Timer = styled.div`
    border:1px solid silver;
    padding:30px;
`;

const Timer2 = styled.p`
    border:1px solid red;
    width:50%;
    margin:0 auto;
    text-align:center;
`;

function Selfmonitoring(){
    return(
        <div>
            <Header />
            <body>
            <Timer>
            <Date className="textShadow2">
                    <Timer2>2022-07-05 14:47:35</Timer2>
            </Date>
            </Timer>
            <Wrapper>
                <div>
                    <Box
                    sx={{
                        width: 500,
                        height: 500,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    />
                </div>
            </Wrapper>
            </body>
            <Left>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button 
                style={{fontSize: "50px", textTransform: "none", width:"300px", height:"200px" }} 
                outline color="primary">
                    일시정지
                </Button>
            </Link>
            </Left>
            <Right>
                <Link to="/Result" style={{ textDecoration: 'none' }}>
                    <Button 
                    style={{fontSize: "60px", textTransform: "none", width:"300px", height:"200px" }} 
                    outline color="primary">
                        종료
                </Button>
            </Link>
            </Right>
        </div>
    );
}

export default Selfmonitoring