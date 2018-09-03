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
            <div className="heading">
            Youtube-Search
                </div>
                <center className="input-area">
                <input className="input-box"
                value ={ this.state.term }
                placeholder="Search"
                onChange={event => this.onInputChange(event.target.value)} />
                </center>
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
