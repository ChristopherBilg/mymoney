import { openSync, writeFileSync } from 'fs';

import { databaseJSONFilename } from './constants';

let databaseInMemory;
export const initializeDatabaseInMemory = () => {
  if (databaseInMemory) return;

  const fileData = openSync(databaseJSONFilename, 'a') || undefined;
  const jsonData = JSON.parse(fileData) || undefined;

  databaseInMemory = jsonData;
};

export const getDatabaseInMemory = () => databaseInMemory;

export const saveDatabaseToDisk = () => {
  writeFileSync(databaseJSONFilename, databaseInMemory);
};

export const getValueFromKey = (key) => databaseInMemory[key] || undefined;
export const setKeyValuePair = (key, value) => {
  if (key && value) databaseInMemory[key] = value;
};
export const deleteKeyValuePair = (key) => {
  if (key) delete databaseInMemory[key];
};
