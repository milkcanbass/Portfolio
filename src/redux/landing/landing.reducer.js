import {OPEN_SIDEBAR,CLOSE_SIDEBAR  } from './landing.types'

const INITIAL_STATE={
    sidebar: false,
    profile: "profile",
    headWrapper: "headerWrapperStart",
    load: true
}

const landingReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action;

    switch(type){
        case OPEN_SIDEBAR:
            return{
                ...state,
                sidebar:true
            };
         case CLOSE_SIDEBAR:
                return{
                    ...state,
                    sidebar:false
                };
        default:
            return state;
    }

}
export default landingReducer