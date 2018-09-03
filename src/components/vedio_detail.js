import React from 'react';

const videoDetail = (props) => {
    // In react it renders first even if data is not loaded so always check;
    if(!props.video){
        return <div><h2>Aw Geez,Rick.. Looks like the page is LOADING...</h2></div>;
    }
    const video = props.video;

    const videoId = video.id.videoId;
    //const url = 'htttps://www.youtube.com/embed/' + videoId; Or can be done in below way
    const videourl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail-full">
        <div className="video-detail col-md-8">
        <div className="video-play">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-objects" src={videourl} frameBorder="0" allowFullScreen ></iframe>
            </div>
            </div>
            <div className="details">
                <div className="Title">{video.snippet.title}</div>
                <div className="Description">{video.snippet.description}</div>
            </div>
        </div>
        </div>
    );
};

export default videoDetail;
