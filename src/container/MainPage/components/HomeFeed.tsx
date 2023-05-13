import React from 'react';
import styled from 'styled-components';
const Testdiv=styled.div`
    width:630px;
    height:100%;
`
const TestSection=styled.section`
    margin:auto;
    flex-grow:1;
`
function HomeFeedSection() {
    return (
        <TestSection>
        <Testdiv>
            갈
        </Testdiv>
        </TestSection>
    );
}

export default HomeFeedSection;