import React from 'react';

const VedioListItem = (props) => {

    const video = props.video;
    //console.log(video);
    const imgURL = video.snippet.thumbnails.default.url;
    return ( 
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgURL}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
    );
};

export default VedioListItem;