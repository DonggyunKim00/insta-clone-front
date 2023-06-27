import styled from "styled-components";
//피드 게시글의 점3개 버튼
function OptionSVG(){
    return(
        <StyledOptionSVG>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="옵션"
            width="current"
            height="current"
            viewBox="0 0 24 24"
    >
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
                <path fill="current" fill-rule="evenodd" d="...." />
            </svg>
        </StyledOptionSVG>
    )
    
}

const StyledOptionSVG=styled.div`
    width:24px;
    height:24px;
    path{
    fill:rgb(115,115,115);
    } 
    
`;

export default OptionSVG;