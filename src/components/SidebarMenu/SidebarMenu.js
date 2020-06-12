import React, { useState } from 'react';
import PropType from 'prop-types';
import {
  Drawer,
  Position,
  Menu,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core';
import IncomeInputDialog from '../IncomeInputDialog/IncomeInputDialog';
import ExpenseInputDialog from '../ExpenseInputDialog/ExpenseInputDialog';

const SidebarMenu = ({ isOpen, onClose }) => {
  const [showIncomeInputDialog, setShowIncomeInputDialog] = useState(false);
  const handleIncomeDialogOpen = () => setShowIncomeInputDialog(true);
  const handleIncomeDialogClose = () => setShowIncomeInputDialog(false);

  const [showExpenseInputDialog, setShowExpenseInputDialog] = useState(false);
  const handleExpenseDialogOpen = () => setShowExpenseInputDialog(true);
  const handleExpenseialogClose = () => setShowExpenseInputDialog(false);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position={Position.LEFT}
      size={Drawer.SIZE_SMALL}
      autoFocus
      enforceFocus
      canOutsideClickClose
      canEscapeKeyClose
      title='mymoney'
      icon='menu-open'
    >
      <Menu>
        <MenuDivider title='Income & Expenses' />
        <MenuItem text='Add Income' onClick={handleIncomeDialogOpen} />
        <MenuItem text='Add Expense' onClick={handleExpenseDialogOpen} />
      </Menu>

      <IncomeInputDialog
        isOpen={showIncomeInputDialog}
        onClose={handleIncomeDialogClose}
      />
      <ExpenseInputDialog
        isOpen={showExpenseInputDialog}
        onClose={handleExpenseialogClose}
      />
    </Drawer>
  );
};

SidebarMenu.propTypes = {
  isOpen: PropType.bool,
  onClose: PropType.func.isRequired,
};

SidebarMenu.defaultProps = {
  isOpen: false,
};

export default SidebarMenu;
