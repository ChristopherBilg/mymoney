import React from 'react';
import { Tooltip, AnchorButton } from '@blueprintjs/core';
import PropType from 'prop-types';

import { hoverOpenDelay } from '../../global/constants';

const HomeButton = ({ isText }) => (
  <Tooltip
    hoverOpenDelay={hoverOpenDelay}
    content='Go to the home page.'
  >
    <AnchorButton
      href='#'
      text={isText ? 'Home' : null}
      minimal
      rightIcon='home'
    />
  </Tooltip>
);

HomeButton.propTypes = {
  isText: PropType.bool,
};

HomeButton.defaultProps = {
  isText: false,
};

export default HomeButton;
