/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { rem, transparentize } from 'polished'
import { Link, NavLink, useLocation } from 'react-router-dom'

import ConnectButton from './ConnectButton'
import Logo from '../Logo'

import { Heading } from '../Elements'

const NavContainer = styled(Heading)`
  position: relative;
  z-index: 1;

  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.5rem;

  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 520px) {
    z-index: 2;
  }
`

const StyledNavLink = styled<any>(NavLink)`
  font-size: ${rem(16)};
  font-weight: 500;
  text-decoration: none;

  padding: ${rem(4)} ${rem(12)};

  color: ${(props) => transparentize(0.5, props.theme.textColor)};

  transition: padding 0.2s ease;

  &::after {
    content: '';
    margin: 0 auto;
    display: block;
    position: relative;
    bottom: -${rem(6)};
    opacity: 0;

    height: ${rem(1)};
    background-color: ${(props) => transparentize(0.7, props.theme.textColor)};
    width: 0;

    transition: all 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${(props) =>
    props.selected
      ? css`
          color: ${transparentize(0.3, props.theme.textColor)};

          &::after {
            width: 80%;
            opacity: 1;
          }
        `
      : css`
          &:hover {
            color: ${transparentize(0.7, props.theme.textColor)};

            &::after {
              width: 40%;
              opacity: 0.4;
            }
          }
        `}
`

const NavSection = styled.div`
  display: flex;
  align-items: center;
`

const Left = styled(NavSection)`
  flex: 1 0 33%;

  @media only screen and (max-width: 520px) {
    flex: 1 1 20%;
  }
`
const Center = styled(NavSection)`
  flex: 1 0 33%;

  justify-content: center;

  @media only screen and (max-width: 520px) {
    flex: 1 1 60%;
  }
`
const Right = styled(NavSection)`
  flex: 1 0 33%;
  justify-content: flex-end;

  @media only screen and (max-width: 520px) {
    flex: 1 1 20%;
  }
`

function NavBar() {
  const { pathname } = useLocation()
  console.log(pathname)
  const isHome = (pathname === '/')
  const isAbout = pathname.includes('about')
  const isMechanics = pathname.includes('mechanics')
  const isPresale = pathname.includes('presale')
  return (
    <NavContainer>
      <Left>
        <Link to="/">
          <Logo />
        </Link>
      </Left>
      <Center>
        <StyledNavLink to="/" selected={isHome}>
          Dashboard
        </StyledNavLink>
        <StyledNavLink to="/presale" selected={isPresale}>
          Presale
        </StyledNavLink>
        <StyledNavLink to="/about" selected={isAbout}>
          About
        </StyledNavLink>
        <StyledNavLink to="/mechanics" selected={isMechanics}>
          Mechanics
        </StyledNavLink>

      </Center>

      <Right>
        <ConnectButton />
      </Right>
    </NavContainer>
  )
}

export default NavBar
