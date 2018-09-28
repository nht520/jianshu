import * as actionTypes  from './actionTypes'
const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    focused:false,
<<<<<<< HEAD
    mouseIn:false,
=======
>>>>>>> f7daeef0eb9f01b4a84d830eccf2ad5dcf425096
    ListItem:[],
    page:1,
    totalPage:1,
});
// immutable的set的方法会结合之前immutable对象的值
//和设置的值，返回一个全新的对象
export default  ( state = defaultState, action ) => {
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
<<<<<<< HEAD
            return state.merge({
                ListItem:action.data,
                totalPage:action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
=======
            return state.set('ListItem',action.data)
                        .set('totalPage',action.totalPage);
>>>>>>> f7daeef0eb9f01b4a84d830eccf2ad5dcf425096
        default:
            return state;

        // if(action.type === actionTypes.CHANGE_LIST){
        //     return state.set('ListItem',action.data)
        // }
    }
}
