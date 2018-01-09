import Layout from '../components/layout';

import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const AboutHeader = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bolder;
    color: #333;
    font-family: Roboto;
`;

const AboutContent = styled.p`
    margin-top: 20px;
    line-height: 1.5;
    font-size: 21.6px;
    font-weight: 300;
    color: #333;
    font-family: Roboto-Light;
`;

export default () => (
    <Layout>
        <AboutContainer>
            <AboutHeader>About us</AboutHeader>
        </AboutContainer>
    </Layout>
);
