import { combineReducers } from "redux";
import calculator from './calculator';

//combineReducersは複数のReducerをまとめてexortするときに使う
const reducer = combineReducers({ calculator });

export default reducer;