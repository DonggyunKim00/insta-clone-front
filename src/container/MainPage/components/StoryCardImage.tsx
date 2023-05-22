import styled from "styled-components";
import Image from 'next/image'
import React from 'react';
interface StoryCardProps{
    ImageWidth?:number;
    ImageHeight?:number;
    width:number;
    height:number;
}

const StoryCardImage = styled.div<StoryCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width:66px;
    height:100%;
    border-radius: 50%;
    &>div{
        display: flex;
        justify-content: center;
        width:${props=>(props.width || 66)+'px'};
        height:${props=>(props.height || 66)+'px'};
        align-items: center;
        position:absolute;
        border-radius: 50%;
        left:0px;
        right:0px;
        bottom:0px;
        top:0px;

        background:radial-gradient(circle at top right, #833ab4, #fd1d1d, #fcb045);
        z-index:1;
        &>div{
            display:flex;
            justify-content: center;
            align-items: center;
            background-color:rgb(199,199,199);
            border-radius: 50%;
            border:2px solid white;
            color:gray;
            padding:1px;
            width:62px;
            height:62px;
            & > span {
                box-sizing: border-box;
                overflow: hidden;
                align-self:center;
                position:relative;
                align-items: center;    
                border-radius: 50%;
                flex-shrink: 0;
            }
        }
   
}
`;

//일단 이거만, 나중에 여러 스토리카드 부분 재사용할수있도록, 훗날 기본값 잘 잡아서 잘..
//하이라이트 테두리아니면 크기줄어듬 2px
const StoryCard =(props:StoryCardProps)=>{
    return (
        <StoryCardImage width={props.width} height={props.height}>
            <div>
                <div>
                    <Image src='/MainPage/StoryTestImage.png' width={props.ImageWidth} height={props.ImageHeight} alt='스토리이미지'/>
                </div>
            </div>
        </StoryCardImage>
    );
}

export default StoryCard;
    