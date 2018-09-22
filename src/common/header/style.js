//styled-components 只引用自己需要的样式
import  styled  from 'styled-components';
import logopic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:58px;
    background-color: #fff;
    border-bottom:1px solid  #f0f0f0;
    line-height:58px;
    padding: 0% 12%;
`;
export const Logo = styled.a`
    width:8%;
    height:58px;
    background:url(${logopic});
    background-size:contain;
    float:left;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;
export const Nav = styled.div`
    width:70%;
    height:100%;
    float:left;
`;
export const NavItem = styled.div`
    line-height:58px;
    padding:0px 15px;
    color:#333;
    //div 内部class的样式
    &.active{
     color:#ea6f5a;
    };
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
`;
export const Searchapper = styled.div`
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:12px
        width:30px;
        line-height:30px;
        border-radius:15px;
        // background:#f00;
        // color:#fff;
        text-align: center;
    }
`;

export const NavSeach = styled.input.attrs({
    placeholder:'搜索'
})`
    width:240px;
    height:36px;
    padding: 0 30px 0 20px;
    box-sizing:border-box;
    border-radius:19px;
    background:#eee;
    border:none;
    font-size: 14px;
    margin-left:20px;
    outline: none;
    color:#777;
    &::placeholder{
        color:#999;
    }
`;
export const Sddition = styled.div`
    width:22%;
    float:left;
    height:58px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
     border-radius:19px;
     margin-right:20px;
     padding:0px 20px;
     margin-top:9px;
     font-size:14px;
     &.reg{
        cursor: pointer;
        color: #ea6f5a;
        border: 1px solid rgba(236,97,73,.7);
     }
     &.reg:hover{
      transition: 1s;
        background-color: #ffaa9c;
        color:#fff;
        border: 1px solid rgba(236,97,73,.7);
     }     
     &.writting{
         cursor: pointer;
        background-color: #ea6f5a;
        color:#fff;
     }
     &.writting:hover{
         transition: 1s;
        background-color: #ffaa9c;
        color:#fff;
     }
     
     
`;

