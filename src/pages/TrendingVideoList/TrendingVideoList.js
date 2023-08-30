import { Component } from 'react';
import TrendingVideo from './TrendingVideo';

class TrendingVideoList extends Component {
  state = {
    videos: [
      {
        id: 1,
        trendingRank: 1,
        title: 'Man Vs Wild',
        thumbnailUrl: 'https://placehold.co/280x200',
        desc: 'A Wild Adventure show in Discovery Channel',
        views: '700K',
        publishedOn: '1 week ago'
      },
      {
        id: 2,
        trendingRank: 2,
        title: 'Planet Earth II',
        thumbnailUrl: 'https://placehold.co/280x200',
        desc: 'A show by David Attenborough on BBC Earth Channel',
        views: '900K',
        publishedOn: '2 weeks ago'
      }
    ],
    videoResolution: '4K'
  };

  handleVideoResolution = () => {
    this.setState({
      videoResolution: '1080p'
    });
  };

  render() {
    return (
      <div className="row">
        <p>
          videoResolution : {this.state.videoResolution}{' '}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.handleVideoResolution}
          >
            Change Resolution
          </button>
        </p>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              {this.state.videos?.map((video) => {
                return (
                  <TrendingVideo
                    key={video.id}
                    trendingRank={video.trendingRank}
                    title={video.title}
                    thumbnailUrl={video.thumbnailUrl}
                    desc={video.desc}
                    views={video.views}
                    publishedOn={video.publishedOn}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingVideoList;
// class component
