import React from 'react';
import {
  Navbar, Alignment, NavbarHeading, NavbarGroup, Colors, NavbarDivider, Button,
} from '@blueprintjs/core';

const Header = () => (
  <Navbar color={Colors.BLUE3} fixedToTop>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>mymoney</NavbarHeading>
      <NavbarDivider />
      <Button intent='success' text='Click me!' />
    </NavbarGroup>
  </Navbar>
);

export default Header;
