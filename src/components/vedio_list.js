import React from 'react';

import VedioListItem from './vedio_list_item';

const videoList = (props) => {

    const VideoSelect = props.onVideoSelect;
    const videoItems = props.videos.map(  (video) => {
        return ( <VedioListItem 
        OnVideoClick = { VideoSelect }
        key={video.etag} 
        video={video}/> );
    }
    );

    return (
        <div className="vedio-list">
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
            </div>
    );
}

export default videoList; 