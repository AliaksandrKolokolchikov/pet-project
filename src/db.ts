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
  await db.add(STORE_NAME, user); // `db` is used here
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

export const updateUserPassword = async (email: string, password: string) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  const users = await store.getAll();

  const user = users.find((user: { email: string }) => user.email === email);

  if (!user) {
    throw new Error('User not found');
  }

  user.password = password;

  await store.put(user);
  await tx.done;

  return user;
};

export const updateUserEmail = async (
  currentEmail: string | null,
  email: string,
) => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const users = await store.getAll();

    const user = users.find(
      (user: { email: string }) => user.email === currentEmail,
    );

    if (!user) {
      new Error('User not found');
    }

    const emailExists = users.some((u: { email: string }) => u.email === email);
    if (emailExists) {
      new Error('Email is already in use');
    }

    user.email = email;

    await store.put(user);
    await tx.done;

    console.log('Email updated successfully');
    return user;
  } catch (error) {
    console.error('Failed to update email:', error);
    throw error;
  }
};

// export const updateUserEmail = async (
//   currentEmail: string | null,
//   email: string,
// ) => {
//   console.log(currentEmail);
//   console.log(email);
//   try {
//     if (!currentEmail) {
//       throw new Error('Current email is not provided');
//     }
//     if (!email || email.trim() === '') {
//       throw new Error('New email is invalid');
//     }
//
//     const db = await initDB();
//     const tx = db.transaction(STORE_NAME, 'readwrite');
//     const store = tx.objectStore(STORE_NAME);
//
//     const users = await store.getAll();
//
//     const user = users.find(
//       (user: { email: string }) => user.email === currentEmail,
//     );
//
//     if (!user) {
//       throw new Error('User not found');
//     }
//
//     // Проверяем, существует ли уже новый email
//     const emailExists = users.some((u: { email: string }) => u.email === email);
//     if (emailExists) {
//       throw new Error('Email is already in use');
//     }
//
//     // Обновляем email пользователя
//     user.email = email;
//
//     // Сохраняем изменения
//     await store.put(user);
//     await tx.done;
//
//     console.log('Email updated successfully');
//     return user;
//   } catch (error) {
//     console.error('Failed to update email:', error);
//     throw error; // Перебрасываем ошибку, чтобы она была обработана
//   }
// };
