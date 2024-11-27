import { useParams } from "react-router-dom";
import products from "../../../../../storage/products.json";

const Comments = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      { product ?
        <div className="product-page max-w-3xl mx-auto py-8">
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Comments for {product.name}</h2>
            <ul className="mt-4 space-y-4">
              {product.comments.map((comment, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded">
                  <strong>{comment.user}</strong>: {comment.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        : <p>Comments not found</p>
      }
    </>
  );
};

export default Comments;
