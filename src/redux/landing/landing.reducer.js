import {TOGGLE_SIDEBAR} from './landing.types'

const INITIAL_STATE={
    sidebar: false,
    profile: "profile",
    headWrapper: "headerWrapperStart",
    load: true
}

const landingReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action;

    switch(type){
        case TOGGLE_SIDEBAR:
            return{
                ...state,
                sidebar:!state.sidebar
            }
        default:
            return state;
    }

}
export default landingReducer