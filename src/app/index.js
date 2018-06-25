import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search_bar';
import VedioList from '../components/vedio_list';

const API_KEY = "AIzaSyAXdI6mjrUlYIi2TZhu4whhZDL73BZQTDg";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { videos : [] };

    YTSearch({
      key : API_KEY , term : 'Surfboard'}, (videos) => {
        this.setState({ videos });
      }); 
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VedioList videos={this.state.videos} />
      </div> );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
