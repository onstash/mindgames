import Link from 'next/link';

import Layout from '../components/layout';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HomeContent = styled.p`
    margin-top: 20px;
    line-height: 1.5;
    font-size: 21.6px;
    font-weight: 300;
    color: #333;
    font-family: Roboto-Light;
`;

const Header = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bolder;
    color: #333;
    font-family: Roboto;
`;

const List = styled.ul`
    line-height: 1.9;
    font-size: 17px;
`;

const ReasonsLabel = styled.div`
    margin-top: 20px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
`;

const Reasons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ReasonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Reason = styled.div`
    width: 35%;
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
`;


const Index = () => (
  <Layout>
    <Container>
        <Header>
            Who are we?
        </Header>
        <HomeContent>
            Cerebro is a gaming platform that provide games which helps to boost the mental and cognitive ability of the patients suffering from Alzheimer, ADHD or other mental health issues. Our goal is to help patients recover from their neurological disorder in a non-invasive manner.
        </HomeContent>
        <Header>
            Why?
        </Header>
        <List>
            <li>
                Computer games are ubiquitous and can be utilized for serious purposes such as health and education
            </li>
            <li>
                On average ever person from 20-35 spend 1 hour or more on Computer or Virtual Reality based games
            </li>
            <li>
                This time can be productively utilized with no extra visit to doctors
            </li>
        </List>
        <ReasonsLabel>How?</ReasonsLabel>
        <Reasons>
            <ReasonContainer>
                <Reason>
                    Interactive feedback mechanism
                </Reason>
                <Reason>
                    Dedicated platform to choose for specific mental health issues
                </Reason>
            </ReasonContainer>
            <ReasonContainer>
                <Reason>
                    Open data platform to facilitate research
                </Reason>
                <Reason>
                    Use as per your own choice or prescribed by your doctor
                </Reason>
            </ReasonContainer>
        </Reasons>
    </Container>
  </Layout>
);

export default Index;
