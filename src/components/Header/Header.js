import React from 'react';
import {
  Navbar, Alignment, NavbarHeading, NavbarGroup, AnchorButton, Tooltip,
} from '@blueprintjs/core';

import { hoverOpenDelay, className } from '../../global/constants';

const Header = () => (
  <Navbar className={className} fixedToTop>
    <NavbarGroup align={Alignment.LEFT}>
      <Tooltip
        hoverOpenDelay={hoverOpenDelay}
        content='mymoney - your personal finance dashboard'
      >
        <NavbarHeading>mymoney</NavbarHeading>
      </Tooltip>
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
