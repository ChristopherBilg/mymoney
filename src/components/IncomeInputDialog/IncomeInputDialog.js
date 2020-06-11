import React, { useState } from 'react';
import PropType from 'prop-types';
import { Dialog, Button, NumericInput, InputGroup } from '@blueprintjs/core';
import axios from 'axios';

const IncomeInputDialog = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState();
  const handleAmountChange = (valueN) => {
    const result = valueN.toFixed(2);
    setAmount(result);
  };

  const [comment, setComment] = useState();
  const handleCommentChange = (event) => {
    const commentString = event.target.value;
    setComment(commentString);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/database/income', { amount, comment });
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      icon='bank-account'
      title='Add a one-time income'
    >
      <NumericInput
        fill
        large
        leftIcon='dollar'
        majorStepSize={100}
        minorStepSize={0.1}
        min={0.01}
        max={1000000}
        placeholder='Amount...'
        value={amount}
        onValueChange={handleAmountChange}
      />
      <InputGroup
        fill
        large
        leftIcon='comment'
        placeholder='Comments...'
        maxLength={30}
        value={comment}
        onChange={handleCommentChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Dialog>
  );
};

IncomeInputDialog.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
};

export default IncomeInputDialog;
