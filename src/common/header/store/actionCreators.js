import * as actionTypes  from './actionTypes'
import { fromJS } from 'immutable';
import axios from 'axios'
export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
});
export const ChangePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
});

//请求的数据
const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});
//点击请求数据-*
export const getList = () => {
    return(dispatch) =>{
        axios.get('/api/List.json')
            .then((res) =>{
                const data = res.data;
                dispatch(changeList(data.data));
            }).catch(( err )=>{
                console.log(err)
        })
    }
}