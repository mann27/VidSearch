import React from 'react';

import VedioListItem from './vedio_list_item';

const videoList = (props) => {
    const videoItems = props.videos.map(  (video) => {
        return <VedioListItem video={video}/>;
    }
    );

    return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
    );
}

export default videoList;