import React, { Component } from 'react';
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
            focused:true
        }
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
                        <NavSeach
                            className={this.state.focused? 'focused':''}
                        >
                        </NavSeach>
                        <i className="iconfont"> &#xe638; </i>
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

export default Header;