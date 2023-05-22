import React from 'react';
import styled from 'styled-components';
import StorySide from './StorySide';
const Testdiv=styled.div`
    width:630px;
    height:200vh;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    @media screen and (min-width:1160px) {
        float: left;
        margin-right:64px;
    }
    
`;
const TestFeed=styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width:630px;
    flex-grow: 0;
    flex-shrink: 0;
    overflow-x: visible;
    overflow-y: visible;
    align-items:center;
`

interface FeedData{
    author:string,
    timedata:any,
    contentStream:any,
    content:string,
    like:number,
    comment?:any
}
type Props={
    feedData:FeedData
}
function HomeFeed({}) {
    return (
        <Testdiv>
            <StorySide/>
            <TestFeed>
                갈!
            </TestFeed>
        </Testdiv>
    );
}

export default HomeFeed;