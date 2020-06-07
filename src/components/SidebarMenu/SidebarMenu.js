import React from 'react';
import PropType from 'prop-types';
import {
  Drawer, Position, Menu, MenuItem, MenuDivider,
} from '@blueprintjs/core';

const SidebarMenu = ({ isOpen }) => (
  <Drawer
    isOpen={isOpen}
    position={Position.LEFT}
    size={Drawer.SIZE_SMALL}
    title='mymoney'
    icon='menu-open'
  >
    <Menu>
      <MenuDivider title='Menu 1' />
      <MenuItem text='MenuItem 1.1' />
      <MenuItem text='MenuItem 1.2' />

      <MenuDivider title='Menu 2' />
      <MenuItem text='MenuItem 2.1' />
      <MenuItem text='MenuIteM 2.2' />

      <MenuDivider title='Menu 3' />
      <MenuItem text='MenuItem 3.1' />
      <MenuItem text='MenuItem 3.2' />

      <MenuDivider title='Menu 4' />
      <MenuItem text='MenuItem 4.1' />
      <MenuItem text='MenuItem 4.2' />
    </Menu>
  </Drawer>
);

SidebarMenu.propTypes = {
  isOpen: PropType.bool,
};

SidebarMenu.defaultProps = {
  isOpen: false,
};

export default SidebarMenu;
