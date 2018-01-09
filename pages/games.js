import Link from 'next/link';

import styled from 'styled-components';

import Layout from '../components/layout';
import UploadPrescription from '../components/upload-prescription';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const GamesContent = styled.div`
    margin-top: 20px;
`;

const GamesContentLabel = styled.div`
    font-weight: 400;
    font-size: 18px;
`

const GamesList = styled.ul`
    line-height: 1.9;
`;

const Games = () => (
  <Layout>
    <Container>
        <GamesContent>
            <GamesContentLabel>
                The games that we recommend will help you - 
            </GamesContentLabel>
            <GamesList>
                <li>Improve memory</li>
                <li>De-stress</li>
                <li>Calm the nerves</li>
            </GamesList>
        </GamesContent>
        <UploadPrescription />
    </Container>
  </Layout>
);

export default Games;
