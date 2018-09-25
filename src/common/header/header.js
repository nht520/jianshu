import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSeach,
    Sddition,
    Button,
    Searchapper
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
                       timeout={200}
                       classNames='slide'>
                       <NavSeach
                           onFocus = {props.handinputseach}
                           className={props.focused? 'focused':''}
                           onBlur = {props.handinputonBlur}>
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

const mapStateToProps = ( state ) =>{
    return{
        focused:state.focused
    }
}
const MapDispatchToProps = ( dispatch ) =>{
    return{
        handinputseach(){
            const action ={
                type:'search_focus'
            };
            dispatch(action)
        },
        handinputonBlur(){
            const action = {
                type:'search_blur'
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,MapDispatchToProps)(Header);