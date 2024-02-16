import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", border: "1px solid #dee2e6" }}>
      <img src={src} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="News Thumbnail" />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{title.slice(0, 50)}{title.length > 50 && '...'}</h5>
        <p className="card-text">{description ? `${description.slice(0, 90)}${description.length > 90 ? '...' : ''}` : "News is loading.."}</p>
        <a href={url} className="btn btn-primary" style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}>Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
