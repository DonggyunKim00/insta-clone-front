import React from 'react'
import RecomendSection from './components/RecomendSection';
import Tempsidevar from './components/TempSidevar';
import styled from 'styled-components';
import HomeFeedSection from './components/HomeFeed';
import StorySide from './components/StorySide';

const HomeLayout=styled.div`
    display:flex;
`
const HomeMain=styled.div`
    display:flex;
    flex-direction:column;
`;
const MainPageView = () => {
    return (  
        <HomeLayout>
            <Tempsidevar />
            <HomeMain>
            <StorySide/>
            <HomeFeedSection/>
            </HomeMain>
            <RecomendSection />
        </HomeLayout>

    );
}
 
export default MainPageView;