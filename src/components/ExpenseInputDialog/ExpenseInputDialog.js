import React, { useState } from 'react';
import PropType from 'prop-types';
import { Dialog, Button, NumericInput, InputGroup } from '@blueprintjs/core';
import axios from 'axios';

import { HOSTNAME_AND_PORT, API_ENDPOINTS } from '../../global/constants';

const ExpenseInputDialog = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState();
  const handleAmountChange = (valueN) => {
    const result = valueN.toFixed(2);
    setAmount(result);
  };

  const [comment, setComment] = useState();
  const handleCommentChange = (event) => {
    const commentString = event.target.value;
    setComment(commentString.substring(0, 30));
  };

  const handleSubmit = () => {
    axios.post(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_INCOME}`, {
      amount,
      comment,
    });
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      icon='bank-account'
      title='Add a one-time expense'
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
        value={comment}
        onChange={handleCommentChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Dialog>
  );
};

ExpenseInputDialog.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
};

export default ExpenseInputDialog;
