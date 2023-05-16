import React from 'react';
import styled, { css } from 'styled-components';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
const RecomendCardWraper = styled.div`
    align-items:center;
    box-sizing:border-box;
    color:black;
    display:flex;
    flex-direction:row;
    font-size:14px;
    justify-content:space-between;
    list-style-position:outside;
    text-align:start;
    padding-left:16px;
    padding-right:16px;
    padding-top:8px;
    padding-bottom:8px;
`;
const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    flex-grow:1;
    flex-shrink:0;
`;
const CardTitle = styled.div`
    display:flex;
    flex-direction:row;
    & >span{
    font-weight:600;    
    font-size:14px;
    line-height:18px;
    color:black;
    }

    & >div{
        margin-left:4px;
    }
`;
const CardContentText = styled.span`   
    font-size:12px;
    line-height:16px;
    color:rgb(115,115,115);
`;

const FollowButton=styled.button<{shape?:string}>`
    font-weight:600;
    padding:0px;
    font-size:12px;
    flex-shrink:0;
    flex-grow:0;
    margin-left:12px;
    border: 0px;
    position: relative;
    width: 36px;
    margin-top: -2px;
    margin-bottom: -3px;

    ${(props=>props.shape==='button'?
    css`
        color:rgb(255,255,255);
        border-radius:8px;
        background-color:rgb(0,149,246);
        box-sizing:border-box;
        padding-left:16px;
        padding-right:16px;
        padding-top:7px;
        padding-bottom:7px;
        `
    :
    css`
        color:rgb(0,149,246);
        background-color:transparent;
        :hover{
            color:rgb(0, 55, 107);
        }
    `
    )};
    
`;
const CardImage=styled.div`
    display:block;
    margin-right:12px;
    flex-shrink:0;
    height:34px;
    & >span{
        margin-left:-5px;
        margin-right:-5px;
        border-radius:50%;
    }
    
`;

interface Props{
    title:string,
    text:string,
    image:StaticImageData | string,
    isFollowing?:boolean,
    isButton?:boolean,
}

const RecomendBox = ({isButton=true, ...props}:Props) => {
    return ( 
            <RecomendCardWraper>
            <CardImage>
                    <Image src={props.image} width={32} height={32} alt='이미지'/>
            </CardImage>
            <CardContainer>
                <CardTitle>
                    <span>
                    {props.title}
                    </span>
                    <div>
                        <Image src='/MainPage/free-icon-verified-7641727.png' width={12} height={12} alt='이미지'/>
                    </div>
                </CardTitle>
                <CardContentText>{props.text}</CardContentText>
            </CardContainer>
            {
                isButton?(
                    <Link href='/'>
                    <FollowButton>{props.isFollowing?"팔로잉":"팔로우"}</FollowButton>
                    </Link>
                ):(<></>)
                
            }
            </RecomendCardWraper>
    );
}
    
export default RecomendBox;