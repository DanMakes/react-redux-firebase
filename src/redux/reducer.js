import { combineReducers } from "redux";
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer from '../ducks/auth'
import peopleReducer from '../ducks/people'

export default combineReducers({
  router: routerReducer,
  form: form,
  auth: authReducer,
  people: peopleReducer
});