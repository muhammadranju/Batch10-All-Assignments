import { useContext, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { ProductContext } from "../../layout/Root/MainRoot";
import Carts from "../../components/Carts/Carts";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const History = () => {
  const { historyArray } = useContext(ProductContext);
  const totalPrice = historyArray.reduce((accumulator, product) => {
    return parseInt(accumulator + product.price);
  }, 0);
  console.log(historyArray);
  useEffect(() => {
    document.title = "History | GadgetHeaven ";
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="bg-purple-600 text-white py-5  rounded-xl">
          <Heading
            title={"History"}
            p={
              "History records past events and cultures, preserving lessons, shaping identity, and guiding future decisions for societies worldwide."
            }
          />
        </div>

        <div className="flex justify-between items-center mt-10 ">
          <h3 className="font-bold lg:text-2xl">Your Purchase History:</h3>

          <div className="space-x-3 font-bold lg:text-xl">
            <span className="">Total cost: $({totalPrice})</span>
            <span>Count:({historyArray.length})</span>
          </div>
        </div>
        <div className="h-40">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart
              width={500}
              height={400}
              data={historyArray}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"rating"} />
              <YAxis dataKey={"price"} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#9333ea"
                fill="#c084fc"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {historyArray.map((cart) => (
          <Carts cart={cart} key={cart.product_id} isRemove={true} />
        ))}
      </div>
    </>
  );
};

export default History;
