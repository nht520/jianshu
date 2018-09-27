import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  * as actionCreators  from './store/actionCreators';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSeach,
    Sddition,
    Button,
    Searchapper,
} from './style';
//无状态组件
const Header = ( props ) => {
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
                       in={props.focused}
                       timeout={ 200 }
                       classNames='slide'>
                       <NavSeach
                           className={props.focused? 'focused':''}
                           onFocus = {props.handinputseach}
                           onBlur = {props.handinputonBlur}
                       >
                       </NavSeach>
                   </CSSTransition>
                   <i className={props.focused? 'focused iconfont':'iconfont'}> &#xe638; </i>
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
//state 表示store里面的所有数据
const mapStateToProps = ( state ) => {
    return{
        focused:state.header.focused,
    }
}
const MapDispatchToProps = ( dispatch ) => {
    return{
        handinputseach () {
            dispatch( actionCreators.searchFocus() );
        },
        handinputonBlur () {
            dispatch( actionCreators.searchBlur() );
        }
    }
}
export default connect( mapStateToProps,MapDispatchToProps )(Header);