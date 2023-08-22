import PropTypes from 'prop-types';

const LatestVideo = (props) => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/280x200"
        className="card-img-top"
        alt="placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p>{props.videoDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.views} Views</li>
          <li className="list-group-item">{props.publishedOn}</li>
        </ul>
      </div>
    </div>
  );
};
LatestVideo.propTypes = {
  title: PropTypes.string,
  videoDescription: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string
};

export default LatestVideo;
