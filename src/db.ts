import { openDB } from 'idb';

const DB_NAME = 'myAppDB';
const STORE_NAME = 'users';

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
};

export const addUser = async (user: { email: string; password: string }) => {
  const db = await initDB();
  await db.add(STORE_NAME, user);
};

export const getUserByCredentials = async (email: string, password: string) => {
  const db = await initDB();
  const users = await db.getAll(STORE_NAME);
  return users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password,
  );
};
