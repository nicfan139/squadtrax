import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { routes } from './routes';
import {
  StyledSidebar,
  StyledLogoContainer,
  StyledLogo,
  StyledLogoText,
  StyledTab,
  StyledIcon,
  StyledLabel,
  StyledBottomLink,
} from './Sidebar.styled';
import Logo from 'assets/logo.svg';

const Sidebar:FC = () => {
  const router = useRouter();
  return (
    <StyledSidebar>
      <StyledLogoContainer>
        <StyledLogo src={Logo} alt="Squadtrax logo" />
        <StyledLogoText>SQUADTRAX</StyledLogoText>
      </StyledLogoContainer>

      {routes.map((item, index) => {
          return (
            <Link key={index} href={item.route} >
              <StyledTab href={item.route} active={router.pathname === item.route}>
                <StyledIcon icon={item.icon} />
                <StyledLabel>{item.label}</StyledLabel>
              </StyledTab>
            </Link>
          )
        }
      )}

      <StyledBottomLink
        href="https://github.com/nicfan139"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Nic Fan
      </StyledBottomLink>
    </StyledSidebar>
  )
}

export default Sidebar;