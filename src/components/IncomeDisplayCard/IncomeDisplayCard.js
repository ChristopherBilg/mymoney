import React, { useState, useEffect } from 'react';
import { Card, Button } from '@blueprintjs/core';
import axios from 'axios';

import './IncomeDisplayCard.css';
import { HOSTNAME_AND_PORT, API_ENDPOINTS } from '../../global/constants';

const IncomeDisplayCard = () => {
  const [allIncome, setAllIncome] = useState({ list: [] });
  const getAndSetIncomeData = () => {
    axios
      .get(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_INCOME}`)
      .then((data) => setAllIncome({ list: data.data }));
  };

  const handleClick = (id) => {
    axios
      .delete(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_INCOME}/${id}`)
      .then(() => getAndSetIncomeData());
  };

  useEffect(() => {
    getAndSetIncomeData();
    const interval = setInterval(() => getAndSetIncomeData(), 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card id='incomeDisplayCard'>
      <h1>Income</h1>
      {
        allIncome.list.map((singleIncome) => (
          <Button
            key={singleIncome.id}
            onClick={() => handleClick(singleIncome.id)}
            text={`[${singleIncome.datetime}] $${singleIncome.amount}: ${singleIncome.comment}`}
          />
        ))
      }
    </Card>
  );
};

export default IncomeDisplayCard;
