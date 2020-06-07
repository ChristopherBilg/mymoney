import React from 'react';
import { Card, Elevation, Button} from '@blueprintjs/core';

import './Contents.css';

const Contents = () => (
  <div id='contents'>
    <Card interactive elevation={Elevation.THREE}>
      <h1>Welcome to mymoney!</h1>
      <p>mymoney - your personal finance dashboard</p>
      <Button>Submit</Button>
    </Card>
  </div>
);

export default Contents;
