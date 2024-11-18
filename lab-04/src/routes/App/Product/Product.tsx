import { useParams, Link, Outlet } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="product-page">
      <h1>This is the product number { id }</h1>
      <nav>
        <Link to="characteristics">Characteristics</Link>
        <Link to="comments">Comments</Link>
        <Link to="questions">Questions</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Product;
