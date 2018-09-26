import * as actionTypes  from './actionTypes'
//defaultState放store默认数据
const defaultState = {
    focused:false,
};

export default  ( state = defaultState, action ) => {

    if (action.type === actionTypes.SEARCH_FOCUS){
        return{
            focused: true
        }
    }
    if (action.type === actionTypes.SEARCH_BLUR){
        return{
            focused: false
        }
    }

    return state;
}
