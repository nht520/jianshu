import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import {
    Listitem,
    ListLeft,
    LodeMore,
    ListRight,
} from '../style'

class List  extends  Component{
    render(){
        const { list,getMoreList,page } = this.props;
        return(
          <div>
              {
                  list.map((item) => (
                      <Listitem key={ item.get('id') }>
                          <ListLeft>
                              <h3 className='title'>{ item.get('title') }</h3>
                              <p className='listp'> { item.get('decs') }</p>
                          </ListLeft>
                          <ListRight>
                              <img
                                  className='pic'
                                  src={ item.get('imgUrl') }
                                  alt=''
                              />
                          </ListRight>
                      </Listitem>
                  ))
              }
              <LodeMore onClick={() => getMoreList(page)}>
                  显示更多
              </LodeMore>
          </div>
        )
    }
}
const mapState = ( state ) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List);