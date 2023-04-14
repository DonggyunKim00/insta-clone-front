import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import testImage from 'src/public/MainPage/free-icon-instagram-174855.png'
import Link from 'next/link'
const RecomendCardWraper = styled.div`
    align-items:center;
    box-sizing:border-box;
    color:black;
    direction:ltr;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    font-size:14px;
    justify-content:space-between;
    list-style-position:outside;
    text-align:start;
`;
const RecomendCardContentWaper = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    flex-grow:1;
    margin-left:12px;
`;

const TestBox=styled.div`
    display:block;
`;
const FollowerButton=styled.button`
    padding-left:16px;
    padding-right:16px;
    padding-top:7px;
    padding-bottom:7px;
    box-sizing:border-box;
    font-weight:600;
    color:white;
    position:relative;
    border-radius:8px;
    border:0px;
    background-color:rgb(0,149,246);
`;

const CardTitle = styled.span`
    font-weight:600;
`

const RecomendBox = () => {
    return ( 
        <TestBox>
            <RecomendCardWraper>
            <Image src={testImage} width={44} height={44} alt='이미지'/>
            <RecomendCardContentWaper>
                {/* <Link href={'/ExamplePage'}>
                <a></a>
                    
                </Link> */}
                <CardTitle>Instagram</CardTitle>
                <span>글</span>
            </RecomendCardContentWaper>
            <FollowerButton>대충팔로우</FollowerButton>
            </RecomendCardWraper>
            <RecomendCardWraper>
            <Image src={testImage} width={44} height={44} alt='이미지'/>
            <RecomendCardContentWaper>
                {/* <Link href={'/ExamplePage'}>
                <a></a>
                    
                </Link> */}
                <CardTitle>Instagram</CardTitle>
                <span>글</span>
            </RecomendCardContentWaper>
            <FollowerButton>대충팔로우</FollowerButton>
            </RecomendCardWraper>
            <RecomendCardWraper>
            <Image src={testImage} width={44} height={44} alt='이미지'/>
            <RecomendCardContentWaper>
                {/* <Link href={'/ExamplePage'}>
                <a></a>
                    
                </Link> */}
                <CardTitle>Instagram</CardTitle>
                <span>글</span>
            </RecomendCardContentWaper>
            <FollowerButton>대충팔로우</FollowerButton>
            </RecomendCardWraper>
            <RecomendCardWraper>
            <Image src={testImage} width={44} height={44} alt='이미지'/>
            <RecomendCardContentWaper>
                {/* <Link href={'/ExamplePage'}>
                <a></a>
                    
                </Link> */}
                <CardTitle>Instagram</CardTitle>
                <span>글</span>
            </RecomendCardContentWaper>
            <FollowerButton>대충팔로우</FollowerButton>
            </RecomendCardWraper>
        </TestBox>
    );
}
    
export default RecomendBox;