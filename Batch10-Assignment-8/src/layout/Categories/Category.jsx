import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  return <></>;
};

export default Category;
