import { useParams } from "react-router-dom";

const Characteristics = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is characteristics page of product { id }!!!</h1>
    </div>
  );
};

export default Characteristics;
