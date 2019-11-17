import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import PaymentsReducer from './reducer_payments';
import TeamsReducer from './reducer_teams';
import TournamentsReducer from './reducer_tournaments';
import ApiState from './apiState';

const rootReducer = combineReducers({
  userData: UserReducer,
  paymentsData: PaymentsReducer,
  teamsData: TeamsReducer,
  tournamentsData: TournamentsReducer,
  apiState: ApiState
});

export default rootReducer;