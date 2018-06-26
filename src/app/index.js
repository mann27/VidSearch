import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search_bar';
import VedioList from '../components/vedio_list';
import VedioDetail from '../components/vedio_detail';

const API_KEY = "AIzaSyAXdI6mjrUlYIi2TZhu4whhZDL73BZQTDg";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos : [],
      selectedVideo : null
    };

    YTSearch({
      key : API_KEY , term : ''}, (videos) => {
        this.setState({ videos , selectedVideo :  videos[0]  } );
        
      }); 
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VedioDetail video={this.state.selectedVideo} />
        <VedioList videos={this.state.videos} />
        
        
      </div> );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
