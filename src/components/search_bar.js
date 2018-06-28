import React from 'react';
//import ReactDOM from 'react-dom'; No Need

class searchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {term : ''};
    }
    render() {
    return (
        <div className="search-bar">
            
                <input  
                value ={ this.state.term } 
                onChange={event => this.onInputChange(event.target.value)} />
                
        </div> 
        );
    }

    onInputChange(term) 
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}
export default searchBar;