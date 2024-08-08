import { openDB } from 'idb';
import { ProductCart } from './types/types.tsx';

const DB_NAME = 'myAppDB';
const STORE_NAME = 'users';
const CART_NAME = 'carts';

const initDB = async () => {
  return openDB(DB_NAME, 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(CART_NAME)) {
        db.createObjectStore(CART_NAME, {
          keyPath: 'title',
        });
      }
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

export const addToCart = async (products: ProductCart[]) => {
  try {
    const db = await initDB();
    const tx = db.transaction(CART_NAME, 'readwrite');
    const store = tx.objectStore(CART_NAME);
    for (const product of products) {
      await store.put(product);
    }
    await tx.done;
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const getUserByCredentials = async (email: string, password: string) => {
  const db = await initDB();
  const users = await db.getAll(STORE_NAME);
  return users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password,
  );
};
