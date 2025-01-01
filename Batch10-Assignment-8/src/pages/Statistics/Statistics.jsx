import { useContext, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ProductContext } from "../../layout/Root/MainRoot";

const Statistics = () => {
  const { products } = useContext(ProductContext);
  useEffect(() => {
    document.title = "Statistics | GadgetHeaven ";
  }, []);
  console.log(products);

  return (
    <>
      <div>
        <Header />
        <div className="bg-purple-600 text-white py-5  rounded-xl">
          <Heading
            title={"Statistics"}
            p={
              "Statistics analyze data patterns, offering insights and trends, helping industries make informed, data-driven decisions effectively."
            }
          />
        </div>
        <div className="flex justify-between items-center mt-10 ">
          <h3 className="font-bold text-2xl">Statistics</h3>
        </div>
        <div className="h-[500px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart width={48} height={48} data={products}>
              <Bar dataKey="price" fill="#9333ea" />
              <Tooltip />
              <XAxis dataKey={"rating"} />
              <YAxis dataKey={"price"} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
