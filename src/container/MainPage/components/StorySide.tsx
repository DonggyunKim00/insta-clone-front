import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components';
const StoryWrapper =styled.div`
    display:flex;
    flex-direction:row;
    height:85px;
    overflow-y:hidden;
    position: relative;
    padding-top:16px;
    padding-bottom:16px;
    margin-top:16px;
`;

const StoryList=styled.ul`
    box-sizing:border-box;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    color:black;
    border-color:black;
    border-style:none;
`;
const StoryItem=styled.li`
    display: list-item;
    list-style-type: none;
    position: absolute;
    border-style:none;
    transform: matrix(1, 0, 0, 1, 2, 0);
    & >div{
        display:flex;
        flex-direction:column;
        padding-left: 4px;
        padding-right: 4px;
        box-sizing: border-box;
        & >div{
            box-sizing: content-box;
            padding:2px;
            border: 2px #fff;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle at bottom left, #F58529 20%, #C42D91);
            border-radius:100%;
            & >button{
                display:flex;
                flex-direction:column;
                border-radius:100%;
                border-style:none;
                padding:2px;
                background-color:white;

                & >span{
                border-radius:100%;
                
                }
            }
        }
    }
`;

const StoryItemTest=styled.li`
    display: list-item;
    list-style-type: none;
    position: absolute;
    border-style:none;
    transform: matrix(1, 0, 0, 1, 2, 0);
    & >div{
        display:flex;
        flex-direction:column;
        padding-left: 4px;
        padding-right: 4px;
        box-sizing: border-box;
        & >div{
            box-sizing: content-box;
            padding:2px;
            border: 2px #fff;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle at bottom left, #F58529 20%, #C42D91);
            border-radius:100%;
            & >button{
                display:flex;
                flex-direction:column;
                border-radius:100%;
                border-style:none;
                padding:2px;
                background-color:white;

                & >span{
                border-radius:100%;
                
                }
            }
        }
    }
`;
function StorySide() {
    return (
        <StoryWrapper>
            <StoryList>
                <StoryItem>
                    <div>
                        <div>
                            <button>
                                <Image src='/MainPage/StoryTestImage.png' width={56} height={56} alt='스토리이미지'/>
                            </button>
                        </div>
                    </div>
                </StoryItem>
                <StoryItemTest>
                    <div>
                        <div>
                            <button>
                                <Image src='/MainPage/StoryTestImage.png' width={56} height={56} alt='스토리이미지'/>
                            </button>
                        </div>
                    </div>
                </StoryItemTest>
            </StoryList>   
        </StoryWrapper>
    );
}

export default StorySide;