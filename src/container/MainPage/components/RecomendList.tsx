import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import RecomendBox from './RecomendBox';
const RecomendListLayout=styled.div`
    direction:ltr;
    display:block;
    font-size:14px;
    font-stretch:100%;
    font-weight:400;
    line-height:18px;
    text-size-adjust:100%;
    width:20rem;
`;
const RecomendListWraper= styled.div`
    align-content:stretch;
    align-self:auto;
    box-sizing:border-box;
    color:black;
    direction:ltr;
    display:flex;
    flex-direction:column;
    font-kerning:auto;
    font-size:14px;
    font-stretch:100%;
    font-weight:400;
    justify-content:flex-start;
    line-height:18px;
    margin-top:16px;
    overflow-x:visible;
    overflow-y:visible;
    position: relative;
`;

const RecomendListTitle = styled.span`
    min-width:0px;
    color:black;
    overflow-wrap:break-word;
    position: relative;
    text-size-adjust:100%;
    white-space:pre-line;
    line-height:20px;
    max-width:100%;
    margin:0px;
    font-weight:600;
`;

const RecomendList = styled.div`
    align-items:stretch;
    align-content:stretch;
    align-self:auto;
    background-color:white;
    border-color:rgb(219,219,219);
    border:0.8px;
    box-sizing:border-box;
    position:relative;
    justify-content:flex-start;
    font-weight:400;
    margin-top:16px;
    position:relative;
    line-height:18px;
    flex-direction:column;
`

const RecomendL=()=> {
    return (
        <RecomendListLayout>
            <RecomendListWraper>
                <RecomendListTitle>회원님을 위한 추천</RecomendListTitle>
                <RecomendList>
                <RecomendBox></RecomendBox>
                </RecomendList>
            </RecomendListWraper>
        </RecomendListLayout>
    );
}

export default RecomendL;