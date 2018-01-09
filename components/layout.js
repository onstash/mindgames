import Header from './header';
import ContentLayout from '../components/content-layout';

import styled, { css } from 'styled-components';

const LayoutContainer = styled.div`
    border: 1px solid #EEE;
    padding: 20px;
    font-family: Roboto;
    background-color: #c6d4df;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`;

const Layout = (props) => (
    <LayoutContainer>
        <Header />
        <ContentLayout>
            {props.children}
        </ContentLayout>
    </LayoutContainer>
);

export default Layout;
