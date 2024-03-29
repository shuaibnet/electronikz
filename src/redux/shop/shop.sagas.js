import {takeEvery, call, put} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync() {
   yield console.log('I am fired');

   try{
   const collectionRef = firestore.collection('collections');
   const snapShot = yield collectionRef.get();
   const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
   yield put(fetchCollectionsSuccess(collectionsMap));
} catch(error) {
   yield put(fetchCollectionsFailure(error.message)) 
}

}

export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync
        );
}