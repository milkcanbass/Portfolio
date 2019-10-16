import {combineReducers} from 'redux'
import landingReducer from './landing/landing.reducer'

const rootReducers= combineReducers({
landing:landingReducer
})

export default rootReducers