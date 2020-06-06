import React from 'react';
import {
  Navbar, Alignment, NavbarHeading, NavbarGroup, NavbarDivider, Classes, AnchorButton,
} from '@blueprintjs/core';

const Header = () => (
  <Navbar className={Classes.DARK}>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Blueprint Sandbox</NavbarHeading>
      <NavbarDivider />
      <AnchorButton
        href='http://blueprintjs.com/docs/v2/'
        text='Docs'
        target='_blank'
        minimal
        rightIcon='share'
      />
      <AnchorButton
        href='http://github.com/palantir/blueprint'
        text='Github'
        target='_blank'
        minimal
        rightIcon='code'
      />
    </NavbarGroup>
  </Navbar>
);

export default Header;
