import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



export const Nav = styled.div`
    background-color:  rgba(240, 240, 240, 0);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  
  max-width: 1200px;
`;
export const NavLogo = styled(LinkR)`
    width: 80%;   
    color: ${({ theme }) => theme.text_primary};
    margin-left:25px; 
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 640px) {
      padding: 0 0px;
  }
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;  
    margin-left:500px;

    align-items: right;
    justify-content:right;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;


export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.1); /* Increase the size on hover (adjust as needed) */
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;