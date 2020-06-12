import React, { useState } from 'react';
import PropType from 'prop-types';
import { Dialog, Button, NumericInput, InputGroup } from '@blueprintjs/core';
import axios from 'axios';
import { DateInput } from '@blueprintjs/datetime';

import { HOSTNAME_AND_PORT, API_ENDPOINTS } from '../../global/constants';

const IncomeInputDialog = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState();
  const handleAmountChange = (valueN) => {
    const result = valueN.toFixed(2);
    setAmount(result);
  };

  const [comment, setComment] = useState();
  const handleCommentChange = (event) => {
    const commentString = event.target.value;
    setComment(commentString.substring(0, 50));
  };

  const [datetime, setDatetime] = useState(new Date());
  const handleDatetimeChange = (date) => setDatetime(date);

  const handleSubmit = () => {
    axios.post(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_INCOME}`, {
      amount,
      comment,
      datetime,
    });
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
        placeholder='Amount...'
        value={amount}
        onValueChange={handleAmountChange}
        majorStepSize={100}
        minorStepSize={0.1}
      />
      <InputGroup
        fill
        large
        leftIcon='comment'
        placeholder='Comments...'
        value={comment}
        onChange={handleCommentChange}
      />
      <DateInput
        fill
        showActionsBar
        shortcuts
        highlightCurrentDay
        closeOnSelection={false}
        value={datetime}
        onChange={handleDatetimeChange}
        formatDate={(date) => date.toLocaleString()}
        parseDate={(str) => new Date(str)}
        placeholder='M/D/YYYY'
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
