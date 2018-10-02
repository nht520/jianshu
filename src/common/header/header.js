import React,{Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSeach,
    Sddition,
    Button,
    Searchapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwich,
    SerchDiv,
    SearchInfoItem
} from './style';
class Header extends Component{
    getListshow (){
        const { focused, list, page,totalPage,mouseIn,handleMousEnter,handleMousLeave,handChangePage } =this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if (focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={ handleMousEnter }
                    onMouseLeave={ handleMousLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwich
                            onClick={()=>handChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe6b6;</i>
                            换一批
                        </SearchInfoSwich>
                    </SearchInfoTitle>
                    <SerchDiv>
                        { pageList }
                    </SerchDiv>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render(){
        const { focused,handinputseach,handinputonBlur,list } = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont"> &#xe636; </i>
                    </NavItem>
                    <Searchapper>
                        <CSSTransition
                            in={focused}
                            timeout={ 200 }
                            classNames='slide'>
                            <NavSeach
                                className={focused? 'focused':''}
                                onFocus = {()=> handinputseach(list)}
                                onBlur = {handinputonBlur}
                            >
                            </NavSeach>
                        </CSSTransition>
                        <i className={focused? 'focused iconfont zoom':'iconfont zoom'}> &#xe638; </i>
                        {this.getListshow()}
                    </Searchapper>
                </Nav>
                <Sddition>
                    <Button className='writting'>
                        <i className="iconfont"> &#xe615; </i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Sddition>
            </HeaderWrapper>
        )
    }
}
//无状态组件
// const Header = ( props ) => {
//    return(
//
//    )
// }
//state 表示store里面的所有数据
const mapState = ( state ) => {
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','ListItem']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
}
const MapDispatch = (dispatch) => {
    return {
        handinputseach(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            // dispatch( actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handinputonBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMousEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMousLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}
export default connect( mapState,MapDispatch )(Header);