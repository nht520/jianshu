import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Topic from './commponents/Topic';
import List from './commponents/List';
import Recommer from './commponents/Recommer';
import Writer from './commponents/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import Banner from "./commponents/Banner";
class Home  extends  Component{
    handleScrolltop(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Banner/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                     <Recommer/>
                     <Writer/>
                </HomeRight>
                { this.props.showScroll?<BackTop onClick={this.handleScrolltop}>返回顶部 </BackTop>:null }

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeDate();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.props.changeScrollTopshow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopshow)
    }
}

const mapState = (state) => ({
    showScroll:state.getIn(['hoem','showScroll'])
})

const mapDispatch = ( dispatch ) =>({
    changeHomeDate() {
        dispatch(actionCreators.getHomeTnfo());
    },
    changeScrollTopshow(){
        if ( document.documentElement.scrollTop>100 ){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch) (Home);