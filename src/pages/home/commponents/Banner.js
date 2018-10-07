import React, {  Component } from 'react';

class Banner  extends  Component{
    render(){
        return(
            <div>
                <img  className='banner-img' alt='' src={require('../../statics/bj.jpg')} />
            </div>
        )
    }
}
export default Banner;