import * as actionTypes  from './actionTypes'
const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    focused:false,
});

export default  ( state = defaultState, action ) => {

    if (action.type === actionTypes.SEARCH_FOCUS){
        // immutable的set的方法会结合之前immutable对象的值
        //和设置的值，返回一个全新的对象
        return state.set('focused',true)
    }
    if (action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused',false)
    }

    return state;
}
