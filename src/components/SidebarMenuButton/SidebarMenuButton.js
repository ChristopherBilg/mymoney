import React from 'react';
import { Button, Tooltip } from '@blueprintjs/core';

import { hoverOpenDelay } from '../../global/constants';

const SidebarMenuButton = () => (
  <Tooltip
    hoverOpenDelay={hoverOpenDelay}
    content='Open the sidebar menu.'
  >
    <Button
      minimal
      icon='menu'
    />
  </Tooltip>
);

export default SidebarMenuButton;
