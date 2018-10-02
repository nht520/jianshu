import axios from 'axios';
import * as actionTypes  from './actionTypes';
import { fromJS } from 'immutable';
const changHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topickList: result.topickList,
    articleList: result.articleList,
    recommerList: result.recommerList,
})

 export const getHomeTnfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
            const result = res.data.data;
            dispatch(changHomeData (result));
        })
     }
 }
export const getMoreList = (page) =>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page)
            .then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page+1));
            // console.log(res)
        })
    }
}
//加载更多
const addHomeList = (list,nextpage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list:fromJS(list),
    nextpage
})

export  const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOPSHOW,
    show
})