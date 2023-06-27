import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

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
const CardWraper = styled.div`
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
const GapTime=styled.div`
    color:rgb(115,115,115);
    >span{
        margin-left:4px;
        margin-right:4px;
    }
`;
const TIMEVALUE={
    week:604800000,
    day:86400000,
    hour:3600000,
    minute:60000,
    second:1000
}

type Props={
    children?:ReactNode,
    title:string,
    text?:string,
    time?:string,
    image:StaticImageData | string,
    isFollowing?:boolean,
}

// 홈 피드의 컨텐츠 상단 유저정보나 추천영역의 추천유저, 프로필정보 등 비슷한 프로필 UI를 공통컴포넌트화하여 사용하려고 시도함  
function ContentsBox({...props}:Props) {
    const uploadTime=props.time&&new Date(props.time)
    const [uploadGap,setUploadGap]=useState<string>()
    useEffect(()=>{
        //게시 후 경과시간을 문자열로 표기 customhook으로 분리가능
        if(props.time){
            const gap=Date.now()-Date.parse(props.time)
            if(gap>TIMEVALUE.week){
                setUploadGap(`${Math.floor(gap/TIMEVALUE.week)}주`);
            }else if(gap>TIMEVALUE.day){
                setUploadGap(`${Math.floor(gap/TIMEVALUE.day)}일`);
            }else if(gap>TIMEVALUE.hour){
                setUploadGap(`${Math.floor(gap/TIMEVALUE.hour)}시`);
            }else if(gap>TIMEVALUE.minute){
                setUploadGap(`${Math.floor(gap/TIMEVALUE.minute)}분`);
            }else if(gap>TIMEVALUE.second){
                setUploadGap(`${Math.floor(gap/TIMEVALUE.second)}초`);
        }
    }},[props.time])
    
    return (
        <div>
            <CardWraper>
            <CardImage>
                {/* 프로필이미지 */}
                    <Image src={props.image} width={32} height={32} alt='이미지'/>
            </CardImage>
            <CardContainer>
                <CardTitle>
                    <span>
                    {props.title}
                    </span>
                    {/* 파란 인증아이콘 */}
                    <div>
                        <Image src='/MainPage/free-icon-verified-7641727.png' width={12} height={12} alt='인증됨' title='인증됨'/>
                    </div>
                    {/* 시간 정보가 있을경우 */}
                    {props.time&&(
                        <GapTime>
                            <span>•</span>
                            <time dateTime={props.time} title={uploadTime?.toLocaleString('ko-KR', { dateStyle:'short'})} >{uploadGap}</time>
                        </GapTime>
                    )}
                </CardTitle>
                {/* 표시할 텍스트가 있을경우 */}
                {props.text&&(
                    <CardContentText>{props.text}</CardContentText>
                )
                }
                
            </CardContainer>
            {props.children}
            </CardWraper>
        </div>
    );
}

export default ContentsBox;