import React, { useState, useEffect } from 'react';
import { Card } from '@blueprintjs/core';
import axios from 'axios';

import './IncomeDisplayCard.css';

const IncomeDisplayCard = () => {
  const [allIncome, setAllIncome] = useState({ list: [] });

  useEffect(() => {
    axios
      .get('http://localhost:3000/database/income')
      .then((data) => setAllIncome({ list: data.data }));
  }, []);

  return (
    <Card id='incomeDisplayCard'>
      <h1>Income</h1>
      {allIncome.list.map((singleIncome) => (
        <div>
          [{singleIncome.id}] ${singleIncome.amount}: {singleIncome.comment}
        </div>
      ))}
    </Card>
  );
};

export default IncomeDisplayCard;
