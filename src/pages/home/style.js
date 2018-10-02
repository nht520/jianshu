import styled from 'styled-components';
export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;
//Topic 的样式
export const TopicWrapper = styled.div`
   overflow:hidden;
   padding:20px 0 10px 0;
   margin-left:-15px;
   border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    padding-right:10px;
    font-size:12px;
    background:#f7f7f7;
    color:#000;
    margin-bottom:15px;
    border:1px solid #dcdcdc;
    border-radius：5px;
    margin-left:15px;
    .Topic-pic{
        display:block
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
//List
export const Listitem = styled.div`
     width:625px; 
     border-bottom: 1px solid #f0f0f0;
     overflow: hidden;
     padding: 15px 0 15px 0;
 `;
export const ListLeft = styled.div`
     width:500px; 
     float:left;
     line-height: 25px;
     overflow: hidden;
     .title{
        font-weight: bold;
        margin-bottom: 10px;
        font-size:18px;
     }
     .listp{
        color:#999;
     }
`;
export const ListRight = styled.div`
    overflow: hidden;
    width:125px;
    float:right;
    .pic{
        width:125px;
        height:100px;
    }
`;

//
export const RecommerWrapper = styled.div`
    margin:30px 0px;
    width:280px;
`;
export const RecommerItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl });
    background-size:contain;
`;
//
export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    height:82px;
    line-height:82px;
    border-radius:3px;
    text-align:center;
`;
//List
export  const  LodeMore =styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    border-radius:20px;
    margin:30px 0; 
    color:#fff;
    background:#a5a5a5;
    cursor:pointer;
`;
//返回顶部
export  const  BackTop =styled.div`
    position: fixed;
    width:60px;
    height:60px;
    bottom:30px;
    text-align: center;
    right:100px;
    font-size:12px;
    border:1px solid #ccc;
    line-height:60px;
`

