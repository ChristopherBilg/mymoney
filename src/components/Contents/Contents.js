import React, { useState } from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';

import './Contents.css';
import IncomeInputDialog from '../IncomeInputDialog/IncomeInputDialog';
import ExpenseInputDialog from '../ExpenseInputDialog/ExpenseInputDialog';

const Contents = () => {
  const [showIncomeInputDialog, setShowIncomeInputDialog] = useState(false);
  const handleIncomeDialogOpen = () => setShowIncomeInputDialog(true);
  const handleIncomeDialogClose = () => setShowIncomeInputDialog(false);

  const [showExpenseInputDialog, setShowExpenseInputDialog] = useState(false);
  const handleExpenseDialogOpen = () => setShowExpenseInputDialog(true);
  const handleExpenseialogClose = () => setShowExpenseInputDialog(false);

  return (
    <>
      <div id='contents' />
      <Card elevation={Elevation.THREE}>
        <h1>Welcome to mymoney!</h1>
        <p>mymoney - your personal finance dashboard</p>
        <Button onClick={handleIncomeDialogOpen}>Add Income</Button>
        <Button onClick={handleExpenseDialogOpen}>Add Expense</Button>
      </Card>
      <IncomeInputDialog
        isOpen={showIncomeInputDialog}
        onClose={handleIncomeDialogClose}
      />
      <ExpenseInputDialog
        isOpen={showExpenseInputDialog}
        onClose={handleExpenseialogClose}
      />
    </>
  );
};

export default Contents;
