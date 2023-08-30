import PropTypes from 'prop-types';

const TrendingVideo = (props) => {
  return (
    <div>
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">
          # {props.trendingRank} {props.title}
        </h5>
        <p>{props.desc}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.views} Views</li>
          <li className="list-group-item">{props.publishedOn}</li>
        </ul>
      </div>
    </div>
  );
};

TrendingVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  trendingRank: PropTypes.number,
  desc: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string
};

export default TrendingVideo;
