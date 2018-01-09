import Link from 'next/link';

import Layout from '../components/layout';
import UploadPrescription from '../components/upload-prescription';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TopGamesContent = styled.div`
    margin-top: 20px;
`;

const TopGamesContentLabel = styled.div`
    font-weight: 400;
    font-size: 18px;
`

const TopGamesList = styled.ul`
    line-height: 1.9;
`;


const TopGames = () => (
  <Layout>
    <Container>
        <TopGamesContent>
            <TopGamesContentLabel>
                Here are some top games we recommend to start with -
            </TopGamesContentLabel>
            <TopGamesList>
                <li>Memory tiles</li>
                <li>White noise</li>
            </TopGamesList>
        </TopGamesContent>
        <UploadPrescription />
    </Container>
  </Layout>
);

export default TopGames;
