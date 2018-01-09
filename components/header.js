import Link from 'next/link';

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #3b5999;
`;

const StyledLink = styled.a`
    cursor: pointer;
    margin-left: 20px;
    padding: 50px 20px;
    font-size: 18px;
    color: #CCC;
    transition: color 300ms ease-in-out;
    &:hover {
        color: white;
    }
`;

const StyledImage = styled.img`
    width: 150px;
    height: 100px;
`;

const LogoContainer = styled.div`
    cursor: pointer;
`;

const LogoName = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 21.6px;
    text-transform: uppercase;
    color: white;
`;

const Header = () => (
    <StyledDiv>
        <Link href="/">
          <LogoContainer>
              <StyledImage
                src="https://scontent.fblr2-1.fna.fbcdn.net/v/t34.0-12/26753764_1694452647260030_970383514_n.jpg?oh=826f496d67258b7c32c156f8b3a79741&oe=5A559180"
              />
              <LogoName>
                Cerebro
              </LogoName>
          </LogoContainer>
        </Link>
        <Link href="/games">
          <StyledLink>Games</StyledLink>
        </Link>
        <Link href="/top-games">
          <StyledLink>Top Games</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
    </StyledDiv>
);

export default Header;
