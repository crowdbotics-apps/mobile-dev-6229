import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6070Reducer from '../features/EmailAuth6070/redux/reducers';
import EmailAuth6067Reducer from '../features/EmailAuth6067/redux/reducers';
import CalendarView6066Reducer from '../features/CalendarView6066/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6070: EmailAuth6070Reducer,
EmailAuth6067: EmailAuth6067Reducer,
CalendarView6066: CalendarView6066Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});