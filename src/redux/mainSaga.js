import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6071Saga from '../features/CalendarView6071/redux/sagas';
import EmailAuth6070Saga from '../features/EmailAuth6070/redux/sagas';
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
CalendarView6071Saga,
EmailAuth6070Saga,
EmailAuth6067Saga,
CalendarView6066Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}