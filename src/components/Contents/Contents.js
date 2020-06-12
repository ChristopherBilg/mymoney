import React from 'react';
import { Card } from '@blueprintjs/core';

import './Contents.css';
import IncomeDisplayCard from '../IncomeDisplayCard/IncomeDisplayCard';
import ExpenseDisplayCard from '../ExpenseDisplayCard/ExpenseDisplayCard';

const Contents = () => (
  <>
    <div id='contents' />
    <Card>
      <h1>Welcome to mymoney - your personal finance dashboard!</h1>
    </Card>

    <IncomeDisplayCard />
    <ExpenseDisplayCard />
  </>
);

export default Contents;
