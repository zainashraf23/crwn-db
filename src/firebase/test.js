import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('QlRpIx5PJkx4senNwTPg').collection('cartItems').doc('NhoVeYPBuWMgGNkw4Mk5');
firestore.doc('/users/QlRpIx5PJkx4senNwTPg/cartItems/NhoVeYPBuWMgGNkw4Mk5');
firestore.collection('/users/QlRpIx5PJkx4senNwTPg/cartItems');