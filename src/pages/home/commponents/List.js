import React, {  Component } from 'react';
import { connect } from 'react-redux';
import {
    Listitem,
    ListLeft,
    ListRight,

} from '../style'

class List  extends  Component{
    render(){
        const { list } = this.props;
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
          </div>
        )
    }
}
const mapState = ( state ) => ({
    list:state.getIn(['home','articleList'])
});
export default connect(mapState,null)(List);