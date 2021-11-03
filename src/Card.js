import React from 'react';

class Card extends React.Component{
    render(){
        return(
        <div className='Card'>
            <img src={this.props.pic} alt='github profile'/>
            <div className='info'>
                <div className='name'>
                    {this.props.name}
                </div>
                <div className='login'>
                    {this.props.login}
                </div>
                <div className='URL'>
                    {this.props.url}
                </div>
            </div>
        </div>
        );
    }
}

export default Card