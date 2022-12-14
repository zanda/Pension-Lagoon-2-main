// @ts-nocheck
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore/lite';

//import { collection, getDocs } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAy2bYHVRmpZlNfTMtU9qVeTwdHJNNqoe4',
  authDomain: 'pension-ume.firebaseapp.com',
  projectId: 'pension-ume',
  storageBucket: 'pension-ume.appspot.com',
  messagingSenderId: '45977826806',
  appId: '1:45977826806:web:062e976bae76110fc7c3d7',
  measurementId: 'G-JT179G8TL1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getDataListFromFirebase = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  return querySnapshot;
};

export const addDataFromFirebase = async (collectionName: string, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getDataFromFirebase = async (collectionName) => {
  const db = getFirestore(app);

  const dataCol = collection(db, collectionName);
  const dataSnapshot = await getDocs(dataCol);
  const dataList = dataSnapshot.docs.map((doc) => doc.data());

  return dataList;
};
