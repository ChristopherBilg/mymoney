import React, { useState, useEffect } from 'react';
import { Card } from '@blueprintjs/core';
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

  useEffect(() => {
    getAndSetIncomeData();
    const interval = setInterval(() => getAndSetIncomeData(), 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card id='incomeDisplayCard'>
      <h1>Income</h1>
      {allIncome.list.map((singleIncome) => (
        <div key={singleIncome.id}>
          [{singleIncome.datetime}] ${singleIncome.amount}: {singleIncome.comment}
        </div>
      ))}
    </Card>
  );
};

export default IncomeDisplayCard;
