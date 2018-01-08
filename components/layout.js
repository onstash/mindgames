import Header from './header';

import styled, { css } from 'styled-components';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376
};
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc
}, {});

const LayoutContainer = styled.div`
    border: 1px solid #EEE;
    padding: 20px;
    font-family: Roboto;
    background-color: #c6d4df
`;

const Layout = (props) => (
    <LayoutContainer>
        <Header />
        {props.children}
    </LayoutContainer>
);

export default Layout;
