import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyByVUUlMRjVgGpeoJ8b_K58oP5jMoz7Cpk',
  authDomain: 'aboutme-cards.firebaseapp.com',
  projectId: 'aboutme-cards',
  storageBucket: 'aboutme-cards.appspot.com',
  messagingSenderId: '473432384750',
  appId: '1:473432384750:web:9bf8c35abec6bb23c6bfff',
  measurementId: 'G-ZJ8VYETE0Q',
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

var db = firebase.firestore();

export const addInfo = ({
  avatar,
  email,
  uid,
  username,
  nameUser,
  surname,
  about,
  social,
  name,
  lenguage,
  skills,
  exp,
  color,
}) => {
  return db
    .collection('users')
    .doc(uid)
    .set({
      avatar,
      email,
      uid,
      nameUser,
      username,
      name,
      surname,
      about,
      social,
      exp,
      lenguage,
      skills,
      color,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    });
};

export const fetchData = () => {
  return db
    .collection('users')
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          ...data,
          id,
        };
      });
    });
};

export default function editar(
  id,
  surname,
  name,
  lenguage,
  skills,
  exp,
  social,
  about,
  color
) {
  var washingtonRef = db.collection('users').doc(id);

  return washingtonRef
    .update({
      surname,
      name,
      lenguage,
      skills,
      exp,
      social,
      about,
      color,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
}

export const signOut = async () => {
  try {
    await firebase.auth().signOut();

    this.props.navigator.push({
      name: 'Login',
    });
  } catch (error) {
    console.log(error);
  }
};
