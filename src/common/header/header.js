import React, { Component } from 'react';
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

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
        this.handinputseach=this.handinputseach.bind(this)
        this.handinputonBlur=this.handinputonBlur.bind(this)

    }
    render() {
        return (
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
                            in={this.state.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSeach
                                onFocus = {this.handinputseach}
                                className={this.state.focused? 'focused':''}
                                onBlur = {this.handinputonBlur}
                            ></NavSeach>
                        </CSSTransition>
                        <i className={this.state.focused? 'focused iconfont':'iconfont'}> &#xe638; </i>
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

    handinputseach(){
        this.setState({
            focused:true
        })
    }
    handinputonBlur(){
        this.setState({
            focused:false
        })
    }
}

export default Header;