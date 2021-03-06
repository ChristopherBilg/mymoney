import React from 'react';
import {
  Navbar,
  Alignment,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

import { className } from '../../global/constants';
import SidebarMenuButton from '../SidebarMenuButton/SidebarMenuButton';
import HomeButton from '../HomeButton/HomeButton';

const Navigation = () => (
  <Navbar className={className} fixedToTop>
    <NavbarGroup align={Alignment.LEFT}>
      <SidebarMenuButton />
      <NavbarHeading>mymoney</NavbarHeading>
    </NavbarGroup>

    <NavbarGroup align={Alignment.RIGHT}>
      <HomeButton />
    </NavbarGroup>
  </Navbar>
);

export default Navigation;
