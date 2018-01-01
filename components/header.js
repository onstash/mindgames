import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/games">
          <a style={linkStyle}>Games</a>
        </Link>
        <Link href="/top-games">
          <a style={linkStyle}>Top Games</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
