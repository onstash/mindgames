import Link from 'next/link';

import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-left: -10px;
`;

const StyledLink = styled.a`
    cursor: pointer;
    padding: 10px;
    color: #777;
    transition: color 300ms ease-in-out;
    &:hover {
        color: #333;
    }
`;

const Header = () => (
    <StyledDiv>
        <Link href="/">
          <StyledLink>Home</StyledLink>
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
