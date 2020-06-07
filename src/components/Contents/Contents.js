import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';

import './Contents.css';

const Contents = () => (
  <Card id='contents' elevation={Elevation.THREE}>
    <h1>Welcome to mymoney!</h1>
    <p>mymoney - your personal finance dashboard</p>
    <Button>Submit</Button>
  </Card>
);

export default Contents;
