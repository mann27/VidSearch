import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from '../components/search_bar';

const API_KEY = "AIzaSyAXdI6mjrUlYIi2TZhu4whhZDL73BZQTDg";


const App = function () {
  return (
    <div>
      <SearchBar />
    </div> );
}

ReactDOM.render(<App />, document.querySelector('.container'))
