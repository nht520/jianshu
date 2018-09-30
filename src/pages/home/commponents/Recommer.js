import React, {  Component } from 'react';
import { connect } from 'react-redux'
import {
    RecommerWrapper,
    RecommerItem
} from '../style'
class Recommer  extends  Component{
    render(){
        const { list } = this.props;
        return(
            <RecommerWrapper>
                {
                    list.map((item) => (
                        <RecommerItem
                            key={item.get('id')}
                            imgUrl={ item.get('imgUrl') }
                        >
                        </RecommerItem>
                    ))
                }
            </RecommerWrapper>
        )
    }
}
const mapState = ( state ) => ({
    list:state.getIn(['home','recommerList'])
});
export default connect(mapState,null)(Recommer);