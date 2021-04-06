import React, { Component } from 'react';
import SearchResults from './SearchResults'


class Search extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            search: ''
        };

        this.handleSearchChanged = this.handleSearchChanged.bind(this);
    }

    handleSearchChanged = (event) => {
        this.setState({search: event.target.value});
    }
    
    render() {

        const { stations, onResultClick } = this.props;

        return (
            <div className='Search'>
                <input 
                    className='SearchBox' 
                    value={this.state.search} 
                    onChange={this.handleSearchChanged}
                    placeholder='Search'
                />
                
                <SearchResults stations={stations} search={this.state.search} onResultClick={onResultClick} />
            </div>
        )
    }
}

export default Search