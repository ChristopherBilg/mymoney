import React from 'react';
import {
  Navbar, Alignment, NavbarGroup, AnchorButton, Tooltip,
} from '@blueprintjs/core';

import { hoverOpenDelay, className } from '../../global/constants';
import SidebarMenuButton from '../SidebarMenuButton/SidebarMenuButton';

const Header = () => (
  <Navbar className={className} fixedToTop>
    <NavbarGroup align={Alignment.LEFT}>
      <SidebarMenuButton />
    </NavbarGroup>

    <NavbarGroup align={Alignment.RIGHT}>
      <Tooltip
        hoverOpenDelay={hoverOpenDelay}
        content='Go to the home page.'
      >
        <AnchorButton
          href='#'
          text='Home'
          minimal
          rightIcon='home'
        />
      </Tooltip>
    </NavbarGroup>
  </Navbar>
);

export default Header;
