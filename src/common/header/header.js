import React,{Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators}  from './store';
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
        const { focused,list } =this.props;
        if (focused){
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwich>
                            换一批
                        </SearchInfoSwich>
                    </SearchInfoTitle>
                    <SerchDiv>
                        {
                            list.map((item) => {
                                return <SearchInfoItem  href='/' key={item} className='searcha'>
                                    {item}
                                </SearchInfoItem>
                            })
                        }
                    </SerchDiv>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render(){
        const { focused,handinputseach,handinputonBlur } = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/'/>
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
                                onFocus = {handinputseach}
                                onBlur = {handinputonBlur}
                            >
                            </NavSeach>
                        </CSSTransition>
                        <i className={focused? 'focused iconfont':'iconfont'}> &#xe638; </i>
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
const mapStateToProps = ( state ) => {
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','ListItem'])
    }
}
const MapDispatchToProps = ( dispatch ) => {
    return{
        handinputseach () {
            dispatch(actionCreators.getList());
            dispatch( actionCreators.searchFocus() );
        },
        handinputonBlur () {
            dispatch( actionCreators.searchBlur() );
        }
    }
}
export default connect( mapStateToProps,MapDispatchToProps )(Header);