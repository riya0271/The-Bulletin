import image from "../assets/Screenshot 2024-03-29 192144.png";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 ">
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="News"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text flex-grow-1">
          {description ? description.slice(0, 90) : "News not available"}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};
export default NewsItem;

