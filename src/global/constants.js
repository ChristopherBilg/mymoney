import { Classes } from '@blueprintjs/core';

export const hoverOpenDelay = 1000;
export const className = Classes.DARK;

export const HOSTNAME_AND_PORT = 'http://localhost:3000';
export const API_ROUTERS = {
  DATABASE: '/database',
};
export const API_ENDPOINTS = {
  DATABASE_INCOME: `${API_ROUTERS.DATABASE}/income`,
  DATABASE_EXPENSE: `${API_ROUTERS.DATABASE}/expense`,
};
