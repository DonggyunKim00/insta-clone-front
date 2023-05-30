import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import SideNav from "./SideNav/SideNav";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <GlobalStyles />
      <SideNav />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
`;
