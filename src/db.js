import Dexie from  'dexie';

export const db = new Dexie('riensave');
db.version(1).stores({
  incomes: '++id, name, parent, amount',
  expenses: '++id, name, parent',
  budgets: '++id, expense, amount, period',
})