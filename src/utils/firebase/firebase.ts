import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User
 } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore';

import { Category } from '../../store/categories/CategoryTypes';

//import EVARs
const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Set up Google Auth config
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account"
});

//create instance of Auth
//auth object persists during refreshes
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//To use Redirect method to sign-in instead of Pop-up (I will not use this)
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
}


//Create db conn
export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string, objectsToAdd: T[]
): Promise<void> => {

  const collectionRef = collection(db, collectionKey);

  //Instantiate batch instance
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {

    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  //'categories' is the collectionKey (hardcoded)
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  //getDocs async fetches docs we want
  const querySnapshot = await getDocs(q);

  //access document snapshots (array of data)
  //and convert into object of data
  //as objects have faster lookup -> optimization
  return querySnapshot.docs.map(
    docSnapshot => docSnapshot.data() as Category
    );
}

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

//get Auth data and store into Firestore
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {

  if (!userAuth) { return; }

  //references collection of DB for specific UID
  const userDocRef = doc(db, 'users', userAuth.uid);

  //creates temp snapshot of user
  const userSnapshot = await getDoc(userDocRef)

  //check if userSnapshot exists in db
  //if not, setDoc(userDocRef)
  //with specific attributes wanted from snapshot
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error);
    };
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;

};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)

};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);

};

export const signOutUser = async () => {
  await signOut(auth);
};

//onAuthStateChange returns an (observer) listener
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {

  //invokes every time a user authenticates in/out
  //is an open-listener so needs to be unmounted
  //thus returns a function to unmount
  //has 3rd & 4th params -> errorCallback, completeCallback
  onAuthStateChanged(auth, callback);
};

//Ep 174
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
      );
  })
}