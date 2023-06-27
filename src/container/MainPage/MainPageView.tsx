import React from 'react'
import RecomendSection from './components/RecomendSection';
import styled from 'styled-components';
import HomeFeed from './components/HomeFeed';
import StorySide from './components/StorySide';
import SideNav from '@/components/SideNav/SideNav';

const HomeLayout=styled.div`
    display:flex;
`
const HomeMain=styled.div`
    display:flex;
    flex-grow:1;
    flex-direction:column;
    &>div{
        display:block;
        margin-left: 244px;
        @media screen and (max-width: 1263px) {
            margin-left: 72px;
        }

    }
`;

const HomeSection=styled.section<{maxWidth?:number}>`
    display:flex;
    flex-direction:row;
    position: relative;
    box-sizing: border-box;
    width:100%;
    max-width:calc(1013px);
    margin-left:auto;
        margin-right:auto;
    @media screen and (max-width:1160px) {
        flex-direction:column;
        flex-wrap: nowrap;
        
        max-width:${props=>(props.maxWidth || 630)+'px'};
    }
        
`;
type Props={
    userData?:any
    feedData?:any
    followData?:any
}
//pages에서 보일 홈 컴포넌트, 직접 page 컴포넌트에 집어넣어도 문제없음 디버깅을 위해 일단 이렇게함
//가져온 sidenav는 최신커밋이 반영되지 않은상태 
const MainPageView = ({userData, feedData, followData}:Props) => {
    return (  
        <HomeLayout>
            <SideNav />
            <HomeMain>
                <div>
                    <HomeSection>
                        <HomeFeed/>
                        <RecomendSection userData={userData} recomendData={followData} />
                    </HomeSection>
                </div>
            </HomeMain>
        </HomeLayout>

    );
}
 
export default MainPageView;