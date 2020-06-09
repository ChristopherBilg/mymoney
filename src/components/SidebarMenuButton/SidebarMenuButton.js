import React, { useState } from 'react';
import { Button, Tooltip } from '@blueprintjs/core';

import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { hoverOpenDelay } from '../../global/constants';

const SidebarMenuButton = () => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  const handleOpen = () => setShowSidebarMenu(true);
  const handleClose = () => setShowSidebarMenu(false);

  return (
    <>
      <Tooltip hoverOpenDelay={hoverOpenDelay} content='Open the sidebar menu.'>
        <Button minimal icon='menu' onClick={handleOpen} />
      </Tooltip>
      <SidebarMenu isOpen={showSidebarMenu} onClose={handleClose} />
    </>
  );
};

export default SidebarMenuButton;
