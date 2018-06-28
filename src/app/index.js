import React from 'react';
import ReactDOM from 'react-dom';

// to make our search less lagging and searching everytime it updated we use lodash installed through npm.
import _ from 'lodash';
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
    this.videoSearch('');
    }
  videoSearch(tearm) {
    YTSearch({
      key : API_KEY , term : tearm }, (videos) => {
        this.setState({ videos : videos,
          selectedVideo :  videos[0]  
      });
    });
  }
  render(){
    // this runs only once every 300 ms.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300 );
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VedioDetail video={this.state.selectedVideo} />
        <VedioList 
        onVideoSelect = {(selectedVideo) => this.setState({selectedVideo}) }
        videos={this.state.videos} />
        
        
      </div> );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
