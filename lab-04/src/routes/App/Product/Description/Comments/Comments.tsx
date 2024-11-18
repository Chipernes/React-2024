import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is comments page of product { id }!!!</h1>
    </div>
  );
};

export default Comments;
