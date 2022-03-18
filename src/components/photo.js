const PhotoContainer = ({ photo }) => {
  return (
    <div>
      <p>{photo.author}</p>
      <img src={photo.download_url} alt="lorem picsum random" />
    </div>
  );
};

export default PhotoContainer;