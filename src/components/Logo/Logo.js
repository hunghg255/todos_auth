import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: var(--color-white);
    font-size: 1.2rem;
`;



const Logo = () => {
    return (
        <LogoWrapper>
            LOGO
        </LogoWrapper>
    )
}

export default Logo;
