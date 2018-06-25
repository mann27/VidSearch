import React from 'react';
//import ReactDOM from 'react-dom'; No Need

class searchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {term : ''};
    }
    render() {
    return (
        <div>
            
                <input  
                value ={ this.state.term } 
                onChange={event => this.setState({ term : event.target.value })} />
                
        </div> 
        );
    }

}
export default searchBar;