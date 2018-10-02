import * as actionTypes  from './actionTypes';
const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    topickList:[],
    articleList:[],
    recommerList:[],
    articlePage:1,
    showScroll:false
});
// immutable的set的方法会结合之前immutable对象的值
//和设置的值，返回一个全新的对象
const changeHomeDtat= (state,action) => {
    return state.merge({
        topickList:fromJS(action.topickList),
        articleList:fromJS(action.articleList),
        recommerList:fromJS(action.recommerList),
    });
};
//将新的数据插入到articleList里面
const addHomeList= (state,action) => {
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextpage
    });
};

export default  ( state = defaultState, action ) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeDtat (state,action)
        case actionTypes.ADD_HOME_LIST:
            return addHomeList (state,action)
        case actionTypes.TOGGLE_TOPSHOW:
            return state.set( 'showScroll',action.show);
        default:
            return state;
    }
    // if(action.type === actionTypes.CHANGE_LIST){
    //     return state.set('ListItem',action.data)
    // }
}
