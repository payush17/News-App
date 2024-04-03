import image from '../assets/default_image.jpeg'
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img src={src?src:image} style={{ height: "200px", width: "330px" }} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title.slice(0, 50)}</h5>
        <p class="card-text"> {description ? description.slice(0, 90) : "Stay informed with our latest news article, delivering timely updates on current events and significant developments from around the world. From politics to technology, business to entertainment, our comprehensive coverage ensures you're always in the know".slice(0,90)}</p>
        <a href={url} class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default Newsitem;