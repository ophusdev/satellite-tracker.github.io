import React, { Component } from 'react';


class Info extends Component {
    
    render() {
        const { totalObjects } = this.props;
        return (
            <div className='Info'>
                <h1>Satellite tracker</h1>
                <p>Total objects: {totalObjects}</p>
            </div>
        )
    }
}

export default Info