import styled from "styled-components";
import ContentsBox from "./ContentsBox";
import Link from "next/link";
import OptionSVG from "./OptionSVG";
import { FeedData } from "./HomeFeed";
import Image from 'next/image';
const FeedTitleInner=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;

`;
const OptionButton=styled.button`
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
    background-color:transparent;
    &:hover{
        fill:rgb(192,192,192)

    }
`;

const FeedTitle=styled.div`
    display:block;
    max-width:470px;
    width:100%;
`;
const FeedContentWrapper = styled.div`
    display:block;
    max-width:470px;
    width:100%;
`
//피드 게시글의 상단 작성자 정보와 미디어가 보여지는 컨텐츠 컴포넌트
export default function FeedContent({author,uploadedTime,content}:FeedData) {
    return(
        <FeedContentWrapper>
            <FeedTitle>
                <FeedTitleInner>
                    <ContentsBox title={author} image={'/MainPage/StoryTestImage.png'} time={uploadedTime}>
                    </ContentsBox>
                    <OptionButton>
                        <Link href={'/'}>
                            <OptionSVG />
                        </Link>
                    </OptionButton>
                </FeedTitleInner>
            </FeedTitle>
            <Image src={content} width={470} height={470} alt="이미지"/>
        </FeedContentWrapper>
    )
}
