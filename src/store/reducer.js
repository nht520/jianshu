import { combineReducers } from 'redux-immutable';
//引用header的数据 as 取别名
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
    header:headerReducer
})

export default reducer;