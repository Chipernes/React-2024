import {useParams} from "react-router-dom";

const Questions = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is questions page of product { id }!!!</h1>
    </div>
  );
};

export default Questions;
