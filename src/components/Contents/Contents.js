import React, { useState } from 'react';
import { Card, Button } from '@blueprintjs/core';

import './Contents.css';
import IncomeInputDialog from '../IncomeInputDialog/IncomeInputDialog';
import ExpenseInputDialog from '../ExpenseInputDialog/ExpenseInputDialog';
import IncomeDisplayCard from '../IncomeDisplayCard/IncomeDisplayCard';
import ExpenseDisplayCard from '../ExpenseDisplayCard/ExpenseDisplayCard';

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
      <Card>
        <h1>Welcome to mymoney - your personal finance dashboard!</h1>
        <Button onClick={handleIncomeDialogOpen}>Add Income</Button>
        <Button onClick={handleExpenseDialogOpen}>Add Expense</Button>
      </Card>

      <IncomeDisplayCard />
      <ExpenseDisplayCard />

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
