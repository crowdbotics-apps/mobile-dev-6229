import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6067Saga from '../features/EmailAuth6067/redux/sagas';
import CalendarView6066Saga from '../features/CalendarView6066/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6067Saga,
CalendarView6066Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}