import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Topic from './commponents/Topic';
import List from './commponents/List';
import Recommer from './commponents/Recommer';
import Writer from './commponents/Writer';
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
class Home  extends  Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img  className='banner-img' alt='' src={require('../../statics/bj.jpg')} />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                     <Recommer/>
                     <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount (){
        axios.get('api/home.json')
            .then((res)=>{
                const result = res.data.data;
                const action = {
                    type:'change_home_data',
                    topickList: result.topickList,
                    articleList: result.articleList,
                    recommerList: result.recommerList,
                }
                this.props.changeHomeDate(action)
            })
    }

}
const mapDispatch = ( dispatch ) =>({
    changeHomeDate(action){
        dispatch(action);
    }
})
export default connect(null,mapDispatch) (Home);