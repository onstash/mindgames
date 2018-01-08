import Link from 'next/link';

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
`;

const StyledLink = styled.a`
    cursor: pointer;
    padding: 40px 30px;
    color: #666;
    transition: color 300ms ease-in-out;
    &:hover {
        color: #333;
    }
`;

const StyledImage = styled.img`
    width: 150px;
    height: 100px;
    cursor: pointer;
`;

const Header = () => (
    <StyledDiv>
        <Link href="/">
          <StyledImage
            src="https://scontent.fblr2-1.fna.fbcdn.net/v/t34.0-12/26753764_1694452647260030_970383514_n.jpg?oh=826f496d67258b7c32c156f8b3a79741&oe=5A559180"
          />
        </Link>
        <Link href="/games">
          <StyledLink>Games</StyledLink>
        </Link>
        <Link href="/top-games">
          <StyledLink>Top Games</StyledLink>
        </Link>
        <Link href="/upload-prescription">
          <StyledLink>Upload prescription</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
    </StyledDiv>
);

export default Header;
