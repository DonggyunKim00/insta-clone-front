import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components';
import StroyCard from './StoryCardImage';

interface StoryItem{
    count:number;
}
const StoryWrapper =styled.div`
    display:block;
    flex-direction:row;
    height:117px;
    overflow-y:hidden;
    position: relative;
    padding-top:16px;
    padding-bottom:16px;
    margin-top:16px;
    width:100%;
`;

const StoryList=styled.ul`
    box-sizing:border-box;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    color:black;
    border-color:black;
    border-style:none;
    height:85px;
    width:4px;
`;
const StoryItem= styled.li<StoryItem>`
  display: list-item;
  list-style-type: none;
  position: absolute;
  transform:${props=>`translateX(${(props.count*80)+2}px)`};
  height:122px;
    width:66px;
  & > div {
    border:2px;
    height:122px;
    width:66px;
    position: relative;
    box-sizing: border-box;
    align-items:flex-start;
    justify-content:center;
    display:flex;
    top:2px;
    & > button {
        display: flex;
        flex-direction:column;
        padding-left:6px;
        padding-right:6px;
        padding-top:0px;
        width:64px;
        height:84px;
        padding-bottom:0px;
        border-radius: 100%;
        border:2px solid black;
        align-items: center;
        justify-content:center;
        box-sizing: border-box;
        border-style: none;
        position:relative;
        background: none;
        &> div{
            &>div{
                position:relative;
                max-width:74px;
            }
        }
      }
    }
`;
//스토리바 양옆의 li태그 무슨역할인지모름 스크롤?
const SideLi=styled.li<{direction:'left'| 'right'}>`
    display: list-item;
    width: 2px;
    
    transform: ${props=>props.direction==='left'? 'translateX(0px)':props.direction==='right'? 'translateX(240px)': ''};
`;

function StorySide() {
    return (
        <StoryWrapper>
            <StoryList>
            <SideLi direction={'left'}/>
            <SideLi direction={'right'}/>

            <StoryItem count={1}>
                    <div>
                    <button>
                        <StroyCard width={66} height={66} ImageWidth={56} ImageHeight={56}/>
                        <div>
                            <div>Stay..</div>
                        </div>
                    </button>
                    </div>
                </StoryItem>
                <StoryItem count={2}>
                    <div>
                    <button>
                        <StroyCard width={66} height={66} ImageWidth={56} ImageHeight={56}/>
                        <div>
                            <div>ㅇㅇ</div>
                        </div>
                    </button>
                    </div>
                </StoryItem>
                <StoryItem count={3}>
                    <div>
                    <button>
                        <StroyCard width={66} height={66} ImageWidth={56} ImageHeight={56}/>
                        <div>
                            <div>ㅇㅇ</div>
                        </div>
                    </button>
                    </div>
                </StoryItem>
                <StoryItem count={4}>
                    <div>
                    <button>
                        <StroyCard width={66} height={66} ImageWidth={56} ImageHeight={56}/>
                        <div>
                            <div>ㅇㅇ</div>
                        </div>
                    </button>
                    </div>
                </StoryItem>
            </StoryList>   
        </StoryWrapper>
    );
}

export default StorySide;